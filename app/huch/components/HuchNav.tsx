"use client";

import { useState, useEffect, useRef } from "react";
import { Theme, Mode } from "../types";

interface Props {
  theme:    Theme;
  setTheme: (t: Theme) => void;
  mode:     Mode;
  setMode:  (m: Mode) => void;
}

const THEMES: { value: Theme; label: string; color: string }[] = [
  { value: "green",  label: "Green",  color: "#21E6A4" },
  { value: "orange", label: "Orange", color: "#FF4B16" },
];

const MODES: { value: Mode; label: string }[] = [
  { value: "light", label: "Light" },
  { value: "dark",  label: "Dark"  },
];

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="14" height="14" aria-hidden="true">
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="14" height="14" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

export default function HuchNav({ theme, setTheme, mode, setMode }: Props) {
  const [scrolled,  setScrolled]  = useState(false);
  const [prefOpen,  setPrefOpen]  = useState(false);
  const prefRef = useRef<HTMLDivElement>(null);

  const isOrange = theme === "orange";
  const isLight  = mode  === "light";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    if (!prefOpen) return;
    const handler = (e: MouseEvent) => {
      if (prefRef.current && !prefRef.current.contains(e.target as Node)) {
        setPrefOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [prefOpen]);

  const g1      = isOrange ? "#FF4B16" : "#21E6A4";
  const g2      = isOrange ? "#FFB020" : "#5B8CFF";
  const logoInk = isOrange ? "#2A0900" : "#04150F";
  const currentColor = isOrange ? "#FF4B16" : "#21E6A4";

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

        {/* Unified preferences dropdown */}
        <div className="pref-dropdown" ref={prefRef}>
          <button
            className={`pref-btn${prefOpen ? " open" : ""}`}
            onClick={() => setPrefOpen((o) => !o)}
            aria-expanded={prefOpen}
            aria-haspopup="true"
            aria-label="Preferences"
          >
            <span className="pref-btn-swatch" style={{ background: currentColor }} />
            {isLight ? <SunIcon /> : <MoonIcon />}
            <span className="pref-btn-label">Preferences</span>
            <svg className="pref-chevron" viewBox="0 0 24 24" fill="none" width="13" height="13" aria-hidden="true">
              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {prefOpen && (
            <div className="pref-panel" role="dialog" aria-label="Preferences panel">
              <p className="pref-section-label">Color</p>
              <div className="pref-opts">
                {THEMES.map(({ value, label, color }) => (
                  <button
                    key={value}
                    className={`pref-opt${theme === value ? " active" : ""}`}
                    onClick={() => setTheme(value)}
                    aria-pressed={theme === value}
                  >
                    <span className="pref-swatch" style={{ background: color }} />
                    {label}
                  </button>
                ))}
              </div>

              <div className="pref-divider" />

              <p className="pref-section-label">Mode</p>
              <div className="pref-opts">
                {MODES.map(({ value, label }) => (
                  <button
                    key={value}
                    className={`pref-opt${mode === value ? " active" : ""}`}
                    onClick={() => setMode(value)}
                    aria-pressed={mode === value}
                  >
                    {value === "light" ? <SunIcon /> : <MoonIcon />}
                    {label}
                  </button>
                ))}
              </div>
            </div>
          )}
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
