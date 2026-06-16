"use client";

import { useState, useEffect } from "react";
import { Theme, Mode } from "./types";
import "./huch.css";

import HuchNav        from "./components/HuchNav";
import HuchHero       from "./components/HuchHero";
import HuchTrust      from "./components/HuchTrust";
import HuchStats      from "./components/HuchStats";
import HuchBento      from "./components/HuchBento";
import HuchSteps      from "./components/HuchSteps";
import HuchSecurity   from "./components/HuchSecurity";
import HuchDevelopers from "./components/HuchDevelopers";
import HuchCTA        from "./components/HuchCTA";
import HuchFooter     from "./components/HuchFooter";

export default function HuchPage({ theme: initialTheme }: { theme: Theme }) {
  const [theme, setTheme] = useState<Theme>(initialTheme);
  const [mode,  setMode]  = useState<Mode>("dark");

  // Override app body background while on this page
  useEffect(() => {
    const prev = document.body.style.background;
    document.body.style.background = mode === "light" ? "#F7F9FC" : "#06080C";
    return () => { document.body.style.background = prev; };
  }, [mode]);

  // Scroll-reveal for all .reveal elements
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".hp .reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const sibs = e.target.parentElement?.querySelectorAll(".reveal") ?? [];
          let delay = 0;
          Array.from(sibs).forEach((s, i) => { if (s === e.target) delay = Math.min(i, 5) * 60; });
          (e.target as HTMLElement).style.transitionDelay = `${delay}ms`;
          e.target.classList.add("in");
          io.unobserve(e.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="hp" data-theme={theme} data-mode={mode}>
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&family=Hanken+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />

      <HuchNav theme={theme} setTheme={setTheme} mode={mode} setMode={setMode} />

      <main id="top">
        <HuchHero       theme={theme} />
        <HuchTrust />
        <HuchStats />
        <HuchBento />
        <HuchSteps />
        <HuchSecurity />
        <HuchDevelopers />
        <HuchCTA />
      </main>

      <HuchFooter theme={theme} />
    </div>
  );
}
