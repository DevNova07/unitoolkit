import { Metadata } from "next";
import { ShayariStudio } from "@/components/shayari/ShayariStudio";

export const metadata: Metadata = {
  title: "1000+ Best Shayari in Hindi (2026) — Love, Sad, Attitude, Romantic & Dosti",
  description:
    "Explore 1000+ top Shayari in Hindi and Hinglish. 2-Line & 4-Line couplets for Love, Sad, Attitude, Friendship, Motivational, and Islamic poetry with 1-click copy & WhatsApp share.",
  keywords: [
    "shayari in hindi",
    "love shayari",
    "sad shayari",
    "attitude shayari",
    "romantic shayari",
    "dosti shayari",
    "2 line shayari",
    "4 line shayari",
  ],
  alternates: {
    canonical: "/shayari",
  },
  openGraph: {
    title: "1000+ Best Shayari in Hindi & Hinglish — UniToolkit",
    description: "Love, Sad, Attitude, Romantic & 2-Line Shayari with 1-click copy and WhatsApp share.",
    images: ["/images/shayari-hub-banner.jpg"],
  },
};

export default function ShayariPage() {
  return <ShayariStudio />;
}
