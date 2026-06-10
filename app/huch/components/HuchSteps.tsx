const STEPS = [
  { h: "Pick a bank",       p: "At checkout, your customer selects their bank from 2,000+ supported institutions." },
  { h: "Confirm securely",  p: "They approve the payment inside their own bank's app with Strong Customer Authentication." },
  { h: "Funds move",        p: "Money flows bank-to-bank through our regulated Third-Party Providers — no delays." },
  { h: "Done",              p: "Your customer returns to the order page, payment settled and confirmed in real time." },
];

export default function HuchSteps() {
  return (
    <section className="section" id="how" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">How it works</span>
          <h2>Four taps from cart to settled.</h2>
          <p>No card numbers, no redirects to clunky gateways — just your customer&apos;s own bank, doing what it already does securely.</p>
        </div>
        <div className="steps">
          {STEPS.map(({ h, p }) => (
            <div key={h} className="step reveal">
              <div className="line" />
              <h3>{h}</h3>
              <p>{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
