<div align="center">

<a href="https://josephjun.vercel.app/">
  <img src="https://josephjun.vercel.app/opengraph-image" alt="Joseph Jun — Software Engineer" width="720" />
</a>

# Joseph Jun

**Software engineer building reliable, scalable systems.**
Ex-Amazon Prime Video SDE apprentice · UC San Diego Math-CS · U.S. Army veteran · Active DoD Secret clearance

### 🌐 [josephjun.vercel.app](https://josephjun.vercel.app/)

[![Live site](https://img.shields.io/badge/live-josephjun.vercel.app-000?logo=vercel)](https://josephjun.vercel.app/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-j2jun-0A66C2?logo=linkedin)](https://linkedin.com/in/j2jun)
[![Résumé](https://img.shields.io/badge/résumé-PDF-red?logo=adobeacrobatreader)](https://josephjun.vercel.app/resume.pdf)
[![Email](https://img.shields.io/badge/email-jhjun713%40gmail.com-555?logo=gmail)](mailto:jhjun713@gmail.com)

</div>

---

## 👋 About

I build backend infrastructure, data pipelines, and developer tooling, most recently at **Amazon Prime Video**. Before software, I spent five years as a **Sergeant in the U.S. Army**, leading a 15+ person squad and managing $750K+ in equipment. That's where I learned to care about reliability and process. I'm currently **open to software engineering roles**.

## ☀️ Day: professional work

| | Impact |
|---|---|
| **Amazon Prime Video** | Migrated ~10,000 services S3 → DynamoDB (**~15% lower cost**); built Consensus Review, a two-person approval library adopted by Service Catalog and Operational Readiness Review; privacy and anti-abuse tooling; review prep cut from **2 weeks to 1–3 days** |
| **CITMIT** | MySQL tuning + caching layer: **30% faster queries, ~20% less peak DB load**; automated disaster recovery |
| **Tech for Good** | Solidity donation-transparency platform, **40% faster verification** |
| **U.S. Army** | Sergeant, led 15+ personnel, **$750K+** of equipment at a **95%** inspection pass rate |

## 🌙 Night: built after hours

| Project | What it does |
|---|---|
| **[Inbox to Action](https://github.com/j2jun/inbox-to-action)** | Turns task emails and meeting invites into one prioritized Notion list, with Claude reading free-form requests. **156 automated tests** |
| **[sniff](https://github.com/j2jun/sniff)** | Scans take-home assignments for fake-recruiter malware without running anything, plus a Docker sandbox. CI on macOS, Linux and Windows |
| **[SOC detection lab](https://github.com/j2jun/soc-detection-platform)** | Mini security operations center: Sigma rules as code, Wazuh and Elastic, attack simulations mapped to MITRE ATT&CK |
| **[Tech Hiring Tracker](https://josephjun.vercel.app/job-market/index.html)** | Weekly read on where tech hiring is moving, by region, role and level |
| **[System Design Notes](https://github.com/j2jun/system-design-notes)** | Public learning log of system design topics with diagrams, trade-offs and AWS mappings |

## 🛠️ Built with

![Next.js](https://img.shields.io/badge/Next.js_16-000?logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_v4-06B6D4?logo=tailwindcss&logoColor=fff)
![Vercel](https://img.shields.io/badge/Vercel-000?logo=vercel)

- **Next.js 16** App Router, TypeScript, single-page layout driven by plain data arrays in [`src/app/page.tsx`](src/app/page.tsx)
- **Day/night switch**: day shows professional work, night shows side projects; opens on the visitor's own sky
- Canvas starfield with shooting stars, CSS sun, moon and drifting clouds (no 3D libraries); Tailwind CSS v4, Instrument Sans
- Dynamic **Open Graph image** ([`opengraph-image.tsx`](src/app/opengraph-image.tsx)) for link previews
- **Vercel** deploys on every push, with preview deployments per PR

## 💻 Run locally

```bash
npm install
npm run dev   # http://localhost:3000
```

To update content, edit the `experience`, `work`, and `skills` arrays at the top of `src/app/page.tsx`.

---

<div align="center">

**Hiring? Let's talk.** → [jhjun713@gmail.com](mailto:jhjun713@gmail.com)

</div>
