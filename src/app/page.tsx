import Image from "next/image";
import Clock from "@/components/Clock";
import MobileNav from "@/components/MobileNav";

const EMAIL = "jhjun713@gmail.com";
const LINKEDIN = "https://linkedin.com/in/j2jun";
const GITHUB = "https://github.com/j2jun";

const experience = [
  {
    role: "Software Development Engineer, Apprentice",
    dates: "2025–2026",
    org: "Amazon Prime Video",
    place: "Seattle, WA",
    bullets: [
      "Migrated service metadata from S3 to DynamoDB, consolidating automation workflows and cutting operational costs ~40%.",
      "Built an internal privacy-review library, improving security compliance and error handling across Prime Video services.",
      "Refactored CI/CD reporting pipelines and executive dashboards, shortening time-to-detect on release issues.",
      "Designed a centralized content-abuse intelligence pipeline for anti-piracy detection.",
    ],
  },
  {
    role: "Backend Developer Intern",
    dates: "2023",
    org: "CITMIT",
    place: "La Jolla, CA",
    bullets: [
      "Cut MySQL query execution time 30% through indexing and query optimization.",
      "Designed a distributed caching layer, reducing peak database load 50%.",
      "Built an automated disaster-recovery pipeline using Bash and S3.",
    ],
  },
  {
    role: "Software Engineering Intern",
    dates: "2021",
    org: "Tech for Good Inc.",
    place: "Boston, MA",
    bullets: [
      "Built a blockchain donation platform in Solidity and JavaScript for transparent transaction tracking.",
      "Designed and audited smart contracts, closing fraudulent-transaction vectors.",
      "Optimized PostgreSQL schema and queries, cutting verification latency 40%.",
    ],
  },
  {
    role: "Sergeant, Squad Leader",
    dates: "2015–2020",
    org: "U.S. Army",
    place: "Tacoma, WA & Pyeongtaek, South Korea",
    bullets: [
      "Led and mentored a team of 15+ soldiers; 20% squad promotion rate.",
      "Managed $3M+ in mission-critical equipment at a 95% inspection pass rate.",
      "Streamlined logistics and resource planning, reducing operational overhead 20%.",
    ],
  },
];

type Work = {
  title: string;
  year: string;
  summary: string;
  stack: string[];
  href?: string;
  image?: { src: string; alt: string };
  stat?: { value: string; label: string };
  wide?: boolean;
};

const work: Work[] = [
  {
    title: "Inbox to Action",
    year: "2026",
    summary:
      "Turns task emails and Zoom, Meet and Teams invites into one prioritized Notion list. Claude reads free-form requests; a custom Today page syncs both ways. 156 automated tests.",
    stack: ["Python", "Claude API", "Notion", "Vercel"],
    href: "https://github.com/j2jun/inbox-to-action",
    image: { src: "/work/inbox-to-action.jpg", alt: "Inbox to Action's Today page: tasks grouped by overdue, today, tomorrow and this week" },
    wide: true,
  },
  {
    title: "Tech Hiring Tracker",
    year: "2026",
    summary:
      "A weekly-refreshed read on where tech hiring is moving, by region, role and level, built from public sources.",
    stack: ["JavaScript", "Adzuna API", "Static site"],
    href: "/job-market/index.html",
    image: { src: "/work/hiring-tracker.jpg", alt: "Tech Hiring Tracker headline: tech hiring isn't shrinking, it's moving" },
  },
  {
    title: "Service Registry Modernization",
    year: "2025",
    summary:
      "Led the move of Prime Video service metadata from S3 to DynamoDB, consolidating fragmented automation.",
    stack: ["DynamoDB", "S3", "Automation"],
    stat: { value: "−40%", label: "operational cost" },
  },
  {
    title: "Platform Reliability",
    year: "2023",
    summary:
      "Indexed and restructured MySQL queries, added a distributed cache and an automated Bash/S3 disaster-recovery pipeline for a construction-management platform.",
    stack: ["MySQL", "Bash", "S3"],
    stat: { value: "−50%", label: "peak database load" },
  },
  {
    title: "Donation Transparency",
    year: "2021",
    summary:
      "A Solidity smart-contract platform that shows donors where their money goes, audited for fraud vectors, on a tuned PostgreSQL backend.",
    stack: ["Solidity", "JavaScript", "PostgreSQL"],
    stat: { value: "40%", label: "faster verification" },
  },
];

const skills: [string, string[]][] = [
  ["Languages", ["Python", "Java", "Kotlin", "TypeScript", "JavaScript", "SQL", "Solidity"]],
  ["Backend & systems", ["Distributed systems", "Microservices", "REST APIs", "Node.js", "Django"]],
  ["Cloud & DevOps", ["AWS (S3, DynamoDB, IAM)", "CloudFormation", "CI/CD", "Linux", "IaC"]],
  ["Data", ["ETL pipelines", "PostgreSQL", "Redshift", "Pandas", "TensorFlow"]],
  ["Security & privacy", ["Privacy engineering", "Anti-piracy automation", "Threat assessment"]],
  ["Frontend", ["React", "Next.js", "Responsive UI", "Component architecture"]],
  ["Operations", ["Root cause analysis", "Incident response", "Cross-functional leadership"]],
];

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const pad = "px-4 md:px-8";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section id="top" className={`relative flex min-h-svh flex-col overflow-hidden bg-ink text-white ${pad}`}>
        <header className="caps relative z-10 grid grid-cols-2 items-center gap-4 py-5 text-xs md:grid-cols-[1fr_1fr_2fr_1fr_auto]">
          <a href="#top" className="font-semibold">Joseph/Jun</a>
          <span className="hidden text-grey md:inline">Bellevue, WA</span>
          <nav aria-label="Primary" className="hidden gap-5 md:flex">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-grey">
                {l.label}/
              </a>
            ))}
          </nav>
          <span className="hidden text-grey md:inline">
            <Clock />
          </span>
          <div className="flex justify-end gap-5">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hidden underline-offset-4 hover:underline md:inline">
              Résumé
            </a>
            <a href={`mailto:${EMAIL}`} className="hidden md:inline">Let&apos;s talk</a>
            <MobileNav links={navLinks} />
          </div>
        </header>

        <div className="relative flex flex-1 items-center justify-center py-10">
          <TickRing className="ring-spin absolute aspect-square w-[min(92vw,720px)] text-dim" />
          <h1 className="display relative z-0 whitespace-nowrap text-[16.5vw] md:text-[15vw]">
            Joseph<span className="text-grey">/</span>Jun
          </h1>
          <div className="absolute left-1/2 top-1/2 z-10 aspect-[3/4] w-[34vw] max-w-[300px] -translate-x-1/2 -translate-y-1/2 overflow-hidden md:w-[22vw]">
            <Image
              src="/avatar.png"
              alt="Portrait of Joseph Jun"
              fill
              sizes="(min-width: 768px) 300px, 34vw"
              className="object-cover object-[50%_30%] grayscale"
              priority
            />
          </div>
          <Corners />
        </div>

        <div className="caps relative z-10 flex items-end justify-between gap-4 pb-5 text-xs">
          <div className="flex flex-col gap-1">
            <span>Software engineer, open to roles</span>
            <a href={`mailto:${EMAIL}`} className="text-grey hover:text-white">{EMAIL}</a>
          </div>
          <a href="#about" className="text-grey hover:text-white">Scroll down</a>
        </div>
      </section>

      {/* About */}
      <section id="about" className={`relative overflow-hidden py-28 md:py-40 ${pad}`}>
        <TickRing className="pointer-events-none absolute left-1/2 top-1/2 hidden aspect-square w-[1100px] -translate-x-1/2 -translate-y-1/2 text-black/15 md:block" />
        <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-12 text-center">
          <p className="caps text-2xl font-bold leading-[1.12] tracking-tight md:text-[2.6rem]">
            I build backend systems that stay up. Most recently at Amazon Prime Video, before that
            five years as a U.S. Army sergeant, where I learned that reliability is a habit, not a
            feature.
          </p>
          <p className="max-w-xl text-base leading-relaxed text-black/60">
            B.S. Mathematics-Computer Science, UC San Diego. Active DoD Secret clearance. Based in
            Bellevue, WA and looking for my next software engineering role.
          </p>
          <PillLink href="/resume.pdf" external>
            Download résumé
          </PillLink>
        </div>
      </section>

      {/* Work */}
      <section id="work" className={`pb-28 md:pb-40 ${pad}`}>
        <h2 className="caps mx-auto mb-14 max-w-2xl text-center text-3xl font-bold leading-[1.05] tracking-tight md:text-5xl">
          Work that shipped
        </h2>
        <div className="grid grid-cols-1 gap-x-4 gap-y-12 md:grid-cols-3">
          {work.map((w) => (
            <WorkTile key={w.title} w={w} />
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className={`relative overflow-hidden bg-ink py-28 text-white md:py-40 ${pad}`}>
        <h2 className="caps mb-16 text-center text-3xl font-bold leading-[1.05] tracking-tight md:text-5xl">
          Where I&apos;ve worked
        </h2>
        <div aria-hidden className="display pointer-events-none absolute left-0 top-1/2 hidden -translate-y-1/2 whitespace-nowrap text-[17vw] md:block">
          /Experience/Experience/
        </div>
        <ol className="relative grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-5">
          {experience.map((job, i) => (
            <li
              key={job.role}
              className={`flex flex-col gap-4 bg-card/95 p-6 backdrop-blur-sm ${i % 2 ? "md:mt-40" : ""}`}
            >
              <div className="caps flex justify-between text-xs text-grey">
                <span>
                  {String(i + 1).padStart(2, "0")}/<span className="text-dim">0{experience.length}</span>
                </span>
                <span>{job.dates}</span>
              </div>
              <div>
                <div className="caps text-lg font-bold leading-tight">{job.org}</div>
                <div className="mt-1 text-sm text-grey">{job.role}</div>
              </div>
              <span className="text-2xl font-light text-grey">{"//"}</span>
              <ul className="flex flex-col gap-2 text-[13px] leading-relaxed text-white/75">
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <div className="caps mt-auto pt-2 text-[11px] text-grey">{job.place}</div>
            </li>
          ))}
        </ol>

        {/* Skills */}
        <div className="relative mt-28 grid grid-cols-1 gap-10 md:mt-40 md:grid-cols-[1fr_2fr]">
          <h2 className="caps text-3xl font-bold leading-[1.05] tracking-tight md:text-5xl">
            What I work with
          </h2>
          <dl className="flex flex-col">
            {skills.map(([category, items]) => (
              <div key={category} className="grid grid-cols-1 gap-1 border-t border-white/10 py-4 md:grid-cols-[200px_1fr] md:gap-6">
                <dt className="caps text-sm font-semibold">{category}</dt>
                <dd className="text-sm text-grey">{items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Off the clock */}
      <section className={`py-28 md:py-40 ${pad}`}>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <h2 className="display text-[18vw] md:text-[9vw]">
            Before<br />code/
          </h2>
          <div className="flex flex-col justify-end gap-10">
            <p className="max-w-lg text-lg leading-relaxed text-black/70">
              From 2015 to 2020 I served in the U.S. Army in Tacoma, WA and Pyeongtaek, South
              Korea, rising to sergeant. I ran a squad, kept millions of
              dollars of equipment mission-ready and learned to stay calm when things break.
              It turns out on-call works the same way.
            </p>
            <dl className="grid grid-cols-3 gap-4 border-t border-black/15 pt-6">
              {[
                ["15+", "soldiers led"],
                ["$3M+", "equipment managed"],
                ["95%", "inspection pass rate"],
              ].map(([v, l]) => (
                <div key={l}>
                  <dd className="text-3xl font-bold tracking-tight md:text-4xl">{v}</dd>
                  <dt className="mt-1 text-sm text-black/60">{l}</dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className={`overflow-hidden bg-ink pt-28 text-white md:pt-40 ${pad}`}>
        <div className="flex flex-col items-center gap-10 text-center">
          <p className="caps max-w-md text-sm text-grey">Hiring, or just want to talk systems?</p>
          <a href={`mailto:${EMAIL}`} className="display text-[19vw] hover:text-grey md:text-[16vw]">
            Let&apos;s talk/
          </a>
          <div className="caps flex flex-wrap justify-center gap-6 text-sm">
            <a href={`mailto:${EMAIL}`} className="hover:text-grey">Email/</a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="hover:text-grey">LinkedIn/</a>
            <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="hover:text-grey">GitHub/</a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-grey">Résumé/</a>
          </div>
        </div>
        <footer className="caps mt-28 flex justify-between border-t border-white/10 py-5 text-[11px] text-grey">
          <span>© 2026 Joseph Jun</span>
          <a href="#top" className="hover:text-white">Back to top</a>
        </footer>
      </section>
    </main>
  );
}

function WorkTile({ w }: { w: Work }) {
  const external = w.href?.startsWith("http");
  const visual = w.image ? (
    <div className="relative aspect-[4/3] overflow-hidden bg-black/5">
      <Image
        src={w.image.src}
        alt={w.image.alt}
        fill
        sizes={w.wide ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
        className="object-cover object-top"
      />
    </div>
  ) : (
    <div className="flex aspect-[4/3] flex-col justify-end bg-ink p-6 text-white">
      <div className="display text-[22vw] md:text-[7.5vw]">{w.stat?.value}</div>
      <div className="caps mt-3 text-xs text-grey">{w.stat?.label}</div>
    </div>
  );

  return (
    <article className={`flex flex-col gap-3 ${w.wide ? "md:col-span-2" : ""}`}>
      {w.href ? (
        <a href={w.href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} aria-label={`Open ${w.title}`}>
          {visual}
        </a>
      ) : (
        visual
      )}
      <div className="caps flex justify-between text-xs font-semibold">
        <h3>{w.href ? <a href={w.href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="underline-offset-4 hover:underline">{w.title}</a> : w.title}</h3>
        <span>{w.year}/</span>
      </div>
      <p className="max-w-prose text-sm leading-relaxed text-black/65">{w.summary}</p>
      <p className="caps text-[11px] text-black/45">{w.stack.join(" / ")}</p>
    </article>
  );
}

function PillLink({ href, children, external }: { href: string; children: React.ReactNode; external?: boolean }) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group caps flex items-center gap-1 text-xs font-semibold"
    >
      <span className="rounded-full bg-black/10 px-5 py-3 group-hover:bg-black/15">{children}</span>
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-white transition-transform group-hover:-rotate-45">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </span>
    </a>
  );
}

// A ring of short radial ticks, drawn as a thick dashed circle.
function TickRing({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden>
      <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="2.4" strokeDasharray="0.25 1.7" />
    </svg>
  );
}

function Corners() {
  const c = "absolute text-sm text-grey";
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 hidden md:block">
      <span className={`${c} left-0 top-[18%]`}>{"//"}</span>
      <span className={`${c} right-0 top-[18%]`}>{"//"}</span>
      <span className={`${c} bottom-[18%] left-0`}>{"//"}</span>
      <span className={`${c} bottom-[18%] right-0`}>{"//"}</span>
    </div>
  );
}
