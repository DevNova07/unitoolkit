import { Metadata } from "next";
import { PlatformPageTemplate } from "@/components/captions/PlatformPageTemplate";
import { PLATFORMS } from "@/data/platformsData";

const platform = PLATFORMS.find((p) => p.id === "facebook")!;

export const metadata: Metadata = {
  title: "Facebook Captions — Photo Albums, Status Updates & Milestones",
  description:
    "Engaging Facebook captions for life milestones, vacation photo albums, family updates, and funny statuses.",
  alternates: {
    canonical: "/facebook-captions",
  },
};

export default function FacebookPage() {
  return <PlatformPageTemplate platform={platform} />;
}
