// All site copy lives here. Edit this file, not the components.

export const profile = {
  name: "Nikunj Bhalla",
  initial: "N",
  role: "Full Stack Developer · Software Engineer",
  tagline: "I build web applications that hold up, and models that earn their accuracy.",
  location: "Prayagraj, India",
  email: "nikunjbhalla2005@gmail.com",
  summary:
    "B.Tech Information Technology student at Manipal University Jaipur with three months of professional full stack experience shipping production React and Node applications. I work in React 19, Node, Express 5, PostgreSQL, MongoDB, Python and TensorFlow — building web applications with real authentication, payments and test coverage rather than demo-grade scaffolding. My foundation is in data structures, algorithms, OOP and database design, sharpened through 200+ LeetCode problems.",
  links: {
    github: "https://github.com/Nik30codes",
    linkedin: "https://www.linkedin.com/in/nikunjbhalla/",
    leetcode: "https://leetcode.com/u/Nikcodes30/",
    resume:
      "https://drive.google.com/file/d/1BhhSxrDcqZHJ261etBbU1X05GpOFIcve/view?usp=sharing",
  },
};

// The four numbers a recruiter should retain after eight seconds on the page.
export const metrics = [
  { value: "200+", label: "LeetCode problems solved" },
  { value: "3", label: "Deployed full stack apps" },
  { value: "48 hr", label: "HackOn with Amazon build" },
  { value: "Elite", label: "NPTEL, IIT Madras" },
];

export const experience = [
  {
    role: "Full Stack Web Development Intern",
    org: "Blend Vidya EdTech",
    period: "Dec 2025 — Feb 2026",
    bullets: [
      "Built an Attendance & Performance Tracking System in React 19, Express 5 and MongoDB Atlas, with role-based Admin, Manager and Employee dashboards.",
      "Implemented JWT access and refresh token authentication, enforcing role-scoped permissions across all three dashboard types.",
      "Developed attendance sessions, performance metrics with comparison charts, and department and user management.",
      "Built reusable React components to keep interfaces scalable, maintainable and modular, and optimised rendering performance.",
      "Developed and integrated RESTful APIs with Node.js and Express.js, collaborating through Git feature branching and structured review workflows.",
    ],
    project: {
      name: "Attendance & Performance Tracking System",
      blurb:
        "Full stack employee management platform built during the internship. Role-based Admin, Manager and Employee dashboards, attendance sessions, performance metrics with comparison charts, and department and user management. React 19, Express 5, MongoDB Atlas, JWT access and refresh tokens.",
      href: "https://github.com/Nik30codes/attendence-performance-tracking",
    },
  },
];

export const projects = [
  {
    title: "PocketBuddy — AI Financial & Wellness Assistant",
    period: "Jun 2026",
    kind: "Hackathon · HackOn with Amazon",
    problem:
      "Students manage money, sleep, food and stress as four disconnected problems. A budgeting app tracks spending, a fitness app tracks steps, a journal tracks mood — none of them connect the dots, so overspending and burnout only become visible once the damage is done.",
    approach:
      "Built in 48 hours with a teammate. A FastAPI and async SQLAlchemy backend over a 14-table PostgreSQL schema, containerised with Docker behind JWT auth, rate limiting and structured logging. The AI layer is a multi-provider orchestrator — Gemini 2.5 Flash as primary, Groq Llama 3.3 70B as fallback, and a rule-based local fallback so the app never hard-fails on an API outage — fronted by an intent classifier, context assembler and a memory engine that gives the chat long-term recall instead of a stateless prompt.",
    result:
      "Expenses log by chat, manual entry or bill photo. Weighted scoring drives burnout detection and a financial wellness score, week-over-week spending-spike detection fires at a 25% threshold, and budget alerts trigger at 70, 85 and 95% utilisation — all rendered in a React and TypeScript dashboard.",
    stack: [
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
      "Tailwind CSS",
    ],
    note: "Built with Bhavya Kundalia as team MoFu for HackOn with Amazon, a 48-hour hackathon.",
    links: [
      {
        text: "Live app",
        href: "https://pocketbuddy-kz85-indol.vercel.app/",
      },
      {
        text: "Repository",
        href: "https://github.com/Nik30codes/Pocketbuddy",
      },
    ],
  },
  {
    title: "Deep Learning Alzheimer's Classification",
    period: "Mar 2026",
    kind: "Research",
    problem:
      "Four stages of Alzheimer's disease are hard to separate from raw brain MRI scans, and the early stages are the ones that matter most clinically.",
    approach:
      "Built a classification pipeline comparing a custom CNN against two transfer-learning backbones. Preprocessed scans with resizing, normalisation, categorical encoding and augmentation — rotation, flipping, zoom and brightness — to improve generalisation. Fine-tuned ImageNet-pretrained EfficientNetB0 and MobileNetV2 in two phases.",
    result:
      "MobileNetV2 reached 73.67% test accuracy, ahead of EfficientNetB0 at 69.33% and the custom CNN at 66.25%. Evaluated across accuracy, precision, recall, F1 and confusion matrices. The Very Mild and Mild Demented classes stayed the hardest to separate — the case for attention mechanisms and a larger dataset in the next pass.",
    stack: [
      "Python",
      "TensorFlow",
      "Keras",
      "CNN",
      "EfficientNetB0",
      "MobileNetV2",
      "OpenCV",
      "NumPy",
      "Pandas",
    ],
    note: "Written up as a research paper comparing all three architectures.",
    viz: "model-comparison",
    links: [],
  },
  {
    title: "Food Ordering System (Akio)",
    period: "Jun 2026",
    kind: "Full stack · team project",
    problem:
      "A food ordering platform has two very different users — customers placing orders and staff managing them — and payment handling that has to be correct every time.",
    approach:
      "Built the customer-facing side end to end: React 19 frontend and the Express API behind it. Implemented JWT auth in HTTP-only cookies with a token blacklist for real logout, Zod schema validation, input sanitisation, rate limiting and account lockout on repeated failed logins. Integrated Razorpay for payments with webhook signature verification, and Cloudinary for image upload, against a PostgreSQL schema with parameterised queries and transactions on the critical paths.",
    result:
      "A responsive ordering flow — browse, search with autocomplete, cart, checkout, order history and cancellation with automatic refund — on a backend with layered security rather than an afterthought login screen.",
    stack: [
      "React 19",
      "Node.js",
      "Express 5",
      "PostgreSQL",
      "JWT",
      "Razorpay",
      "Zod",
      "Cloudinary",
      "Tailwind CSS",
    ],
    note: "Team project — I built the customer side, frontend and backend. The admin panel was built by a teammate.",
    links: [
      {
        text: "Live site",
        href: "https://food-ordering-system-five-pi.vercel.app/",
      },
      {
        text: "Repository",
        href: "https://github.com/Nik30codes/Food-ordering-system",
      },
    ],
  },
];

// Real numbers from your own results. Every value here should come from your
// notebook — do not let anyone (including me) fill these in from guesswork.
export const modelResults = {
  classes: [
    "Non Demented",
    "Very Mild Demented",
    "Mild Demented",
    "Moderate Demented",
  ],
  models: [
    {
      name: "Custom CNN",
      accuracy: 66.25,
      note: "Baseline built from scratch. Established the floor and showed the dataset needed stronger feature extraction than a shallow network could learn.",
    },
    {
      name: "EfficientNetB0",
      accuracy: 69.33,
      note: "ImageNet-pretrained, fine-tuned in two phases. Better than the baseline, but heavier than MobileNetV2 for less return on this dataset.",
    },
    {
      name: "MobileNetV2",
      accuracy: 73.67,
      note: "Best performer. The lighter backbone generalised better here, which matters if this ever needs to run somewhere without a GPU.",
    },
  ],
  caveat:
    "Evaluated on accuracy, precision, recall, F1 and confusion matrices. The Very Mild and Mild Demented classes stayed the hardest to separate — the clearest direction for a next pass.",
};

export const skills = [
  {
    group: "Languages",
    items: ["C", "C++", "Python", "Java", "JavaScript", "PHP", "SQL"],
  },
  {
    group: "Frontend",
    items: [
      "React 19",
      "React Router",
      "Vite",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Recharts",
    ],
  },
  {
    group: "Backend",
    items: [
      "Node.js",
      "Express 5",
      "REST APIs",
      "JWT & OAuth",
      "Redis",
      "Razorpay",
      "Cloudinary",
    ],
  },
  {
    group: "Databases",
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Mongoose",
      "SQL Migrations",
      "Query Indexing",
    ],
  },
  {
    group: "Machine learning",
    items: [
      "TensorFlow",
      "Keras",
      "CNN",
      "Transfer Learning",
      "NumPy",
      "Pandas",
      "Scikit-learn",
    ],
  },
  {
    group: "Testing & tooling",
    items: [
      "Vitest",
      "Supertest",
      "React Testing Library",
      "Zod",
      "Git",
      "GitHub",
      "Vercel",
      "VS Code",
      "Jupyter Notebook",
    ],
  },
  {
    group: "Core CS",
    items: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Operating Systems",
      "DBMS",
      "Web Security",
    ],
  },
];

export const education = [
  {
    qualification: "B.Tech, Information Technology",
    place: "Manipal University Jaipur",
    period: "Aug 2024 — Aug 2028",
    detail: "Jaipur, India",
  },
  {
    qualification: "Class 12, Science",
    place: "Tagore Public School",
    period: "Aug 2021 — Apr 2023",
    detail: "Prayagraj, India",
  },
];

export const certifications = [
  {
    title: "Python for Data Science",
    issuer: "NPTEL · IIT Madras",
    period: "Jan — Feb 2026",
    detail:
      "Elite certificate, 73% consolidated score. Ranked among 16,401 certified candidates.",
    href: "https://drive.google.com/file/d/1YVfMvJWusiEF17uvg8fSDH5nHGTTBvPC/view?usp=sharing",
  },
  {
    title: "Deep Learning A–Z: AI, Python, AWS & LLMs",
    issuer: "Udemy",
    period: "",
    detail: "Deep learning architectures, applied AI workflows and LLM foundations.",
    href: "https://github.com/Nik30codes/machine-learning",
    hrefLabel: "Course notes",
  },
  {
    title: "C Programming",
    issuer: "Manipal University Jaipur",
    period: "Aug — Oct 2025",
    detail: "Coursework in procedural programming and memory fundamentals.",
    href: "",
  },
];

export const interests = [
  "Web Development",
  "Machine Learning",
  "Applied AI",
  "System Design",
  "Problem Solving",
  "Fitness",
];

export const languages = [
  { name: "English", level: "Fluent" },
  { name: "Hindi", level: "Native" },
];

export const marqueeItems = [
  "NIKUNJ BHALLA",
  "FULL STACK",
  "MACHINE LEARNING",
  "PROBLEM SOLVER",
];
