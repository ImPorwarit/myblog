// Central site + profile config. Edit this to make the site your own.

export const site = {
  name: "Porwarit Thaithavee",
  brand: "Por",
  role: "System Engineer",
  issue: "Issue 24 · May 2026",
  tagline:
    "ผมกำลังเรียนรู้การเขียนบล็อกนี้เป็นครั้งแรก เพื่อแชร์แบ่งปันความรู้และประสบการณ์ให้กับทุกคนที่สนใจในเรื่องนี้ ผมหวังว่าบล็อกนี้จะเป็นแหล่งข้อมูลที่มีประโยชน์และเป็นแรงบันดาลใจให้กับเพื่อนที่ต้องการเรียนรู้เกี่ยวกับวิศวกรรมระบบและเทคโนโลยีต่างๆ ที่เกี่ยวข้อง",
  location: "พระนครศรีอยุธยา, Thailand",
  email: "porwarit.w@gmail.com",
  url: "https://alexrivera.dev",
  socials: [
    { label: "GitHub", handle: "@porwarit45", href: "https://github.com/porwarit45" },
    { label: "LinkedIn", handle: "in/alexrivera", href: "https://linkedin.com" },
  ],
  about: [
    "ผมเป็น System Engineer ที่ชอบเรียนรู้เทคโนโลยีใหม่ๆ และแบ่งปันความรู้ผ่านการเขียนบล็อกนี้ ผมมีประสบการณ์ในการทำงานกับระบบต่างๆ และชอบที่จะสำรวจแนวคิดและวิธีการใหม่ๆ ในการแก้ไขปัญหาทางเทคนิค",
    "ผมเชื่อว่าการเรียนรู้เป็นกระบวนการที่ไม่มีที่สิ้นสุด และผมหวังว่าบล็อกนี้จะเป็นพื้นที่สำหรับการแลกเปลี่ยนความรู้และประสบการณ์กับเพื่อนๆ ที่สนใจในเรื่องเดียวกัน",
    "ผมอาศัยอยู่ในกรุงเทพฯ และทำงานอย่างอิสระในปัจจุบัน โดยรับงานออกแบบและพัฒนาผลิตภัณฑ์เล็กๆ ทุกปี หากคุณสนใจในเนื้อหาที่ผมเขียน ผมจะยินดีที่จะได้ฟังจากคุณ",
  ],
  skills: [
    "Linux",
    "Networking",
    "Node.js",
    "PostgreSQL",
    "Tailwind CSS",
    "Design Systems",
    "Edge / Serverless",
    "Accessibility",
  ],
  timeline: [
    { year: "2026", text: "เริ่มพัฒนาเว็บไซต์ของตัวเอง" },
    { year: "2025", text: "พัฒนาการออกแบบโครงสร้างระบบอาคารสำนักงานและห้างสรรพสินค้า" },
    { year: "2024", text: "ทำงานที่เป็นกับบริษัทระบบลานจอดรถอัจฉริยะ" },
    { year: "2023", text: "ตอนฝึกงานได้ร่วมทำ Mobile Robot และเป็นคนออกแบบและการโต้ตอบกับผู้ใช้งาน" },
  ],
  availability: {
    label: "Available from late 2026",
    note: "Booked through October. Interested in: web apps, internal tools, and design systems for small teams.",
  },
};

export type Project = {
  slug: string;
  number: string;
  title: string;
  tag: string;
  year: number;
  blurb: string;
  stack: string[];
  role: string;
  timeline: string;
  detail: string;
  learnings: string[];
  link?: string;
  repo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "orbit-analytics",
    number: "01",
    title: "Orbit Analytics",
    tag: "Product",
    year: 2025,
    blurb:
      "A privacy-first product analytics platform that returns funnel results in under 200ms on billions of events.",
    stack: ["Next.js", "ClickHouse", "TypeScript", "Edge"],
    role: "Lead engineer & system design",
    timeline: "9 months · 2024–2025",
    detail:
      "Orbit started as a bet that you can have product analytics without shipping every keystroke to a third party. I designed the ingestion pipeline — a tiny edge collector that batches and forwards to a ClickHouse cluster — and the query layer that powers the funnel and retention UI. The hard part was never the storage; it was making queries feel instant while keeping the data model honest.",
    learnings: [
      "Pre-aggregation beats clever indexes when the question space is known.",
      "An edge collector with a strict schema removes a whole class of data bugs.",
      "Latency budgets should be a code review concern, not a launch-day surprise.",
    ],
    link: "#",
    repo: "#",
    featured: true,
  },
  {
    slug: "ledger-ui",
    number: "02",
    title: "Ledger UI Kit",
    tag: "Open Source",
    year: 2024,
    blurb:
      "An open-source component library for financial dashboards — 40+ accessible, themeable components with zero runtime CSS.",
    stack: ["React", "Design Systems", "a11y", "CSS"],
    role: "Creator & maintainer",
    timeline: "Ongoing · since 2024",
    detail:
      "Ledger is the design system I wished existed every time I built a dashboard. Every component is keyboard-complete, themeable through tokens, and ships with no runtime style cost. It's used in production by a handful of fintech teams and has a small, opinionated API surface on purpose.",
    learnings: [
      "Constraining a component's API is the feature, not a limitation.",
      "Tokens before components — they make everything after them consistent for free.",
      "Docs are a product; treat their users like real users.",
    ],
    link: "#",
    repo: "#",
    featured: true,
  },
  {
    slug: "tide",
    number: "03",
    title: "Tide",
    tag: "App",
    year: 2024,
    blurb:
      "A focus timer that adapts session length to your calendar — a local-first PWA that syncs in the background.",
    stack: ["PWA", "IndexedDB", "Service Workers"],
    role: "Solo — design & build",
    timeline: "3 months · 2024",
    detail:
      "Tide is local-first by default: everything works offline, and sync is a background nicety rather than a requirement. It reads your free/busy calendar and proposes session lengths that actually fit the gaps in your day instead of a fixed 25 minutes.",
    learnings: [
      "Local-first changes the failure modes you have to design for — mostly for the better.",
      "Background sync is a UX problem disguised as an infra one.",
      "A timer is 5% timer and 95% gentle defaults.",
    ],
    link: "#",
    featured: true,
  },
  {
    slug: "papertrail",
    number: "04",
    title: "Papertrail",
    tag: "Tool",
    year: 2023,
    blurb:
      "A CLI + web app that turns scattered receipts into a clean expense report with edge OCR.",
    stack: ["Node.js", "OCR", "Edge Functions"],
    role: "Solo — design & build",
    timeline: "6 weeks · 2023",
    detail:
      "Papertrail does one thing: take a pile of receipt photos and give you a structured, exportable expense report. OCR runs at the edge so images never sit on a server, and the CLI exists because that's how I actually file expenses.",
    learnings: [
      "A CLI and a web app can share one core if you design the boundary first.",
      "Edge OCR is viable for short documents and great for privacy.",
      "The export format is the product for tools like this.",
    ],
    repo: "#",
  },
  {
    slug: "constellation",
    number: "05",
    title: "Constellation",
    tag: "Product",
    year: 2023,
    blurb:
      "A visual graph editor for data pipelines with real-time collaboration and a renderer smooth past 10k nodes.",
    stack: ["Canvas", "CRDT", "WebSockets"],
    role: "Frontend lead",
    timeline: "1 year · 2022–2023",
    detail:
      "Constellation is a node editor for orchestrating data pipelines. The interesting engineering was the renderer — keeping pan/zoom at 60fps with ten thousand nodes — and the collaboration layer, built on CRDTs so two people editing the same graph never lose work.",
    learnings: [
      "Canvas beats DOM the moment node counts get serious.",
      "CRDTs are simple in theory and a UX project in practice.",
      "Performance work is mostly deleting renders you didn't need.",
    ],
    link: "#",
  },
  {
    slug: "almanac",
    number: "06",
    title: "Almanac",
    tag: "Open Source",
    year: 2022,
    blurb:
      "A static-site generator for documentation that ships search, versioning, and dark mode with no client framework.",
    stack: ["SSG", "Rust", "Search"],
    role: "Creator",
    timeline: "Ongoing · since 2022",
    detail:
      "Almanac builds documentation sites that load instantly because there's no client framework to hydrate. Search is a prebuilt index, versioning is a directory convention, and dark mode is two lines. It powers the docs for a few of my other projects.",
    learnings: [
      "Most docs sites don't need a SPA — and are faster without one.",
      "A prebuilt search index is plenty for the sizes most docs reach.",
      "Conventions age better than configuration.",
    ],
    repo: "#",
  },
];

export const notes = [
  { date: "May 2026", text: "Drafting a longform piece on latency budgets as a review concern." },
  { date: "Apr 2026", text: "Ledger UI Kit hit v2 — full RTL support and a leaner token API." },
  { date: "Mar 2026", text: "Rewrote Almanac's search index; cold search is now sub-10ms." },
  { date: "Feb 2026", text: "Quiet month — running a lot, reading the Culture novels again." },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
