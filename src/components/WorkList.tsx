"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export type Work = {
  title: string;
  year: string;
  summary: string;
  stack: string[];
  href?: string;
  image?: { src: string; alt: string };
  stat?: { value: string; label: string };
};

// Project rows. On hover-capable screens, a preview card follows the cursor.
export default function WorkList({ items }: { items: Work[] }) {
  const [active, setActive] = useState<number | null>(null);
  const card = useRef<HTMLDivElement>(null);

  function move(e: React.PointerEvent) {
    if (e.pointerType !== "mouse" || !card.current) return;
    // Ride in the right margin, tracking the cursor vertically, so it never covers the text.
    const right = e.currentTarget.getBoundingClientRect().right;
    card.current.style.transform = `translate(${right + 40}px, ${e.clientY - 90}px)`;
  }

  return (
    <div onPointerMove={move} onPointerLeave={() => setActive(null)}>
      <ul className="-mx-3">
        {items.map((w, i) => {
          const external = w.href?.startsWith("http");
          const Row = w.href ? "a" : "div";
          return (
            <li key={w.title}>
              <Row
                {...(w.href ? { href: w.href } : {})}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                onPointerEnter={(e: React.PointerEvent) => e.pointerType === "mouse" && setActive(i)}
                className="group flex flex-col gap-1 rounded-lg px-3 py-3 transition-colors hover:bg-hover"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-medium">
                    {w.title}
                    {w.href && (
                      <span aria-hidden className="ml-1 inline-block text-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                        ↗
                      </span>
                    )}
                  </span>
                  <span className="shrink-0 text-sm tabular-nums text-faint">{w.year}</span>
                </div>
                <p className="text-[15px] leading-relaxed text-muted">{w.summary}</p>
                <p className="text-[13px] text-faint">{w.stack.join(", ")}</p>
              </Row>
            </li>
          );
        })}
      </ul>

      <div
        ref={card}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-50 hidden xl:block"
      >
        {items.map((w, i) => (
          <div
            key={w.title}
            className={`absolute left-0 top-0 h-[180px] w-[260px] overflow-hidden rounded-xl border border-line bg-bg shadow-2xl transition-[opacity,scale] duration-200 motion-reduce:transition-none ${
              active === i ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
          >
            {w.image ? (
              <Image src={w.image.src} alt="" fill sizes="260px" className="object-cover object-top" />
            ) : (
              <div className="flex h-full flex-col justify-end bg-fg p-5 text-bg">
                <div className="text-5xl font-semibold tracking-tight">{w.stat?.value}</div>
                <div className="mt-1 text-sm opacity-60">{w.stat?.label}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
