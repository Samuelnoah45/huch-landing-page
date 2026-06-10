export default function HuchBento() {
  return (
    <section className="section" id="why" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Why Huch</span>
          <h2>Everything cards aren&apos;t.</h2>
          <p>By moving money directly between banks, Huch strips out the intermediaries, the fraud risk, and the waiting — and hands control back to you.</p>
        </div>

        <div className="bento">
          {/* Real-time settlement — large feature card */}
          <div className="card feature reveal">
            <div className="ico">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="grow">
              <h3>Real-time settlement</h3>
              <p>Stop waiting days for payouts. Funds move straight to your account, keeping cash flow healthy and predictable.</p>
            </div>
            <div className="settle-vis" aria-hidden="true">
              <div className="bar old" style={{ height: "34%" }}><span>Cards · T+2</span></div>
              <div className="bar old" style={{ height: "30%" }} />
              <div className="bar old" style={{ height: "42%" }} />
              <div className="bar"     style={{ height: "88%" }}><span>Huch · now</span></div>
              <div className="bar"     style={{ height: "96%" }} />
              <div className="bar"     style={{ height: "100%" }} />
            </div>
          </div>

          {/* No chargebacks */}
          <div className="card col-3 reveal">
            <div className="ico">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M12 2l8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5l8-3z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>No chargebacks, no fraud</h3>
            <p>Payments are authorised directly from your customer&apos;s bank with Strong Customer Authentication — so costly chargebacks and fraud losses simply don&apos;t happen.</p>
          </div>

          {/* Lower fees */}
          <div className="card col-3 reveal glow-card">
            <div className="ico">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Dramatically lower fees</h3>
            <p>Our direct bank-to-bank approach cuts out expensive intermediaries — reducing transaction costs and boosting your bottom line.</p>
          </div>

          {/* Higher approval */}
          <div className="card col-2 reveal">
            <div className="ico">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M3 17l5-5 4 3 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 7h4v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Higher approval rates</h3>
            <p>Customers pay with their trusted bank login — smoother checkouts, fewer abandoned carts.</p>
          </div>

          {/* In control */}
          <div className="card col-2 reveal">
            <div className="ico">
              <svg viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <h3>You stay in control</h3>
            <p>We never touch or hold your money — you&apos;re in command from checkout to settlement.</p>
          </div>

          {/* Simple API */}
          <div className="card col-2 reveal">
            <div className="ico">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M8 8l-5 4 5 4M16 8l5 4-5 4M13 5l-2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>One simple API</h3>
            <p>Connects to your existing systems with no fuss. Start accepting open-banking payments fast.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
