// Portfolio content. Resume-aligned updates: November 2026.

export const certifications = [
  {
    "title": "Python for Data Science",
    "issuer": "NPTEL · IIT Madras",
    "period": "2026",
    "detail": "Elite certificate, 73% consolidated score.",
    "href": "https://drive.google.com/file/d/1YVfMvJWusiEF17uvg8fSDH5nHGTTBvPC/view?usp=sharing"
  },
  {
    "title": "Deep Learning A–Z: AI, Python, AWS & LLMs",
    "issuer": "Udemy",
    "period": "",
    "detail": "Deep learning architectures, applied AI workflows and LLM foundations.",
    "href": "https://github.com/Nik30codes/machine-learning",
    "hrefLabel": "Course notes"
  }
];

export const education = [
  {
    "qualification": "B.Tech, Information Technology",
    "place": "Manipal University Jaipur",
    "period": "Aug 2024 — Aug 2028",
    "detail": "Jaipur, India · Coursework: Data Structures & Algorithms, OOP, DBMS, Operating Systems and C Programming"
  },
  {
    "qualification": "Class 12, Science (PCM)",
    "place": "Tagore Public School",
    "period": "Apr 2023",
    "detail": "Prayagraj, India"
  }
];

export const experience = [
  {
    "role": "Full Stack Web Development Intern",
    "org": "Blend Vidya EdTech",
    "period": "Dec 2025 — Feb 2026",
    "bullets": [
      "Built an Attendance & Performance Tracking System in React 19, Express 5 and MongoDB Atlas, with role-scoped Admin, Manager and Employee dashboards for attendance sessions, department and user management.",
      "Implemented JWT access and refresh token authentication, enforcing role-scoped permissions across all three dashboard types.",
      "Built REST API endpoints and comparison-chart performance views that replaced managers’ manual spreadsheet reporting.",
      "Built a reusable React component library that standardized the UI and removed duplicated markup across dashboards; collaborated through Git feature branching, pull requests and code review."
    ],
    "project": {
      "name": "Attendance & Performance Tracking System",
      "blurb": "Full stack employee management platform built during the internship. Role-based Admin, Manager and Employee dashboards, attendance sessions, performance metrics with comparison charts, and department and user management. React 19, Express 5, MongoDB Atlas, JWT access and refresh tokens.",
      "href": "https://github.com/Nik30codes/attendence-performance-tracking"
    }
  }
];

export const interests = [
  "Web Development",
  "Machine Learning",
  "Applied AI",
  "System Design",
  "Problem Solving",
  "Fitness"
];

export const languages = [
  {
    "name": "English",
    "level": "Fluent"
  },
  {
    "name": "Hindi",
    "level": "Native"
  }
];

export const marqueeItems = [
  "NIKUNJ BHALLA",
  "AI / ML",
  "FULL STACK",
  "LLM INTEGRATION"
];

export const metrics = [
  {
    "value": "300+",
    "label": "LeetCode problems solved"
  },
  {
    "value": "3 months",
    "label": "Professional full-stack experience"
  },
  {
    "value": "501",
    "label": "Subjects in MRI cross-validation"
  },
  {
    "value": "Elite",
    "label": "NPTEL, IIT Madras"
  }
];

export const profile = {
  "name": "Nikunj Bhalla",
  "initial": "N",
  "role": "AI/ML Engineering · Full-Stack Development · LLM Integration",
  "tagline": "I build machine learning pipelines, full-stack applications and local LLM tools.",
  "location": "Jaipur, Rajasthan, India",
  "email": "nikunjbhalla2005@gmail.com",
  "summary": "I’m a B.Tech Information Technology student at Manipal University Jaipur, graduating in 2028, with three months of professional full-stack experience. My work spans medical image classification, patient-level model evaluation and local LLM retrieval, alongside React and Node.js applications. I work with Python, PyTorch and Scikit-learn, and have solved 300+ LeetCode problems. I’m seeking an AI/ML Engineer Internship for Winter 2026–27.",
  "links": {
    "github": "https://github.com/Nik30codes",
    "linkedin": "https://www.linkedin.com/in/nikunjbhalla/",
    "leetcode": "https://leetcode.com/u/Nikcodes30/",
    "resume": "/Nikunj_Bhalla_Resume_Updated.docx"
  }
};

export const projects = [
  {
    "title": "Alzheimer’s Detection from Brain MRI (ADNI)",
    "period": "Aug — Oct 2026",
    "kind": "Independent research · Conference paper under review",
    "problem": "Evaluate Alzheimer’s classification on real clinical MRI scans with patient-disjoint validation, while investigating subject leakage, scanner-era confounding and acquisition differences.",
    "approach": "Built a PyTorch pipeline using 853 clinical MRI scans downloaded as raw DICOM from ADNI. Audited subject leakage, slice alignment and acquisition geometry, and compared mean pooling, gated attention MIL and class-conditional DCGAN augmentation across five patient-disjoint folds. Extended the FastAPI and React demo with patient-folder batch uploads, per-patient Grad-CAM, CSV export, three-model comparison and incomplete-scan checks. Integrated offline Qwen2.5 retrieval across seven explanation topics with source attribution and a retrieval-only fallback, keeping patient images and predictions local.",
    "result": "Reached 74.1% accuracy and ROC AUC 0.784 (95% CI 0.743–0.826) on 501 subjects under five-fold subject-level cross-validation. Cross-scanner AUC ranged from 0.68 to 0.79, and out-of-brain Grad-CAM attention fell from 77% to 34%. Retained the existing classifier after the MIL and augmentation experiments showed no supported performance improvement.",
    "stack": [
      "Python",
      "PyTorch",
      "FastAPI",
      "React",
      "Three.js",
      "Attention MIL",
      "DCGAN",
      "Qwen2.5",
      "RAG"
    ],
    "note": "Independent research project. The paper covering the confound audit and cross-validated results has been submitted to an academic conference and is under review.",
    "links": [
      {
        "text": "Live research demo",
        "href": "https://alzheimer-detection-site.onrender.com"
      },
      {
        "text": "Repository",
        "href": "https://github.com/Nik30codes/Alzheimer-detection-project"
      }
    ]
  },
  {
    "title": "Food Ordering System (Akio)",
    "period": "Jun 2026",
    "kind": "Full stack · team project",
    "problem": "A food ordering platform has two very different users — customers placing orders and staff managing them — and payment handling that has to be correct every time.",
    "approach": "Built the customer side end to end: a React 19 frontend consuming an Express 5 REST API with 82 endpoints across 20 route modules. Implemented JWT authentication in HTTP-only cookies, a token blacklist for logout, account lockout and Redis-backed rate limiting. Integrated Razorpay payments with webhook signature verification and Cloudinary image uploads over PostgreSQL, using parameterised queries and transactions on critical order paths. Hardened the API with Zod validation, input sanitisation, Helmet and HPP.",
    "result": "Delivered browse, autocomplete search, cart, checkout, order history and cancellation with automatic refund. Covered the stack with 28 passing automated tests across nine suites: nine backend tests with Vitest and Supertest, and 19 frontend tests with Vitest and React Testing Library. Verified the responsive interface on desktop, tablet and mobile.",
    "stack": [
      "React 19",
      "Node.js",
      "Express 5",
      "PostgreSQL",
      "JWT",
      "Razorpay",
      "Zod",
      "Cloudinary",
      "Tailwind CSS",
      "Redis",
      "Vitest",
      "Supertest",
      "React Testing Library"
    ],
    "note": "Team project — I built the customer side, frontend and backend. The admin panel was built by a teammate.",
    "links": [
      {
        "text": "Live site",
        "href": "https://food-ordering-system-five-pi.vercel.app/"
      },
      {
        "text": "Repository",
        "href": "https://github.com/Nik30codes/Food-ordering-system"
      }
    ]
  },
  {
    "title": "PocketBuddy — AI Financial & Wellness Assistant",
    "period": "Jun 2026",
    "kind": "Hackathon · HackOn with Amazon",
    "problem": "Students manage money, sleep, food and stress as four disconnected problems. A budgeting app tracks spending, a fitness app tracks steps, a journal tracks mood — none of them connect the dots, so overspending and burnout only become visible once the damage is done.",
    "approach": "Built in 48 hours with a teammate. A FastAPI and async SQLAlchemy backend over a 14-table PostgreSQL schema, containerised with Docker behind JWT auth, rate limiting and structured logging. The AI layer is a multi-provider orchestrator — Gemini 2.5 Flash as primary, Groq Llama 3.3 70B as fallback, and a rule-based local fallback so the app never hard-fails on an API outage — fronted by an intent classifier, context assembler and a memory engine that gives the chat long-term recall instead of a stateless prompt.",
    "result": "Expenses log by chat, manual entry or bill photo. Weighted scoring drives burnout detection and a financial wellness score, week-over-week spending-spike detection fires at a 25% threshold, and budget alerts trigger at 70, 85 and 95% utilisation — all rendered in a React and TypeScript dashboard.",
    "stack": [
      "React",
      "TypeScript",
      "FastAPI",
      "Python",
      "SQLAlchemy",
      "PostgreSQL",
      "Docker",
      "Gemini 2.5 Flash",
      "Groq Llama 3.3",
      "Zustand",
      "Recharts",
      "Tailwind CSS"
    ],
    "note": "Built with Bhavya Kundalia as team MoFu for HackOn with Amazon, a 48-hour hackathon.",
    "links": [
      {
        "text": "Live app",
        "href": "https://pocketbuddy-kz85-indol.vercel.app/"
      },
      {
        "text": "Repository",
        "href": "https://github.com/Nik30codes/Pocketbuddy"
      }
    ]
  }
];

export const skills = [
  {
    "group": "AI & machine learning",
    "items": [
      "PyTorch",
      "TensorFlow",
      "Keras",
      "CNN",
      "Transfer Learning",
      "Scikit-learn",
      "NumPy",
      "Pandas",
      "OpenCV",
      "Attention MIL",
      "DCGAN",
      "RAG",
      "Local LLMs",
      "Gemini API",
      "Groq",
      "Prompt Engineering"
    ]
  },
  {
    "group": "Frontend",
    "items": [
      "React 19",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS"
    ]
  },
  {
    "group": "Backend",
    "items": [
      "Node.js",
      "Express.js",
      "FastAPI",
      "SQLAlchemy",
      "REST API Design",
      "JWT & OAuth 2.0",
      "MVC Architecture",
      "Redis",
      "Webhooks",
      "Rate Limiting"
    ]
  },
  {
    "group": "Databases",
    "items": [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Schema Design",
      "SQL Migrations",
      "Query Indexing & Optimization"
    ]
  },
  {
    "group": "Languages",
    "items": [
      "JavaScript (ES6+)",
      "TypeScript",
      "Python",
      "Java",
      "C++",
      "C",
      "SQL",
      "PHP"
    ]
  },
  {
    "group": "Tools & practices",
    "items": [
      "Git",
      "GitHub",
      "Docker",
      "Vercel",
      "Postman",
      "Vitest",
      "Supertest",
      "React Testing Library",
      "Unit & Integration Testing",
      "Code Review",
      "Agile Collaboration"
    ]
  },
  {
    "group": "Core CS",
    "items": [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "DBMS",
      "Operating Systems",
      "System Design",
      "Web Security"
    ]
  }
];
