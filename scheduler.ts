import { SemesterPlan, SchedulingResult } from './types';

// Standard canonical prerequisite mapping (key: course, value: list of prerequisites)
export const DEFAULT_PREREQUISITES: Record<string, string[]> = {
  // Mathematics
  'calculus_2': ['calculus_1'],
  'calculus_3': ['calculus_2'],
  'differential_equations': ['calculus_2'],
  'linear_algebra': ['calculus_1'],
  'discrete_mathematics': ['calculus_1'],
  'engineering_statistics': ['calculus_1'],
  'numerical_methods': ['linear_algebra', 'calculus_2'],
  'probability_engineering': ['calculus_2'],
  'optimization': ['linear_algebra'],
  
  // Physics
  'physics_1_lecture': ['calculus_1'],
  'physics_2_lecture': ['physics_1_lecture', 'calculus_2'],
  'physics_2_lab': ['physics_1_lab'],
  'physics_3_lecture': ['physics_2_lecture'],
  'physics_3_lab': ['physics_2_lab'],
  'modern_physics': ['physics_2_lecture', 'calculus_3'],
  'electricity_and_magnetism': ['physics_2_lecture'],
  'waves_and_optics': ['physics_2_lecture'],

  // Chemistry
  'general_chemistry_2_lecture': ['general_chemistry_1_lecture'],
  'general_chemistry_2_lab': ['general_chemistry_1_lab'],
  'organic_chemistry_1_lecture': ['general_chemistry_2_lecture'],
  'organic_chemistry_1_lab': ['general_chemistry_2_lab'],
  'organic_chemistry_2_lecture': ['organic_chemistry_1_lecture'],
  'organic_chemistry_2_lab': ['organic_chemistry_1_lab'],

  // English
  'english_composition_2': ['english_composition_1'],
  'technical_writing': ['english_composition_1'],

  // CS
  'programming_2': ['programming_1'],
  'object_oriented_programming': ['programming_2'],
  'data_structures': ['programming_2'],
  'algorithms': ['data_structures'],
  'computer_organization': ['programming_2'],
  'computer_architecture': ['computer_organization'],
  'operating_systems': ['data_structures', 'computer_organization'],

  // Mechanical/General Eng
  'statics': ['physics_1_lecture', 'calculus_2'],
  'dynamics': ['statics', 'calculus_3'],
  'mechanics_of_materials': ['statics'],
  'thermodynamics': ['physics_1_lecture', 'calculus_2'],
  'fluid_mechanics': ['dynamics', 'thermodynamics'],
  'heat_transfer': ['thermodynamics', 'fluid_mechanics', 'differential_equations'],
  'materials_engineering': ['general_chemistry_1_lecture', 'physics_1_lecture'],
  'manufacturing_processes': ['materials_engineering'],
  'control_systems': ['differential_equations', 'linear_algebra'],

  // Other
  'circuits_1': ['physics_2_lecture', 'calculus_2'],
  'circuits_1_lab': ['physics_2_lab'],
  'aerodynamics': ['fluid_mechanics'],
  'propulsion': ['thermodynamics']
};

/**
 * Personalized Course Scheduler that sequences missing required courses over future semesters.
 * 
 * @param missingCourses - List of canonical names of missing courses needed for transfer.
 * @param completedCourses - List of canonical names of courses the user has already completed.
 * @param maxCoursesPerSemester - Limit on the number of canonical courses per semester (default: 3).
 * @param customPrereqs - Optional custom prerequisite mapping to override the default.
 */
export function generateRoadmap(
  missingCourses: string[],
  completedCourses: string[],
  maxCoursesPerSemester: number = 3,
  customPrereqs?: Record<string, string[]>
): SchedulingResult {
  const prereqMap = customPrereqs || DEFAULT_PREREQUISITES;
  
  // Set of courses completed or already scheduled
  const completed = new Set<string>(completedCourses);
  
  // The set of courses we need to schedule.
  // If a missing course requires another course that is NOT completed and NOT in missingCourses,
  // we must automatically add it to our schedule list to avoid deadlocks.
  const toSchedule = new Set<string>(missingCourses);
  let expanded = true;
  while (expanded) {
    expanded = false;
    for (const course of toSchedule) {
      const prereqs = prereqMap[course] || [];
      for (const p of prereqs) {
        if (!completed.has(p) && !toSchedule.has(p)) {
          toSchedule.add(p);
          expanded = true;
        }
      }
    }
  }

  // Calculate "depth" of each course in the dependency graph to prioritize critical paths
  // Depth of X = 1 + max(depth of any course Y that has X as a prerequisite)
  const depths: Record<string, number> = {};
  
  // Helper to get dependents (courses that require course X)
  const getDependents = (course: string): string[] => {
    return Array.from(toSchedule).filter(c => {
      const prereqs = prereqMap[c] || [];
      return prereqs.includes(course);
    });
  };

  // Memoized depth calculator
  const calculateDepth = (course: string, visited: Set<string>): number => {
    if (depths[course] !== undefined) return depths[course];
    if (visited.has(course)) {
      // Cycle detected
      return 0;
    }
    visited.add(course);
    
    const dependents = getDependents(course);
    if (dependents.length === 0) {
      depths[course] = 1;
    } else {
      let maxDepDepth = 0;
      for (const dep of dependents) {
        maxDepDepth = Math.max(maxDepDepth, calculateDepth(dep, new Set(visited)));
      }
      depths[course] = 1 + maxDepDepth;
    }
    return depths[course];
  };

  // Pre-calculate depths for all courses to schedule
  for (const course of toSchedule) {
    calculateDepth(course, new Set());
  }

  const roadmap: SemesterPlan[] = [];
  const unscheduled = new Set<string>(toSchedule);
  let semesterNum = 1;
  
  // Safety iteration limit to prevent infinite loops in cyclic dependencies
  const maxSemesters = 20;

  while (unscheduled.size > 0 && semesterNum <= maxSemesters) {
    // 1. Identify courses whose prerequisites are fully completed/scheduled in previous semesters
    const available: string[] = [];
    
    for (const course of unscheduled) {
      const prereqs = prereqMap[course] || [];
      const prereqsMet = prereqs.every(p => completed.has(p));
      if (prereqsMet) {
        available.push(course);
      }
    }

    // If no courses are available but we still have unscheduled courses, we have a cycle or deadlock
    if (available.length === 0) {
      break;
    }

    // 2. Sort available courses by depth descending (critical path scheduling)
    // In case of depth tie, sort alphabetically for stability
    available.sort((a, b) => {
      const depthDiff = (depths[b] || 0) - (depths[a] || 0);
      if (depthDiff !== 0) return depthDiff;
      return a.localeCompare(b);
    });

    // 3. Select up to maxCoursesPerSemester
    const semesterCourses = available.slice(0, maxCoursesPerSemester);

    // 4. Record to roadmap
    roadmap.push({
      semesterNumber: semesterNum,
      courses: semesterCourses
    });

    // 5. Update completed set and unscheduled set
    for (const course of semesterCourses) {
      completed.add(course);
      unscheduled.delete(course);
    }

    semesterNum++;
  }

  return {
    roadmap,
    unscheduledCourses: Array.from(unscheduled)
  };
}
