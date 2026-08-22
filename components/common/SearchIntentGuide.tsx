"use client";

import { Clock, Hash, Camera, Music, Sparkles, Share2, Lightbulb, CheckCircle2 } from "lucide-react";

interface SearchIntentGuideProps {
  categoryName: string;
  type: "caption" | "shayari" | "status" | "quote" | "bio";
  platformName?: string;
}

export function SearchIntentGuide({ categoryName, type, platformName = "Instagram & Social Media" }: SearchIntentGuideProps) {
  const cName = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);

  if (type === "caption") {
    return (
      <section className="space-y-6 pt-6 border-t border-zinc-200 dark:border-zinc-800 text-left">
        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white tracking-tight">
            How to Use {cName} Captions for Maximum Engagement
          </h2>
          <p className="text-sm text-zinc-500 pt-1">
            Practical strategies to boost likes, shares, and algorithmic reach with your {cName.toLowerCase()} posts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 1. Best Posting Times */}
          <div className="space-y-2 p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-sm">
              <Clock className="w-4 h-4 shrink-0" />
              <span>Best Posting Times for {cName} Posts</span>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Post between <strong>6:00 PM – 9:00 PM</strong> on weekdays and <strong>11:00 AM – 2:00 PM</strong> on weekends when users are actively browsing their feeds during leisure hours.
            </p>
          </div>

          {/* 2. Viral Hashtag Strategy */}
          <div className="space-y-2 p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold text-sm">
              <Hash className="w-4 h-4 shrink-0" />
              <span>Recommended Hashtags to Pair</span>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-mono text-xs">
              #{categoryName.toLowerCase().replace(/\s+/g, "")} #{categoryName.toLowerCase().replace(/\s+/g, "")}vibes #viralcaptions #explorepage #{platformName.toLowerCase().replace(/[^a-z]/g, "")}post #aestheticvibes
            </p>
          </div>

          {/* 3. Photo & Video Matching Ideas */}
          <div className="space-y-2 p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-sm">
              <Camera className="w-4 h-4 shrink-0" />
              <span>Matching Visual & Photo Ideas</span>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Pair with clean solo portraits, candid golden-hour shots, mirror selfies, or cinematic slow-motion reels. High-contrast lighting elevates the emotional punch of your caption.
            </p>
          </div>

          {/* 4. First-Line Hook Strategy */}
          <div className="space-y-2 p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
              <Sparkles className="w-4 h-4 shrink-0" />
              <span>3-Second Hook Rule</span>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Keep the first 5 to 7 words punchy and intriguing. Over 75% of users decide whether to read your post within the first 2 seconds of scrolling.
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (type === "shayari") {
    return (
      <section className="space-y-6 pt-6 border-t border-zinc-200 dark:border-zinc-800 text-left">
        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white tracking-tight">
            Masterclass: How to Share {cName} Shayari Online
          </h2>
          <p className="text-sm text-zinc-500 pt-1">
            Tips for pairing couplets with reels, background music, and WhatsApp status formatting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 1. Background Music Pairing */}
          <div className="space-y-2 p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-bold text-sm">
              <Music className="w-4 h-4 shrink-0" />
              <span>Background Audio & BGM Suggestions</span>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Pair your {cName.toLowerCase()} shayari with slowed + reverb instrumental flute, acoustic piano tracks, or classic lofi beats for maximum emotional immersion on Instagram Reels.
            </p>
          </div>

          {/* 2. Visual Typography for Stories */}
          <div className="space-y-2 p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-sm">
              <Camera className="w-4 h-4 shrink-0" />
              <span>Visual Formatting for Status & Stories</span>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Use clean Hindi typography on moody dark backgrounds with 2-line line-breaks. Add a single subtle emoji (like 🥀, 🖤, or 🕊️) to maintain elegant aesthetic dignity.
            </p>
          </div>

          {/* 3. Emotional Timing */}
          <div className="space-y-2 p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-sm">
              <Clock className="w-4 h-4 shrink-0" />
              <span>Late-Night Status Posting Hours</span>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Poetic and emotional shayari performs best when shared late evening (<strong>10:00 PM – 1:00 AM</strong>) when audiences reflect quietly on personal memories and relationships.
            </p>
          </div>

          {/* 4. 1-Click WhatsApp Sharing */}
          <div className="space-y-2 p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
              <Share2 className="w-4 h-4 shrink-0" />
              <span>1-Click WhatsApp & Social Ready</span>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Every couplet on this page is formatted with proper Hindi script and Hinglish transliteration so you can copy and post without broken characters.
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (type === "status") {
    return (
      <section className="space-y-6 pt-6 border-t border-zinc-200 dark:border-zinc-800 text-left">
        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white tracking-tight">
            Tips for Styling Your {cName} Status
          </h2>
          <p className="text-sm text-zinc-500 pt-1">
            Formatting etiquette and aesthetic design tricks for WhatsApp, Instagram Stories, and Facebook.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
              <Lightbulb className="w-4 h-4 shrink-0" />
              <span>Clean One-Liner Formatting</span>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Keep your status under 100 characters so viewers can read the entire thought in 3 seconds before the story slide transitions.
            </p>
          </div>

          <div className="space-y-2 p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-sm">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Aesthetic Text Alignment</span>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Center-align your text on solid minimal backgrounds or subtle blur gradients for a polished, influencer-grade presentation.
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (type === "bio") {
    return (
      <section className="space-y-6 pt-6 border-t border-zinc-200 dark:border-zinc-800 text-left">
        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white tracking-tight">
            Profile Optimization: How to Choose a {cName} Bio
          </h2>
          <p className="text-sm text-zinc-500 pt-1">
            Character limit rules and conversion tips for Instagram, TikTok, and Twitter profiles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-sm">
              <Sparkles className="w-4 h-4 shrink-0" />
              <span>Platform Character Limits</span>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              • <strong>Instagram Bio:</strong> 150 characters max<br />
              • <strong>TikTok Bio:</strong> 80 characters max<br />
              • <strong>Twitter/X Bio:</strong> 160 characters max
            </p>
          </div>

          <div className="space-y-2 p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold text-sm">
              <Lightbulb className="w-4 h-4 shrink-0" />
              <span>Call-to-Action (CTA) Inclusion</span>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Always pair your {cName.toLowerCase()} bio with a clear downward arrow (👇) pointing to your Link-in-Bio or featured project.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return null;
}
