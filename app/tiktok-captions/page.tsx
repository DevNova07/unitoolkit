import { Metadata } from "next";
import { PlatformPageTemplate } from "@/components/captions/PlatformPageTemplate";
import { PLATFORMS } from "@/data/platformsData";

const platform = PLATFORMS.find((p) => p.id === "tiktok")!;

export const metadata: Metadata = {
  title: "TikTok Captions — Viral Hooks, Slideshows & Relatable Audio Lines",
  description:
    "Find 2,200+ viral TikTok captions, hooks, funny video lines, and photo slideshow captions designed for high FYP reach.",
  alternates: {
    canonical: "/tiktok-captions",
  },
};

export default function TikTokPage() {
  return <PlatformPageTemplate platform={platform} />;
}
