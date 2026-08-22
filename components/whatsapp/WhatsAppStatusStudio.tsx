"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Copy,
  Check,
  Heart,
  Share2,
  Send,
  MessageCircle,
  TrendingUp,
  RefreshCw,
  Search,
  Filter,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";
import {
  WHATSAPP_STATUS_SECTIONS,
  WHATSAPP_ABOUT_BIOS,
  WhatsAppStatusItem,
  WhatsAppStatusSection,
} from "@/data/whatsappStatusData";
import { copyToClipboard } from "@/lib/utils";
import { showToast } from "@/components/common/Toast";
import { FAQSection } from "@/components/common/FAQSection";
import { CTASection } from "@/components/common/CTASection";
import { JsonLdSchema } from "@/components/common/JsonLdSchema";
import { EditorialHero } from "@/components/captions/EditorialHero";

export function WhatsAppStatusStudio() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [upvotes, setUpvotes] = useState<Record<string, number>>({});
  const [hasUpvoted, setHasUpvoted] = useState<Record<string, boolean>>({});
  // AI Generator state
  const [aiStatuses, setAiStatuses] = useState<WhatsAppStatusItem[]>([]);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [selectedVibe, setSelectedVibe] = useState<string>("Cool & Attitude");

  const handleCopy = async (id: string, text: string) => {
    const success = await copyToClipboard(text);
    if (success) {
      setCopiedId(id);
      showToast("Copied to clipboard! Ready to paste on WhatsApp 📲", "success");
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const handleShareWhatsApp = (text: string) => {
    const encoded = encodeURIComponent(text);
    const url = `https://api.whatsapp.com/send?text=${encoded}`;
    window.open(url, "_blank", "noopener,noreferrer");
    showToast("Opening WhatsApp Status... 🟢", "success");
  };

  const handleUpvote = (id: string, currentLikes: number) => {
    if (hasUpvoted[id]) {
      setUpvotes((prev) => ({ ...prev, [id]: (prev[id] ?? currentLikes) - 1 }));
      setHasUpvoted((prev) => ({ ...prev, [id]: false }));
    } else {
      setUpvotes((prev) => ({ ...prev, [id]: (prev[id] ?? currentLikes) + 1 }));
      setHasUpvoted((prev) => ({ ...prev, [id]: true }));
      showToast("❤️ Upvoted this WhatsApp status!", "heart");
    }
  };

  const handleGenerateAIStatus = async () => {
    setIsGenerating(true);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: `Short 1-2 line WhatsApp status about ${selectedVibe}, aesthetic, sukoon, and daily vibes`,
          platform: "whatsapp",
          style: "viral",
          tone: "confident",
          length: "short",
          language: "en",
          count: 20,
          includeHashtags: false,
          includeEmojis: true,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        if (data.captions && Array.isArray(data.captions) && data.captions.length > 0) {
          const newItems: WhatsAppStatusItem[] = data.captions.map((text: string, idx: number) => ({
            id: `ai-ws-${Date.now()}-${idx}`,
            text,
            category: "ai-generated",
            likes: Math.floor(Math.random() * 10000) + 5000,
          }));

          setAiStatuses((prev) => [...prev, ...newItems]);
          setIsGenerating(false);
          showToast("✨ Generated 20 fresh AI status lines!", "sparkle");
          return;
        }
      }
    } catch {
      showToast("Failed to generate. Try again.", "error");
    } finally {
      setIsGenerating(false);
    }
  };

  const faqs = [
    {
      question: "How do I update my WhatsApp Status or WhatsApp About bio?",
      answer:
        "1) Click 'Copy' on any status or bio quote above. 2) Open WhatsApp on your phone. 3) For Status: Go to the 'Updates / Status' tab, tap the Pencil icon, and paste. 4) For About Bio: Go to Settings > Your Profile > About, tap the pencil, and paste.",
    },
    {
      question: "What is the difference between WhatsApp Status and WhatsApp About Bio?",
      answer:
        "WhatsApp Status is a 24-hour disappearing story (like Instagram Stories), while WhatsApp About is the permanent bio text displayed on your profile under your name (max 139 characters).",
    },
    {
      question: "Can I generate custom WhatsApp status quotes in Hindi or Hinglish?",
      answer:
        "Yes! Scroll to our AI Status Generator section below, select your desired vibe or type your exact mood, and our AI engine will generate 20 fresh status lines tailored for you.",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-10 text-left">
      {/* 1. Main Editorial Hero */}
      <EditorialHero
        platformName="WhatsApp Status"
        badge="WhatsApp Status Hub"
        title="100 Best WhatsApp Status Quotes"
        description="The ultimate collection of cool, attitude, romantic, sad, motivational, and Islamic WhatsApp status quotes. 1-click copy or share directly to your WhatsApp status!"
        heroImage="/images/whatsapp-status-banner.jpg"
        breadcrumbs={[
          { label: "Content", href: "/#explore-content" },
          { label: "WhatsApp Status" },
        ]}
        tocItems={[
          ...WHATSAPP_STATUS_SECTIONS.map((sec) => ({
            id: sec.id,
            label: sec.title,
          })),
          {
            id: "whatsapp-about-bios",
            label: "WhatsApp About / Profile Bio Quotes (139 Chars)",
          },
        ]}
      />

      <section id="whatsapp-about-bios" className="space-y-4 pt-4 scroll-mt-24 text-left">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            WhatsApp About / Profile Bio Quotes (139 Chars)
          </h2>
          <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-4xl">
            Clean 1-line bio status templates for boys, girls, VIP, and aesthetic profiles.
          </p>
        </div>

        <div className="space-y-3 sm:space-y-3.5 pt-1">
          {WHATSAPP_ABOUT_BIOS.map((bio, idx) => {
            const isCopied = copiedId === bio.id;

            return (
              <div
                key={bio.id}
                onClick={() => handleCopy(bio.id, bio.text)}
                className="group relative flex items-start gap-2 py-1 px-1 rounded-lg hover:bg-zinc-100/70 dark:hover:bg-zinc-800/40 transition-colors cursor-pointer w-full"
                title="Click to copy bio quote"
              >
                <span className="text-base sm:text-[17px] text-zinc-700 dark:text-zinc-300 font-normal shrink-0 select-none">
                  {idx + 1}.
                </span>
                <p className="text-base sm:text-[17px] text-zinc-800 dark:text-zinc-200 font-normal leading-relaxed flex-1 select-all break-words">
                  {bio.text}
                </p>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCopy(bio.id, bio.text);
                  }}
                  className={`hidden sm:inline-flex shrink-0 ml-2 px-2.5 py-1 rounded-md text-xs font-semibold items-center gap-1 transition-all ${
                    isCopied
                      ? "!inline-flex bg-emerald-600 text-white opacity-100 shadow-2xs"
                      : "opacity-0 group-hover:opacity-100 bg-zinc-200/80 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-emerald-600 hover:text-white"
                  }`}
                >
                  {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{isCopied ? "Copied" : "Copy"}</span>
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Numbered Status Sections */}
      <div className="space-y-12 sm:space-y-14">
        {WHATSAPP_STATUS_SECTIONS.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="space-y-4 scroll-mt-24 text-left"
          >
            {/* Section Header with Intro Paragraph */}
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
                {section.title}
              </h2>
              <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-4xl">
                {section.intro}
              </p>
            </div>

            {/* Clean Editorial Numbered Quotes List */}
            <div className="space-y-3 sm:space-y-3.5 pt-1">
              {section.statuses.map((status, idx) => {
                const isCopied = copiedId === status.id;

                return (
                  <div
                    key={status.id}
                    onClick={() => handleCopy(status.id, status.text)}
                    className="group relative flex items-start gap-2 py-1 px-1 rounded-lg hover:bg-zinc-100/70 dark:hover:bg-zinc-800/40 transition-colors cursor-pointer w-full"
                    title="Click to copy status"
                  >
                    <span className="text-base sm:text-[17px] text-zinc-700 dark:text-zinc-300 font-normal shrink-0 select-none">
                      {idx + 1}.
                    </span>
                    <p className="text-base sm:text-[17px] text-zinc-800 dark:text-zinc-200 font-normal leading-relaxed flex-1 select-all break-words">
                      {status.text}
                    </p>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCopy(status.id, status.text);
                      }}
                      className={`hidden sm:inline-flex shrink-0 ml-2 px-2.5 py-1 rounded-md text-xs font-semibold items-center gap-1 transition-all ${
                        isCopied
                          ? "!inline-flex bg-emerald-600 text-white opacity-100 shadow-2xs"
                          : "opacity-0 group-hover:opacity-100 bg-zinc-200/80 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-emerald-600 hover:text-white"
                      }`}
                    >
                      {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{isCopied ? "Copied" : "Copy"}</span>
                    </button>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      {/* 4. AI Generated Status Section (If Generated) */}
      {aiStatuses.length > 0 && (
        <section className="space-y-4 pt-6 border-t-2 border-dashed border-emerald-300 dark:border-emerald-900 text-left animate-in fade-in duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2">
            <h3 className="text-2xl font-extrabold text-zinc-900 dark:text-white">
              AI Generated Custom WhatsApp Statuses ({aiStatuses.length})
            </h3>
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
              ⚡ 100% Unique & Ready to Share
            </span>
          </div>

          <div className="space-y-3 pt-1">
            {aiStatuses.map((status, idx) => {
              const isCopied = copiedId === status.id;
              return (
                <div
                  key={status.id}
                  onClick={() => handleCopy(status.id, status.text)}
                  className="group flex items-start gap-2.5 py-1 px-1.5 rounded-lg hover:bg-zinc-100/70 dark:hover:bg-zinc-800/40 transition-colors cursor-pointer"
                  title="Click to copy status"
                >
                  <span className="text-base text-zinc-700 dark:text-zinc-300 font-normal shrink-0 select-none">
                    {idx + 1}.
                  </span>
                  <p className="text-base text-zinc-800 dark:text-zinc-200 font-normal leading-relaxed flex-1 select-all">
                    {status.text}
                  </p>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCopy(status.id, status.text);
                    }}
                    className={`shrink-0 ml-2 px-2.5 py-1 rounded-md text-xs font-semibold flex items-center gap-1 transition-all ${
                      isCopied
                        ? "bg-emerald-600 text-white opacity-100"
                        : "opacity-0 group-hover:opacity-100 bg-zinc-200/80 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-emerald-600 hover:text-white"
                    }`}
                  >
                    {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{isCopied ? "Copied" : "Copy"}</span>
                  </button>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* 5. In-Page AI Status Generator Box */}
      <section id="ai-status-generator" className="scroll-mt-24 pt-4">
        <div className="p-8 sm:p-12 rounded-3xl bg-linear-to-b from-emerald-500/10 via-teal-500/5 to-transparent border border-emerald-200 dark:border-emerald-900 shadow-xl text-center space-y-6">
          <div className="space-y-2 max-w-xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-zinc-900 border border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 text-xs font-bold shadow-2xs">
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>AI WhatsApp Status Synthesizer</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white">
              Need 20 Custom WhatsApp Statuses?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Select your vibe below and generate 20 fresh, original WhatsApp status lines tailored to your exact mood in 2 seconds.
            </p>
          </div>

          {/* Vibe Selector */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto">
            {[
              "Cool & Attitude",
              "Love & Romantic",
              "Late Night Sad & Sukoon",
              "Hustle & Motivational",
              "Funny & Sarcastic",
              "Islamic & Duas",
              "Good Morning Vibes",
            ].map((vibe) => (
              <button
                key={vibe}
                type="button"
                onClick={() => setSelectedVibe(vibe)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                  selectedVibe === vibe
                    ? "bg-emerald-600 text-white border-emerald-600 shadow-sm"
                    : "bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-800 hover:border-emerald-400"
                }`}
              >
                {vibe}
              </button>
            ))}
          </div>

          <div>
            <button
              type="button"
              onClick={handleGenerateAIStatus}
              disabled={isGenerating}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm sm:text-base shadow-lg shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 mx-auto cursor-pointer disabled:opacity-60"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Synthesizing 20 {selectedVibe} Statuses...</span>
                </>
              ) : (
                <>
                  <Zap className="w-4 h-4" />
                  <span>Generate 20 {selectedVibe} WhatsApp Statuses</span>
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section className="pt-6">
        <FAQSection
          title="WhatsApp Status Frequently Asked Questions"
          subtitle="Tips, tricks, and answers about creating viral WhatsApp status updates."
          faqs={faqs}
        />
      </section>

      {/* JSON-LD Schema */}
      <JsonLdSchema type="FAQPage" faqs={faqs} />
      <JsonLdSchema
        type="ItemList"
        title="Best WhatsApp Status Quotes"
        description="Top curated WhatsApp status quotes and 1-liners"
        items={WHATSAPP_STATUS_SECTIONS.flatMap((s) => s.statuses.map((item) => ({ name: item.text })))}
      />

      {/* 7. CTA Section */}
      <CTASection />
    </div>
  );
}
