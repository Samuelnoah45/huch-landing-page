import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Huch — Pay-by-bank for modern merchants",
  description: "Open-banking payments. Instant, secure, zero chargebacks.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
