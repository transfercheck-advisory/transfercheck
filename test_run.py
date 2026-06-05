from algorithms.matching import (
    evaluate_eligibility, 
    UserProfile, 
    UserCourse, 
    DbUniversity, 
    DbMajor, 
    DbCourseRequirement, 
    DbEnglishRequirement, 
    DbRawCourseMapping
)
from algorithms.scheduler import generate_roadmap

# ============================================================================
# 1. MOCK DATABASE SEEDING
# ============================================================================

MOCK_UNIVERSITIES = [
    DbUniversity(
        id='uni_ucb',
        name='UC Berkeley',
        english_requirements=[
            DbEnglishRequirement('eng_ielts', 'IELTS', '7.0', True),
            DbEnglishRequirement('eng_toefl', 'TOEFL', '100', True),
            DbEnglishRequirement('eng_hs_waiver', 'US_HIGH_SCHOOL', None, True)
        ],
        majors=[
            DbMajor(
                id='major_ucb_me',
                name='Mechanical Engineering',
                gpa_requirement=3.5,
                course_requirements=[
                    # Mathematics
                    DbCourseRequirement('c1', 'calculus_1', 'MATHEMATICS', True, False),
                    DbCourseRequirement('c2', 'calculus_2', 'MATHEMATICS', True, False),
                    DbCourseRequirement('c3', 'calculus_3', 'MATHEMATICS', True, False),
                    # OR Group: Must take Linear Algebra OR Differential Equations
                    DbCourseRequirement('c4', 'linear_algebra', 'MATHEMATICS', True, False, 'MATH_OR_GROUP'),
                    DbCourseRequirement('c5', 'differential_equations', 'MATHEMATICS', True, False, 'MATH_OR_GROUP'),
                    
                    # Physics (separated lecture and lab - RULE 3)
                    DbCourseRequirement('p1_lec', 'physics_1_lecture', 'PHYSICS', True, False),
                    DbCourseRequirement('p1_lab', 'physics_1_lab', 'PHYSICS', True, False),
                    DbCourseRequirement('p2_lec', 'physics_2_lecture', 'PHYSICS', True, False),
                    DbCourseRequirement('p2_lab', 'physics_2_lab', 'PHYSICS', True, False),
                    
                    # Chemistry (optional recommendation)
                    DbCourseRequirement('ch1_lec', 'general_chemistry_1_lecture', 'CHEMISTRY', False, False),
                    
                    # English (ambiguous requirements - Rule 2)
                    DbCourseRequirement('e1', 'english_composition_1', 'ENGLISH/COMM', True, True)
                ]
            )
        ]
    )
]

MOCK_RAW_MAPPINGS = [
    DbRawCourseMapping('local_cc', 'MATH 1A', 'calculus_1'),
    DbRawCourseMapping('local_cc', 'MATH 1B', 'calculus_2'),
    DbRawCourseMapping('local_cc', 'MATH 53', 'calculus_3'),
    DbRawCourseMapping('local_cc', 'MATH 54', 'linear_algebra'),
    DbRawCourseMapping('local_cc', 'PHYS 7A', 'physics_1_lecture'),
    DbRawCourseMapping('local_cc', 'PHYS 7AL', 'physics_1_lab'),
    DbRawCourseMapping('local_cc', 'ENGL 1A', 'english_composition_1')
]

# ============================================================================
# 2. TEST CASE EXECUTION
# ============================================================================

def run_tests():
    print("=========================================================")
    print("       STARTING PYTHON BACKEND ENGINE VERIFICATION       ")
    print("=========================================================\n")

    # User Profile 1: GPA 3.65, completed some local courses, TOEFL 105, High school waiver.
    user_profile = UserProfile(
        gpa=3.65,
        completed_local_courses=[
            UserCourse('MATH 1A', 'local_cc'),
            UserCourse('MATH 1B', 'local_cc'),
            UserCourse('PHYS 7A', 'local_cc'),
            UserCourse('PHYS 7AL', 'local_cc'),
            UserCourse('ENGL 1A', 'local_cc')
        ],
        english_scores={'toefl': 105.0},
        completed_waivers=['US_HIGH_SCHOOL']
    )

    print("--- TEST CASE 1: [Pillar 1] Eligibility Check ---")
    matching_results = evaluate_eligibility(user_profile, MOCK_UNIVERSITIES, MOCK_RAW_MAPPINGS)
    
    result = matching_results[0]
    print(f"대상 학교/학과: {result['universityName']} - {result['majorName']}")
    print(f"GPA 검증 만족 여부: {'PASS' if result['gpaSatisfied'] else 'FAIL'} (요구치: {result['gpaRequired']}, 획득치: {result['gpaActual']})")
    print(f"영어 요건 만족 여부: {'PASS' if result['englishSatisfied'] else 'FAIL'}")
    print(f"종합 지원 자격 만족 여부: {'PASS (지원 가능)' if result['isEligible'] else 'FAIL (지원 자격 미달)'}")
    print(f"수동 검증 필요 여부 (Rule 2): {'⚠️ YES (에너지/영어 과목 모호성 있음)' if result['manualReviewRequired'] else 'NO'}")
    
    print("\n이수 완료 교과목 (Canonical):", result['satisfiedCourses'])
    print("미이수 필수 교과목 (Canonical):", result['missingCourses'])

    print("\n세부 세션 매칭 로그:")
    for d in result['details']:
        status_symbol = '✅' if d['status'] == 'SATISFIED' else '⚠️' if d['status'] == 'MANUAL_REVIEW' else '❌'
        print(f"  {status_symbol} [{d['category']}] {d['canonicalName']}: {d['reason']}")

    print("\n---------------------------------------------------------")
    print("--- TEST CASE 2: [Pillar 3] Course Scheduler Roadmap ---")
    
    # Missing courses from target university (e.g. calculus_3, linear_algebra, physics_2_lecture, physics_2_lab)
    missing_courses = result['missingCourses']
    completed_canonical = ['calculus_1', 'calculus_2', 'physics_1_lecture', 'physics_1_lab', 'english_composition_1']
    
    print("이수 완료 과목:", completed_canonical)
    print("학기 배정 대상 과목 (미이수 과목 + 의존 관계 추가):", missing_courses)
    
    # Run scheduler with limit of 2 courses per semester to see sequential ordering
    schedule_result = generate_roadmap(missing_courses, completed_canonical, 2)
    
    print("\n생성된 학기별 로드맵 (최대 이수 제한: 2과목):")
    for sem in schedule_result['roadmap']:
        print(f"  [학기 {sem['semesterNumber']}] : {', '.join(sem['courses'])}")
        
    if len(schedule_result['unscheduledCourses']) > 0:
        print("⚠️ 배정하지 못한 과목 (순환 참조 오류):", schedule_result['unscheduledCourses'])
    else:
        print("✅ 성공적으로 모든 미이수 과목이 Prerequisite 체인에 맞춰 스케줄링되었습니다.")
        
    print("\n=========================================================")
    print("             VERIFICATION TESTS COMPLETED                ")
    print("=========================================================")

if __name__ == "__main__":
    run_tests()
