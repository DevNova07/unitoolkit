import { Metadata } from "next";
import { WhatsAppStatusStudio } from "@/components/whatsapp/WhatsAppStatusStudio";

export const metadata: Metadata = {
  title: "500+ Best WhatsApp Status Quotes (2026) — Cool, Attitude, Love & Islamic",
  description:
    "Explore 500+ top WhatsApp status quotes across 13 sub-niches: Cool, Attitude, Love, Sad, Motivational, Good Morning, Islamic, and Friendship with 1-click WhatsApp share.",
  keywords: [
    "whatsapp status",
    "cool whatsapp status quotes",
    "attitude whatsapp status",
    "love whatsapp status in hindi",
    "islamic whatsapp status",
    "good morning whatsapp status",
    "sad status for whatsapp",
  ],
  alternates: {
    canonical: "/whatsapp-status",
  },
  openGraph: {
    title: "500+ Best WhatsApp Status Quotes — UniToolkit",
    description: "Cool, Attitude, Romantic, Sad & Islamic WhatsApp Status Quotes with direct 1-click share.",
    images: ["/api/og?title=WhatsApp%20Status%20Studio&subtitle=500%2B%20Attitude%2C%20Love%20%26%20Islamic%20Status%20Quotes&badge=WhatsApp%20Status"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/api/og?title=WhatsApp%20Status%20Studio&subtitle=500%2B%20Attitude%2C%20Love%20%26%20Islamic%20Status%20Quotes&badge=WhatsApp%20Status"],
  },
};

export default function WhatsAppPage() {
  return <WhatsAppStatusStudio />;
}
