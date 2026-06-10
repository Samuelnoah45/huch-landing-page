export default function HuchCTA() {
  return (
    <section className="section cta-band" id="cta">
      <div className="wrap">
        <div className="cta-inner reveal">
          <span className="eyebrow" style={{ justifyContent: "center" }}>Ready when you are</span>
          <h2>Take your payments<br />to the next level.</h2>
          <p>Fast, reliable and affordable open-banking payments — secure, transparent, and tailor-made for modern merchants.</p>
          <div className="cta-actions">
            <a className="btn btn-primary btn-lg" href="#">
              Start accepting payments
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a className="btn btn-ghost btn-lg" href="#">Talk to sales</a>
          </div>
        </div>
      </div>
    </section>
  );
}
