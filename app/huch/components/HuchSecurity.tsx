const SEC_ITEMS = [
  {
    title: "Regulated under PSD2",
    body:  "A payment method recognised and regulated across Europe and the UK.",
    icon:  <path d="M12 2l8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5l8-3z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />,
  },
  {
    title: "Strong Customer Authentication",
    body:  "Every payment is verified by the customer inside their bank — an extra layer of identity security.",
    icon:  <path d="M6 11V8a6 6 0 1112 0v3M5 11h14v9H5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />,
  },
  {
    title: "We never hold your money",
    body:  "Funds move directly through regulated TPPs — Huch stores no sensitive account data.",
    icon:  <><rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="2" /><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></>,
  },
];

export default function HuchSecurity() {
  return (
    <section className="section security" id="security">
      <div className="wrap sec-grid">

        <div className="reveal">
          <span className="eyebrow">Security &amp; compliance</span>
          <h2 style={{ fontSize: "clamp(30px,4.4vw,46px)", marginTop: 16 }}>
            Trust, built into every transaction.
          </h2>
          <p style={{ color: "var(--text-2)", marginTop: 16, fontSize: 18 }}>
            Huch runs on the rails the banks already trust. We don&apos;t store your customers&apos; account
            details — we simply facilitate the payment, authorised end to end inside their own secure
            banking environment.
          </p>
          <div className="sec-list">
            {SEC_ITEMS.map(({ title, body, icon }) => (
              <div key={title} className="sec-item">
                <span className="ico">
                  <svg viewBox="0 0 24 24" fill="none">{icon}</svg>
                </span>
                <div>
                  <h4>{title}</h4>
                  <p>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal">
          <div className="shield-vis">
            <div className="orbit o1" />
            <div className="orbit o2" />
            <div className="orbit o3" />
            <div className="shield-core">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M12 2l8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5l8-3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="shield-badge b1">PSD2</span>
            <span className="shield-badge b2">SCA verified</span>
            <span className="shield-badge b3">AES-256 encrypted</span>
          </div>
        </div>

      </div>
    </section>
  );
}
