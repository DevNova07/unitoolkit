import { Metadata } from "next";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { Sparkles, BookOpen } from "lucide-react";
import { BacklinkWidget } from "@/components/common/BacklinkWidget";

export const metadata: Metadata = {
  title: "Social Media Terms Glossary [2026] — Creator Definitions & Slang | Unitoolkit",
  description:
    "Comprehensive glossary of social media terminology, algorithm metrics, creator slang, and copywriting terms from A to Z.",
  alternates: {
    canonical: "/glossary",
  },
};

const GLOSSARY_TERMS = [
  { term: "Algorithm Hook", def: "The first 3 seconds of a video or initial line of text designed to stop users from scrolling." },
  { term: "Click-Through Rate (CTR)", def: "The percentage of users who click a link or bio call-to-action after viewing a post." },
  { term: "Photo Dump", def: "A carousel post featuring a casual, uncurated collection of photos depicting recent daily life." },
  { term: "FYP (For You Page)", def: "The primary recommendation feed on TikTok and Instagram Reels serving content to non-followers." },
  { term: "Golden Hour", def: "The period of daytime shortly after sunrise or before sunset with warm, soft, aesthetic sunlight." },
  { term: "Link in Bio", def: "A single clickable URL hosted on a social profile linking to creator resources or storefronts." },
  { term: "POV (Point of View)", def: "A storytelling format framing the video or caption from the first-person perspective of the viewer." },
  { term: "Royal Swag / Tevar", def: "Culturally iconic Hindi attitude slang expressing unapologetic confidence and king mindset." },
  { term: "Soft Era", def: "An aesthetic lifestyle prioritizing peace, self-care, minimal drama, and gentle living." },
  { term: "Streak (Snapchat)", def: "Sending consecutive direct photo/video snaps to a friend every 24 hours to maintain a counter." },
  { term: "VIP Bio", def: "An Instagram bio formatted with special Unicode fonts, symbols, and line spacing." },
];

export default function GlossaryPage() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10 text-left">
      <Breadcrumbs items={[{ label: "Glossary" }]} />

      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 dark:bg-pink-950/60 border border-pink-200/60 dark:border-pink-800 text-pink-600 dark:text-pink-400 text-xs font-bold shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 fill-current" />
          <span>Social Media Dictionary</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-900 dark:text-white leading-tight flex items-center gap-3">
          <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 text-pink-500" />
          <span>Social Media Terms Glossary</span>
        </h1>

        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Master the essential vocabulary, algorithm terms, and creator slang used across Instagram, TikTok, and YouTube.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {GLOSSARY_TERMS.map((item, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-2 shadow-xs"
          >
            <h3 className="text-base font-bold text-pink-600 dark:text-pink-400">{item.term}</h3>
            <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">{item.def}</p>
          </div>
        ))}
      </div>

      <BacklinkWidget
        pageTitle="Social Media Glossary & Slang Dictionary"
        canonicalUrl="/glossary"
        badge="Creator Glossary"
      />
    </div>
  );
}
