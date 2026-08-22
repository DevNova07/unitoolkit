import { Metadata } from "next";
import { WhatsAppStatusStudio } from "@/components/whatsapp/WhatsAppStatusStudio";

export const metadata: Metadata = {
  title: "Daily Status Hub (2026) — Attitude, Love, Sad & Motivational Status Lines",
  description:
    "Explore 1,700+ best status lines across Attitude, Love, Sad, Motivation, Good Morning, and 2-Line quotes with 1-click clipboard copy and direct WhatsApp sharing.",
  keywords: [
    "status",
    "attitude status",
    "love status in hindi",
    "sad status",
    "motivational status",
    "daily status quotes",
  ],
  alternates: {
    canonical: "/status",
  },
  openGraph: {
    title: "Daily Status Hub — Attitude, Love & Sad Status Quotes",
    description: "Curated daily status lines with live mobile preview and 1-click sharing.",
  },
};

export default function StatusHubPage() {
  return <WhatsAppStatusStudio />;
}
