import { Metadata } from "next";
import { PlatformPageTemplate } from "@/components/captions/PlatformPageTemplate";
import { PLATFORMS } from "@/data/platformsData";

const platform = PLATFORMS.find((p) => p.id === "linkedin")!;

export const metadata: Metadata = {
  title: "LinkedIn Captions & Post Starters — Professional & Career Growth",
  description:
    "Authoritative, insightful, and thought-leadership captions for career wins, promotion updates, startup lessons, and business networking.",
  alternates: {
    canonical: "/linkedin-captions",
  },
};

export default function LinkedInPage() {
  return <PlatformPageTemplate platform={platform} />;
}
