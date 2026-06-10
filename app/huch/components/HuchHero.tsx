"use client";

import { useState, useCallback } from "react";
import { Theme } from "../types";

type PayState = "idle" | "loading" | "done";

const BANKS = [
  { id: "revolut",  bg: "#E8313A", label: "RB", name: "Revolut Bank",   sub: "•• 4821 · Personal" },
  { id: "deutsche", bg: "#1A52C4", label: "DB", name: "Deutsche Bank",  sub: "Choose account" },
];

interface Props { theme: Theme }

export default function HuchHero({ theme }: Props) {
  const [activeBank, setActiveBank] = useState("revolut");
  const [payState, setPayState]     = useState<PayState>("idle");
  const isOrange = theme === "orange";

  const handlePay = useCallback(() => {
    if (payState !== "idle") return;
    setPayState("loading");
    setTimeout(() => {
      setPayState("done");
      setTimeout(() => setPayState("idle"), 1700);
    }, 1100);
  }, [payState]);

  const chip1Bg    = isOrange ? "rgba(255,75,22,.15)"  : "rgba(33,230,164,.15)";
  const chip1Color = isOrange ? "#FF4B16"              : "#21E6A4";
  const chip2Bg    = isOrange ? "rgba(255,176,32,.15)" : "rgba(91,140,255,.15)";
  const chip2Color = isOrange ? "#FFB020"              : "#5B8CFF";

  return (
    <section className="hero">
      <div className="hero-glow"><div className="orb orb-1" /><div className="orb orb-2" /></div>
      <div className="hero-grid-lines" />
      <div className="wrap hero-grid">

        {/* Copy */}
        <div className="hero-copy">
          <span className="eyebrow reveal">Open banking · Europe &amp; UK</span>
          <h1 className="reveal">Get paid <span className="grad">bank&#8209;to&#8209;bank.</span> Instantly.</h1>
          <p className="lead reveal">
            Huch lets your customers pay straight from their bank account — no cards, no chargebacks,
            no hidden fees. Funds land in real time, and we never touch or hold your money.
          </p>
          <div className="hero-actions reveal">
            <a className="btn btn-primary btn-lg" href="#cta">
              Start accepting payments
              <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
            <a className="btn btn-ghost btn-lg" href="#how">See how it works</a>
          </div>
          <div className="hero-trust reveal">
            <span><b>2,000+</b> connected banks</span>
            <span className="dot" />
            <span>Regulated under <b>PSD2</b></span>
            <span className="dot" />
            <span><b>Zero</b> chargebacks</span>
          </div>
        </div>

        {/* Phone mockup */}
        <div className="hero-visual reveal">
          <div className="float-chip chip-1">
            <span className="ico" style={{ background: chip1Bg }}>
              <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
                <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" fill={chip1Color} />
              </svg>
            </span>
            <span>Instant<br /><span className="sub">settled in seconds</span></span>
          </div>

          <div className="float-chip chip-2">
            <span className="ico" style={{ background: chip2Bg }}>
              <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
                <path d="M12 2l8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5l8-3z" stroke={chip2Color} strokeWidth="2" strokeLinejoin="round" />
              </svg>
            </span>
            <span>Bank-grade<br /><span className="sub">SCA verified</span></span>
          </div>

          <div className="float-chip chip-3">
            <span className="ico" style={{ background: chip1Bg }}>
              <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
                <path d="M4 12l5 5L20 6" stroke={chip1Color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span>Approved<br /><span className="sub">no card details</span></span>
          </div>

          <div className="phone">
            <div className="phone-screen">
              <div className="phone-notch" />
              <div className="pay-head">
                <div className="merchant"><span className="logo">N</span> Nordic Goods</div>
                <div className="secure">
                  <svg viewBox="0 0 24 24" fill="none" width="11" height="11">
                    <path d="M6 11V8a6 6 0 1112 0v3M5 11h14v9H5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                  </svg>
                  SECURE
                </div>
              </div>
              <div className="pay-amount-label">You&apos;re paying</div>
              <div className="pay-amount">€129<span>.00</span></div>

              {BANKS.map((b) => (
                <div
                  key={b.id}
                  className={`bank-row${activeBank === b.id ? " active" : ""}`}
                  onClick={() => setActiveBank(b.id)}
                >
                  <span className="bicon" style={{ background: b.bg }}>{b.label}</span>
                  <div>
                    <div className="bname">{b.name}</div>
                    <div className="bsub">{b.sub}</div>
                  </div>
                  <span className="check">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M4 12l5 5L20 6" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              ))}

              <button
                className="pay-btn"
                onClick={handlePay}
                style={{ opacity: payState === "loading" ? 0.9 : 1 }}
              >
                {payState === "loading" && <><span className="spin" /> Authorising…</>}
                {payState === "done" && (
                  <>
                    <svg viewBox="0 0 24 24" fill="none" width={17} height={17}>
                      <path d="M4 12l5 5L20 6" stroke="currentColor" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Payment confirmed
                  </>
                )}
                {payState === "idle" && (
                  <>
                    <svg viewBox="0 0 24 24" fill="none" width={17} height={17}>
                      <path d="M6 11V8a6 6 0 1112 0v3M5 11h14v9H5z" stroke="currentColor" strokeWidth={2} strokeLinejoin="round" />
                    </svg>
                    Confirm in your bank app
                  </>
                )}
              </button>

              <div className="pay-foot">
                <svg viewBox="0 0 24 24" fill="none" width="12" height="12">
                  <circle cx="12" cy="12" r="9" stroke="#7C8AA0" strokeWidth="2" />
                  <path d="M12 7v5l3 2" stroke="#7C8AA0" strokeWidth="2" strokeLinecap="round" />
                </svg>
                Powered by Huch · authorised by your bank
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
