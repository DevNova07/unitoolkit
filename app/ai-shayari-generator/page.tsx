import { Metadata } from "next";
import { AIShayariGenerator } from "@/components/generator/AIShayariGenerator";

export const metadata: Metadata = {
  title: "AI Hindi Shayari Generator — 2-Line & 4-Line Love, Sad, Attitude & Dosti Shayari",
  description:
    "Generate original, touching Hindi & Hinglish Shayari with Gemini AI. 2-Line & 4-Line couplets in Devanagari script with instant 1-click WhatsApp share and clipboard copy.",
  alternates: {
    canonical: "/ai-shayari-generator",
  },
};

export default function AIShayariPage() {
  return <AIShayariGenerator />;
}
