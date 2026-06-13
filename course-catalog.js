window.courseCatalog = [
  {
    id: "eng-comp-1",
    name: "English Composition 1",
    category: "English",
    level: 1,
    hasLab: false,
    patterns: [
      "english composition 1", "english comp 1", "engl 1105", "composition i", "writing seminar", "writing seminars",
      "engl cc1010", "university writing", "english composition (1 course)", "english r1a", "english composition",
      "wra 101", "writing as inquiry", "engl 101", "academic writing", "college writing", "engw 1111", "critical thinking", "ge area a3"
    ]
  },
  {
    id: "eng-comp-2",
    name: "English Composition 2",
    category: "English",
    level: 2,
    hasLab: false,
    patterns: ["english composition 2", "english comp 2", "engl 1106", "composition ii", "english r1b"]
  },
  {
    id: "calc-1",
    name: "Calculus 1",
    category: "Math",
    level: 1,
    hasLab: false,
    patterns: [
      "calculus 1", "calculus i", "calc i", "calc 1", "math 124", "math 1225", "18.01", "math 140", "calculus 4학점",
      "mac 2311", "math 220-1", "math 15100", "math 10550", "21-120", "calculus of one and several variables",
      "/^calculus$/", "calculus (recommended)", "calculus (strongly recommended)", "math 161", "calculus ia", "mat 265", "calculus for engineers i"
    ]
  },
  {
    id: "calc-2",
    name: "Calculus 2",
    category: "Math",
    level: 2,
    hasLab: false,
    patterns: [
      "calculus 2", "calculus ii", "calc ii", "calc 2", "math 125", "math 1226", "math 1910", "math 141",
      "mac 2312", "math 220-2", "math 15200", "math 10560", "math 162", "calculus iia", "mat 266", "calculus for engineers ii"
    ]
  },
  {
    id: "calc-3",
    name: "Calculus 3 / Multivariable Calculus",
    category: "Math",
    level: 3,
    hasLab: false,
    patterns: [
      "calculus 3", "calculus iii", "calc iii", "calc 3", "multivariable calculus", "math 126", "math 2204", "math 1920", "18.02", "calculus iv", "math un1202",
      "mac 2313", "math 228-1", "math 15300", "math 16300"
    ]
  },
  {
    id: "diff-eq",
    name: "Differential Equations",
    category: "Math",
    level: 4,
    hasLab: false,
    patterns: [
      "differential equations", "diff equations", "diff. equations", "math 207", "math 2214", "math 2930",
      "map 2302", "math 228-2", "math 18400", "mat 22a", "mat 22b", "apma 2130", "aep 3200"
    ]
  },
  {
    id: "linear-algebra",
    name: "Linear Algebra",
    category: "Math",
    level: 4,
    hasLab: false,
    patterns: [
      "linear algebra", "math 224", "math 2114", "math 2940", "matrix algebra", "math 208",
      "math 19600", "math 20200", "math 244", "linear analysis i", "mat 22a", "mat 22b"
    ]
  },
  {
    id: "discrete-math",
    name: "Discrete Mathematics / Structures",
    category: "Math",
    level: 2,
    hasLab: false,
    patterns: ["discrete structures", "discrete mathematics", "discrete math", "cs 173", "cse 215", "foundations of computer science"]
  },
  {
    id: "precalculus",
    name: "Precalculus",
    category: "Math",
    level: 0,
    hasLab: false,
    patterns: ["precalculus", "pre-calculus", "trigonometry", "algebra & trigonometry"]
  },
  {
    id: "calculus-sequence",
    name: "Calculus Sequence",
    category: "Math",
    level: 3,
    hasLab: false,
    patterns: ["full sequence", "calculus sequence", "single-variable calculus full sequence", "단변수 미적분학 full sequence"]
  },
  {
    id: "statistics",
    name: "Statistics",
    category: "Math",
    level: 3,
    hasLab: false,
    patterns: ["statistics", "statistic", "calculus-based statistics", "\\bstat\\b", "\\bstat\\s"]
  },
  {
    id: "physics-1",
    name: "Physics 1",
    category: "Physics",
    level: 1,
    hasLab: false,
    patterns: [
      "physics 1", "physics i", "mechanics", "phys 121", "phys 2305", "phys 1112", "8.01", "phys 211",
      "phy 2048", "phys 13100", "phys 14100", "phys 10310", "physics (recommended)", "physics (strongly recommended)",
      "calculus-based physics", "phys 141", "general physics ia", "physics (or a second year of chemistry or biology)", "physics 7a",
      "phys 1211", "principles of physics for scientists and engineers i", "phys 0174", "physics for science and engineering i",
      "phys 2210", "physics for scientists and engineers i"
    ]
  },
  {
    id: "physics-1-lab",
    name: "Physics Lab 1",
    category: "Physics",
    level: 1.1,
    hasLab: false,
    isLab: true,
    linkedTo: "physics-1",
    patterns: ["physics 1 + lab", "physics i + lab", "phys 2305", "phys 1110", "physics lab 1", "physics laboratory 1"]
  },
  {
    id: "physics-2",
    name: "Physics 2",
    category: "Physics",
    level: 2,
    hasLab: false,
    patterns: [
      "physics 2", "physics ii", "e&m", "electromagnetism", "phys 122", "phys 2306", "phys 2213", "8.02", "phys 207",
      "phy 2049", "phys 13200", "phys 14200", "phys 10320", "physics 7b",
      "phys 0175", "physics for science and engineering ii", "phys 2220", "physics for scientists and engineers ii"
    ]
  },
  {
    id: "physics-2-lab",
    name: "Physics Lab 2",
    category: "Physics",
    level: 2.1,
    hasLab: false,
    isLab: true,
    linkedTo: "physics-2",
    patterns: ["physics 2 + lab", "physics ii + lab", "physics lab 2", "physics laboratory 2"]
  },
  {
    id: "physics-3",
    name: "Physics 3 / Modern Physics",
    category: "Physics",
    level: 3,
    hasLab: false,
    patterns: [
      "physics 3", "physics iii", "modern physics", "quantum physics", "phys 214", "phys un1403", "waves, light, and heat", "phys 123", "phys 213", "thermal physics",
      "phys 13300", "phys 14300", "special relativity"
    ]
  },
  {
    id: "physics-sequence",
    name: "Physics Sequence",
    category: "Physics",
    level: 2,
    hasLab: false,
    patterns: ["physics full sequence", "introductory physics full sequence", "입문 물리학 full sequence"]
  },
  {
    id: "chem-1",
    name: "Chemistry 1",
    category: "Chemistry",
    level: 1,
    hasLab: false,
    patterns: [
      "general chemistry 1", "chemistry 1", "chemistry i", "chem 1211", "chem 1211k", "chem 142", "chem 1035", "chem 2090", "5.111", "5.112", "3.091", "chem 110",
      "chm 2045", "chem 11100", "chem 12100", "chem 10171", "chemistry (recommended)", "/^chemistry$/", "general chemistry with lab",
      "recommended: chemistry", "cem 141", "chem 131", "chemical concepts, systems and practices i", "chem 135", "general chemistry for engineers",
      "chem 107", "chem 117", "chemistry for engineers", "chem 1410", "chem 119", "chem 1409", "chem 1411", "chem 1412", "chem 120",
      "gen chem 1년\\+lab", "gen chem 1과목\\+lab", "chemistry 1a \\+ 1al \\+ 1b",
      "chem 1670", "chem 1770", "general chemistry for engineering"
    ]
  },
  {
    id: "chem-1-lab",
    name: "Chemistry Lab 1",
    category: "Chemistry",
    level: 1.1,
    hasLab: false,
    isLab: true,
    linkedTo: "chem-1",
    patterns: ["general chemistry 1 + lab", "chemistry 1 + lab", "chemistry i + lab", "chem 1211", "chem 1211k", "chem 1045", "chem 2091", "chemistry lab 1", "chemistry laboratory 1"]
  },
  {
    id: "chem-2",
    name: "Chemistry 2",
    category: "Chemistry",
    level: 2,
    hasLab: false,
    patterns: [
      "general chemistry 2", "chemistry 2", "chemistry ii", "chem 1212", "chem 1212k", "chem 152", "chem 1036", "chem 162",
      "chm 2046", "chem 11200", "chem 12200", "chem 10172", "chem 2080"
    ]
  },
  {
    id: "chem-2-lab",
    name: "Chemistry Lab 2",
    category: "Chemistry",
    level: 2.1,
    hasLab: false,
    isLab: true,
    linkedTo: "chem-2",
    patterns: ["general chemistry 2 + lab", "chemistry 2 + lab", "chemistry ii + lab", "chem 1212", "chem 1212k", "chemistry lab 2", "chemistry laboratory 2"]
  },
  {
    id: "organic-chem",
    name: "Organic Chemistry",
    category: "Chemistry",
    level: 3,
    hasLab: false,
    patterns: ["organic chemistry", "chem 223", "chem 237", "chem 238", "chem 224", "chem 3570", "chem 1570"]
  },
  {
    id: "biochemistry",
    name: "Biochemistry",
    category: "Science",
    level: 3,
    hasLab: false,
    patterns: ["biochemistry"]
  },
  {
    id: "cell-biology",
    name: "Cell Biology",
    category: "Science",
    level: 3,
    hasLab: false,
    patterns: ["cell biology", "cell & developmental biology", "mcb 150", "molecular & cellular biology"]
  },
  {
    id: "genetics",
    name: "Genetics",
    category: "Science",
    level: 3,
    hasLab: false,
    patterns: ["genetics"]
  },
  {
    id: "biology-1",
    name: "Biology 1",
    category: "Science",
    level: 1,
    hasLab: false,
    patterns: [
      "biology 1", "biol 180", "biol 1105", "bio 101", "bioee 1610", "biog 1440", "biog 1445", "biomg 1350", "7.016", "biol un2005", "introductory biology i",
      "bsc 2010", "general biology w/ lab", "biology i w/ lab", "biog 1500", "cellular/molecular content",
      "biol 1107", "principles of biology i"
    ]
  },
  {
    id: "biology-2",
    name: "Biology 2",
    category: "Science",
    level: 2,
    hasLab: false,
    patterns: ["biology 2", "biol un2006", "introductory biology ii"]
  },
  {
    id: "intro-programming",
    name: "Intro Programming",
    category: "Computer",
    level: 1,
    hasLab: false,
    patterns: [
      "intro to programming", "introduction to programming", "programming", "python", "matlab", "computing",
      "cs 1110", "cs 1112", "cse 12", "cs 1044", "cs 1064", "cs 1114", "cs 124", "intro cs 1", "computer science i",
      "cs 1", "chem e 375", "cop 3502", "cmsc 12100", "cmsc 15100", "csc 171", "introduction to computer science",
      "cs 111", "cmpsc 121", "cmpsc 131", "engr 1140", "computational engineering methods"
    ]
  },
  {
    id: "data-structures",
    name: "Data Structures",
    category: "Computer",
    level: 2,
    hasLab: false,
    patterns: ["data structures", "cse 220"]
  },
  {
    id: "oop",
    name: "Object-Oriented Programming",
    category: "Computer",
    level: 2,
    hasLab: false,
    patterns: [
      "object-oriented programming", "oop", "cs 128", "intro cs 2", "computer science ii", "cs 2",
      "cop 3503", "cmpsc 122", "cmpsc 132"
    ]
  },
  {
    id: "statics",
    name: "Statics",
    category: "Engineering",
    level: 2,
    hasLab: false,
    patterns: ["statics", "esm 2104", "me 230", "engrd 2020"]
  },
  {
    id: "dynamics",
    name: "Dynamics",
    category: "Engineering",
    level: 3,
    hasLab: false,
    patterns: ["dynamics", "esm 2304", "aa 210", "aa 260"]
  },
  {
    id: "public-speaking",
    name: "Public Speaking / Communication",
    category: "English",
    level: 3,
    hasLab: false,
    patterns: ["public speaking", "communication"]
  },
  {
    id: "engineering-foundations-1",
    name: "Engineering Foundations 1",
    category: "Engineering",
    level: 1,
    hasLab: false,
    patterns: [
      "engineering foundations 1", "fundamentals of engineering 1", "enge 1215", "engr 1181", "engr 13100",
      "edsgn 100", "interegr 170", "intro to engineering", "introduction to engineering", "engineering graphics",
      "graphics", "se 101", "me 170", "engri", "ise 2014", "egr 206", "24-101", "introduction to mechanical engineering",
      "18-100", "introduction to electrical and computer engineering", "ecse 1100", "ch en 1703", "introduction to chemical engineering",
      "engr 1010", "engineering orientation", "engr 1600", "engineering problems"
    ]
  },
  {
    id: "engineering-foundations-2",
    name: "Engineering Foundations 2",
    category: "Engineering",
    level: 2,
    hasLab: false,
    patterns: ["engineering foundations 2", "fundamentals of engineering 2", "enge 1216", "engr 1182", "engr 13200", "engrd"]
  },
  {
    id: "circuits",
    name: "Circuits",
    category: "Engineering",
    level: 3,
    hasLab: false,
    patterns: ["circuits", "circuit", "aoe 2054", "egr 271", "electronics", "ece 110", "ece 205"]
  },
  {
    id: "digital-logic",
    name: "Digital Logic / Systems",
    category: "Engineering",
    level: 3,
    hasLab: false,
    patterns: ["digital logic", "digital systems", "digital design", "ece 2330", "egr 270", "cs 2505", "csee 2220", "fundamentals of logic design"]
  },
  {
    id: "solid-mechanics",
    name: "Solid Mechanics",
    category: "Engineering",
    level: 3,
    hasLab: false,
    patterns: ["solid mechanics", "mechanics of solids", "esm 2204"]
  },
  {
    id: "thermodynamics",
    name: "Thermodynamics",
    category: "Engineering",
    level: 3,
    hasLab: false,
    patterns: ["thermodynamics", "thermodynamics intro"]
  },
  {
    id: "material-energy-balances",
    name: "Material & Energy Balances",
    category: "Engineering",
    level: 3,
    hasLab: false,
    patterns: ["material and energy balance", "chem e 310", "material and energy balances", "che 2114", "che 2164"]
  },
  {
    id: "materials-science",
    name: "Materials Science",
    category: "Engineering",
    level: 3,
    hasLab: false,
    patterns: ["materials science", "material science", "mse 2060"]
  },
  {
    id: "liberal-studies",
    name: "Liberal Studies / Humanities",
    category: "English",
    level: 4,
    hasLab: false,
    patterns: [
      "liberal studies", "humanities", "general education", "economics", "econ un1105", "natural science with lab",
      "relevant science co-requisite", "intermediate foreign language proficiency", "second language proficiency",
      "core liberal arts courses", "geos 1004", "geology 1 \\+ lab", "eas 2250", "cee 3510", "lib 1600", "information literacy"
    ]
  },
  {
    id: "micro-econ",
    name: "Intro to Microeconomics",
    category: "Business",
    level: 1,
    hasLab: false,
    patterns: ["introduction to microeconomics", "intro to microeconomics", "microeconomics", "econ 200", "econ 101", "econ 51"]
  },
  {
    id: "macro-econ",
    name: "Intro to Macroeconomics",
    category: "Business",
    level: 1,
    hasLab: false,
    patterns: ["introduction to macroeconomics", "intro to macroeconomics", "macroeconomics", "econ 201", "econ 102", "econ 52"]
  },
  {
    id: "fin-acctg",
    name: "Financial Accounting",
    category: "Business",
    level: 2,
    hasLab: false,
    patterns: ["financial accounting", "financial reporting", "acctg 215", "acc 201", "ba 211"]
  },
  {
    id: "man-acctg",
    name: "Managerial Accounting",
    category: "Business",
    level: 2,
    hasLab: false,
    patterns: ["managerial accounting", "introduction to managerial accounting", "acctg 225", "acc 202", "ba 212"]
  },
  {
    id: "bus-law",
    name: "Business Law",
    category: "Business",
    level: 2,
    hasLab: false,
    patterns: ["business law", "introduction to law", "mgmt 200", "bul 3130", "legal environment of business"]
  },
  {
    id: "bus-stats",
    name: "Business Statistics",
    category: "Business",
    level: 1,
    hasLab: false,
    patterns: ["business statistics", "introductory statistical methods", "qmeth 201", "sta 2023", "stats for business"]
  },
  {
    id: "intro-psych",
    name: "Intro to Psychology",
    category: "SocialSciences",
    level: 1,
    hasLab: false,
    patterns: ["introduction to psychology", "intro to psychology", "general psychology", "psych 101", "psy 1012"]
  },
  {
    id: "intro-soc",
    name: "Intro to Sociology",
    category: "SocialSciences",
    level: 1,
    hasLab: false,
    patterns: ["introduction to sociology", "intro to sociology", "general sociology", "soc 101", "syg 2000"]
  },
  {
    id: "public-speaking",
    name: "Public Speaking",
    category: "Humanities",
    level: 1,
    hasLab: false,
    patterns: ["public-speaking", "public speaking", "introduction to communication", "speech 101", "spc 1017"]
  },
  {
    id: "us-history",
    name: "US History",
    category: "Humanities",
    level: 1,
    hasLab: false,
    patterns: ["us history", "u.s. history", "united states history", "hist 1301", "hist 1302"]
  },
  {
    id: "world-history",
    name: "World History / Western Civ",
    category: "Humanities",
    level: 1,
    hasLab: false,
    patterns: ["world history", "western civilization", "hist 1111", "hist 1112"]
  },
  {
    id: "intro-phil",
    name: "Intro to Philosophy",
    category: "Humanities",
    level: 1,
    hasLab: false,
    patterns: ["introduction to philosophy", "intro to philosophy", "general philosophy", "phil 101", "phi 2010"]
  },
  {
    id: "foreign-lang",
    name: "Foreign Language Sequence",
    category: "Humanities",
    level: 2,
    hasLab: false,
    patterns: ["foreign language", "second language", "spanish", "french", "german", "chinese", "korean"]
  }
];
