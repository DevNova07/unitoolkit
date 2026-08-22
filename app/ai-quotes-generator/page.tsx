import { Metadata } from "next";
import { AIQuotesGenerator } from "@/components/generator/AIQuotesGenerator";

export const metadata: Metadata = {
  title: "AI Quotes & Hashtags Generator — Mindset, Motivation & Wisdom with Viral Tags",
  description:
    "Generate powerful mindset quotes, stoic wisdom lessons, and viral matching hashtags with Gemini AI. Includes 1-click clipboard copy.",
  alternates: {
    canonical: "/ai-quotes-generator",
  },
};

export default function AIQuotesPage() {
  return <AIQuotesGenerator />;
}
