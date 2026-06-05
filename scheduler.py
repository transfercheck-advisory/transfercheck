from typing import List, Dict, Any, Set

DEFAULT_PREREQUISITES: Dict[str, List[str]] = {
  # Mathematics
  'calculus_2': ['calculus_1'],
  'calculus_3': ['calculus_2'],
  'differential_equations': ['calculus_2'],
  'linear_algebra': ['calculus_1'],
  'discrete_mathematics': ['calculus_1'],
  'engineering_statistics': ['calculus_1'],
  'numerical_methods': ['linear_algebra', 'calculus_2'],
  'probability_engineering': ['calculus_2'],
  'optimization': ['linear_algebra'],
  
  # Physics
  'physics_1_lecture': ['calculus_1'],
  'physics_2_lecture': ['physics_1_lecture', 'calculus_2'],
  'physics_2_lab': ['physics_1_lab'],
  'physics_3_lecture': ['physics_2_lecture'],
  'physics_3_lab': ['physics_2_lab'],
  'modern_physics': ['physics_2_lecture', 'calculus_3'],
  'electricity_and_magnetism': ['physics_2_lecture'],
  'waves_and_optics': ['physics_2_lecture'],

  # Chemistry
  'general_chemistry_2_lecture': ['general_chemistry_1_lecture'],
  'general_chemistry_2_lab': ['general_chemistry_1_lab'],
  'organic_chemistry_1_lecture': ['general_chemistry_2_lecture'],
  'organic_chemistry_1_lab': ['general_chemistry_2_lab'],
  'organic_chemistry_2_lecture': ['organic_chemistry_1_lecture'],
  'organic_chemistry_2_lab': ['organic_chemistry_1_lab'],

  # English
  'english_composition_2': ['english_composition_1'],
  'technical_writing': ['english_composition_1'],

  # CS
  'programming_2': ['programming_1'],
  'object_oriented_programming': ['programming_2'],
  'data_structures': ['programming_2'],
  'algorithms': ['data_structures'],
  'computer_organization': ['programming_2'],
  'computer_architecture': ['computer_organization'],
  'operating_systems': ['data_structures', 'computer_organization'],

  # Mechanical/General Eng
  'statics': ['physics_1_lecture', 'calculus_2'],
  'dynamics': ['statics', 'calculus_3'],
  'mechanics_of_materials': ['statics'],
  'thermodynamics': ['physics_1_lecture', 'calculus_2'],
  'fluid_mechanics': ['dynamics', 'thermodynamics'],
  'heat_transfer': ['thermodynamics', 'fluid_mechanics', 'differential_equations'],
  'materials_engineering': ['general_chemistry_1_lecture', 'physics_1_lecture'],
  'manufacturing_processes': ['materials_engineering'],
  'control_systems': ['differential_equations', 'linear_algebra'],

  # Other
  'circuits_1': ['physics_2_lecture', 'calculus_2'],
  'circuits_1_lab': ['physics_2_lab'],
  'aerodynamics': ['fluid_mechanics'],
  'propulsion': ['thermodynamics']
}

def generate_roadmap(
    missing_courses: List[str],
    completed_courses: List[str],
    max_courses_per_semester: int = 3,
    custom_prereqs: Optional[Dict[str, List[str]]] = None
) -> Dict[str, Any]:
    """
    Generates a semester-by-semester plan for missing required courses, respecting prerequisite chains.
    """
    prereq_map = custom_prereqs or DEFAULT_PREREQUISITES
    completed = set(completed_courses)
    
    # 1. Expand the set to schedule with any missing prerequisites of our missing courses
    to_schedule = set(missing_courses)
    expanded = True
    while expanded:
        expanded = False
        for course in list(to_schedule):
            prereqs = prereq_map.get(course, [])
            for p in prereqs:
                if p not in completed and p not in to_schedule:
                    to_schedule.add(p)
                    expanded = True

    # 2. Compute the dependency depths to prioritize critical paths
    depths = {}
    
    def get_dependents(course: str) -> List[str]:
        return [c for c in to_schedule if course in prereq_map.get(c, [])]

    def calculate_depth(course: str, visited: Set[str]) -> int:
        if course in depths:
            return depths[course]
        if course in visited:
            # Cycle detected
            return 0
        visited.add(course)
        
        dependents = get_dependents(course)
        if not dependents:
            depths[course] = 1
        else:
            max_dep_depth = 0
            for dep in dependents:
                max_dep_depth = max(max_dep_depth, calculate_depth(dep, set(visited)))
            depths[course] = 1 + max_dep_depth
        return depths[course]

    for course in to_schedule:
        calculate_depth(course, set())

    # 3. Schedule semester by semester
    roadmap = []
    unscheduled = set(to_schedule)
    semester_num = 1
    max_semesters = 20

    while len(unscheduled) > 0 and semester_num <= max_semesters:
        available = []
        for course in unscheduled:
            prereqs = prereq_map.get(course, [])
            if all(p in completed for p in prereqs):
                available.append(course)

        if not available:
            # Deadlock/Cycle detected
            break

        # Sort available courses by depth descending, then alphabetically for stability
        available.sort(key=lambda x: (-depths.get(x, 0), x))
        
        semester_courses = available[:max_courses_per_semester]
        
        roadmap.append({
            'semesterNumber': semester_num,
            'courses': semester_courses
        })

        for course in semester_courses:
            completed.add(course)
            unscheduled.remove(course)

        semester_num += 1

    return {
        'roadmap': roadmap,
        'unscheduledCourses': list(unscheduled)
    }
