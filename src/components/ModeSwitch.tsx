"use client";

import { useEffect, useState } from "react";

type Mode = "day" | "night";

// Day shows professional work, night shows side projects. The initial mode is set
// before paint (layout.tsx) from a saved choice or the visitor's local hour.
export default function ModeSwitch() {
  const [mode, setMode] = useState<Mode | null>(null);

  useEffect(() => {
    // Sync from the attribute the pre-paint script already set.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMode(document.documentElement.dataset.mode as Mode);
  }, []);

  function pick(next: Mode) {
    setMode(next);
    document.documentElement.setAttribute("data-mode", next);
    try {
      localStorage.setItem("mode", next);
    } catch {}
  }

  const btn = (m: Mode, label: string, icon: React.ReactNode) => (
    <button
      type="button"
      onClick={() => pick(m)}
      aria-pressed={mode === m}
      aria-label={label}
      className={`flex h-11 w-16 items-center justify-center rounded-full transition-colors ${
        mode === m ? "bg-fg/12 text-fg" : "text-muted hover:text-fg"
      }`}
    >
      {icon}
    </button>
  );

  return (
    <div className="fixed inset-x-0 bottom-5 z-40 flex justify-center">
      <div className="flex gap-1 rounded-full border border-line bg-chrome p-1 shadow-lg backdrop-blur-md">
        {btn(
          "night",
          "Night: side projects",
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z" />
          </svg>,
        )}
        {btn(
          "day",
          "Day: professional work",
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
          </svg>,
        )}
      </div>
    </div>
  );
}
