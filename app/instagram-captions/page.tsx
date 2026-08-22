import { Metadata } from "next";
import { PlatformPageTemplate } from "@/components/captions/PlatformPageTemplate";
import { PLATFORMS } from "@/data/platformsData";

const platform = PLATFORMS.find((p) => p.id === "instagram")!;
const ogUrl = "/api/og?title=Instagram%20Captions%20Studio&subtitle=350%2B%20Aesthetic%2C%20Reels%20%26%20Savage%20Captions&badge=Instagram";

export const metadata: Metadata = {
  title: "Instagram Captions — Posts, Reels, Stories & Selfies",
  description:
    "Explore 3,500+ aesthetic, viral, and savage Instagram captions for Reels, Stories, Selfies, and photo dumps. Copy in 1-click or generate with AI.",
  alternates: {
    canonical: "/instagram-captions",
  },
  openGraph: {
    title: "Instagram Captions — Posts, Reels & Selfies | Unitoolkit",
    description: "350+ handpicked aesthetic, savage, and viral captions for Instagram.",
    images: [{ url: ogUrl, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: [ogUrl],
  },
};

export default function InstagramPage() {
  return <PlatformPageTemplate platform={platform} />;
}
