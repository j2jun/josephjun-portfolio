import Image from "next/image";
import Clock from "@/components/Clock";
import ModeSwitch from "@/components/ModeSwitch";
import Sky from "@/components/Sky";

const EMAIL = "jhjun713@gmail.com";
const LINKEDIN = "https://linkedin.com/in/j2jun";
const GITHUB = "https://github.com/j2jun";

type Visual =
  | { kind: "image"; src: string; alt: string }
  | { kind: "stat"; value: string; label: string; sky: string }
  | { kind: "terminal"; lines: string[] };

type Project = {
  title: string;
  meta: string;
  summary: string;
  stack: string;
  href?: string;
  visual: Visual;
};

// Day: professional work.
const day: Project[] = [
  {
    title: "Service registry migration",
    meta: "Amazon Prime Video · 2025",
    summary:
      "Moved service metadata from S3 to DynamoDB and consolidated the automation around it. I also built a privacy-review library and a content-abuse pipeline for anti-piracy.",
    stack: "DynamoDB, S3, CI/CD",
    visual: { kind: "stat", value: "−40%", label: "operational cost", sky: "linear-gradient(to bottom, #5f9fd8, #cfe4f5)" },
  },
  {
    title: "Database reliability",
    meta: "CITMIT · 2023",
    summary:
      "Indexed and restructured MySQL queries, added a distributed cache and automated disaster recovery for a construction-management platform. Queries got 30% faster.",
    stack: "MySQL, Bash, S3",
    visual: { kind: "stat", value: "−50%", label: "peak database load", sky: "linear-gradient(to bottom, #7fb6e8, #e4eff8)" },
  },
  {
    title: "Donation transparency",
    meta: "Tech for Good · 2021",
    summary:
      "A Solidity smart-contract platform that shows donors where their money goes, audited for fraud vectors, on a tuned PostgreSQL backend.",
    stack: "Solidity, JavaScript, PostgreSQL",
    visual: { kind: "stat", value: "40%", label: "faster verification", sky: "linear-gradient(to bottom, #9fc1e6, #f6e3cf)" },
  },
  {
    title: "Squad leadership",
    meta: "U.S. Army · 2015–2020",
    summary:
      "Five years as a sergeant in Tacoma, WA and Pyeongtaek, South Korea. Led 15+ soldiers and kept $3M+ of equipment mission-ready.",
    stack: "Leadership, logistics, operations",
    visual: { kind: "stat", value: "95%", label: "inspection pass rate", sky: "linear-gradient(to bottom, #b9b6dc, #f5c9b3)" },
  },
];

// Night: built after hours.
const night: Project[] = [
  {
    title: "Inbox to Action",
    meta: "2026",
    summary:
      "Turns task emails and Zoom, Meet and Teams invites into one prioritized Notion list. Claude reads free-form requests, and a custom Today page syncs both ways.",
    stack: "Python, Claude API, Notion, Vercel · 156 tests",
    href: "https://github.com/j2jun/inbox-to-action",
    visual: { kind: "image", src: "/work/inbox-to-action.jpg", alt: "Inbox to Action's Today page" },
  },
  {
    title: "sniff",
    meta: "2026",
    summary:
      "Fake-recruiter take-home assignments are a real malware vector. sniff reads a repo without running anything and tells you what it would touch.",
    stack: "Python, Docker sandbox, CI on 3 OSes",
    href: "https://github.com/j2jun/sniff",
    visual: {
      kind: "terminal",
      lines: [
        "$ python3 sniff.py ./assignment",
        "HIGH  pipe-to-shell     install.sh:1",
        "HIGH  toolchain-shim    fix_env.py:2",
        "HIGH  npm-install-hook  package.json",
      ],
    },
  },
  {
    title: "SOC detection lab",
    meta: "2026",
    summary:
      "A mini security operations center: Sigma rules as code, Wazuh and Elastic, and attack simulations mapped to MITRE ATT&CK.",
    stack: "Sigma, Wazuh, Elastic, GitHub Actions",
    href: "https://github.com/j2jun/soc-detection-platform",
    visual: {
      kind: "terminal",
      lines: [
        "victim VMs ── wazuh agents",
        "      │",
        "wazuh manager ── sigma rules",
        "      │",
        "indexer + dashboards",
      ],
    },
  },
  {
    title: "Tech Hiring Tracker",
    meta: "2026",
    summary: "A weekly read on where tech hiring is moving, by region, role and level, from public sources.",
    stack: "JavaScript, Adzuna API",
    href: "/job-market/index.html",
    visual: { kind: "image", src: "/work/hiring-tracker.jpg", alt: "Tech Hiring Tracker headline" },
  },
  {
    title: "System Design Notes",
    meta: "2026",
    summary:
      "A public learning log of system design topics in plain language, with diagrams, trade-offs, AWS mappings and self-check questions. I add a note each time I learn something new.",
    stack: "Markdown, Mermaid, GitHub",
    href: "https://github.com/j2jun/system-design-notes",
    visual: {
      kind: "terminal",
      lines: [
        "$ ls notes/",
        "database-types.md",
        "horizontal-vs-vertical-scaling.md",
        "+ learning log, glossary, reading list",
      ],
    },
  },
];

export default function Home() {
  return (
    <>
      {/* Top chrome: photo in the corner, notched tab nav, time */}
      <header className="fixed inset-x-0 top-0 z-40 flex items-start justify-between px-4 pt-3 md:px-6">
        <a href="#top" className="flex items-center gap-2.5 rounded-full border border-line bg-chrome py-1 pl-1 pr-3.5 backdrop-blur-md">
          <span className="h-8 w-8 overflow-hidden rounded-full">
            <Image
              src="/avatar.png"
              alt=""
              width={96}
              height={96}
              priority
              className="h-full w-full origin-[50%_32%] scale-[1.9] object-cover"
            />
          </span>
          <span className="text-sm font-medium">Joseph Jun</span>
        </a>
        <nav aria-label="Primary" className="notch absolute left-1/2 top-0 hidden -translate-x-1/2 gap-8 bg-chrome px-14 pb-3 pt-3.5 text-sm backdrop-blur-md md:flex">
          <a href="#work" className="text-muted hover:text-fg">Work</a>
          <a href="#about" className="text-muted hover:text-fg">About</a>
          <a href="#contact" className="text-muted hover:text-fg">Contact</a>
        </nav>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="rounded-full border border-line bg-chrome px-4 py-2 text-sm backdrop-blur-md hover:text-muted">
          Résumé
        </a>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-5 text-center">
          <Sky />
          <div className="rise relative flex flex-col items-center gap-5">
            <h1 className="text-6xl font-semibold tracking-[-0.04em] md:text-8xl">Joseph Jun</h1>
            <p className="max-w-md text-lg text-fg/70">
              Software engineer in Bellevue, WA. I build backend systems that stay up.
            </p>
          </div>
          <div className="rise absolute bottom-24 px-5 text-sm" style={{ animationDelay: "0.3s" }}>
            <p className="day-only">
              <span className="font-medium">Day shows my work at Amazon and before.</span>
              <br />
              <span className="text-muted">Switch to night for what I build after hours.</span>
            </p>
            <p className="night-only">
              <span className="font-medium">Night shows what I build after hours.</span>
              <br />
              <span className="text-muted">Switch to day for my work at Amazon and before.</span>
            </p>
          </div>
        </section>

        {/* Statement */}
        <section id="about" className="flex min-h-[80svh] items-center justify-center px-5 py-32">
          <div className="flex max-w-3xl flex-col items-center gap-8 text-center">
            <p className="text-3xl font-medium leading-[1.2] tracking-[-0.02em] text-muted md:text-5xl">
              <span className="text-fg">Five years as an Army sergeant taught me</span> that
              reliability is a habit, not a feature. I&apos;ve been building that way since.
            </p>
            <p className="max-w-lg text-[15px] leading-relaxed text-muted">
              B.S. Math-CS, UC San Diego. Most recently a Software Development Engineer
              apprentice at Amazon Prime Video. Active DoD Secret clearance. Open to software
              engineering roles.
            </p>
          </div>
        </section>

        {/* Work, swapped by mode */}
        <section id="work" className="mx-auto max-w-6xl px-5 pb-32 md:px-8">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4 border-b border-line pb-5">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              <span className="day-only">Work at Amazon and before</span>
              <span className="night-only">Built after hours</span>
            </h2>
            <p className="text-sm text-muted">
              <span className="day-only">Switch to night for side projects</span>
              <span className="night-only">Switch to day for professional work</span>
            </p>
          </div>
          <ProjectGrid items={day} className="day-only" />
          <ProjectGrid items={night} className="night-only" />
        </section>

        {/* Contact */}
        <footer id="contact" className="border-t border-line px-5 pb-32 pt-24 md:px-8">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 md:grid-cols-[2fr_1fr_1fr]">
            <div className="flex flex-col gap-4">
              <p className="text-3xl font-medium tracking-tight md:text-4xl">Hiring, or want to talk systems?</p>
              <a href={`mailto:${EMAIL}`} className="link text-lg">{EMAIL}</a>
            </div>
            <div className="flex flex-col gap-2 text-sm">
              <p className="mb-2 text-faint">Elsewhere</p>
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="link w-fit">LinkedIn</a>
              <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="link w-fit">GitHub</a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="link w-fit">Résumé</a>
            </div>
            <div className="flex flex-col gap-2 text-sm text-muted">
              <p className="mb-2 text-faint">Local time</p>
              <span>Bellevue, WA</span>
              <Clock />
            </div>
          </div>
          <p className="mx-auto mt-20 max-w-6xl text-sm text-faint">© 2026 Joseph Jun</p>
        </footer>
      </main>

      <ModeSwitch />
    </>
  );
}

function ProjectGrid({ items, className }: { items: Project[]; className: string }) {
  return (
    <div className={`grid grid-cols-1 gap-x-6 gap-y-14 md:grid-cols-2 ${className}`}>
      {items.map((p) => {
        const external = p.href?.startsWith("http");
        const linkProps = p.href
          ? { href: p.href, ...(external ? { target: "_blank", rel: "noopener noreferrer" } : {}) }
          : null;
        return (
          <article key={p.title} className="group flex flex-col gap-4">
            {linkProps ? (
              <a {...linkProps} aria-label={`Open ${p.title}`} className="block">
                <VisualPanel v={p.visual} />
              </a>
            ) : (
              <VisualPanel v={p.visual} />
            )}
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-xl font-semibold tracking-tight">
                {linkProps ? (
                  <a {...linkProps} className="link">{p.title}</a>
                ) : (
                  p.title
                )}
              </h3>
              <span className="shrink-0 text-sm text-faint">{p.meta}</span>
            </div>
            <p className="max-w-prose text-[15px] leading-relaxed text-muted">{p.summary}</p>
            <p className="text-[13px] text-faint">{p.stack}</p>
          </article>
        );
      })}
    </div>
  );
}

function VisualPanel({ v }: { v: Visual }) {
  const frame = "relative aspect-[16/10] overflow-hidden rounded-2xl border border-line bg-panel";
  if (v.kind === "image") {
    return (
      <div className={frame}>
        <Image
          src={v.src}
          alt={v.alt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none"
        />
      </div>
    );
  }
  if (v.kind === "terminal") {
    return (
      <div className={`${frame} flex flex-col justify-center bg-[#0a0d14] p-6 md:p-10`}>
        <pre className="overflow-hidden font-mono text-[12px] leading-relaxed text-[#c9d3e0] md:text-sm">
          {v.lines.map((l, i) => (
            <div key={i} className={l.startsWith("HIGH") ? "text-[#ff9b8f]" : l.startsWith("$") ? "text-[#8fb4ff]" : ""}>
              {l}
            </div>
          ))}
        </pre>
      </div>
    );
  }
  return (
    <div className={`${frame} flex flex-col justify-end p-6 text-[#0d1722] md:p-8`} style={{ background: v.sky }}>
      <div className="text-6xl font-semibold tracking-[-0.04em] md:text-7xl">{v.value}</div>
      <div className="mt-2 text-sm text-[#0d1722]/65">{v.label}</div>
    </div>
  );
}
