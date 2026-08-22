import { Metadata } from "next";
import { AIStatusGenerator } from "@/components/generator/AIStatusGenerator";

export const metadata: Metadata = {
  title: "AI WhatsApp Status Generator — Attitude, Love, Sad & Sukoon Quotes (Hindi & Hinglish)",
  description:
    "Generate emotional, attitude, romantic, and sukoon WhatsApp status quotes with Gemini AI. Real-time generation in Hindi Devanagari & Hinglish with 1-click WhatsApp share.",
  alternates: {
    canonical: "/ai-status-generator",
  },
};

export default function AIStatusPage() {
  return <AIStatusGenerator />;
}
