import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
});

const siteUrl = "https://josephjun-portfolio.vercel.app";

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
    <html lang="en" className={instrument.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
