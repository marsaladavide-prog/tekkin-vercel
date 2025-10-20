"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Head from "next/head";

export default function HomePage() {
  const pathname = usePathname();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, [pathname]);

  return (
    <>
      {/* === META TAGS PER FACEBOOK / SEO === */}
      <Head>
        <title>Tekkin — Platform for Minimal / Tech House Producers</title>
        <meta
          name="description"
          content="Tekkin is a platform supporting Minimal and Tech House producers with mastering, Spotlight analytics, and mentorship. Powered by Davide Marsala."
        />
        <meta property="og:title" content="Tekkin" />
        <meta
          property="og:description"
          content="Analyzer Pro — Spotlight — Sample Packs — Dashboard — Mentoring for producers."
        />
        <meta property="og:image" content="/tekkin-logo.png" />
        <meta property="og:url" content="https://tekkin.it" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Tekkin" />
      </Head>

      <main className="relative min-h-screen bg-[#0b0b0b] text-zinc-200 flex flex-col items-center justify-center overflow-hidden">
        {/* === SFONDO === */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 pointer-events-none animate-scanlines bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.04),rgba(255,255,255,0.04)_1px,transparent_2px,transparent_4px)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(67,255,210,0.05)_0%,transparent_70%)] animate-pulse opacity-40"></div>
        </div>

        {/* === CONTENUTO === */}
        <h1 className="text-4xl font-bold tracking-[0.2em] mb-6 z-10">TEKKIN</h1>
        <p className="text-zinc-400 mb-8 text-center max-w-lg z-10">
          Analyzer Pro - Spotlight - Sample Packs - Dashboard
        </p>

        <div className="flex flex-wrap justify-center gap-4 z-10">
          <a
            href="/spotlight"
            className="border border-[#222] rounded-md px-6 py-3 hover:bg-[#111]"
          >
            Tekkin Spotlight
          </a>

          <a
            href="/analyzer"
            className="border border-[#222] rounded-md px-6 py-3 hover:bg-[#111]"
          >
            Analyzer Pro
          </a>

          <a
            href="/sample-packs"
            className="border border-[#222] rounded-md px-6 py-3 hover:bg-[#111]"
          >
            Sample Packs
          </a>

          <a
            href="/mentoring-pro"
            className="border border-[#222] rounded-md px-6 py-3 hover:bg-[#111]"
          >
            Mentoring Pro
          </a>

          <a
            href="/news"
            className="border border-[#222] rounded-md px-6 py-3 hover:bg-[#111]"
          >
            News & Tips
          </a>
        </div>

        <footer className="mt-16 text-sm text-zinc-600 text-center z-10">
          © {new Date().getFullYear()} Tekkin — Davide Marsala
        </footer>

        <style jsx>{`
          @keyframes scanlines {
            0% {
              background-position: 0 0;
            }
            100% {
              background-position: 0 4px;
            }
          }

          .animate-scanlines {
            animation: scanlines 0.15s linear infinite;
            background-size: 100% 4px;
          }
        `}</style>
      </main>
    </>
  );
}
