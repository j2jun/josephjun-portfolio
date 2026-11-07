import type { Metadata } from "next";
import { IBM_Plex_Mono, Instrument_Sans } from "next/font/google";
import "./globals.css";

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
});

// Only for real terminal output in project previews.
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-plex-mono",
});

// Runs before paint: saved choice, else the visitor's own sky (day 6am-6pm local).
const modeScript = `(function(){var m;try{m=localStorage.getItem('mode')}catch(e){}if(m!=='day'&&m!=='night'){var h=new Date().getHours();m=h>=6&&h<18?'day':'night'}document.documentElement.dataset.mode=m})();`;

const siteUrl = "https://josephjun.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Joseph Jun — Software Engineer",
  description:
    "Portfolio of Joseph Jun, a software engineer building reliable, scalable systems, actively seeking his next role.",
  openGraph: {
    title: "Joseph Jun — Software Engineer",
    description:
      "Software engineer building reliable, scalable systems, actively seeking his next role.",
    url: siteUrl,
    siteName: "Joseph Jun",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joseph Jun — Software Engineer",
    description:
      "Software engineer building reliable, scalable systems, actively seeking his next role.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${instrument.variable} ${plexMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: modeScript }} />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
