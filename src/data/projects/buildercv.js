import buildercvImg from '../../assets/Experience/BuilderCV.png'

export default {
  title: 'BuilderCV',
  category: 'AI & Full-Stack SaaS',
  role: 'Solo Full-Stack Developer',
  description: "AI-Powered Resume Builder & ATS Optimizer.\n\nBuilderCV is a <strong>production-grade SaaS web application</strong> designed to help Indonesian job seekers build <strong>ATS-friendly (Applicant Tracking System)</strong> resumes with the power of <strong>Generative AI</strong>. The platform combines a real-time WYSIWYG CV editor with three deep AI integrations — <strong>CV Evaluation</strong>, <strong>Chat Assistant</strong>, and <strong>Job Description Matching</strong> — enabling users to go from a blank page to a fully optimized, interview-ready CV in under 5 minutes.\n\nThe product operates on a <strong>Freemium model</strong> with secure IDR (Rupiah) transactions processed through <strong>Midtrans</strong> payment gateway, supporting Bank Transfer (BCA, Mandiri, BRI, BSI), GoPay, and QRIS.",
  image: buildercvImg,
  imagePosition: 'object-top',
  links: [
    { label: 'Live Site', url: 'https://buildercv.com' }
  ],
  techStack: [
    "Next.js 14",
    "React 18",
    "TypeScript",
    "Tailwind CSS",
    "Supabase",
    "PostgreSQL",
    "Google Gemini AI",
    "Midtrans",
    "Zustand",
    "Framer Motion"
  ],
  problemContext: [
    "The Indonesian job market is rapidly growing, yet most job seekers face three critical pain points:",
    "<strong>ATS Rejection:</strong> Over 75% of resumes are filtered out by ATS systems before a human recruiter ever sees them, due to poor formatting, missing keywords, or incompatible file structures.",
    "<strong>Manual Formatting Struggle:</strong> Candidates spend hours adjusting margins, fonts, and layouts in Word or Google Docs, often producing documents that look good visually but fail machine parsing.",
    "<strong>Job Description Mismatch:</strong> Most applicants submit a single generic CV to dozens of job postings, never tailoring their content to match specific role requirements — a critical factor in ATS scoring."
  ],
  solution: [
    "BuilderCV solves these problems through an integrated, AI-first approach:",
    "<strong>Intelligent CV Editor</strong> — A Notion-like WYSIWYG editor with drag-and-drop section reordering, real-time A4 preview with auto page-break detection, and customizable typography (font family, size, color, spacing). The output is a semantically structured document that ATS systems can parse flawlessly.",
    "<strong>AI CV Evaluation (Score 0–100)</strong> — Powered by Google Gemini, the system analyzes every section of the CV across four dimensions: <strong>Structure</strong>, <strong>Keyword Relevance</strong>, <strong>Quantifiable Impact</strong>, and <strong>ATS Compatibility</strong>. Each recommendation comes with an estimated score improvement and a one-click \"Apply\" button that rewrites the CV section automatically.",
    "<strong>AI Chat Assistant</strong> — A context-aware chatbot that reads the user's active CV in real-time. Users can ask it to rewrite bullet points, suggest action verbs, improve profile summaries, or import content from uploaded files — all through natural language conversation.",
    "<strong>AI Job Match</strong> — Users paste a Job Description, and the AI calculates a match percentage, identifies keyword gaps, and offers to rewrite the entire CV using the STAR method (Situation, Task, Action, Result) tailored to that specific role. Users can choose to update their current CV or create a brand-new tailored version.",
    "<strong>Native PDF Export</strong> — Instead of relying on heavy server-side rendering libraries, BuilderCV uses a custom <code>@media print</code> CSS architecture that compiles the React DOM into 100% text-selectable, ATS-compatible PDF documents directly from the browser."
  ],
  architecture: [
    "<strong>Technical Decisions:</strong>",
    "<strong>SSR i18n without FOUC</strong> — Language preference stored in cookies, read server-side via <code>cookies().get(\"lang\")</code> before rendering. No client-side flash.",
    "<strong>Streaming AI Responses</strong> — Chat and evaluation use Server-Sent Events (SSE) streaming for real-time token-by-token rendering.",
    "<strong>Tool-Call Architecture</strong> — AI Chat uses a structured tool-call system where Gemini can emit <code>update_section</code>, <code>create_cv</code>, <code>rewrite_bullets</code> commands that are executed directly on the CV state.",
    "<strong>Row Level Security (RLS)</strong> — All Supabase tables enforce user-level isolation. Users can only read/write their own CVs.",
    "<strong>Webhook-Synced Payments</strong> — Midtrans payment status changes are received via secure webhooks, updating subscription state in the database atomically."
  ],
  contentTitle: 'Key Features',
  content: [
    {
      heading: "WYSIWYG CV Editor",
      text: "Drag-and-drop sections, inline editing, live A4 preview with auto page breaks, customizable fonts/colors/spacing."
    },
    {
      heading: "AI CV Evaluation",
      text: "Score 0–100, per-section recommendations, one-click AI-powered auto-apply."
    },
    {
      heading: "AI Chat Assistant",
      text: "Context-aware chatbot that reads active CV, rewrites bullets, imports from files."
    },
    {
      heading: "AI Job Match",
      text: "JD analysis, match percentage, keyword gap detection, STAR-method CV rewriting."
    },
    {
      heading: "Multi-CV Management",
      text: "Up to 10 CVs per account (Premium), quick switch between versions."
    },
    {
      heading: "Dual Language (i18n)",
      text: "Full Indonesian & English support across all pages, SSR cookie-based with zero FOUC."
    },
    {
      heading: "Secure Payments",
      text: "Midtrans integration (Bank Transfer, GoPay, QRIS), webhook-synced subscription management."
    },
    {
      heading: "Dark Mode",
      text: "System-aware dark/light theme toggle across all interfaces."
    },
    {
      heading: "PDF Export",
      text: "Native browser print-based export, ATS-friendly, no watermark (Premium)."
    }
  ],
  engineering: [
    "<strong>Solo Full-Stack Developer</strong> — Designed, architected, and implemented the entire platform end-to-end: frontend UI/UX, backend API routes, database schema, AI prompt engineering, payment integration, and deployment.",
    "Engineered <strong>3 distinct AI pipelines</strong> (Evaluate, Chat, Job Match) with structured output parsing, retry logic, and graceful error handling.",
    "Built a <strong>custom PDF rendering system</strong> using pure CSS <code>@media print</code> rules, eliminating the need for Puppeteer or node-canvas dependencies.",
    "Integrated <strong>Midtrans payment gateway</strong> with full webhook lifecycle management for Bank Transfer, e-wallet, and QRIS payment methods.",
    "Implemented <strong>dual-language localization</strong> across 6+ public pages using a server-side cookie architecture that prevents Flash of Unstyled Content."
  ]
}
