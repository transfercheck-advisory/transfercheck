import { 
  UserProfile, 
  EligibilityResult, 
  EligibilityDetail, 
  UserCourse 
} from './types';

export interface DbCourseRequirement {
  id: string;
  canonicalName: string;
  category: string;
  requiredForEligibility: boolean;
  manualReviewRequired: boolean;
  logicGroup: string | null;
  officialSourceQuote?: string | null;
  sourceUrl?: string | null;
}

export interface DbEnglishRequirement {
  id: string;
  waiverType: string;
  minimumGrade?: string | null;
  rawQuote?: string | null;
  verified: boolean;
}

export interface DbMajor {
  id: string;
  name: string;
  gpaRequirement: number | null;
  courseRequirements: DbCourseRequirement[];
}

export interface DbUniversity {
  id: string;
  name: string;
  majors: DbMajor[];
  englishRequirements: DbEnglishRequirement[];
}

export interface DbRawCourseMapping {
  universityId: string;
  localCourseCode: string;
  canonicalName: string;
}

/**
 * Translates completed local courses to canonical course names based on mapping rules.
 */
export function translateLocalCourses(
  completedLocalCourses: UserCourse[],
  mappings: DbRawCourseMapping[]
): Set<string> {
  const completedCanonical = new Set<string>();
  
  for (const course of completedLocalCourses) {
    // Find a matching local mapping for the specific university
    const mapping = mappings.find(
      m => m.universityId === course.universityId && 
           m.localCourseCode.trim().toUpperCase() === course.localCode.trim().toUpperCase()
    );
    if (mapping) {
      completedCanonical.add(mapping.canonicalName);
    }
  }
  
  return completedCanonical;
}

/**
 * Checks transfer eligibility for a given user profile against target universities and majors.
 */
export function evaluateEligibility(
  userProfile: UserProfile,
  targets: DbUniversity[],
  mappings: DbRawCourseMapping[]
): EligibilityResult[] {
  const completedCanonical = translateLocalCourses(userProfile.completedLocalCourses, mappings);
  const results: EligibilityResult[] = [];

  for (const uni of targets) {
    for (const major of uni.majors) {
      const details: EligibilityDetail[] = [];
      const satisfiedCourses: string[] = [];
      const missingCourses: string[] = [];
      let manualReviewRequired = false;

      // 1. GPA Check
      const gpaRequired = major.gpaRequirement;
      const gpaSatisfied = gpaRequired === null || userProfile.gpa >= gpaRequired;

      // 2. English Requirements Check
      let englishSatisfied = true;
      if (uni.englishRequirements.length > 0) {
        // If there are English requirements, user must satisfy at least one waiver/grade requirement
        let metAnyRequirement = false;
        
        for (const req of uni.englishRequirements) {
          // Check waiver match
          if (userProfile.completedWaivers && userProfile.completedWaivers.includes(req.waiverType)) {
            metAnyRequirement = true;
            break;
          }
          
          // Check test scores based on waiver types (e.g., TOEFL, IELTS, SAT_ENGLISH)
          if (req.waiverType === 'TOEFL' && userProfile.englishScores?.toefl && req.minimumGrade) {
            const minScore = parseFloat(req.minimumGrade);
            if (!isNaN(minScore) && userProfile.englishScores.toefl >= minScore) {
              metAnyRequirement = true;
              break;
            }
          }
          if (req.waiverType === 'IELTS' && userProfile.englishScores?.ielts && req.minimumGrade) {
            const minScore = parseFloat(req.minimumGrade);
            if (!isNaN(minScore) && userProfile.englishScores.ielts >= minScore) {
              metAnyRequirement = true;
              break;
            }
          }
        }
        englishSatisfied = metAnyRequirement;
      }

      // 3. Course Requirements Check
      // Separate course requirements by logic groups (for OR conditions) and standalone
      const standaloneReqs = major.courseRequirements.filter(r => !r.logicGroup);
      const groupedReqs: Record<string, DbCourseRequirement[]> = {};
      
      for (const req of major.courseRequirements) {
        if (req.logicGroup) {
          if (!groupedReqs[req.logicGroup]) {
            groupedReqs[req.logicGroup] = [];
          }
          groupedReqs[req.logicGroup].push(req);
        }
      }

      // Process Standalone requirements
      for (const req of standaloneReqs) {
        const isSatisfied = completedCanonical.has(req.canonicalName);
        
        if (req.manualReviewRequired) {
          manualReviewRequired = true;
        }

        if (isSatisfied) {
          satisfiedCourses.push(req.canonicalName);
          details.push({
            canonicalName: req.canonicalName,
            category: req.category,
            status: 'SATISFIED',
            reason: `이수한 교과목(${req.canonicalName})이 매핑 조건에 부합합니다.`
          });
        } else {
          if (req.requiredForEligibility) {
            missingCourses.push(req.canonicalName);
            details.push({
              canonicalName: req.canonicalName,
              category: req.category,
              status: req.manualReviewRequired ? 'MANUAL_REVIEW' : 'MISSING',
              reason: req.manualReviewRequired 
                ? `수동 확인 필요: 필수 이수 과목(${req.canonicalName})의 이수 여부가 명확하지 않습니다.`
                : `필수 과목 미이수: (${req.canonicalName}) 과목 이수가 필요합니다.`
            });
          } else {
            details.push({
              canonicalName: req.canonicalName,
              category: req.category,
              status: 'MISSING',
              reason: `권장 과목 미이수: (${req.canonicalName}) 과목은 필수 조건이 아닙니다.`
            });
          }
        }
      }

      // Process Grouped requirements (OR conditions within the group)
      for (const [groupName, reqs] of Object.entries(groupedReqs)) {
        // Find which items in the group the user has satisfied
        const satisfiedInGroup = reqs.filter(req => completedCanonical.has(req.canonicalName));
        const groupManualReview = reqs.some(req => req.manualReviewRequired);
        
        if (groupManualReview) {
          manualReviewRequired = true;
        }

        const isGroupRequired = reqs.some(req => req.requiredForEligibility);

        if (satisfiedInGroup.length > 0) {
          // At least one course in the group is completed
          for (const req of reqs) {
            const isCompleted = completedCanonical.has(req.canonicalName);
            if (isCompleted) {
              satisfiedCourses.push(req.canonicalName);
              details.push({
                canonicalName: req.canonicalName,
                category: req.category,
                status: 'SATISFIED',
                reason: `선택 그룹(${groupName}) 중 (${req.canonicalName}) 과목을 이수하여 조건이 충족되었습니다.`
              });
            } else {
              details.push({
                canonicalName: req.canonicalName,
                category: req.category,
                status: 'SATISFIED', // Entire group is satisfied
                reason: `선택 그룹(${groupName})의 다른 과목이 이수되어 면제되었습니다.`
              });
            }
          }
        } else {
          // None of the courses in the group are completed
          if (isGroupRequired) {
            // Group options are added to missing courses
            const optionNames = reqs.map(r => r.canonicalName).join(' 또는 ');
            for (const req of reqs) {
              missingCourses.push(req.canonicalName);
              details.push({
                canonicalName: req.canonicalName,
                category: req.category,
                status: req.manualReviewRequired ? 'MANUAL_REVIEW' : 'MISSING',
                reason: req.manualReviewRequired
                  ? `수동 확인 필요: 선택 그룹(${groupName}) [${optionNames}] 중 하나를 이수해야 합니다.`
                  : `필수 선택 누락: 선택 그룹(${groupName}) [${optionNames}] 중 최소 하나의 이수가 필요합니다.`
              });
            }
          } else {
            // Optional group
            const optionNames = reqs.map(r => r.canonicalName).join(' 또는 ');
            for (const req of reqs) {
              details.push({
                canonicalName: req.canonicalName,
                category: req.category,
                status: 'MISSING',
                reason: `권장 선택 누락: 선택 그룹(${groupName}) [${optionNames}] 중 이수한 과목이 없습니다.`
              });
            }
          }
        }
      }

      // Final Eligibility Decision
      // Eligible if: GPA matches, English matches, and no *required* missing courses are present
      // Note: Grouped course options are added to missingCourses above. If any is missing,
      // the group is missing. But wait! For logic groups, we shouldn't fail if at least one was satisfied.
      // In the loop above, if satisfiedInGroup.length > 0, we did NOT add any of them to missingCourses.
      // If satisfiedInGroup.length === 0 and group is required, we added all option canonical names to missingCourses.
      // So checking `missingCourses.length === 0` correctly flags lack of completion.
      const coursesEligible = missingCourses.filter(mc => {
        // filter down to only courses that are strictly required for eligibility
        const req = major.courseRequirements.find(r => r.canonicalName === mc);
        return req ? req.requiredForEligibility : false;
      }).length === 0;

      const isEligible = gpaSatisfied && englishSatisfied && coursesEligible;

      results.push({
        universityId: uni.id,
        universityName: uni.name,
        majorId: major.id,
        majorName: major.name,
        isEligible,
        gpaSatisfied,
        englishSatisfied,
        gpaRequired,
        gpaActual: userProfile.gpa,
        satisfiedRequirementsCount: satisfiedCourses.length,
        totalRequirementsCount: major.courseRequirements.length,
        satisfiedCourses,
        missingCourses: Array.from(new Set(missingCourses)),
        manualReviewRequired,
        details
      });
    }
  }

  return results;
}
