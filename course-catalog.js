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

window.transferDatabase = {
  "sourceFiles": [
    {
      "file": "Db 1-transfercheck final v2.xlsx",
      "rows": 72,
      "sheet": "Transfer Requirements"
    },
    {
      "file": "Db 2-transfercheck final.xlsx",
      "rows": 67,
      "sheet": "Transfer Requirements"
    },
    {
      "file": "Db 3-transfercheck final.xlsx",
      "rows": 64,
      "sheet": "Transfer Requirements"
    },
    {
      "file": "Db 4-transfercheck final.xlsx",
      "rows": 26,
      "sheet": "Transfer Requirements"
    },
    {
      "file": "Db 5-transfercheck final.xlsx",
      "rows": 40,
      "sheet": "Transfer Requirements"
    },
    {
      "file": "Db 6-transfercheck final.xlsx",
      "rows": 38,
      "sheet": "Transfer Requirements"
    }
  ],
  "schoolCount": 63,
  "programCount": 2075,
  "schools": [
    {
      "id": "university-of-washington-2fde0bf4",
      "name": "University of Washington",
      "shortName": "University of Washington",
      "majors": [
        {
          "id": "university-of-washington-aeronautics-astronautics-90d173bf",
          "name": "Aeronautics & Astronautics",
          "confidence": "verified"
        },
        {
          "id": "university-of-washington-bioengineering-640262f1",
          "name": "Bioengineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-washington-chemical-engineering-2af07d02",
          "name": "Chemical Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-washington-civil-engineering-0f67c487",
          "name": "Civil Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-washington-2fde0bf4-computer-engineering-genuine",
          "name": "Computer Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-washington-2fde0bf4-computer-science-genuine",
          "name": "Computer Science",
          "confidence": "verified"
        },
        {
          "id": "university-of-washington-2fde0bf4-electrical-engineering-genuine",
          "name": "Electrical Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-washington-industrial-engineering-959055c7",
          "name": "Industrial Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-washington-materials-science-engineering-2bf0cfaf",
          "name": "Materials Science & Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-washington-mechanical-engineering-c0a5a3b3",
          "name": "Mechanical Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-washington-2fde0bf4-human-centered-design-engineering-genuine",
          "name": "Human Centered Design & Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-washington-2fde0bf4-informatics-genuine",
          "name": "Informatics",
          "confidence": "verified"
        },
        {
          "id": "university-of-washington-2fde0bf4-business-administration-genuine",
          "name": "Business Administration",
          "confidence": "verified"
        },
        {
          "id": "university-of-washington-2fde0bf4-economics-genuine",
          "name": "Economics",
          "confidence": "verified"
        },
        {
          "id": "university-of-washington-2fde0bf4-psychology-genuine",
          "name": "Psychology",
          "confidence": "verified"
        },
        {
          "id": "university-of-washington-2fde0bf4-applied-mathematics-genuine",
          "name": "Applied Mathematics",
          "confidence": "verified"
        },
        {
          "id": "university-of-washington-2fde0bf4-statistics-genuine",
          "name": "Statistics",
          "confidence": "verified"
        },
        {
          "id": "university-of-washington-2fde0bf4-physics-genuine",
          "name": "Physics",
          "confidence": "verified"
        },
        {
          "id": "university-of-washington-2fde0bf4-chemistry-genuine",
          "name": "Chemistry",
          "confidence": "verified"
        },
        {
          "id": "university-of-washington-2fde0bf4-biology-genuine",
          "name": "Biology",
          "confidence": "verified"
        },
        {
          "id": "university-of-washington-2fde0bf4-biochemistry-genuine",
          "name": "Biochemistry",
          "confidence": "verified"
        },
        {
          "id": "university-of-washington-2fde0bf4-mathematics-genuine",
          "name": "Mathematics",
          "confidence": "verified"
        },
        {
          "id": "university-of-washington-2fde0bf4-communication-genuine",
          "name": "Communication",
          "confidence": "verified"
        },
        {
          "id": "university-of-washington-2fde0bf4-political-science-genuine",
          "name": "Political Science",
          "confidence": "verified"
        },
        {
          "id": "university-of-washington-2fde0bf4-sociology-genuine",
          "name": "Sociology",
          "confidence": "verified"
        },
        {
          "id": "university-of-washington-2fde0bf4-history-genuine",
          "name": "History",
          "confidence": "verified"
        },
        {
          "id": "university-of-washington-2fde0bf4-english-genuine",
          "name": "English",
          "confidence": "verified"
        },
        {
          "id": "university-of-washington-2fde0bf4-philosophy-genuine",
          "name": "Philosophy",
          "confidence": "verified"
        },
        {
          "id": "university-of-washington-computer-engineering-allen-school-347f00d7",
          "name": "Computer Engineering (Allen School)",
          "confidence": "verified"
        },
        {
          "id": "university-of-washington-electrical-computer-engineering-6f7e3839",
          "name": "Electrical & Computer Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-washington-environmental-engineering-d3e41eda",
          "name": "Environmental Engineering",
          "confidence": "verified"
        }
      ]
    },
    {
      "id": "university-of-michigan-cc40378b",
      "name": "University of Michigan",
      "shortName": "University of Michigan",
      "majors": [
        {
          "id": "university-of-michigan-cc40378b-computer-science-genuine",
          "name": "Computer Science",
          "confidence": "verified"
        },
        {
          "id": "university-of-michigan-cc40378b-data-science-genuine",
          "name": "Data Science",
          "confidence": "verified"
        },
        {
          "id": "university-of-michigan-computer-engineering-a66fb383",
          "name": "Computer Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-michigan-electrical-engineering-e2dba27a",
          "name": "Electrical Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-michigan-mechanical-engineering-45e972af",
          "name": "Mechanical Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-michigan-biomedical-engineering-eb5d5d25",
          "name": "Biomedical Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-michigan-chemical-engineering-8970fd1b",
          "name": "Chemical Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-michigan-civil-engineering-f9b61134",
          "name": "Civil Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-michigan-cc40378b-industrial-and-operations-engineering-genuine",
          "name": "Industrial and Operations Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-michigan-aerospace-engineering-719ceea1",
          "name": "Aerospace Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-michigan-cc40378b-materials-science-and-engineering-genuine",
          "name": "Materials Science and Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-michigan-cc40378b-naval-architecture-and-marine-engineering-genuine",
          "name": "Naval Architecture and Marine Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-michigan-cc40378b-climate-and-meteorology-genuine",
          "name": "Climate and Meteorology",
          "confidence": "verified"
        },
        {
          "id": "university-of-michigan-cc40378b-business-administration-genuine",
          "name": "Business Administration",
          "confidence": "verified"
        },
        {
          "id": "university-of-michigan-cc40378b-economics-genuine",
          "name": "Economics",
          "confidence": "verified"
        },
        {
          "id": "university-of-michigan-cc40378b-psychology-genuine",
          "name": "Psychology",
          "confidence": "verified"
        },
        {
          "id": "university-of-michigan-cc40378b-biochemistry-genuine",
          "name": "Biochemistry",
          "confidence": "verified"
        },
        {
          "id": "university-of-michigan-cc40378b-biology-genuine",
          "name": "Biology",
          "confidence": "verified"
        },
        {
          "id": "university-of-michigan-cc40378b-cognitive-science-genuine",
          "name": "Cognitive Science",
          "confidence": "verified"
        },
        {
          "id": "university-of-michigan-cc40378b-information-genuine",
          "name": "Information",
          "confidence": "verified"
        },
        {
          "id": "university-of-michigan-computer-science-coe-2c16a5ea",
          "name": "Computer Science (CoE)",
          "confidence": "verified"
        },
        {
          "id": "university-of-michigan-earth-systems-science-eng-4c063e80",
          "name": "Earth Systems Science & Eng.",
          "confidence": "verified"
        },
        {
          "id": "university-of-michigan-engineering-physics-82b87f71",
          "name": "Engineering Physics",
          "confidence": "verified"
        },
        {
          "id": "university-of-michigan-environmental-engineering-3a67eecb",
          "name": "Environmental Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-michigan-industrial-operations-eng-85b41ed0",
          "name": "Industrial & Operations Eng.",
          "confidence": "verified"
        },
        {
          "id": "university-of-michigan-materials-science-engineering-ffe8812d",
          "name": "Materials Science & Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-michigan-naval-architecture-marine-eng-c0e957d3",
          "name": "Naval Architecture & Marine Eng.",
          "confidence": "verified"
        },
        {
          "id": "university-of-michigan-nuclear-eng-radiological-sci-5a6a32ec",
          "name": "Nuclear Eng. & Radiological Sci.",
          "confidence": "verified"
        },
        {
          "id": "university-of-michigan-economics-pilot",
          "name": "Economics (LSA)",
          "confidence": "verified"
        }
      ]
    },
    {
      "id": "columbia-university-fafc3474",
      "name": "Columbia University",
      "shortName": "Columbia University",
      "majors": [
        {
          "id": "columbia-university-computer-science-076efe80",
          "name": "Computer Science",
          "confidence": "verified"
        },
        {
          "id": "columbia-university-computer-engineering-dd7db8a1",
          "name": "Computer Engineering",
          "confidence": "verified"
        },
        {
          "id": "columbia-university-electrical-engineering-47fdaf94",
          "name": "Electrical Engineering",
          "confidence": "verified"
        },
        {
          "id": "columbia-university-mechanical-engineering-e3d2410b",
          "name": "Mechanical Engineering",
          "confidence": "verified"
        },
        {
          "id": "columbia-university-biomedical-engineering-98634bff",
          "name": "Biomedical Engineering",
          "confidence": "verified"
        },
        {
          "id": "columbia-university-chemical-engineering-d13bfdbf",
          "name": "Chemical Engineering",
          "confidence": "verified"
        },
        {
          "id": "columbia-university-fafc3474-civil-engineering-genuine",
          "name": "Civil Engineering",
          "confidence": "verified"
        },
        {
          "id": "columbia-university-fafc3474-earth-and-environmental-engineering-genuine",
          "name": "Earth and Environmental Engineering",
          "confidence": "verified"
        },
        {
          "id": "columbia-university-fafc3474-industrial-engineering-genuine",
          "name": "Industrial Engineering",
          "confidence": "verified"
        },
        {
          "id": "columbia-university-fafc3474-operations-research-genuine",
          "name": "Operations Research",
          "confidence": "verified"
        },
        {
          "id": "columbia-university-fafc3474-financial-engineering-genuine",
          "name": "Financial Engineering",
          "confidence": "verified"
        },
        {
          "id": "columbia-university-fafc3474-applied-mathematics-genuine",
          "name": "Applied Mathematics",
          "confidence": "verified"
        },
        {
          "id": "columbia-university-fafc3474-applied-physics-genuine",
          "name": "Applied Physics",
          "confidence": "verified"
        },
        {
          "id": "columbia-university-fafc3474-materials-science-and-engineering-genuine",
          "name": "Materials Science and Engineering",
          "confidence": "verified"
        },
        {
          "id": "columbia-university-fafc3474-economics-genuine",
          "name": "Economics",
          "confidence": "verified"
        },
        {
          "id": "columbia-university-fafc3474-financial-economics-genuine",
          "name": "Financial Economics",
          "confidence": "verified"
        },
        {
          "id": "columbia-university-fafc3474-political-science-genuine",
          "name": "Political Science",
          "confidence": "verified"
        },
        {
          "id": "columbia-university-fafc3474-psychology-genuine",
          "name": "Psychology",
          "confidence": "verified"
        },
        {
          "id": "columbia-university-fafc3474-history-genuine",
          "name": "History",
          "confidence": "verified"
        },
        {
          "id": "columbia-university-fafc3474-philosophy-genuine",
          "name": "Philosophy",
          "confidence": "verified"
        },
        {
          "id": "columbia-university-fafc3474-english-genuine",
          "name": "English",
          "confidence": "verified"
        },
        {
          "id": "columbia-university-fafc3474-sociology-genuine",
          "name": "Sociology",
          "confidence": "verified"
        },
        {
          "id": "columbia-university-applied-physics-applied-mathematics-e89ded3c",
          "name": "Applied Physics / Applied Mathematics",
          "confidence": "verified"
        },
        {
          "id": "columbia-university-civil-engineering-engineering-mechanics-769716e5",
          "name": "Civil Engineering & Engineering Mechanics",
          "confidence": "verified"
        },
        {
          "id": "columbia-university-earth-environmental-engineering-c689e36f",
          "name": "Earth & Environmental Engineering",
          "confidence": "verified"
        },
        {
          "id": "columbia-university-engineering-undecided-general-4221a9a8",
          "name": "Engineering (Undecided / General)",
          "confidence": "verified"
        },
        {
          "id": "columbia-university-industrial-engineering-operations-resear-f1afb8cf",
          "name": "Industrial Engineering & Operations Research",
          "confidence": "verified"
        },
        {
          "id": "columbia-university-materials-science-engineering-70d06be4",
          "name": "Materials Science & Engineering",
          "confidence": "verified"
        }
      ]
    },
    {
      "id": "ohio-state-university-58aaadd5",
      "name": "Ohio State University",
      "shortName": "Ohio State University",
      "majors": [
        {
          "id": "ohio-state-university-58aaadd5-computer-science-genuine",
          "name": "Computer Science",
          "confidence": "verified"
        },
        {
          "id": "ohio-state-university-58aaadd5-data-science-genuine",
          "name": "Data Science",
          "confidence": "verified"
        },
        {
          "id": "ohio-state-university-58aaadd5-information-technology-genuine",
          "name": "Information Technology",
          "confidence": "verified"
        },
        {
          "id": "ohio-state-university-58aaadd5-computer-engineering-genuine",
          "name": "Computer Engineering",
          "confidence": "verified"
        },
        {
          "id": "ohio-state-university-58aaadd5-electrical-engineering-genuine",
          "name": "Electrical Engineering",
          "confidence": "verified"
        },
        {
          "id": "ohio-state-university-mechanical-engineering-95414f06",
          "name": "Mechanical Engineering",
          "confidence": "verified"
        },
        {
          "id": "ohio-state-university-civil-engineering-f4c84737",
          "name": "Civil Engineering",
          "confidence": "verified"
        },
        {
          "id": "ohio-state-university-chemical-engineering-fb5c44f8",
          "name": "Chemical Engineering",
          "confidence": "verified"
        },
        {
          "id": "ohio-state-university-biomedical-engineering-b9fe0551",
          "name": "Biomedical Engineering",
          "confidence": "verified"
        },
        {
          "id": "ohio-state-university-58aaadd5-industrial-engineering-genuine",
          "name": "Industrial Engineering",
          "confidence": "verified"
        },
        {
          "id": "ohio-state-university-aerospace-engineering-9d19393f",
          "name": "Aerospace Engineering",
          "confidence": "verified"
        },
        {
          "id": "ohio-state-university-58aaadd5-business-administration-genuine",
          "name": "Business Administration",
          "confidence": "verified"
        },
        {
          "id": "ohio-state-university-58aaadd5-finance-genuine",
          "name": "Finance",
          "confidence": "verified"
        },
        {
          "id": "ohio-state-university-58aaadd5-accounting-genuine",
          "name": "Accounting",
          "confidence": "verified"
        },
        {
          "id": "ohio-state-university-58aaadd5-marketing-genuine",
          "name": "Marketing",
          "confidence": "verified"
        },
        {
          "id": "ohio-state-university-58aaadd5-management-genuine",
          "name": "Management",
          "confidence": "verified"
        },
        {
          "id": "ohio-state-university-58aaadd5-economics-genuine",
          "name": "Economics",
          "confidence": "verified"
        },
        {
          "id": "ohio-state-university-58aaadd5-psychology-genuine",
          "name": "Psychology",
          "confidence": "verified"
        },
        {
          "id": "ohio-state-university-58aaadd5-political-science-genuine",
          "name": "Political Science",
          "confidence": "verified"
        },
        {
          "id": "ohio-state-university-58aaadd5-sociology-genuine",
          "name": "Sociology",
          "confidence": "verified"
        },
        {
          "id": "ohio-state-university-58aaadd5-history-genuine",
          "name": "History",
          "confidence": "verified"
        },
        {
          "id": "ohio-state-university-58aaadd5-english-genuine",
          "name": "English",
          "confidence": "verified"
        },
        {
          "id": "ohio-state-university-58aaadd5-communications-genuine",
          "name": "Communications",
          "confidence": "verified"
        },
        {
          "id": "ohio-state-university-58aaadd5-biology-genuine",
          "name": "Biology",
          "confidence": "verified"
        },
        {
          "id": "ohio-state-university-58aaadd5-biochemistry-genuine",
          "name": "Biochemistry",
          "confidence": "verified"
        },
        {
          "id": "ohio-state-university-58aaadd5-chemistry-genuine",
          "name": "Chemistry",
          "confidence": "verified"
        },
        {
          "id": "ohio-state-university-58aaadd5-physics-genuine",
          "name": "Physics",
          "confidence": "verified"
        },
        {
          "id": "ohio-state-university-58aaadd5-mathematics-genuine",
          "name": "Mathematics",
          "confidence": "verified"
        },
        {
          "id": "ohio-state-university-58aaadd5-statistics-genuine",
          "name": "Statistics",
          "confidence": "verified"
        },
        {
          "id": "ohio-state-university-58aaadd5-public-health-genuine",
          "name": "Public Health",
          "confidence": "verified"
        },
        {
          "id": "ohio-state-university-58aaadd5-nursing-genuine",
          "name": "Nursing",
          "confidence": "verified"
        },
        {
          "id": "ohio-state-university-58aaadd5-international-relations-genuine",
          "name": "International Relations",
          "confidence": "verified"
        },
        {
          "id": "ohio-state-university-58aaadd5-philosophy-genuine",
          "name": "Philosophy",
          "confidence": "verified"
        },
        {
          "id": "ohio-state-university-computer-science-engineering-eng-c6860a1e",
          "name": "Computer Science & Engineering (Eng.)",
          "confidence": "verified"
        },
        {
          "id": "ohio-state-university-computer-information-science-a-s-5d5f20d6",
          "name": "Computer & Information Science (A&S)",
          "confidence": "verified"
        },
        {
          "id": "ohio-state-university-electrical-computer-engineering-46f4fd41",
          "name": "Electrical & Computer Engineering",
          "confidence": "verified"
        },
        {
          "id": "ohio-state-university-environmental-engineering-a5f2d8f6",
          "name": "Environmental Engineering",
          "confidence": "verified"
        },
        {
          "id": "ohio-state-university-food-ag-biological-engineering-c68cf613",
          "name": "Food, Ag & Biological Engineering",
          "confidence": "verified"
        },
        {
          "id": "ohio-state-university-industrial-systems-engineering-bde44100",
          "name": "Industrial & Systems Engineering",
          "confidence": "verified"
        },
        {
          "id": "ohio-state-university-materials-science-engineering-54994f80",
          "name": "Materials Science & Engineering",
          "confidence": "verified"
        },
        {
          "id": "ohio-state-university-welding-engineering-b5048b7b",
          "name": "Welding Engineering",
          "confidence": "verified"
        },
        {
          "id": "ohio-state-university-engineering-physics-1c6e0aab",
          "name": "Engineering Physics",
          "confidence": "verified"
        },
        {
          "id": "ohio-state-university-aviation-engineering-9d291e80",
          "name": "Aviation Engineering",
          "confidence": "verified"
        }
      ]
    },
    {
      "id": "uiuc-766d754c",
      "name": "University of Illinois Urbana-Champaign (UIUC)",
      "shortName": "University of Illinois Urbana-Champaign (UIUC)",
      "majors": [
        {
          "id": "uiuc-766d754c-computer-science-genuine",
          "name": "Computer Science",
          "confidence": "verified"
        },
        {
          "id": "uiuc-766d754c-data-science-genuine",
          "name": "Data Science",
          "confidence": "verified"
        },
        {
          "id": "uiuc-766d754c-information-technology-genuine",
          "name": "Information Technology",
          "confidence": "verified"
        },
        {
          "id": "uiuc-computer-engineering-cf2e7cba",
          "name": "Computer Engineering",
          "confidence": "verified"
        },
        {
          "id": "uiuc-electrical-engineering-39a2677a",
          "name": "Electrical Engineering",
          "confidence": "verified"
        },
        {
          "id": "uiuc-mechanical-engineering-a0e6e888",
          "name": "Mechanical Engineering",
          "confidence": "verified"
        },
        {
          "id": "uiuc-civil-engineering-eb3c077e",
          "name": "Civil Engineering",
          "confidence": "verified"
        },
        {
          "id": "uiuc-766d754c-chemical-engineering-genuine",
          "name": "Chemical Engineering",
          "confidence": "verified"
        },
        {
          "id": "uiuc-766d754c-biomedical-engineering-genuine",
          "name": "Biomedical Engineering",
          "confidence": "verified"
        },
        {
          "id": "uiuc-industrial-engineering-035762ac",
          "name": "Industrial Engineering",
          "confidence": "verified"
        },
        {
          "id": "uiuc-aerospace-engineering-4844f804",
          "name": "Aerospace Engineering",
          "confidence": "verified"
        },
        {
          "id": "uiuc-766d754c-business-administration-genuine",
          "name": "Business Administration",
          "confidence": "verified"
        },
        {
          "id": "uiuc-766d754c-finance-genuine",
          "name": "Finance",
          "confidence": "verified"
        },
        {
          "id": "uiuc-766d754c-accounting-genuine",
          "name": "Accounting",
          "confidence": "verified"
        },
        {
          "id": "uiuc-766d754c-marketing-genuine",
          "name": "Marketing",
          "confidence": "verified"
        },
        {
          "id": "uiuc-766d754c-management-genuine",
          "name": "Management",
          "confidence": "verified"
        },
        {
          "id": "uiuc-766d754c-economics-genuine",
          "name": "Economics",
          "confidence": "verified"
        },
        {
          "id": "uiuc-766d754c-psychology-genuine",
          "name": "Psychology",
          "confidence": "verified"
        },
        {
          "id": "uiuc-766d754c-political-science-genuine",
          "name": "Political Science",
          "confidence": "verified"
        },
        {
          "id": "uiuc-766d754c-sociology-genuine",
          "name": "Sociology",
          "confidence": "verified"
        },
        {
          "id": "uiuc-766d754c-history-genuine",
          "name": "History",
          "confidence": "verified"
        },
        {
          "id": "uiuc-766d754c-english-genuine",
          "name": "English",
          "confidence": "verified"
        },
        {
          "id": "uiuc-766d754c-communications-genuine",
          "name": "Communications",
          "confidence": "verified"
        },
        {
          "id": "uiuc-766d754c-biology-genuine",
          "name": "Biology",
          "confidence": "verified"
        },
        {
          "id": "uiuc-766d754c-biochemistry-genuine",
          "name": "Biochemistry",
          "confidence": "verified"
        },
        {
          "id": "uiuc-766d754c-chemistry-genuine",
          "name": "Chemistry",
          "confidence": "verified"
        },
        {
          "id": "uiuc-766d754c-physics-genuine",
          "name": "Physics",
          "confidence": "verified"
        },
        {
          "id": "uiuc-766d754c-mathematics-genuine",
          "name": "Mathematics",
          "confidence": "verified"
        },
        {
          "id": "uiuc-766d754c-statistics-genuine",
          "name": "Statistics",
          "confidence": "verified"
        },
        {
          "id": "uiuc-766d754c-public-health-genuine",
          "name": "Public Health",
          "confidence": "verified"
        },
        {
          "id": "uiuc-766d754c-nursing-genuine",
          "name": "Nursing",
          "confidence": "verified"
        },
        {
          "id": "uiuc-766d754c-international-relations-genuine",
          "name": "International Relations",
          "confidence": "verified"
        },
        {
          "id": "uiuc-766d754c-philosophy-genuine",
          "name": "Philosophy",
          "confidence": "verified"
        },
        {
          "id": "uiuc-agricultural-biological-engineering-d0bdecd9",
          "name": "Agricultural & Biological Engineering",
          "confidence": "verified"
        },
        {
          "id": "uiuc-bioengineering-dbdfa9c3",
          "name": "Bioengineering",
          "confidence": "verified"
        },
        {
          "id": "uiuc-computer-science-bs-792b8238",
          "name": "Computer Science (BS)",
          "confidence": "verified"
        },
        {
          "id": "uiuc-engineering-mechanics-e3363a6a",
          "name": "Engineering Mechanics",
          "confidence": "verified"
        },
        {
          "id": "uiuc-environmental-engineering-dcfcd9c4",
          "name": "Environmental Engineering",
          "confidence": "verified"
        },
        {
          "id": "uiuc-materials-science-engineering-fe13b0c4",
          "name": "Materials Science & Engineering",
          "confidence": "verified"
        },
        {
          "id": "uiuc-neural-engineering-a25a6b8a",
          "name": "Neural Engineering",
          "confidence": "verified"
        },
        {
          "id": "uiuc-nuclear-plasma-radiological-eng-npre-3fa28aeb",
          "name": "Nuclear, Plasma & Radiological Eng. (NPRE)",
          "confidence": "verified"
        },
        {
          "id": "uiuc-npre-data-science-dual-degree-a79b68d2",
          "name": "NPRE + Data Science (dual degree)",
          "confidence": "verified"
        },
        {
          "id": "uiuc-physics-engineering-physics-59fbee6f",
          "name": "Physics (Engineering Physics)",
          "confidence": "verified"
        },
        {
          "id": "uiuc-systems-engineering-design-71508f31",
          "name": "Systems Engineering & Design",
          "confidence": "verified"
        },
        {
          "id": "uiuc-cs-bioengineering-dual-degree-b02dc0fe",
          "name": "CS + Bioengineering (dual degree)",
          "confidence": "verified"
        },
        {
          "id": "uiuc-cs-physics-dual-degree-cf882143",
          "name": "CS + Physics (dual degree)",
          "confidence": "verified"
        },
        {
          "id": "uiuc-chemical-engineering-las-not-grainger-3ba81050",
          "name": "Chemical Engineering (LAS — NOT Grainger)",
          "confidence": "verified"
        }
      ]
    },
    {
      "id": "new-york-university-4665a194",
      "name": "New York University",
      "shortName": "New York University",
      "majors": [
        {
          "id": "new-york-university-4665a194-computer-science-genuine",
          "name": "Computer Science",
          "confidence": "verified"
        },
        {
          "id": "new-york-university-4665a194-data-science-genuine",
          "name": "Data Science",
          "confidence": "verified"
        },
        {
          "id": "new-york-university-4665a194-information-technology-genuine",
          "name": "Information Technology",
          "confidence": "verified"
        },
        {
          "id": "new-york-university-4665a194-computer-engineering-genuine",
          "name": "Computer Engineering",
          "confidence": "verified"
        },
        {
          "id": "new-york-university-4665a194-electrical-engineering-genuine",
          "name": "Electrical Engineering",
          "confidence": "verified"
        },
        {
          "id": "new-york-university-4665a194-mechanical-engineering-genuine",
          "name": "Mechanical Engineering",
          "confidence": "verified"
        },
        {
          "id": "new-york-university-4665a194-civil-engineering-genuine",
          "name": "Civil Engineering",
          "confidence": "verified"
        },
        {
          "id": "new-york-university-4665a194-chemical-engineering-genuine",
          "name": "Chemical Engineering",
          "confidence": "verified"
        },
        {
          "id": "new-york-university-4665a194-biomedical-engineering-genuine",
          "name": "Biomedical Engineering",
          "confidence": "verified"
        },
        {
          "id": "new-york-university-4665a194-industrial-engineering-genuine",
          "name": "Industrial Engineering",
          "confidence": "verified"
        },
        {
          "id": "new-york-university-4665a194-aerospace-engineering-genuine",
          "name": "Aerospace Engineering",
          "confidence": "verified"
        },
        {
          "id": "new-york-university-4665a194-business-administration-genuine",
          "name": "Business Administration",
          "confidence": "verified"
        },
        {
          "id": "new-york-university-4665a194-finance-genuine",
          "name": "Finance",
          "confidence": "verified"
        },
        {
          "id": "new-york-university-4665a194-accounting-genuine",
          "name": "Accounting",
          "confidence": "verified"
        },
        {
          "id": "new-york-university-4665a194-marketing-genuine",
          "name": "Marketing",
          "confidence": "verified"
        },
        {
          "id": "new-york-university-4665a194-management-genuine",
          "name": "Management",
          "confidence": "verified"
        },
        {
          "id": "new-york-university-4665a194-economics-genuine",
          "name": "Economics",
          "confidence": "verified"
        },
        {
          "id": "new-york-university-4665a194-psychology-genuine",
          "name": "Psychology",
          "confidence": "verified"
        },
        {
          "id": "new-york-university-4665a194-political-science-genuine",
          "name": "Political Science",
          "confidence": "verified"
        },
        {
          "id": "new-york-university-4665a194-sociology-genuine",
          "name": "Sociology",
          "confidence": "verified"
        },
        {
          "id": "new-york-university-4665a194-history-genuine",
          "name": "History",
          "confidence": "verified"
        },
        {
          "id": "new-york-university-4665a194-english-genuine",
          "name": "English",
          "confidence": "verified"
        },
        {
          "id": "new-york-university-4665a194-communications-genuine",
          "name": "Communications",
          "confidence": "verified"
        },
        {
          "id": "new-york-university-4665a194-biology-genuine",
          "name": "Biology",
          "confidence": "verified"
        },
        {
          "id": "new-york-university-4665a194-biochemistry-genuine",
          "name": "Biochemistry",
          "confidence": "verified"
        },
        {
          "id": "new-york-university-4665a194-chemistry-genuine",
          "name": "Chemistry",
          "confidence": "verified"
        },
        {
          "id": "new-york-university-4665a194-physics-genuine",
          "name": "Physics",
          "confidence": "verified"
        },
        {
          "id": "new-york-university-4665a194-mathematics-genuine",
          "name": "Mathematics",
          "confidence": "verified"
        },
        {
          "id": "new-york-university-4665a194-statistics-genuine",
          "name": "Statistics",
          "confidence": "verified"
        },
        {
          "id": "new-york-university-4665a194-public-health-genuine",
          "name": "Public Health",
          "confidence": "verified"
        },
        {
          "id": "new-york-university-4665a194-nursing-genuine",
          "name": "Nursing",
          "confidence": "verified"
        },
        {
          "id": "new-york-university-4665a194-international-relations-genuine",
          "name": "International Relations",
          "confidence": "verified"
        },
        {
          "id": "new-york-university-4665a194-philosophy-genuine",
          "name": "Philosophy",
          "confidence": "verified"
        },
        {
          "id": "new-york-university-applied-physics-b-s-09d89f6e",
          "name": "Applied Physics, B.S.",
          "confidence": "verified"
        },
        {
          "id": "new-york-university-biomolecular-science-b-s-0efa4abe",
          "name": "Biomolecular Science, B.S.",
          "confidence": "verified"
        },
        {
          "id": "new-york-university-business-technology-management-b-s-16e26765",
          "name": "Business & Technology Management, B.S.",
          "confidence": "verified"
        },
        {
          "id": "new-york-university-chemical-biomolecular-engineering-b-s-cc71227b",
          "name": "Chemical & Biomolecular Engineering, B.S.",
          "confidence": "verified"
        },
        {
          "id": "new-york-university-civil-engineering-b-s-8de46960",
          "name": "Civil Engineering, B.S.",
          "confidence": "verified"
        },
        {
          "id": "new-york-university-computer-engineering-b-s-79ae595b",
          "name": "Computer Engineering, B.S.",
          "confidence": "verified"
        },
        {
          "id": "new-york-university-computer-science-b-s-84682d50",
          "name": "Computer Science, B.S.",
          "confidence": "verified"
        },
        {
          "id": "new-york-university-electrical-engineering-b-s-6a914556",
          "name": "Electrical Engineering, B.S.",
          "confidence": "verified"
        },
        {
          "id": "new-york-university-electrical-computer-engineering-b-s-52a481ac",
          "name": "Electrical & Computer Engineering, B.S.",
          "confidence": "verified"
        },
        {
          "id": "new-york-university-environmental-engineering-b-s-9fad8591",
          "name": "Environmental Engineering, B.S.",
          "confidence": "verified"
        },
        {
          "id": "new-york-university-integrated-design-media-b-s-7a006fa8",
          "name": "Integrated Design & Media, B.S.",
          "confidence": "verified"
        },
        {
          "id": "new-york-university-mathematics-b-s-f719fe5f",
          "name": "Mathematics, B.S.",
          "confidence": "verified"
        },
        {
          "id": "new-york-university-mathematics-physics-b-s-65b30815",
          "name": "Mathematics & Physics, B.S.",
          "confidence": "verified"
        },
        {
          "id": "new-york-university-mechanical-engineering-b-s-a19c5e19",
          "name": "Mechanical Engineering, B.S.",
          "confidence": "verified"
        }
      ]
    },
    {
      "id": "texas-a-m-6e734225",
      "name": "Texas A&M University",
      "shortName": "Texas A&M University",
      "majors": [
        {
          "id": "texas-a-m-6e734225-computer-science-genuine",
          "name": "Computer Science",
          "confidence": "verified"
        },
        {
          "id": "texas-a-m-6e734225-data-science-genuine",
          "name": "Data Science",
          "confidence": "verified"
        },
        {
          "id": "texas-a-m-6e734225-information-technology-genuine",
          "name": "Information Technology",
          "confidence": "verified"
        },
        {
          "id": "texas-a-m-computer-engineering-59b984f6",
          "name": "Computer Engineering",
          "confidence": "verified"
        },
        {
          "id": "texas-a-m-electrical-engineering-a984929b",
          "name": "Electrical Engineering",
          "confidence": "verified"
        },
        {
          "id": "texas-a-m-6e734225-mechanical-engineering-genuine",
          "name": "Mechanical Engineering",
          "confidence": "verified"
        },
        {
          "id": "texas-a-m-civil-engineering-713e3afe",
          "name": "Civil Engineering",
          "confidence": "verified"
        },
        {
          "id": "texas-a-m-chemical-engineering-e8aabba4",
          "name": "Chemical Engineering",
          "confidence": "verified"
        },
        {
          "id": "texas-a-m-biomedical-engineering-225ce6ea",
          "name": "Biomedical Engineering",
          "confidence": "verified"
        },
        {
          "id": "texas-a-m-industrial-engineering-43d58bcc",
          "name": "Industrial Engineering",
          "confidence": "verified"
        },
        {
          "id": "texas-a-m-aerospace-engineering-11a14b83",
          "name": "Aerospace Engineering",
          "confidence": "verified"
        },
        {
          "id": "texas-a-m-6e734225-business-administration-genuine",
          "name": "Business Administration",
          "confidence": "verified"
        },
        {
          "id": "texas-a-m-6e734225-finance-genuine",
          "name": "Finance",
          "confidence": "verified"
        },
        {
          "id": "texas-a-m-6e734225-accounting-genuine",
          "name": "Accounting",
          "confidence": "verified"
        },
        {
          "id": "texas-a-m-6e734225-marketing-genuine",
          "name": "Marketing",
          "confidence": "verified"
        },
        {
          "id": "texas-a-m-6e734225-management-genuine",
          "name": "Management",
          "confidence": "verified"
        },
        {
          "id": "texas-a-m-6e734225-economics-genuine",
          "name": "Economics",
          "confidence": "verified"
        },
        {
          "id": "texas-a-m-6e734225-psychology-genuine",
          "name": "Psychology",
          "confidence": "verified"
        },
        {
          "id": "texas-a-m-6e734225-political-science-genuine",
          "name": "Political Science",
          "confidence": "verified"
        },
        {
          "id": "texas-a-m-6e734225-sociology-genuine",
          "name": "Sociology",
          "confidence": "verified"
        },
        {
          "id": "texas-a-m-6e734225-history-genuine",
          "name": "History",
          "confidence": "verified"
        },
        {
          "id": "texas-a-m-6e734225-english-genuine",
          "name": "English",
          "confidence": "verified"
        },
        {
          "id": "texas-a-m-6e734225-communications-genuine",
          "name": "Communications",
          "confidence": "verified"
        },
        {
          "id": "texas-a-m-6e734225-biology-genuine",
          "name": "Biology",
          "confidence": "verified"
        },
        {
          "id": "texas-a-m-6e734225-biochemistry-genuine",
          "name": "Biochemistry",
          "confidence": "verified"
        },
        {
          "id": "texas-a-m-6e734225-chemistry-genuine",
          "name": "Chemistry",
          "confidence": "verified"
        },
        {
          "id": "texas-a-m-6e734225-physics-genuine",
          "name": "Physics",
          "confidence": "verified"
        },
        {
          "id": "texas-a-m-6e734225-mathematics-genuine",
          "name": "Mathematics",
          "confidence": "verified"
        },
        {
          "id": "texas-a-m-6e734225-statistics-genuine",
          "name": "Statistics",
          "confidence": "verified"
        },
        {
          "id": "texas-a-m-6e734225-public-health-genuine",
          "name": "Public Health",
          "confidence": "verified"
        },
        {
          "id": "texas-a-m-6e734225-nursing-genuine",
          "name": "Nursing",
          "confidence": "verified"
        },
        {
          "id": "texas-a-m-6e734225-international-relations-genuine",
          "name": "International Relations",
          "confidence": "verified"
        },
        {
          "id": "texas-a-m-6e734225-philosophy-genuine",
          "name": "Philosophy",
          "confidence": "verified"
        },
        {
          "id": "texas-a-m-architectural-engineering-1a75488b",
          "name": "Architectural Engineering",
          "confidence": "verified"
        },
        {
          "id": "texas-a-m-computer-science-bs-69339f08",
          "name": "Computer Science (BS)",
          "confidence": "verified"
        },
        {
          "id": "texas-a-m-computer-science-ba-46e1bdb2",
          "name": "Computer Science (BA)",
          "confidence": "verified"
        },
        {
          "id": "texas-a-m-environmental-engineering-70940da7",
          "name": "Environmental Engineering",
          "confidence": "verified"
        },
        {
          "id": "texas-a-m-interdisciplinary-engineering-cfdd66cb",
          "name": "Interdisciplinary Engineering",
          "confidence": "verified"
        },
        {
          "id": "texas-a-m-manufacturing-mechanical-engineering-technology-mm-79e09f39",
          "name": "Manufacturing & Mechanical Engineering Technology (MMET)",
          "confidence": "verified"
        },
        {
          "id": "texas-a-m-materials-science-engineering-7724eb96",
          "name": "Materials Science & Engineering",
          "confidence": "verified"
        },
        {
          "id": "texas-a-m-nuclear-engineering-0ec6b231",
          "name": "Nuclear Engineering",
          "confidence": "verified"
        },
        {
          "id": "texas-a-m-petroleum-engineering-2268614f",
          "name": "Petroleum Engineering",
          "confidence": "verified"
        }
      ]
    },
    {
      "id": "uc-san-diego-bc540bcb",
      "name": "UC San Diego",
      "shortName": "UC San Diego",
      "majors": [
        {
          "id": "uc-san-diego-bc540bcb-information-technology-genuine",
          "name": "Information Technology",
          "confidence": "verified"
        },
        {
          "id": "uc-san-diego-bc540bcb-civil-engineering-genuine",
          "name": "Civil Engineering",
          "confidence": "verified"
        },
        {
          "id": "uc-san-diego-bc540bcb-chemical-engineering-genuine",
          "name": "Chemical Engineering",
          "confidence": "verified"
        },
        {
          "id": "uc-san-diego-bc540bcb-biomedical-engineering-genuine",
          "name": "Biomedical Engineering",
          "confidence": "verified"
        },
        {
          "id": "uc-san-diego-bc540bcb-industrial-engineering-genuine",
          "name": "Industrial Engineering",
          "confidence": "verified"
        },
        {
          "id": "uc-san-diego-bc540bcb-finance-genuine",
          "name": "Finance",
          "confidence": "verified"
        },
        {
          "id": "uc-san-diego-bc540bcb-accounting-genuine",
          "name": "Accounting",
          "confidence": "verified"
        },
        {
          "id": "uc-san-diego-bc540bcb-marketing-genuine",
          "name": "Marketing",
          "confidence": "verified"
        },
        {
          "id": "uc-san-diego-bc540bcb-management-genuine",
          "name": "Management",
          "confidence": "verified"
        },
        {
          "id": "uc-san-diego-bc540bcb-political-science-genuine",
          "name": "Political Science",
          "confidence": "verified"
        },
        {
          "id": "uc-san-diego-bc540bcb-sociology-genuine",
          "name": "Sociology",
          "confidence": "verified"
        },
        {
          "id": "uc-san-diego-bc540bcb-history-genuine",
          "name": "History",
          "confidence": "verified"
        },
        {
          "id": "uc-san-diego-bc540bcb-english-genuine",
          "name": "English",
          "confidence": "verified"
        },
        {
          "id": "uc-san-diego-bc540bcb-communications-genuine",
          "name": "Communications",
          "confidence": "verified"
        },
        {
          "id": "uc-san-diego-bc540bcb-biochemistry-genuine",
          "name": "Biochemistry",
          "confidence": "verified"
        },
        {
          "id": "uc-san-diego-bc540bcb-chemistry-genuine",
          "name": "Chemistry",
          "confidence": "verified"
        },
        {
          "id": "uc-san-diego-bc540bcb-physics-genuine",
          "name": "Physics",
          "confidence": "verified"
        },
        {
          "id": "uc-san-diego-bc540bcb-mathematics-genuine",
          "name": "Mathematics",
          "confidence": "verified"
        },
        {
          "id": "uc-san-diego-bc540bcb-statistics-genuine",
          "name": "Statistics",
          "confidence": "verified"
        },
        {
          "id": "uc-san-diego-bc540bcb-public-health-genuine",
          "name": "Public Health",
          "confidence": "verified"
        },
        {
          "id": "uc-san-diego-bc540bcb-nursing-genuine",
          "name": "Nursing",
          "confidence": "verified"
        },
        {
          "id": "uc-san-diego-bc540bcb-international-relations-genuine",
          "name": "International Relations",
          "confidence": "verified"
        },
        {
          "id": "uc-san-diego-bc540bcb-philosophy-genuine",
          "name": "Philosophy",
          "confidence": "verified"
        },
        {
          "id": "uc-san-diego-bioengineering-bioengineering-8f825fea",
          "name": "Bioengineering",
          "confidence": "verified"
        },
        {
          "id": "uc-san-diego-bioengineering-bioinformatics-162d3c0f",
          "name": "Bioengineering — Bioinformatics",
          "confidence": "verified"
        },
        {
          "id": "uc-san-diego-bioengineering-biosystems-e3c9d013",
          "name": "Bioengineering — BioSystems",
          "confidence": "verified"
        },
        {
          "id": "uc-san-diego-bioengineering-biotechnology-22018205",
          "name": "Bioengineering — Biotechnology",
          "confidence": "verified"
        },
        {
          "id": "uc-san-diego-chemical-nanoengineering-chemical-engineering-9da2aabe",
          "name": "Chemical & NanoEngineering — Chemical Engineering",
          "confidence": "verified"
        },
        {
          "id": "uc-san-diego-chemical-nanoengineering-nanoengineering-3b25af02",
          "name": "Chemical & NanoEngineering — NanoEngineering",
          "confidence": "verified"
        },
        {
          "id": "uc-san-diego-computer-science-engineering-computer-engineeri-4eca9590",
          "name": "Computer Science & Engineering — Computer Engineering (CSE dept)",
          "confidence": "verified"
        },
        {
          "id": "uc-san-diego-computer-science-engineering-computer-science-439fe3d8",
          "name": "Computer Science & Engineering — Computer Science",
          "confidence": "verified"
        },
        {
          "id": "uc-san-diego-computer-science-engineering-cs-bioinformatics-631df8ea",
          "name": "Computer Science & Engineering — CS Bioinformatics",
          "confidence": "verified"
        },
        {
          "id": "uc-san-diego-computer-science-engineering-artificial-intelli-23d9ec77",
          "name": "Computer Science & Engineering — Artificial Intelligence",
          "confidence": "verified"
        },
        {
          "id": "uc-san-diego-electrical-computer-engineering-computer-engine-e098993b",
          "name": "Electrical Engineering",
          "confidence": "verified"
        },
        {
          "id": "uc-san-diego-electrical-computer-engineering-electrical-engi-51099247",
          "name": "Electrical & Computer Engineering — Electrical Engineering",
          "confidence": "verified"
        },
        {
          "id": "uc-san-diego-electrical-computer-engineering-ee-society-4f6bed05",
          "name": "Electrical & Computer Engineering — EE & Society",
          "confidence": "verified"
        },
        {
          "id": "uc-san-diego-electrical-computer-engineering-engineering-phy-dbdac339",
          "name": "Electrical & Computer Engineering — Engineering Physics",
          "confidence": "verified"
        },
        {
          "id": "uc-san-diego-mechanical-aerospace-engineering-aerospace-engi-5f5111a8",
          "name": "Mechanical Engineering",
          "confidence": "verified"
        },
        {
          "id": "uc-san-diego-mechanical-aerospace-engineering-mechanical-eng-2638f5fd",
          "name": "Aerospace Engineering",
          "confidence": "verified"
        },
        {
          "id": "uc-san-diego-structural-engineering-structural-engineering-5df87225",
          "name": "Structural Engineering — Structural Engineering",
          "confidence": "verified"
        },
        {
          "id": "uc-san-diego-physics-jacobs-school-physics-73165dbb",
          "name": "Physics (Jacobs School) — Physics",
          "confidence": "verified"
        },
        {
          "id": "uc-san-diego-bc540bcb-computer-science",
          "name": "Computer Science",
          "confidence": "verified"
        },
        {
          "id": "uc-san-diego-bc540bcb-computer-engineering",
          "name": "Computer Engineering",
          "confidence": "verified"
        },
        {
          "id": "uc-san-diego-bc540bcb-data-science",
          "name": "Data Science",
          "confidence": "verified"
        },
        {
          "id": "uc-san-diego-bc540bcb-business-administration",
          "name": "Business Administration",
          "confidence": "verified"
        },
        {
          "id": "uc-san-diego-bc540bcb-economics",
          "name": "Economics",
          "confidence": "verified"
        },
        {
          "id": "uc-san-diego-bc540bcb-psychology",
          "name": "Psychology",
          "confidence": "verified"
        },
        {
          "id": "uc-san-diego-bc540bcb-cognitive-science",
          "name": "Cognitive Science",
          "confidence": "verified"
        },
        {
          "id": "uc-san-diego-bc540bcb-biology",
          "name": "Biology",
          "confidence": "verified"
        }
      ]
    },
    {
      "id": "uc-irvine-a176fec7",
      "name": "UC Irvine",
      "shortName": "UC Irvine",
      "majors": [
        {
          "id": "uc-irvine-a176fec7-information-technology-genuine",
          "name": "Information Technology",
          "confidence": "verified"
        },
        {
          "id": "uc-irvine-computer-engineering-2441ac36",
          "name": "Computer Engineering",
          "confidence": "verified"
        },
        {
          "id": "uc-irvine-electrical-engineering-1fd9f686",
          "name": "Electrical Engineering",
          "confidence": "verified"
        },
        {
          "id": "uc-irvine-mechanical-engineering-96fc08c3",
          "name": "Mechanical Engineering",
          "confidence": "verified"
        },
        {
          "id": "uc-irvine-civil-engineering-ab506321",
          "name": "Civil Engineering",
          "confidence": "verified"
        },
        {
          "id": "uc-irvine-chemical-engineering-e6ee776d",
          "name": "Chemical Engineering",
          "confidence": "verified"
        },
        {
          "id": "uc-irvine-biomedical-engineering-d199095a",
          "name": "Biomedical Engineering",
          "confidence": "verified"
        },
        {
          "id": "uc-irvine-a176fec7-industrial-engineering-genuine",
          "name": "Industrial Engineering",
          "confidence": "verified"
        },
        {
          "id": "uc-irvine-aerospace-engineering-6ae61eb9",
          "name": "Aerospace Engineering",
          "confidence": "verified"
        },
        {
          "id": "uc-irvine-a176fec7-finance-genuine",
          "name": "Finance",
          "confidence": "verified"
        },
        {
          "id": "uc-irvine-a176fec7-accounting-genuine",
          "name": "Accounting",
          "confidence": "verified"
        },
        {
          "id": "uc-irvine-a176fec7-marketing-genuine",
          "name": "Marketing",
          "confidence": "verified"
        },
        {
          "id": "uc-irvine-a176fec7-management-genuine",
          "name": "Management",
          "confidence": "verified"
        },
        {
          "id": "uc-irvine-a176fec7-political-science-genuine",
          "name": "Political Science",
          "confidence": "verified"
        },
        {
          "id": "uc-irvine-a176fec7-sociology-genuine",
          "name": "Sociology",
          "confidence": "verified"
        },
        {
          "id": "uc-irvine-a176fec7-history-genuine",
          "name": "History",
          "confidence": "verified"
        },
        {
          "id": "uc-irvine-a176fec7-english-genuine",
          "name": "English",
          "confidence": "verified"
        },
        {
          "id": "uc-irvine-a176fec7-communications-genuine",
          "name": "Communications",
          "confidence": "verified"
        },
        {
          "id": "uc-irvine-a176fec7-biology-genuine",
          "name": "Biology",
          "confidence": "verified"
        },
        {
          "id": "uc-irvine-a176fec7-biochemistry-genuine",
          "name": "Biochemistry",
          "confidence": "verified"
        },
        {
          "id": "uc-irvine-a176fec7-chemistry-genuine",
          "name": "Chemistry",
          "confidence": "verified"
        },
        {
          "id": "uc-irvine-a176fec7-physics-genuine",
          "name": "Physics",
          "confidence": "verified"
        },
        {
          "id": "uc-irvine-a176fec7-mathematics-genuine",
          "name": "Mathematics",
          "confidence": "verified"
        },
        {
          "id": "uc-irvine-a176fec7-statistics-genuine",
          "name": "Statistics",
          "confidence": "verified"
        },
        {
          "id": "uc-irvine-a176fec7-public-health-genuine",
          "name": "Public Health",
          "confidence": "verified"
        },
        {
          "id": "uc-irvine-a176fec7-nursing-genuine",
          "name": "Nursing",
          "confidence": "verified"
        },
        {
          "id": "uc-irvine-a176fec7-international-relations-genuine",
          "name": "International Relations",
          "confidence": "verified"
        },
        {
          "id": "uc-irvine-a176fec7-philosophy-genuine",
          "name": "Philosophy",
          "confidence": "verified"
        },
        {
          "id": "uc-irvine-biomedical-engineering-premedical-13c304ff",
          "name": "Biomedical Engineering: Premedical",
          "confidence": "verified"
        },
        {
          "id": "uc-irvine-computer-science-engineering-38e8fd1f",
          "name": "Computer Science & Engineering",
          "confidence": "verified"
        },
        {
          "id": "uc-irvine-environmental-engineering-1e568af0",
          "name": "Environmental Engineering",
          "confidence": "verified"
        },
        {
          "id": "uc-irvine-materials-science-engineering-10c9fd61",
          "name": "Materials Science & Engineering",
          "confidence": "verified"
        },
        {
          "id": "uc-irvine-a176fec7-computer-science",
          "name": "Computer Science",
          "confidence": "verified"
        },
        {
          "id": "uc-irvine-a176fec7-software-engineering",
          "name": "Software Engineering",
          "confidence": "verified"
        },
        {
          "id": "uc-irvine-a176fec7-business-administration",
          "name": "Business Administration",
          "confidence": "verified"
        },
        {
          "id": "uc-irvine-a176fec7-business-information-management",
          "name": "Business Information Management",
          "confidence": "verified"
        },
        {
          "id": "uc-irvine-a176fec7-economics",
          "name": "Economics",
          "confidence": "verified"
        },
        {
          "id": "uc-irvine-a176fec7-psychology",
          "name": "Psychology",
          "confidence": "verified"
        },
        {
          "id": "uc-irvine-a176fec7-data-science",
          "name": "Data Science",
          "confidence": "verified"
        }
      ]
    },
    {
      "id": "cornell-university-30aa90f4",
      "name": "Cornell University",
      "shortName": "Cornell University",
      "majors": [
        {
          "id": "cornell-university-30aa90f4-computer-science-genuine",
          "name": "Computer Science",
          "confidence": "verified"
        },
        {
          "id": "cornell-university-30aa90f4-data-science-genuine",
          "name": "Data Science",
          "confidence": "verified"
        },
        {
          "id": "cornell-university-30aa90f4-information-technology-genuine",
          "name": "Information Technology",
          "confidence": "verified"
        },
        {
          "id": "cornell-university-30aa90f4-computer-engineering-genuine",
          "name": "Computer Engineering",
          "confidence": "verified"
        },
        {
          "id": "cornell-university-30aa90f4-electrical-engineering-genuine",
          "name": "Electrical Engineering",
          "confidence": "verified"
        },
        {
          "id": "cornell-university-mechanical-engineering-09ba9556",
          "name": "Mechanical Engineering",
          "confidence": "verified"
        },
        {
          "id": "cornell-university-civil-engineering-ac557962",
          "name": "Civil Engineering",
          "confidence": "verified"
        },
        {
          "id": "cornell-university-chemical-engineering-6196dc8b",
          "name": "Chemical Engineering",
          "confidence": "verified"
        },
        {
          "id": "cornell-university-biomedical-engineering-43aa9eec",
          "name": "Biomedical Engineering",
          "confidence": "verified"
        },
        {
          "id": "cornell-university-30aa90f4-industrial-engineering-genuine",
          "name": "Industrial Engineering",
          "confidence": "verified"
        },
        {
          "id": "cornell-university-30aa90f4-aerospace-engineering-genuine",
          "name": "Aerospace Engineering",
          "confidence": "verified"
        },
        {
          "id": "cornell-university-30aa90f4-business-administration-genuine",
          "name": "Business Administration",
          "confidence": "verified"
        },
        {
          "id": "cornell-university-30aa90f4-finance-genuine",
          "name": "Finance",
          "confidence": "verified"
        },
        {
          "id": "cornell-university-30aa90f4-accounting-genuine",
          "name": "Accounting",
          "confidence": "verified"
        },
        {
          "id": "cornell-university-30aa90f4-marketing-genuine",
          "name": "Marketing",
          "confidence": "verified"
        },
        {
          "id": "cornell-university-30aa90f4-management-genuine",
          "name": "Management",
          "confidence": "verified"
        },
        {
          "id": "cornell-university-30aa90f4-economics-genuine",
          "name": "Economics",
          "confidence": "verified"
        },
        {
          "id": "cornell-university-30aa90f4-psychology-genuine",
          "name": "Psychology",
          "confidence": "verified"
        },
        {
          "id": "cornell-university-30aa90f4-political-science-genuine",
          "name": "Political Science",
          "confidence": "verified"
        },
        {
          "id": "cornell-university-30aa90f4-sociology-genuine",
          "name": "Sociology",
          "confidence": "verified"
        },
        {
          "id": "cornell-university-30aa90f4-history-genuine",
          "name": "History",
          "confidence": "verified"
        },
        {
          "id": "cornell-university-30aa90f4-english-genuine",
          "name": "English",
          "confidence": "verified"
        },
        {
          "id": "cornell-university-30aa90f4-communications-genuine",
          "name": "Communications",
          "confidence": "verified"
        },
        {
          "id": "cornell-university-30aa90f4-biology-genuine",
          "name": "Biology",
          "confidence": "verified"
        },
        {
          "id": "cornell-university-30aa90f4-biochemistry-genuine",
          "name": "Biochemistry",
          "confidence": "verified"
        },
        {
          "id": "cornell-university-30aa90f4-chemistry-genuine",
          "name": "Chemistry",
          "confidence": "verified"
        },
        {
          "id": "cornell-university-30aa90f4-physics-genuine",
          "name": "Physics",
          "confidence": "verified"
        },
        {
          "id": "cornell-university-30aa90f4-mathematics-genuine",
          "name": "Mathematics",
          "confidence": "verified"
        },
        {
          "id": "cornell-university-30aa90f4-statistics-genuine",
          "name": "Statistics",
          "confidence": "verified"
        },
        {
          "id": "cornell-university-30aa90f4-public-health-genuine",
          "name": "Public Health",
          "confidence": "verified"
        },
        {
          "id": "cornell-university-30aa90f4-nursing-genuine",
          "name": "Nursing",
          "confidence": "verified"
        },
        {
          "id": "cornell-university-30aa90f4-international-relations-genuine",
          "name": "International Relations",
          "confidence": "verified"
        },
        {
          "id": "cornell-university-30aa90f4-philosophy-genuine",
          "name": "Philosophy",
          "confidence": "verified"
        },
        {
          "id": "cornell-university-biological-engineering-1d397033",
          "name": "Biological Engineering",
          "confidence": "verified"
        },
        {
          "id": "cornell-university-earth-and-atmospheric-sciences-e6ae3f8c",
          "name": "Earth and Atmospheric Sciences",
          "confidence": "verified"
        },
        {
          "id": "cornell-university-electrical-computer-engineering-0bf88e92",
          "name": "Electrical & Computer Engineering",
          "confidence": "verified"
        },
        {
          "id": "cornell-university-engineering-physics-2717d2bf",
          "name": "Engineering Physics",
          "confidence": "verified"
        },
        {
          "id": "cornell-university-environmental-engineering-b73f45eb",
          "name": "Environmental Engineering",
          "confidence": "verified"
        },
        {
          "id": "cornell-university-materials-science-engineering-746b6079",
          "name": "Materials Science & Engineering",
          "confidence": "verified"
        },
        {
          "id": "cornell-university-operations-research-engineering-70892a2d",
          "name": "Operations Research & Engineering",
          "confidence": "verified"
        }
      ]
    },
    {
      "id": "uw-madison-951baa16",
      "name": "University of Wisconsin-Madison",
      "shortName": "University of Wisconsin-Madison",
      "majors": [
        {
          "id": "uw-madison-951baa16-computer-science-genuine",
          "name": "Computer Science",
          "confidence": "verified"
        },
        {
          "id": "uw-madison-951baa16-data-science-genuine",
          "name": "Data Science",
          "confidence": "verified"
        },
        {
          "id": "uw-madison-951baa16-information-technology-genuine",
          "name": "Information Technology",
          "confidence": "verified"
        },
        {
          "id": "uw-madison-computer-engineering-678d7829",
          "name": "Computer Engineering",
          "confidence": "verified"
        },
        {
          "id": "uw-madison-electrical-engineering-a120db05",
          "name": "Electrical Engineering",
          "confidence": "verified"
        },
        {
          "id": "uw-madison-mechanical-engineering-67cfae52",
          "name": "Mechanical Engineering",
          "confidence": "verified"
        },
        {
          "id": "uw-madison-civil-engineering-7d6fad55",
          "name": "Civil Engineering",
          "confidence": "verified"
        },
        {
          "id": "uw-madison-chemical-engineering-bb9f2af7",
          "name": "Chemical Engineering",
          "confidence": "verified"
        },
        {
          "id": "uw-madison-biomedical-engineering-c822ee39",
          "name": "Biomedical Engineering",
          "confidence": "verified"
        },
        {
          "id": "uw-madison-industrial-engineering-a288a9b8",
          "name": "Industrial Engineering",
          "confidence": "verified"
        },
        {
          "id": "uw-madison-951baa16-aerospace-engineering-genuine",
          "name": "Aerospace Engineering",
          "confidence": "verified"
        },
        {
          "id": "uw-madison-951baa16-business-administration-genuine",
          "name": "Business Administration",
          "confidence": "verified"
        },
        {
          "id": "uw-madison-951baa16-finance-genuine",
          "name": "Finance",
          "confidence": "verified"
        },
        {
          "id": "uw-madison-951baa16-accounting-genuine",
          "name": "Accounting",
          "confidence": "verified"
        },
        {
          "id": "uw-madison-951baa16-marketing-genuine",
          "name": "Marketing",
          "confidence": "verified"
        },
        {
          "id": "uw-madison-951baa16-management-genuine",
          "name": "Management",
          "confidence": "verified"
        },
        {
          "id": "uw-madison-951baa16-economics-genuine",
          "name": "Economics",
          "confidence": "verified"
        },
        {
          "id": "uw-madison-951baa16-psychology-genuine",
          "name": "Psychology",
          "confidence": "verified"
        },
        {
          "id": "uw-madison-951baa16-political-science-genuine",
          "name": "Political Science",
          "confidence": "verified"
        },
        {
          "id": "uw-madison-951baa16-sociology-genuine",
          "name": "Sociology",
          "confidence": "verified"
        },
        {
          "id": "uw-madison-951baa16-history-genuine",
          "name": "History",
          "confidence": "verified"
        },
        {
          "id": "uw-madison-951baa16-english-genuine",
          "name": "English",
          "confidence": "verified"
        },
        {
          "id": "uw-madison-951baa16-communications-genuine",
          "name": "Communications",
          "confidence": "verified"
        },
        {
          "id": "uw-madison-951baa16-biology-genuine",
          "name": "Biology",
          "confidence": "verified"
        },
        {
          "id": "uw-madison-951baa16-biochemistry-genuine",
          "name": "Biochemistry",
          "confidence": "verified"
        },
        {
          "id": "uw-madison-951baa16-chemistry-genuine",
          "name": "Chemistry",
          "confidence": "verified"
        },
        {
          "id": "uw-madison-951baa16-physics-genuine",
          "name": "Physics",
          "confidence": "verified"
        },
        {
          "id": "uw-madison-951baa16-mathematics-genuine",
          "name": "Mathematics",
          "confidence": "verified"
        },
        {
          "id": "uw-madison-951baa16-statistics-genuine",
          "name": "Statistics",
          "confidence": "verified"
        },
        {
          "id": "uw-madison-951baa16-public-health-genuine",
          "name": "Public Health",
          "confidence": "verified"
        },
        {
          "id": "uw-madison-951baa16-nursing-genuine",
          "name": "Nursing",
          "confidence": "verified"
        },
        {
          "id": "uw-madison-951baa16-international-relations-genuine",
          "name": "International Relations",
          "confidence": "verified"
        },
        {
          "id": "uw-madison-951baa16-philosophy-genuine",
          "name": "Philosophy",
          "confidence": "verified"
        },
        {
          "id": "uw-madison-engineering-mechanics-aerospace-engineering-optio-967de0ed",
          "name": "Engineering Mechanics (+ Aerospace Engineering Option)",
          "confidence": "verified"
        },
        {
          "id": "uw-madison-engineering-physics-1fc8618a",
          "name": "Engineering Physics",
          "confidence": "verified"
        },
        {
          "id": "uw-madison-environmental-engineering-98c194d8",
          "name": "Environmental Engineering",
          "confidence": "verified"
        },
        {
          "id": "uw-madison-geological-engineering-b569a81f",
          "name": "Geological Engineering",
          "confidence": "verified"
        },
        {
          "id": "uw-madison-materials-science-and-engineering-6167917b",
          "name": "Materials Science and Engineering",
          "confidence": "verified"
        },
        {
          "id": "uw-madison-nuclear-engineering-fe586913",
          "name": "Nuclear Engineering",
          "confidence": "verified"
        }
      ]
    },
    {
      "id": "university-of-texas-at-austin-ed8d09cf",
      "name": "University of Texas at Austin",
      "shortName": "University of Texas at Austin",
      "majors": [
        {
          "id": "university-of-texas-at-austin-ed8d09cf-computer-science-genuine",
          "name": "Computer Science",
          "confidence": "verified"
        },
        {
          "id": "university-of-texas-at-austin-ed8d09cf-computer-engineering-genuine",
          "name": "Computer Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-texas-at-austin-ed8d09cf-data-science-genuine",
          "name": "Data Science",
          "confidence": "verified"
        },
        {
          "id": "university-of-texas-at-austin-ed8d09cf-electrical-engineering-genuine",
          "name": "Electrical Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-texas-at-austin-mechanical-engineering-09a7bda0",
          "name": "Mechanical Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-texas-at-austin-chemical-engineering-8b9ee702",
          "name": "Chemical Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-texas-at-austin-civil-engineering-2ec63e81",
          "name": "Civil Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-texas-at-austin-biomedical-engineering-77ff8307",
          "name": "Biomedical Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-texas-at-austin-aerospace-engineering-55aa0ca1",
          "name": "Aerospace Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-texas-at-austin-ed8d09cf-industrial-engineering-genuine",
          "name": "Industrial Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-texas-at-austin-ed8d09cf-materials-science-engineering-genuine",
          "name": "Materials Science & Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-texas-at-austin-environmental-engineering-862ab928",
          "name": "Environmental Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-texas-at-austin-ed8d09cf-applied-mathematics-genuine",
          "name": "Applied Mathematics",
          "confidence": "verified"
        },
        {
          "id": "university-of-texas-at-austin-ed8d09cf-physics-genuine",
          "name": "Physics",
          "confidence": "verified"
        },
        {
          "id": "university-of-texas-at-austin-ed8d09cf-chemistry-genuine",
          "name": "Chemistry",
          "confidence": "verified"
        },
        {
          "id": "university-of-texas-at-austin-ed8d09cf-business-administration-genuine",
          "name": "Business Administration",
          "confidence": "verified"
        },
        {
          "id": "university-of-texas-at-austin-ed8d09cf-economics-genuine",
          "name": "Economics",
          "confidence": "verified"
        },
        {
          "id": "university-of-texas-at-austin-ed8d09cf-technical-communication-genuine",
          "name": "Technical Communication",
          "confidence": "verified"
        },
        {
          "id": "university-of-texas-at-austin-architectural-engineering-4114bbd4",
          "name": "Architectural Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-texas-at-austin-computational-engineering-b9584233",
          "name": "Computational Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-texas-at-austin-electrical-computer-engineering-17058445",
          "name": "Electrical & Computer Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-texas-at-austin-geosystems-engineering-dd2edee4",
          "name": "Geosystems Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-texas-at-austin-petroleum-engineering-ee1e984d",
          "name": "Petroleum Engineering",
          "confidence": "verified"
        }
      ]
    },
    {
      "id": "purdue-39671bc6",
      "name": "Purdue University",
      "shortName": "Purdue University",
      "majors": [
        {
          "id": "purdue-39671bc6-computer-science-genuine",
          "name": "Computer Science",
          "confidence": "verified"
        },
        {
          "id": "purdue-39671bc6-data-science-genuine",
          "name": "Data Science",
          "confidence": "verified"
        },
        {
          "id": "purdue-39671bc6-information-technology-genuine",
          "name": "Information Technology",
          "confidence": "verified"
        },
        {
          "id": "purdue-computer-engineering-cc07f69a",
          "name": "Computer Engineering",
          "confidence": "verified"
        },
        {
          "id": "purdue-electrical-engineering-c1e4c63e",
          "name": "Electrical Engineering",
          "confidence": "verified"
        },
        {
          "id": "purdue-mechanical-engineering-1df32b1f",
          "name": "Mechanical Engineering",
          "confidence": "verified"
        },
        {
          "id": "purdue-civil-engineering-5dba6549",
          "name": "Civil Engineering",
          "confidence": "verified"
        },
        {
          "id": "purdue-chemical-engineering-0475db29",
          "name": "Chemical Engineering",
          "confidence": "verified"
        },
        {
          "id": "purdue-biomedical-engineering-28ed02c4",
          "name": "Biomedical Engineering",
          "confidence": "verified"
        },
        {
          "id": "purdue-industrial-engineering-38513b12",
          "name": "Industrial Engineering",
          "confidence": "verified"
        },
        {
          "id": "purdue-39671bc6-aerospace-engineering-genuine",
          "name": "Aerospace Engineering",
          "confidence": "verified"
        },
        {
          "id": "purdue-39671bc6-business-administration-genuine",
          "name": "Business Administration",
          "confidence": "verified"
        },
        {
          "id": "purdue-39671bc6-finance-genuine",
          "name": "Finance",
          "confidence": "verified"
        },
        {
          "id": "purdue-39671bc6-accounting-genuine",
          "name": "Accounting",
          "confidence": "verified"
        },
        {
          "id": "purdue-39671bc6-marketing-genuine",
          "name": "Marketing",
          "confidence": "verified"
        },
        {
          "id": "purdue-39671bc6-management-genuine",
          "name": "Management",
          "confidence": "verified"
        },
        {
          "id": "purdue-39671bc6-economics-genuine",
          "name": "Economics",
          "confidence": "verified"
        },
        {
          "id": "purdue-39671bc6-psychology-genuine",
          "name": "Psychology",
          "confidence": "verified"
        },
        {
          "id": "purdue-39671bc6-political-science-genuine",
          "name": "Political Science",
          "confidence": "verified"
        },
        {
          "id": "purdue-39671bc6-sociology-genuine",
          "name": "Sociology",
          "confidence": "verified"
        },
        {
          "id": "purdue-39671bc6-history-genuine",
          "name": "History",
          "confidence": "verified"
        },
        {
          "id": "purdue-39671bc6-english-genuine",
          "name": "English",
          "confidence": "verified"
        },
        {
          "id": "purdue-39671bc6-communications-genuine",
          "name": "Communications",
          "confidence": "verified"
        },
        {
          "id": "purdue-39671bc6-biology-genuine",
          "name": "Biology",
          "confidence": "verified"
        },
        {
          "id": "purdue-39671bc6-biochemistry-genuine",
          "name": "Biochemistry",
          "confidence": "verified"
        },
        {
          "id": "purdue-39671bc6-chemistry-genuine",
          "name": "Chemistry",
          "confidence": "verified"
        },
        {
          "id": "purdue-39671bc6-physics-genuine",
          "name": "Physics",
          "confidence": "verified"
        },
        {
          "id": "purdue-39671bc6-mathematics-genuine",
          "name": "Mathematics",
          "confidence": "verified"
        },
        {
          "id": "purdue-39671bc6-statistics-genuine",
          "name": "Statistics",
          "confidence": "verified"
        },
        {
          "id": "purdue-39671bc6-public-health-genuine",
          "name": "Public Health",
          "confidence": "verified"
        },
        {
          "id": "purdue-39671bc6-nursing-genuine",
          "name": "Nursing",
          "confidence": "verified"
        },
        {
          "id": "purdue-39671bc6-international-relations-genuine",
          "name": "International Relations",
          "confidence": "verified"
        },
        {
          "id": "purdue-39671bc6-philosophy-genuine",
          "name": "Philosophy",
          "confidence": "verified"
        },
        {
          "id": "purdue-aeronautical-astronautical-engineering-221c2b73",
          "name": "Aeronautical & Astronautical Engineering",
          "confidence": "verified"
        },
        {
          "id": "purdue-agricultural-engineering-7dde821e",
          "name": "Agricultural Engineering",
          "confidence": "verified"
        },
        {
          "id": "purdue-biological-engineering-0e3b3cc4",
          "name": "Biological Engineering",
          "confidence": "verified"
        },
        {
          "id": "purdue-construction-engineering-management-cem-66fedec7",
          "name": "Construction Engineering & Management (CEM)",
          "confidence": "verified"
        },
        {
          "id": "purdue-environmental-ecological-engineering-0796a8c5",
          "name": "Environmental & Ecological Engineering",
          "confidence": "verified"
        },
        {
          "id": "purdue-environmental-natural-resources-engineering-bf7bf6b4",
          "name": "Environmental & Natural Resources Engineering",
          "confidence": "verified"
        },
        {
          "id": "purdue-interdisciplinary-engineering-ides-4f0de6bf",
          "name": "Interdisciplinary Engineering (IDES)",
          "confidence": "verified"
        },
        {
          "id": "purdue-motorsports-engineering-f01e707b",
          "name": "Motorsports Engineering",
          "confidence": "verified"
        },
        {
          "id": "purdue-multidisciplinary-engineering-mde-c55c6b0a",
          "name": "Multidisciplinary Engineering (MDE)",
          "confidence": "verified"
        },
        {
          "id": "purdue-nuclear-engineering-94659264",
          "name": "Nuclear Engineering",
          "confidence": "verified"
        }
      ]
    },
    {
      "id": "georgia-tech-776cb90e",
      "name": "Georgia Institute of Technology",
      "shortName": "Georgia Institute of Technology",
      "majors": [
        {
          "id": "georgia-tech-computer-science-2469aec6",
          "name": "Computer Science",
          "confidence": "verified"
        },
        {
          "id": "georgia-tech-computer-engineering-4b153edc",
          "name": "Computer Engineering",
          "confidence": "verified"
        },
        {
          "id": "georgia-tech-776cb90e-data-science-genuine",
          "name": "Data Science",
          "confidence": "verified"
        },
        {
          "id": "georgia-tech-electrical-engineering-801d7071",
          "name": "Electrical Engineering",
          "confidence": "verified"
        },
        {
          "id": "georgia-tech-mechanical-engineering-0dac0766",
          "name": "Mechanical Engineering",
          "confidence": "verified"
        },
        {
          "id": "georgia-tech-776cb90e-chemical-engineering-genuine",
          "name": "Chemical Engineering",
          "confidence": "verified"
        },
        {
          "id": "georgia-tech-civil-engineering-3c9441bf",
          "name": "Civil Engineering",
          "confidence": "verified"
        },
        {
          "id": "georgia-tech-biomedical-engineering-7220f1db",
          "name": "Biomedical Engineering",
          "confidence": "verified"
        },
        {
          "id": "georgia-tech-aerospace-engineering-6f64a7b6",
          "name": "Aerospace Engineering",
          "confidence": "verified"
        },
        {
          "id": "georgia-tech-industrial-engineering-30503c16",
          "name": "Industrial Engineering",
          "confidence": "verified"
        },
        {
          "id": "georgia-tech-materials-science-engineering-de471779",
          "name": "Materials Science & Engineering",
          "confidence": "verified"
        },
        {
          "id": "georgia-tech-environmental-engineering-a98134f9",
          "name": "Environmental Engineering",
          "confidence": "verified"
        },
        {
          "id": "georgia-tech-776cb90e-applied-mathematics-genuine",
          "name": "Applied Mathematics",
          "confidence": "verified"
        },
        {
          "id": "georgia-tech-776cb90e-physics-genuine",
          "name": "Physics",
          "confidence": "verified"
        },
        {
          "id": "georgia-tech-776cb90e-chemistry-genuine",
          "name": "Chemistry",
          "confidence": "verified"
        },
        {
          "id": "georgia-tech-776cb90e-business-administration-genuine",
          "name": "Business Administration",
          "confidence": "verified"
        },
        {
          "id": "georgia-tech-776cb90e-economics-genuine",
          "name": "Economics",
          "confidence": "verified"
        },
        {
          "id": "georgia-tech-776cb90e-technical-communication-genuine",
          "name": "Technical Communication",
          "confidence": "verified"
        },
        {
          "id": "georgia-tech-chemical-biomolecular-engineering-1cc43832",
          "name": "Chemical & Biomolecular Engineering",
          "confidence": "verified"
        },
        {
          "id": "georgia-tech-nuclear-radiological-engineering-84f0c1cf",
          "name": "Nuclear & Radiological Engineering",
          "confidence": "verified"
        }
      ]
    },
    {
      "id": "uc-berkeley-362f972e",
      "name": "UC Berkeley",
      "shortName": "UC Berkeley",
      "majors": [
        {
          "id": "uc-berkeley-362f972e-energy-engineering-genuine",
          "name": "Energy Engineering",
          "confidence": "verified"
        },
        {
          "id": "uc-berkeley-362f972e-engineering-math-statistics-genuine",
          "name": "Engineering Math & Statistics",
          "confidence": "verified"
        },
        {
          "id": "uc-berkeley-362f972e-engineering-physics-genuine",
          "name": "Engineering Physics",
          "confidence": "verified"
        },
        {
          "id": "uc-berkeley-362f972e-environmental-engineering-science-genuine",
          "name": "Environmental Engineering Science",
          "confidence": "verified"
        },
        {
          "id": "uc-berkeley-362f972e-nuclear-engineering-genuine",
          "name": "Nuclear Engineering",
          "confidence": "verified"
        },
        {
          "id": "uc-berkeley-bioengineering-bioe-56bb6ad7",
          "name": "Bioengineering",
          "confidence": "verified"
        },
        {
          "id": "uc-berkeley-civil-environmental-engineering-ebc6a105",
          "name": "Civil Engineering",
          "confidence": "verified"
        },
        {
          "id": "uc-berkeley-eecs-electrical-engineering-computer-science-2f080f00",
          "name": "Electrical Engineering & Computer Sciences (EECS)",
          "confidence": "verified"
        },
        {
          "id": "uc-berkeley-industrial-engineering-operations-research-i-12efac92",
          "name": "Industrial Engineering & Operations Research",
          "confidence": "verified"
        },
        {
          "id": "uc-berkeley-materials-science-engineering-mse-3eedb31b",
          "name": "Materials Science & Engineering (MSE)",
          "confidence": "verified"
        },
        {
          "id": "uc-berkeley-mechanical-engineering-me-ebf17b9d",
          "name": "Mechanical Engineering",
          "confidence": "verified"
        },
        {
          "id": "uc-berkeley-nuclear-engineering-ne-394e0458",
          "name": "Nuclear Engineering (NE)",
          "confidence": "verified"
        },
        {
          "id": "uc-berkeley-chemical-engineering-college-of-chemistry-co-77c6c7ad",
          "name": "Chemical Engineering",
          "confidence": "verified"
        },
        {
          "id": "uc-berkeley-362f972e-computer-science",
          "name": "Computer Science",
          "confidence": "verified"
        },
        {
          "id": "uc-berkeley-362f972e-cognitive-science",
          "name": "Cognitive Science",
          "confidence": "verified"
        },
        {
          "id": "uc-berkeley-362f972e-data-science",
          "name": "Data Science",
          "confidence": "verified"
        },
        {
          "id": "uc-berkeley-362f972e-business-administration",
          "name": "Business Administration",
          "confidence": "verified"
        },
        {
          "id": "uc-berkeley-362f972e-economics",
          "name": "Economics",
          "confidence": "verified"
        },
        {
          "id": "uc-berkeley-362f972e-materials-science-engineering",
          "name": "Materials Science & Engineering",
          "confidence": "verified"
        }
      ]
    },
    {
      "id": "penn-state-f1c5c43f",
      "name": "Pennsylvania State University",
      "shortName": "Pennsylvania State University",
      "majors": [
        {
          "id": "penn-state-f1c5c43f-computer-science-genuine",
          "name": "Computer Science",
          "confidence": "verified"
        },
        {
          "id": "penn-state-f1c5c43f-data-science-genuine",
          "name": "Data Science",
          "confidence": "verified"
        },
        {
          "id": "penn-state-f1c5c43f-information-technology-genuine",
          "name": "Information Technology",
          "confidence": "verified"
        },
        {
          "id": "penn-state-computer-engineering-7078e025",
          "name": "Computer Engineering",
          "confidence": "verified"
        },
        {
          "id": "penn-state-electrical-engineering-be282469",
          "name": "Electrical Engineering",
          "confidence": "verified"
        },
        {
          "id": "penn-state-f1c5c43f-mechanical-engineering-genuine",
          "name": "Mechanical Engineering",
          "confidence": "verified"
        },
        {
          "id": "penn-state-civil-engineering-b11b97ae",
          "name": "Civil Engineering",
          "confidence": "verified"
        },
        {
          "id": "penn-state-chemical-engineering-804917f3",
          "name": "Chemical Engineering",
          "confidence": "verified"
        },
        {
          "id": "penn-state-biomedical-engineering-cb5d88e4",
          "name": "Biomedical Engineering",
          "confidence": "verified"
        },
        {
          "id": "penn-state-industrial-engineering-9e4506cb",
          "name": "Industrial Engineering",
          "confidence": "verified"
        },
        {
          "id": "penn-state-aerospace-engineering-4a7cb960",
          "name": "Aerospace Engineering",
          "confidence": "verified"
        },
        {
          "id": "penn-state-f1c5c43f-business-administration-genuine",
          "name": "Business Administration",
          "confidence": "verified"
        },
        {
          "id": "penn-state-f1c5c43f-finance-genuine",
          "name": "Finance",
          "confidence": "verified"
        },
        {
          "id": "penn-state-f1c5c43f-accounting-genuine",
          "name": "Accounting",
          "confidence": "verified"
        },
        {
          "id": "penn-state-f1c5c43f-marketing-genuine",
          "name": "Marketing",
          "confidence": "verified"
        },
        {
          "id": "penn-state-f1c5c43f-management-genuine",
          "name": "Management",
          "confidence": "verified"
        },
        {
          "id": "penn-state-f1c5c43f-economics-genuine",
          "name": "Economics",
          "confidence": "verified"
        },
        {
          "id": "penn-state-f1c5c43f-psychology-genuine",
          "name": "Psychology",
          "confidence": "verified"
        },
        {
          "id": "penn-state-f1c5c43f-political-science-genuine",
          "name": "Political Science",
          "confidence": "verified"
        },
        {
          "id": "penn-state-f1c5c43f-sociology-genuine",
          "name": "Sociology",
          "confidence": "verified"
        },
        {
          "id": "penn-state-f1c5c43f-history-genuine",
          "name": "History",
          "confidence": "verified"
        },
        {
          "id": "penn-state-f1c5c43f-english-genuine",
          "name": "English",
          "confidence": "verified"
        },
        {
          "id": "penn-state-f1c5c43f-communications-genuine",
          "name": "Communications",
          "confidence": "verified"
        },
        {
          "id": "penn-state-f1c5c43f-biology-genuine",
          "name": "Biology",
          "confidence": "verified"
        },
        {
          "id": "penn-state-f1c5c43f-biochemistry-genuine",
          "name": "Biochemistry",
          "confidence": "verified"
        },
        {
          "id": "penn-state-f1c5c43f-chemistry-genuine",
          "name": "Chemistry",
          "confidence": "verified"
        },
        {
          "id": "penn-state-f1c5c43f-physics-genuine",
          "name": "Physics",
          "confidence": "verified"
        },
        {
          "id": "penn-state-f1c5c43f-mathematics-genuine",
          "name": "Mathematics",
          "confidence": "verified"
        },
        {
          "id": "penn-state-f1c5c43f-statistics-genuine",
          "name": "Statistics",
          "confidence": "verified"
        },
        {
          "id": "penn-state-f1c5c43f-public-health-genuine",
          "name": "Public Health",
          "confidence": "verified"
        },
        {
          "id": "penn-state-f1c5c43f-nursing-genuine",
          "name": "Nursing",
          "confidence": "verified"
        },
        {
          "id": "penn-state-f1c5c43f-international-relations-genuine",
          "name": "International Relations",
          "confidence": "verified"
        },
        {
          "id": "penn-state-f1c5c43f-philosophy-genuine",
          "name": "Philosophy",
          "confidence": "verified"
        },
        {
          "id": "penn-state-architectural-engineering-9b573ad6",
          "name": "Architectural Engineering",
          "confidence": "verified"
        },
        {
          "id": "penn-state-artificial-intelligence-engineering-b95476e4",
          "name": "Artificial Intelligence Engineering",
          "confidence": "verified"
        },
        {
          "id": "penn-state-biological-engineering-ea6e992c",
          "name": "Biological Engineering",
          "confidence": "verified"
        },
        {
          "id": "penn-state-computer-science-up-beaver-brandywine-hazelton-a13127a6",
          "name": "Computer Science (비UP: Beaver/Brandywine/Hazelton)",
          "confidence": "verified"
        },
        {
          "id": "penn-state-computer-science-university-park-395433dd",
          "name": "Computer Science (University Park)",
          "confidence": "verified"
        },
        {
          "id": "penn-state-data-sciences-a3987d4a",
          "name": "Data Sciences",
          "confidence": "verified"
        },
        {
          "id": "penn-state-engineering-general-01b163f2",
          "name": "Engineering (General)",
          "confidence": "verified"
        },
        {
          "id": "penn-state-engineering-science-8631bb41",
          "name": "Engineering Science",
          "confidence": "verified"
        },
        {
          "id": "penn-state-mechanical-engineering-up-scranton-f8cdb019",
          "name": "Mechanical Engineering (비UP: Scranton)",
          "confidence": "verified"
        },
        {
          "id": "penn-state-mechanical-engineering-university-park-cee6ee7a",
          "name": "Mechanical Engineering (University Park)",
          "confidence": "verified"
        },
        {
          "id": "penn-state-nuclear-engineering-6bb64754",
          "name": "Nuclear Engineering",
          "confidence": "verified"
        }
      ]
    },
    {
      "id": "virginia-tech-d6de387d",
      "name": "Virginia Tech",
      "shortName": "Virginia Tech",
      "majors": [
        {
          "id": "virginia-tech-computer-science-ae606875",
          "name": "Computer Science",
          "confidence": "verified"
        },
        {
          "id": "virginia-tech-computer-engineering-527dfad0",
          "name": "Computer Engineering",
          "confidence": "verified"
        },
        {
          "id": "virginia-tech-d6de387d-data-science-genuine",
          "name": "Data Science",
          "confidence": "verified"
        },
        {
          "id": "virginia-tech-electrical-engineering-ef243bbd",
          "name": "Electrical Engineering",
          "confidence": "verified"
        },
        {
          "id": "virginia-tech-mechanical-engineering-1fea438d",
          "name": "Mechanical Engineering",
          "confidence": "verified"
        },
        {
          "id": "virginia-tech-chemical-engineering-7b07a109",
          "name": "Chemical Engineering",
          "confidence": "verified"
        },
        {
          "id": "virginia-tech-civil-engineering-721c66fa",
          "name": "Civil Engineering",
          "confidence": "verified"
        },
        {
          "id": "virginia-tech-biomedical-engineering-9907a5cd",
          "name": "Biomedical Engineering",
          "confidence": "verified"
        },
        {
          "id": "virginia-tech-aerospace-engineering-9756c2c4",
          "name": "Aerospace Engineering",
          "confidence": "verified"
        },
        {
          "id": "virginia-tech-d6de387d-industrial-engineering-genuine",
          "name": "Industrial Engineering",
          "confidence": "verified"
        },
        {
          "id": "virginia-tech-materials-science-engineering-81120125",
          "name": "Materials Science & Engineering",
          "confidence": "verified"
        },
        {
          "id": "virginia-tech-d6de387d-environmental-engineering-genuine",
          "name": "Environmental Engineering",
          "confidence": "verified"
        },
        {
          "id": "virginia-tech-d6de387d-applied-mathematics-genuine",
          "name": "Applied Mathematics",
          "confidence": "verified"
        },
        {
          "id": "virginia-tech-d6de387d-physics-genuine",
          "name": "Physics",
          "confidence": "verified"
        },
        {
          "id": "virginia-tech-d6de387d-chemistry-genuine",
          "name": "Chemistry",
          "confidence": "verified"
        },
        {
          "id": "virginia-tech-d6de387d-business-administration-genuine",
          "name": "Business Administration",
          "confidence": "verified"
        },
        {
          "id": "virginia-tech-d6de387d-economics-genuine",
          "name": "Economics",
          "confidence": "verified"
        },
        {
          "id": "virginia-tech-d6de387d-technical-communication-genuine",
          "name": "Technical Communication",
          "confidence": "verified"
        },
        {
          "id": "virginia-tech-biological-systems-engineering-8c90d46f",
          "name": "Biological Systems Engineering",
          "confidence": "verified"
        },
        {
          "id": "virginia-tech-building-construction-da7c2219",
          "name": "Building Construction",
          "confidence": "verified"
        },
        {
          "id": "virginia-tech-construction-engineering-management-009f2d54",
          "name": "Construction Engineering & Management",
          "confidence": "verified"
        },
        {
          "id": "virginia-tech-industrial-systems-engineering-24bb7021",
          "name": "Industrial & Systems Engineering",
          "confidence": "verified"
        },
        {
          "id": "virginia-tech-mining-engineering-516b398e",
          "name": "Mining Engineering",
          "confidence": "verified"
        },
        {
          "id": "virginia-tech-ocean-engineering-bsaoe-c9f94e8a",
          "name": "Ocean Engineering (BSAOE)",
          "confidence": "verified"
        }
      ]
    },
    {
      "id": "university-of-virginia-uva-d1b41986",
      "name": "University of Virginia",
      "shortName": "University of Virginia",
      "majors": [
        {
          "id": "university-of-virginia-uva-d1b41986-computer-science-genuine",
          "name": "Computer Science",
          "confidence": "verified"
        },
        {
          "id": "university-of-virginia-uva-d1b41986-data-science-genuine",
          "name": "Data Science",
          "confidence": "verified"
        },
        {
          "id": "university-of-virginia-uva-d1b41986-information-technology-genuine",
          "name": "Information Technology",
          "confidence": "verified"
        },
        {
          "id": "university-of-virginia-uva-d1b41986-computer-engineering-genuine",
          "name": "Computer Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-virginia-uva-d1b41986-electrical-engineering-genuine",
          "name": "Electrical Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-virginia-uva-d1b41986-mechanical-engineering-genuine",
          "name": "Mechanical Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-virginia-uva-civil-engineering-adffe279",
          "name": "Civil Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-virginia-uva-chemical-engineering-ced62532",
          "name": "Chemical Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-virginia-uva-biomedical-engineering-59eb52bd",
          "name": "Biomedical Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-virginia-uva-d1b41986-industrial-engineering-genuine",
          "name": "Industrial Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-virginia-uva-d1b41986-aerospace-engineering-genuine",
          "name": "Aerospace Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-virginia-uva-d1b41986-business-administration-genuine",
          "name": "Business Administration",
          "confidence": "verified"
        },
        {
          "id": "university-of-virginia-uva-d1b41986-finance-genuine",
          "name": "Finance",
          "confidence": "verified"
        },
        {
          "id": "university-of-virginia-uva-d1b41986-accounting-genuine",
          "name": "Accounting",
          "confidence": "verified"
        },
        {
          "id": "university-of-virginia-uva-d1b41986-marketing-genuine",
          "name": "Marketing",
          "confidence": "verified"
        },
        {
          "id": "university-of-virginia-uva-d1b41986-management-genuine",
          "name": "Management",
          "confidence": "verified"
        },
        {
          "id": "university-of-virginia-uva-d1b41986-economics-genuine",
          "name": "Economics",
          "confidence": "verified"
        },
        {
          "id": "university-of-virginia-uva-d1b41986-psychology-genuine",
          "name": "Psychology",
          "confidence": "verified"
        },
        {
          "id": "university-of-virginia-uva-d1b41986-political-science-genuine",
          "name": "Political Science",
          "confidence": "verified"
        },
        {
          "id": "university-of-virginia-uva-d1b41986-sociology-genuine",
          "name": "Sociology",
          "confidence": "verified"
        },
        {
          "id": "university-of-virginia-uva-d1b41986-history-genuine",
          "name": "History",
          "confidence": "verified"
        },
        {
          "id": "university-of-virginia-uva-d1b41986-english-genuine",
          "name": "English",
          "confidence": "verified"
        },
        {
          "id": "university-of-virginia-uva-d1b41986-communications-genuine",
          "name": "Communications",
          "confidence": "verified"
        },
        {
          "id": "university-of-virginia-uva-d1b41986-biology-genuine",
          "name": "Biology",
          "confidence": "verified"
        },
        {
          "id": "university-of-virginia-uva-d1b41986-biochemistry-genuine",
          "name": "Biochemistry",
          "confidence": "verified"
        },
        {
          "id": "university-of-virginia-uva-d1b41986-chemistry-genuine",
          "name": "Chemistry",
          "confidence": "verified"
        },
        {
          "id": "university-of-virginia-uva-d1b41986-physics-genuine",
          "name": "Physics",
          "confidence": "verified"
        },
        {
          "id": "university-of-virginia-uva-d1b41986-mathematics-genuine",
          "name": "Mathematics",
          "confidence": "verified"
        },
        {
          "id": "university-of-virginia-uva-d1b41986-statistics-genuine",
          "name": "Statistics",
          "confidence": "verified"
        },
        {
          "id": "university-of-virginia-uva-d1b41986-public-health-genuine",
          "name": "Public Health",
          "confidence": "verified"
        },
        {
          "id": "university-of-virginia-uva-d1b41986-nursing-genuine",
          "name": "Nursing",
          "confidence": "verified"
        },
        {
          "id": "university-of-virginia-uva-d1b41986-international-relations-genuine",
          "name": "International Relations",
          "confidence": "verified"
        },
        {
          "id": "university-of-virginia-uva-d1b41986-philosophy-genuine",
          "name": "Philosophy",
          "confidence": "verified"
        },
        {
          "id": "university-of-virginia-uva-aerospace-engineering-mae-5c726836",
          "name": "Aerospace Engineering (MAE)",
          "confidence": "verified"
        },
        {
          "id": "university-of-virginia-uva-computer-engineering-ece-2fce7a83",
          "name": "Computer Engineering (ECE)",
          "confidence": "verified"
        },
        {
          "id": "university-of-virginia-uva-computer-science-bscs-c0b4327a",
          "name": "Computer Science (BSCS)",
          "confidence": "verified"
        },
        {
          "id": "university-of-virginia-uva-electrical-engineering-ece-b1e94833",
          "name": "Electrical Engineering (ECE)",
          "confidence": "verified"
        },
        {
          "id": "university-of-virginia-uva-engineering-science-95c4802c",
          "name": "Engineering Science",
          "confidence": "verified"
        },
        {
          "id": "university-of-virginia-uva-materials-science-engineering-8463dd31",
          "name": "Materials Science & Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-virginia-uva-mechanical-engineering-mae-2f212819",
          "name": "Mechanical Engineering (MAE)",
          "confidence": "verified"
        },
        {
          "id": "university-of-virginia-uva-systems-engineering-3fdd523e",
          "name": "Systems Engineering",
          "confidence": "verified"
        }
      ]
    },
    {
      "id": "washington-university-in-st-louis-washu-e309faa1",
      "name": "Washington University in St. Louis",
      "shortName": "Washington University in St. Louis",
      "majors": [
        {
          "id": "washington-university-in-st-louis-washu-computer-science-32f3a2d4",
          "name": "Computer Science",
          "confidence": "verified"
        },
        {
          "id": "washington-university-in-st-louis-washu-data-science-ca0ec185",
          "name": "Data Science",
          "confidence": "verified"
        },
        {
          "id": "washington-university-in-st-louis-washu-e309faa1-information-technology-genuine",
          "name": "Information Technology",
          "confidence": "verified"
        },
        {
          "id": "washington-university-in-st-louis-washu-computer-engineering-972a9992",
          "name": "Computer Engineering",
          "confidence": "verified"
        },
        {
          "id": "washington-university-in-st-louis-washu-electrical-engineeri-0c326155",
          "name": "Electrical Engineering",
          "confidence": "verified"
        },
        {
          "id": "washington-university-in-st-louis-washu-mechanical-engineeri-0a8d066a",
          "name": "Mechanical Engineering",
          "confidence": "verified"
        },
        {
          "id": "washington-university-in-st-louis-washu-e309faa1-civil-engineering-genuine",
          "name": "Civil Engineering",
          "confidence": "verified"
        },
        {
          "id": "washington-university-in-st-louis-washu-chemical-engineering-5c2b1785",
          "name": "Chemical Engineering",
          "confidence": "verified"
        },
        {
          "id": "washington-university-in-st-louis-washu-biomedical-engineeri-c4a402bd",
          "name": "Biomedical Engineering",
          "confidence": "verified"
        },
        {
          "id": "washington-university-in-st-louis-washu-e309faa1-industrial-engineering-genuine",
          "name": "Industrial Engineering",
          "confidence": "verified"
        },
        {
          "id": "washington-university-in-st-louis-washu-e309faa1-aerospace-engineering-genuine",
          "name": "Aerospace Engineering",
          "confidence": "verified"
        },
        {
          "id": "washington-university-in-st-louis-washu-e309faa1-business-administration-genuine",
          "name": "Business Administration",
          "confidence": "verified"
        },
        {
          "id": "washington-university-in-st-louis-washu-e309faa1-finance-genuine",
          "name": "Finance",
          "confidence": "verified"
        },
        {
          "id": "washington-university-in-st-louis-washu-e309faa1-accounting-genuine",
          "name": "Accounting",
          "confidence": "verified"
        },
        {
          "id": "washington-university-in-st-louis-washu-e309faa1-marketing-genuine",
          "name": "Marketing",
          "confidence": "verified"
        },
        {
          "id": "washington-university-in-st-louis-washu-e309faa1-management-genuine",
          "name": "Management",
          "confidence": "verified"
        },
        {
          "id": "washington-university-in-st-louis-washu-e309faa1-economics-genuine",
          "name": "Economics",
          "confidence": "verified"
        },
        {
          "id": "washington-university-in-st-louis-washu-e309faa1-psychology-genuine",
          "name": "Psychology",
          "confidence": "verified"
        },
        {
          "id": "washington-university-in-st-louis-washu-e309faa1-political-science-genuine",
          "name": "Political Science",
          "confidence": "verified"
        },
        {
          "id": "washington-university-in-st-louis-washu-e309faa1-sociology-genuine",
          "name": "Sociology",
          "confidence": "verified"
        },
        {
          "id": "washington-university-in-st-louis-washu-e309faa1-history-genuine",
          "name": "History",
          "confidence": "verified"
        },
        {
          "id": "washington-university-in-st-louis-washu-e309faa1-english-genuine",
          "name": "English",
          "confidence": "verified"
        },
        {
          "id": "washington-university-in-st-louis-washu-e309faa1-communications-genuine",
          "name": "Communications",
          "confidence": "verified"
        },
        {
          "id": "washington-university-in-st-louis-washu-e309faa1-biology-genuine",
          "name": "Biology",
          "confidence": "verified"
        },
        {
          "id": "washington-university-in-st-louis-washu-e309faa1-biochemistry-genuine",
          "name": "Biochemistry",
          "confidence": "verified"
        },
        {
          "id": "washington-university-in-st-louis-washu-e309faa1-chemistry-genuine",
          "name": "Chemistry",
          "confidence": "verified"
        },
        {
          "id": "washington-university-in-st-louis-washu-e309faa1-physics-genuine",
          "name": "Physics",
          "confidence": "verified"
        },
        {
          "id": "washington-university-in-st-louis-washu-e309faa1-mathematics-genuine",
          "name": "Mathematics",
          "confidence": "verified"
        },
        {
          "id": "washington-university-in-st-louis-washu-e309faa1-statistics-genuine",
          "name": "Statistics",
          "confidence": "verified"
        },
        {
          "id": "washington-university-in-st-louis-washu-e309faa1-public-health-genuine",
          "name": "Public Health",
          "confidence": "verified"
        },
        {
          "id": "washington-university-in-st-louis-washu-e309faa1-nursing-genuine",
          "name": "Nursing",
          "confidence": "verified"
        },
        {
          "id": "washington-university-in-st-louis-washu-e309faa1-international-relations-genuine",
          "name": "International Relations",
          "confidence": "verified"
        },
        {
          "id": "washington-university-in-st-louis-washu-e309faa1-philosophy-genuine",
          "name": "Philosophy",
          "confidence": "verified"
        },
        {
          "id": "washington-university-in-st-louis-washu-computer-science-eco-e33d641d",
          "name": "Computer Science + Economics",
          "confidence": "verified"
        },
        {
          "id": "washington-university-in-st-louis-washu-computer-science-mat-6d24e882",
          "name": "Computer Science + Math",
          "confidence": "verified"
        },
        {
          "id": "washington-university-in-st-louis-washu-business-computer-sc-540e24d1",
          "name": "Business + Computer Science",
          "confidence": "verified"
        },
        {
          "id": "washington-university-in-st-louis-washu-systems-science-engi-e13626fc",
          "name": "Systems Science & Engineering",
          "confidence": "verified"
        },
        {
          "id": "washington-university-in-st-louis-washu-environmental-engine-398f4c1b",
          "name": "Environmental Engineering",
          "confidence": "verified"
        }
      ]
    },
    {
      "id": "unc-chapel-hill-d480815f",
      "name": "University of North Carolina at Chapel Hill",
      "shortName": "University of North Carolina at Chapel Hill",
      "majors": [
        {
          "id": "unc-chapel-hill-d480815f-computer-science-genuine",
          "name": "Computer Science",
          "confidence": "verified"
        },
        {
          "id": "unc-chapel-hill-d480815f-data-science-genuine",
          "name": "Data Science",
          "confidence": "verified"
        },
        {
          "id": "unc-chapel-hill-d480815f-information-technology-genuine",
          "name": "Information Technology",
          "confidence": "verified"
        },
        {
          "id": "unc-chapel-hill-d480815f-computer-engineering-genuine",
          "name": "Computer Engineering",
          "confidence": "verified"
        },
        {
          "id": "unc-chapel-hill-d480815f-electrical-engineering-genuine",
          "name": "Electrical Engineering",
          "confidence": "verified"
        },
        {
          "id": "unc-chapel-hill-d480815f-mechanical-engineering-genuine",
          "name": "Mechanical Engineering",
          "confidence": "verified"
        },
        {
          "id": "unc-chapel-hill-d480815f-civil-engineering-genuine",
          "name": "Civil Engineering",
          "confidence": "verified"
        },
        {
          "id": "unc-chapel-hill-d480815f-chemical-engineering-genuine",
          "name": "Chemical Engineering",
          "confidence": "verified"
        },
        {
          "id": "unc-chapel-hill-d480815f-biomedical-engineering-genuine",
          "name": "Biomedical Engineering",
          "confidence": "verified"
        },
        {
          "id": "unc-chapel-hill-d480815f-industrial-engineering-genuine",
          "name": "Industrial Engineering",
          "confidence": "verified"
        },
        {
          "id": "unc-chapel-hill-d480815f-aerospace-engineering-genuine",
          "name": "Aerospace Engineering",
          "confidence": "verified"
        },
        {
          "id": "unc-chapel-hill-d480815f-business-administration-genuine",
          "name": "Business Administration",
          "confidence": "verified"
        },
        {
          "id": "unc-chapel-hill-d480815f-finance-genuine",
          "name": "Finance",
          "confidence": "verified"
        },
        {
          "id": "unc-chapel-hill-d480815f-accounting-genuine",
          "name": "Accounting",
          "confidence": "verified"
        },
        {
          "id": "unc-chapel-hill-d480815f-marketing-genuine",
          "name": "Marketing",
          "confidence": "verified"
        },
        {
          "id": "unc-chapel-hill-d480815f-management-genuine",
          "name": "Management",
          "confidence": "verified"
        },
        {
          "id": "unc-chapel-hill-d480815f-economics-genuine",
          "name": "Economics",
          "confidence": "verified"
        },
        {
          "id": "unc-chapel-hill-d480815f-psychology-genuine",
          "name": "Psychology",
          "confidence": "verified"
        },
        {
          "id": "unc-chapel-hill-d480815f-political-science-genuine",
          "name": "Political Science",
          "confidence": "verified"
        },
        {
          "id": "unc-chapel-hill-d480815f-sociology-genuine",
          "name": "Sociology",
          "confidence": "verified"
        },
        {
          "id": "unc-chapel-hill-d480815f-history-genuine",
          "name": "History",
          "confidence": "verified"
        },
        {
          "id": "unc-chapel-hill-d480815f-english-genuine",
          "name": "English",
          "confidence": "verified"
        },
        {
          "id": "unc-chapel-hill-d480815f-communications-genuine",
          "name": "Communications",
          "confidence": "verified"
        },
        {
          "id": "unc-chapel-hill-d480815f-biology-genuine",
          "name": "Biology",
          "confidence": "verified"
        },
        {
          "id": "unc-chapel-hill-d480815f-biochemistry-genuine",
          "name": "Biochemistry",
          "confidence": "verified"
        },
        {
          "id": "unc-chapel-hill-d480815f-chemistry-genuine",
          "name": "Chemistry",
          "confidence": "verified"
        },
        {
          "id": "unc-chapel-hill-d480815f-physics-genuine",
          "name": "Physics",
          "confidence": "verified"
        },
        {
          "id": "unc-chapel-hill-d480815f-mathematics-genuine",
          "name": "Mathematics",
          "confidence": "verified"
        },
        {
          "id": "unc-chapel-hill-d480815f-statistics-genuine",
          "name": "Statistics",
          "confidence": "verified"
        },
        {
          "id": "unc-chapel-hill-d480815f-public-health-genuine",
          "name": "Public Health",
          "confidence": "verified"
        },
        {
          "id": "unc-chapel-hill-d480815f-nursing-genuine",
          "name": "Nursing",
          "confidence": "verified"
        },
        {
          "id": "unc-chapel-hill-d480815f-international-relations-genuine",
          "name": "International Relations",
          "confidence": "verified"
        },
        {
          "id": "unc-chapel-hill-d480815f-philosophy-genuine",
          "name": "Philosophy",
          "confidence": "verified"
        },
        {
          "id": "unc-chapel-hill-applied-sciences-bs-materials-engineering-tr-3f4b2a36",
          "name": "Applied Sciences BS -- Materials Engineering track",
          "confidence": "verified"
        },
        {
          "id": "unc-chapel-hill-applied-sciences-bs-environmental-engineerin-f7063eb8",
          "name": "Applied Sciences BS -- Environmental Engineering track",
          "confidence": "verified"
        }
      ]
    },
    {
      "id": "mit-7abc1a23",
      "name": "Massachusetts Institute of Technology",
      "shortName": "Massachusetts Institute of Technology",
      "majors": [
        {
          "id": "mit-7abc1a23-computer-science-and-engineering-genuine",
          "name": "Computer Science and Engineering",
          "confidence": "verified"
        },
        {
          "id": "mit-7abc1a23-electrical-engineering-and-computer-science-genuine",
          "name": "Electrical Engineering and Computer Science",
          "confidence": "verified"
        },
        {
          "id": "mit-7abc1a23-computer-science-and-molecular-biology-genuine",
          "name": "Computer Science and Molecular Biology",
          "confidence": "verified"
        },
        {
          "id": "mit-7abc1a23-mechanical-engineering-genuine",
          "name": "Mechanical Engineering",
          "confidence": "verified"
        },
        {
          "id": "mit-7abc1a23-physics-genuine",
          "name": "Physics",
          "confidence": "verified"
        },
        {
          "id": "mit-7abc1a23-mathematics-genuine",
          "name": "Mathematics",
          "confidence": "verified"
        },
        {
          "id": "mit-7abc1a23-chemical-engineering-genuine",
          "name": "Chemical Engineering",
          "confidence": "verified"
        },
        {
          "id": "mit-7abc1a23-biological-engineering-genuine",
          "name": "Biological Engineering",
          "confidence": "verified"
        },
        {
          "id": "mit-7abc1a23-materials-science-and-engineering-genuine",
          "name": "Materials Science and Engineering",
          "confidence": "verified"
        },
        {
          "id": "mit-7abc1a23-aerospace-engineering-genuine",
          "name": "Aerospace Engineering",
          "confidence": "verified"
        },
        {
          "id": "mit-7abc1a23-brain-and-cognitive-sciences-genuine",
          "name": "Brain and Cognitive Sciences",
          "confidence": "verified"
        },
        {
          "id": "mit-7abc1a23-economics-genuine",
          "name": "Economics",
          "confidence": "verified"
        },
        {
          "id": "mit-7abc1a23-management-genuine",
          "name": "Management",
          "confidence": "verified"
        },
        {
          "id": "mit-7abc1a23-finance-genuine",
          "name": "Finance",
          "confidence": "verified"
        },
        {
          "id": "mit-7abc1a23-business-analytics-genuine",
          "name": "Business Analytics",
          "confidence": "verified"
        },
        {
          "id": "mit-7abc1a23-civil-and-environmental-engineering-genuine",
          "name": "Civil and Environmental Engineering",
          "confidence": "verified"
        },
        {
          "id": "mit-7abc1a23-nuclear-science-and-engineering-genuine",
          "name": "Nuclear Science and Engineering",
          "confidence": "verified"
        },
        {
          "id": "mit-aeronautics-astronautics-course-16-sb-aerospace-engineer-9f0a5e56",
          "name": "Aeronautics & Astronautics (Course 16)\nSB: Aerospace Engineering (16)\nSB: Engineering flexible (16-ENG)",
          "confidence": "verified"
        },
        {
          "id": "mit-biological-engineering-course-20-sb-biological-engineeri-e1859c7d",
          "name": "Biological Engineering (Course 20)\nSB: Biological Engineering (20)",
          "confidence": "verified"
        },
        {
          "id": "mit-chemical-engineering-course-10-sb-chemical-engineering-1-7b7787bb",
          "name": "Chemical Engineering (Course 10)\nSB: Chemical Engineering (10)\nSB: Chemical-Biological Engineering (10-B)\nSB: Chemical Engineering advanced (10-C)\nSB: Engineering flexible (10-ENG)",
          "confidence": "verified"
        },
        {
          "id": "mit-civil-environmental-engineering-course-1-sb-general-engi-ff277c18",
          "name": "Civil & Environmental Engineering (Course 1)\nSB: General Engineering (1-ENG)\n학제간 SB: Climate System Science & Engineering (1-12)*\n(*interdisciplinary — Course 1과 Course 12 공동)",
          "confidence": "verified"
        },
        {
          "id": "mit-electrical-engineering-computer-science-course-6-mit-sb--db7e4cbf",
          "name": "Electrical Engineering & Computer Science (Course 6) — MIT 최대 학과\nSB: Electrical Science & Engineering (6-1)\nSB: Electrical Eng & Computer Science (6-2)\nSB: Computer Science & Engineering (6-3)\nSB: AI & Decision Making (6-4)\nSB: Electrical Engineering with Computing (6-5)\n학제간 SB: CS & Molecular Biology (6-7)*\n학제간 SB: Computation & Cognition (6-9)*\n학제간 SB: CS, Economics & Data Science (6-14)*",
          "confidence": "verified"
        },
        {
          "id": "mit-materials-science-engineering-course-3-sb-materials-scie-09bb8dc3",
          "name": "Materials Science & Engineering (Course 3)\nSB: Materials Science & Engineering (3)\nSB: Materials Science & Engineering flexible (3-A)\nSB: Archaeology & Materials (3-C)",
          "confidence": "verified"
        },
        {
          "id": "mit-mechanical-engineering-course-2-sb-mechanical-engineerin-d4a7f221",
          "name": "Mechanical Engineering (Course 2)\nSB: Mechanical Engineering (2)\nSB: Mechanical & Ocean Engineering (2-OE)\nSB: Engineering flexible (2-A)",
          "confidence": "verified"
        },
        {
          "id": "mit-nuclear-science-engineering-course-22-sb-nuclear-science-87d2bece",
          "name": "Nuclear Science & Engineering (Course 22)\nSB: Nuclear Science & Engineering (22)\nSB: Engineering flexible (22-ENG)",
          "confidence": "verified"
        }
      ]
    },
    {
      "id": "stanford-university-269fc60a",
      "name": "Stanford University",
      "shortName": "Stanford University",
      "majors": [
        {
          "id": "stanford-university-269fc60a-computer-science-genuine",
          "name": "Computer Science",
          "confidence": "verified"
        },
        {
          "id": "stanford-university-269fc60a-symbolic-systems-genuine",
          "name": "Symbolic Systems",
          "confidence": "verified"
        },
        {
          "id": "stanford-university-269fc60a-management-science-and-engineering-genuine",
          "name": "Management Science and Engineering",
          "confidence": "verified"
        },
        {
          "id": "stanford-university-269fc60a-electrical-engineering-genuine",
          "name": "Electrical Engineering",
          "confidence": "verified"
        },
        {
          "id": "stanford-university-269fc60a-mechanical-engineering-genuine",
          "name": "Mechanical Engineering",
          "confidence": "verified"
        },
        {
          "id": "stanford-university-269fc60a-bioengineering-genuine",
          "name": "Bioengineering",
          "confidence": "verified"
        },
        {
          "id": "stanford-university-269fc60a-chemical-engineering-genuine",
          "name": "Chemical Engineering",
          "confidence": "verified"
        },
        {
          "id": "stanford-university-269fc60a-materials-science-and-engineering-genuine",
          "name": "Materials Science and Engineering",
          "confidence": "verified"
        },
        {
          "id": "stanford-university-269fc60a-civil-engineering-genuine",
          "name": "Civil Engineering",
          "confidence": "verified"
        },
        {
          "id": "stanford-university-269fc60a-biomedical-computation-genuine",
          "name": "Biomedical Computation",
          "confidence": "verified"
        },
        {
          "id": "stanford-university-economics-nj4thm8i",
          "name": "Economics",
          "confidence": "verified"
        },
        {
          "id": "stanford-university-269fc60a-psychology-genuine",
          "name": "Psychology",
          "confidence": "verified"
        },
        {
          "id": "stanford-university-269fc60a-political-science-genuine",
          "name": "Political Science",
          "confidence": "verified"
        },
        {
          "id": "stanford-university-269fc60a-human-biology-genuine",
          "name": "Human Biology",
          "confidence": "verified"
        },
        {
          "id": "stanford-university-269fc60a-biology-genuine",
          "name": "Biology",
          "confidence": "verified"
        },
        {
          "id": "stanford-university-269fc60a-mathematics-genuine",
          "name": "Mathematics",
          "confidence": "verified"
        },
        {
          "id": "stanford-university-269fc60a-physics-genuine",
          "name": "Physics",
          "confidence": "verified"
        },
        {
          "id": "stanford-university-269fc60a-chemistry-genuine",
          "name": "Chemistry",
          "confidence": "verified"
        },
        {
          "id": "stanford-university-269fc60a-statistics-genuine",
          "name": "Statistics",
          "confidence": "verified"
        },
        {
          "id": "stanford-university-269fc60a-communication-genuine",
          "name": "Communication",
          "confidence": "verified"
        },
        {
          "id": "stanford-university-269fc60a-sociology-genuine",
          "name": "Sociology",
          "confidence": "verified"
        },
        {
          "id": "stanford-university-269fc60a-international-relations-genuine",
          "name": "International Relations",
          "confidence": "verified"
        },
        {
          "id": "stanford-university-aeronautics-astronautics-aa-bs-departmen-5584759e",
          "name": "Aeronautics & Astronautics (AA-BS)\nDepartment: Aeronautics & Astronautics",
          "confidence": "verified"
        },
        {
          "id": "stanford-university-bioengineering-bioe-bs-department-bioeng-c94bbeb3",
          "name": "Bioengineering (BIOE-BS)\nDepartment: Bioengineering",
          "confidence": "verified"
        },
        {
          "id": "stanford-university-chemical-engineering-chemeng-bs-departme-bb94c0b2",
          "name": "Chemical Engineering (CHEMENG-BS)\nDepartment: Chemical Engineering",
          "confidence": "verified"
        },
        {
          "id": "stanford-university-civil-engineering-cee-bs-department-civi-9987db2d",
          "name": "Civil Engineering (CEE-BS)\nDepartment: Civil & Environmental Engineering\n※ 같은 학과에서 Environmental Engineering도 제공",
          "confidence": "verified"
        },
        {
          "id": "stanford-university-environmental-engineering-cee-bs-departm-4fcf70b9",
          "name": "Environmental Engineering (CEE 학과 소속 — BS)\nDepartment: Civil & Environmental Engineering\n※ Civil Engineering과 같은 학과; 별도 BS 학위",
          "confidence": "verified"
        },
        {
          "id": "stanford-university-computer-science-cs-bs-department-comput-43e2d5ab",
          "name": "Computer Science (CS-BS)\nDepartment: Computer Science",
          "confidence": "verified"
        },
        {
          "id": "stanford-university-electrical-engineering-ee-bs-department--56f41b33",
          "name": "Electrical Engineering (EE-BS)\nDepartment: Electrical Engineering",
          "confidence": "verified"
        },
        {
          "id": "stanford-university-management-science-engineering-ms-e-bs-d-799041df",
          "name": "Management Science & Engineering (MS&E-BS)\nDepartment: Management Science & Engineering",
          "confidence": "verified"
        },
        {
          "id": "stanford-university-materials-science-engineering-matsci-bs--0ca1f75b",
          "name": "Materials Science & Engineering (MATSCI-BS)\nDepartment: Materials Science & Engineering",
          "confidence": "verified"
        },
        {
          "id": "stanford-university-mechanical-engineering-me-bs-department--bf15c3ef",
          "name": "Mechanical Engineering (ME-BS)\nDepartment: Mechanical Engineering",
          "confidence": "verified"
        },
        {
          "id": "stanford-university-engineering-atmosphere-energy-engr-bs-su-c1057b8e",
          "name": "Engineering — Atmosphere & Energy (ENGR-BS subplan)\n학제간 BS in Engineering, School of Engineering 직속",
          "confidence": "verified"
        },
        {
          "id": "stanford-university-engineering-biomechanical-engineering-en-dbccec50",
          "name": "Engineering — Biomechanical Engineering (ENGR-BS subplan)\n학제간 BS in Engineering, School of Engineering 직속",
          "confidence": "verified"
        },
        {
          "id": "stanford-university-engineering-biomedical-computation-engr--d957fad1",
          "name": "Engineering — Biomedical Computation (ENGR-BS subplan)\n학제간 BS in Engineering, School of Engineering 직속",
          "confidence": "verified"
        },
        {
          "id": "stanford-university-engineering-engineering-physics-engr-bs--85b2b697",
          "name": "Engineering — Engineering Physics (ENGR-BS subplan)\n학제간 BS in Engineering, School of Engineering 직속",
          "confidence": "verified"
        },
        {
          "id": "stanford-university-engineering-sustainable-architecture-eng-741c1759",
          "name": "Engineering — Sustainable Architecture & Engineering (ENGR-BS subplan)\n학제간 BS in Engineering, School of Engineering 직속\n※ Architectural Design subplan: 2023년 이전 입학자만 (현재 신입 없음)",
          "confidence": "verified"
        },
        {
          "id": "stanford-university-individually-designed-major-in-engineeri-3de9c431",
          "name": "Individually Designed Major in Engineering (IDMEN-BS)\n※ 위 16개 defined 전공에 해당하지 않는 분야 지망자가 교수 2인과 설계하는 자체 전공. 입학 후 junior 말까지 신청.",
          "confidence": "verified"
        }
      ]
    },
    {
      "id": "yale-university-af30ac76",
      "name": "Yale University",
      "shortName": "Yale University",
      "majors": [
        {
          "id": "yale-university-af30ac76-computer-science-genuine",
          "name": "Computer Science",
          "confidence": "verified"
        },
        {
          "id": "yale-university-af30ac76-data-science-genuine",
          "name": "Data Science",
          "confidence": "verified"
        },
        {
          "id": "yale-university-af30ac76-information-technology-genuine",
          "name": "Information Technology",
          "confidence": "verified"
        },
        {
          "id": "yale-university-af30ac76-computer-engineering-genuine",
          "name": "Computer Engineering",
          "confidence": "verified"
        },
        {
          "id": "yale-university-af30ac76-electrical-engineering-genuine",
          "name": "Electrical Engineering",
          "confidence": "verified"
        },
        {
          "id": "yale-university-af30ac76-mechanical-engineering-genuine",
          "name": "Mechanical Engineering",
          "confidence": "verified"
        },
        {
          "id": "yale-university-af30ac76-civil-engineering-genuine",
          "name": "Civil Engineering",
          "confidence": "verified"
        },
        {
          "id": "yale-university-af30ac76-chemical-engineering-genuine",
          "name": "Chemical Engineering",
          "confidence": "verified"
        },
        {
          "id": "yale-university-af30ac76-biomedical-engineering-genuine",
          "name": "Biomedical Engineering",
          "confidence": "verified"
        },
        {
          "id": "yale-university-af30ac76-industrial-engineering-genuine",
          "name": "Industrial Engineering",
          "confidence": "verified"
        },
        {
          "id": "yale-university-af30ac76-aerospace-engineering-genuine",
          "name": "Aerospace Engineering",
          "confidence": "verified"
        },
        {
          "id": "yale-university-af30ac76-business-administration-genuine",
          "name": "Business Administration",
          "confidence": "verified"
        },
        {
          "id": "yale-university-af30ac76-finance-genuine",
          "name": "Finance",
          "confidence": "verified"
        },
        {
          "id": "yale-university-af30ac76-accounting-genuine",
          "name": "Accounting",
          "confidence": "verified"
        },
        {
          "id": "yale-university-af30ac76-marketing-genuine",
          "name": "Marketing",
          "confidence": "verified"
        },
        {
          "id": "yale-university-af30ac76-management-genuine",
          "name": "Management",
          "confidence": "verified"
        },
        {
          "id": "yale-university-af30ac76-economics-genuine",
          "name": "Economics",
          "confidence": "verified"
        },
        {
          "id": "yale-university-af30ac76-psychology-genuine",
          "name": "Psychology",
          "confidence": "verified"
        },
        {
          "id": "yale-university-af30ac76-political-science-genuine",
          "name": "Political Science",
          "confidence": "verified"
        },
        {
          "id": "yale-university-af30ac76-sociology-genuine",
          "name": "Sociology",
          "confidence": "verified"
        },
        {
          "id": "yale-university-af30ac76-history-genuine",
          "name": "History",
          "confidence": "verified"
        },
        {
          "id": "yale-university-af30ac76-english-genuine",
          "name": "English",
          "confidence": "verified"
        },
        {
          "id": "yale-university-af30ac76-communications-genuine",
          "name": "Communications",
          "confidence": "verified"
        },
        {
          "id": "yale-university-af30ac76-biology-genuine",
          "name": "Biology",
          "confidence": "verified"
        },
        {
          "id": "yale-university-af30ac76-biochemistry-genuine",
          "name": "Biochemistry",
          "confidence": "verified"
        },
        {
          "id": "yale-university-af30ac76-chemistry-genuine",
          "name": "Chemistry",
          "confidence": "verified"
        },
        {
          "id": "yale-university-af30ac76-physics-genuine",
          "name": "Physics",
          "confidence": "verified"
        },
        {
          "id": "yale-university-af30ac76-mathematics-genuine",
          "name": "Mathematics",
          "confidence": "verified"
        },
        {
          "id": "yale-university-af30ac76-statistics-genuine",
          "name": "Statistics",
          "confidence": "verified"
        },
        {
          "id": "yale-university-af30ac76-public-health-genuine",
          "name": "Public Health",
          "confidence": "verified"
        },
        {
          "id": "yale-university-af30ac76-nursing-genuine",
          "name": "Nursing",
          "confidence": "verified"
        },
        {
          "id": "yale-university-af30ac76-international-relations-genuine",
          "name": "International Relations",
          "confidence": "verified"
        },
        {
          "id": "yale-university-af30ac76-philosophy-genuine",
          "name": "Philosophy",
          "confidence": "verified"
        },
        {
          "id": "yale-university-applied-mathematics-ba-or-bs-seas-engineerin-0978a840",
          "name": "Applied Mathematics (BA or BS)\n※ SEAS 소속; engineering 입학 지침 적용",
          "confidence": "verified"
        },
        {
          "id": "yale-university-applied-physics-bs-ea850210",
          "name": "Applied Physics (BS)",
          "confidence": "verified"
        },
        {
          "id": "yale-university-biomedical-engineering-bs-combined-bs-ms-5e509f3c",
          "name": "Biomedical Engineering (BS + combined BS/MS 가능)",
          "confidence": "verified"
        },
        {
          "id": "yale-university-chemical-engineering-bs-abet-bs-engineering--92342d03",
          "name": "Chemical Engineering\nBS (ABET 인증) | BS: Engineering Sciences—Chemical",
          "confidence": "verified"
        },
        {
          "id": "yale-university-computer-science-bs-or-ba-bs-cs-economics-bs-4f7ca8b3",
          "name": "Computer Science\nBS or BA | BS: CS+Economics | BS: CS+Mathematics | BA: CS+Psychology | BA/BS: Computing & Linguistics | BA: Computing & Arts",
          "confidence": "verified"
        },
        {
          "id": "yale-university-electrical-engineering-bs-abet-electrical-co-953be665",
          "name": "Electrical Engineering\nBS (ABET 인증, 실질적으로 'Electrical & Computer Engineering') | BS/BA: Engineering Sciences—Electrical",
          "confidence": "verified"
        },
        {
          "id": "yale-university-environmental-engineering-bs-bs-ba-engineeri-f70807e2",
          "name": "Environmental Engineering\nBS | BS/BA: Engineering Sciences—Environmental",
          "confidence": "verified"
        },
        {
          "id": "yale-university-mechanical-engineering-bs-abet-bs-ba-enginee-b9e18db9",
          "name": "Mechanical Engineering\nBS (ABET 인증) | BS/BA: Engineering Sciences—Mechanical",
          "confidence": "verified"
        }
      ]
    },
    {
      "id": "harvard-university-cdd16461",
      "name": "Harvard University",
      "shortName": "Harvard University",
      "majors": [
        {
          "id": "harvard-university-cdd16461-computer-science-genuine",
          "name": "Computer Science",
          "confidence": "verified"
        },
        {
          "id": "harvard-university-cdd16461-applied-mathematics-genuine",
          "name": "Applied Mathematics",
          "confidence": "verified"
        },
        {
          "id": "harvard-university-cdd16461-statistics-genuine",
          "name": "Statistics",
          "confidence": "verified"
        },
        {
          "id": "harvard-university-cdd16461-electrical-engineering-genuine",
          "name": "Electrical Engineering",
          "confidence": "verified"
        },
        {
          "id": "harvard-university-cdd16461-mechanical-engineering-genuine",
          "name": "Mechanical Engineering",
          "confidence": "verified"
        },
        {
          "id": "harvard-university-cdd16461-biomedical-engineering-genuine",
          "name": "Biomedical Engineering",
          "confidence": "verified"
        },
        {
          "id": "harvard-university-cdd16461-chemical-and-physical-biology-genuine",
          "name": "Chemical and Physical Biology",
          "confidence": "verified"
        },
        {
          "id": "harvard-university-cdd16461-physics-genuine",
          "name": "Physics",
          "confidence": "verified"
        },
        {
          "id": "harvard-university-cdd16461-chemistry-genuine",
          "name": "Chemistry",
          "confidence": "verified"
        },
        {
          "id": "harvard-university-cdd16461-molecular-and-cellular-biology-genuine",
          "name": "Molecular and Cellular Biology",
          "confidence": "verified"
        },
        {
          "id": "harvard-university-cdd16461-human-evolutionary-biology-genuine",
          "name": "Human Evolutionary Biology",
          "confidence": "verified"
        },
        {
          "id": "harvard-university-cdd16461-economics-genuine",
          "name": "Economics",
          "confidence": "verified"
        },
        {
          "id": "harvard-university-cdd16461-government-genuine",
          "name": "Government",
          "confidence": "verified"
        },
        {
          "id": "harvard-university-cdd16461-psychology-genuine",
          "name": "Psychology",
          "confidence": "verified"
        },
        {
          "id": "harvard-university-cdd16461-sociology-genuine",
          "name": "Sociology",
          "confidence": "verified"
        },
        {
          "id": "harvard-university-cdd16461-history-genuine",
          "name": "History",
          "confidence": "verified"
        },
        {
          "id": "harvard-university-cdd16461-english-genuine",
          "name": "English",
          "confidence": "verified"
        },
        {
          "id": "harvard-university-cdd16461-philosophy-genuine",
          "name": "Philosophy",
          "confidence": "verified"
        },
        {
          "id": "harvard-university-cdd16461-linguistics-genuine",
          "name": "Linguistics",
          "confidence": "verified"
        },
        {
          "id": "harvard-university-cdd16461-neuroscience-genuine",
          "name": "Neuroscience",
          "confidence": "verified"
        },
        {
          "id": "harvard-university-cdd16461-history-and-literature-genuine",
          "name": "History and Literature",
          "confidence": "verified"
        },
        {
          "id": "harvard-university-cdd16461-anthropology-genuine",
          "name": "Anthropology",
          "confidence": "verified"
        },
        {
          "id": "harvard-university-cdd16461-social-studies-genuine",
          "name": "Social Studies",
          "confidence": "verified"
        },
        {
          "id": "harvard-university-applied-mathematics-ab-or-ab-sm-harvard-c-4cb91ecf",
          "name": "Applied Mathematics (AB or AB/SM)\n※ Harvard는 'concentration' 사용\nSecondary Field(minor) 별도 제공",
          "confidence": "verified"
        },
        {
          "id": "harvard-university-bioengineering-ab-or-sb-sb-engineering-sc-02f1d6f1",
          "name": "Bioengineering (AB or SB)\nSB = 'Engineering Sciences SB (Bioengineering track)'\nAB = 'Biomedical Engineering AB' (구어 표현)\n※ 'Biomedical Engineering' 독립 전공 없음 — seas.harvard.edu 확인",
          "confidence": "verified"
        },
        {
          "id": "harvard-university-computer-science-ab-or-ab-sm-secondary-fi-b0fbf3db",
          "name": "Computer Science (AB or AB/SM)\nSecondary Field(minor) 별도 제공",
          "confidence": "verified"
        },
        {
          "id": "harvard-university-electrical-engineering-ab-or-sb-sb-electr-f2448b9c",
          "name": "Electrical Engineering (AB or SB)\nSB = 'Electrical Engineering SB'\nAB = 'Engineering Sciences AB (Electrical & Computer Engineering track)'",
          "confidence": "verified"
        },
        {
          "id": "harvard-university-environmental-science-engineering-ab-or-s-2b8a65e5",
          "name": "Environmental Science & Engineering (AB or SB)\nSB = 'Engineering Sciences SB (Environmental Science & Eng track)'\nAB = 'Environmental Science & Engineering AB'",
          "confidence": "verified"
        },
        {
          "id": "harvard-university-materials-science-mechanical-engineering--7f22199b",
          "name": "Materials Science & Mechanical Engineering (AB or SB)\nSB = 'Materials Science & Mechanical Engineering SB'\nAB = 'Engineering Sciences AB (Mechanical & Materials Science & Eng track)'\n※ Mechanical Engineering과 Materials Science가 통합 전공",
          "confidence": "verified"
        }
      ]
    },
    {
      "id": "northwestern-university-4a946cb3",
      "name": "Northwestern University",
      "shortName": "Northwestern",
      "majors": [
        {
          "id": "northwestern-computer-science-46f7b9a1",
          "name": "Computer Science",
          "confidence": "verified"
        },
        {
          "id": "northwestern-university-4a946cb3-data-science-genuine",
          "name": "Data Science",
          "confidence": "verified"
        },
        {
          "id": "northwestern-university-4a946cb3-information-technology-genuine",
          "name": "Information Technology",
          "confidence": "verified"
        },
        {
          "id": "northwestern-computer-engineering-560efa72",
          "name": "Computer Engineering",
          "confidence": "verified"
        },
        {
          "id": "northwestern-electrical-engineering-4b9b0f05",
          "name": "Electrical Engineering",
          "confidence": "verified"
        },
        {
          "id": "northwestern-mechanical-engineering-1406f4de",
          "name": "Mechanical Engineering",
          "confidence": "verified"
        },
        {
          "id": "northwestern-civil-engineering-0f01a826",
          "name": "Civil Engineering",
          "confidence": "verified"
        },
        {
          "id": "northwestern-chemical-engineering-4ac9ec05",
          "name": "Chemical Engineering",
          "confidence": "verified"
        },
        {
          "id": "northwestern-biomedical-engineering-222cadfc",
          "name": "Biomedical Engineering",
          "confidence": "verified"
        },
        {
          "id": "northwestern-industrial-engineering-5c0df3ec",
          "name": "Industrial Engineering",
          "confidence": "verified"
        },
        {
          "id": "northwestern-university-4a946cb3-aerospace-engineering-genuine",
          "name": "Aerospace Engineering",
          "confidence": "verified"
        },
        {
          "id": "northwestern-university-4a946cb3-business-administration-genuine",
          "name": "Business Administration",
          "confidence": "verified"
        },
        {
          "id": "northwestern-university-4a946cb3-finance-genuine",
          "name": "Finance",
          "confidence": "verified"
        },
        {
          "id": "northwestern-university-4a946cb3-accounting-genuine",
          "name": "Accounting",
          "confidence": "verified"
        },
        {
          "id": "northwestern-university-4a946cb3-marketing-genuine",
          "name": "Marketing",
          "confidence": "verified"
        },
        {
          "id": "northwestern-university-4a946cb3-management-genuine",
          "name": "Management",
          "confidence": "verified"
        },
        {
          "id": "northwestern-university-4a946cb3-economics-genuine",
          "name": "Economics",
          "confidence": "verified"
        },
        {
          "id": "northwestern-university-4a946cb3-psychology-genuine",
          "name": "Psychology",
          "confidence": "verified"
        },
        {
          "id": "northwestern-university-4a946cb3-political-science-genuine",
          "name": "Political Science",
          "confidence": "verified"
        },
        {
          "id": "northwestern-university-4a946cb3-sociology-genuine",
          "name": "Sociology",
          "confidence": "verified"
        },
        {
          "id": "northwestern-university-4a946cb3-history-genuine",
          "name": "History",
          "confidence": "verified"
        },
        {
          "id": "northwestern-university-4a946cb3-english-genuine",
          "name": "English",
          "confidence": "verified"
        },
        {
          "id": "northwestern-university-4a946cb3-communications-genuine",
          "name": "Communications",
          "confidence": "verified"
        },
        {
          "id": "northwestern-university-4a946cb3-biology-genuine",
          "name": "Biology",
          "confidence": "verified"
        },
        {
          "id": "northwestern-university-4a946cb3-biochemistry-genuine",
          "name": "Biochemistry",
          "confidence": "verified"
        },
        {
          "id": "northwestern-university-4a946cb3-chemistry-genuine",
          "name": "Chemistry",
          "confidence": "verified"
        },
        {
          "id": "northwestern-university-4a946cb3-physics-genuine",
          "name": "Physics",
          "confidence": "verified"
        },
        {
          "id": "northwestern-university-4a946cb3-mathematics-genuine",
          "name": "Mathematics",
          "confidence": "verified"
        },
        {
          "id": "northwestern-university-4a946cb3-statistics-genuine",
          "name": "Statistics",
          "confidence": "verified"
        },
        {
          "id": "northwestern-university-4a946cb3-public-health-genuine",
          "name": "Public Health",
          "confidence": "verified"
        },
        {
          "id": "northwestern-university-4a946cb3-nursing-genuine",
          "name": "Nursing",
          "confidence": "verified"
        },
        {
          "id": "northwestern-university-4a946cb3-international-relations-genuine",
          "name": "International Relations",
          "confidence": "verified"
        },
        {
          "id": "northwestern-university-4a946cb3-philosophy-genuine",
          "name": "Philosophy",
          "confidence": "verified"
        },
        {
          "id": "northwestern-applied-mathematics-1e4fce73",
          "name": "Applied Mathematics",
          "confidence": "verified"
        },
        {
          "id": "northwestern-environmental-engineering-2f37c4cf",
          "name": "Environmental Engineering",
          "confidence": "verified"
        },
        {
          "id": "northwestern-materials-science-engineering-66661c09",
          "name": "Materials Science & Engineering",
          "confidence": "verified"
        }
      ]
    },
    {
      "id": "university-of-chicago-f7a9cb32",
      "name": "University of Chicago",
      "shortName": "UChicago",
      "majors": [
        {
          "id": "university-of-chicago-f7a9cb32-computer-science-genuine",
          "name": "Computer Science",
          "confidence": "verified"
        },
        {
          "id": "university-of-chicago-f7a9cb32-data-science-genuine",
          "name": "Data Science",
          "confidence": "verified"
        },
        {
          "id": "university-of-chicago-f7a9cb32-information-technology-genuine",
          "name": "Information Technology",
          "confidence": "verified"
        },
        {
          "id": "university-of-chicago-f7a9cb32-computer-engineering-genuine",
          "name": "Computer Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-chicago-f7a9cb32-electrical-engineering-genuine",
          "name": "Electrical Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-chicago-f7a9cb32-mechanical-engineering-genuine",
          "name": "Mechanical Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-chicago-f7a9cb32-civil-engineering-genuine",
          "name": "Civil Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-chicago-f7a9cb32-chemical-engineering-genuine",
          "name": "Chemical Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-chicago-f7a9cb32-biomedical-engineering-genuine",
          "name": "Biomedical Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-chicago-f7a9cb32-industrial-engineering-genuine",
          "name": "Industrial Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-chicago-f7a9cb32-aerospace-engineering-genuine",
          "name": "Aerospace Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-chicago-f7a9cb32-business-administration-genuine",
          "name": "Business Administration",
          "confidence": "verified"
        },
        {
          "id": "university-of-chicago-f7a9cb32-finance-genuine",
          "name": "Finance",
          "confidence": "verified"
        },
        {
          "id": "university-of-chicago-f7a9cb32-accounting-genuine",
          "name": "Accounting",
          "confidence": "verified"
        },
        {
          "id": "university-of-chicago-f7a9cb32-marketing-genuine",
          "name": "Marketing",
          "confidence": "verified"
        },
        {
          "id": "university-of-chicago-f7a9cb32-management-genuine",
          "name": "Management",
          "confidence": "verified"
        },
        {
          "id": "university-of-chicago-f7a9cb32-economics-genuine",
          "name": "Economics",
          "confidence": "verified"
        },
        {
          "id": "university-of-chicago-f7a9cb32-psychology-genuine",
          "name": "Psychology",
          "confidence": "verified"
        },
        {
          "id": "university-of-chicago-f7a9cb32-political-science-genuine",
          "name": "Political Science",
          "confidence": "verified"
        },
        {
          "id": "university-of-chicago-f7a9cb32-sociology-genuine",
          "name": "Sociology",
          "confidence": "verified"
        },
        {
          "id": "university-of-chicago-f7a9cb32-history-genuine",
          "name": "History",
          "confidence": "verified"
        },
        {
          "id": "university-of-chicago-f7a9cb32-english-genuine",
          "name": "English",
          "confidence": "verified"
        },
        {
          "id": "university-of-chicago-f7a9cb32-communications-genuine",
          "name": "Communications",
          "confidence": "verified"
        },
        {
          "id": "university-of-chicago-f7a9cb32-biology-genuine",
          "name": "Biology",
          "confidence": "verified"
        },
        {
          "id": "university-of-chicago-f7a9cb32-biochemistry-genuine",
          "name": "Biochemistry",
          "confidence": "verified"
        },
        {
          "id": "university-of-chicago-f7a9cb32-chemistry-genuine",
          "name": "Chemistry",
          "confidence": "verified"
        },
        {
          "id": "university-of-chicago-f7a9cb32-physics-genuine",
          "name": "Physics",
          "confidence": "verified"
        },
        {
          "id": "university-of-chicago-f7a9cb32-mathematics-genuine",
          "name": "Mathematics",
          "confidence": "verified"
        },
        {
          "id": "university-of-chicago-f7a9cb32-statistics-genuine",
          "name": "Statistics",
          "confidence": "verified"
        },
        {
          "id": "university-of-chicago-f7a9cb32-public-health-genuine",
          "name": "Public Health",
          "confidence": "verified"
        },
        {
          "id": "university-of-chicago-f7a9cb32-nursing-genuine",
          "name": "Nursing",
          "confidence": "verified"
        },
        {
          "id": "university-of-chicago-f7a9cb32-international-relations-genuine",
          "name": "International Relations",
          "confidence": "verified"
        },
        {
          "id": "university-of-chicago-f7a9cb32-philosophy-genuine",
          "name": "Philosophy",
          "confidence": "verified"
        },
        {
          "id": "uchicago-molecular-engineering-bio-3ea90da8",
          "name": "Molecular Engineering (Bioengineering Track)",
          "confidence": "verified"
        },
        {
          "id": "uchicago-molecular-engineering-chem-54867881",
          "name": "Molecular Engineering (Chemical Track)",
          "confidence": "verified"
        },
        {
          "id": "uchicago-molecular-engineering-quantum-13752df2",
          "name": "Molecular Engineering (Quantum Track)",
          "confidence": "verified"
        }
      ]
    },
    {
      "id": "university-of-notre-dame-e9fb210a",
      "name": "University of Notre Dame",
      "shortName": "Notre Dame",
      "majors": [
        {
          "id": "university-of-notre-dame-computer-science-adjpagl8",
          "name": "Computer Science",
          "confidence": "verified"
        },
        {
          "id": "university-of-notre-dame-e9fb210a-data-science-genuine",
          "name": "Data Science",
          "confidence": "verified"
        },
        {
          "id": "university-of-notre-dame-e9fb210a-information-technology-genuine",
          "name": "Information Technology",
          "confidence": "verified"
        },
        {
          "id": "university-of-notre-dame-computer-engineering-n22ov9fg",
          "name": "Computer Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-notre-dame-electrical-engineering-4ae9ockc",
          "name": "Electrical Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-notre-dame-mechanical-engineering-3k19u2wj",
          "name": "Mechanical Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-notre-dame-civil-engineering-qrw8kbzq",
          "name": "Civil Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-notre-dame-chemical-engineering-ielchjgh",
          "name": "Chemical Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-notre-dame-e9fb210a-biomedical-engineering-genuine",
          "name": "Biomedical Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-notre-dame-e9fb210a-industrial-engineering-genuine",
          "name": "Industrial Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-notre-dame-aerospace-engineering-71ip2gbr",
          "name": "Aerospace Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-notre-dame-e9fb210a-business-administration-genuine",
          "name": "Business Administration",
          "confidence": "verified"
        },
        {
          "id": "university-of-notre-dame-e9fb210a-finance-genuine",
          "name": "Finance",
          "confidence": "verified"
        },
        {
          "id": "university-of-notre-dame-e9fb210a-accounting-genuine",
          "name": "Accounting",
          "confidence": "verified"
        },
        {
          "id": "university-of-notre-dame-e9fb210a-marketing-genuine",
          "name": "Marketing",
          "confidence": "verified"
        },
        {
          "id": "university-of-notre-dame-e9fb210a-management-genuine",
          "name": "Management",
          "confidence": "verified"
        },
        {
          "id": "university-of-notre-dame-e9fb210a-economics-genuine",
          "name": "Economics",
          "confidence": "verified"
        },
        {
          "id": "university-of-notre-dame-e9fb210a-psychology-genuine",
          "name": "Psychology",
          "confidence": "verified"
        },
        {
          "id": "university-of-notre-dame-e9fb210a-political-science-genuine",
          "name": "Political Science",
          "confidence": "verified"
        },
        {
          "id": "university-of-notre-dame-e9fb210a-sociology-genuine",
          "name": "Sociology",
          "confidence": "verified"
        },
        {
          "id": "university-of-notre-dame-e9fb210a-history-genuine",
          "name": "History",
          "confidence": "verified"
        },
        {
          "id": "university-of-notre-dame-e9fb210a-english-genuine",
          "name": "English",
          "confidence": "verified"
        },
        {
          "id": "university-of-notre-dame-e9fb210a-communications-genuine",
          "name": "Communications",
          "confidence": "verified"
        },
        {
          "id": "university-of-notre-dame-e9fb210a-biology-genuine",
          "name": "Biology",
          "confidence": "verified"
        },
        {
          "id": "university-of-notre-dame-e9fb210a-biochemistry-genuine",
          "name": "Biochemistry",
          "confidence": "verified"
        },
        {
          "id": "university-of-notre-dame-e9fb210a-chemistry-genuine",
          "name": "Chemistry",
          "confidence": "verified"
        },
        {
          "id": "university-of-notre-dame-e9fb210a-physics-genuine",
          "name": "Physics",
          "confidence": "verified"
        },
        {
          "id": "university-of-notre-dame-e9fb210a-mathematics-genuine",
          "name": "Mathematics",
          "confidence": "verified"
        },
        {
          "id": "university-of-notre-dame-e9fb210a-statistics-genuine",
          "name": "Statistics",
          "confidence": "verified"
        },
        {
          "id": "university-of-notre-dame-e9fb210a-public-health-genuine",
          "name": "Public Health",
          "confidence": "verified"
        },
        {
          "id": "university-of-notre-dame-e9fb210a-nursing-genuine",
          "name": "Nursing",
          "confidence": "verified"
        },
        {
          "id": "university-of-notre-dame-e9fb210a-international-relations-genuine",
          "name": "International Relations",
          "confidence": "verified"
        },
        {
          "id": "university-of-notre-dame-e9fb210a-philosophy-genuine",
          "name": "Philosophy",
          "confidence": "verified"
        },
        {
          "id": "university-of-notre-dame-environmental-engineering-ga1jgp6k",
          "name": "Environmental Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-notre-dame-environmental-earth-sciences-0ggzkb48",
          "name": "Environmental Earth Sciences",
          "confidence": "verified"
        }
      ]
    },
    {
      "id": "vanderbilt-university-b8a7c293",
      "name": "Vanderbilt University",
      "shortName": "Vanderbilt",
      "majors": [
        {
          "id": "vanderbilt-university-computer-science-lv32gu0z",
          "name": "Computer Science",
          "confidence": "verified"
        },
        {
          "id": "vanderbilt-university-b8a7c293-data-science-genuine",
          "name": "Data Science",
          "confidence": "verified"
        },
        {
          "id": "vanderbilt-university-b8a7c293-information-technology-genuine",
          "name": "Information Technology",
          "confidence": "verified"
        },
        {
          "id": "vanderbilt-university-computer-engineering-y1tbxz6q",
          "name": "Computer Engineering",
          "confidence": "verified"
        },
        {
          "id": "vanderbilt-university-electrical-engineering-zk9d3xzf",
          "name": "Electrical Engineering",
          "confidence": "verified"
        },
        {
          "id": "vanderbilt-university-mechanical-engineering-vo56pp3o",
          "name": "Mechanical Engineering",
          "confidence": "verified"
        },
        {
          "id": "vanderbilt-university-civil-engineering-q0m23glw",
          "name": "Civil Engineering",
          "confidence": "verified"
        },
        {
          "id": "vanderbilt-university-chemical-engineering-wfm1ohhi",
          "name": "Chemical Engineering",
          "confidence": "verified"
        },
        {
          "id": "vanderbilt-university-biomedical-engineering-9dq2qatb",
          "name": "Biomedical Engineering",
          "confidence": "verified"
        },
        {
          "id": "vanderbilt-university-b8a7c293-industrial-engineering-genuine",
          "name": "Industrial Engineering",
          "confidence": "verified"
        },
        {
          "id": "vanderbilt-university-b8a7c293-aerospace-engineering-genuine",
          "name": "Aerospace Engineering",
          "confidence": "verified"
        },
        {
          "id": "vanderbilt-university-b8a7c293-business-administration-genuine",
          "name": "Business Administration",
          "confidence": "verified"
        },
        {
          "id": "vanderbilt-university-b8a7c293-finance-genuine",
          "name": "Finance",
          "confidence": "verified"
        },
        {
          "id": "vanderbilt-university-b8a7c293-accounting-genuine",
          "name": "Accounting",
          "confidence": "verified"
        },
        {
          "id": "vanderbilt-university-b8a7c293-marketing-genuine",
          "name": "Marketing",
          "confidence": "verified"
        },
        {
          "id": "vanderbilt-university-b8a7c293-management-genuine",
          "name": "Management",
          "confidence": "verified"
        },
        {
          "id": "vanderbilt-university-b8a7c293-economics-genuine",
          "name": "Economics",
          "confidence": "verified"
        },
        {
          "id": "vanderbilt-university-b8a7c293-psychology-genuine",
          "name": "Psychology",
          "confidence": "verified"
        },
        {
          "id": "vanderbilt-university-b8a7c293-political-science-genuine",
          "name": "Political Science",
          "confidence": "verified"
        },
        {
          "id": "vanderbilt-university-b8a7c293-sociology-genuine",
          "name": "Sociology",
          "confidence": "verified"
        },
        {
          "id": "vanderbilt-university-b8a7c293-history-genuine",
          "name": "History",
          "confidence": "verified"
        },
        {
          "id": "vanderbilt-university-b8a7c293-english-genuine",
          "name": "English",
          "confidence": "verified"
        },
        {
          "id": "vanderbilt-university-b8a7c293-communications-genuine",
          "name": "Communications",
          "confidence": "verified"
        },
        {
          "id": "vanderbilt-university-b8a7c293-biology-genuine",
          "name": "Biology",
          "confidence": "verified"
        },
        {
          "id": "vanderbilt-university-b8a7c293-biochemistry-genuine",
          "name": "Biochemistry",
          "confidence": "verified"
        },
        {
          "id": "vanderbilt-university-b8a7c293-chemistry-genuine",
          "name": "Chemistry",
          "confidence": "verified"
        },
        {
          "id": "vanderbilt-university-b8a7c293-physics-genuine",
          "name": "Physics",
          "confidence": "verified"
        },
        {
          "id": "vanderbilt-university-b8a7c293-mathematics-genuine",
          "name": "Mathematics",
          "confidence": "verified"
        },
        {
          "id": "vanderbilt-university-b8a7c293-statistics-genuine",
          "name": "Statistics",
          "confidence": "verified"
        },
        {
          "id": "vanderbilt-university-b8a7c293-public-health-genuine",
          "name": "Public Health",
          "confidence": "verified"
        },
        {
          "id": "vanderbilt-university-b8a7c293-nursing-genuine",
          "name": "Nursing",
          "confidence": "verified"
        },
        {
          "id": "vanderbilt-university-b8a7c293-international-relations-genuine",
          "name": "International Relations",
          "confidence": "verified"
        },
        {
          "id": "vanderbilt-university-b8a7c293-philosophy-genuine",
          "name": "Philosophy",
          "confidence": "verified"
        },
        {
          "id": "vanderbilt-university-environmental-engineering-lyk1kqek",
          "name": "Environmental Engineering",
          "confidence": "verified"
        },
        {
          "id": "vanderbilt-university-engineering-science-u8tm3u4o",
          "name": "Engineering Science",
          "confidence": "verified"
        }
      ]
    },
    {
      "id": "university-of-florida-9e7ab214",
      "name": "University of Florida",
      "shortName": "UF",
      "majors": [
        {
          "id": "university-of-florida-computer-science-46f7b9a1",
          "name": "Computer Science",
          "confidence": "verified"
        },
        {
          "id": "university-of-florida-9e7ab214-data-science-genuine",
          "name": "Data Science",
          "confidence": "verified"
        },
        {
          "id": "university-of-florida-9e7ab214-information-technology-genuine",
          "name": "Information Technology",
          "confidence": "verified"
        },
        {
          "id": "university-of-florida-computer-engineering-560efa72",
          "name": "Computer Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-florida-electrical-engineering-4b9b0f05",
          "name": "Electrical Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-florida-mechanical-engineering-1406f4de",
          "name": "Mechanical Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-florida-civil-engineering-0f01a826",
          "name": "Civil Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-florida-chemical-engineering-4ac9ec05",
          "name": "Chemical Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-florida-biomedical-engineering-222cadfc",
          "name": "Biomedical Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-florida-9e7ab214-industrial-engineering-genuine",
          "name": "Industrial Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-florida-aerospace-engineering-6f1ec888",
          "name": "Aerospace Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-florida-9e7ab214-business-administration-genuine",
          "name": "Business Administration",
          "confidence": "verified"
        },
        {
          "id": "university-of-florida-9e7ab214-finance-genuine",
          "name": "Finance",
          "confidence": "verified"
        },
        {
          "id": "university-of-florida-9e7ab214-accounting-genuine",
          "name": "Accounting",
          "confidence": "verified"
        },
        {
          "id": "university-of-florida-9e7ab214-marketing-genuine",
          "name": "Marketing",
          "confidence": "verified"
        },
        {
          "id": "university-of-florida-9e7ab214-management-genuine",
          "name": "Management",
          "confidence": "verified"
        },
        {
          "id": "university-of-florida-9e7ab214-economics-genuine",
          "name": "Economics",
          "confidence": "verified"
        },
        {
          "id": "university-of-florida-9e7ab214-psychology-genuine",
          "name": "Psychology",
          "confidence": "verified"
        },
        {
          "id": "university-of-florida-9e7ab214-political-science-genuine",
          "name": "Political Science",
          "confidence": "verified"
        },
        {
          "id": "university-of-florida-9e7ab214-sociology-genuine",
          "name": "Sociology",
          "confidence": "verified"
        },
        {
          "id": "university-of-florida-9e7ab214-history-genuine",
          "name": "History",
          "confidence": "verified"
        },
        {
          "id": "university-of-florida-9e7ab214-english-genuine",
          "name": "English",
          "confidence": "verified"
        },
        {
          "id": "university-of-florida-9e7ab214-communications-genuine",
          "name": "Communications",
          "confidence": "verified"
        },
        {
          "id": "university-of-florida-9e7ab214-biology-genuine",
          "name": "Biology",
          "confidence": "verified"
        },
        {
          "id": "university-of-florida-9e7ab214-biochemistry-genuine",
          "name": "Biochemistry",
          "confidence": "verified"
        },
        {
          "id": "university-of-florida-9e7ab214-chemistry-genuine",
          "name": "Chemistry",
          "confidence": "verified"
        },
        {
          "id": "university-of-florida-9e7ab214-physics-genuine",
          "name": "Physics",
          "confidence": "verified"
        },
        {
          "id": "university-of-florida-9e7ab214-mathematics-genuine",
          "name": "Mathematics",
          "confidence": "verified"
        },
        {
          "id": "university-of-florida-9e7ab214-statistics-genuine",
          "name": "Statistics",
          "confidence": "verified"
        },
        {
          "id": "university-of-florida-9e7ab214-public-health-genuine",
          "name": "Public Health",
          "confidence": "verified"
        },
        {
          "id": "university-of-florida-9e7ab214-nursing-genuine",
          "name": "Nursing",
          "confidence": "verified"
        },
        {
          "id": "university-of-florida-9e7ab214-international-relations-genuine",
          "name": "International Relations",
          "confidence": "verified"
        },
        {
          "id": "university-of-florida-9e7ab214-philosophy-genuine",
          "name": "Philosophy",
          "confidence": "verified"
        },
        {
          "id": "university-of-florida-environmental-engineering-2f37c4cf",
          "name": "Environmental Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-florida-industrial-systems-engineering-21ed3f96",
          "name": "Industrial & Systems Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-florida-materials-science-engineering-66661c09",
          "name": "Materials Science & Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-florida-nuclear-engineering-25e51167",
          "name": "Nuclear Engineering",
          "confidence": "verified"
        }
      ]
    },
    {
      "id": "carnegie-mellon-university-3ce86f57",
      "name": "Carnegie Mellon University",
      "shortName": "Carnegie Mellon University",
      "majors": [
        {
          "id": "carnegie-mellon-university-computer-science-9d4434a6",
          "name": "Computer Science",
          "confidence": "verified"
        },
        {
          "id": "carnegie-mellon-university-3ce86f57-data-science-genuine",
          "name": "Data Science",
          "confidence": "verified"
        },
        {
          "id": "carnegie-mellon-university-3ce86f57-information-technology-genuine",
          "name": "Information Technology",
          "confidence": "verified"
        },
        {
          "id": "carnegie-mellon-university-3ce86f57-computer-engineering-genuine",
          "name": "Computer Engineering",
          "confidence": "verified"
        },
        {
          "id": "carnegie-mellon-university-3ce86f57-electrical-engineering-genuine",
          "name": "Electrical Engineering",
          "confidence": "verified"
        },
        {
          "id": "carnegie-mellon-university-mechanical-engineering-5c8efe69",
          "name": "Mechanical Engineering",
          "confidence": "verified"
        },
        {
          "id": "carnegie-mellon-university-3ce86f57-civil-engineering-genuine",
          "name": "Civil Engineering",
          "confidence": "verified"
        },
        {
          "id": "carnegie-mellon-university-3ce86f57-chemical-engineering-genuine",
          "name": "Chemical Engineering",
          "confidence": "verified"
        },
        {
          "id": "carnegie-mellon-university-3ce86f57-biomedical-engineering-genuine",
          "name": "Biomedical Engineering",
          "confidence": "verified"
        },
        {
          "id": "carnegie-mellon-university-3ce86f57-industrial-engineering-genuine",
          "name": "Industrial Engineering",
          "confidence": "verified"
        },
        {
          "id": "carnegie-mellon-university-3ce86f57-aerospace-engineering-genuine",
          "name": "Aerospace Engineering",
          "confidence": "verified"
        },
        {
          "id": "carnegie-mellon-university-3ce86f57-business-administration-genuine",
          "name": "Business Administration",
          "confidence": "verified"
        },
        {
          "id": "carnegie-mellon-university-3ce86f57-finance-genuine",
          "name": "Finance",
          "confidence": "verified"
        },
        {
          "id": "carnegie-mellon-university-3ce86f57-accounting-genuine",
          "name": "Accounting",
          "confidence": "verified"
        },
        {
          "id": "carnegie-mellon-university-3ce86f57-marketing-genuine",
          "name": "Marketing",
          "confidence": "verified"
        },
        {
          "id": "carnegie-mellon-university-3ce86f57-management-genuine",
          "name": "Management",
          "confidence": "verified"
        },
        {
          "id": "carnegie-mellon-university-3ce86f57-economics-genuine",
          "name": "Economics",
          "confidence": "verified"
        },
        {
          "id": "carnegie-mellon-university-3ce86f57-psychology-genuine",
          "name": "Psychology",
          "confidence": "verified"
        },
        {
          "id": "carnegie-mellon-university-3ce86f57-political-science-genuine",
          "name": "Political Science",
          "confidence": "verified"
        },
        {
          "id": "carnegie-mellon-university-3ce86f57-sociology-genuine",
          "name": "Sociology",
          "confidence": "verified"
        },
        {
          "id": "carnegie-mellon-university-3ce86f57-history-genuine",
          "name": "History",
          "confidence": "verified"
        },
        {
          "id": "carnegie-mellon-university-3ce86f57-english-genuine",
          "name": "English",
          "confidence": "verified"
        },
        {
          "id": "carnegie-mellon-university-3ce86f57-communications-genuine",
          "name": "Communications",
          "confidence": "verified"
        },
        {
          "id": "carnegie-mellon-university-3ce86f57-biology-genuine",
          "name": "Biology",
          "confidence": "verified"
        },
        {
          "id": "carnegie-mellon-university-3ce86f57-biochemistry-genuine",
          "name": "Biochemistry",
          "confidence": "verified"
        },
        {
          "id": "carnegie-mellon-university-3ce86f57-chemistry-genuine",
          "name": "Chemistry",
          "confidence": "verified"
        },
        {
          "id": "carnegie-mellon-university-3ce86f57-physics-genuine",
          "name": "Physics",
          "confidence": "verified"
        },
        {
          "id": "carnegie-mellon-university-3ce86f57-mathematics-genuine",
          "name": "Mathematics",
          "confidence": "verified"
        },
        {
          "id": "carnegie-mellon-university-3ce86f57-statistics-genuine",
          "name": "Statistics",
          "confidence": "verified"
        },
        {
          "id": "carnegie-mellon-university-3ce86f57-public-health-genuine",
          "name": "Public Health",
          "confidence": "verified"
        },
        {
          "id": "carnegie-mellon-university-3ce86f57-nursing-genuine",
          "name": "Nursing",
          "confidence": "verified"
        },
        {
          "id": "carnegie-mellon-university-3ce86f57-international-relations-genuine",
          "name": "International Relations",
          "confidence": "verified"
        },
        {
          "id": "carnegie-mellon-university-3ce86f57-philosophy-genuine",
          "name": "Philosophy",
          "confidence": "verified"
        },
        {
          "id": "carnegie-mellon-university-electrical-and-computer-engineering-92fd0be5",
          "name": "Electrical and Computer Engineering",
          "confidence": "verified"
        }
      ]
    },
    {
      "id": "johns-hopkins-university-6f689cc1",
      "name": "Johns Hopkins University",
      "shortName": "Johns Hopkins University",
      "majors": [
        {
          "id": "johns-hopkins-university-computer-science-e3cc9a23",
          "name": "Computer Science",
          "confidence": "verified"
        },
        {
          "id": "johns-hopkins-university-6f689cc1-data-science-genuine",
          "name": "Data Science",
          "confidence": "verified"
        },
        {
          "id": "johns-hopkins-university-6f689cc1-information-technology-genuine",
          "name": "Information Technology",
          "confidence": "verified"
        },
        {
          "id": "johns-hopkins-university-6f689cc1-computer-engineering-genuine",
          "name": "Computer Engineering",
          "confidence": "verified"
        },
        {
          "id": "johns-hopkins-university-electrical-engineering-7162b8ec",
          "name": "Electrical Engineering",
          "confidence": "verified"
        },
        {
          "id": "johns-hopkins-university-mechanical-engineering-e4939ed0",
          "name": "Mechanical Engineering",
          "confidence": "verified"
        },
        {
          "id": "johns-hopkins-university-6f689cc1-civil-engineering-genuine",
          "name": "Civil Engineering",
          "confidence": "verified"
        },
        {
          "id": "johns-hopkins-university-6f689cc1-chemical-engineering-genuine",
          "name": "Chemical Engineering",
          "confidence": "verified"
        },
        {
          "id": "johns-hopkins-university-6f689cc1-biomedical-engineering-genuine",
          "name": "Biomedical Engineering",
          "confidence": "verified"
        },
        {
          "id": "johns-hopkins-university-6f689cc1-industrial-engineering-genuine",
          "name": "Industrial Engineering",
          "confidence": "verified"
        },
        {
          "id": "johns-hopkins-university-6f689cc1-aerospace-engineering-genuine",
          "name": "Aerospace Engineering",
          "confidence": "verified"
        },
        {
          "id": "johns-hopkins-university-6f689cc1-business-administration-genuine",
          "name": "Business Administration",
          "confidence": "verified"
        },
        {
          "id": "johns-hopkins-university-6f689cc1-finance-genuine",
          "name": "Finance",
          "confidence": "verified"
        },
        {
          "id": "johns-hopkins-university-6f689cc1-accounting-genuine",
          "name": "Accounting",
          "confidence": "verified"
        },
        {
          "id": "johns-hopkins-university-6f689cc1-marketing-genuine",
          "name": "Marketing",
          "confidence": "verified"
        },
        {
          "id": "johns-hopkins-university-6f689cc1-management-genuine",
          "name": "Management",
          "confidence": "verified"
        },
        {
          "id": "johns-hopkins-university-6f689cc1-economics-genuine",
          "name": "Economics",
          "confidence": "verified"
        },
        {
          "id": "johns-hopkins-university-6f689cc1-psychology-genuine",
          "name": "Psychology",
          "confidence": "verified"
        },
        {
          "id": "johns-hopkins-university-6f689cc1-political-science-genuine",
          "name": "Political Science",
          "confidence": "verified"
        },
        {
          "id": "johns-hopkins-university-6f689cc1-sociology-genuine",
          "name": "Sociology",
          "confidence": "verified"
        },
        {
          "id": "johns-hopkins-university-6f689cc1-history-genuine",
          "name": "History",
          "confidence": "verified"
        },
        {
          "id": "johns-hopkins-university-6f689cc1-english-genuine",
          "name": "English",
          "confidence": "verified"
        },
        {
          "id": "johns-hopkins-university-6f689cc1-communications-genuine",
          "name": "Communications",
          "confidence": "verified"
        },
        {
          "id": "johns-hopkins-university-6f689cc1-biology-genuine",
          "name": "Biology",
          "confidence": "verified"
        },
        {
          "id": "johns-hopkins-university-6f689cc1-biochemistry-genuine",
          "name": "Biochemistry",
          "confidence": "verified"
        },
        {
          "id": "johns-hopkins-university-6f689cc1-chemistry-genuine",
          "name": "Chemistry",
          "confidence": "verified"
        },
        {
          "id": "johns-hopkins-university-6f689cc1-physics-genuine",
          "name": "Physics",
          "confidence": "verified"
        },
        {
          "id": "johns-hopkins-university-6f689cc1-mathematics-genuine",
          "name": "Mathematics",
          "confidence": "verified"
        },
        {
          "id": "johns-hopkins-university-6f689cc1-statistics-genuine",
          "name": "Statistics",
          "confidence": "verified"
        },
        {
          "id": "johns-hopkins-university-6f689cc1-public-health-genuine",
          "name": "Public Health",
          "confidence": "verified"
        },
        {
          "id": "johns-hopkins-university-6f689cc1-nursing-genuine",
          "name": "Nursing",
          "confidence": "verified"
        },
        {
          "id": "johns-hopkins-university-6f689cc1-international-relations-genuine",
          "name": "International Relations",
          "confidence": "verified"
        },
        {
          "id": "johns-hopkins-university-6f689cc1-philosophy-genuine",
          "name": "Philosophy",
          "confidence": "verified"
        }
      ]
    },
    {
      "id": "california-institute-of-technology-80ddec2a",
      "name": "California Institute of Technology",
      "shortName": "California Institute of Technology",
      "majors": [
        {
          "id": "california-institute-of-technology-computer-science-a25020a7",
          "name": "Computer Science",
          "confidence": "verified"
        },
        {
          "id": "california-institute-of-technology-80ddec2a-computer-engineering-genuine",
          "name": "Computer Engineering",
          "confidence": "verified"
        },
        {
          "id": "california-institute-of-technology-80ddec2a-data-science-genuine",
          "name": "Data Science",
          "confidence": "verified"
        },
        {
          "id": "california-institute-of-technology-electrical-engineering-8c6cff7d",
          "name": "Electrical Engineering",
          "confidence": "verified"
        },
        {
          "id": "california-institute-of-technology-mechanical-engineering-90cded64",
          "name": "Mechanical Engineering",
          "confidence": "verified"
        },
        {
          "id": "california-institute-of-technology-80ddec2a-chemical-engineering-genuine",
          "name": "Chemical Engineering",
          "confidence": "verified"
        },
        {
          "id": "california-institute-of-technology-80ddec2a-civil-engineering-genuine",
          "name": "Civil Engineering",
          "confidence": "verified"
        },
        {
          "id": "california-institute-of-technology-80ddec2a-biomedical-engineering-genuine",
          "name": "Biomedical Engineering",
          "confidence": "verified"
        },
        {
          "id": "california-institute-of-technology-80ddec2a-aerospace-engineering-genuine",
          "name": "Aerospace Engineering",
          "confidence": "verified"
        },
        {
          "id": "california-institute-of-technology-80ddec2a-industrial-engineering-genuine",
          "name": "Industrial Engineering",
          "confidence": "verified"
        },
        {
          "id": "california-institute-of-technology-80ddec2a-materials-science-engineering-genuine",
          "name": "Materials Science & Engineering",
          "confidence": "verified"
        },
        {
          "id": "california-institute-of-technology-80ddec2a-environmental-engineering-genuine",
          "name": "Environmental Engineering",
          "confidence": "verified"
        },
        {
          "id": "california-institute-of-technology-80ddec2a-applied-mathematics-genuine",
          "name": "Applied Mathematics",
          "confidence": "verified"
        },
        {
          "id": "california-institute-of-technology-80ddec2a-physics-genuine",
          "name": "Physics",
          "confidence": "verified"
        },
        {
          "id": "california-institute-of-technology-80ddec2a-chemistry-genuine",
          "name": "Chemistry",
          "confidence": "verified"
        },
        {
          "id": "california-institute-of-technology-80ddec2a-business-administration-genuine",
          "name": "Business Administration",
          "confidence": "verified"
        },
        {
          "id": "california-institute-of-technology-80ddec2a-economics-genuine",
          "name": "Economics",
          "confidence": "verified"
        },
        {
          "id": "california-institute-of-technology-80ddec2a-technical-communication-genuine",
          "name": "Technical Communication",
          "confidence": "verified"
        }
      ]
    },
    {
      "id": "duke-university-296f426b",
      "name": "Duke University",
      "shortName": "Duke University",
      "majors": [
        {
          "id": "duke-university-computer-science-1d8a9571",
          "name": "Computer Science",
          "confidence": "verified"
        },
        {
          "id": "duke-university-296f426b-data-science-genuine",
          "name": "Data Science",
          "confidence": "verified"
        },
        {
          "id": "duke-university-296f426b-information-technology-genuine",
          "name": "Information Technology",
          "confidence": "verified"
        },
        {
          "id": "duke-university-296f426b-computer-engineering-genuine",
          "name": "Computer Engineering",
          "confidence": "verified"
        },
        {
          "id": "duke-university-296f426b-electrical-engineering-genuine",
          "name": "Electrical Engineering",
          "confidence": "verified"
        },
        {
          "id": "duke-university-mechanical-engineering-43ef60ee",
          "name": "Mechanical Engineering",
          "confidence": "verified"
        },
        {
          "id": "duke-university-296f426b-civil-engineering-genuine",
          "name": "Civil Engineering",
          "confidence": "verified"
        },
        {
          "id": "duke-university-296f426b-chemical-engineering-genuine",
          "name": "Chemical Engineering",
          "confidence": "verified"
        },
        {
          "id": "duke-university-296f426b-biomedical-engineering-genuine",
          "name": "Biomedical Engineering",
          "confidence": "verified"
        },
        {
          "id": "duke-university-296f426b-industrial-engineering-genuine",
          "name": "Industrial Engineering",
          "confidence": "verified"
        },
        {
          "id": "duke-university-296f426b-aerospace-engineering-genuine",
          "name": "Aerospace Engineering",
          "confidence": "verified"
        },
        {
          "id": "duke-university-296f426b-business-administration-genuine",
          "name": "Business Administration",
          "confidence": "verified"
        },
        {
          "id": "duke-university-296f426b-finance-genuine",
          "name": "Finance",
          "confidence": "verified"
        },
        {
          "id": "duke-university-296f426b-accounting-genuine",
          "name": "Accounting",
          "confidence": "verified"
        },
        {
          "id": "duke-university-296f426b-marketing-genuine",
          "name": "Marketing",
          "confidence": "verified"
        },
        {
          "id": "duke-university-296f426b-management-genuine",
          "name": "Management",
          "confidence": "verified"
        },
        {
          "id": "duke-university-296f426b-economics-genuine",
          "name": "Economics",
          "confidence": "verified"
        },
        {
          "id": "duke-university-296f426b-psychology-genuine",
          "name": "Psychology",
          "confidence": "verified"
        },
        {
          "id": "duke-university-296f426b-political-science-genuine",
          "name": "Political Science",
          "confidence": "verified"
        },
        {
          "id": "duke-university-296f426b-sociology-genuine",
          "name": "Sociology",
          "confidence": "verified"
        },
        {
          "id": "duke-university-296f426b-history-genuine",
          "name": "History",
          "confidence": "verified"
        },
        {
          "id": "duke-university-296f426b-english-genuine",
          "name": "English",
          "confidence": "verified"
        },
        {
          "id": "duke-university-296f426b-communications-genuine",
          "name": "Communications",
          "confidence": "verified"
        },
        {
          "id": "duke-university-296f426b-biology-genuine",
          "name": "Biology",
          "confidence": "verified"
        },
        {
          "id": "duke-university-296f426b-biochemistry-genuine",
          "name": "Biochemistry",
          "confidence": "verified"
        },
        {
          "id": "duke-university-296f426b-chemistry-genuine",
          "name": "Chemistry",
          "confidence": "verified"
        },
        {
          "id": "duke-university-296f426b-physics-genuine",
          "name": "Physics",
          "confidence": "verified"
        },
        {
          "id": "duke-university-296f426b-mathematics-genuine",
          "name": "Mathematics",
          "confidence": "verified"
        },
        {
          "id": "duke-university-296f426b-statistics-genuine",
          "name": "Statistics",
          "confidence": "verified"
        },
        {
          "id": "duke-university-296f426b-public-health-genuine",
          "name": "Public Health",
          "confidence": "verified"
        },
        {
          "id": "duke-university-296f426b-nursing-genuine",
          "name": "Nursing",
          "confidence": "verified"
        },
        {
          "id": "duke-university-296f426b-international-relations-genuine",
          "name": "International Relations",
          "confidence": "verified"
        },
        {
          "id": "duke-university-296f426b-philosophy-genuine",
          "name": "Philosophy",
          "confidence": "verified"
        },
        {
          "id": "duke-university-electrical-and-computer-engineering-1ac68e89",
          "name": "Electrical and Computer Engineering",
          "confidence": "verified"
        }
      ]
    },
    {
      "id": "rice-university-b1fd17d1",
      "name": "Rice University",
      "shortName": "Rice University",
      "majors": [
        {
          "id": "rice-university-computer-science-0422955e",
          "name": "Computer Science",
          "confidence": "verified"
        },
        {
          "id": "rice-university-b1fd17d1-data-science-genuine",
          "name": "Data Science",
          "confidence": "verified"
        },
        {
          "id": "rice-university-b1fd17d1-information-technology-genuine",
          "name": "Information Technology",
          "confidence": "verified"
        },
        {
          "id": "rice-university-b1fd17d1-computer-engineering-genuine",
          "name": "Computer Engineering",
          "confidence": "verified"
        },
        {
          "id": "rice-university-electrical-engineering-7805b795",
          "name": "Electrical Engineering",
          "confidence": "verified"
        },
        {
          "id": "rice-university-mechanical-engineering-b6859e06",
          "name": "Mechanical Engineering",
          "confidence": "verified"
        },
        {
          "id": "rice-university-b1fd17d1-civil-engineering-genuine",
          "name": "Civil Engineering",
          "confidence": "verified"
        },
        {
          "id": "rice-university-b1fd17d1-chemical-engineering-genuine",
          "name": "Chemical Engineering",
          "confidence": "verified"
        },
        {
          "id": "rice-university-b1fd17d1-biomedical-engineering-genuine",
          "name": "Biomedical Engineering",
          "confidence": "verified"
        },
        {
          "id": "rice-university-b1fd17d1-industrial-engineering-genuine",
          "name": "Industrial Engineering",
          "confidence": "verified"
        },
        {
          "id": "rice-university-b1fd17d1-aerospace-engineering-genuine",
          "name": "Aerospace Engineering",
          "confidence": "verified"
        },
        {
          "id": "rice-university-b1fd17d1-business-administration-genuine",
          "name": "Business Administration",
          "confidence": "verified"
        },
        {
          "id": "rice-university-b1fd17d1-finance-genuine",
          "name": "Finance",
          "confidence": "verified"
        },
        {
          "id": "rice-university-b1fd17d1-accounting-genuine",
          "name": "Accounting",
          "confidence": "verified"
        },
        {
          "id": "rice-university-b1fd17d1-marketing-genuine",
          "name": "Marketing",
          "confidence": "verified"
        },
        {
          "id": "rice-university-b1fd17d1-management-genuine",
          "name": "Management",
          "confidence": "verified"
        },
        {
          "id": "rice-university-b1fd17d1-economics-genuine",
          "name": "Economics",
          "confidence": "verified"
        },
        {
          "id": "rice-university-b1fd17d1-psychology-genuine",
          "name": "Psychology",
          "confidence": "verified"
        },
        {
          "id": "rice-university-b1fd17d1-political-science-genuine",
          "name": "Political Science",
          "confidence": "verified"
        },
        {
          "id": "rice-university-b1fd17d1-sociology-genuine",
          "name": "Sociology",
          "confidence": "verified"
        },
        {
          "id": "rice-university-b1fd17d1-history-genuine",
          "name": "History",
          "confidence": "verified"
        },
        {
          "id": "rice-university-b1fd17d1-english-genuine",
          "name": "English",
          "confidence": "verified"
        },
        {
          "id": "rice-university-b1fd17d1-communications-genuine",
          "name": "Communications",
          "confidence": "verified"
        },
        {
          "id": "rice-university-b1fd17d1-biology-genuine",
          "name": "Biology",
          "confidence": "verified"
        },
        {
          "id": "rice-university-b1fd17d1-biochemistry-genuine",
          "name": "Biochemistry",
          "confidence": "verified"
        },
        {
          "id": "rice-university-b1fd17d1-chemistry-genuine",
          "name": "Chemistry",
          "confidence": "verified"
        },
        {
          "id": "rice-university-b1fd17d1-physics-genuine",
          "name": "Physics",
          "confidence": "verified"
        },
        {
          "id": "rice-university-b1fd17d1-mathematics-genuine",
          "name": "Mathematics",
          "confidence": "verified"
        },
        {
          "id": "rice-university-b1fd17d1-statistics-genuine",
          "name": "Statistics",
          "confidence": "verified"
        },
        {
          "id": "rice-university-b1fd17d1-public-health-genuine",
          "name": "Public Health",
          "confidence": "verified"
        },
        {
          "id": "rice-university-b1fd17d1-nursing-genuine",
          "name": "Nursing",
          "confidence": "verified"
        },
        {
          "id": "rice-university-b1fd17d1-international-relations-genuine",
          "name": "International Relations",
          "confidence": "verified"
        },
        {
          "id": "rice-university-b1fd17d1-philosophy-genuine",
          "name": "Philosophy",
          "confidence": "verified"
        }
      ]
    },
    {
      "id": "stevens-institute-of-technology-81d6689e",
      "name": "Stevens Institute of Technology",
      "shortName": "Stevens Institute of Technology",
      "majors": [
        {
          "id": "stevens-institute-of-technology-computer-science-28f85da2",
          "name": "Computer Science",
          "confidence": "verified"
        },
        {
          "id": "stevens-institute-of-technology-81d6689e-computer-engineering-genuine",
          "name": "Computer Engineering",
          "confidence": "verified"
        },
        {
          "id": "stevens-institute-of-technology-81d6689e-data-science-genuine",
          "name": "Data Science",
          "confidence": "verified"
        },
        {
          "id": "stevens-institute-of-technology-electrical-engineering-4de89bc3",
          "name": "Electrical Engineering",
          "confidence": "verified"
        },
        {
          "id": "stevens-institute-of-technology-mechanical-engineering-84efda5b",
          "name": "Mechanical Engineering",
          "confidence": "verified"
        },
        {
          "id": "stevens-institute-of-technology-81d6689e-chemical-engineering-genuine",
          "name": "Chemical Engineering",
          "confidence": "verified"
        },
        {
          "id": "stevens-institute-of-technology-81d6689e-civil-engineering-genuine",
          "name": "Civil Engineering",
          "confidence": "verified"
        },
        {
          "id": "stevens-institute-of-technology-81d6689e-biomedical-engineering-genuine",
          "name": "Biomedical Engineering",
          "confidence": "verified"
        },
        {
          "id": "stevens-institute-of-technology-81d6689e-aerospace-engineering-genuine",
          "name": "Aerospace Engineering",
          "confidence": "verified"
        },
        {
          "id": "stevens-institute-of-technology-81d6689e-industrial-engineering-genuine",
          "name": "Industrial Engineering",
          "confidence": "verified"
        },
        {
          "id": "stevens-institute-of-technology-81d6689e-materials-science-engineering-genuine",
          "name": "Materials Science & Engineering",
          "confidence": "verified"
        },
        {
          "id": "stevens-institute-of-technology-81d6689e-environmental-engineering-genuine",
          "name": "Environmental Engineering",
          "confidence": "verified"
        },
        {
          "id": "stevens-institute-of-technology-81d6689e-applied-mathematics-genuine",
          "name": "Applied Mathematics",
          "confidence": "verified"
        },
        {
          "id": "stevens-institute-of-technology-81d6689e-physics-genuine",
          "name": "Physics",
          "confidence": "verified"
        },
        {
          "id": "stevens-institute-of-technology-81d6689e-chemistry-genuine",
          "name": "Chemistry",
          "confidence": "verified"
        },
        {
          "id": "stevens-institute-of-technology-81d6689e-business-administration-genuine",
          "name": "Business Administration",
          "confidence": "verified"
        },
        {
          "id": "stevens-institute-of-technology-81d6689e-economics-genuine",
          "name": "Economics",
          "confidence": "verified"
        },
        {
          "id": "stevens-institute-of-technology-81d6689e-technical-communication-genuine",
          "name": "Technical Communication",
          "confidence": "verified"
        }
      ]
    },
    {
      "id": "worcester-polytechnic-institute-169dc5bf",
      "name": "Worcester Polytechnic Institute",
      "shortName": "Worcester Polytechnic Institute",
      "majors": [
        {
          "id": "worcester-polytechnic-institute-computer-science-c8789126",
          "name": "Computer Science",
          "confidence": "verified"
        },
        {
          "id": "worcester-polytechnic-institute-169dc5bf-computer-engineering-genuine",
          "name": "Computer Engineering",
          "confidence": "verified"
        },
        {
          "id": "worcester-polytechnic-institute-169dc5bf-data-science-genuine",
          "name": "Data Science",
          "confidence": "verified"
        },
        {
          "id": "worcester-polytechnic-institute-electrical-engineering-e7c74e26",
          "name": "Electrical Engineering",
          "confidence": "verified"
        },
        {
          "id": "worcester-polytechnic-institute-mechanical-engineering-3cdc9dc4",
          "name": "Mechanical Engineering",
          "confidence": "verified"
        },
        {
          "id": "worcester-polytechnic-institute-169dc5bf-chemical-engineering-genuine",
          "name": "Chemical Engineering",
          "confidence": "verified"
        },
        {
          "id": "worcester-polytechnic-institute-169dc5bf-civil-engineering-genuine",
          "name": "Civil Engineering",
          "confidence": "verified"
        },
        {
          "id": "worcester-polytechnic-institute-169dc5bf-biomedical-engineering-genuine",
          "name": "Biomedical Engineering",
          "confidence": "verified"
        },
        {
          "id": "worcester-polytechnic-institute-169dc5bf-aerospace-engineering-genuine",
          "name": "Aerospace Engineering",
          "confidence": "verified"
        },
        {
          "id": "worcester-polytechnic-institute-169dc5bf-industrial-engineering-genuine",
          "name": "Industrial Engineering",
          "confidence": "verified"
        },
        {
          "id": "worcester-polytechnic-institute-169dc5bf-materials-science-engineering-genuine",
          "name": "Materials Science & Engineering",
          "confidence": "verified"
        },
        {
          "id": "worcester-polytechnic-institute-169dc5bf-environmental-engineering-genuine",
          "name": "Environmental Engineering",
          "confidence": "verified"
        },
        {
          "id": "worcester-polytechnic-institute-169dc5bf-applied-mathematics-genuine",
          "name": "Applied Mathematics",
          "confidence": "verified"
        },
        {
          "id": "worcester-polytechnic-institute-169dc5bf-physics-genuine",
          "name": "Physics",
          "confidence": "verified"
        },
        {
          "id": "worcester-polytechnic-institute-169dc5bf-chemistry-genuine",
          "name": "Chemistry",
          "confidence": "verified"
        },
        {
          "id": "worcester-polytechnic-institute-169dc5bf-business-administration-genuine",
          "name": "Business Administration",
          "confidence": "verified"
        },
        {
          "id": "worcester-polytechnic-institute-169dc5bf-economics-genuine",
          "name": "Economics",
          "confidence": "verified"
        },
        {
          "id": "worcester-polytechnic-institute-169dc5bf-technical-communication-genuine",
          "name": "Technical Communication",
          "confidence": "verified"
        }
      ]
    },
    {
      "id": "rensselaer-polytechnic-institute-837c9cb0",
      "name": "Rensselaer Polytechnic Institute",
      "shortName": "Rensselaer Polytechnic Institute",
      "majors": [
        {
          "id": "rensselaer-polytechnic-institute-computer-science-8133d3cb",
          "name": "Computer Science",
          "confidence": "verified"
        },
        {
          "id": "rensselaer-polytechnic-institute-837c9cb0-computer-engineering-genuine",
          "name": "Computer Engineering",
          "confidence": "verified"
        },
        {
          "id": "rensselaer-polytechnic-institute-837c9cb0-data-science-genuine",
          "name": "Data Science",
          "confidence": "verified"
        },
        {
          "id": "rensselaer-polytechnic-institute-electrical-engineering-2c580f90",
          "name": "Electrical Engineering",
          "confidence": "verified"
        },
        {
          "id": "rensselaer-polytechnic-institute-mechanical-engineering-6568face",
          "name": "Mechanical Engineering",
          "confidence": "verified"
        },
        {
          "id": "rensselaer-polytechnic-institute-837c9cb0-chemical-engineering-genuine",
          "name": "Chemical Engineering",
          "confidence": "verified"
        },
        {
          "id": "rensselaer-polytechnic-institute-837c9cb0-civil-engineering-genuine",
          "name": "Civil Engineering",
          "confidence": "verified"
        },
        {
          "id": "rensselaer-polytechnic-institute-837c9cb0-biomedical-engineering-genuine",
          "name": "Biomedical Engineering",
          "confidence": "verified"
        },
        {
          "id": "rensselaer-polytechnic-institute-837c9cb0-aerospace-engineering-genuine",
          "name": "Aerospace Engineering",
          "confidence": "verified"
        },
        {
          "id": "rensselaer-polytechnic-institute-837c9cb0-industrial-engineering-genuine",
          "name": "Industrial Engineering",
          "confidence": "verified"
        },
        {
          "id": "rensselaer-polytechnic-institute-837c9cb0-materials-science-engineering-genuine",
          "name": "Materials Science & Engineering",
          "confidence": "verified"
        },
        {
          "id": "rensselaer-polytechnic-institute-837c9cb0-environmental-engineering-genuine",
          "name": "Environmental Engineering",
          "confidence": "verified"
        },
        {
          "id": "rensselaer-polytechnic-institute-837c9cb0-applied-mathematics-genuine",
          "name": "Applied Mathematics",
          "confidence": "verified"
        },
        {
          "id": "rensselaer-polytechnic-institute-837c9cb0-physics-genuine",
          "name": "Physics",
          "confidence": "verified"
        },
        {
          "id": "rensselaer-polytechnic-institute-837c9cb0-chemistry-genuine",
          "name": "Chemistry",
          "confidence": "verified"
        },
        {
          "id": "rensselaer-polytechnic-institute-837c9cb0-business-administration-genuine",
          "name": "Business Administration",
          "confidence": "verified"
        },
        {
          "id": "rensselaer-polytechnic-institute-837c9cb0-economics-genuine",
          "name": "Economics",
          "confidence": "verified"
        },
        {
          "id": "rensselaer-polytechnic-institute-837c9cb0-technical-communication-genuine",
          "name": "Technical Communication",
          "confidence": "verified"
        }
      ]
    },
    {
      "id": "michigan-state-university-f9a5c361",
      "name": "Michigan State University",
      "shortName": "Michigan State University",
      "majors": [
        {
          "id": "michigan-state-university-computer-science-cf215435",
          "name": "Computer Science",
          "confidence": "verified"
        },
        {
          "id": "michigan-state-university-f9a5c361-data-science-genuine",
          "name": "Data Science",
          "confidence": "verified"
        },
        {
          "id": "michigan-state-university-f9a5c361-information-technology-genuine",
          "name": "Information Technology",
          "confidence": "verified"
        },
        {
          "id": "michigan-state-university-f9a5c361-computer-engineering-genuine",
          "name": "Computer Engineering",
          "confidence": "verified"
        },
        {
          "id": "michigan-state-university-electrical-engineering-7d866844",
          "name": "Electrical Engineering",
          "confidence": "verified"
        },
        {
          "id": "michigan-state-university-mechanical-engineering-90f80f4c",
          "name": "Mechanical Engineering",
          "confidence": "verified"
        },
        {
          "id": "michigan-state-university-f9a5c361-civil-engineering-genuine",
          "name": "Civil Engineering",
          "confidence": "verified"
        },
        {
          "id": "michigan-state-university-f9a5c361-chemical-engineering-genuine",
          "name": "Chemical Engineering",
          "confidence": "verified"
        },
        {
          "id": "michigan-state-university-f9a5c361-biomedical-engineering-genuine",
          "name": "Biomedical Engineering",
          "confidence": "verified"
        },
        {
          "id": "michigan-state-university-f9a5c361-industrial-engineering-genuine",
          "name": "Industrial Engineering",
          "confidence": "verified"
        },
        {
          "id": "michigan-state-university-f9a5c361-aerospace-engineering-genuine",
          "name": "Aerospace Engineering",
          "confidence": "verified"
        },
        {
          "id": "michigan-state-university-f9a5c361-business-administration-genuine",
          "name": "Business Administration",
          "confidence": "verified"
        },
        {
          "id": "michigan-state-university-f9a5c361-finance-genuine",
          "name": "Finance",
          "confidence": "verified"
        },
        {
          "id": "michigan-state-university-f9a5c361-accounting-genuine",
          "name": "Accounting",
          "confidence": "verified"
        },
        {
          "id": "michigan-state-university-f9a5c361-marketing-genuine",
          "name": "Marketing",
          "confidence": "verified"
        },
        {
          "id": "michigan-state-university-f9a5c361-management-genuine",
          "name": "Management",
          "confidence": "verified"
        },
        {
          "id": "michigan-state-university-f9a5c361-economics-genuine",
          "name": "Economics",
          "confidence": "verified"
        },
        {
          "id": "michigan-state-university-f9a5c361-psychology-genuine",
          "name": "Psychology",
          "confidence": "verified"
        },
        {
          "id": "michigan-state-university-f9a5c361-political-science-genuine",
          "name": "Political Science",
          "confidence": "verified"
        },
        {
          "id": "michigan-state-university-f9a5c361-sociology-genuine",
          "name": "Sociology",
          "confidence": "verified"
        },
        {
          "id": "michigan-state-university-f9a5c361-history-genuine",
          "name": "History",
          "confidence": "verified"
        },
        {
          "id": "michigan-state-university-f9a5c361-english-genuine",
          "name": "English",
          "confidence": "verified"
        },
        {
          "id": "michigan-state-university-f9a5c361-communications-genuine",
          "name": "Communications",
          "confidence": "verified"
        },
        {
          "id": "michigan-state-university-f9a5c361-biology-genuine",
          "name": "Biology",
          "confidence": "verified"
        },
        {
          "id": "michigan-state-university-f9a5c361-biochemistry-genuine",
          "name": "Biochemistry",
          "confidence": "verified"
        },
        {
          "id": "michigan-state-university-f9a5c361-chemistry-genuine",
          "name": "Chemistry",
          "confidence": "verified"
        },
        {
          "id": "michigan-state-university-f9a5c361-physics-genuine",
          "name": "Physics",
          "confidence": "verified"
        },
        {
          "id": "michigan-state-university-f9a5c361-mathematics-genuine",
          "name": "Mathematics",
          "confidence": "verified"
        },
        {
          "id": "michigan-state-university-f9a5c361-statistics-genuine",
          "name": "Statistics",
          "confidence": "verified"
        },
        {
          "id": "michigan-state-university-f9a5c361-public-health-genuine",
          "name": "Public Health",
          "confidence": "verified"
        },
        {
          "id": "michigan-state-university-f9a5c361-nursing-genuine",
          "name": "Nursing",
          "confidence": "verified"
        },
        {
          "id": "michigan-state-university-f9a5c361-international-relations-genuine",
          "name": "International Relations",
          "confidence": "verified"
        },
        {
          "id": "michigan-state-university-f9a5c361-philosophy-genuine",
          "name": "Philosophy",
          "confidence": "verified"
        }
      ]
    },
    {
      "id": "boston-college-76a3e937",
      "name": "Boston College",
      "shortName": "Boston College",
      "majors": [
        {
          "id": "boston-college-76a3e937-computer-science-genuine",
          "name": "Computer Science",
          "confidence": "verified"
        },
        {
          "id": "boston-college-76a3e937-data-science-genuine",
          "name": "Data Science",
          "confidence": "verified"
        },
        {
          "id": "boston-college-76a3e937-information-technology-genuine",
          "name": "Information Technology",
          "confidence": "verified"
        },
        {
          "id": "boston-college-76a3e937-computer-engineering-genuine",
          "name": "Computer Engineering",
          "confidence": "verified"
        },
        {
          "id": "boston-college-76a3e937-electrical-engineering-genuine",
          "name": "Electrical Engineering",
          "confidence": "verified"
        },
        {
          "id": "boston-college-76a3e937-mechanical-engineering-genuine",
          "name": "Mechanical Engineering",
          "confidence": "verified"
        },
        {
          "id": "boston-college-76a3e937-civil-engineering-genuine",
          "name": "Civil Engineering",
          "confidence": "verified"
        },
        {
          "id": "boston-college-76a3e937-chemical-engineering-genuine",
          "name": "Chemical Engineering",
          "confidence": "verified"
        },
        {
          "id": "boston-college-76a3e937-biomedical-engineering-genuine",
          "name": "Biomedical Engineering",
          "confidence": "verified"
        },
        {
          "id": "boston-college-76a3e937-industrial-engineering-genuine",
          "name": "Industrial Engineering",
          "confidence": "verified"
        },
        {
          "id": "boston-college-76a3e937-aerospace-engineering-genuine",
          "name": "Aerospace Engineering",
          "confidence": "verified"
        },
        {
          "id": "boston-college-76a3e937-business-administration-genuine",
          "name": "Business Administration",
          "confidence": "verified"
        },
        {
          "id": "boston-college-76a3e937-finance-genuine",
          "name": "Finance",
          "confidence": "verified"
        },
        {
          "id": "boston-college-76a3e937-accounting-genuine",
          "name": "Accounting",
          "confidence": "verified"
        },
        {
          "id": "boston-college-76a3e937-marketing-genuine",
          "name": "Marketing",
          "confidence": "verified"
        },
        {
          "id": "boston-college-76a3e937-management-genuine",
          "name": "Management",
          "confidence": "verified"
        },
        {
          "id": "boston-college-76a3e937-economics-genuine",
          "name": "Economics",
          "confidence": "verified"
        },
        {
          "id": "boston-college-76a3e937-psychology-genuine",
          "name": "Psychology",
          "confidence": "verified"
        },
        {
          "id": "boston-college-76a3e937-political-science-genuine",
          "name": "Political Science",
          "confidence": "verified"
        },
        {
          "id": "boston-college-76a3e937-sociology-genuine",
          "name": "Sociology",
          "confidence": "verified"
        },
        {
          "id": "boston-college-76a3e937-history-genuine",
          "name": "History",
          "confidence": "verified"
        },
        {
          "id": "boston-college-76a3e937-english-genuine",
          "name": "English",
          "confidence": "verified"
        },
        {
          "id": "boston-college-76a3e937-communications-genuine",
          "name": "Communications",
          "confidence": "verified"
        },
        {
          "id": "boston-college-76a3e937-biology-genuine",
          "name": "Biology",
          "confidence": "verified"
        },
        {
          "id": "boston-college-76a3e937-biochemistry-genuine",
          "name": "Biochemistry",
          "confidence": "verified"
        },
        {
          "id": "boston-college-76a3e937-chemistry-genuine",
          "name": "Chemistry",
          "confidence": "verified"
        },
        {
          "id": "boston-college-76a3e937-physics-genuine",
          "name": "Physics",
          "confidence": "verified"
        },
        {
          "id": "boston-college-76a3e937-mathematics-genuine",
          "name": "Mathematics",
          "confidence": "verified"
        },
        {
          "id": "boston-college-76a3e937-statistics-genuine",
          "name": "Statistics",
          "confidence": "verified"
        },
        {
          "id": "boston-college-76a3e937-public-health-genuine",
          "name": "Public Health",
          "confidence": "verified"
        },
        {
          "id": "boston-college-76a3e937-nursing-genuine",
          "name": "Nursing",
          "confidence": "verified"
        },
        {
          "id": "boston-college-76a3e937-international-relations-genuine",
          "name": "International Relations",
          "confidence": "verified"
        },
        {
          "id": "boston-college-76a3e937-philosophy-genuine",
          "name": "Philosophy",
          "confidence": "verified"
        },
        {
          "id": "boston-college-human-centered-engineering-93yco81r",
          "name": "Human-Centered Engineering",
          "confidence": "verified"
        }
      ]
    },
    {
      "id": "university-of-rochester-87b71d5f",
      "name": "University of Rochester",
      "shortName": "University of Rochester",
      "majors": [
        {
          "id": "university-of-rochester-computer-science-ol3xjj3f",
          "name": "Computer Science",
          "confidence": "verified"
        },
        {
          "id": "university-of-rochester-87b71d5f-data-science-genuine",
          "name": "Data Science",
          "confidence": "verified"
        },
        {
          "id": "university-of-rochester-87b71d5f-information-technology-genuine",
          "name": "Information Technology",
          "confidence": "verified"
        },
        {
          "id": "university-of-rochester-87b71d5f-computer-engineering-genuine",
          "name": "Computer Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-rochester-87b71d5f-electrical-engineering-genuine",
          "name": "Electrical Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-rochester-mechanical-engineering-bepbsdwc",
          "name": "Mechanical Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-rochester-87b71d5f-civil-engineering-genuine",
          "name": "Civil Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-rochester-chemical-engineering-l3k2zjza",
          "name": "Chemical Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-rochester-biomedical-engineering-zkpdz64q",
          "name": "Biomedical Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-rochester-87b71d5f-industrial-engineering-genuine",
          "name": "Industrial Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-rochester-aerospace-engineering-nij97jcd",
          "name": "Aerospace Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-rochester-87b71d5f-business-administration-genuine",
          "name": "Business Administration",
          "confidence": "verified"
        },
        {
          "id": "university-of-rochester-87b71d5f-finance-genuine",
          "name": "Finance",
          "confidence": "verified"
        },
        {
          "id": "university-of-rochester-87b71d5f-accounting-genuine",
          "name": "Accounting",
          "confidence": "verified"
        },
        {
          "id": "university-of-rochester-87b71d5f-marketing-genuine",
          "name": "Marketing",
          "confidence": "verified"
        },
        {
          "id": "university-of-rochester-87b71d5f-management-genuine",
          "name": "Management",
          "confidence": "verified"
        },
        {
          "id": "university-of-rochester-87b71d5f-economics-genuine",
          "name": "Economics",
          "confidence": "verified"
        },
        {
          "id": "university-of-rochester-87b71d5f-psychology-genuine",
          "name": "Psychology",
          "confidence": "verified"
        },
        {
          "id": "university-of-rochester-87b71d5f-political-science-genuine",
          "name": "Political Science",
          "confidence": "verified"
        },
        {
          "id": "university-of-rochester-87b71d5f-sociology-genuine",
          "name": "Sociology",
          "confidence": "verified"
        },
        {
          "id": "university-of-rochester-87b71d5f-history-genuine",
          "name": "History",
          "confidence": "verified"
        },
        {
          "id": "university-of-rochester-87b71d5f-english-genuine",
          "name": "English",
          "confidence": "verified"
        },
        {
          "id": "university-of-rochester-87b71d5f-communications-genuine",
          "name": "Communications",
          "confidence": "verified"
        },
        {
          "id": "university-of-rochester-87b71d5f-biology-genuine",
          "name": "Biology",
          "confidence": "verified"
        },
        {
          "id": "university-of-rochester-87b71d5f-biochemistry-genuine",
          "name": "Biochemistry",
          "confidence": "verified"
        },
        {
          "id": "university-of-rochester-87b71d5f-chemistry-genuine",
          "name": "Chemistry",
          "confidence": "verified"
        },
        {
          "id": "university-of-rochester-87b71d5f-physics-genuine",
          "name": "Physics",
          "confidence": "verified"
        },
        {
          "id": "university-of-rochester-87b71d5f-mathematics-genuine",
          "name": "Mathematics",
          "confidence": "verified"
        },
        {
          "id": "university-of-rochester-87b71d5f-statistics-genuine",
          "name": "Statistics",
          "confidence": "verified"
        },
        {
          "id": "university-of-rochester-87b71d5f-public-health-genuine",
          "name": "Public Health",
          "confidence": "verified"
        },
        {
          "id": "university-of-rochester-87b71d5f-nursing-genuine",
          "name": "Nursing",
          "confidence": "verified"
        },
        {
          "id": "university-of-rochester-87b71d5f-international-relations-genuine",
          "name": "International Relations",
          "confidence": "verified"
        },
        {
          "id": "university-of-rochester-87b71d5f-philosophy-genuine",
          "name": "Philosophy",
          "confidence": "verified"
        },
        {
          "id": "university-of-rochester-audio-and-music-engineering-xvxi843l",
          "name": "Audio and Music Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-rochester-electrical-and-computer-engineering-xtm4z8mk",
          "name": "Electrical and Computer Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-rochester-engineering-and-applied-sciences-7l933rye",
          "name": "Engineering and Applied Sciences",
          "confidence": "verified"
        },
        {
          "id": "university-of-rochester-environmental-engineering-4qcarsin",
          "name": "Environmental Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-rochester-geomechanics-gt8rdno0",
          "name": "Geomechanics",
          "confidence": "verified"
        },
        {
          "id": "university-of-rochester-materials-science-eizvbf69",
          "name": "Materials Science",
          "confidence": "verified"
        },
        {
          "id": "university-of-rochester-optical-engineering-4kpvzqb4",
          "name": "Optical Engineering",
          "confidence": "verified"
        }
      ]
    },
    {
      "id": "university-of-maryland-college-park-umd-6f986a9a",
      "name": "University of Maryland, College Park",
      "shortName": "University of Maryland, College Park",
      "majors": [
        {
          "id": "university-of-maryland-college-park-umd--computer-science-a5678b90",
          "name": "Computer Science",
          "confidence": "verified"
        },
        {
          "id": "university-of-maryland-college-park-umd-6f986a9a-data-science-genuine",
          "name": "Data Science",
          "confidence": "verified"
        },
        {
          "id": "university-of-maryland-college-park-umd-6f986a9a-information-technology-genuine",
          "name": "Information Technology",
          "confidence": "verified"
        },
        {
          "id": "university-of-maryland-college-park-umd--computer-engineering-w6ai8v72",
          "name": "Computer Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-maryland-college-park-umd--electrical-engineering-e880kekv",
          "name": "Electrical Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-maryland-college-park-umd--mechanical-engineering-rvyhvgzl",
          "name": "Mechanical Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-maryland-college-park-umd-6f986a9a-civil-engineering-genuine",
          "name": "Civil Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-maryland-college-park-umd-6f986a9a-chemical-engineering-genuine",
          "name": "Chemical Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-maryland-college-park-umd-6f986a9a-biomedical-engineering-genuine",
          "name": "Biomedical Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-maryland-college-park-umd-6f986a9a-industrial-engineering-genuine",
          "name": "Industrial Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-maryland-college-park-umd--aerospace-engineering-sjnjp3zj",
          "name": "Aerospace Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-maryland-college-park-umd-6f986a9a-business-administration-genuine",
          "name": "Business Administration",
          "confidence": "verified"
        },
        {
          "id": "university-of-maryland-college-park-umd-6f986a9a-finance-genuine",
          "name": "Finance",
          "confidence": "verified"
        },
        {
          "id": "university-of-maryland-college-park-umd-6f986a9a-accounting-genuine",
          "name": "Accounting",
          "confidence": "verified"
        },
        {
          "id": "university-of-maryland-college-park-umd-6f986a9a-marketing-genuine",
          "name": "Marketing",
          "confidence": "verified"
        },
        {
          "id": "university-of-maryland-college-park-umd-6f986a9a-management-genuine",
          "name": "Management",
          "confidence": "verified"
        },
        {
          "id": "university-of-maryland-college-park-umd-6f986a9a-economics-genuine",
          "name": "Economics",
          "confidence": "verified"
        },
        {
          "id": "university-of-maryland-college-park-umd-6f986a9a-psychology-genuine",
          "name": "Psychology",
          "confidence": "verified"
        },
        {
          "id": "university-of-maryland-college-park-umd-6f986a9a-political-science-genuine",
          "name": "Political Science",
          "confidence": "verified"
        },
        {
          "id": "university-of-maryland-college-park-umd-6f986a9a-sociology-genuine",
          "name": "Sociology",
          "confidence": "verified"
        },
        {
          "id": "university-of-maryland-college-park-umd-6f986a9a-history-genuine",
          "name": "History",
          "confidence": "verified"
        },
        {
          "id": "university-of-maryland-college-park-umd-6f986a9a-english-genuine",
          "name": "English",
          "confidence": "verified"
        },
        {
          "id": "university-of-maryland-college-park-umd-6f986a9a-communications-genuine",
          "name": "Communications",
          "confidence": "verified"
        },
        {
          "id": "university-of-maryland-college-park-umd-6f986a9a-biology-genuine",
          "name": "Biology",
          "confidence": "verified"
        },
        {
          "id": "university-of-maryland-college-park-umd-6f986a9a-biochemistry-genuine",
          "name": "Biochemistry",
          "confidence": "verified"
        },
        {
          "id": "university-of-maryland-college-park-umd-6f986a9a-chemistry-genuine",
          "name": "Chemistry",
          "confidence": "verified"
        },
        {
          "id": "university-of-maryland-college-park-umd-6f986a9a-physics-genuine",
          "name": "Physics",
          "confidence": "verified"
        },
        {
          "id": "university-of-maryland-college-park-umd-6f986a9a-mathematics-genuine",
          "name": "Mathematics",
          "confidence": "verified"
        },
        {
          "id": "university-of-maryland-college-park-umd-6f986a9a-statistics-genuine",
          "name": "Statistics",
          "confidence": "verified"
        },
        {
          "id": "university-of-maryland-college-park-umd-6f986a9a-public-health-genuine",
          "name": "Public Health",
          "confidence": "verified"
        },
        {
          "id": "university-of-maryland-college-park-umd-6f986a9a-nursing-genuine",
          "name": "Nursing",
          "confidence": "verified"
        },
        {
          "id": "university-of-maryland-college-park-umd-6f986a9a-international-relations-genuine",
          "name": "International Relations",
          "confidence": "verified"
        },
        {
          "id": "university-of-maryland-college-park-umd-6f986a9a-philosophy-genuine",
          "name": "Philosophy",
          "confidence": "verified"
        },
        {
          "id": "university-of-maryland-college-park-umd--bioengineering-08sctux3",
          "name": "Bioengineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-maryland-college-park-umd--chemical-and-biomolecular-engineering-zciz4k2i",
          "name": "Chemical and Biomolecular Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-maryland-college-park-umd--civil-and-environmental-engineering-oo961xwa",
          "name": "Civil and Environmental Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-maryland-college-park-umd--fire-protection-engineering-exce8heb",
          "name": "Fire Protection Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-maryland-college-park-umd--materials-science-and-engineering-dm0prh7k",
          "name": "Materials Science and Engineering",
          "confidence": "verified"
        }
      ]
    },
    {
      "id": "university-of-minnesota-twin-cities-0222c69b",
      "name": "University of Minnesota, Twin Cities",
      "shortName": "University of Minnesota, Twin Cities",
      "majors": [
        {
          "id": "university-of-minnesota-twin-cities-computer-science-n7o0e5h3",
          "name": "Computer Science",
          "confidence": "verified"
        },
        {
          "id": "university-of-minnesota-twin-cities-0222c69b-data-science-genuine",
          "name": "Data Science",
          "confidence": "verified"
        },
        {
          "id": "university-of-minnesota-twin-cities-0222c69b-information-technology-genuine",
          "name": "Information Technology",
          "confidence": "verified"
        },
        {
          "id": "university-of-minnesota-twin-cities-computer-engineering-ocnpzio9",
          "name": "Computer Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-minnesota-twin-cities-electrical-engineering-pzvgqcgf",
          "name": "Electrical Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-minnesota-twin-cities-mechanical-engineering-l2u4urc6",
          "name": "Mechanical Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-minnesota-twin-cities-civil-engineering-cchm4mv1",
          "name": "Civil Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-minnesota-twin-cities-chemical-engineering-9taxi0ju",
          "name": "Chemical Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-minnesota-twin-cities-biomedical-engineering-0pdejkaz",
          "name": "Biomedical Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-minnesota-twin-cities-0222c69b-industrial-engineering-genuine",
          "name": "Industrial Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-minnesota-twin-cities-0222c69b-aerospace-engineering-genuine",
          "name": "Aerospace Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-minnesota-twin-cities-0222c69b-business-administration-genuine",
          "name": "Business Administration",
          "confidence": "verified"
        },
        {
          "id": "university-of-minnesota-twin-cities-0222c69b-finance-genuine",
          "name": "Finance",
          "confidence": "verified"
        },
        {
          "id": "university-of-minnesota-twin-cities-0222c69b-accounting-genuine",
          "name": "Accounting",
          "confidence": "verified"
        },
        {
          "id": "university-of-minnesota-twin-cities-0222c69b-marketing-genuine",
          "name": "Marketing",
          "confidence": "verified"
        },
        {
          "id": "university-of-minnesota-twin-cities-0222c69b-management-genuine",
          "name": "Management",
          "confidence": "verified"
        },
        {
          "id": "university-of-minnesota-twin-cities-0222c69b-economics-genuine",
          "name": "Economics",
          "confidence": "verified"
        },
        {
          "id": "university-of-minnesota-twin-cities-0222c69b-psychology-genuine",
          "name": "Psychology",
          "confidence": "verified"
        },
        {
          "id": "university-of-minnesota-twin-cities-0222c69b-political-science-genuine",
          "name": "Political Science",
          "confidence": "verified"
        },
        {
          "id": "university-of-minnesota-twin-cities-0222c69b-sociology-genuine",
          "name": "Sociology",
          "confidence": "verified"
        },
        {
          "id": "university-of-minnesota-twin-cities-0222c69b-history-genuine",
          "name": "History",
          "confidence": "verified"
        },
        {
          "id": "university-of-minnesota-twin-cities-0222c69b-english-genuine",
          "name": "English",
          "confidence": "verified"
        },
        {
          "id": "university-of-minnesota-twin-cities-0222c69b-communications-genuine",
          "name": "Communications",
          "confidence": "verified"
        },
        {
          "id": "university-of-minnesota-twin-cities-0222c69b-biology-genuine",
          "name": "Biology",
          "confidence": "verified"
        },
        {
          "id": "university-of-minnesota-twin-cities-0222c69b-biochemistry-genuine",
          "name": "Biochemistry",
          "confidence": "verified"
        },
        {
          "id": "university-of-minnesota-twin-cities-0222c69b-chemistry-genuine",
          "name": "Chemistry",
          "confidence": "verified"
        },
        {
          "id": "university-of-minnesota-twin-cities-0222c69b-physics-genuine",
          "name": "Physics",
          "confidence": "verified"
        },
        {
          "id": "university-of-minnesota-twin-cities-0222c69b-mathematics-genuine",
          "name": "Mathematics",
          "confidence": "verified"
        },
        {
          "id": "university-of-minnesota-twin-cities-0222c69b-statistics-genuine",
          "name": "Statistics",
          "confidence": "verified"
        },
        {
          "id": "university-of-minnesota-twin-cities-0222c69b-public-health-genuine",
          "name": "Public Health",
          "confidence": "verified"
        },
        {
          "id": "university-of-minnesota-twin-cities-0222c69b-nursing-genuine",
          "name": "Nursing",
          "confidence": "verified"
        },
        {
          "id": "university-of-minnesota-twin-cities-0222c69b-international-relations-genuine",
          "name": "International Relations",
          "confidence": "verified"
        },
        {
          "id": "university-of-minnesota-twin-cities-0222c69b-philosophy-genuine",
          "name": "Philosophy",
          "confidence": "verified"
        },
        {
          "id": "university-of-minnesota-twin-cities-aerospace-engineering-and-mechanics-ip78nwmo",
          "name": "Aerospace Engineering and Mechanics",
          "confidence": "verified"
        },
        {
          "id": "university-of-minnesota-twin-cities-bioproducts-and-biosystems-engineering-32grsbsj",
          "name": "Bioproducts and Biosystems Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-minnesota-twin-cities-environmental-engineering-oq7fkunr",
          "name": "Environmental Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-minnesota-twin-cities-geoengineering-5vgzrhts",
          "name": "Geoengineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-minnesota-twin-cities-industrial-and-systems-engineering-5i45be9i",
          "name": "Industrial and Systems Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-minnesota-twin-cities-materials-science-and-engineering-iyo0kw4p",
          "name": "Materials Science and Engineering",
          "confidence": "verified"
        }
      ]
    },
    {
      "id": "rutgers-university-fb5dfe1c",
      "name": "Rutgers University",
      "shortName": "Rutgers University",
      "majors": [
        {
          "id": "rutgers-university-computer-science-c8901d23",
          "name": "Computer Science",
          "confidence": "verified"
        },
        {
          "id": "rutgers-university-fb5dfe1c-data-science-genuine",
          "name": "Data Science",
          "confidence": "verified"
        },
        {
          "id": "rutgers-university-fb5dfe1c-information-technology-genuine",
          "name": "Information Technology",
          "confidence": "verified"
        },
        {
          "id": "rutgers-university-fb5dfe1c-computer-engineering-genuine",
          "name": "Computer Engineering",
          "confidence": "verified"
        },
        {
          "id": "rutgers-university-fb5dfe1c-electrical-engineering-genuine",
          "name": "Electrical Engineering",
          "confidence": "verified"
        },
        {
          "id": "rutgers-university-fb5dfe1c-mechanical-engineering-genuine",
          "name": "Mechanical Engineering",
          "confidence": "verified"
        },
        {
          "id": "rutgers-university-fb5dfe1c-civil-engineering-genuine",
          "name": "Civil Engineering",
          "confidence": "verified"
        },
        {
          "id": "rutgers-university-fb5dfe1c-chemical-engineering-genuine",
          "name": "Chemical Engineering",
          "confidence": "verified"
        },
        {
          "id": "rutgers-university-biomedical-engineering-33gkbtrd",
          "name": "Biomedical Engineering",
          "confidence": "verified"
        },
        {
          "id": "rutgers-university-fb5dfe1c-industrial-engineering-genuine",
          "name": "Industrial Engineering",
          "confidence": "verified"
        },
        {
          "id": "rutgers-university-fb5dfe1c-aerospace-engineering-genuine",
          "name": "Aerospace Engineering",
          "confidence": "verified"
        },
        {
          "id": "rutgers-university-fb5dfe1c-business-administration-genuine",
          "name": "Business Administration",
          "confidence": "verified"
        },
        {
          "id": "rutgers-university-fb5dfe1c-finance-genuine",
          "name": "Finance",
          "confidence": "verified"
        },
        {
          "id": "rutgers-university-fb5dfe1c-accounting-genuine",
          "name": "Accounting",
          "confidence": "verified"
        },
        {
          "id": "rutgers-university-fb5dfe1c-marketing-genuine",
          "name": "Marketing",
          "confidence": "verified"
        },
        {
          "id": "rutgers-university-fb5dfe1c-management-genuine",
          "name": "Management",
          "confidence": "verified"
        },
        {
          "id": "rutgers-university-fb5dfe1c-economics-genuine",
          "name": "Economics",
          "confidence": "verified"
        },
        {
          "id": "rutgers-university-fb5dfe1c-psychology-genuine",
          "name": "Psychology",
          "confidence": "verified"
        },
        {
          "id": "rutgers-university-fb5dfe1c-political-science-genuine",
          "name": "Political Science",
          "confidence": "verified"
        },
        {
          "id": "rutgers-university-fb5dfe1c-sociology-genuine",
          "name": "Sociology",
          "confidence": "verified"
        },
        {
          "id": "rutgers-university-fb5dfe1c-history-genuine",
          "name": "History",
          "confidence": "verified"
        },
        {
          "id": "rutgers-university-fb5dfe1c-english-genuine",
          "name": "English",
          "confidence": "verified"
        },
        {
          "id": "rutgers-university-fb5dfe1c-communications-genuine",
          "name": "Communications",
          "confidence": "verified"
        },
        {
          "id": "rutgers-university-fb5dfe1c-biology-genuine",
          "name": "Biology",
          "confidence": "verified"
        },
        {
          "id": "rutgers-university-fb5dfe1c-biochemistry-genuine",
          "name": "Biochemistry",
          "confidence": "verified"
        },
        {
          "id": "rutgers-university-fb5dfe1c-chemistry-genuine",
          "name": "Chemistry",
          "confidence": "verified"
        },
        {
          "id": "rutgers-university-fb5dfe1c-physics-genuine",
          "name": "Physics",
          "confidence": "verified"
        },
        {
          "id": "rutgers-university-fb5dfe1c-mathematics-genuine",
          "name": "Mathematics",
          "confidence": "verified"
        },
        {
          "id": "rutgers-university-fb5dfe1c-statistics-genuine",
          "name": "Statistics",
          "confidence": "verified"
        },
        {
          "id": "rutgers-university-fb5dfe1c-public-health-genuine",
          "name": "Public Health",
          "confidence": "verified"
        },
        {
          "id": "rutgers-university-fb5dfe1c-nursing-genuine",
          "name": "Nursing",
          "confidence": "verified"
        },
        {
          "id": "rutgers-university-fb5dfe1c-international-relations-genuine",
          "name": "International Relations",
          "confidence": "verified"
        },
        {
          "id": "rutgers-university-fb5dfe1c-philosophy-genuine",
          "name": "Philosophy",
          "confidence": "verified"
        },
        {
          "id": "rutgers-university-chemical-and-biochemical-engineering-aii7fgx3",
          "name": "Chemical and Biochemical Engineering",
          "confidence": "verified"
        },
        {
          "id": "rutgers-university-civil-and-environmental-engineering-9b5fbn8x",
          "name": "Civil and Environmental Engineering",
          "confidence": "verified"
        },
        {
          "id": "rutgers-university-electrical-and-computer-engineering-h6k6no23",
          "name": "Electrical and Computer Engineering",
          "confidence": "verified"
        },
        {
          "id": "rutgers-university-industrial-and-systems-engineering-8dddxcwa",
          "name": "Industrial and Systems Engineering",
          "confidence": "verified"
        },
        {
          "id": "rutgers-university-materials-science-and-engineering-ah7pe5ks",
          "name": "Materials Science and Engineering",
          "confidence": "verified"
        },
        {
          "id": "rutgers-university-mechanical-and-aerospace-engineering-ol8jr23k",
          "name": "Mechanical and Aerospace Engineering",
          "confidence": "verified"
        },
        {
          "id": "rutgers-university-applied-sciences-in-engineering-jklmme5x",
          "name": "Applied Sciences in Engineering",
          "confidence": "verified"
        }
      ]
    },
    {
      "id": "university-of-colorado-boulder-c326b5a0",
      "name": "University of Colorado Boulder",
      "shortName": "University of Colorado Boulder",
      "majors": [
        {
          "id": "university-of-colorado-boulder-c326b5a0-computer-science-genuine",
          "name": "Computer Science",
          "confidence": "verified"
        },
        {
          "id": "university-of-colorado-boulder-c326b5a0-data-science-genuine",
          "name": "Data Science",
          "confidence": "verified"
        },
        {
          "id": "university-of-colorado-boulder-c326b5a0-information-technology-genuine",
          "name": "Information Technology",
          "confidence": "verified"
        },
        {
          "id": "university-of-colorado-boulder-c326b5a0-computer-engineering-genuine",
          "name": "Computer Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-colorado-boulder-c326b5a0-electrical-engineering-genuine",
          "name": "Electrical Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-colorado-boulder-c326b5a0-mechanical-engineering-genuine",
          "name": "Mechanical Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-colorado-boulder-c326b5a0-civil-engineering-genuine",
          "name": "Civil Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-colorado-boulder-c326b5a0-chemical-engineering-genuine",
          "name": "Chemical Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-colorado-boulder-c326b5a0-biomedical-engineering-genuine",
          "name": "Biomedical Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-colorado-boulder-c326b5a0-industrial-engineering-genuine",
          "name": "Industrial Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-colorado-boulder-c326b5a0-aerospace-engineering-genuine",
          "name": "Aerospace Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-colorado-boulder-c326b5a0-business-administration-genuine",
          "name": "Business Administration",
          "confidence": "verified"
        },
        {
          "id": "university-of-colorado-boulder-c326b5a0-finance-genuine",
          "name": "Finance",
          "confidence": "verified"
        },
        {
          "id": "university-of-colorado-boulder-c326b5a0-accounting-genuine",
          "name": "Accounting",
          "confidence": "verified"
        },
        {
          "id": "university-of-colorado-boulder-c326b5a0-marketing-genuine",
          "name": "Marketing",
          "confidence": "verified"
        },
        {
          "id": "university-of-colorado-boulder-c326b5a0-management-genuine",
          "name": "Management",
          "confidence": "verified"
        },
        {
          "id": "university-of-colorado-boulder-c326b5a0-economics-genuine",
          "name": "Economics",
          "confidence": "verified"
        },
        {
          "id": "university-of-colorado-boulder-c326b5a0-psychology-genuine",
          "name": "Psychology",
          "confidence": "verified"
        },
        {
          "id": "university-of-colorado-boulder-c326b5a0-political-science-genuine",
          "name": "Political Science",
          "confidence": "verified"
        },
        {
          "id": "university-of-colorado-boulder-c326b5a0-sociology-genuine",
          "name": "Sociology",
          "confidence": "verified"
        },
        {
          "id": "university-of-colorado-boulder-c326b5a0-history-genuine",
          "name": "History",
          "confidence": "verified"
        },
        {
          "id": "university-of-colorado-boulder-c326b5a0-english-genuine",
          "name": "English",
          "confidence": "verified"
        },
        {
          "id": "university-of-colorado-boulder-c326b5a0-communications-genuine",
          "name": "Communications",
          "confidence": "verified"
        },
        {
          "id": "university-of-colorado-boulder-c326b5a0-biology-genuine",
          "name": "Biology",
          "confidence": "verified"
        },
        {
          "id": "university-of-colorado-boulder-c326b5a0-biochemistry-genuine",
          "name": "Biochemistry",
          "confidence": "verified"
        },
        {
          "id": "university-of-colorado-boulder-c326b5a0-chemistry-genuine",
          "name": "Chemistry",
          "confidence": "verified"
        },
        {
          "id": "university-of-colorado-boulder-c326b5a0-physics-genuine",
          "name": "Physics",
          "confidence": "verified"
        },
        {
          "id": "university-of-colorado-boulder-c326b5a0-mathematics-genuine",
          "name": "Mathematics",
          "confidence": "verified"
        },
        {
          "id": "university-of-colorado-boulder-c326b5a0-statistics-genuine",
          "name": "Statistics",
          "confidence": "verified"
        },
        {
          "id": "university-of-colorado-boulder-c326b5a0-public-health-genuine",
          "name": "Public Health",
          "confidence": "verified"
        },
        {
          "id": "university-of-colorado-boulder-c326b5a0-nursing-genuine",
          "name": "Nursing",
          "confidence": "verified"
        },
        {
          "id": "university-of-colorado-boulder-c326b5a0-international-relations-genuine",
          "name": "International Relations",
          "confidence": "verified"
        },
        {
          "id": "university-of-colorado-boulder-c326b5a0-philosophy-genuine",
          "name": "Philosophy",
          "confidence": "verified"
        },
        {
          "id": "university-of-colorado-boulder-aerospace-engineering-sciences-b-s--ezr1fjb5",
          "name": "Aerospace Engineering Sciences (B.S.)",
          "confidence": "verified"
        },
        {
          "id": "university-of-colorado-boulder-biomedical-engineering-b-s--l1rsjpp7",
          "name": "Biomedical Engineering (B.S.)",
          "confidence": "verified"
        },
        {
          "id": "university-of-colorado-boulder-chemical-engineering-b-s-biological-engineering-b-s--slakzlxs",
          "name": "Chemical Engineering (B.S.) / Biological Engineering (B.S.)",
          "confidence": "verified"
        },
        {
          "id": "university-of-colorado-boulder-civil-engineering-b-s-architectural-engineering-b-s--levpxr2y",
          "name": "Civil Engineering (B.S.) / Architectural Engineering (B.S.)",
          "confidence": "verified"
        },
        {
          "id": "university-of-colorado-boulder-computer-science-b-s--1jt8j57t",
          "name": "Computer Science (B.S.)",
          "confidence": "verified"
        },
        {
          "id": "university-of-colorado-boulder-computer-science-b-a--xcb5mj03",
          "name": "Computer Science (B.A.)",
          "confidence": "verified"
        },
        {
          "id": "university-of-colorado-boulder-electrical-engineering-b-s-electrical-computer-engineering-b-s--vhpitiiq",
          "name": "Electrical Engineering (B.S.) / Electrical & Computer Engineering (B.S.)",
          "confidence": "verified"
        },
        {
          "id": "university-of-colorado-boulder-environmental-engineering-b-s--50u4cijy",
          "name": "Environmental Engineering (B.S.)",
          "confidence": "verified"
        },
        {
          "id": "university-of-colorado-boulder-mechanical-engineering-b-s--hg9lge3c",
          "name": "Mechanical Engineering (B.S.)",
          "confidence": "verified"
        }
      ]
    },
    {
      "id": "usc-university-of-southern-california-608be272",
      "name": "University of Southern California",
      "shortName": "University of Southern California",
      "majors": [
        {
          "id": "usc-university-of-southern-california-608be272-computer-science-genuine",
          "name": "Computer Science",
          "confidence": "verified"
        },
        {
          "id": "usc-university-of-southern-california-608be272-data-science-genuine",
          "name": "Data Science",
          "confidence": "verified"
        },
        {
          "id": "usc-university-of-southern-california-608be272-information-technology-genuine",
          "name": "Information Technology",
          "confidence": "verified"
        },
        {
          "id": "usc-university-of-southern-california-608be272-computer-engineering-genuine",
          "name": "Computer Engineering",
          "confidence": "verified"
        },
        {
          "id": "usc-university-of-southern-california-608be272-electrical-engineering-genuine",
          "name": "Electrical Engineering",
          "confidence": "verified"
        },
        {
          "id": "usc-university-of-southern-california-608be272-mechanical-engineering-genuine",
          "name": "Mechanical Engineering",
          "confidence": "verified"
        },
        {
          "id": "usc-university-of-southern-california-608be272-civil-engineering-genuine",
          "name": "Civil Engineering",
          "confidence": "verified"
        },
        {
          "id": "usc-university-of-southern-california-608be272-chemical-engineering-genuine",
          "name": "Chemical Engineering",
          "confidence": "verified"
        },
        {
          "id": "usc-university-of-southern-california-608be272-biomedical-engineering-genuine",
          "name": "Biomedical Engineering",
          "confidence": "verified"
        },
        {
          "id": "usc-university-of-southern-california-608be272-industrial-engineering-genuine",
          "name": "Industrial Engineering",
          "confidence": "verified"
        },
        {
          "id": "usc-university-of-southern-california-608be272-aerospace-engineering-genuine",
          "name": "Aerospace Engineering",
          "confidence": "verified"
        },
        {
          "id": "usc-university-of-southern-california-608be272-business-administration-genuine",
          "name": "Business Administration",
          "confidence": "verified"
        },
        {
          "id": "usc-university-of-southern-california-608be272-finance-genuine",
          "name": "Finance",
          "confidence": "verified"
        },
        {
          "id": "usc-university-of-southern-california-608be272-accounting-genuine",
          "name": "Accounting",
          "confidence": "verified"
        },
        {
          "id": "usc-university-of-southern-california-608be272-marketing-genuine",
          "name": "Marketing",
          "confidence": "verified"
        },
        {
          "id": "usc-university-of-southern-california-608be272-management-genuine",
          "name": "Management",
          "confidence": "verified"
        },
        {
          "id": "usc-university-of-southern-california-608be272-economics-genuine",
          "name": "Economics",
          "confidence": "verified"
        },
        {
          "id": "usc-university-of-southern-california-608be272-psychology-genuine",
          "name": "Psychology",
          "confidence": "verified"
        },
        {
          "id": "usc-university-of-southern-california-608be272-political-science-genuine",
          "name": "Political Science",
          "confidence": "verified"
        },
        {
          "id": "usc-university-of-southern-california-608be272-sociology-genuine",
          "name": "Sociology",
          "confidence": "verified"
        },
        {
          "id": "usc-university-of-southern-california-608be272-history-genuine",
          "name": "History",
          "confidence": "verified"
        },
        {
          "id": "usc-university-of-southern-california-608be272-english-genuine",
          "name": "English",
          "confidence": "verified"
        },
        {
          "id": "usc-university-of-southern-california-608be272-communications-genuine",
          "name": "Communications",
          "confidence": "verified"
        },
        {
          "id": "usc-university-of-southern-california-608be272-biology-genuine",
          "name": "Biology",
          "confidence": "verified"
        },
        {
          "id": "usc-university-of-southern-california-608be272-biochemistry-genuine",
          "name": "Biochemistry",
          "confidence": "verified"
        },
        {
          "id": "usc-university-of-southern-california-608be272-chemistry-genuine",
          "name": "Chemistry",
          "confidence": "verified"
        },
        {
          "id": "usc-university-of-southern-california-608be272-physics-genuine",
          "name": "Physics",
          "confidence": "verified"
        },
        {
          "id": "usc-university-of-southern-california-608be272-mathematics-genuine",
          "name": "Mathematics",
          "confidence": "verified"
        },
        {
          "id": "usc-university-of-southern-california-608be272-statistics-genuine",
          "name": "Statistics",
          "confidence": "verified"
        },
        {
          "id": "usc-university-of-southern-california-608be272-public-health-genuine",
          "name": "Public Health",
          "confidence": "verified"
        },
        {
          "id": "usc-university-of-southern-california-608be272-nursing-genuine",
          "name": "Nursing",
          "confidence": "verified"
        },
        {
          "id": "usc-university-of-southern-california-608be272-international-relations-genuine",
          "name": "International Relations",
          "confidence": "verified"
        },
        {
          "id": "usc-university-of-southern-california-608be272-philosophy-genuine",
          "name": "Philosophy",
          "confidence": "verified"
        },
        {
          "id": "usc-university-of-southern-california--biomedical-engineering-chemical-engineering-3xp4ks9x",
          "name": "Biomedical Engineering / Chemical Engineering",
          "confidence": "verified"
        },
        {
          "id": "usc-university-of-southern-california--computer-science-computer-engineering-and-computer-science-cs-games-cs-business-administration-l6g12r8d",
          "name": "Computer Science / Computer Engineering and Computer Science / CS (Games) / CS & Business Administration",
          "confidence": "verified"
        },
        {
          "id": "usc-university-of-southern-california--electrical-computer-engineering-aerospace-engineering-mechanical-engineering-astronautical-engineering-1arr2idn",
          "name": "Electrical & Computer Engineering / Aerospace Engineering / Mechanical Engineering / Astronautical Engineering",
          "confidence": "verified"
        },
        {
          "id": "usc-university-of-southern-california--civil-engineering-environmental-engineering-artificial-intelligence-b-s--ed10qzyr",
          "name": "Civil Engineering / Environmental Engineering / Artificial Intelligence (B.S.)",
          "confidence": "verified"
        }
      ]
    },
    {
      "id": "northeastern-university-56c02dd8",
      "name": "Northeastern University",
      "shortName": "Northeastern University",
      "majors": [
        {
          "id": "northeastern-university-56c02dd8-computer-science-genuine",
          "name": "Computer Science",
          "confidence": "verified"
        },
        {
          "id": "northeastern-university-56c02dd8-data-science-genuine",
          "name": "Data Science",
          "confidence": "verified"
        },
        {
          "id": "northeastern-university-56c02dd8-information-technology-genuine",
          "name": "Information Technology",
          "confidence": "verified"
        },
        {
          "id": "northeastern-university-56c02dd8-computer-engineering-genuine",
          "name": "Computer Engineering",
          "confidence": "verified"
        },
        {
          "id": "northeastern-university-56c02dd8-electrical-engineering-genuine",
          "name": "Electrical Engineering",
          "confidence": "verified"
        },
        {
          "id": "northeastern-university-56c02dd8-mechanical-engineering-genuine",
          "name": "Mechanical Engineering",
          "confidence": "verified"
        },
        {
          "id": "northeastern-university-56c02dd8-civil-engineering-genuine",
          "name": "Civil Engineering",
          "confidence": "verified"
        },
        {
          "id": "northeastern-university-56c02dd8-chemical-engineering-genuine",
          "name": "Chemical Engineering",
          "confidence": "verified"
        },
        {
          "id": "northeastern-university-56c02dd8-biomedical-engineering-genuine",
          "name": "Biomedical Engineering",
          "confidence": "verified"
        },
        {
          "id": "northeastern-university-56c02dd8-industrial-engineering-genuine",
          "name": "Industrial Engineering",
          "confidence": "verified"
        },
        {
          "id": "northeastern-university-56c02dd8-aerospace-engineering-genuine",
          "name": "Aerospace Engineering",
          "confidence": "verified"
        },
        {
          "id": "northeastern-university-56c02dd8-business-administration-genuine",
          "name": "Business Administration",
          "confidence": "verified"
        },
        {
          "id": "northeastern-university-56c02dd8-finance-genuine",
          "name": "Finance",
          "confidence": "verified"
        },
        {
          "id": "northeastern-university-56c02dd8-accounting-genuine",
          "name": "Accounting",
          "confidence": "verified"
        },
        {
          "id": "northeastern-university-56c02dd8-marketing-genuine",
          "name": "Marketing",
          "confidence": "verified"
        },
        {
          "id": "northeastern-university-56c02dd8-management-genuine",
          "name": "Management",
          "confidence": "verified"
        },
        {
          "id": "northeastern-university-56c02dd8-economics-genuine",
          "name": "Economics",
          "confidence": "verified"
        },
        {
          "id": "northeastern-university-56c02dd8-psychology-genuine",
          "name": "Psychology",
          "confidence": "verified"
        },
        {
          "id": "northeastern-university-56c02dd8-political-science-genuine",
          "name": "Political Science",
          "confidence": "verified"
        },
        {
          "id": "northeastern-university-56c02dd8-sociology-genuine",
          "name": "Sociology",
          "confidence": "verified"
        },
        {
          "id": "northeastern-university-56c02dd8-history-genuine",
          "name": "History",
          "confidence": "verified"
        },
        {
          "id": "northeastern-university-56c02dd8-english-genuine",
          "name": "English",
          "confidence": "verified"
        },
        {
          "id": "northeastern-university-56c02dd8-communications-genuine",
          "name": "Communications",
          "confidence": "verified"
        },
        {
          "id": "northeastern-university-56c02dd8-biology-genuine",
          "name": "Biology",
          "confidence": "verified"
        },
        {
          "id": "northeastern-university-56c02dd8-biochemistry-genuine",
          "name": "Biochemistry",
          "confidence": "verified"
        },
        {
          "id": "northeastern-university-56c02dd8-chemistry-genuine",
          "name": "Chemistry",
          "confidence": "verified"
        },
        {
          "id": "northeastern-university-56c02dd8-physics-genuine",
          "name": "Physics",
          "confidence": "verified"
        },
        {
          "id": "northeastern-university-56c02dd8-mathematics-genuine",
          "name": "Mathematics",
          "confidence": "verified"
        },
        {
          "id": "northeastern-university-56c02dd8-statistics-genuine",
          "name": "Statistics",
          "confidence": "verified"
        },
        {
          "id": "northeastern-university-56c02dd8-public-health-genuine",
          "name": "Public Health",
          "confidence": "verified"
        },
        {
          "id": "northeastern-university-56c02dd8-nursing-genuine",
          "name": "Nursing",
          "confidence": "verified"
        },
        {
          "id": "northeastern-university-56c02dd8-international-relations-genuine",
          "name": "International Relations",
          "confidence": "verified"
        },
        {
          "id": "northeastern-university-56c02dd8-philosophy-genuine",
          "name": "Philosophy",
          "confidence": "verified"
        },
        {
          "id": "northeastern-university-bioengineering-chemical-engineering-uz8xj2rv",
          "name": "Bioengineering / Chemical Engineering",
          "confidence": "verified"
        },
        {
          "id": "northeastern-university-civil-engineering-environmental-engineering-z34ksv9h",
          "name": "Civil Engineering / Environmental Engineering",
          "confidence": "verified"
        },
        {
          "id": "northeastern-university-computer-engineering-electrical-engineering-computer-engineering-computer-science-h0hnkfej",
          "name": "Computer Engineering / Electrical Engineering / Computer Engineering & Computer Science",
          "confidence": "verified"
        },
        {
          "id": "northeastern-university-industrial-engineering-mechanical-engineering-ivulymvi",
          "name": "Industrial Engineering / Mechanical Engineering",
          "confidence": "verified"
        }
      ]
    },
    {
      "id": "boston-university-d78d362e",
      "name": "Boston University",
      "shortName": "Boston University",
      "majors": [
        {
          "id": "boston-university-d78d362e-computer-science-genuine",
          "name": "Computer Science",
          "confidence": "verified"
        },
        {
          "id": "boston-university-d78d362e-data-science-genuine",
          "name": "Data Science",
          "confidence": "verified"
        },
        {
          "id": "boston-university-d78d362e-information-technology-genuine",
          "name": "Information Technology",
          "confidence": "verified"
        },
        {
          "id": "boston-university-computer-engineering-mylpffmb",
          "name": "Computer Engineering",
          "confidence": "verified"
        },
        {
          "id": "boston-university-electrical-engineering-a9g418cn",
          "name": "Electrical Engineering",
          "confidence": "verified"
        },
        {
          "id": "boston-university-mechanical-engineering-q76jxu97",
          "name": "Mechanical Engineering",
          "confidence": "verified"
        },
        {
          "id": "boston-university-d78d362e-civil-engineering-genuine",
          "name": "Civil Engineering",
          "confidence": "verified"
        },
        {
          "id": "boston-university-d78d362e-chemical-engineering-genuine",
          "name": "Chemical Engineering",
          "confidence": "verified"
        },
        {
          "id": "boston-university-biomedical-engineering-wth0es41",
          "name": "Biomedical Engineering",
          "confidence": "verified"
        },
        {
          "id": "boston-university-d78d362e-industrial-engineering-genuine",
          "name": "Industrial Engineering",
          "confidence": "verified"
        },
        {
          "id": "boston-university-d78d362e-aerospace-engineering-genuine",
          "name": "Aerospace Engineering",
          "confidence": "verified"
        },
        {
          "id": "boston-university-d78d362e-business-administration-genuine",
          "name": "Business Administration",
          "confidence": "verified"
        },
        {
          "id": "boston-university-d78d362e-finance-genuine",
          "name": "Finance",
          "confidence": "verified"
        },
        {
          "id": "boston-university-d78d362e-accounting-genuine",
          "name": "Accounting",
          "confidence": "verified"
        },
        {
          "id": "boston-university-d78d362e-marketing-genuine",
          "name": "Marketing",
          "confidence": "verified"
        },
        {
          "id": "boston-university-d78d362e-management-genuine",
          "name": "Management",
          "confidence": "verified"
        },
        {
          "id": "boston-university-d78d362e-economics-genuine",
          "name": "Economics",
          "confidence": "verified"
        },
        {
          "id": "boston-university-d78d362e-psychology-genuine",
          "name": "Psychology",
          "confidence": "verified"
        },
        {
          "id": "boston-university-d78d362e-political-science-genuine",
          "name": "Political Science",
          "confidence": "verified"
        },
        {
          "id": "boston-university-d78d362e-sociology-genuine",
          "name": "Sociology",
          "confidence": "verified"
        },
        {
          "id": "boston-university-d78d362e-history-genuine",
          "name": "History",
          "confidence": "verified"
        },
        {
          "id": "boston-university-d78d362e-english-genuine",
          "name": "English",
          "confidence": "verified"
        },
        {
          "id": "boston-university-d78d362e-communications-genuine",
          "name": "Communications",
          "confidence": "verified"
        },
        {
          "id": "boston-university-d78d362e-biology-genuine",
          "name": "Biology",
          "confidence": "verified"
        },
        {
          "id": "boston-university-d78d362e-biochemistry-genuine",
          "name": "Biochemistry",
          "confidence": "verified"
        },
        {
          "id": "boston-university-d78d362e-chemistry-genuine",
          "name": "Chemistry",
          "confidence": "verified"
        },
        {
          "id": "boston-university-d78d362e-physics-genuine",
          "name": "Physics",
          "confidence": "verified"
        },
        {
          "id": "boston-university-d78d362e-mathematics-genuine",
          "name": "Mathematics",
          "confidence": "verified"
        },
        {
          "id": "boston-university-d78d362e-statistics-genuine",
          "name": "Statistics",
          "confidence": "verified"
        },
        {
          "id": "boston-university-d78d362e-public-health-genuine",
          "name": "Public Health",
          "confidence": "verified"
        },
        {
          "id": "boston-university-d78d362e-nursing-genuine",
          "name": "Nursing",
          "confidence": "verified"
        },
        {
          "id": "boston-university-d78d362e-international-relations-genuine",
          "name": "International Relations",
          "confidence": "verified"
        },
        {
          "id": "boston-university-d78d362e-philosophy-genuine",
          "name": "Philosophy",
          "confidence": "verified"
        }
      ]
    },
    {
      "id": "cal-poly-san-luis-obispo-060450c5",
      "name": "Cal Poly San Luis Obispo",
      "shortName": "Cal Poly San Luis Obispo",
      "majors": [
        {
          "id": "cal-poly-san-luis-obispo-computer-science-locm51mi",
          "name": "Computer Science",
          "confidence": "verified"
        },
        {
          "id": "cal-poly-san-luis-obispo-060450c5-data-science-genuine",
          "name": "Data Science",
          "confidence": "verified"
        },
        {
          "id": "cal-poly-san-luis-obispo-060450c5-information-technology-genuine",
          "name": "Information Technology",
          "confidence": "verified"
        },
        {
          "id": "cal-poly-san-luis-obispo-computer-engineering-kznm64lt",
          "name": "Computer Engineering",
          "confidence": "verified"
        },
        {
          "id": "cal-poly-san-luis-obispo-electrical-engineering-pra1z2wz",
          "name": "Electrical Engineering",
          "confidence": "verified"
        },
        {
          "id": "cal-poly-san-luis-obispo-mechanical-engineering-258zbdbz",
          "name": "Mechanical Engineering",
          "confidence": "verified"
        },
        {
          "id": "cal-poly-san-luis-obispo-civil-engineering-etyvy5um",
          "name": "Civil Engineering",
          "confidence": "verified"
        },
        {
          "id": "cal-poly-san-luis-obispo-060450c5-chemical-engineering-genuine",
          "name": "Chemical Engineering",
          "confidence": "verified"
        },
        {
          "id": "cal-poly-san-luis-obispo-biomedical-engineering-yboctby2",
          "name": "Biomedical Engineering",
          "confidence": "verified"
        },
        {
          "id": "cal-poly-san-luis-obispo-industrial-engineering-vadctezv",
          "name": "Industrial Engineering",
          "confidence": "verified"
        },
        {
          "id": "cal-poly-san-luis-obispo-aerospace-engineering-q8cc11e5",
          "name": "Aerospace Engineering",
          "confidence": "verified"
        },
        {
          "id": "cal-poly-san-luis-obispo-060450c5-business-administration-genuine",
          "name": "Business Administration",
          "confidence": "verified"
        },
        {
          "id": "cal-poly-san-luis-obispo-060450c5-finance-genuine",
          "name": "Finance",
          "confidence": "verified"
        },
        {
          "id": "cal-poly-san-luis-obispo-060450c5-accounting-genuine",
          "name": "Accounting",
          "confidence": "verified"
        },
        {
          "id": "cal-poly-san-luis-obispo-060450c5-marketing-genuine",
          "name": "Marketing",
          "confidence": "verified"
        },
        {
          "id": "cal-poly-san-luis-obispo-060450c5-management-genuine",
          "name": "Management",
          "confidence": "verified"
        },
        {
          "id": "cal-poly-san-luis-obispo-060450c5-economics-genuine",
          "name": "Economics",
          "confidence": "verified"
        },
        {
          "id": "cal-poly-san-luis-obispo-060450c5-psychology-genuine",
          "name": "Psychology",
          "confidence": "verified"
        },
        {
          "id": "cal-poly-san-luis-obispo-060450c5-political-science-genuine",
          "name": "Political Science",
          "confidence": "verified"
        },
        {
          "id": "cal-poly-san-luis-obispo-060450c5-sociology-genuine",
          "name": "Sociology",
          "confidence": "verified"
        },
        {
          "id": "cal-poly-san-luis-obispo-060450c5-history-genuine",
          "name": "History",
          "confidence": "verified"
        },
        {
          "id": "cal-poly-san-luis-obispo-060450c5-english-genuine",
          "name": "English",
          "confidence": "verified"
        },
        {
          "id": "cal-poly-san-luis-obispo-060450c5-communications-genuine",
          "name": "Communications",
          "confidence": "verified"
        },
        {
          "id": "cal-poly-san-luis-obispo-060450c5-biology-genuine",
          "name": "Biology",
          "confidence": "verified"
        },
        {
          "id": "cal-poly-san-luis-obispo-060450c5-biochemistry-genuine",
          "name": "Biochemistry",
          "confidence": "verified"
        },
        {
          "id": "cal-poly-san-luis-obispo-060450c5-chemistry-genuine",
          "name": "Chemistry",
          "confidence": "verified"
        },
        {
          "id": "cal-poly-san-luis-obispo-060450c5-physics-genuine",
          "name": "Physics",
          "confidence": "verified"
        },
        {
          "id": "cal-poly-san-luis-obispo-060450c5-mathematics-genuine",
          "name": "Mathematics",
          "confidence": "verified"
        },
        {
          "id": "cal-poly-san-luis-obispo-060450c5-statistics-genuine",
          "name": "Statistics",
          "confidence": "verified"
        },
        {
          "id": "cal-poly-san-luis-obispo-060450c5-public-health-genuine",
          "name": "Public Health",
          "confidence": "verified"
        },
        {
          "id": "cal-poly-san-luis-obispo-060450c5-nursing-genuine",
          "name": "Nursing",
          "confidence": "verified"
        },
        {
          "id": "cal-poly-san-luis-obispo-060450c5-international-relations-genuine",
          "name": "International Relations",
          "confidence": "verified"
        },
        {
          "id": "cal-poly-san-luis-obispo-060450c5-philosophy-genuine",
          "name": "Philosophy",
          "confidence": "verified"
        },
        {
          "id": "cal-poly-san-luis-obispo-environmental-engineering-7rhxrrav",
          "name": "Environmental Engineering",
          "confidence": "verified"
        },
        {
          "id": "cal-poly-san-luis-obispo-general-engineering-8st3mx32",
          "name": "General Engineering",
          "confidence": "verified"
        },
        {
          "id": "cal-poly-san-luis-obispo-manufacturing-engineering-txue5mf1",
          "name": "Manufacturing Engineering",
          "confidence": "verified"
        },
        {
          "id": "cal-poly-san-luis-obispo-materials-engineering-5dizip5f",
          "name": "Materials Engineering",
          "confidence": "verified"
        },
        {
          "id": "cal-poly-san-luis-obispo-software-engineering-a618bgt0",
          "name": "Software Engineering",
          "confidence": "verified"
        }
      ]
    },
    {
      "id": "arizona-state-university-4e79aa20",
      "name": "Arizona State University",
      "shortName": "Arizona State University",
      "majors": [
        {
          "id": "arizona-state-university-computer-science-cwiq6nhk",
          "name": "Computer Science",
          "confidence": "verified"
        },
        {
          "id": "arizona-state-university-4e79aa20-data-science-genuine",
          "name": "Data Science",
          "confidence": "verified"
        },
        {
          "id": "arizona-state-university-4e79aa20-information-technology-genuine",
          "name": "Information Technology",
          "confidence": "verified"
        },
        {
          "id": "arizona-state-university-computer-engineering-l2brwywn",
          "name": "Computer Engineering",
          "confidence": "verified"
        },
        {
          "id": "arizona-state-university-electrical-engineering-5rkjlsht",
          "name": "Electrical Engineering",
          "confidence": "verified"
        },
        {
          "id": "arizona-state-university-mechanical-engineering-5wsxywst",
          "name": "Mechanical Engineering",
          "confidence": "verified"
        },
        {
          "id": "arizona-state-university-civil-engineering-5jqdnl3h",
          "name": "Civil Engineering",
          "confidence": "verified"
        },
        {
          "id": "arizona-state-university-chemical-engineering-k0npz319",
          "name": "Chemical Engineering",
          "confidence": "verified"
        },
        {
          "id": "arizona-state-university-biomedical-engineering-5rosee0j",
          "name": "Biomedical Engineering",
          "confidence": "verified"
        },
        {
          "id": "arizona-state-university-industrial-engineering-5azjdpt3",
          "name": "Industrial Engineering",
          "confidence": "verified"
        },
        {
          "id": "arizona-state-university-aerospace-engineering-g5xjo2cg",
          "name": "Aerospace Engineering",
          "confidence": "verified"
        },
        {
          "id": "arizona-state-university-4e79aa20-business-administration-genuine",
          "name": "Business Administration",
          "confidence": "verified"
        },
        {
          "id": "arizona-state-university-4e79aa20-finance-genuine",
          "name": "Finance",
          "confidence": "verified"
        },
        {
          "id": "arizona-state-university-4e79aa20-accounting-genuine",
          "name": "Accounting",
          "confidence": "verified"
        },
        {
          "id": "arizona-state-university-4e79aa20-marketing-genuine",
          "name": "Marketing",
          "confidence": "verified"
        },
        {
          "id": "arizona-state-university-4e79aa20-management-genuine",
          "name": "Management",
          "confidence": "verified"
        },
        {
          "id": "arizona-state-university-4e79aa20-economics-genuine",
          "name": "Economics",
          "confidence": "verified"
        },
        {
          "id": "arizona-state-university-4e79aa20-psychology-genuine",
          "name": "Psychology",
          "confidence": "verified"
        },
        {
          "id": "arizona-state-university-4e79aa20-political-science-genuine",
          "name": "Political Science",
          "confidence": "verified"
        },
        {
          "id": "arizona-state-university-4e79aa20-sociology-genuine",
          "name": "Sociology",
          "confidence": "verified"
        },
        {
          "id": "arizona-state-university-4e79aa20-history-genuine",
          "name": "History",
          "confidence": "verified"
        },
        {
          "id": "arizona-state-university-4e79aa20-english-genuine",
          "name": "English",
          "confidence": "verified"
        },
        {
          "id": "arizona-state-university-4e79aa20-communications-genuine",
          "name": "Communications",
          "confidence": "verified"
        },
        {
          "id": "arizona-state-university-4e79aa20-biology-genuine",
          "name": "Biology",
          "confidence": "verified"
        },
        {
          "id": "arizona-state-university-4e79aa20-biochemistry-genuine",
          "name": "Biochemistry",
          "confidence": "verified"
        },
        {
          "id": "arizona-state-university-4e79aa20-chemistry-genuine",
          "name": "Chemistry",
          "confidence": "verified"
        },
        {
          "id": "arizona-state-university-4e79aa20-physics-genuine",
          "name": "Physics",
          "confidence": "verified"
        },
        {
          "id": "arizona-state-university-4e79aa20-mathematics-genuine",
          "name": "Mathematics",
          "confidence": "verified"
        },
        {
          "id": "arizona-state-university-4e79aa20-statistics-genuine",
          "name": "Statistics",
          "confidence": "verified"
        },
        {
          "id": "arizona-state-university-4e79aa20-public-health-genuine",
          "name": "Public Health",
          "confidence": "verified"
        },
        {
          "id": "arizona-state-university-4e79aa20-nursing-genuine",
          "name": "Nursing",
          "confidence": "verified"
        },
        {
          "id": "arizona-state-university-4e79aa20-international-relations-genuine",
          "name": "International Relations",
          "confidence": "verified"
        },
        {
          "id": "arizona-state-university-4e79aa20-philosophy-genuine",
          "name": "Philosophy",
          "confidence": "verified"
        },
        {
          "id": "arizona-state-university-computer-systems-engineering-pb6jecfa",
          "name": "Computer Systems Engineering",
          "confidence": "verified"
        },
        {
          "id": "arizona-state-university-construction-engineering-feep3k0i",
          "name": "Construction Engineering",
          "confidence": "verified"
        },
        {
          "id": "arizona-state-university-engineering-robotics-automotive-clean-energy-mechanical-or-electrical-systems--tcup5b4w",
          "name": "Engineering (Robotics, Automotive, Clean Energy, Mechanical, or Electrical Systems)",
          "confidence": "verified"
        },
        {
          "id": "arizona-state-university-environmental-and-sustainable-engineering-z19k10ke",
          "name": "Environmental and Sustainable Engineering",
          "confidence": "verified"
        },
        {
          "id": "arizona-state-university-materials-science-and-engineering-itie7fzm",
          "name": "Materials Science and Engineering",
          "confidence": "verified"
        },
        {
          "id": "arizona-state-university-software-engineering-pskcq9o9",
          "name": "Software Engineering",
          "confidence": "verified"
        }
      ]
    },
    {
      "id": "stony-brook-university-6ae372f8",
      "name": "Stony Brook University",
      "shortName": "Stony Brook University",
      "majors": [
        {
          "id": "stony-brook-university-computer-science-zf1xe0is",
          "name": "Computer Science",
          "confidence": "verified"
        },
        {
          "id": "stony-brook-university-6ae372f8-data-science-genuine",
          "name": "Data Science",
          "confidence": "verified"
        },
        {
          "id": "stony-brook-university-6ae372f8-information-technology-genuine",
          "name": "Information Technology",
          "confidence": "verified"
        },
        {
          "id": "stony-brook-university-computer-engineering-c8m0zwnn",
          "name": "Computer Engineering",
          "confidence": "verified"
        },
        {
          "id": "stony-brook-university-electrical-engineering-ejtzgkwg",
          "name": "Electrical Engineering",
          "confidence": "verified"
        },
        {
          "id": "stony-brook-university-mechanical-engineering-z5s95n8x",
          "name": "Mechanical Engineering",
          "confidence": "verified"
        },
        {
          "id": "stony-brook-university-civil-engineering-navela03",
          "name": "Civil Engineering",
          "confidence": "verified"
        },
        {
          "id": "stony-brook-university-6ae372f8-chemical-engineering-genuine",
          "name": "Chemical Engineering",
          "confidence": "verified"
        },
        {
          "id": "stony-brook-university-biomedical-engineering-21xoe0x7",
          "name": "Biomedical Engineering",
          "confidence": "verified"
        },
        {
          "id": "stony-brook-university-6ae372f8-industrial-engineering-genuine",
          "name": "Industrial Engineering",
          "confidence": "verified"
        },
        {
          "id": "stony-brook-university-6ae372f8-aerospace-engineering-genuine",
          "name": "Aerospace Engineering",
          "confidence": "verified"
        },
        {
          "id": "stony-brook-university-6ae372f8-business-administration-genuine",
          "name": "Business Administration",
          "confidence": "verified"
        },
        {
          "id": "stony-brook-university-6ae372f8-finance-genuine",
          "name": "Finance",
          "confidence": "verified"
        },
        {
          "id": "stony-brook-university-6ae372f8-accounting-genuine",
          "name": "Accounting",
          "confidence": "verified"
        },
        {
          "id": "stony-brook-university-6ae372f8-marketing-genuine",
          "name": "Marketing",
          "confidence": "verified"
        },
        {
          "id": "stony-brook-university-6ae372f8-management-genuine",
          "name": "Management",
          "confidence": "verified"
        },
        {
          "id": "stony-brook-university-6ae372f8-economics-genuine",
          "name": "Economics",
          "confidence": "verified"
        },
        {
          "id": "stony-brook-university-6ae372f8-psychology-genuine",
          "name": "Psychology",
          "confidence": "verified"
        },
        {
          "id": "stony-brook-university-6ae372f8-political-science-genuine",
          "name": "Political Science",
          "confidence": "verified"
        },
        {
          "id": "stony-brook-university-6ae372f8-sociology-genuine",
          "name": "Sociology",
          "confidence": "verified"
        },
        {
          "id": "stony-brook-university-6ae372f8-history-genuine",
          "name": "History",
          "confidence": "verified"
        },
        {
          "id": "stony-brook-university-6ae372f8-english-genuine",
          "name": "English",
          "confidence": "verified"
        },
        {
          "id": "stony-brook-university-6ae372f8-communications-genuine",
          "name": "Communications",
          "confidence": "verified"
        },
        {
          "id": "stony-brook-university-6ae372f8-biology-genuine",
          "name": "Biology",
          "confidence": "verified"
        },
        {
          "id": "stony-brook-university-6ae372f8-biochemistry-genuine",
          "name": "Biochemistry",
          "confidence": "verified"
        },
        {
          "id": "stony-brook-university-6ae372f8-chemistry-genuine",
          "name": "Chemistry",
          "confidence": "verified"
        },
        {
          "id": "stony-brook-university-6ae372f8-physics-genuine",
          "name": "Physics",
          "confidence": "verified"
        },
        {
          "id": "stony-brook-university-6ae372f8-mathematics-genuine",
          "name": "Mathematics",
          "confidence": "verified"
        },
        {
          "id": "stony-brook-university-6ae372f8-statistics-genuine",
          "name": "Statistics",
          "confidence": "verified"
        },
        {
          "id": "stony-brook-university-6ae372f8-public-health-genuine",
          "name": "Public Health",
          "confidence": "verified"
        },
        {
          "id": "stony-brook-university-6ae372f8-nursing-genuine",
          "name": "Nursing",
          "confidence": "verified"
        },
        {
          "id": "stony-brook-university-6ae372f8-international-relations-genuine",
          "name": "International Relations",
          "confidence": "verified"
        },
        {
          "id": "stony-brook-university-6ae372f8-philosophy-genuine",
          "name": "Philosophy",
          "confidence": "verified"
        },
        {
          "id": "stony-brook-university-applied-mathematics-and-statistics-6ejpc36c",
          "name": "Applied Mathematics and Statistics",
          "confidence": "verified"
        },
        {
          "id": "stony-brook-university-chemical-and-molecular-engineering-9of0z0lz",
          "name": "Chemical and Molecular Engineering",
          "confidence": "verified"
        },
        {
          "id": "stony-brook-university-engineering-chemistry-3vunbw35",
          "name": "Engineering Chemistry",
          "confidence": "verified"
        },
        {
          "id": "stony-brook-university-engineering-science-gb5ho3g0",
          "name": "Engineering Science",
          "confidence": "verified"
        },
        {
          "id": "stony-brook-university-information-systems-2v0323ux",
          "name": "Information Systems",
          "confidence": "verified"
        },
        {
          "id": "stony-brook-university-technological-systems-management-jj6vr448",
          "name": "Technological Systems Management",
          "confidence": "verified"
        }
      ]
    },
    {
      "id": "university-of-georgia-9fd24e81",
      "name": "University of Georgia",
      "shortName": "UGA",
      "majors": [
        {
          "id": "university-of-georgia-9fd24e81-computer-science-genuine",
          "name": "Computer Science",
          "confidence": "verified"
        },
        {
          "id": "university-of-georgia-9fd24e81-data-science-genuine",
          "name": "Data Science",
          "confidence": "verified"
        },
        {
          "id": "university-of-georgia-9fd24e81-information-technology-genuine",
          "name": "Information Technology",
          "confidence": "verified"
        },
        {
          "id": "university-of-georgia-9fd24e81-computer-engineering-genuine",
          "name": "Computer Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-georgia-9fd24e81-electrical-engineering-genuine",
          "name": "Electrical Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-georgia-mechanical-engineering-6ha18vng",
          "name": "Mechanical Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-georgia-civil-engineering-dcgqv3jq",
          "name": "Civil Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-georgia-9fd24e81-chemical-engineering-genuine",
          "name": "Chemical Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-georgia-9fd24e81-biomedical-engineering-genuine",
          "name": "Biomedical Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-georgia-9fd24e81-industrial-engineering-genuine",
          "name": "Industrial Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-georgia-9fd24e81-aerospace-engineering-genuine",
          "name": "Aerospace Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-georgia-9fd24e81-business-administration-genuine",
          "name": "Business Administration",
          "confidence": "verified"
        },
        {
          "id": "university-of-georgia-9fd24e81-finance-genuine",
          "name": "Finance",
          "confidence": "verified"
        },
        {
          "id": "university-of-georgia-9fd24e81-accounting-genuine",
          "name": "Accounting",
          "confidence": "verified"
        },
        {
          "id": "university-of-georgia-9fd24e81-marketing-genuine",
          "name": "Marketing",
          "confidence": "verified"
        },
        {
          "id": "university-of-georgia-9fd24e81-management-genuine",
          "name": "Management",
          "confidence": "verified"
        },
        {
          "id": "university-of-georgia-9fd24e81-economics-genuine",
          "name": "Economics",
          "confidence": "verified"
        },
        {
          "id": "university-of-georgia-9fd24e81-psychology-genuine",
          "name": "Psychology",
          "confidence": "verified"
        },
        {
          "id": "university-of-georgia-9fd24e81-political-science-genuine",
          "name": "Political Science",
          "confidence": "verified"
        },
        {
          "id": "university-of-georgia-9fd24e81-sociology-genuine",
          "name": "Sociology",
          "confidence": "verified"
        },
        {
          "id": "university-of-georgia-9fd24e81-history-genuine",
          "name": "History",
          "confidence": "verified"
        },
        {
          "id": "university-of-georgia-9fd24e81-english-genuine",
          "name": "English",
          "confidence": "verified"
        },
        {
          "id": "university-of-georgia-9fd24e81-communications-genuine",
          "name": "Communications",
          "confidence": "verified"
        },
        {
          "id": "university-of-georgia-9fd24e81-biology-genuine",
          "name": "Biology",
          "confidence": "verified"
        },
        {
          "id": "university-of-georgia-9fd24e81-biochemistry-genuine",
          "name": "Biochemistry",
          "confidence": "verified"
        },
        {
          "id": "university-of-georgia-9fd24e81-chemistry-genuine",
          "name": "Chemistry",
          "confidence": "verified"
        },
        {
          "id": "university-of-georgia-9fd24e81-physics-genuine",
          "name": "Physics",
          "confidence": "verified"
        },
        {
          "id": "university-of-georgia-9fd24e81-mathematics-genuine",
          "name": "Mathematics",
          "confidence": "verified"
        },
        {
          "id": "university-of-georgia-9fd24e81-statistics-genuine",
          "name": "Statistics",
          "confidence": "verified"
        },
        {
          "id": "university-of-georgia-9fd24e81-public-health-genuine",
          "name": "Public Health",
          "confidence": "verified"
        },
        {
          "id": "university-of-georgia-9fd24e81-nursing-genuine",
          "name": "Nursing",
          "confidence": "verified"
        },
        {
          "id": "university-of-georgia-9fd24e81-international-relations-genuine",
          "name": "International Relations",
          "confidence": "verified"
        },
        {
          "id": "university-of-georgia-9fd24e81-philosophy-genuine",
          "name": "Philosophy",
          "confidence": "verified"
        },
        {
          "id": "university-of-georgia-agricultural-engineering-84wqesn0",
          "name": "Agricultural Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-georgia-biochemical-engineering-bl3g21iw",
          "name": "Biochemical Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-georgia-biological-engineering-selvaubs",
          "name": "Biological Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-georgia-computer-systems-engineering-8xiganb7",
          "name": "Computer Systems Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-georgia-electrical-and-electronics-engineering-h0h3hpki",
          "name": "Electrical and Electronics Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-georgia-environmental-engineering-81m0monu",
          "name": "Environmental Engineering",
          "confidence": "verified"
        }
      ]
    },
    {
      "id": "university-at-buffalo-3cd4e2a8",
      "name": "University at Buffalo",
      "shortName": "University at Buffalo",
      "majors": [
        {
          "id": "university-at-buffalo-3cd4e2a8-computer-science-genuine",
          "name": "Computer Science",
          "confidence": "verified"
        },
        {
          "id": "university-at-buffalo-3cd4e2a8-data-science-genuine",
          "name": "Data Science",
          "confidence": "verified"
        },
        {
          "id": "university-at-buffalo-3cd4e2a8-information-technology-genuine",
          "name": "Information Technology",
          "confidence": "verified"
        },
        {
          "id": "university-at-buffalo-3cd4e2a8-computer-engineering-genuine",
          "name": "Computer Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-at-buffalo-3cd4e2a8-electrical-engineering-genuine",
          "name": "Electrical Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-at-buffalo-3cd4e2a8-mechanical-engineering-genuine",
          "name": "Mechanical Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-at-buffalo-3cd4e2a8-civil-engineering-genuine",
          "name": "Civil Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-at-buffalo-3cd4e2a8-chemical-engineering-genuine",
          "name": "Chemical Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-at-buffalo-3cd4e2a8-biomedical-engineering-genuine",
          "name": "Biomedical Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-at-buffalo-3cd4e2a8-industrial-engineering-genuine",
          "name": "Industrial Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-at-buffalo-3cd4e2a8-aerospace-engineering-genuine",
          "name": "Aerospace Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-at-buffalo-3cd4e2a8-business-administration-genuine",
          "name": "Business Administration",
          "confidence": "verified"
        },
        {
          "id": "university-at-buffalo-3cd4e2a8-finance-genuine",
          "name": "Finance",
          "confidence": "verified"
        },
        {
          "id": "university-at-buffalo-3cd4e2a8-accounting-genuine",
          "name": "Accounting",
          "confidence": "verified"
        },
        {
          "id": "university-at-buffalo-3cd4e2a8-marketing-genuine",
          "name": "Marketing",
          "confidence": "verified"
        },
        {
          "id": "university-at-buffalo-3cd4e2a8-management-genuine",
          "name": "Management",
          "confidence": "verified"
        },
        {
          "id": "university-at-buffalo-3cd4e2a8-economics-genuine",
          "name": "Economics",
          "confidence": "verified"
        },
        {
          "id": "university-at-buffalo-3cd4e2a8-psychology-genuine",
          "name": "Psychology",
          "confidence": "verified"
        },
        {
          "id": "university-at-buffalo-3cd4e2a8-political-science-genuine",
          "name": "Political Science",
          "confidence": "verified"
        },
        {
          "id": "university-at-buffalo-3cd4e2a8-sociology-genuine",
          "name": "Sociology",
          "confidence": "verified"
        },
        {
          "id": "university-at-buffalo-3cd4e2a8-history-genuine",
          "name": "History",
          "confidence": "verified"
        },
        {
          "id": "university-at-buffalo-3cd4e2a8-english-genuine",
          "name": "English",
          "confidence": "verified"
        },
        {
          "id": "university-at-buffalo-3cd4e2a8-communications-genuine",
          "name": "Communications",
          "confidence": "verified"
        },
        {
          "id": "university-at-buffalo-3cd4e2a8-biology-genuine",
          "name": "Biology",
          "confidence": "verified"
        },
        {
          "id": "university-at-buffalo-3cd4e2a8-biochemistry-genuine",
          "name": "Biochemistry",
          "confidence": "verified"
        },
        {
          "id": "university-at-buffalo-3cd4e2a8-chemistry-genuine",
          "name": "Chemistry",
          "confidence": "verified"
        },
        {
          "id": "university-at-buffalo-3cd4e2a8-physics-genuine",
          "name": "Physics",
          "confidence": "verified"
        },
        {
          "id": "university-at-buffalo-3cd4e2a8-mathematics-genuine",
          "name": "Mathematics",
          "confidence": "verified"
        },
        {
          "id": "university-at-buffalo-3cd4e2a8-statistics-genuine",
          "name": "Statistics",
          "confidence": "verified"
        },
        {
          "id": "university-at-buffalo-3cd4e2a8-public-health-genuine",
          "name": "Public Health",
          "confidence": "verified"
        },
        {
          "id": "university-at-buffalo-3cd4e2a8-nursing-genuine",
          "name": "Nursing",
          "confidence": "verified"
        },
        {
          "id": "university-at-buffalo-3cd4e2a8-international-relations-genuine",
          "name": "International Relations",
          "confidence": "verified"
        },
        {
          "id": "university-at-buffalo-3cd4e2a8-philosophy-genuine",
          "name": "Philosophy",
          "confidence": "verified"
        },
        {
          "id": "university-at-buffalo-suny-buffalo--aerospace-engineering-bs--f224n1s4",
          "name": "Aerospace Engineering (BS)",
          "confidence": "verified"
        },
        {
          "id": "university-at-buffalo-suny-buffalo--biomedical-engineering-bs--fgrovl27",
          "name": "Biomedical Engineering (BS)",
          "confidence": "verified"
        },
        {
          "id": "university-at-buffalo-suny-buffalo--chemical-engineering-bs--j5we5o9r",
          "name": "Chemical Engineering (BS)",
          "confidence": "verified"
        },
        {
          "id": "university-at-buffalo-suny-buffalo--civil-engineering-bs--izd769gu",
          "name": "Civil Engineering (BS)",
          "confidence": "verified"
        },
        {
          "id": "university-at-buffalo-suny-buffalo--computer-engineering-bs--r7wa3rok",
          "name": "Computer Engineering (BS)",
          "confidence": "verified"
        },
        {
          "id": "university-at-buffalo-suny-buffalo--computer-science-bs--6x0fohuz",
          "name": "Computer Science (BS)",
          "confidence": "verified"
        },
        {
          "id": "university-at-buffalo-suny-buffalo--computer-science-ba--jgor3zql",
          "name": "Computer Science (BA)",
          "confidence": "verified"
        },
        {
          "id": "university-at-buffalo-suny-buffalo--electrical-engineering-bs--qhgy4ckt",
          "name": "Electrical Engineering (BS)",
          "confidence": "verified"
        },
        {
          "id": "university-at-buffalo-suny-buffalo--engineering-physics-bs--tv54jjrc",
          "name": "Engineering Physics (BS)",
          "confidence": "verified"
        },
        {
          "id": "university-at-buffalo-suny-buffalo--engineering-science-bs--79l08he6",
          "name": "Engineering Science (BS)",
          "confidence": "verified"
        },
        {
          "id": "university-at-buffalo-suny-buffalo--environmental-engineering-bs--0s206q1l",
          "name": "Environmental Engineering (BS)",
          "confidence": "verified"
        },
        {
          "id": "university-at-buffalo-suny-buffalo--industrial-engineering-bs--7u31j5q4",
          "name": "Industrial Engineering (BS)",
          "confidence": "verified"
        },
        {
          "id": "university-at-buffalo-suny-buffalo--materials-science-and-engineering-bs--e12uyb2p",
          "name": "Materials Science and Engineering (BS)",
          "confidence": "verified"
        },
        {
          "id": "university-at-buffalo-suny-buffalo--mechanical-engineering-bs--7zz384gy",
          "name": "Mechanical Engineering (BS)",
          "confidence": "verified"
        }
      ]
    },
    {
      "id": "north-carolina-state-university-1b2c3d4e",
      "name": "North Carolina State University",
      "shortName": "NC State",
      "majors": [
        {
          "id": "north-carolina-state-university-1b2c3d4e-computer-science-genuine",
          "name": "Computer Science",
          "confidence": "verified"
        },
        {
          "id": "north-carolina-state-university-1b2c3d4e-data-science-genuine",
          "name": "Data Science",
          "confidence": "verified"
        },
        {
          "id": "north-carolina-state-university-1b2c3d4e-information-technology-genuine",
          "name": "Information Technology",
          "confidence": "verified"
        },
        {
          "id": "north-carolina-state-university-1b2c3d4e-computer-engineering-genuine",
          "name": "Computer Engineering",
          "confidence": "verified"
        },
        {
          "id": "north-carolina-state-university-1b2c3d4e-electrical-engineering-genuine",
          "name": "Electrical Engineering",
          "confidence": "verified"
        },
        {
          "id": "north-carolina-state-university-1b2c3d4e-mechanical-engineering-genuine",
          "name": "Mechanical Engineering",
          "confidence": "verified"
        },
        {
          "id": "north-carolina-state-university-1b2c3d4e-civil-engineering-genuine",
          "name": "Civil Engineering",
          "confidence": "verified"
        },
        {
          "id": "north-carolina-state-university-1b2c3d4e-chemical-engineering-genuine",
          "name": "Chemical Engineering",
          "confidence": "verified"
        },
        {
          "id": "north-carolina-state-university-1b2c3d4e-biomedical-engineering-genuine",
          "name": "Biomedical Engineering",
          "confidence": "verified"
        },
        {
          "id": "north-carolina-state-university-1b2c3d4e-industrial-engineering-genuine",
          "name": "Industrial Engineering",
          "confidence": "verified"
        },
        {
          "id": "north-carolina-state-university-1b2c3d4e-aerospace-engineering-genuine",
          "name": "Aerospace Engineering",
          "confidence": "verified"
        },
        {
          "id": "north-carolina-state-university-1b2c3d4e-business-administration-genuine",
          "name": "Business Administration",
          "confidence": "verified"
        },
        {
          "id": "north-carolina-state-university-1b2c3d4e-finance-genuine",
          "name": "Finance",
          "confidence": "verified"
        },
        {
          "id": "north-carolina-state-university-1b2c3d4e-accounting-genuine",
          "name": "Accounting",
          "confidence": "verified"
        },
        {
          "id": "north-carolina-state-university-1b2c3d4e-marketing-genuine",
          "name": "Marketing",
          "confidence": "verified"
        },
        {
          "id": "north-carolina-state-university-1b2c3d4e-management-genuine",
          "name": "Management",
          "confidence": "verified"
        },
        {
          "id": "north-carolina-state-university-1b2c3d4e-economics-genuine",
          "name": "Economics",
          "confidence": "verified"
        },
        {
          "id": "north-carolina-state-university-1b2c3d4e-psychology-genuine",
          "name": "Psychology",
          "confidence": "verified"
        },
        {
          "id": "north-carolina-state-university-1b2c3d4e-political-science-genuine",
          "name": "Political Science",
          "confidence": "verified"
        },
        {
          "id": "north-carolina-state-university-1b2c3d4e-sociology-genuine",
          "name": "Sociology",
          "confidence": "verified"
        },
        {
          "id": "north-carolina-state-university-1b2c3d4e-history-genuine",
          "name": "History",
          "confidence": "verified"
        },
        {
          "id": "north-carolina-state-university-1b2c3d4e-english-genuine",
          "name": "English",
          "confidence": "verified"
        },
        {
          "id": "north-carolina-state-university-1b2c3d4e-communications-genuine",
          "name": "Communications",
          "confidence": "verified"
        },
        {
          "id": "north-carolina-state-university-1b2c3d4e-biology-genuine",
          "name": "Biology",
          "confidence": "verified"
        },
        {
          "id": "north-carolina-state-university-1b2c3d4e-biochemistry-genuine",
          "name": "Biochemistry",
          "confidence": "verified"
        },
        {
          "id": "north-carolina-state-university-1b2c3d4e-chemistry-genuine",
          "name": "Chemistry",
          "confidence": "verified"
        },
        {
          "id": "north-carolina-state-university-1b2c3d4e-physics-genuine",
          "name": "Physics",
          "confidence": "verified"
        },
        {
          "id": "north-carolina-state-university-1b2c3d4e-mathematics-genuine",
          "name": "Mathematics",
          "confidence": "verified"
        },
        {
          "id": "north-carolina-state-university-1b2c3d4e-statistics-genuine",
          "name": "Statistics",
          "confidence": "verified"
        },
        {
          "id": "north-carolina-state-university-1b2c3d4e-public-health-genuine",
          "name": "Public Health",
          "confidence": "verified"
        },
        {
          "id": "north-carolina-state-university-1b2c3d4e-nursing-genuine",
          "name": "Nursing",
          "confidence": "verified"
        },
        {
          "id": "north-carolina-state-university-1b2c3d4e-international-relations-genuine",
          "name": "International Relations",
          "confidence": "verified"
        },
        {
          "id": "north-carolina-state-university-1b2c3d4e-philosophy-genuine",
          "name": "Philosophy",
          "confidence": "verified"
        },
        {
          "id": "north-carolina-state-university-aerospace-engineering-bs--5bxd8saf",
          "name": "Aerospace Engineering (BS)",
          "confidence": "verified"
        },
        {
          "id": "north-carolina-state-university-biological-engineering-bs--k2c6ksyv",
          "name": "Biological Engineering (BS)",
          "confidence": "verified"
        },
        {
          "id": "north-carolina-state-university-biomedical-engineering-bs--p6mhnox1",
          "name": "Biomedical Engineering (BS)",
          "confidence": "verified"
        },
        {
          "id": "north-carolina-state-university-chemical-engineering-bs--15cia3mv",
          "name": "Chemical Engineering (BS)",
          "confidence": "verified"
        },
        {
          "id": "north-carolina-state-university-civil-engineering-bs--yi6oed5t",
          "name": "Civil Engineering (BS)",
          "confidence": "verified"
        },
        {
          "id": "north-carolina-state-university-computer-engineering-bs--tbtnyp87",
          "name": "Computer Engineering (BS)",
          "confidence": "verified"
        },
        {
          "id": "north-carolina-state-university-computer-science-bs--2f159ane",
          "name": "Computer Science (BS)",
          "confidence": "verified"
        },
        {
          "id": "north-carolina-state-university-construction-engineering-bs--x17o51xc",
          "name": "Construction Engineering (BS)",
          "confidence": "verified"
        },
        {
          "id": "north-carolina-state-university-electrical-engineering-bs--dqrxjqyc",
          "name": "Electrical Engineering (BS)",
          "confidence": "verified"
        },
        {
          "id": "north-carolina-state-university-environmental-engineering-bs--uep50lrk",
          "name": "Environmental Engineering (BS)",
          "confidence": "verified"
        },
        {
          "id": "north-carolina-state-university-industrial-engineering-bs--5g77bd45",
          "name": "Industrial Engineering (BS)",
          "confidence": "verified"
        },
        {
          "id": "north-carolina-state-university-materials-science-engineering-bs--np0pjtqo",
          "name": "Materials Science & Engineering (BS)",
          "confidence": "verified"
        },
        {
          "id": "north-carolina-state-university-mechanical-engineering-bs--jr8y95u0",
          "name": "Mechanical Engineering (BS)",
          "confidence": "verified"
        },
        {
          "id": "north-carolina-state-university-nuclear-engineering-bs--xrzqf01k",
          "name": "Nuclear Engineering (BS)",
          "confidence": "verified"
        },
        {
          "id": "north-carolina-state-university-paper-science-engineering-bs--n7m9f08c",
          "name": "Paper Science & Engineering (BS)",
          "confidence": "verified"
        },
        {
          "id": "north-carolina-state-university-textile-engineering-bs--aannf6jc",
          "name": "Textile Engineering (BS)",
          "confidence": "verified"
        }
      ]
    },
    {
      "id": "university-of-pittsburgh-4e7a892b",
      "name": "University of Pittsburgh",
      "shortName": "Pitt",
      "majors": [
        {
          "id": "university-of-pittsburgh-4e7a892b-computer-science-genuine",
          "name": "Computer Science",
          "confidence": "verified"
        },
        {
          "id": "university-of-pittsburgh-4e7a892b-data-science-genuine",
          "name": "Data Science",
          "confidence": "verified"
        },
        {
          "id": "university-of-pittsburgh-4e7a892b-information-technology-genuine",
          "name": "Information Technology",
          "confidence": "verified"
        },
        {
          "id": "university-of-pittsburgh-4e7a892b-computer-engineering-genuine",
          "name": "Computer Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-pittsburgh-4e7a892b-electrical-engineering-genuine",
          "name": "Electrical Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-pittsburgh-4e7a892b-mechanical-engineering-genuine",
          "name": "Mechanical Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-pittsburgh-4e7a892b-civil-engineering-genuine",
          "name": "Civil Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-pittsburgh-4e7a892b-chemical-engineering-genuine",
          "name": "Chemical Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-pittsburgh-4e7a892b-biomedical-engineering-genuine",
          "name": "Biomedical Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-pittsburgh-4e7a892b-industrial-engineering-genuine",
          "name": "Industrial Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-pittsburgh-4e7a892b-aerospace-engineering-genuine",
          "name": "Aerospace Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-pittsburgh-4e7a892b-business-administration-genuine",
          "name": "Business Administration",
          "confidence": "verified"
        },
        {
          "id": "university-of-pittsburgh-4e7a892b-finance-genuine",
          "name": "Finance",
          "confidence": "verified"
        },
        {
          "id": "university-of-pittsburgh-4e7a892b-accounting-genuine",
          "name": "Accounting",
          "confidence": "verified"
        },
        {
          "id": "university-of-pittsburgh-4e7a892b-marketing-genuine",
          "name": "Marketing",
          "confidence": "verified"
        },
        {
          "id": "university-of-pittsburgh-4e7a892b-management-genuine",
          "name": "Management",
          "confidence": "verified"
        },
        {
          "id": "university-of-pittsburgh-4e7a892b-economics-genuine",
          "name": "Economics",
          "confidence": "verified"
        },
        {
          "id": "university-of-pittsburgh-4e7a892b-psychology-genuine",
          "name": "Psychology",
          "confidence": "verified"
        },
        {
          "id": "university-of-pittsburgh-4e7a892b-political-science-genuine",
          "name": "Political Science",
          "confidence": "verified"
        },
        {
          "id": "university-of-pittsburgh-4e7a892b-sociology-genuine",
          "name": "Sociology",
          "confidence": "verified"
        },
        {
          "id": "university-of-pittsburgh-4e7a892b-history-genuine",
          "name": "History",
          "confidence": "verified"
        },
        {
          "id": "university-of-pittsburgh-4e7a892b-english-genuine",
          "name": "English",
          "confidence": "verified"
        },
        {
          "id": "university-of-pittsburgh-4e7a892b-communications-genuine",
          "name": "Communications",
          "confidence": "verified"
        },
        {
          "id": "university-of-pittsburgh-4e7a892b-biology-genuine",
          "name": "Biology",
          "confidence": "verified"
        },
        {
          "id": "university-of-pittsburgh-4e7a892b-biochemistry-genuine",
          "name": "Biochemistry",
          "confidence": "verified"
        },
        {
          "id": "university-of-pittsburgh-4e7a892b-chemistry-genuine",
          "name": "Chemistry",
          "confidence": "verified"
        },
        {
          "id": "university-of-pittsburgh-4e7a892b-physics-genuine",
          "name": "Physics",
          "confidence": "verified"
        },
        {
          "id": "university-of-pittsburgh-4e7a892b-mathematics-genuine",
          "name": "Mathematics",
          "confidence": "verified"
        },
        {
          "id": "university-of-pittsburgh-4e7a892b-statistics-genuine",
          "name": "Statistics",
          "confidence": "verified"
        },
        {
          "id": "university-of-pittsburgh-4e7a892b-public-health-genuine",
          "name": "Public Health",
          "confidence": "verified"
        },
        {
          "id": "university-of-pittsburgh-4e7a892b-nursing-genuine",
          "name": "Nursing",
          "confidence": "verified"
        },
        {
          "id": "university-of-pittsburgh-4e7a892b-international-relations-genuine",
          "name": "International Relations",
          "confidence": "verified"
        },
        {
          "id": "university-of-pittsburgh-4e7a892b-philosophy-genuine",
          "name": "Philosophy",
          "confidence": "verified"
        },
        {
          "id": "university-of-pittsburgh-bioengineering-bs--hdawxwt0",
          "name": "Bioengineering (BS)",
          "confidence": "verified"
        },
        {
          "id": "university-of-pittsburgh-chemical-engineering-bs--c81430zp",
          "name": "Chemical Engineering (BS)",
          "confidence": "verified"
        },
        {
          "id": "university-of-pittsburgh-civil-engineering-bs--5hbsujxw",
          "name": "Civil Engineering (BS)",
          "confidence": "verified"
        },
        {
          "id": "university-of-pittsburgh-computer-engineering-bs--f8e70x6w",
          "name": "Computer Engineering (BS)",
          "confidence": "verified"
        },
        {
          "id": "university-of-pittsburgh-computer-science-bs--9h7k5wk8",
          "name": "Computer Science (BS)",
          "confidence": "verified"
        },
        {
          "id": "university-of-pittsburgh-electrical-engineering-bs--hcn7xdp0",
          "name": "Electrical Engineering (BS)",
          "confidence": "verified"
        },
        {
          "id": "university-of-pittsburgh-engineering-science-bs--f2eobfmg",
          "name": "Engineering Science (BS)",
          "confidence": "verified"
        },
        {
          "id": "university-of-pittsburgh-environmental-engineering-bs--s7darhrw",
          "name": "Environmental Engineering (BS)",
          "confidence": "verified"
        },
        {
          "id": "university-of-pittsburgh-industrial-engineering-bs--fqk4pr1w",
          "name": "Industrial Engineering (BS)",
          "confidence": "verified"
        },
        {
          "id": "university-of-pittsburgh-materials-science-and-engineering-bs--lugg8eke",
          "name": "Materials Science and Engineering (BS)",
          "confidence": "verified"
        },
        {
          "id": "university-of-pittsburgh-mechanical-engineering-bs--3owdg6aq",
          "name": "Mechanical Engineering (BS)",
          "confidence": "verified"
        }
      ]
    },
    {
      "id": "university-of-utah-1b3c5d7e",
      "name": "University of Utah",
      "shortName": "U of U",
      "majors": [
        {
          "id": "university-of-utah-1b3c5d7e-computer-science-genuine",
          "name": "Computer Science",
          "confidence": "verified"
        },
        {
          "id": "university-of-utah-1b3c5d7e-data-science-genuine",
          "name": "Data Science",
          "confidence": "verified"
        },
        {
          "id": "university-of-utah-1b3c5d7e-information-technology-genuine",
          "name": "Information Technology",
          "confidence": "verified"
        },
        {
          "id": "university-of-utah-1b3c5d7e-computer-engineering-genuine",
          "name": "Computer Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-utah-1b3c5d7e-electrical-engineering-genuine",
          "name": "Electrical Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-utah-1b3c5d7e-mechanical-engineering-genuine",
          "name": "Mechanical Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-utah-1b3c5d7e-civil-engineering-genuine",
          "name": "Civil Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-utah-1b3c5d7e-chemical-engineering-genuine",
          "name": "Chemical Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-utah-1b3c5d7e-biomedical-engineering-genuine",
          "name": "Biomedical Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-utah-1b3c5d7e-industrial-engineering-genuine",
          "name": "Industrial Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-utah-1b3c5d7e-aerospace-engineering-genuine",
          "name": "Aerospace Engineering",
          "confidence": "verified"
        },
        {
          "id": "university-of-utah-1b3c5d7e-business-administration-genuine",
          "name": "Business Administration",
          "confidence": "verified"
        },
        {
          "id": "university-of-utah-1b3c5d7e-finance-genuine",
          "name": "Finance",
          "confidence": "verified"
        },
        {
          "id": "university-of-utah-1b3c5d7e-accounting-genuine",
          "name": "Accounting",
          "confidence": "verified"
        },
        {
          "id": "university-of-utah-1b3c5d7e-marketing-genuine",
          "name": "Marketing",
          "confidence": "verified"
        },
        {
          "id": "university-of-utah-1b3c5d7e-management-genuine",
          "name": "Management",
          "confidence": "verified"
        },
        {
          "id": "university-of-utah-1b3c5d7e-economics-genuine",
          "name": "Economics",
          "confidence": "verified"
        },
        {
          "id": "university-of-utah-1b3c5d7e-psychology-genuine",
          "name": "Psychology",
          "confidence": "verified"
        },
        {
          "id": "university-of-utah-1b3c5d7e-political-science-genuine",
          "name": "Political Science",
          "confidence": "verified"
        },
        {
          "id": "university-of-utah-1b3c5d7e-sociology-genuine",
          "name": "Sociology",
          "confidence": "verified"
        },
        {
          "id": "university-of-utah-1b3c5d7e-history-genuine",
          "name": "History",
          "confidence": "verified"
        },
        {
          "id": "university-of-utah-1b3c5d7e-english-genuine",
          "name": "English",
          "confidence": "verified"
        },
        {
          "id": "university-of-utah-1b3c5d7e-communications-genuine",
          "name": "Communications",
          "confidence": "verified"
        },
        {
          "id": "university-of-utah-1b3c5d7e-biology-genuine",
          "name": "Biology",
          "confidence": "verified"
        },
        {
          "id": "university-of-utah-1b3c5d7e-biochemistry-genuine",
          "name": "Biochemistry",
          "confidence": "verified"
        },
        {
          "id": "university-of-utah-1b3c5d7e-chemistry-genuine",
          "name": "Chemistry",
          "confidence": "verified"
        },
        {
          "id": "university-of-utah-1b3c5d7e-physics-genuine",
          "name": "Physics",
          "confidence": "verified"
        },
        {
          "id": "university-of-utah-1b3c5d7e-mathematics-genuine",
          "name": "Mathematics",
          "confidence": "verified"
        },
        {
          "id": "university-of-utah-1b3c5d7e-statistics-genuine",
          "name": "Statistics",
          "confidence": "verified"
        },
        {
          "id": "university-of-utah-1b3c5d7e-public-health-genuine",
          "name": "Public Health",
          "confidence": "verified"
        },
        {
          "id": "university-of-utah-1b3c5d7e-nursing-genuine",
          "name": "Nursing",
          "confidence": "verified"
        },
        {
          "id": "university-of-utah-1b3c5d7e-international-relations-genuine",
          "name": "International Relations",
          "confidence": "verified"
        },
        {
          "id": "university-of-utah-1b3c5d7e-philosophy-genuine",
          "name": "Philosophy",
          "confidence": "verified"
        },
        {
          "id": "university-of-utah-biomedical-engineering-bs--rdkxwlro",
          "name": "Biomedical Engineering (BS)",
          "confidence": "verified"
        },
        {
          "id": "university-of-utah-chemical-engineering-bs--rjkufuvc",
          "name": "Chemical Engineering (BS)",
          "confidence": "verified"
        },
        {
          "id": "university-of-utah-civil-engineering-bs--ayo9kdlb",
          "name": "Civil Engineering (BS)",
          "confidence": "verified"
        },
        {
          "id": "university-of-utah-computer-engineering-bs--sqxi8mam",
          "name": "Computer Engineering (BS)",
          "confidence": "verified"
        },
        {
          "id": "university-of-utah-computer-science-bs--6uwjufpg",
          "name": "Computer Science (BS)",
          "confidence": "verified"
        },
        {
          "id": "university-of-utah-construction-engineering-bs--c6vtgmkz",
          "name": "Construction Engineering (BS)",
          "confidence": "verified"
        },
        {
          "id": "university-of-utah-data-science-bs--juy9ndi6",
          "name": "Data Science (BS)",
          "confidence": "verified"
        },
        {
          "id": "university-of-utah-electrical-engineering-bs--2t2c33id",
          "name": "Electrical Engineering (BS)",
          "confidence": "verified"
        },
        {
          "id": "university-of-utah-materials-science-and-engineering-bs--jqtqndhi",
          "name": "Materials Science and Engineering (BS)",
          "confidence": "verified"
        },
        {
          "id": "university-of-utah-mechanical-engineering-bs--qybydxpz",
          "name": "Mechanical Engineering (BS)",
          "confidence": "verified"
        },
        {
          "id": "university-of-utah-software-development-bs--iiiztizg",
          "name": "Software Development (BS)",
          "confidence": "verified"
        }
      ]
    },
    {
      "id": "drexel-university-5a6b7c8d",
      "name": "Drexel University",
      "shortName": "Drexel",
      "majors": [
        {
          "id": "drexel-university-5a6b7c8d-computer-science-genuine",
          "name": "Computer Science",
          "confidence": "verified"
        },
        {
          "id": "drexel-university-5a6b7c8d-data-science-genuine",
          "name": "Data Science",
          "confidence": "verified"
        },
        {
          "id": "drexel-university-5a6b7c8d-information-technology-genuine",
          "name": "Information Technology",
          "confidence": "verified"
        },
        {
          "id": "drexel-university-computer-engineering-v9m4cyja",
          "name": "Computer Engineering",
          "confidence": "verified"
        },
        {
          "id": "drexel-university-electrical-engineering-gs1wmggv",
          "name": "Electrical Engineering",
          "confidence": "verified"
        },
        {
          "id": "drexel-university-mechanical-engineering-6al8ifw2",
          "name": "Mechanical Engineering",
          "confidence": "verified"
        },
        {
          "id": "drexel-university-civil-engineering-ht5furtz",
          "name": "Civil Engineering",
          "confidence": "verified"
        },
        {
          "id": "drexel-university-chemical-engineering-pp6hw7ul",
          "name": "Chemical Engineering",
          "confidence": "verified"
        },
        {
          "id": "drexel-university-5a6b7c8d-biomedical-engineering-genuine",
          "name": "Biomedical Engineering",
          "confidence": "verified"
        },
        {
          "id": "drexel-university-5a6b7c8d-industrial-engineering-genuine",
          "name": "Industrial Engineering",
          "confidence": "verified"
        },
        {
          "id": "drexel-university-5a6b7c8d-aerospace-engineering-genuine",
          "name": "Aerospace Engineering",
          "confidence": "verified"
        },
        {
          "id": "drexel-university-5a6b7c8d-business-administration-genuine",
          "name": "Business Administration",
          "confidence": "verified"
        },
        {
          "id": "drexel-university-5a6b7c8d-finance-genuine",
          "name": "Finance",
          "confidence": "verified"
        },
        {
          "id": "drexel-university-5a6b7c8d-accounting-genuine",
          "name": "Accounting",
          "confidence": "verified"
        },
        {
          "id": "drexel-university-5a6b7c8d-marketing-genuine",
          "name": "Marketing",
          "confidence": "verified"
        },
        {
          "id": "drexel-university-5a6b7c8d-management-genuine",
          "name": "Management",
          "confidence": "verified"
        },
        {
          "id": "drexel-university-5a6b7c8d-economics-genuine",
          "name": "Economics",
          "confidence": "verified"
        },
        {
          "id": "drexel-university-5a6b7c8d-psychology-genuine",
          "name": "Psychology",
          "confidence": "verified"
        },
        {
          "id": "drexel-university-5a6b7c8d-political-science-genuine",
          "name": "Political Science",
          "confidence": "verified"
        },
        {
          "id": "drexel-university-5a6b7c8d-sociology-genuine",
          "name": "Sociology",
          "confidence": "verified"
        },
        {
          "id": "drexel-university-5a6b7c8d-history-genuine",
          "name": "History",
          "confidence": "verified"
        },
        {
          "id": "drexel-university-5a6b7c8d-english-genuine",
          "name": "English",
          "confidence": "verified"
        },
        {
          "id": "drexel-university-5a6b7c8d-communications-genuine",
          "name": "Communications",
          "confidence": "verified"
        },
        {
          "id": "drexel-university-5a6b7c8d-biology-genuine",
          "name": "Biology",
          "confidence": "verified"
        },
        {
          "id": "drexel-university-5a6b7c8d-biochemistry-genuine",
          "name": "Biochemistry",
          "confidence": "verified"
        },
        {
          "id": "drexel-university-5a6b7c8d-chemistry-genuine",
          "name": "Chemistry",
          "confidence": "verified"
        },
        {
          "id": "drexel-university-5a6b7c8d-physics-genuine",
          "name": "Physics",
          "confidence": "verified"
        },
        {
          "id": "drexel-university-5a6b7c8d-mathematics-genuine",
          "name": "Mathematics",
          "confidence": "verified"
        },
        {
          "id": "drexel-university-5a6b7c8d-statistics-genuine",
          "name": "Statistics",
          "confidence": "verified"
        },
        {
          "id": "drexel-university-5a6b7c8d-public-health-genuine",
          "name": "Public Health",
          "confidence": "verified"
        },
        {
          "id": "drexel-university-5a6b7c8d-nursing-genuine",
          "name": "Nursing",
          "confidence": "verified"
        },
        {
          "id": "drexel-university-5a6b7c8d-international-relations-genuine",
          "name": "International Relations",
          "confidence": "verified"
        },
        {
          "id": "drexel-university-5a6b7c8d-philosophy-genuine",
          "name": "Philosophy",
          "confidence": "verified"
        },
        {
          "id": "drexel-university-architectural-engineering-ly8cmny1",
          "name": "Architectural Engineering",
          "confidence": "verified"
        },
        {
          "id": "drexel-university-construction-management-wh6x3glb",
          "name": "Construction Management",
          "confidence": "verified"
        },
        {
          "id": "drexel-university-engineering-technology-4eg0bbxl",
          "name": "Engineering Technology",
          "confidence": "verified"
        },
        {
          "id": "drexel-university-environmental-engineering-ftt3iva2",
          "name": "Environmental Engineering",
          "confidence": "verified"
        },
        {
          "id": "drexel-university-materials-science-and-engineering-4zns9wjp",
          "name": "Materials Science and Engineering",
          "confidence": "verified"
        }
      ]
    },
    {
      "id": "iowa-state-university-7a8b9c0d",
      "name": "Iowa State University",
      "shortName": "ISU",
      "majors": [
        {
          "id": "iowa-state-university-7a8b9c0d-computer-science-genuine",
          "name": "Computer Science",
          "confidence": "verified"
        },
        {
          "id": "iowa-state-university-7a8b9c0d-data-science-genuine",
          "name": "Data Science",
          "confidence": "verified"
        },
        {
          "id": "iowa-state-university-7a8b9c0d-information-technology-genuine",
          "name": "Information Technology",
          "confidence": "verified"
        },
        {
          "id": "iowa-state-university-computer-engineering-2429pwch",
          "name": "Computer Engineering",
          "confidence": "verified"
        },
        {
          "id": "iowa-state-university-electrical-engineering-q0uaxq1r",
          "name": "Electrical Engineering",
          "confidence": "verified"
        },
        {
          "id": "iowa-state-university-mechanical-engineering-y6y9q8ek",
          "name": "Mechanical Engineering",
          "confidence": "verified"
        },
        {
          "id": "iowa-state-university-civil-engineering-25xzfxxt",
          "name": "Civil Engineering",
          "confidence": "verified"
        },
        {
          "id": "iowa-state-university-chemical-engineering-oeilou7w",
          "name": "Chemical Engineering",
          "confidence": "verified"
        },
        {
          "id": "iowa-state-university-biomedical-engineering-6ifbay3h",
          "name": "Biomedical Engineering",
          "confidence": "verified"
        },
        {
          "id": "iowa-state-university-industrial-engineering-c0iwyum5",
          "name": "Industrial Engineering",
          "confidence": "verified"
        },
        {
          "id": "iowa-state-university-aerospace-engineering-vcd7hqdc",
          "name": "Aerospace Engineering",
          "confidence": "verified"
        },
        {
          "id": "iowa-state-university-7a8b9c0d-business-administration-genuine",
          "name": "Business Administration",
          "confidence": "verified"
        },
        {
          "id": "iowa-state-university-7a8b9c0d-finance-genuine",
          "name": "Finance",
          "confidence": "verified"
        },
        {
          "id": "iowa-state-university-7a8b9c0d-accounting-genuine",
          "name": "Accounting",
          "confidence": "verified"
        },
        {
          "id": "iowa-state-university-7a8b9c0d-marketing-genuine",
          "name": "Marketing",
          "confidence": "verified"
        },
        {
          "id": "iowa-state-university-7a8b9c0d-management-genuine",
          "name": "Management",
          "confidence": "verified"
        },
        {
          "id": "iowa-state-university-7a8b9c0d-economics-genuine",
          "name": "Economics",
          "confidence": "verified"
        },
        {
          "id": "iowa-state-university-7a8b9c0d-psychology-genuine",
          "name": "Psychology",
          "confidence": "verified"
        },
        {
          "id": "iowa-state-university-7a8b9c0d-political-science-genuine",
          "name": "Political Science",
          "confidence": "verified"
        },
        {
          "id": "iowa-state-university-7a8b9c0d-sociology-genuine",
          "name": "Sociology",
          "confidence": "verified"
        },
        {
          "id": "iowa-state-university-7a8b9c0d-history-genuine",
          "name": "History",
          "confidence": "verified"
        },
        {
          "id": "iowa-state-university-7a8b9c0d-english-genuine",
          "name": "English",
          "confidence": "verified"
        },
        {
          "id": "iowa-state-university-7a8b9c0d-communications-genuine",
          "name": "Communications",
          "confidence": "verified"
        },
        {
          "id": "iowa-state-university-7a8b9c0d-biology-genuine",
          "name": "Biology",
          "confidence": "verified"
        },
        {
          "id": "iowa-state-university-7a8b9c0d-biochemistry-genuine",
          "name": "Biochemistry",
          "confidence": "verified"
        },
        {
          "id": "iowa-state-university-7a8b9c0d-chemistry-genuine",
          "name": "Chemistry",
          "confidence": "verified"
        },
        {
          "id": "iowa-state-university-7a8b9c0d-physics-genuine",
          "name": "Physics",
          "confidence": "verified"
        },
        {
          "id": "iowa-state-university-7a8b9c0d-mathematics-genuine",
          "name": "Mathematics",
          "confidence": "verified"
        },
        {
          "id": "iowa-state-university-7a8b9c0d-statistics-genuine",
          "name": "Statistics",
          "confidence": "verified"
        },
        {
          "id": "iowa-state-university-7a8b9c0d-public-health-genuine",
          "name": "Public Health",
          "confidence": "verified"
        },
        {
          "id": "iowa-state-university-7a8b9c0d-nursing-genuine",
          "name": "Nursing",
          "confidence": "verified"
        },
        {
          "id": "iowa-state-university-7a8b9c0d-international-relations-genuine",
          "name": "International Relations",
          "confidence": "verified"
        },
        {
          "id": "iowa-state-university-7a8b9c0d-philosophy-genuine",
          "name": "Philosophy",
          "confidence": "verified"
        },
        {
          "id": "iowa-state-university-agricultural-engineering-732rq0rn",
          "name": "Agricultural Engineering",
          "confidence": "verified"
        },
        {
          "id": "iowa-state-university-biological-systems-engineering-68343r19",
          "name": "Biological Systems Engineering",
          "confidence": "verified"
        },
        {
          "id": "iowa-state-university-construction-engineering-gnslffiq",
          "name": "Construction Engineering",
          "confidence": "verified"
        },
        {
          "id": "iowa-state-university-cyber-security-engineering-f6prkbdz",
          "name": "Cyber Security Engineering",
          "confidence": "verified"
        },
        {
          "id": "iowa-state-university-environmental-engineering-9yhyqs55",
          "name": "Environmental Engineering",
          "confidence": "verified"
        },
        {
          "id": "iowa-state-university-materials-engineering-nnod2ean",
          "name": "Materials Engineering",
          "confidence": "verified"
        },
        {
          "id": "iowa-state-university-software-engineering-qotqg38c",
          "name": "Software Engineering",
          "confidence": "verified"
        }
      ]
    },
    {
      "id": "ucla",
      "name": "UCLA",
      "shortName": "UCLA",
      "majors": [
        {
          "id": "ucla-computer-science",
          "name": "Computer Science",
          "confidence": "verified"
        },
        {
          "id": "ucla-computer-science-and-engineering",
          "name": "Computer Science and Engineering",
          "confidence": "verified"
        },
        {
          "id": "ucla-computer-engineering",
          "name": "Computer Engineering",
          "confidence": "verified"
        },
        {
          "id": "ucla-electrical-engineering",
          "name": "Electrical Engineering",
          "confidence": "verified"
        },
        {
          "id": "ucla-mechanical-engineering",
          "name": "Mechanical Engineering",
          "confidence": "verified"
        },
        {
          "id": "ucla-aerospace-engineering",
          "name": "Aerospace Engineering",
          "confidence": "verified"
        },
        {
          "id": "ucla-civil-engineering",
          "name": "Civil Engineering",
          "confidence": "verified"
        },
        {
          "id": "ucla-chemical-engineering",
          "name": "Chemical Engineering",
          "confidence": "verified"
        },
        {
          "id": "ucla-bioengineering",
          "name": "Bioengineering",
          "confidence": "verified"
        },
        {
          "id": "ucla-business-economics",
          "name": "Business Economics",
          "confidence": "verified"
        },
        {
          "id": "ucla-economics",
          "name": "Economics",
          "confidence": "verified"
        },
        {
          "id": "ucla-psychology",
          "name": "Psychology",
          "confidence": "verified"
        }
      ]
    },
    {
      "id": "uc-davis",
      "name": "UC Davis",
      "shortName": "UC Davis",
      "majors": [
        {
          "id": "uc-davis-computer-science",
          "name": "Computer Science",
          "confidence": "verified"
        },
        {
          "id": "uc-davis-computer-science-and-engineering",
          "name": "Computer Science and Engineering",
          "confidence": "verified"
        },
        {
          "id": "uc-davis-computer-engineering",
          "name": "Computer Engineering",
          "confidence": "verified"
        },
        {
          "id": "uc-davis-managerial-economics",
          "name": "Managerial Economics",
          "confidence": "verified"
        },
        {
          "id": "uc-davis-psychology",
          "name": "Psychology",
          "confidence": "verified"
        },
        {
          "id": "uc-davis-mechanical-engineering",
          "name": "Mechanical Engineering",
          "confidence": "verified"
        },
        {
          "id": "uc-davis-electrical-engineering",
          "name": "Electrical Engineering",
          "confidence": "verified"
        },
        {
          "id": "uc-davis-biotechnology",
          "name": "Biotechnology",
          "confidence": "verified"
        },
        {
          "id": "uc-davis-cognitive-science",
          "name": "Cognitive Science",
          "confidence": "verified"
        }
      ]
    },
    {
      "id": "uc-santa-barbara",
      "name": "UC Santa Barbara",
      "shortName": "UC Santa Barbara",
      "majors": [
        {
          "id": "uc-santa-barbara-computer-science",
          "name": "Computer Science",
          "confidence": "verified"
        },
        {
          "id": "uc-santa-barbara-computer-engineering",
          "name": "Computer Engineering",
          "confidence": "verified"
        },
        {
          "id": "uc-santa-barbara-electrical-engineering",
          "name": "Electrical Engineering",
          "confidence": "verified"
        },
        {
          "id": "uc-santa-barbara-mechanical-engineering",
          "name": "Mechanical Engineering",
          "confidence": "verified"
        },
        {
          "id": "uc-santa-barbara-economics",
          "name": "Economics",
          "confidence": "verified"
        },
        {
          "id": "uc-santa-barbara-financial-mathematics-and-statistics",
          "name": "Financial Mathematics and Statistics",
          "confidence": "verified"
        },
        {
          "id": "uc-santa-barbara-psychology",
          "name": "Psychology",
          "confidence": "verified"
        },
        {
          "id": "uc-santa-barbara-actuarial-science",
          "name": "Actuarial Science",
          "confidence": "verified"
        }
      ]
    },
    {
      "id": "uc-santa-cruz",
      "name": "UC Santa Cruz",
      "shortName": "UC Santa Cruz",
      "majors": [
        {
          "id": "uc-santa-cruz-computer-science",
          "name": "Computer Science",
          "confidence": "verified"
        },
        {
          "id": "uc-santa-cruz-computer-engineering",
          "name": "Computer Engineering",
          "confidence": "verified"
        },
        {
          "id": "uc-santa-cruz-technology-and-information-management",
          "name": "Technology and Information Management",
          "confidence": "verified"
        },
        {
          "id": "uc-santa-cruz-network-and-digital-technology",
          "name": "Network and Digital Technology",
          "confidence": "verified"
        },
        {
          "id": "uc-santa-cruz-cognitive-science",
          "name": "Cognitive Science",
          "confidence": "verified"
        },
        {
          "id": "uc-santa-cruz-psychology",
          "name": "Psychology",
          "confidence": "verified"
        }
      ]
    },
    {
      "id": "uc-riverside",
      "name": "UC Riverside",
      "shortName": "UC Riverside",
      "majors": [
        {
          "id": "uc-riverside-computer-science",
          "name": "Computer Science",
          "confidence": "verified"
        },
        {
          "id": "uc-riverside-computer-engineering",
          "name": "Computer Engineering",
          "confidence": "verified"
        },
        {
          "id": "uc-riverside-business-administration",
          "name": "Business Administration",
          "confidence": "verified"
        },
        {
          "id": "uc-riverside-business-economics",
          "name": "Business Economics",
          "confidence": "verified"
        },
        {
          "id": "uc-riverside-mechanical-engineering",
          "name": "Mechanical Engineering",
          "confidence": "verified"
        },
        {
          "id": "uc-riverside-electrical-engineering",
          "name": "Electrical Engineering",
          "confidence": "verified"
        }
      ]
    },
    {
      "id": "uc-merced",
      "name": "UC Merced",
      "shortName": "UC Merced",
      "majors": [
        {
          "id": "uc-merced-computer-science-and-engineering",
          "name": "Computer Science and Engineering",
          "confidence": "verified"
        },
        {
          "id": "uc-merced-mechanical-engineering",
          "name": "Mechanical Engineering",
          "confidence": "verified"
        },
        {
          "id": "uc-merced-management-and-business-economics",
          "name": "Management and Business Economics",
          "confidence": "verified"
        },
        {
          "id": "uc-merced-psychology",
          "name": "Psychology",
          "confidence": "verified"
        },
        {
          "id": "uc-merced-bioengineering",
          "name": "Bioengineering",
          "confidence": "verified"
        }
      ]
    }
  ]
};
