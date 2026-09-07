/**
 * Single source of truth for portfolio content.
 * PLACEHOLDER_* values are intentionally editable stubs — replace them with
 * real URLs / assets. Nothing here is invented beyond clearly marked stubs.
 */

export const GITHUB_URL = "#PLACEHOLDER_GITHUB_URL";
export const LINKEDIN_URL = "#PLACEHOLDER_LINKEDIN_URL";
export const LEETCODE_URL = "#PLACEHOLDER_LEETCODE_URL";
export const EMAIL = "ajaysettu1@gmail.com";

export const IDENTITY = {
  name: "Ajay S.",
  mark: "AJAY/S",
  role: "Software Engineer",
  location: "Chennai / India",
  year: "2026",
  intro:
    "Building digital systems across software, AI and real-time platforms.",
  bio: [
    "Ajay S. is a software engineer focused on full-stack systems, backend engineering, real-time applications and AI-powered software.",
    "He has an MCA background and practical software engineering experience, and works closest to the layer where interfaces meet services, data and state.",
  ],
};

export type Project = {
  index: string;
  title: string;
  description: string;
  tech: string[];
  marks: string[];
  url: string;
  image: string | null;
};

export const PROJECTS: Project[] = [
  {
    index: "01",
    title: "AI Stock Prediction & Monitoring Platform",
    description:
      "Real-time AI-powered stock monitoring and prediction system.",
    tech: [
      "React",
      "Node.js",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "Redis",
      "Socket.IO",
      "Machine Learning",
    ],
    marks: ["REAL-TIME", "DATA", "API"],
    url: "#PLACEHOLDER_PROJECT_URL_01",
    image: null,
  },
  {
    index: "02",
    title: "Flowerly — Multi-Tenant Floral E-Commerce Platform",
    description:
      "Multi-tenant commerce platform with tenant-scoped access and live order state.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "Supabase",
      "Socket.IO",
    ],
    marks: ["SYSTEM", "ARCHITECTURE", "REAL-TIME"],
    url: "#PLACEHOLDER_PROJECT_URL_02",
    image: null,
  },
  {
    index: "03",
    title: "Developer Portfolio",
    description: "PLACEHOLDER_PROJECT_03_DESCRIPTION — add the project summary.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    marks: ["INTERFACE"],
    url: "#PLACEHOLDER_PROJECT_URL_03",
    image: null,
  },
];

export const EXPERIENCE = [
  {
    year: "2025",
    company: "BlueWhiz Infotech Private Limited",
    role: "Backend Developer Intern",
    period: "Apr 2025 — Aug 2025",
    summary:
      "PLACEHOLDER_RESPONSIBILITIES — add the responsibilities exactly as written in the existing portfolio.",
    tech: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Supabase",
      "React Native",
      "REST APIs",
      "JWT",
      "RBAC",
      "Tailwind CSS",
      "Git",
      "GitHub",
    ],
  },
];

export const CAPABILITY_GROUPS = [
  {
    label: "Frontend & Mobile",
    items: ["React", "Next.js", "React Native", "TypeScript", "Tailwind CSS"],
  },
  {
    label: "Real-Time & Services",
    items: ["Socket.IO", "WebSockets", "REST APIs", "FastAPI"],
  },
  { label: "Backend & Security", items: ["Node.js", "Express.js", "JWT", "RBAC"] },
  { label: "AI / ML", items: ["Python", "Machine Learning"] },
  { label: "Databases", items: ["PostgreSQL", "MongoDB", "Redis", "Supabase"] },
  { label: "Cloud / DevOps", items: ["Docker", "AWS", "Git", "GitHub"] },
];

export const WORD_FIELD = [
  { word: "REACT", style: "solid", speed: 40 },
  { word: "NODE.JS", style: "outline", speed: -60 },
  { word: "PYTHON", style: "serif", speed: 80 },
  { word: "FASTAPI", style: "outline", speed: -35 },
  { word: "NEXT.JS", style: "solid", speed: 55 },
  { word: "POSTGRESQL", style: "serif", speed: -70 },
  { word: "DOCKER", style: "outline", speed: 30 },
  { word: "SUPABASE", style: "solid", speed: -45 },
  { word: "TYPESCRIPT", style: "serif", speed: 65 },
  { word: "REDIS", style: "outline", speed: -25 },
] as const;

export const EDUCATION = [
  {
    index: "01",
    period: "2024 — 2026",
    degree: "MASTER OF COMPUTER APPLICATIONS",
    college: "SRM Easwari Engineering College",
    location: "Chennai, Tamil Nadu",
    cgpa: "8.37 / 10",
  },
  {
    index: "02",
    period: "2021 — 2024",
    degree: "BACHELOR OF COMPUTER APPLICATIONS",
    college: "Adhiparasakthi College of Arts and Science",
    location: "Ranipet, Tamil Nadu",
    cgpa: "6.9 / 10",
  },
];

export const CREDENTIALS = [
  {
    index: "01",
    title: "Software Engineering",
    issuer: "JPMorgan Chase",
    year: "2026",
    url: "#PLACEHOLDER_CREDENTIAL_URL_01",
  },
  {
    index: "02",
    title: "Diploma in Java Programming",
    issuer: "Grade A",
    year: "2023",
    url: "#PLACEHOLDER_CREDENTIAL_URL_02",
  },
];

export const SERVICES = [
  {
    index: "01",
    title: ["FULL-STACK", "DEVELOPMENT"],
    note: "Interfaces, services and data modelled as one system.",
  },
  {
    index: "02",
    title: ["BACKEND SYSTEMS", "& APIs"],
    note: "APIs, auth, roles and persistence built to survive real traffic.",
  },
  {
    index: "03",
    title: ["AI + REAL-TIME", "PLATFORMS"],
    note: "Streaming data, prediction pipelines and live state.",
  },
];

export const NOTES = [
  {
    year: "PLACEHOLDER_YEAR",
    title: ["BUILDING REAL-TIME", "AI STOCK PREDICTION", "WITH FASTAPI", "& WEBSOCKETS"],
    description:
      "Notes on streaming market data into a prediction service without losing state.",
    url: "#PLACEHOLDER_NOTE_URL_01",
  },
  {
    year: "PLACEHOLDER_YEAR",
    title: ["ARCHITECTING MULTI-TENANT", "FLORAL E-COMMERCE", "WITH NEXT.JS & RBAC"],
    description: "Tenant isolation, roles and the parts that are easy to get wrong.",
    url: "#PLACEHOLDER_NOTE_URL_02",
  },
  {
    year: "PLACEHOLDER_YEAR",
    title: ["BACKEND ENGINEERING", "WITH NODE.JS,", "POSTGRESQL & SUPABASE"],
    description: "A working shape for services, schemas and access control.",
    url: "#PLACEHOLDER_NOTE_URL_03",
  },
];

export const NAV_LINKS = [
  { label: "WORK", href: "#work" },
  { label: "ABOUT", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "WRITING", href: "#writing" },
];
