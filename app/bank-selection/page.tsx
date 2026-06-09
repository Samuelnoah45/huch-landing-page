"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { MOCK_BANKS, MOCK_PAYMENT, Bank } from "../lib/types";

export default function BankSelectionPage() {
  const router = useRouter();
  const [selected, setSelected] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const filtered = MOCK_BANKS.filter((b) =>
    b.name.toLowerCase().includes(search.toLowerCase())
  );

  function handleSelect(bank: Bank) {
    setSelected(bank.id);
    setTimeout(() => {
      router.push(`/payment-review?bank=${bank.id}`);
    }, 300);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Back + header */}
        <div className="flex items-center gap-3 mb-6">
          <Link
            href="/"
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-500"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Select your bank</h1>
            <p className="text-sm text-gray-500">
              Paying £{MOCK_PAYMENT.amount.toFixed(2)} to {MOCK_PAYMENT.merchant}
            </p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="flex gap-1.5 mb-6">
          {[1, 2, 3, 4].map((step) => (
            <div
              key={step}
              className={`h-1 flex-1 rounded-full ${step === 1 ? "bg-indigo-600" : "bg-gray-200"}`}
            />
          ))}
        </div>

        {/* Search */}
        <div className="relative mb-4">
          <svg
            className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search banks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        {/* Bank list */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          {filtered.length === 0 ? (
            <div className="px-5 py-10 text-center text-sm text-gray-400">
              No banks found matching &ldquo;{search}&rdquo;
            </div>
          ) : (
            filtered.map((bank, idx) => (
              <button
                key={bank.id}
                onClick={() => handleSelect(bank)}
                className={`w-full flex items-center gap-4 px-5 py-4 transition-all text-left
                  ${idx !== filtered.length - 1 ? "border-b border-gray-50" : ""}
                  ${selected === bank.id
                    ? "bg-indigo-50"
                    : "hover:bg-gray-50 active:bg-gray-100"
                  }`}
              >
                {/* Bank logo circle */}
                <div className={`w-11 h-11 ${bank.color} rounded-xl flex items-center justify-center text-xl flex-shrink-0`}>
                  {bank.logo}
                </div>

                <div className="flex-1">
                  <p className="font-semibold text-gray-900 text-sm">{bank.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">Personal &amp; Business accounts</p>
                </div>

                {selected === bank.id ? (
                  <div className="w-5 h-5 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                ) : (
                  <svg className="w-4 h-4 text-gray-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </button>
            ))
          )}
        </div>

        {/* Footer note */}
        <p className="text-xs text-gray-400 text-center mt-5">
          Your bank credentials are never shared with {MOCK_PAYMENT.merchant}.<br />
          Powered by{" "}
          <span className="font-semibold text-gray-500">Open Banking</span>
        </p>
      </div>
    </div>
  );
}
