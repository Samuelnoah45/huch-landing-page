"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { MOCK_BANKS } from "../lib/types";

const STEPS = [
  { label: "Connecting to bank...", duration: 1200 },
  { label: "Initiating secure session...", duration: 1000 },
  { label: "Verifying identity...", duration: 1400 },
  { label: "Authorising payment...", duration: 1000 },
];

function SCARedirectContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const bankId = searchParams.get("bank") ?? "barclays";
  const bank = MOCK_BANKS.find((b) => b.id === bankId) ?? MOCK_BANKS[0];

  const [stepIndex, setStepIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let idx = 0;
    function advance() {
      idx += 1;
      if (idx < STEPS.length) {
        setStepIndex(idx);
        setTimeout(advance, STEPS[idx].duration);
      } else {
        setDone(true);
        setTimeout(() => router.push("/success"), 800);
      }
    }
    const timer = setTimeout(advance, STEPS[0].duration);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-sm text-center">
        {/* Progress bar */}
        <div className="flex gap-1.5 mb-10">
          {[1, 2, 3, 4].map((step) => (
            <div
              key={step}
              className={`h-1 flex-1 rounded-full transition-colors duration-500 ${step <= 3 ? "bg-indigo-600" : "bg-gray-200"}`}
            />
          ))}
        </div>

        {/* Bank logo */}
        <div className={`w-20 h-20 ${bank.color} rounded-2xl flex items-center justify-center text-4xl mx-auto mb-6 shadow-lg`}>
          {bank.logo}
        </div>

        <h1 className="text-xl font-bold text-gray-900 mb-1">
          Redirecting to {bank.name}
        </h1>
        <p className="text-sm text-gray-500 mb-10">
          Please do not close this window
        </p>

        {/* Animated spinner */}
        {!done ? (
          <div className="relative w-16 h-16 mx-auto mb-8">
            <svg className="animate-spin w-16 h-16 text-indigo-100" fill="none" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
            </svg>
            <svg className="animate-spin w-16 h-16 text-indigo-600 absolute inset-0" style={{ animationDuration: "0.9s" }} fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                d="M12 2a10 10 0 019.78 7.89"
              />
            </svg>
          </div>
        ) : (
          <div className="w-16 h-16 mx-auto mb-8 bg-green-100 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        )}

        {/* Step list */}
        <div className="space-y-3 text-left bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
          {STEPS.map((step, idx) => {
            const isComplete = idx < stepIndex || done;
            const isActive = idx === stepIndex && !done;
            return (
              <div key={step.label} className="flex items-center gap-3">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300
                  ${isComplete ? "bg-green-500" : isActive ? "bg-indigo-600" : "bg-gray-100"}`}
                >
                  {isComplete ? (
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : isActive ? (
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  ) : (
                    <div className="w-2 h-2 bg-gray-300 rounded-full" />
                  )}
                </div>
                <span className={`text-sm transition-colors duration-300
                  ${isComplete ? "text-gray-500 line-through" : isActive ? "text-gray-900 font-medium" : "text-gray-400"}`}
                >
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Security note */}
        <p className="text-xs text-gray-400 mt-6">
          🔒 256-bit encrypted connection to {bank.name}
        </p>
      </div>
    </div>
  );
}

export default function SCARedirectPage() {
  return (
    <Suspense>
      <SCARedirectContent />
    </Suspense>
  );
}
