from typing import List, Dict, Any, Optional, Set

class UserCourse:
    def __init__(self, local_code: str, university_id: str):
        self.local_code = local_code
        self.university_id = university_id

class UserProfile:
    def __init__(
        self,
        gpa: float,
        completed_local_courses: List[UserCourse],
        english_scores: Optional[Dict[str, float]] = None,
        completed_waivers: Optional[List[str]] = None
    ):
        self.gpa = gpa
        self.completed_local_courses = completed_local_courses
        self.english_scores = english_scores or {}
        self.completed_waivers = completed_waivers or []

class DbCourseRequirement:
    def __init__(
        self,
        id: str,
        canonical_name: str,
        category: str,
        required_for_eligibility: bool,
        manual_review_required: bool,
        logic_group: Optional[str] = None
    ):
        self.id = id
        self.canonical_name = canonical_name
        self.category = category
        self.required_for_eligibility = required_for_eligibility
        self.manual_review_required = manual_review_required
        self.logic_group = logic_group

class DbEnglishRequirement:
    def __init__(
        self,
        id: str,
        waiver_type: str,
        minimum_grade: Optional[str] = None,
        verified: bool = False
    ):
        self.id = id
        self.waiver_type = waiver_type
        self.minimum_grade = minimum_grade
        self.verified = verified

class DbMajor:
    def __init__(
        self,
        id: str,
        name: str,
        gpa_requirement: Optional[float],
        course_requirements: List[DbCourseRequirement]
    ):
        self.id = id
        self.name = name
        self.gpa_requirement = gpa_requirement
        self.course_requirements = course_requirements

class DbUniversity:
    def __init__(
        self,
        id: str,
        name: str,
        majors: List[DbMajor],
        english_requirements: List[DbEnglishRequirement]
    ):
        self.id = id
        self.name = name
        self.majors = majors
        self.english_requirements = english_requirements

class DbRawCourseMapping:
    def __init__(self, university_id: str, local_course_code: str, canonical_name: str):
        self.university_id = university_id
        self.local_course_code = local_course_code
        self.canonical_name = canonical_name

def translate_local_courses(
    completed_local_courses: List[UserCourse],
    mappings: List[DbRawCourseMapping]
) -> Set[str]:
    completed_canonical = set()
    for course in completed_local_courses:
        for mapping in mappings:
            if (mapping.university_id == course.university_id and 
                mapping.local_course_code.strip().upper() == course.local_code.strip().upper()):
                completed_canonical.add(mapping.canonical_name)
                break
    return completed_canonical

def evaluate_eligibility(
    user_profile: UserProfile,
    targets: List[DbUniversity],
    mappings: List[DbRawCourseMapping]
) -> List[Dict[str, Any]]:
    completed_canonical = translate_local_courses(user_profile.completed_local_courses, mappings)
    results = []

    for uni in targets:
        for major in uni.majors:
            details = []
            satisfied_courses = []
            missing_courses = []
            manual_review_required = False

            # 1. GPA Check
            gpa_required = major.gpa_requirement
            gpa_satisfied = gpa_required is None or user_profile.gpa >= gpa_required

            # 2. English Requirements Check
            english_satisfied = True
            if len(uni.english_requirements) > 0:
                met_any = False
                for req in uni.english_requirements:
                    if req.waiver_type in user_profile.completed_waivers:
                        met_any = True
                        break
                    
                    if req.waiver_type == 'TOEFL' and 'toefl' in user_profile.english_scores and req.minimum_grade:
                        try:
                            min_score = float(req.minimum_grade)
                            if user_profile.english_scores['toefl'] >= min_score:
                                met_any = True
                                break
                        except ValueError:
                            pass
                    
                    if req.waiver_type == 'IELTS' and 'ielts' in user_profile.english_scores and req.minimum_grade:
                        try:
                            min_score = float(req.minimum_grade)
                            if user_profile.english_scores['ielts'] >= min_score:
                                met_any = True
                                break
                        except ValueError:
                            pass
                english_satisfied = met_any

            # 3. Course Requirements Check
            standalone_reqs = [r for r in major.course_requirements if not r.logic_group]
            grouped_reqs = {}
            for r in major.course_requirements:
                if r.logic_group:
                    grouped_reqs.setdefault(r.logic_group, []).append(r)

            # Process Standalone
            for req in standalone_reqs:
                is_satisfied = req.canonical_name in completed_canonical
                if req.manual_review_required:
                    manual_review_required = True

                if is_satisfied:
                    satisfied_courses.append(req.canonical_name)
                    details.append({
                        'canonicalName': req.canonical_name,
                        'category': req.category,
                        'status': 'SATISFIED',
                        'reason': f"이수한 교과목({req.canonical_name})이 매핑 조건에 부합합니다."
                    })
                else:
                    if req.required_for_eligibility:
                        missing_courses.append(req.canonical_name)
                        details.append({
                            'canonicalName': req.canonical_name,
                            'category': req.category,
                            'status': 'MANUAL_REVIEW' if req.manual_review_required else 'MISSING',
                            'reason': f"수동 확인 필요: 필수 이수 과목({req.canonical_name})의 이수 여부가 명확하지 않습니다." if req.manual_review_required else f"필수 과목 미이수: ({req.canonical_name}) 과목 이수가 필요합니다."
                        })
                    else:
                        details.append({
                            'canonicalName': req.canonical_name,
                            'category': req.category,
                            'status': 'MISSING',
                            'reason': f"권장 과목 미이수: ({req.canonical_name}) 과목은 필수 조건이 아닙니다."
                        })

            # Process Grouped (OR conditions)
            for group_name, reqs in grouped_reqs.items():
                satisfied_in_group = [req for req in reqs if req.canonical_name in completed_canonical]
                group_manual = any(req.manual_review_required for req in reqs)
                if group_manual:
                    manual_review_required = True
                
                is_group_required = any(req.required_for_eligibility for req in reqs)

                if len(satisfied_in_group) > 0:
                    for req in reqs:
                        is_completed = req.canonical_name in completed_canonical
                        if is_completed:
                            satisfied_courses.append(req.canonical_name)
                            details.append({
                                'canonicalName': req.canonical_name,
                                'category': req.category,
                                'status': 'SATISFIED',
                                'reason': f"선택 그룹({group_name}) 중 ({req.canonical_name}) 과목을 이수하여 조건이 충족되었습니다."
                            })
                        else:
                            details.append({
                                'canonicalName': req.canonical_name,
                                'category': req.category,
                                'status': 'SATISFIED',
                                'reason': f"선택 그룹({group_name})의 다른 과목이 이수되어 면제되었습니다."
                            })
                else:
                    if is_group_required:
                        option_names = " 또는 ".join(r.canonical_name for r in reqs)
                        for req in reqs:
                            missing_courses.append(req.canonical_name)
                            details.append({
                                'canonicalName': req.canonical_name,
                                'category': req.category,
                                'status': 'MANUAL_REVIEW' if req.manual_review_required else 'MISSING',
                                'reason': f"수동 확인 필요: 선택 그룹({group_name}) [{option_names}] 중 하나를 이수해야 합니다." if req.manual_review_required else f"필수 선택 누락: 선택 그룹({group_name}) [{option_names}] 중 최소 하나의 이수가 필요합니다."
                            })
                    else:
                        option_names = " 또는 ".join(r.canonical_name for r in reqs)
                        for req in reqs:
                            details.append({
                                'canonicalName': req.canonical_name,
                                'category': req.category,
                                'status': 'MISSING',
                                'reason': f"권장 선택 누락: 선택 그룹({group_name}) [{option_names}] 중 이수한 과목이 없습니다."
                            })

            # Check if any required course is missing
            required_missing = []
            for mc in missing_courses:
                for req in major.course_requirements:
                    if req.canonical_name == mc and req.required_for_eligibility:
                        required_missing.append(mc)
                        break

            is_eligible = gpa_satisfied and english_satisfied and (len(required_missing) == 0)

            results.append({
                'universityId': uni.id,
                'universityName': uni.name,
                'majorId': major.id,
                'majorName': major.name,
                'isEligible': is_eligible,
                'gpaSatisfied': gpa_satisfied,
                'englishSatisfied': english_satisfied,
                'gpaRequired': gpa_required,
                'gpaActual': user_profile.gpa,
                'satisfiedRequirementsCount': len(satisfied_courses),
                'totalRequirementsCount': len(major.course_requirements),
                'satisfiedCourses': satisfied_courses,
                'missingCourses': list(set(missing_courses)),
                'manualReviewRequired': manual_review_required,
                'details': details
            })

    return results
