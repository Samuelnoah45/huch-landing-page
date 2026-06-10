import { Theme } from "../types";

const LINKS = {
  Product:    ["Online payments", "In-person & QR", "Settlement", "Coverage"],
  Developers: ["API reference", "Webhooks", "Status", "Changelog"],
  Company:    ["About us", "Careers", "Contact", "FAQs"],
  Legal:      ["Privacy", "Terms", "PSD2 & licensing", "Cookies"],
};

interface Props { theme: Theme }

export default function HuchFooter({ theme }: Props) {
  const isOrange = theme === "orange";
  const g1      = isOrange ? "#FF4B16" : "#21E6A4";
  const g2      = isOrange ? "#FFB020" : "#5B8CFF";
  const logoInk = isOrange ? "#2A0900" : "#04150F";

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot-grid">

          <div className="foot-brand">
            <a className="brand" href="#top">
              <svg className="mark" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <rect width="32" height="32" rx="9" fill="url(#mg-footer)" />
                <path d="M10 9v14M22 9v14M10 16h12" stroke={logoInk} strokeWidth="2.6" strokeLinecap="round" />
                <defs>
                  <linearGradient id="mg-footer" x1="0" y1="0" x2="32" y2="32">
                    <stop stopColor={g1} /><stop offset="1" stopColor={g2} />
                  </linearGradient>
                </defs>
              </svg>
              huch
            </a>
            <p>Open-banking payments for modern merchants across Europe and the UK. Fast, secure, and built on the rails banks already trust.</p>
          </div>

          {Object.entries(LINKS).map(([heading, items]) => (
            <div key={heading} className="foot-col">
              <h5>{heading}</h5>
              {items.map((item) => (
                <a key={item} href="#">{item}</a>
              ))}
            </div>
          ))}

        </div>

        <div className="foot-bottom">
          <span>© 2026 Huch. All rights reserved.</span>
          <div className="badges">
            <span className="badge">PSD2 regulated</span>
            <span className="badge">SCA</span>
            <span className="badge">EU · UK</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
