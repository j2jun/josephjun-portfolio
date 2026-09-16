import ThemeToggle from "@/components/ThemeToggle";
import MobileNav from "@/components/MobileNav";

const experience = [
  {
    role: "Software Development Engineer — Apprentice",
    dates: "2025 — present",
    org: "Amazon Prime Video · Seattle, WA",
    bullets: [
      "Migrated service metadata from Amazon S3 to DynamoDB, consolidating automation workflows and cutting operational costs ~40%.",
      "Built an internal privacy-review library, improving security compliance and error handling across Prime Video services.",
      "Refactored CI/CD reporting pipelines and executive dashboards, shortening time-to-detect on release issues.",
      "Designed a centralized content-abuse intelligence pipeline, strengthening anti-piracy detection and partner protection.",
    ],
  },
  {
    role: "Backend Developer Intern",
    dates: "2023",
    org: "CITMIT (Construction Management Platform) · La Jolla, CA",
    bullets: [
      "Cut MySQL query execution time 30% through indexing and query optimization.",
      "Designed a distributed caching layer, reducing peak database load 50%.",
      "Built an automated disaster-recovery pipeline using Bash and Amazon S3.",
    ],
  },
  {
    role: "Software Engineering Intern",
    dates: "2021",
    org: "Tech for Good Inc. · Boston, MA",
    bullets: [
      "Built a blockchain-based donation platform in Solidity and JavaScript for transparent transaction tracking.",
      "Designed and audited smart contracts, closing identified fraudulent-transaction vectors.",
      "Optimized PostgreSQL schema and queries, cutting transaction-verification latency 40%.",
    ],
  },
  {
    role: "Sergeant · Administrative Manager · Squad Leader",
    dates: "2015 — 2020",
    org: "U.S. Army · Tacoma, WA & Pyeongtaek, South Korea",
    bullets: [
      "Led and mentored a cross-functional team of 15+ personnel, contributing to a 20% squad promotion rate.",
      "Managed inventory and maintenance for $3M+ in mission-critical equipment at a 95% inspection pass rate.",
      "Streamlined logistics and resource planning, reducing operational overhead 20%.",
    ],
  },
];

const projects = [
  {
    tag: "CITMIT",
    title: "Platform Reliability at Scale",
    description:
      "A construction-management platform was hitting database bottlenecks under load. I indexed and restructured MySQL queries, added a distributed caching layer, and built an automated Bash/S3 disaster-recovery pipeline.",
    stats: [
      { value: "30%", label: "faster queries" },
      { value: "50%", label: "less peak load" },
    ],
    stack: ["MySQL", "Bash", "S3"],
    index: "01",
  },
  {
    tag: "Tech for Good",
    title: "Blockchain Donation Transparency",
    description:
      "Donors had no visibility into how contributions were used. I built a Solidity-based smart-contract platform with a JavaScript front end, audited for fraud vectors, on an optimized PostgreSQL backend.",
    stats: [
      { value: "40%", label: "faster verification" },
      { value: "0", label: "fraud vectors left" },
    ],
    stack: ["Solidity", "JavaScript", "PostgreSQL"],
    index: "02",
  },
  {
    tag: "Amazon Prime Video",
    title: "Service Registry Modernization",
    description:
      "Legacy metadata storage was fragmenting automation and driving up operational cost. I led the migration of service metadata from S3 to DynamoDB, consolidating automation workflows.",
    stats: [{ value: "~40%", label: "lower op. cost" }],
    stack: ["DynamoDB", "S3", "Automation"],
    index: "03",
  },
];

const skills: [string, string[]][] = [
  ["Languages", ["Python", "Java", "Kotlin", "TypeScript", "JavaScript", "SQL", "Solidity"]],
  ["Frontend", ["React", "Responsive UI", "Component Architecture", "State Management"]],
  [
    "Backend & Systems",
    ["Distributed Systems", "Microservices", "REST APIs", "Node.js", "Django"],
  ],
  ["Cloud & DevOps", ["AWS (S3, DynamoDB, IAM)", "CloudFormation", "CI/CD", "Linux", "IaC"]],
  ["Data & ML", ["ETL Pipelines", "PostgreSQL", "Redshift", "Pandas", "TensorFlow"]],
  [
    "Security & Privacy",
    ["Security Engineering", "Privacy Engineering", "Anti-Piracy Automation", "Threat Assessment"],
  ],
];

const navLinks = [
  { href: "#about", label: "about" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#skills", label: "skills" },
  { href: "#contact", label: "contact" },
];

function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div className="mb-14 flex items-baseline gap-3.5">
      <span className="font-mono text-[13px] text-[var(--accent)]">{index}</span>
      <h2 className="font-display text-3xl font-bold text-[var(--text)]">{label}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-[var(--bg)] text-[var(--text)]">
      {/* Nav */}
      <header className="sticky top-0 z-10 flex items-center justify-between border-b border-[var(--border)] bg-[var(--nav-bg)] px-8 py-5 backdrop-blur-sm md:px-16">
        <a href="#top" className="font-display text-lg font-bold">
          Joseph Jun
        </a>
        <nav className="flex items-center gap-4 md:gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hidden font-mono text-[13px] text-[var(--text-muted)] sm:inline"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-[var(--accent)] px-4.5 py-2 font-mono text-[13px] font-semibold text-[var(--accent-text)]"
          >
            résumé
          </a>
          <ThemeToggle />
          <MobileNav links={navLinks} />
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="mx-auto flex w-full max-w-4xl flex-col gap-7 px-8 pb-24 pt-32 md:px-16 md:pt-36">
        <div className="font-mono text-[13px] font-medium tracking-wide text-[var(--accent)]">
          [ software engineer ]
        </div>
        <h1 className="font-display text-5xl font-bold leading-[1.08] tracking-tight md:text-6xl">
          Building reliable, scalable systems.
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-[var(--text-muted)]">
          From backend infrastructure to developer tooling — currently a Software Development
          Engineer at Amazon Prime Video.
        </p>
        <div className="mt-2 flex flex-wrap gap-3">
          <div className="flex items-center gap-2 rounded-md border border-[var(--border)] px-4 py-2 font-mono text-[13px] text-[var(--text-muted)]">
            <PinIcon /> Bellevue, WA
          </div>
          <div className="flex items-center gap-2 rounded-md border border-[var(--accent)] px-4 py-2 font-mono text-[13px] font-medium text-[var(--accent)]">
            <ShieldIcon /> active dod secret clearance
          </div>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-6">
          <a
            href="mailto:jhjun713@gmail.com"
            className="flex items-center gap-2 font-mono text-sm font-medium text-[var(--text)]"
          >
            <MailIcon /> jhjun713@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/j2jun"
            className="flex items-center gap-2 font-mono text-sm font-medium text-[var(--text)]"
          >
            <LinkIcon /> linkedin.com/in/j2jun
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md bg-[var(--accent)] px-5.5 py-3 text-sm font-semibold text-[var(--accent-text)]"
          >
            <DownloadIcon /> Download Résumé
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-[var(--border)]">
        <div className="mx-auto max-w-4xl px-8 py-24 md:px-16">
          <div className="mb-7 flex items-baseline gap-3.5">
            <span className="font-mono text-[13px] text-[var(--accent)]">01</span>
            <span className="font-mono text-[13px] uppercase tracking-widest text-[var(--text-faint)]">
              About
            </span>
          </div>
          <p className="max-w-3xl text-xl leading-relaxed text-[var(--text-muted)]">
            I&apos;m a software engineer with a B.S. in Mathematics-Computer Science from UC San
            Diego, currently building backend systems and developer tooling at Amazon Prime
            Video. Before software, I spent five years as a Sergeant in the U.S. Army, leading a
            squad of 15+ soldiers and managing multi-million-dollar equipment programs —
            experience that still shapes how I approach reliability, process, and working under
            pressure today. I hold an active DoD Secret clearance and work comfortably across
            backend infrastructure, data pipelines, and security-minded engineering.
          </p>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="border-t border-[var(--border)]">
        <div className="mx-auto max-w-4xl px-8 py-24 md:px-16">
          <SectionLabel index="02" label="Experience" />
          <div className="flex flex-col gap-13">
            {experience.map((job) => (
              <div key={job.role} className="flex flex-col gap-3.5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div className="font-display text-lg font-semibold">{job.role}</div>
                  <div className="font-mono text-[12.5px] text-[var(--text-faint)]">
                    {job.dates}
                  </div>
                </div>
                <div className="font-mono text-[13.5px] text-[var(--accent)]">{job.org}</div>
                <ul className="mt-1 flex flex-col gap-2.5">
                  {job.bullets.map((b) => (
                    <li
                      key={b}
                      className="relative pl-5 text-[15.5px] leading-relaxed text-[var(--text-muted)]"
                    >
                      <span className="absolute left-0 text-[var(--accent)]">▪</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="border-t border-[var(--border)] bg-[var(--surface-alt)]">
        <div className="mx-auto max-w-6xl px-8 py-24 md:px-16">
          <div className="mb-3 flex items-baseline gap-3.5">
            <span className="font-mono text-[13px] text-[var(--accent)]">03</span>
            <h2 className="font-display text-3xl font-bold">Selected Work</h2>
          </div>
          <p className="mb-14 ml-8 max-w-xl text-base text-[var(--text-muted)]">
            A closer look at three projects drawn from my professional experience.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {projects.map((p) => (
              <div
                key={p.title}
                className="flex flex-col gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-7"
                style={{ borderTop: "3px solid var(--accent)" }}
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs uppercase tracking-wide text-[var(--text-faint)]">
                    {p.tag}
                  </span>
                  <span className="font-mono text-[22px] font-semibold text-[var(--border)]">
                    {p.index}
                  </span>
                </div>
                <div className="font-display text-xl font-bold">{p.title}</div>
                <p className="text-[14.5px] leading-relaxed text-[var(--text-muted)]">
                  {p.description}
                </p>
                <div className="mt-1 flex gap-5">
                  {p.stats.map((s) => (
                    <div key={s.label}>
                      <div className="font-display text-[28px] font-bold text-[var(--accent)]">
                        {s.value}
                      </div>
                      <div className="font-mono text-[11px] uppercase text-[var(--text-faint)]">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded border border-[var(--border)] px-3 py-1 font-mono text-xs text-[var(--text-muted)]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="border-t border-[var(--border)]">
        <div className="mx-auto max-w-5xl px-8 py-24 md:px-16">
          <SectionLabel index="04" label="Skills" />
          <div className="grid grid-cols-1 gap-11 md:grid-cols-2">
            {skills.map(([category, items]) => (
              <div key={category} className="flex flex-col gap-3.5">
                <div className="font-mono text-[12.5px] uppercase tracking-widest text-[var(--text-faint)]">
                  {category}
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="rounded border border-[var(--border)] bg-[var(--surface)] px-3.5 py-1.5 font-mono text-[13px] text-[var(--text-muted)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="border-t border-[var(--border)]">
        <div className="mx-auto flex max-w-4xl flex-wrap items-baseline justify-between gap-3 px-8 py-16 md:px-16">
          <div>
            <div className="font-display text-lg font-semibold">
              B.S., Mathematics-Computer Science
            </div>
            <div className="mt-1 font-mono text-[13.5px] text-[var(--text-muted)]">
              University of California, San Diego
            </div>
          </div>
          <div className="font-mono text-[13px] text-[var(--text-faint)]">2022 — 2024</div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="mt-auto border-t border-[var(--border)]"
        style={{ background: "var(--contact-bg)" }}
      >
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-8 py-32 text-center md:px-16">
          <div className="font-mono text-[13px] text-[var(--accent)]">05 — contact</div>
          <h2
            className="font-display text-4xl font-bold"
            style={{ color: "var(--contact-text)" }}
          >
            Let&apos;s build something.
          </h2>
          <p
            className="max-w-md text-lg leading-relaxed"
            style={{ color: "var(--contact-muted)" }}
          >
            Open to software engineering opportunities — reach out any time.
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-5">
            <a
              href="mailto:jhjun713@gmail.com"
              className="rounded-md px-7 py-3.5 text-sm font-semibold"
              style={{ background: "var(--accent)", color: "var(--accent-text)" }}
            >
              Email Me
            </a>
            <a
              href="https://linkedin.com/in/j2jun"
              className="rounded-md border px-7 py-3.5 text-sm font-semibold"
              style={{ borderColor: "var(--contact-border)", color: "var(--contact-text)" }}
            >
              LinkedIn
            </a>
          </div>
          <div
            className="mt-14 font-mono text-xs opacity-70"
            style={{ color: "var(--contact-muted)" }}
          >
            © 2026 Joseph Jun
          </div>
        </div>
      </section>
    </div>
  );
}

function PinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v12" />
      <polyline points="7,10 12,15 17,10" />
      <path d="M5 21h14" />
    </svg>
  );
}
