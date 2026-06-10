const BANKS = ["Revolut", "Deutsche Bank", "BNP Paribas", "Santander", "Lloyds", "ING", "Nordea"];

export default function HuchTrust() {
  return (
    <section className="trust" id="solution">
      <div className="wrap">
        <span className="label">Connected to 2,000+ banks</span>
        <div className="banks">
          {BANKS.map((name) => (
            <span key={name} className="bank-name">{name}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
