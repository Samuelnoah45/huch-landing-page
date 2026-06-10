const DEV_FEATURES = [
  { b: "Plug into your stack",  p: "REST API and webhooks that connect to your existing systems with no fuss." },
  { b: "Online & in-person",    p: "one-click payments on the web, QR-code scan at the till." },
  { b: "Real-time webhooks",    p: "get notified the instant funds settle in your account." },
];

export default function HuchDevelopers() {
  return (
    <section className="section" id="developers">
      <div className="wrap dev-grid">

        <div className="reveal">
          <span className="eyebrow">For developers</span>
          <h2 style={{ fontSize: "clamp(30px,4.4vw,46px)", marginTop: 16 }}>A payment in a few lines.</h2>
          <p style={{ color: "var(--text-2)", marginTop: 16, fontSize: 18 }}>
            A secure, developer-friendly setup links your business to thousands of banks. Drop in the
            API, create a payment, and let the customer&apos;s bank do the rest.
          </p>
          <div className="dev-features">
            {DEV_FEATURES.map(({ b, p }) => (
              <div key={b} className="dev-feature">
                <span className="tick">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M4 12l5 5L20 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <p><b>{b}</b> — {p}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="code reveal">
          <div className="code-bar">
            <span className="dotc" style={{ background: "#FF5F57" }} />
            <span className="dotc" style={{ background: "#FEBC2E" }} />
            <span className="dotc" style={{ background: "#28C840" }} />
            <span className="fname">create-payment.js</span>
          </div>
          <pre>
            <span className="c-com">{"// Create a pay-by-bank payment with Huch"}</span>{"\n"}
            <span className="c-key">const</span>{" payment = "}<span className="c-key">await</span>{" huch."}<span className="c-fn">payments</span>{"."}<span className="c-fn">create</span>{"({"}{"\n"}
            {"  amount:     "}<span className="c-num">12900</span>{"        "}<span className="c-com">{"// €129.00"}</span>{"\n"}
            {"  currency:   "}<span className="c-str">&quot;EUR&quot;</span>{","}{"\n"}
            {"  reference:  "}<span className="c-str">&quot;order_4821&quot;</span>{","}{"\n"}
            {"  redirect:   "}<span className="c-str">&quot;https://shop.io/return&quot;</span>{","}{"\n"}
            {"  customer: {"}{"\n"}
            {"    country:  "}<span className="c-str">&quot;DE&quot;</span>{"\n"}
            {"  }"}{"\n"}
            {"});"}{"\n\n"}
            <span className="c-com">{"// → redirect the shopper to their bank"}</span>{"\n"}
            <span className="c-fn">redirect</span>{"(payment.bank_auth_url);"}
          </pre>
        </div>

      </div>
    </section>
  );
}
