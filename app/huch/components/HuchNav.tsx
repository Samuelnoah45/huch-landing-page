"use client";

import { useState, useEffect } from "react";
import { Theme, Mode } from "../types";

interface Props {
  theme:    Theme;
  setTheme: (t: Theme) => void;
  mode:     Mode;
  setMode:  (m: Mode) => void;
}

export default function HuchNav({ theme, setTheme, mode, setMode }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const isOrange = theme === "orange";
  const isLight  = mode === "light";

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

        <button
          className="mode-toggle"
          onClick={() => setMode(isLight ? "dark" : "light")}
          aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
        >
          {isLight ? (
            <svg viewBox="0 0 24 24" fill="none" width="17" height="17" aria-hidden="true">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" width="17" height="17" aria-hidden="true">
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
              <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>

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
