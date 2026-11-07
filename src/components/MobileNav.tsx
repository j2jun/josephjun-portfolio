"use client";

import { useEffect, useState } from "react";

type NavLink = { href: string; label: string };

export default function MobileNav({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);

  // Close the menu on escape and lock body scroll while it's open.
  useEffect(() => {
    if (!open) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        className="caps relative z-30 text-xs"
      >
        {open ? "Close/" : "Menu/"}
      </button>

      {open && (
        <nav
          id="mobile-nav-panel"
          aria-label="Mobile"
          className="fixed inset-0 z-20 flex flex-col justify-center gap-2 bg-ink px-4"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="display text-[18vw] text-white"
            >
              {l.label}/
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}
