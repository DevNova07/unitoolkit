import { Metadata } from "next";
import { PlatformPageTemplate } from "@/components/captions/PlatformPageTemplate";
import { PLATFORMS } from "@/data/platformsData";

const platform = PLATFORMS.find((p) => p.id === "threads")!;

export const metadata: Metadata = {
  title: "Threads Captions — Casual Thoughts, Hot Takes & Discussions",
  description:
    "Casual, unfiltered, and conversational thoughts tailored for the Meta Threads algorithm and community conversations.",
  alternates: {
    canonical: "/threads-captions",
  },
};

export default function ThreadsPage() {
  return <PlatformPageTemplate platform={platform} />;
}
