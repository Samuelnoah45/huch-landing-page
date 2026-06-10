"use client";

import { useState, useEffect } from "react";
import { Theme } from "../types";

interface Props {
  theme: Theme;
  setTheme: (t: Theme) => void;
}

export default function HuchNav({ theme, setTheme }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const isOrange = theme === "orange";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const g1 = isOrange ? "#FF4B16" : "#21E6A4";
  const g2 = isOrange ? "#FFB020" : "#5B8CFF";
  const logoInk = isOrange ? "#2A0900" : "#04150F";

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="wrap">
        <a className="brand" href="#top" aria-label="Huch home">
          <svg className="mark" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <rect width="32" height="32" rx="9" fill="url(#mg-nav)" />
            <path d="M10 9v14M22 9v14M10 16h12" stroke={logoInk} strokeWidth="2.6" strokeLinecap="round" />
            <defs>
              <linearGradient id="mg-nav" x1="0" y1="0" x2="32" y2="32">
                <stop stopColor={g1} /><stop offset="1" stopColor={g2} />
              </linearGradient>
            </defs>
          </svg>
          huch
        </a>

        <nav className="nav-links">
          <a href="#solution">Solution</a>
          <a href="#why">Why Huch</a>
          <a href="#how">How it works</a>
          <a href="#developers">Developers</a>
          <a href="#security">Security</a>
        </nav>

        <div className="theme-toggle">
          <button
            className={theme === "green" ? "active" : ""}
            onClick={() => setTheme("green")}
            aria-label="Switch to green theme"
          >
            <span className="swatch" style={{ background: "#21E6A4" }} />
            Green
          </button>
          <button
            className={theme === "orange" ? "active" : ""}
            onClick={() => setTheme("orange")}
            aria-label="Switch to orange theme"
          >
            <span className="swatch" style={{ background: "#FF4B16" }} />
            Orange
          </button>
        </div>

        <div className="nav-cta">
          <a className="signin" href="#">Sign in</a>
          <a className="btn btn-primary" href="#cta">
            Get started
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
