import { Metadata } from "next";
import { PlatformPageTemplate } from "@/components/captions/PlatformPageTemplate";
import { PLATFORMS } from "@/data/platformsData";

const platform = PLATFORMS.find((p) => p.id === "youtube")!;

export const metadata: Metadata = {
  title: "YouTube Captions & Titles — Shorts, Descriptions & Community Posts",
  description:
    "High-CTR titles, engaging YouTube Shorts captions, and community discussion starters to boost viewer retention.",
  alternates: {
    canonical: "/youtube-captions",
  },
};

export default function YouTubePage() {
  return <PlatformPageTemplate platform={platform} />;
}
