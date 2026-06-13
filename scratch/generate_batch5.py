import json
import os

drexel_majors = [
    {
        "name": "Architectural Engineering",
        "minGpa": 2.75,
        "rawMinGpa": "2.75 cumulative GPA (3.0 for Dual Admissions)",
        "minCredits": 24,
        "rawMinCredits": "24 semester credits (if under 24 credits, high school transcript and SAT/ACT may be required)",
        "requiredCourses": [
            "Pre-calculus or Calculus",
            "Chemistry with lab",
            "Physics with lab"
        ],
        "recommendedCourses": [
            "Calculus I",
            "Calculus II",
            "Physics I with lab"
        ],
        "english": {
            "raw": "TOEFL iBT: 79 (minimum 20 in each subsection); IELTS: 6.5 (minimum 6.5 in each subsection); Duolingo: 110",
            "TOEFL": 79
        },
        "note": "Official requirements from admissions website: https://drexel.edu/undergrad/apply/prereqs. Transfer applicants must complete or have in progress these prerequisites. At least two of the prerequisites, including the math course, must be completed at the time of application."
    },
    {
        "name": "Chemical Engineering",
        "minGpa": 2.75,
        "rawMinGpa": "2.75 cumulative GPA (3.0 for Dual Admissions)",
        "minCredits": 24,
        "rawMinCredits": "24 semester credits (if under 24 credits, high school transcript and SAT/ACT may be required)",
        "requiredCourses": [
            "Pre-calculus or Calculus",
            "Chemistry with lab",
            "Physics with lab"
        ],
        "recommendedCourses": [
            "Calculus I",
            "Calculus II",
            "Physics I with lab"
        ],
        "english": {
            "raw": "TOEFL iBT: 79 (minimum 20 in each subsection); IELTS: 6.5 (minimum 6.5 in each subsection); Duolingo: 110",
            "TOEFL": 79
        },
        "note": "Official requirements from admissions website: https://drexel.edu/undergrad/apply/prereqs. Transfer applicants must complete or have in progress these prerequisites. At least two of the prerequisites, including the math course, must be completed at the time of application."
    },
    {
        "name": "Civil Engineering",
        "minGpa": 2.75,
        "rawMinGpa": "2.75 cumulative GPA (3.0 for Dual Admissions)",
        "minCredits": 24,
        "rawMinCredits": "24 semester credits (if under 24 credits, high school transcript and SAT/ACT may be required)",
        "requiredCourses": [
            "Pre-calculus or Calculus",
            "Chemistry with lab",
            "Physics with lab"
        ],
        "recommendedCourses": [
            "Calculus I",
            "Calculus II",
            "Physics I with lab"
        ],
        "english": {
            "raw": "TOEFL iBT: 79 (minimum 20 in each subsection); IELTS: 6.5 (minimum 6.5 in each subsection); Duolingo: 110",
            "TOEFL": 79
        },
        "note": "Official requirements from admissions website: https://drexel.edu/undergrad/apply/prereqs. Transfer applicants must complete or have in progress these prerequisites. At least two of the prerequisites, including the math course, must be completed at the time of application."
    },
    {
        "name": "Computer Engineering",
        "minGpa": 2.75,
        "rawMinGpa": "2.75 cumulative GPA (3.0 for Dual Admissions)",
        "minCredits": 24,
        "rawMinCredits": "24 semester credits (if under 24 credits, high school transcript and SAT/ACT may be required)",
        "requiredCourses": [
            "Pre-calculus or Calculus",
            "Chemistry with lab",
            "Physics with lab"
        ],
        "recommendedCourses": [
            "Calculus I",
            "Calculus II",
            "Physics I with lab"
        ],
        "english": {
            "raw": "TOEFL iBT: 79 (minimum 20 in each subsection); IELTS: 6.5 (minimum 6.5 in each subsection); Duolingo: 110",
            "TOEFL": 79
        },
        "note": "Official requirements from admissions website: https://drexel.edu/undergrad/apply/prereqs. Transfer applicants must complete or have in progress these prerequisites. At least two of the prerequisites, including the math course, must be completed at the time of application."
    },
    {
        "name": "Construction Management",
        "minGpa": 2.75,
        "rawMinGpa": "2.75 cumulative GPA (3.0 for Dual Admissions)",
        "minCredits": 24,
        "rawMinCredits": "24 semester credits (if under 24 credits, high school transcript and SAT/ACT may be required)",
        "requiredCourses": [],
        "recommendedCourses": [
            "Pre-calculus"
        ],
        "english": {
            "raw": "TOEFL iBT: 79 (minimum 20 in each subsection); IELTS: 6.5 (minimum 6.5 in each subsection); Duolingo: 110",
            "TOEFL": 79
        },
        "note": "Official requirements from admissions website: https://drexel.edu/undergrad/apply/prereqs. Construction Management does not have specific course prerequisites for admission, though Pre-calculus is recommended."
    },
    {
        "name": "Electrical Engineering",
        "minGpa": 2.75,
        "rawMinGpa": "2.75 cumulative GPA (3.0 for Dual Admissions)",
        "minCredits": 24,
        "rawMinCredits": "24 semester credits (if under 24 credits, high school transcript and SAT/ACT may be required)",
        "requiredCourses": [
            "Pre-calculus or Calculus",
            "Chemistry with lab",
            "Physics with lab"
        ],
        "recommendedCourses": [
            "Calculus I",
            "Calculus II",
            "Physics I with lab"
        ],
        "english": {
            "raw": "TOEFL iBT: 79 (minimum 20 in each subsection); IELTS: 6.5 (minimum 6.5 in each subsection); Duolingo: 110",
            "TOEFL": 79
        },
        "note": "Official requirements from admissions website: https://drexel.edu/undergrad/apply/prereqs. Transfer applicants must complete or have in progress these prerequisites. At least two of the prerequisites, including the math course, must be completed at the time of application."
    },
    {
        "name": "Engineering Technology",
        "minGpa": 2.75,
        "rawMinGpa": "2.75 cumulative GPA (3.0 for Dual Admissions)",
        "minCredits": 24,
        "rawMinCredits": "24 semester credits (if under 24 credits, high school transcript and SAT/ACT may be required)",
        "requiredCourses": [],
        "recommendedCourses": [
            "Pre-calculus"
        ],
        "english": {
            "raw": "TOEFL iBT: 79 (minimum 20 in each subsection); IELTS: 6.5 (minimum 6.5 in each subsection); Duolingo: 110",
            "TOEFL": 79
        },
        "note": "Official requirements from admissions website: https://drexel.edu/undergrad/apply/prereqs. Engineering Technology does not have specific course prerequisites for admission, though Pre-calculus is recommended."
    },
    {
        "name": "Environmental Engineering",
        "minGpa": 2.75,
        "rawMinGpa": "2.75 cumulative GPA (3.0 for Dual Admissions)",
        "minCredits": 24,
        "rawMinCredits": "24 semester credits (if under 24 credits, high school transcript and SAT/ACT may be required)",
        "requiredCourses": [
            "Pre-calculus or Calculus",
            "Chemistry with lab",
            "Physics with lab"
        ],
        "recommendedCourses": [
            "Calculus I",
            "Calculus II",
            "Physics I with lab"
        ],
        "english": {
            "raw": "TOEFL iBT: 79 (minimum 20 in each subsection); IELTS: 6.5 (minimum 6.5 in each subsection); Duolingo: 110",
            "TOEFL": 79
        },
        "note": "Official requirements from admissions website: https://drexel.edu/undergrad/apply/prereqs. Transfer applicants must complete or have in progress these prerequisites. At least two of the prerequisites, including the math course, must be completed at the time of application."
    },
    {
        "name": "Materials Science and Engineering",
        "minGpa": 2.75,
        "rawMinGpa": "2.75 cumulative GPA (3.0 for Dual Admissions)",
        "minCredits": 24,
        "rawMinCredits": "24 semester credits (if under 24 credits, high school transcript and SAT/ACT may be required)",
        "requiredCourses": [
            "Pre-calculus or Calculus",
            "Chemistry with lab",
            "Physics with lab"
        ],
        "recommendedCourses": [
            "Calculus I",
            "Calculus II",
            "Physics I with lab"
        ],
        "english": {
            "raw": "TOEFL iBT: 79 (minimum 20 in each subsection); IELTS: 6.5 (minimum 6.5 in each subsection); Duolingo: 110",
            "TOEFL": 79
        },
        "note": "Official requirements from admissions website: https://drexel.edu/undergrad/apply/prereqs. Transfer applicants must complete or have in progress these prerequisites. At least two of the prerequisites, including the math course, must be completed at the time of application."
    },
    {
        "name": "Mechanical Engineering",
        "minGpa": 2.75,
        "rawMinGpa": "2.75 cumulative GPA (3.0 for Dual Admissions)",
        "minCredits": 24,
        "rawMinCredits": "24 semester credits (if under 24 credits, high school transcript and SAT/ACT may be required)",
        "requiredCourses": [
            "Pre-calculus or Calculus",
            "Chemistry with lab",
            "Physics with lab"
        ],
        "recommendedCourses": [
            "Calculus I",
            "Calculus II",
            "Physics I with lab"
        ],
        "english": {
            "raw": "TOEFL iBT: 79 (minimum 20 in each subsection); IELTS: 6.5 (minimum 6.5 in each subsection); Duolingo: 110",
            "TOEFL": 79
        },
        "note": "Official requirements from admissions website: https://drexel.edu/undergrad/apply/prereqs. Transfer applicants must complete or have in progress these prerequisites. At least two of the prerequisites, including the math course, must be completed at the time of application."
    }
]

isu_majors_list = [
    "Aerospace Engineering",
    "Agricultural Engineering",
    "Biological Systems Engineering",
    "Biomedical Engineering",
    "Chemical Engineering",
    "Civil Engineering",
    "Computer Engineering",
    "Construction Engineering",
    "Cyber Security Engineering",
    "Electrical Engineering",
    "Environmental Engineering",
    "Industrial Engineering",
    "Materials Engineering",
    "Mechanical Engineering",
    "Software Engineering"
]

isu_majors = []
for major in isu_majors_list:
    isu_majors.append({
        "name": major,
        "minGpa": 2.25,
        "rawMinGpa": "2.25 cumulative GPA (2.00 if applicant has earned an Associate's degree)",
        "minCredits": 24,
        "rawMinCredits": "24 transferable semester credits (if fewer than 24, high school transcript and ACT/SAT scores are required)",
        "requiredCourses": [
            "MATH 165 - Calculus I",
            "MATH 166 - Calculus II",
            "CHEM 167 - General Chemistry for Engineering Students (or CHEM 177 - General Chemistry I)",
            "ENGL 150 - Critical Thinking and Communication (with grade of C or better)",
            "PHYS 221 - Introduction to Classical Physics I (or PHYS 231 & PHYS 231L)"
        ],
        "recommendedCourses": [
            "ENGL 250 - Written, Oral, Visual, and Electronic Composition",
            "LIB 160 - Introduction to College Level Research",
            "ENGR 101 - Engineering Orientation"
        ],
        "english": {
            "raw": "TOEFL iBT: 71 (minimum 17 on Speaking/Writing sections); IELTS: 6.0 (no subscore below 5.5); Duolingo: 105",
            "TOEFL": 71
        },
        "note": "Official requirements from admissions website: https://www.admissions.iastate.edu/transfer/ and https://www.engineering.iastate.edu/transfer/. Students are admitted directly to the College of Engineering. Once admitted, they must complete the foundational 'Basic Program' (with a minimum 2.00 GPA in those courses) to progress to 200-level and above engineering courses."
    })

data = [
    {
        "school": "Drexel University",
        "majors": drexel_majors
    },
    {
        "school": "Iowa State University",
        "majors": isu_majors
    }
]

output_path = r"c:/Users/user/OneDrive/바탕 화면/transfer app/scratch/additions_batch5.json"
with open(output_path, "w", encoding="utf-8") as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

print("Batch 5 data generated and saved successfully!")
