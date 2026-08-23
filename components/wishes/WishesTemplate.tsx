"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Sparkles,
  Copy,
  Check,
  Heart,
  MessageCircle,
  Volume2,
  Image as ImageIcon,
  ArrowRight,
  Search,
  X,
  Share2,
  RefreshCw,
  Send,
  Users,
  Calendar,
  Hash,
} from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { WishOccasionHub, WishItem } from "@/data/wishesTaxonomy";
import { getWishesByOccasion } from "@/data/wishesData";
import { copyToClipboard } from "@/lib/utils";
import { showToast } from "@/components/common/Toast";
import { FAQSection } from "@/components/common/FAQSection";
import { CTASection } from "@/components/common/CTASection";
import { JsonLdSchema } from "@/components/common/JsonLdSchema";
import { VisualQuoteModal } from "@/components/captions/VisualQuoteModal";
import { HowToUseGuide } from "@/components/common/HowToUseGuide";
import { AuthorBioBox } from "@/components/common/AuthorBioBox";
import { TopicClusterSiloCloud } from "@/components/common/TopicClusterSiloCloud";

interface WishesTemplateProps {
  hub: WishOccasionHub;
}

export function WishesTemplate({ hub }: WishesTemplateProps) {
  const [activeSection, setActiveSection] = useState<string>("all");
  const [selectedRecipient, setSelectedRecipient] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [upvotes, setUpvotes] = useState<Record<string, number>>({});
  const [hasUpvoted, setHasUpvoted] = useState<Record<string, boolean>>({});

  // Visual Quote Modal
  const [selectedWishForCard, setSelectedWishForCard] = useState<string | null>(null);

  // AI Customizer State
  const [recipientName, setRecipientName] = useState("");
  const [aiTone, setAiTone] = useState("Emotional & Heartfelt");
  const [customGeneratedWish, setCustomGeneratedWish] = useState<string | null>(null);
  const [isAiLoading, setIsAiLoading] = useState(false);

  const rawWishes = useMemo(() => getWishesByOccasion(hub.slug), [hub.slug]);

  const handleCopy = async (id: string, text: string) => {
    const success = await copyToClipboard(text);
    if (success) {
      setCopiedId(id);
      showToast("Wish copied to clipboard! 💌✨", "success");
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const handleShareWhatsApp = (text: string) => {
    const encoded = encodeURIComponent(text);
    const url = `https://api.whatsapp.com/send?text=${encoded}`;
    window.open(url, "_blank", "noopener,noreferrer");
    showToast("Opening WhatsApp... 🟢", "success");
  };

  const handlePlayAudio = (text: string) => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-US";
      utterance.rate = 0.95;
      window.speechSynthesis.speak(utterance);
      showToast("Playing wish narration... 🔊", "sparkle");
    } else {
      showToast("Speech synthesis not supported on this browser.", "error");
    }
  };

  const handleUpvote = (id: string, currentLikes: number) => {
    if (hasUpvoted[id]) {
      setUpvotes((prev) => ({ ...prev, [id]: (prev[id] ?? currentLikes) - 1 }));
      setHasUpvoted((prev) => ({ ...prev, [id]: false }));
    } else {
      setUpvotes((prev) => ({ ...prev, [id]: (prev[id] ?? currentLikes) + 1 }));
      setHasUpvoted((prev) => ({ ...prev, [id]: true }));
      showToast("❤️ Upvoted this wish!", "heart");
    }
  };

  const handleGenerateCustomWish = async () => {
    setIsAiLoading(true);
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: `Personalized ${hub.name} for ${recipientName || "a special person"} with tone ${aiTone}`,
          platform: "whatsapp",
          style: "creative",
          tone: aiTone.toLowerCase(),
          length: "medium",
          language: "en",
          count: 1,
          includeHashtags: false,
          includeEmojis: true,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        if (data.captions && data.captions.length > 0) {
          setCustomGeneratedWish(data.captions[0]);
          setIsAiLoading(false);
          showToast("✨ Custom personalized wish generated!", "sparkle");
          return;
        }
      }
    } catch (e) {
      console.warn("AI generation failed:", e);
    }

    // Fallback personalized generator
    const name = recipientName.trim() || "my dear";
    const fallback = `Dearest ${name}, on this wonderful ${hub.name}, wishing you boundless happiness, peace, and dreams fulfilled! 🥂💖`;

    setCustomGeneratedWish(fallback);
    setIsAiLoading(false);
    showToast("✨ Personalized wish ready!", "sparkle");
  };

  // Trending Hashtags
  const trendingHashtagsList = useMemo(() => {
    if (hub.trendingHashtags && hub.trendingHashtags.length > 0) {
      return hub.trendingHashtags;
    }
    const cleanTag = hub.slug.replace(/[^a-z0-9]/g, "");
    return [
      `#${hub.name.replace(/[^a-zA-Z0-9]/g, "")}`,
      `#${cleanTag}`,
      `#${hub.name.replace(/[^a-zA-Z0-9]/g, "")}2026`,
      `#${cleanTag}Vibes`,
      `#Celebrations`,
      `#WishesAndBlessings`,
      `#Happy${hub.name.split(" ")[0]}`,
      `#ViralWishes`,
    ];
  }, [hub.trendingHashtags, hub.name, hub.slug]);

  const filteredWishes = useMemo(() => {
    let list = rawWishes;
    if (selectedRecipient !== "all") {
      list = list.filter((w) =>
        w.recipient?.toLowerCase().includes(selectedRecipient.toLowerCase())
      );
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (w) =>
          w.text.toLowerCase().includes(q) ||
          (w.hindi && w.hindi.toLowerCase().includes(q)) ||
          (w.hinglish && w.hinglish.toLowerCase().includes(q))
      );
    }
    return list;
  }, [rawWishes, selectedRecipient, searchQuery]);

  const displaySections = useMemo(() => {
    if (activeSection === "all") {
      const nonAll = hub.sections.filter((s) => s.id !== "all");
      return nonAll.length > 0 ? nonAll : [{ id: "all", label: "🌟 All Wishes", subtitle: "Curated collection of verified wishes." }];
    }
    return hub.sections.filter((s) => s.id === activeSection);
  }, [hub.sections, activeSection]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-12">
      {/* Visual Quote Image Studio Modal */}
      {selectedWishForCard && (
        <VisualQuoteModal
          isOpen={!!selectedWishForCard}
          onClose={() => setSelectedWishForCard(null)}
          captionText={selectedWishForCard}
        />
      )}

      {/* Breadcrumbs Navigation with Schema */}
      <div className="text-left pb-1">
        <Breadcrumbs
          items={[
            { label: "Wishes", href: "/wishes" },
            { label: hub.name, href: `/${hub.slug}` },
          ]}
        />
      </div>

      {/* 1. Header & Hero */}
      <div className="text-center sm:text-left space-y-3 max-w-4xl">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 dark:bg-indigo-950/70 border border-indigo-500/30 text-xs font-bold text-indigo-600 dark:text-indigo-400">
            <span>{hub.emoji}</span>
            <span>{hub.badge}</span>
          </div>

          {/* Feature 6: Event Date & 2026 Calendar Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs font-semibold text-zinc-600 dark:text-zinc-300">
            <Calendar className="w-3.5 h-3.5 text-indigo-500" />
            <span>2026 Edition • {hub.eventDate2026 || "Year-Round Celebration"} • 100+ Verified</span>
          </div>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white leading-tight">
          100+ Best {hub.name}{" "}
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
            (Quotes & Messages)
          </span>
        </h1>

        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {hub.description}
        </p>
      </div>

      {/* 2. Clean Search Bar & Persona Filters */}
      <div className="space-y-3 text-left">
        {/* Clean Search Input */}
        <div className="relative flex items-center">
          <Search className="w-4 h-4 text-zinc-400 absolute left-4" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={`Search ${hub.name} (e.g. emotional, funny, blessings, short)...`}
            className="w-full pl-11 pr-10 py-3 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs sm:text-sm text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 shadow-2xs transition-all"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-3.5 p-1 rounded-full text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Section Mood Filter Pills */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar pt-1">
          {hub.sections.map((sec) => (
            <button
              key={sec.id}
              type="button"
              onClick={() => setActiveSection(sec.id)}
              className={`shrink-0 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeSection === sec.id
                  ? "bg-indigo-600 text-white shadow-xs"
                  : "bg-white dark:bg-zinc-950 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 hover:border-indigo-400 dark:hover:border-indigo-600"
              }`}
            >
              {sec.label}
            </button>
          ))}
        </div>

        {/* Feature 2: Persona Recipient Switcher Pills */}
        {hub.popularRecipients && hub.popularRecipients.length > 0 && (
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pt-0.5">
            <span className="text-xs font-bold text-zinc-400 shrink-0 flex items-center gap-1">
              <Users className="w-3.5 h-3.5 text-indigo-500" />
              <span>For:</span>
            </span>
            <button
              type="button"
              onClick={() => setSelectedRecipient("all")}
              className={`shrink-0 px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedRecipient === "all"
                  ? "bg-zinc-800 text-white dark:bg-zinc-200 dark:text-zinc-900"
                  : "bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800"
              }`}
            >
              All
            </button>
            {hub.popularRecipients.map((rec) => (
              <button
                key={rec}
                type="button"
                onClick={() => setSelectedRecipient(rec)}
                className={`shrink-0 px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedRecipient === rec
                    ? "bg-zinc-800 text-white dark:bg-zinc-200 dark:text-zinc-900"
                    : "bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800"
                }`}
              >
                {rec}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* 3. Structured Sections with H2, Subtitle & 15+ Wishes Each */}
      <div className="space-y-12 text-left">
        {displaySections.map((sec) => {
          const sectionItems = filteredWishes.filter(
            (w) => w.section === sec.id || (sec.id === "all" && activeSection === "all")
          );

          if (sectionItems.length === 0) return null;

          return (
            <section key={sec.id} id={sec.id} className="space-y-4 scroll-mt-24">
              {/* Section H2 Heading + Subtitle */}
              <div className="space-y-1 pb-2 border-b border-zinc-100 dark:border-zinc-900">
                <div className="flex items-center gap-2">
                  <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
                    {sec.label}
                  </h2>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-500">
                    {sectionItems.length} Wishes
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
                  {sec.subtitle || `Curated collection of ${sec.label} quotes, greetings, and messages for ${hub.name}.`}
                </p>
              </div>

              {/* Seamless List Rows (15+ Items) */}
              <div className="space-y-1.5 sm:space-y-1">
                {sectionItems.map((item, idx) => {
                  const currentText = item.text;
                  const isCopied = copiedId === item.id;
                  const currentLikes = upvotes[item.id] ?? item.likes;
                  const isLiked = hasUpvoted[item.id];

                  return (
                    <div
                      key={item.id}
                      className="group flex items-start sm:items-center justify-between gap-3 sm:gap-4 py-2.5 sm:py-3 text-left rounded-xl transition-colors hover:bg-zinc-50/70 dark:hover:bg-zinc-900/40 px-2 -mx-2"
                    >
                      {/* Number Index + Text Content */}
                      <div
                        onClick={() => handleCopy(item.id, currentText)}
                        className="flex items-baseline gap-2 flex-1 min-w-0 cursor-pointer"
                      >
                        <span className="text-xs sm:text-sm font-bold text-zinc-400 dark:text-zinc-500 tabular-nums min-w-[1.5rem] shrink-0 select-none">
                          {idx + 1}.
                        </span>

                        <div className="flex flex-wrap items-baseline gap-1.5 flex-1 min-w-0">
                          <p className="text-sm sm:text-base font-normal text-zinc-800 dark:text-zinc-200 select-text leading-relaxed break-words">
                            {currentText}
                          </p>
                          {item.recipient && (
                            <span className="hidden md:inline-block text-[10px] font-bold px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 text-zinc-500 shrink-0">
                              {item.recipient}
                            </span>
                          )}
                          {isCopied && (
                            <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-md animate-fade-in">
                              <Check className="w-3 h-3" />
                              <span>Copied!</span>
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Actions: Desktop Hover Copy + Actions */}
                      <div className="hidden sm:flex items-center gap-1 sm:gap-1.5 shrink-0">
                        <button
                          type="button"
                          onClick={() => handleCopy(item.id, currentText)}
                          className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold border transition-all cursor-pointer select-none ${
                            isCopied
                              ? "bg-emerald-600 border-emerald-600 text-white"
                              : "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
                          }`}
                        >
                          {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                          <span>{isCopied ? "Copied" : "Copy"}</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => handleShareWhatsApp(currentText)}
                          className="inline-flex items-center gap-1 px-2 py-1.5 rounded-lg text-xs font-semibold border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20 transition-all cursor-pointer"
                          title="Share to WhatsApp"
                        >
                          <MessageCircle className="w-3.5 h-3.5 fill-current" />
                          <span className="hidden sm:inline">WhatsApp</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => handlePlayAudio(currentText)}
                          title="Listen to Wish"
                          className="p-1.5 rounded-lg text-xs border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-500 hover:text-indigo-600 transition-all cursor-pointer opacity-0 group-hover:opacity-100 hidden sm:inline-flex"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>

                        <button
                          type="button"
                          onClick={() => setSelectedWishForCard(currentText)}
                          title="Make Story Card Image"
                          className="p-1.5 rounded-lg text-xs border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-500 hover:text-purple-600 transition-all cursor-pointer opacity-0 group-hover:opacity-100 hidden sm:inline-flex"
                        >
                          <ImageIcon className="w-3.5 h-3.5" />
                        </button>

                        <button
                          type="button"
                          onClick={() => handleUpvote(item.id, item.likes)}
                          className={`inline-flex items-center gap-1 px-2 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                            isLiked
                              ? "bg-rose-50 dark:bg-rose-950/60 border-rose-200 dark:border-rose-800 text-rose-600 dark:text-rose-400"
                              : "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-400 hover:text-rose-500 opacity-0 group-hover:opacity-100 hidden sm:inline-flex"
                          }`}
                        >
                          <Heart className={`w-3.5 h-3.5 ${isLiked ? "fill-rose-600 text-rose-600" : ""}`} />
                          <span className="text-[11px] font-mono">
                            {currentLikes > 999 ? `${(currentLikes / 1000).toFixed(1)}k` : currentLikes}
                          </span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>

      {/* Feature 5: Top Trending Hashtags Box */}
      <div className="p-4 sm:p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-2xs">
        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400">
            <Hash className="w-4 h-4" />
            <span>Trending 2026 Hashtags for {hub.name}</span>
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono select-all leading-relaxed">
            {trendingHashtagsList.join(" ")}
          </p>
        </div>
        <button
          type="button"
          onClick={() => handleCopy("hashtags", trendingHashtagsList.join(" "))}
          className="shrink-0 px-4 py-2 rounded-xl bg-white dark:bg-zinc-900 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
        >
          <Copy className="w-3.5 h-3.5" />
          <span>Copy Hashtags</span>
        </button>
      </div>

      {/* 4. AI Personalizer Box */}
      <section className="p-6 sm:p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-center space-y-5">
        <div className="max-w-xl mx-auto space-y-1.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 fill-current" />
            <span>AI Wish Customizer</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white">
            Personalize a Wish with Their Name
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Enter recipient’s name to generate a completely tailored message.
          </p>
        </div>

        <div className="max-w-lg mx-auto flex flex-col sm:flex-row items-center gap-2.5">
          <input
            type="text"
            value={recipientName}
            onChange={(e) => setRecipientName(e.target.value)}
            placeholder="Enter Name (e.g. Priya, Alex, Mom, Boss)..."
            className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs sm:text-sm text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="button"
            onClick={handleGenerateCustomWish}
            disabled={isAiLoading}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm shadow-xs transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer disabled:opacity-60"
          >
            {isAiLoading ? (
              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
            ) : (
              <>
                <Send className="w-3.5 h-3.5" />
                <span>Personalize</span>
              </>
            )}
          </button>
        </div>

        {customGeneratedWish && (
          <div className="max-w-xl mx-auto p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-indigo-200 dark:border-indigo-800 text-left shadow-xs space-y-2.5">
            <p className="text-xs sm:text-sm font-medium text-zinc-900 dark:text-white leading-relaxed">
              {customGeneratedWish}
            </p>
            <div className="flex items-center gap-2 pt-2 border-t border-zinc-100 dark:border-zinc-800">
              <button
                type="button"
                onClick={() => handleCopy("ai-custom", customGeneratedWish)}
                className="px-3 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-xs font-bold cursor-pointer"
              >
                Copy
              </button>
              <button
                type="button"
                onClick={() => handleShareWhatsApp(customGeneratedWish)}
                className="px-3 py-1 rounded-lg bg-emerald-600 text-white text-xs font-bold cursor-pointer"
              >
                WhatsApp
              </button>
              <button
                type="button"
                onClick={() => setSelectedWishForCard(customGeneratedWish)}
                className="px-3 py-1 rounded-lg bg-purple-600 text-white text-xs font-bold cursor-pointer"
              >
                Make Card
              </button>
            </div>
          </div>
        )}
      </section>

      {/* 5. How To Use Guide */}
      <HowToUseGuide
        guideId="wishes-greeting-guide"
        categoryName={hub.name}
        title={`How to Choose, Personalize & Share Perfect ${hub.name}`}
        pageUrl={`https://unitoolkit.com/${hub.slug}`}
      />

      {/* 6. Topic Cluster Silo Cloud */}
      <TopicClusterSiloCloud
        topic="Wishes & Greetings"
        contentType="wishes"
        currentRoute={`/${hub.slug}`}
      />

      {/* 7. E-E-A-T Editorial Review Box */}
      <AuthorBioBox categoryType="Special Events & Greetings" topic={hub.name} />

      {/* 8. FAQ Section */}
      <section className="pt-6 border-t border-zinc-200 dark:border-zinc-800">
        <FAQSection
          title={`Frequently Asked Questions About ${hub.name}`}
          subtitle="Tips on etiquette, customization, and WhatsApp status formatting."
          faqs={hub.faqs}
        />
      </section>

      {/* JSON-LD Schemas */}
      <JsonLdSchema type="FAQPage" faqs={hub.faqs} />
      <JsonLdSchema
        type="ItemList"
        title={`Best ${hub.name} Collection`}
        description={hub.description}
        items={filteredWishes.map((w) => ({ name: w.text }))}
      />

      {/* CTA */}
      <CTASection
        title={`Looking for another occasion or festival?`}
        subtitle="Explore our comprehensive directory of 80+ life milestones, festivals, and daily greetings."
      />
    </div>
  );
}
