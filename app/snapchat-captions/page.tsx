import { Metadata } from "next";
import { PlatformPageTemplate } from "@/components/captions/PlatformPageTemplate";
import { PLATFORMS } from "@/data/platformsData";

const platform = PLATFORMS.find((p) => p.id === "snapchat")!;

export const metadata: Metadata = {
  title: "Snapchat Captions — Daily Streaks, Spotlight & Quick Snaps",
  description:
    "Short, punchy captions with emoji flair for daily snaps, streaks, Spotlight videos, and 24h stories.",
  alternates: {
    canonical: "/snapchat-captions",
  },
};

export default function SnapchatPage() {
  return <PlatformPageTemplate platform={platform} />;
}
