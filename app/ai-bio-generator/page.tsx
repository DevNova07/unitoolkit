import { Metadata } from "next";
import { AIBioGenerator } from "@/components/generator/AIBioGenerator";

export const metadata: Metadata = {
  title: "AI Bio Generator — Aesthetic & VIP Attitude Bios for Instagram, Twitter & WhatsApp",
  description:
    "Generate aesthetic, VIP attitude, boys swag, and professional profile bios with Gemini AI. Includes clean line breaks, emojis, and 1-click clipboard copy.",
  alternates: {
    canonical: "/ai-bio-generator",
  },
};

export default function AIBioPage() {
  return <AIBioGenerator />;
}
