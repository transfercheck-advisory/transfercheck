import { evaluateEligibility, DbUniversity, DbRawCourseMapping } from './algorithms/matching';
import { generateRoadmap } from './algorithms/scheduler';
import { UserProfile } from './algorithms/types';

// ============================================================================
// 1. MOCK DATABASE SEEDING
// ============================================================================

const MOCK_UNIVERSITIES: DbUniversity[] = [
  {
    id: 'uni_ucb',
    name: 'UC Berkeley',
    englishRequirements: [
      {
        id: 'eng_ielts',
        waiverType: 'IELTS',
        minimumGrade: '7.0',
        verified: true
      },
      {
        id: 'eng_toefl',
        waiverType: 'TOEFL',
        minimumGrade: '100',
        verified: true
      },
      {
        id: 'eng_hs_waiver',
        waiverType: 'US_HIGH_SCHOOL',
        verified: true
      }
    ],
    majors: [
      {
        id: 'major_ucb_me',
        name: 'Mechanical Engineering',
        gpaRequirement: 3.5,
        courseRequirements: [
          // Mathematics
          { id: 'c1', canonicalName: 'calculus_1', category: 'MATHEMATICS', requiredForEligibility: true, manualReviewRequired: false, logicGroup: null },
          { id: 'c2', canonicalName: 'calculus_2', category: 'MATHEMATICS', requiredForEligibility: true, manualReviewRequired: false, logicGroup: null },
          { id: 'c3', canonicalName: 'calculus_3', category: 'MATHEMATICS', requiredForEligibility: true, manualReviewRequired: false, logicGroup: null },
          // OR Group: Must take Linear Algebra OR Differential Equations for eligibility
          { id: 'c4', canonicalName: 'linear_algebra', category: 'MATHEMATICS', requiredForEligibility: true, manualReviewRequired: false, logicGroup: 'MATH_OR_GROUP' },
          { id: 'c5', canonicalName: 'differential_equations', category: 'MATHEMATICS', requiredForEligibility: true, manualReviewRequired: false, logicGroup: 'MATH_OR_GROUP' },
          
          // Physics (separated lecture and lab - RULE 3)
          { id: 'p1_lec', canonicalName: 'physics_1_lecture', category: 'PHYSICS', requiredForEligibility: true, manualReviewRequired: false, logicGroup: null },
          { id: 'p1_lab', canonicalName: 'physics_1_lab', category: 'PHYSICS', requiredForEligibility: true, manualReviewRequired: false, logicGroup: null },
          { id: 'p2_lec', canonicalName: 'physics_2_lecture', category: 'PHYSICS', requiredForEligibility: true, manualReviewRequired: false, logicGroup: null },
          { id: 'p2_lab', canonicalName: 'physics_2_lab', category: 'PHYSICS', requiredForEligibility: true, manualReviewRequired: false, logicGroup: null },
          
          // Chemistry (optional recommendation)
          { id: 'ch1_lec', canonicalName: 'general_chemistry_1_lecture', category: 'CHEMISTRY', requiredForEligibility: false, manualReviewRequired: false, logicGroup: null },
          
          // English (ambiguous requirements - Rule 2)
          { id: 'e1', canonicalName: 'english_composition_1', category: 'ENGLISH/COMM', requiredForEligibility: true, manualReviewRequired: true, logicGroup: null }
        ]
      }
    ]
  }
];

const MOCK_RAW_MAPPINGS: DbRawCourseMapping[] = [
  { universityId: 'local_cc', localCourseCode: 'MATH 1A', canonicalName: 'calculus_1' },
  { universityId: 'local_cc', localCourseCode: 'MATH 1B', canonicalName: 'calculus_2' },
  { universityId: 'local_cc', localCourseCode: 'MATH 53', canonicalName: 'calculus_3' },
  { universityId: 'local_cc', localCourseCode: 'MATH 54', canonicalName: 'linear_algebra' },
  { universityId: 'local_cc', localCourseCode: 'PHYS 7A', canonicalName: 'physics_1_lecture' },
  { universityId: 'local_cc', localCourseCode: 'PHYS 7AL', canonicalName: 'physics_1_lab' },
  { universityId: 'local_cc', localCourseCode: 'ENGL 1A', canonicalName: 'english_composition_1' }
];

// ============================================================================
// 2. TEST CASE EXECUTION
// ============================================================================

function runTests() {
  console.log("=========================================================");
  console.log("       STARTING BACKEND ENGINE VERIFICATION TESTS        ");
  console.log("=========================================================\n");

  // User Profile 1: Mostly complete but missing some courses. Meets GPA & English SAT/TOEFL waiver.
  const userProfile: UserProfile = {
    gpa: 3.65,
    completedLocalCourses: [
      { localCode: 'MATH 1A', universityId: 'local_cc' },
      { localCode: 'MATH 1B', universityId: 'local_cc' },
      { localCode: 'PHYS 7A', universityId: 'local_cc' },
      { localCode: 'PHYS 7AL', universityId: 'local_cc' },
      { localCode: 'ENGL 1A', universityId: 'local_cc' }
    ],
    englishScores: {
      toefl: 105
    },
    completedWaivers: ['US_HIGH_SCHOOL']
  };

  console.log("--- TEST CASE 1: [Pillar 1] Eligibility Check ---");
  const matchingResults = evaluateEligibility(userProfile, MOCK_UNIVERSITIES, MOCK_RAW_MAPPINGS);
  
  const result = matchingResults[0];
  console.log(`대상 학교/학과: ${result.universityName} - ${result.majorName}`);
  console.log(`GPA 검증 만족 여부: ${result.gpaSatisfied ? "PASS" : "FAIL"} (요구치: ${result.gpaRequired}, 획득치: ${result.gpaActual})`);
  console.log(`영어 요건 만족 여부: ${result.englishSatisfied ? "PASS" : "FAIL"}`);
  console.log(`종합 지원 자격 만족 여부: ${result.isEligible ? "PASS (지원 가능)" : "FAIL (지원 자격 미달)"}`);
  console.log(`수동 검증 필요 여부 (Rule 2): ${result.manualReviewRequired ? "⚠️ YES (에너지/영어 과목 모호성 있음)" : "NO"}`);
  
  console.log("\n이수 완료 교과목 (Canonical):", result.satisfiedCourses);
  console.log("미이수 필수 교과목 (Canonical):", result.missingCourses);

  console.log("\n세부 세션 매칭 로그:");
  result.details.forEach(d => {
    const statusSymbol = d.status === 'SATISFIED' ? '✅' : d.status === 'MANUAL_REVIEW' ? '⚠️' : '❌';
    console.log(`  ${statusSymbol} [${d.category}] ${d.canonicalName}: ${d.reason}`);
  });

  console.log("\n---------------------------------------------------------");
  console.log("--- TEST CASE 2: [Pillar 3] Course Scheduler Roadmap ---");
  
  // We take the missing courses of User 1 and plan their semesters.
  // The missing courses are: calculus_3, linear_algebra or differential_equations, physics_2_lecture, physics_2_lab, general_chemistry_1_lecture.
  // Let's add them to the missing list.
  const missingCourses = result.missingCourses;
  // Let's also say the user has completed calculus_1, calculus_2, physics_1_lecture, physics_1_lab, english_composition_1
  const completedCanonical = ['calculus_1', 'calculus_2', 'physics_1_lecture', 'physics_1_lab', 'english_composition_1'];
  
  console.log("이수 완료 과목:", completedCanonical);
  console.log("학기 배정 대상 과목 (미이수 과목 + 의존 관계 추가):", missingCourses);
  
  const scheduleResult = generateRoadmap(missingCourses, completedCanonical, 2); // 2 courses max per semester to show sequencing
  
  console.log("\n생성된 학기별 로드맵 (최대 이수 제한: 2과목):");
  scheduleResult.roadmap.forEach(sem => {
    console.log(`  [학기 ${sem.semesterNumber}] : ${sem.courses.join(', ')}`);
  });
  
  if (scheduleResult.unscheduledCourses.length > 0) {
    console.log("⚠️ 배정하지 못한 과목 (순환 참조 오류):", scheduleResult.unscheduledCourses);
  } else {
    console.log("✅ 성공적으로 모든 미이수 과목이 Prerequisite 체인에 맞춰 스케줄링되었습니다.");
  }
  
  console.log("\n=========================================================");
  console.log("             VERIFICATION TESTS COMPLETED                ");
  console.log("=========================================================");
}

runTests();
