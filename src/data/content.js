// All site copy lives here. Edit this file, not the components.

export const profile = {
  name: "Nikunj Bhalla",
  initial: "N",
  role: "Software Engineer · Full Stack Developer · Machine Learning",
  tagline: "I build web applications that hold up, and models that earn their accuracy.",
  location: "Prayagraj, India",
  email: "nikunjbhalla2005@gmail.com",
  summary:
    "B.Tech Information Technology student at Manipal University Jaipur with hands-on experience across full stack web development and machine learning. I work in React, Node, Express, Python, SQL and TensorFlow — building scalable web applications and AI-driven systems. My foundation is in data structures, algorithms, OOP and database design, sharpened through 200+ LeetCode problems and shipped academic and internship projects.",
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
  { value: "73.67%", label: "Best model test accuracy" },
  { value: "3 mo", label: "Full stack internship" },
  { value: "Elite", label: "NPTEL, IIT Madras" },
];

export const experience = [
  {
    role: "Full Stack Web Development Intern",
    org: "Blend Vidya EdTech",
    period: "Dec 2025 — Feb 2026",
    bullets: [
      "Developed responsive, interactive web applications in HTML5, CSS3, JavaScript and React.js, improving usability across desktop and mobile.",
      "Built reusable React components to keep interfaces scalable, maintainable and modular.",
      "Developed and integrated RESTful APIs with Node.js and Express.js, connecting frontend and backend services.",
      "Optimised frontend performance by improving component rendering and code organisation.",
      "Collaborated through Git and GitHub, following version control and structured development workflows.",
    ],
    project: {
      name: "Attendance & Performance Tracking System",
      blurb:
        "Full stack employee management platform built during the internship. Role-based Admin, Manager and Employee dashboards, attendance sessions, performance metrics with comparison charts, and department and user management. React 19, Express 5, MongoDB Atlas, JWT access and refresh tokens.",
      href: "https://github.com/Nik30codes/attendence-performance-tracking",
    },
  },
  {
    role: "Open Source Contributor",
    org: "Career Pilot",
    period: "2026",
    bullets: [
      "Contributed to the Career Pilot open source project.",
    ],
  },
];

export const projects = [
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
    items: ["React.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    group: "Backend",
    items: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    group: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Mongoose"],
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
    group: "Tools",
    items: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Spyder"],
  },
  {
    group: "Core CS",
    items: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Operating Systems",
      "DBMS",
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
  "Open Source",
  "Applied AI",
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
