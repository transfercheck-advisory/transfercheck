export interface UserCourse {
  localCode: string;
  universityId: string; // The institution where the user took this course
}

export interface UserProfile {
  gpa: number;
  completedLocalCourses: UserCourse[];
  englishScores?: {
    toefl?: number;
    ielts?: number;
    satEnglish?: number;
    actEnglish?: number;
  };
  completedWaivers?: string[]; // e.g. ["US_HIGH_SCHOOL", "MINIMUM_CREDITS"]
}

export interface EligibilityDetail {
  canonicalName: string;
  category: string;
  status: 'SATISFIED' | 'MISSING' | 'MANUAL_REVIEW';
  reason: string;
}

export interface EligibilityResult {
  universityId: string;
  universityName: string;
  majorId: string;
  majorName: string;
  isEligible: boolean;
  gpaSatisfied: boolean;
  englishSatisfied: boolean;
  gpaRequired: number | null;
  gpaActual: number;
  satisfiedRequirementsCount: number;
  totalRequirementsCount: number;
  satisfiedCourses: string[];
  missingCourses: string[];
  manualReviewRequired: boolean;
  details: EligibilityDetail[];
}

export interface SemesterPlan {
  semesterNumber: number;
  courses: string[];
}

export interface SchedulingResult {
  roadmap: SemesterPlan[];
  unscheduledCourses: string[]; // Courses that couldn't be scheduled due to cycle errors
}
