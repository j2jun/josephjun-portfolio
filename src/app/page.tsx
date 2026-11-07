import Image from "next/image";
import Clock from "@/components/Clock";
import WorkList, { type Work } from "@/components/WorkList";

const EMAIL = "jhjun713@gmail.com";

const links = [
  { label: "Email", href: `mailto:${EMAIL}` },
  { label: "LinkedIn", href: "https://linkedin.com/in/j2jun" },
  { label: "GitHub", href: "https://github.com/j2jun" },
  { label: "Résumé", href: "/resume.pdf" },
];

const work: Work[] = [
  {
    title: "Inbox to Action",
    year: "2026",
    summary:
      "Turns task emails and Zoom, Meet and Teams invites into one prioritized Notion list. Claude reads free-form requests, and a custom Today page syncs both ways.",
    stack: ["Python", "Claude API", "Notion", "Vercel", "156 tests"],
    href: "https://github.com/j2jun/inbox-to-action",
    image: { src: "/work/inbox-to-action.jpg", alt: "Inbox to Action's Today page" },
  },
  {
    title: "Tech Hiring Tracker",
    year: "2026",
    summary:
      "A weekly read on where tech hiring is moving, by region, role and level, built from public sources.",
    stack: ["JavaScript", "Adzuna API"],
    href: "/job-market/index.html",
    image: { src: "/work/hiring-tracker.jpg", alt: "Tech Hiring Tracker headline" },
  },
  {
    title: "Service registry migration at Prime Video",
    year: "2025",
    summary:
      "Moved service metadata from S3 to DynamoDB and consolidated the automation around it, cutting operational cost about 40%.",
    stack: ["DynamoDB", "S3"],
    stat: { value: "−40%", label: "operational cost" },
  },
  {
    title: "Database reliability at CITMIT",
    year: "2023",
    summary:
      "Indexed and restructured MySQL queries, added a distributed cache and automated disaster recovery. Queries got 30% faster and peak load fell by half.",
    stack: ["MySQL", "Bash", "S3"],
    stat: { value: "−50%", label: "peak database load" },
  },
  {
    title: "Donation transparency at Tech for Good",
    year: "2021",
    summary:
      "A Solidity smart-contract platform that shows donors where their money goes, audited for fraud vectors, with verification 40% faster.",
    stack: ["Solidity", "JavaScript", "PostgreSQL"],
    stat: { value: "40%", label: "faster verification" },
  },
];

const experience = [
  {
    org: "Amazon Prime Video",
    role: "Software Development Engineer, Apprentice",
    dates: "2025–26",
    bullets: [
      "Migrated service metadata from S3 to DynamoDB, cutting operational costs ~40%.",
      "Built an internal privacy-review library used across Prime Video services.",
      "Refactored CI/CD reporting pipelines and executive dashboards to catch release issues sooner.",
      "Designed a centralized content-abuse intelligence pipeline for anti-piracy detection.",
    ],
  },
  {
    org: "CITMIT",
    role: "Backend Developer Intern",
    dates: "2023",
    bullets: [
      "Cut MySQL query time 30% through indexing and query optimization.",
      "Designed a distributed caching layer, reducing peak database load 50%.",
      "Built an automated disaster-recovery pipeline with Bash and S3.",
    ],
  },
  {
    org: "Tech for Good Inc.",
    role: "Software Engineering Intern",
    dates: "2021",
    bullets: [
      "Built a blockchain donation platform in Solidity and JavaScript.",
      "Designed and audited smart contracts, closing fraudulent-transaction vectors.",
      "Tuned PostgreSQL schema and queries, cutting verification latency 40%.",
    ],
  },
  {
    org: "U.S. Army",
    role: "Sergeant, Squad Leader",
    dates: "2015–20",
    bullets: [
      "Led and mentored 15+ soldiers, with a 20% squad promotion rate.",
      "Managed $3M+ in mission-critical equipment at a 95% inspection pass rate.",
      "Streamlined logistics and resource planning, reducing overhead 20%.",
    ],
  },
];

const stack =
  "Python, Java, Kotlin, TypeScript, SQL, AWS (S3, DynamoDB, IAM, CloudFormation), distributed systems, REST APIs, CI/CD, PostgreSQL, Redshift, React, Next.js";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-5">
      <h2 className="text-sm text-faint">{title}</h2>
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <main className="rise mx-auto flex min-h-svh max-w-[640px] flex-col gap-20 px-5 py-14 md:py-24">
      <header className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <span className="h-12 w-12 shrink-0 overflow-hidden rounded-full bg-hover ring-1 ring-line">
            <Image
              src="/avatar.png"
              alt="Joseph Jun"
              width={144}
              height={144}
              priority
              className="h-full w-full origin-[50%_32%] scale-[1.9] object-cover"
            />
          </span>
          <div className="leading-tight">
            <h1 className="font-semibold">Joseph Jun</h1>
            <p className="text-muted">Software engineer</p>
          </div>
        </div>
        <a
          href={`mailto:${EMAIL}`}
          className="flex items-center gap-2 rounded-full border border-line px-3 py-1.5 text-sm text-muted transition-colors hover:text-fg"
        >
          <span className="live-dot h-1.5 w-1.5 rounded-full bg-live" />
          Open to roles
        </a>
      </header>

      <section className="flex flex-col gap-5 text-[17px] leading-relaxed">
        <p>
          I build backend systems that stay up. Most recently I was a software engineer at{" "}
          <span className="font-medium">Amazon Prime Video</span>, working on service
          infrastructure, privacy tooling and anti-piracy pipelines.
        </p>
        <p className="text-muted">
          Before software I spent five years as a U.S. Army sergeant, which is where I learned
          that reliability is a habit. I studied Math-CS at UC San Diego, hold an active DoD
          Secret clearance and live in Bellevue, WA.
        </p>
        <nav aria-label="Links" className="flex flex-wrap gap-x-5 gap-y-2 text-[15px]">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              {...(l.href.startsWith("http") || l.href.endsWith(".pdf")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="link"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </section>

      <Section title="Projects">
        <WorkList items={work} />
      </Section>

      <Section title="Experience">
        <ul className="-mx-3">
          {experience.map((job) => (
            <li key={job.org}>
              <details className="group rounded-lg px-3 py-3 transition-colors hover:bg-hover open:bg-hover">
                <summary className="flex cursor-pointer list-none items-baseline justify-between gap-4 [&::-webkit-details-marker]:hidden">
                  <span>
                    <span className="font-medium">{job.org}</span>
                    <span className="text-muted"> · {job.role}</span>
                    <span aria-hidden className="ml-1.5 inline-block text-faint transition-transform group-open:rotate-90">
                      ›
                    </span>
                  </span>
                  <span className="shrink-0 text-sm tabular-nums text-faint">{job.dates}</span>
                </summary>
                <ul className="mt-3 flex flex-col gap-1.5 text-[15px] leading-relaxed text-muted">
                  {job.bullets.map((b) => (
                    <li key={b} className="relative pl-4 before:absolute before:left-0 before:text-faint before:content-['–']">
                      {b}
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Before code">
        <p className="text-[17px] leading-relaxed">
          From 2015 to 2020 I served in Tacoma, WA and Pyeongtaek, South Korea. I led a squad of{" "}
          <span className="font-medium">15+ soldiers</span>, kept{" "}
          <span className="font-medium">$3M+ of equipment</span> mission-ready at a{" "}
          <span className="font-medium">95% inspection pass rate</span>, and learned to stay calm
          when things break. On-call works the same way.
        </p>
      </Section>

      <Section title="Stack">
        <p className="text-[15px] leading-relaxed text-muted">{stack}</p>
      </Section>

      <footer className="mt-auto flex flex-col gap-6 border-t border-line pt-8">
        <p className="text-[17px]">
          Hiring, or want to talk systems?{" "}
          <a href={`mailto:${EMAIL}`} className="link">
            {EMAIL}
          </a>
        </p>
        <div className="flex justify-between text-sm text-faint">
          <span>© 2026 Joseph Jun</span>
          <span>
            Bellevue, <Clock />
          </span>
        </div>
      </footer>
    </main>
  );
}
