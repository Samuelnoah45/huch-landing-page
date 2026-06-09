export interface Bank {
  id: string;
  name: string;
  logo: string;
  color: string;
}

export interface PaymentDetails {
  amount: number;
  currency: string;
  merchant: string;
  reference: string;
  bankId?: string;
}

export const MOCK_BANKS: Bank[] = [
  { id: "barclays", name: "Barclays", logo: "🦅", color: "bg-blue-700" },
  { id: "hsbc", name: "HSBC", logo: "🔴", color: "bg-red-600" },
  { id: "lloyds", name: "Lloyds Bank", logo: "🐴", color: "bg-green-700" },
  { id: "natwest", name: "NatWest", logo: "💎", color: "bg-purple-700" },
  { id: "monzo", name: "Monzo", logo: "🌸", color: "bg-orange-500" },
];

export const MOCK_PAYMENT: PaymentDetails = {
  amount: 149.99,
  currency: "GBP",
  merchant: "TechStore UK",
  reference: "ORD-2024-8821",
};
