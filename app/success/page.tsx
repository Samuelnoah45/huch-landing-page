"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { MOCK_PAYMENT } from "../lib/types";

function generateRef() {
  return "PAY-" + Math.random().toString(36).slice(2, 10).toUpperCase();
}

export default function SuccessPage() {
  const { amount, currency, merchant, reference } = MOCK_PAYMENT;
  const symbol = currency === "GBP" ? "£" : "$";
  const [payRef] = useState(generateRef);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <div
        className={`w-full max-w-md transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        {/* Progress bar — all filled */}
        <div className="flex gap-1.5 mb-10">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="h-1 flex-1 rounded-full bg-green-500" />
          ))}
        </div>

        {/* Success icon */}
        <div className="text-center mb-8">
          <div
            className={`inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-100 mb-5 transition-transform duration-500 ${visible ? "scale-100" : "scale-75"}`}
          >
            <svg
              className="w-12 h-12 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Payment successful!</h1>
          <p className="text-gray-500 mt-2 text-sm">
            Your payment to <strong className="text-gray-700">{merchant}</strong> was completed.
          </p>
        </div>

        {/* Receipt card */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-6">
          {/* Amount bar */}
          <div className="bg-green-600 px-6 py-5 text-center text-white">
            <p className="text-sm text-green-100 mb-1">Amount paid</p>
            <p className="text-4xl font-bold">{symbol}{amount.toFixed(2)}</p>
          </div>

          {/* Details */}
          <div className="divide-y divide-gray-50">
            <div className="px-5 py-3.5 flex justify-between">
              <span className="text-sm text-gray-500">Merchant</span>
              <span className="text-sm font-semibold text-gray-900">{merchant}</span>
            </div>
            <div className="px-5 py-3.5 flex justify-between">
              <span className="text-sm text-gray-500">Order ref</span>
              <span className="text-sm font-semibold text-gray-900">{reference}</span>
            </div>
            <div className="px-5 py-3.5 flex justify-between">
              <span className="text-sm text-gray-500">Payment ref</span>
              <span className="text-sm font-semibold text-gray-900 font-mono">{payRef}</span>
            </div>
            <div className="px-5 py-3.5 flex justify-between">
              <span className="text-sm text-gray-500">Date &amp; time</span>
              <span className="text-sm font-semibold text-gray-900">
                {new Date().toLocaleString("en-GB", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
            <div className="px-5 py-3.5 flex justify-between">
              <span className="text-sm text-gray-500">Status</span>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-600">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                Settled
              </span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button className="flex-1 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold py-3 rounded-xl text-sm transition-colors flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Receipt
          </button>
          <Link
            href="/"
            className="flex-1 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold py-3 rounded-xl text-sm transition-colors text-center flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Back to shop
          </Link>
        </div>

        {/* Footer */}
        <p className="text-xs text-gray-400 text-center mt-6">
          A confirmation will be sent to your registered email address.
          <br />
          Powered by <span className="font-semibold text-gray-500">Open Banking</span>
        </p>
      </div>
    </div>
  );
}
