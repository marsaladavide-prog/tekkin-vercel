import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tekkin — Platform for Minimal / Tech House Producers",
  description:
    "Tekkin is a platform supporting Minimal and Tech House producers with mastering, Spotlight analytics, and mentorship. Powered by Davide Marsala.",

  // ✅ TAG UFFICIALE DI VERIFICA FACEBOOK
  other: {
    "facebook-domain-verification": "m0q10ed41llq920x0znso4v0l3yfg3",
  },

  // ✅ OPEN GRAPH / SEO
  openGraph: {
    title: "Tekkin",
    description:
      "Analyzer Pro — Spotlight — Sample Packs — Dashboard — Mentoring for producers.",
    url: "https://tekkin.it",
    siteName: "Tekkin",
    images: [
      {
        url: "/tekkin-logo.png",
        width: 800,
        height: 600,
        alt: "Tekkin Logo",
      },
    ],
    type: "website",
  },
  icons: {
    icon: "/tekkin-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
