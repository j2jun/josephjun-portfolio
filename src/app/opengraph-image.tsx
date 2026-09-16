import { ImageResponse } from "next/og";

export const alt = "Joseph Jun — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#0a0b0d",
          color: "#f2f2f0",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 32, color: "#22d3ee", letterSpacing: 2 }}>
          [ software engineer ]
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", fontSize: 88, fontWeight: 700, lineHeight: 1.1 }}>
            Joseph Jun
          </div>
          <div style={{ display: "flex", fontSize: 40, color: "#9a9a94" }}>
            Building reliable, scalable systems.
          </div>
        </div>

        <div style={{ display: "flex", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: 26,
              color: "#9a9a94",
              border: "2px solid rgba(255,255,255,0.14)",
              borderRadius: 8,
              padding: "12px 22px",
            }}
          >
            Bellevue, WA
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: 26,
              color: "#22d3ee",
              border: "2px solid #22d3ee",
              borderRadius: 8,
              padding: "12px 22px",
            }}
          >
            Active DoD Secret Clearance
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
