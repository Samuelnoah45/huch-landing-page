const STATS = [
  { num: <>2,000<span className="u">+</span></>,  lbl: "Banks connected", sub: "Across the EU & UK" },
  { num: <>29</>,                                  lbl: "Markets live",     sub: "27 EU states · Norway · UK" },
  { num: <>0<span className="u">%</span></>,       lbl: "Chargebacks",     sub: "Authorised at the bank" },
  { num: <>&lt;5<span className="u">s</span></>,   lbl: "To settle",       sub: "Real-time bank transfer" },
];

export default function HuchStats() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">By the numbers</span>
          <h2>Payments that move at the speed of your business.</h2>
        </div>
        <div className="stats-grid reveal" style={{ marginTop: 48 }}>
          {STATS.map(({ num, lbl, sub }) => (
            <div key={lbl} className="stat">
              <div className="num">{num}</div>
              <div className="lbl">{lbl}</div>
              <div className="sub">{sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
