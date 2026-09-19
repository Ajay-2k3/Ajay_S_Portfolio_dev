/**
 * Single source of truth for portfolio content.
 * Populated from mydata.md — Ajay S master career profile (16 Sep 2026).
 *
 * Remaining stubs (marked PLACEHOLDER_*) require external assets or URLs
 * that have not yet been supplied — replace them when ready.
 */

// ─── Social / Contact ─────────────────────────────────────────────────────────
export const GITHUB_URL = "https://github.com/Ajay-2k3";
export const LINKEDIN_URL = "https://www.linkedin.com/in/ajay-s-4b3383267";
export const LEETCODE_URL = "https://leetcode.com/u/ajaysettu1/";
export const EMAIL = "ajaysettu1@gmail.com";
export const PORTFOLIO_URL = "https://freelance-aj-portfolio.vercel.app/";

// ─── Identity ─────────────────────────────────────────────────────────────────
export const IDENTITY = {
  name: "Ajay S.",
  mark: "AJAY/S",
  role: "Software Engineer",
  location: "Chennai / India",
  year: "2026",
  intro:
    "Building full-stack systems across web, backend, real-time platforms, and AI-powered applications.",
  bio: [
    "Ajay S. is a software engineer specialising in full-stack development, backend systems, real-time applications, and AI-integrated software. He holds an MCA from SRM Easwari Engineering College and has delivered production systems across internship, freelance, and independent project work.",
    "He works closest to the layer where interfaces meet services, data and state — designing APIs, database schemas and service architectures that hold up under real traffic, then carrying them all the way to the user-facing frontend.",
  ],
};

// ─── Project type ─────────────────────────────────────────────────────────────
export type Project = {
  index: string;
  title: string;
  description: string;
  tech: string[];
  marks: string[];
  url: string;
  image: string | null;
};

// ─── Projects ─────────────────────────────────────────────────────────────────
export const PROJECTS: Project[] = [
  {
    index: "01",
    title: "AI Stock Prediction & Monitoring System",
    description:
      "MCA final-year solo project. Full-stack AI platform monitoring NSE/BSE stocks with ML-based price and trend prediction, news sentiment analysis, price alerts, WhatsApp notifications, and an AI chat assistant. 20,781 database calls logged at avg 49.8 ms across 1,098 prediction events.",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Redis",
      "Socket.IO",
      "Python",
      "FastAPI",
      "TensorFlow / Keras",
      "scikit-learn",
      "XGBoost",
      "Ollama",
      "Docker",
    ],
    marks: ["REAL-TIME", "AI / ML", "FINTECH"],
    url: "https://github.com/Ajay-2k3/fintech",
    image: null,
  },
  {
    index: "02",
    title: "Flowerly — Hyper-Local Flower E-Commerce Platform",
    description:
      "Paid startup prototype for a hyper-local on-demand flower e-commerce and logistics platform. Four-tier portal: Customer Storefront, Vendor Dashboard, Driver Telemetry App, and Admin Console — 35+ pages, 4 user roles, 20+ API routes, 15+ database tables.",
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "Supabase",
      "NextAuth.js",
      "Zustand",
      "TanStack Query",
      "Razorpay",
      "Leaflet",
      "Zod",
      "Sentry",
    ],
    marks: ["SYSTEM", "ARCHITECTURE", "REAL-TIME"],
    url: "https://flowerly-six.vercel.app/",
    image: null,
  },
  {
    index: "03",
    title: "AJAY — Full-Stack Portfolio & Product Showcase",
    description:
      "High-performance client-focused web platform demonstrating production-grade software engineering, business website demos, and interactive architectural case studies — 12 public routes, 8 work entries, 20 Playwright test declarations across 6 spec files.",
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Framer Motion",
      "React Hook Form",
      "Zod",
      "Playwright",
    ],
    marks: ["INTERFACE", "PERFORMANCE"],
    url: "https://freelance-aj-portfolio.vercel.app/",
    image: null,
  },
  {
    index: "04",
    title: "SmileCare 360 — Dental Clinic SaaS Demo",
    description:
      "Self-initiated portfolio/demo project built to attract dental-clinic clients. Lead capture, protected admin console, lead management, activity timeline, SLA engine, Resend email notifications, analytics dashboard, and LLM-assisted lead classification.",
    tech: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS v4",
      "shadcn/ui",
      "Supabase",
      "Framer Motion",
      "Recharts",
      "OpenRouter LLM",
      "Resend API",
      "Vitest",
    ],
    marks: ["SAAS", "AUTOMATION"],
    url: "https://smilecare-360.vercel.app/",
    image: null,
  },
];

// ─── Experience ───────────────────────────────────────────────────────────────
export const EXPERIENCE = [
  {
    year: "2025",
    company: "Bluewhiz Infotech Private Limited",
    role: "Backend Developer Intern",
    period: "Apr 2025 — Aug 2025",
    location: "Dindigul · Hybrid",
    summary:
      "Built backend systems for a street-light maintenance application (Thendral). Designed 12+ REST API endpoints, authored the database schema for 9 core operational entities, implemented 4-tier RBAC, and integrated a React Native + Expo mobile frontend.",
    bullets: [
      "Designed and built 12+ REST API endpoints covering user management, district/panchayat/ward modules, pole management, issue ticketing, technician assignments, inventory, and notifications.",
      "Implemented JWT authentication and 4-tier RBAC enforcing Admin, Technician, and User access control across all modules.",
      "Designed the PostgreSQL database schema for 9 core operational entities and integrated Supabase for real-time data sync.",
      "Integrated backend APIs with a React Native + Expo mobile frontend; authored 20 pull requests for the Thendral repository.",
    ],
    tech: [
      "React Native",
      "Expo",
      "TypeScript",
      "Supabase",
      "Redux Toolkit",
      "React Query",
      "Expo Router",
      "NativeWind",
      "JWT",
      "RBAC",
      "REST APIs",
      "Git",
      "GitHub",
      "Postman",
    ],
  },
  {
    year: "2026",
    company: "Confidential Startup Client",
    role: "Freelance Software Developer",
    period: "Apr 2026 — Jul 2026",
    location: "Chennai · Remote",
    summary:
      "Sole developer on Flowerly — a paid startup prototype for a hyper-local on-demand flower e-commerce and logistics platform. Delivered a four-tier portal with live geolocation, Razorpay checkout, Supabase RLS, and multi-role RBAC middleware.",
    bullets: [
      "Architected and delivered a four-tier platform — Customer Storefront, Vendor Dashboard, Driver Telemetry App, and Admin Console — with 35+ pages, 4 user roles, 20+ API routes, and 15+ database tables.",
      "Built real-time geolocation telemetry, OTP delivery handoffs, and a live order-tracking system using Leaflet and Google Maps API.",
      "Designed Supabase RLS policies and Next.js RBAC middleware to enforce strict role separation; implemented Razorpay payment flow with promo coupon validation.",
    ],
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "Supabase",
      "NextAuth.js",
      "Zustand",
      "TanStack Query",
      "Razorpay",
      "Leaflet",
      "Zod",
      "Sentry",
    ],
  },
];

// ─── Capability groups ────────────────────────────────────────────────────────
export const CAPABILITY_GROUPS = [
  {
    label: "Frontend & Mobile",
    items: ["React", "Next.js", "React Native", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    label: "Backend & APIs",
    items: ["Node.js", "Express.js", "FastAPI", "Next.js API Routes", "REST APIs", "WebSockets / Socket.IO"],
  },
  {
    label: "Auth & Security",
    items: ["JWT", "RBAC", "NextAuth.js", "Supabase RLS", "Zod", "Rate Limiting"],
  },
  {
    label: "AI / ML",
    items: ["TensorFlow / Keras", "scikit-learn", "XGBoost", "LSTM", "NLP", "Ollama", "OpenRouter"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Supabase", "Prisma"],
  },
  {
    label: "Cloud / DevOps",
    items: ["Docker", "Vercel", "Netlify", "GitHub Actions", "Git", "Postman", "Linux"],
  },
];

// ─── Kinetic word field (Capabilities section) ────────────────────────────────
export const WORD_FIELD = [
  { word: "NEXT.JS", style: "solid", speed: 40 },
  { word: "NODE.JS", style: "outline", speed: -60 },
  { word: "PYTHON", style: "serif", speed: 80 },
  { word: "FASTAPI", style: "outline", speed: -35 },
  { word: "REACT", style: "solid", speed: 55 },
  { word: "POSTGRESQL", style: "serif", speed: -70 },
  { word: "DOCKER", style: "outline", speed: 30 },
  { word: "SUPABASE", style: "solid", speed: -45 },
  { word: "TYPESCRIPT", style: "serif", speed: 65 },
  { word: "REDIS", style: "outline", speed: -25 },
  { word: "SOCKET.IO", style: "solid", speed: 50 },
  { word: "TENSORFLOW", style: "serif", speed: -55 },
] as const;

// ─── Education ────────────────────────────────────────────────────────────────
export const EDUCATION = [
  {
    index: "01",
    period: "2024 — 2026",
    degree: "MASTER OF COMPUTER APPLICATIONS",
    college: "SRM Easwari Engineering College",
    university: "Anna University",
    location: "Chennai, Tamil Nadu",
    cgpa: "8.37 / 10",
    note: "Final semester completed, degree certificate awaited.",
  },
  {
    index: "02",
    period: "2021 — 2024",
    degree: "BACHELOR OF COMPUTER APPLICATIONS",
    college: "Adhiparasakthi College of Arts and Science",
    university: "Thiruvalluvar University",
    location: "Ranipet, Tamil Nadu",
    cgpa: "6.9 / 10",
    note: "",
  },
];

// ─── Credentials ──────────────────────────────────────────────────────────────
export const CREDENTIALS = [
  {
    index: "01",
    title: "Software Engineering Job Simulation",
    issuer: "JPMorgan Chase & Co. / Forage",
    year: "2026",
    url: "#PLACEHOLDER_CREDENTIAL_URL_JPMORGAN",
  },
  {
    index: "02",
    title: "Introduction to Modern AI",
    issuer: "Cisco Networking Academy",
    year: "2026",
    url: "#PLACEHOLDER_CREDENTIAL_URL_CISCO_AI",
  },
  {
    index: "03",
    title: "Python Essentials 1",
    issuer: "Cisco Networking Academy",
    year: "2026",
    url: "#PLACEHOLDER_CREDENTIAL_URL_CISCO_PYTHON",
  },
  {
    index: "04",
    title: "Diploma in Full Stack Programming",
    issuer: "Diagonal CADD · Grade A",
    year: "2024",
    url: "#PLACEHOLDER_CREDENTIAL_URL_FULLSTACK_DIPLOMA",
  },
  {
    index: "05",
    title: "Diploma in Java Programming",
    issuer: "Diagonal CADD · Grade A",
    year: "2023",
    url: "#PLACEHOLDER_CREDENTIAL_URL_JAVA_DIPLOMA",
  },
];

// ─── Services / What I build ──────────────────────────────────────────────────
export const SERVICES = [
  {
    index: "01",
    title: ["FULL-STACK", "DEVELOPMENT"],
    note: "Interfaces, services and data modelled as one cohesive system.",
  },
  {
    index: "02",
    title: ["BACKEND SYSTEMS", "& APIS"],
    note: "APIs, auth, roles and persistence designed to survive real traffic.",
  },
  {
    index: "03",
    title: ["AI + REAL-TIME", "PLATFORMS"],
    note: "Streaming data, ML prediction pipelines, and live collaborative state.",
  },
];

// ─── Notes / Writing ──────────────────────────────────────────────────────────
export const NOTES = [
  {
    year: "2026",
    title: [
      "BUILDING REAL-TIME",
      "AI STOCK PREDICTION",
      "WITH FASTAPI",
      "& WEBSOCKETS",
    ],
    description:
      "Notes on streaming live market data into a FastAPI prediction service and keeping real-time state in sync with Socket.IO.",
    url: "#PLACEHOLDER_NOTE_URL_01",
  },
  {
    year: "2026",
    title: [
      "ARCHITECTING MULTI-TENANT",
      "FLORAL E-COMMERCE",
      "WITH NEXT.JS & RBAC",
    ],
    description:
      "Tenant isolation, role-based middleware, Supabase RLS — and the parts that are easy to get wrong.",
    url: "#PLACEHOLDER_NOTE_URL_02",
  },
  {
    year: "2026",
    title: ["BACKEND ENGINEERING", "WITH NODE.JS,", "POSTGRESQL & SUPABASE"],
    description:
      "A working shape for services, schemas, migrations, and row-level access control.",
    url: "#PLACEHOLDER_NOTE_URL_03",
  },
];

// ─── Nav links ────────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "WORK", href: "#work" },
  { label: "ABOUT", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "WRITING", href: "#writing" },
];
