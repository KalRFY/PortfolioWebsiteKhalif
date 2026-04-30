# BuilderCV — Portfolio Project Entry

> Copy-paste content below into your Vue portfolio website's project data structure. Formatted to match the existing pattern (Smartandon, LSTM Stock Predictions, etc.)

---

## 1. Project List Card (Projects Page)

| Field | Value |
|---|---|
| **Category Label** | `AI & FULL-STACK SAAS` |
| **Title** | `BuilderCV` |
| **Subtitle** | `AI-Powered Resume Builder & ATS Optimizer` |
| **Thumbnail** | Screenshot of the Landing Page hero section or CV Editor |

---

## 2. Tech Stack Tags

```
Next.js 14 · React 18 · TypeScript · Tailwind CSS · Supabase · PostgreSQL · Google Gemini AI · Midtrans · Zustand · Framer Motion
```

---

## 3. Overview

BuilderCV is a **production-grade SaaS web application** designed to help Indonesian job seekers build **ATS-friendly (Applicant Tracking System)** resumes with the power of **Generative AI**. The platform combines a real-time WYSIWYG CV editor with three deep AI integrations — **CV Evaluation**, **Chat Assistant**, and **Job Description Matching** — enabling users to go from a blank page to a fully optimized, interview-ready CV in under 5 minutes.

The product operates on a **Freemium model** with secure IDR (Rupiah) transactions processed through **Midtrans** payment gateway, supporting Bank Transfer (BCA, Mandiri, BRI, BSI), GoPay, and QRIS.

---

## 4. Problem Context

The Indonesian job market is rapidly growing, yet most job seekers face three critical pain points:

- **ATS Rejection:** Over 75% of resumes are filtered out by ATS systems before a human recruiter ever sees them, due to poor formatting, missing keywords, or incompatible file structures.
- **Manual Formatting Struggle:** Candidates spend hours adjusting margins, fonts, and layouts in Word or Google Docs, often producing documents that look good visually but fail machine parsing.
- **Job Description Mismatch:** Most applicants submit a single generic CV to dozens of job postings, never tailoring their content to match specific role requirements — a critical factor in ATS scoring.

---

## 5. Solution

BuilderCV solves these problems through an integrated, AI-first approach:

- **Intelligent CV Editor** — A Notion-like WYSIWYG editor with drag-and-drop section reordering, real-time A4 preview with auto page-break detection, and customizable typography (font family, size, color, spacing). The output is a semantically structured document that ATS systems can parse flawlessly.
- **AI CV Evaluation (Score 0–100)** — Powered by Google Gemini, the system analyzes every section of the CV across four dimensions: **Structure**, **Keyword Relevance**, **Quantifiable Impact**, and **ATS Compatibility**. Each recommendation comes with an estimated score improvement and a one-click "Apply" button that rewrites the CV section automatically.
- **AI Chat Assistant** — A context-aware chatbot that reads the user's active CV in real-time. Users can ask it to rewrite bullet points, suggest action verbs, improve profile summaries, or import content from uploaded files — all through natural language conversation.
- **AI Job Match** — Users paste a Job Description, and the AI calculates a match percentage, identifies keyword gaps, and offers to rewrite the entire CV using the STAR method (Situation, Task, Action, Result) tailored to that specific role. Users can choose to update their current CV or create a brand-new tailored version.
- **Native PDF Export** — Instead of relying on heavy server-side rendering libraries, BuilderCV uses a custom `@media print` CSS architecture that compiles the React DOM into 100% text-selectable, ATS-compatible PDF documents directly from the browser.

---

## 6. Key Features

| Feature | Description |
|---|---|
| **WYSIWYG CV Editor** | Drag-and-drop sections, inline editing, live A4 preview with auto page breaks, customizable fonts/colors/spacing |
| **AI CV Evaluation** | Score 0–100, per-section recommendations, one-click AI-powered auto-apply |
| **AI Chat Assistant** | Context-aware chatbot that reads active CV, rewrites bullets, imports from files |
| **AI Job Match** | JD analysis, match percentage, keyword gap detection, STAR-method CV rewriting |
| **Multi-CV Management** | Up to 10 CVs per account (Premium), quick switch between versions |
| **Dual Language (i18n)** | Full Indonesian & English support across all pages, SSR cookie-based with zero FOUC |
| **Secure Payments** | Midtrans integration (Bank Transfer, GoPay, QRIS), webhook-synced subscription management |
| **Dark Mode** | System-aware dark/light theme toggle across all interfaces |
| **PDF Export** | Native browser print-based export, ATS-friendly, no watermark (Premium) |

---

## 7. Architecture & Technical Highlights

```
┌─────────────────────────────────────────────────────┐
│                    Frontend (Next.js 14)             │
│  ┌─────────┐  ┌──────────┐  ┌───────────────────┐   │
│  │ CV      │  │ AI Chat  │  │ Evaluation/       │   │
│  │ Editor  │  │ Panel    │  │ Job Match Modal   │   │
│  └────┬────┘  └────┬─────┘  └────────┬──────────┘   │
│       │            │                 │               │
│  ┌────▼────────────▼─────────────────▼──────────┐   │
│  │         Zustand Global State (useCVStore)     │   │
│  └──────────────────┬───────────────────────────┘   │
│                     │                               │
│  ┌──────────────────▼───────────────────────────┐   │
│  │        Next.js API Routes (/api/*)           │   │
│  │  /api/chat  ·  /api/evaluate  ·  /api/pay   │   │
│  └──────────┬──────────┬──────────┬─────────────┘   │
└─────────────┼──────────┼──────────┼─────────────────┘
              │          │          │
     ┌────────▼──┐  ┌────▼────┐  ┌─▼──────────┐
     │  Google   │  │Supabase │  │  Midtrans   │
     │  Gemini   │  │ (PgSQL) │  │  Payment    │
     │  AI API   │  │ + Auth  │  │  Gateway    │
     └───────────┘  └─────────┘  └────────────┘
```

**Technical Decisions:**
- **SSR i18n without FOUC** — Language preference stored in cookies, read server-side via `cookies().get("lang")` before rendering. No client-side flash.
- **Streaming AI Responses** — Chat and evaluation use Server-Sent Events (SSE) streaming for real-time token-by-token rendering.
- **Tool-Call Architecture** — AI Chat uses a structured tool-call system where Gemini can emit `update_section`, `create_cv`, `rewrite_bullets` commands that are executed directly on the CV state.
- **Row Level Security (RLS)** — All Supabase tables enforce user-level isolation. Users can only read/write their own CVs.
- **Webhook-Synced Payments** — Midtrans payment status changes are received via secure webhooks, updating subscription state in the database atomically.

---

## 8. My Role & Impact

- **Solo Full-Stack Developer** — Designed, architected, and implemented the entire platform end-to-end: frontend UI/UX, backend API routes, database schema, AI prompt engineering, payment integration, and deployment.
- Engineered **3 distinct AI pipelines** (Evaluate, Chat, Job Match) with structured output parsing, retry logic, and graceful error handling.
- Built a **custom PDF rendering system** using pure CSS `@media print` rules, eliminating the need for Puppeteer or node-canvas dependencies.
- Integrated **Midtrans payment gateway** with full webhook lifecycle management for Bank Transfer, e-wallet, and QRIS payment methods.
- Implemented **dual-language localization** across 6+ public pages using a server-side cookie architecture that prevents Flash of Unstyled Content.

---

## 9. Links

| Type | URL |
|---|---|
| **Live Site** | [https://buildercv.com](https://buildercv.com) *(or your deployed URL)* |
| **GitHub** | *(private repository)* |

---

> [!TIP]
> **For your Vue portfolio code**, you'll need to add a new object to your projects array following the same shape as Smartandon and the LSTM project. The fields above map directly to: `category`, `title`, `subtitle`, `techStack[]`, `overview`, `problemContext`, `solution`, `keyFeatures`, `architecture`, `role`, and `links`.
