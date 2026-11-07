"use client";

import { useEffect, useState } from "react";

const fmt = new Intl.DateTimeFormat("en-US", {
  hour: "numeric",
  minute: "2-digit",
  second: "2-digit",
  timeZone: "America/Los_Angeles",
});

// Live Bellevue time. Renders empty on the server to avoid a hydration mismatch.
export default function Clock() {
  const [now, setNow] = useState<string>("");

  useEffect(() => {
    const tick = () => setNow(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <time suppressHydrationWarning className="tabular-nums">
      {now ? `${now} PT` : " "}
    </time>
  );
}
