import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
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
    <html lang="en" className={archivo.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
