"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";
import { MOCK_BANKS, MOCK_PAYMENT } from "../lib/types";

function PaymentReviewContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const bankId = searchParams.get("bank") ?? "barclays";
  const bank = MOCK_BANKS.find((b) => b.id === bankId) ?? MOCK_BANKS[0];
  const { amount, currency, merchant, reference } = MOCK_PAYMENT;
  const symbol = currency === "GBP" ? "£" : "$";

  function handleConfirm() {
    router.push(`/sca-redirect?bank=${bankId}`);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Back + header */}
        <div className="flex items-center gap-3 mb-6">
          <Link
            href="/bank-selection"
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-500"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Review payment</h1>
            <p className="text-sm text-gray-500">Confirm the details below</p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="flex gap-1.5 mb-6">
          {[1, 2, 3, 4].map((step) => (
            <div
              key={step}
              className={`h-1 flex-1 rounded-full ${step <= 2 ? "bg-indigo-600" : "bg-gray-200"}`}
            />
          ))}
        </div>

        {/* Amount hero */}
        <div className="bg-indigo-600 rounded-2xl p-6 mb-4 text-center text-white">
          <p className="text-sm text-indigo-200 mb-1">Payment amount</p>
          <p className="text-5xl font-bold tracking-tight">
            {symbol}{amount.toFixed(2)}
          </p>
          <p className="text-indigo-200 text-sm mt-2">{currency}</p>
        </div>

        {/* Payment details card */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm divide-y divide-gray-50 mb-4">
          <div className="px-5 py-4 flex justify-between items-center">
            <span className="text-sm text-gray-500">To</span>
            <div className="text-right">
              <p className="text-sm font-semibold text-gray-900">{merchant}</p>
              <p className="text-xs text-gray-400">{reference}</p>
            </div>
          </div>

          <div className="px-5 py-4 flex justify-between items-center">
            <span className="text-sm text-gray-500">From bank</span>
            <div className="flex items-center gap-2.5">
              <div className={`w-7 h-7 ${bank.color} rounded-lg flex items-center justify-center text-sm`}>
                {bank.logo}
              </div>
              <span className="text-sm font-semibold text-gray-900">{bank.name}</span>
            </div>
          </div>

          <div className="px-5 py-4 flex justify-between items-center">
            <span className="text-sm text-gray-500">Payment type</span>
            <span className="text-sm font-semibold text-gray-900">Instant bank transfer</span>
          </div>

          <div className="px-5 py-4 flex justify-between items-center">
            <span className="text-sm text-gray-500">Date</span>
            <span className="text-sm font-semibold text-gray-900">
              {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
            </span>
          </div>
        </div>

        {/* SCA notice */}
        <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 flex gap-3 mb-6">
          <svg className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <p className="text-xs text-amber-700 leading-relaxed">
            You&apos;ll be redirected to <strong>{bank.name}</strong> to authenticate this payment via Strong Customer Authentication (SCA).
          </p>
        </div>

        {/* CTA */}
        <button
          onClick={handleConfirm}
          className="w-full bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold py-4 rounded-xl transition-colors text-sm"
        >
          Confirm &amp; Continue to {bank.name}
        </button>

        <p className="text-xs text-gray-400 text-center mt-4">
          By confirming, you authorise this payment under Open Banking regulations.
        </p>
      </div>
    </div>
  );
}

export default function PaymentReviewPage() {
  return (
    <Suspense>
      <PaymentReviewContent />
    </Suspense>
  );
}
