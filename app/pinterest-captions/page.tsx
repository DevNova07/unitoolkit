import { Metadata } from "next";
import { PlatformPageTemplate } from "@/components/captions/PlatformPageTemplate";
import { PLATFORMS } from "@/data/platformsData";

const platform = PLATFORMS.find((p) => p.id === "pinterest")!;

export const metadata: Metadata = {
  title: "Pinterest Captions & Pin Descriptions — Aesthetic & Lifestyle",
  description:
    "Search-friendly, inspirational, and aesthetic captions for moodboards, recipes, DIY, fashion, and home decor pins.",
  alternates: {
    canonical: "/pinterest-captions",
  },
};

export default function PinterestPage() {
  return <PlatformPageTemplate platform={platform} />;
}
