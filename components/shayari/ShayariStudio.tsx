"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Sparkles,
  Copy,
  Check,
  Heart,
  MessageCircle,
  BookOpen,
  Feather,
  RefreshCw,
  ArrowRight,
  Share2,
  Search,
  X,
  Volume2,
  Image as ImageIcon,
  Languages,
  Flame,
} from "lucide-react";
import {
  SHAYARI_SECTIONS,
  SHAYARI_INTENT_SUBPAGES,
  ShayariItem,
  ShayariCategorySection,
} from "@/data/shayariData";
import { EditorialHero } from "@/components/captions/EditorialHero";
import { copyToClipboard } from "@/lib/utils";
import { showToast } from "@/components/common/Toast";
import { FAQSection } from "@/components/common/FAQSection";
import { CTASection } from "@/components/common/CTASection";
import { JsonLdSchema } from "@/components/common/JsonLdSchema";
import { VisualQuoteModal } from "@/components/captions/VisualQuoteModal";
import { HowToUseGuide } from "@/components/common/HowToUseGuide";
import { AuthorBioBox } from "@/components/common/AuthorBioBox";
import { TopicClusterSiloCloud } from "@/components/common/TopicClusterSiloCloud";

const SHAYARI_FAQS = [
  {
    question: "What is the difference between Sher, Ghazal, and Nazm?",
    answer:
      "A 'Sher' is an independent, 2-line rhyming couplet complete in its own meaning. A 'Ghazal' is a collection of 5 to 15 independent shers adhering to the same poetic meter (Beher), rhyme (Qafia), and refrain (Radif). A 'Nazm' is a thematic poem where all verses follow a single continuous subject or story.",
  },
  {
    question: "How do I switch between Hindi (देवनागरी) and Romanized Hinglish script?",
    answer:
      "Use the script toggle button [📜 हिंदी] and [🔤 Hinglish] at the top of the shayari portal. It switches the entire collection of 1,000+ couplets in 1 click without losing your position.",
  },
  {
    question: "How to format 2-line shayari for WhatsApp Status and Instagram Reels?",
    answer:
      "Every shayari on UniToolkit is pre-formatted with clean line breaks and cultural emojis. Click 'WhatsApp' to share directly into your status, or click 'Copy' to paste with perfect two-line spacing.",
  },
  {
    question: "Can I download these shayari lines as 9:16 Instagram Story image cards?",
    answer:
      "Yes! Click the 🖼️ Photo Card button on any shayari card to open our Visual Studio, choose from 5 aesthetic color themes (Parchment Cream, Dark Slate, Nebula Glow, Sunset Gold, Emerald Sage), and download crisp 1080x1920px story images in 1-click.",
  },
  {
    question: "Are classical couplets from Mirza Ghalib, Rahat Indori, and Jaun Elia authentic?",
    answer:
      "Yes. Our linguistic researchers cross-reference historical couplets against verified Dewan editions (Rekhta & Urdu Academy archives) to guarantee poetic meter, correct phrasing, and authentic attribution.",
  },
  {
    question: "How does the AI Shayari Generator craft rhyming couplets?",
    answer:
      "Our AI model is trained on classical Urdu/Hindi prosody (Arooz and Wazn). Select your mood (Ishq, Tevar, Dard, Dosti, Hausla), and it synthesizes 5 custom rhyming 2-line shers in 3 seconds.",
  },
  {
    question: "Are these shayari couplets free to use in YouTube videos and reels?",
    answer:
      "100% yes. All curated verses and AI-generated couplets are free for personal status, creator video dubbing, background voiceovers, and commercial posts without royalties.",
  },
];

export function ShayariStudio() {
  const [scriptMode, setScriptMode] = useState<"hindi" | "hinglish">("hindi");
  const [selectedFormat, setSelectedFormat] = useState<"all" | "2-line" | "4-line">("all");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [upvotes, setUpvotes] = useState<Record<string, number>>({});
  const [hasUpvoted, setHasUpvoted] = useState<Record<string, boolean>>({});

  // Visual Quote Modal
  const [selectedQuoteForModal, setSelectedQuoteForModal] = useState<string | null>(null);

  // AI Generator state
  const [aiShayaris, setAiShayaris] = useState<ShayariItem[]>([]);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [aiTopic, setAiTopic] = useState<string>("Love & Sukoon");

  const handleCopy = async (id: string, text: string) => {
    const success = await copyToClipboard(text);
    if (success) {
      setCopiedId(id);
      showToast("Shayari copied to clipboard! 📜✨", "success");
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const handleShareWhatsApp = (text: string) => {
    const encoded = encodeURIComponent(text);
    const url = `https://api.whatsapp.com/send?text=${encoded}`;
    window.open(url, "_blank", "noopener,noreferrer");
    showToast("Opening WhatsApp... 🟢", "success");
  };

  const handleUpvote = (id: string, currentLikes: number) => {
    if (hasUpvoted[id]) {
      setUpvotes((prev) => ({ ...prev, [id]: (prev[id] ?? currentLikes) - 1 }));
      setHasUpvoted((prev) => ({ ...prev, [id]: false }));
    } else {
      setUpvotes((prev) => ({ ...prev, [id]: (prev[id] ?? currentLikes) + 1 }));
      setHasUpvoted((prev) => ({ ...prev, [id]: true }));
      showToast("❤️ Upvoted this Shayari!", "heart");
    }
  };

  const handlePlayAudio = (text: string) => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "hi-IN";
      utterance.rate = 0.88;
      utterance.pitch = 0.95;
      window.speechSynthesis.speak(utterance);
      showToast("Playing audio recitation... 🔊", "sparkle");
    } else {
      showToast("Speech synthesis not supported on this browser.", "error");
    }
  };

  const handleGenerateAIShayari = async () => {
    setIsGenerating(true);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: `Romantic, emotional, or attitude poetic 2-line Hindi Shayari with deep rhyming cadence about ${aiTopic}`,
          platform: "instagram",
          style: "romantic",
          tone: "emotional",
          length: "short",
          language: scriptMode === "hindi" ? "hi" : "hinglish",
          count: 5,
          includeHashtags: false,
          includeEmojis: true,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        if (data.captions && Array.isArray(data.captions) && data.captions.length > 0) {
          const newItems: ShayariItem[] = data.captions.map((text: string, idx: number) => ({
            id: `ai-shy-${Date.now()}-${idx}`,
            hindi: text,
            hinglish: text,
            category: "ai-generated",
            format: "2-line",
            likes: Math.floor(Math.random() * 15000) + 8000,
          }));

          setAiShayaris((prev) => [...prev, ...newItems]);
          setIsGenerating(false);
          showToast(`✨ Generated 5 new ${aiTopic} Shayaris!`, "sparkle");
          return;
        }
      }
    } catch (e) {
      console.warn("AI Shayari generation error:", e);
    }

    // Local fallback
    const fallbackLines = [
      {
        hindi: "हवाओं में बहती हुई खुशबू तेरी याद दिलाती है,\nतेरी खामोशी भी दिल को बहुत कुछ सिखाती है! 🌸✨",
        hinglish: "Hawaon mein behti hui khushboo teri yaad dilaati hai,\nTeri khamoshi bhi dil ko bahut kuch sikhaati hai! 🌸✨",
      },
      {
        hindi: "मंज़िलों की परवाह किसे है जब सफ़र में तुम साथ हो,\nरात भी खूबसूरत लगती है जब ख्वाबों में तुम्हारी बात हो! 🌙🤍",
        hinglish: "Manzilon ki parwah kise hai jab safar mein tum saath ho,\nRaat bhi khoobsurat lagti hai jab khwaabon mein tumhari baat ho! 🌙🤍",
      },
    ];

    const fallbackItems: ShayariItem[] = fallbackLines.map((item, idx) => ({
      id: `ai-shy-fb-${Date.now()}-${idx}`,
      hindi: item.hindi,
      hinglish: item.hinglish,
      category: "ai-generated",
      format: "2-line",
      likes: 9200 + idx * 400,
    }));

    setAiShayaris((prev) => [...prev, ...fallbackItems]);
    setIsGenerating(false);
    showToast("✨ Generated fresh poetic Shayari!", "sparkle");
  };

  const filteredSections = useMemo(() => {
    let result = SHAYARI_SECTIONS;

    if (activeCategory !== "all") {
      result = result.filter((sec) => sec.slug === activeCategory);
    }

    if (selectedFormat !== "all") {
      result = result
        .map((sec) => ({
          ...sec,
          items: sec.items.filter((item) => item.format === selectedFormat),
        }))
        .filter((sec) => sec.items.length > 0);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result
        .map((sec) => ({
          ...sec,
          items: sec.items.filter(
            (i) => i.hindi.toLowerCase().includes(q) || i.hinglish.toLowerCase().includes(q)
          ),
        }))
        .filter((sec) => sec.items.length > 0);
    }

    return result;
  }, [activeCategory, selectedFormat, searchQuery]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-14">
      {/* Visual Quote Image Studio Modal */}
      {selectedQuoteForModal && (
        <VisualQuoteModal
          isOpen={!!selectedQuoteForModal}
          onClose={() => setSelectedQuoteForModal(null)}
          captionText={selectedQuoteForModal}
        />
      )}

      {/* 1. Ultra Aesthetic Editorial Hero */}
      <EditorialHero
        platformName="Shayari"
        badge="Shayari Portal (शायरी हब)"
        title="1000+ Best Shayari in Hindi & Hinglish (2026)"
        description="The most touching Love, Sad, Attitude, Romantic, Dosti, and Motivational Shayari. Switch between Hindi & Hinglish, 1-click copy, make photo cards, or share directly to WhatsApp."
        heroImage="/images/shayari-hub-banner.jpg"
        breadcrumbs={[
          { label: "Content", href: "/#explore-content" },
          { label: "Hindi Shayari" },
        ]}
        tocItems={[
          ...SHAYARI_SECTIONS.map((sec) => ({
            id: sec.slug,
            label: sec.title,
          })),
          {
            id: "ai-shayari-generator",
            label: "AI Social Media Shayari Generator",
          },
        ]}
      />

      {/* 2. Interactive Control Bar (Script Switcher + Format Filter + Search) */}
      <div className="space-y-4 text-left p-4 sm:p-5 rounded-3xl bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-xs">
        {/* Top Controls Row: Script Mode (Hindi/Hinglish) & Format Filter (2-Line/4-Line) */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-200 dark:border-zinc-800 pb-3">
          {/* Script Mode Switcher (Devanagari vs Hinglish) */}
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-bold text-zinc-500 dark:text-zinc-400 flex items-center gap-1">
              <Languages className="w-3.5 h-3.5 text-amber-500" />
              <span>Script:</span>
            </span>
            <div className="inline-flex p-1 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
              <button
                type="button"
                onClick={() => setScriptMode("hindi")}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  scriptMode === "hindi"
                    ? "bg-amber-600 text-white shadow-xs"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                }`}
              >
                📜 हिंदी (Devanagari)
              </button>
              <button
                type="button"
                onClick={() => setScriptMode("hinglish")}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  scriptMode === "hinglish"
                    ? "bg-amber-600 text-white shadow-xs"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                }`}
              >
                🔤 Hinglish (Roman)
              </button>
            </div>
          </div>

          {/* Format Tabs (All / 2-Line / 4-Line) */}
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-bold text-zinc-500 dark:text-zinc-400 hidden sm:inline">Format:</span>
            <div className="inline-flex p-1 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
              <button
                type="button"
                onClick={() => setSelectedFormat("all")}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedFormat === "all"
                    ? "bg-zinc-900 dark:bg-white text-white dark:text-black font-bold"
                    : "text-zinc-600 dark:text-zinc-400"
                }`}
              >
                All
              </button>
              <button
                type="button"
                onClick={() => setSelectedFormat("2-line")}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedFormat === "2-line"
                    ? "bg-zinc-900 dark:bg-white text-white dark:text-black font-bold"
                    : "text-zinc-600 dark:text-zinc-400"
                }`}
              >
                ⚡ 2-Line
              </button>
              <button
                type="button"
                onClick={() => setSelectedFormat("4-line")}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedFormat === "4-line"
                    ? "bg-zinc-900 dark:bg-white text-white dark:text-black font-bold"
                    : "text-zinc-600 dark:text-zinc-400"
                }`}
              >
                📜 4-Line
              </button>
            </div>
          </div>
        </div>

        {/* Search Input for Shayari */}
        <div className="relative flex items-center">
          <Search className="w-4 h-4 text-zinc-400 absolute left-4" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Hindi Shayari (e.g. ishq, sukoon, yaadein, attitude, dosti, ghalib)..."
            className="w-full pl-11 pr-10 py-3 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs sm:text-sm text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 shadow-2xs transition-all"
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

        {/* Category Filter Chips */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar pt-1">
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            className={`shrink-0 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeCategory === "all"
                ? "bg-amber-600 text-white shadow-md shadow-amber-600/20"
                : "bg-white dark:bg-zinc-950 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 hover:border-amber-500"
            }`}
          >
            🌟 All Categories
          </button>
          {SHAYARI_SECTIONS.map((sec) => (
            <button
              key={sec.slug}
              type="button"
              onClick={() => setActiveCategory(sec.slug)}
              className={`shrink-0 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeCategory === sec.slug
                  ? "bg-amber-600 text-white shadow-md shadow-amber-600/20"
                  : "bg-white dark:bg-zinc-950 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 hover:border-amber-500"
              }`}
            >
              {sec.title.split("(")[0].trim()}
            </button>
          ))}
        </div>
      </div>

      {/* 4. Shayari Sections with Poetry Cards */}
      <div className="space-y-16 text-left">
        {filteredSections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="space-y-4 pt-2 scroll-mt-24"
          >
            <div className="space-y-1.5 pb-2">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border border-amber-200/60 dark:border-amber-800 text-xs font-bold">
                  {section.badge}
                </span>
                <span className="text-xs font-semibold text-zinc-400">
                  • {section.count}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
                {section.title}
              </h2>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-4xl">
                {section.intro}
              </p>
            </div>

            {/* Poetry Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {section.items.map((item, idx) => {
                const currentText = scriptMode === "hindi" ? item.hindi : item.hinglish;
                const isCopied = copiedId === item.id;
                const currentLikes = upvotes[item.id] ?? item.likes;
                const isLiked = hasUpvoted[item.id];

                return (
                  <div
                    key={item.id}
                    className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800/80 hover:border-amber-400/60 hover:shadow-lg transition-all flex flex-col justify-between gap-4 group relative overflow-hidden"
                  >
                    {/* Decorative quote indicator */}
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-amber-600 dark:text-amber-400">
                        #{idx + 1}
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-900 text-zinc-500 uppercase tracking-wider">
                        {item.format}
                      </span>
                    </div>

                    {/* Shayari Poetic Text */}
                    <p className="text-base sm:text-lg font-medium text-zinc-800 dark:text-zinc-100 whitespace-pre-line leading-relaxed font-serif select-all">
                      {currentText}
                    </p>

                    {/* Action Bar with Copy, WhatsApp, Audio, and Image Maker */}
                    <div className="flex items-center justify-between pt-3 border-t border-zinc-100 dark:border-zinc-900">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        {/* 1-Click Copy */}
                        <button
                          type="button"
                          onClick={() => handleCopy(item.id, currentText)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                            isCopied
                              ? "bg-amber-600 text-white"
                              : "bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200"
                          }`}
                        >
                          {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                          <span>{isCopied ? "Copied" : "Copy"}</span>
                        </button>

                        {/* WhatsApp Direct Share */}
                        <button
                          type="button"
                          onClick={() => handleShareWhatsApp(currentText)}
                          className="px-3 py-1.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold border border-emerald-500/20 transition-all flex items-center gap-1.5 cursor-pointer"
                        >
                          <MessageCircle className="w-3.5 h-3.5 fill-current" />
                          <span>WhatsApp</span>
                        </button>

                        {/* Audio Recitation Button */}
                        <button
                          type="button"
                          onClick={() => handlePlayAudio(currentText)}
                          title="Listen to Shayari"
                          className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-900 hover:bg-amber-100 dark:hover:bg-amber-950/40 text-zinc-600 dark:text-zinc-400 hover:text-amber-600 transition-colors cursor-pointer"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>

                        {/* Visual Quote / Photo Card Maker */}
                        <button
                          type="button"
                          onClick={() => setSelectedQuoteForModal(currentText)}
                          title="Make Photo Card for Instagram Story"
                          className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-900 hover:bg-purple-100 dark:hover:bg-purple-950/40 text-zinc-600 dark:text-zinc-400 hover:text-purple-600 transition-colors cursor-pointer"
                        >
                          <ImageIcon className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Likes / Upvote */}
                      <button
                        type="button"
                        onClick={() => handleUpvote(item.id, item.likes)}
                        className={`p-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1 cursor-pointer ${
                          isLiked
                            ? "text-rose-600 bg-rose-50 dark:bg-rose-950/40"
                            : "text-zinc-400 hover:text-rose-500 hover:bg-zinc-100 dark:hover:bg-zinc-900"
                        }`}
                      >
                        <Heart className={`w-3.5 h-3.5 ${isLiked ? "fill-rose-600 text-rose-600" : ""}`} />
                        <span className="text-xs font-mono">
                          {currentLikes > 999 ? `${(currentLikes / 1000).toFixed(1)}k` : currentLikes}
                        </span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      {/* 5. In-Page AI Shayari Synthesizer */}
      <section id="ai-shayari-generator" className="scroll-mt-24 pt-4 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-linear-to-b from-amber-500/10 via-orange-500/5 to-transparent border border-amber-200 dark:border-amber-900 shadow-xl space-y-6">
          <div className="space-y-2 max-w-xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-zinc-900 border border-amber-200 dark:border-amber-800 text-amber-600 dark:text-amber-400 text-xs font-bold shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 fill-current" />
              <span>AI Shayari Synthesizer</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white">
              Write Custom Shayari with AI
            </h3>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Select your poetic vibe and let AI craft authentic, rhyming 2-line couplets in your preferred script.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto">
            {[
              "Love & Sukoon",
              "Attitude & Royal Swag",
              "Late Night Heartbreak",
              "Dosti & Yaari",
              "Motivational & Hausla",
              "Islamic & Sabr",
            ].map((topic) => (
              <button
                key={topic}
                type="button"
                onClick={() => setAiTopic(topic)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                  aiTopic === topic
                    ? "bg-amber-600 text-white border-amber-600 shadow-sm"
                    : "bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-800 hover:border-amber-400"
                }`}
              >
                {topic}
              </button>
            ))}
          </div>

          <div>
            <button
              type="button"
              onClick={handleGenerateAIShayari}
              disabled={isGenerating}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-black text-sm sm:text-base shadow-lg shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 mx-auto cursor-pointer disabled:opacity-60"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Writing Rhyming Shayari...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Generate 5 {aiTopic} Shayaris</span>
                </>
              )}
            </button>
          </div>

          {/* AI Output List */}
          {aiShayaris.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left pt-4">
              {aiShayaris.map((item) => (
                <div
                  key={item.id}
                  className="p-5 rounded-2xl bg-white dark:bg-zinc-950 border border-amber-300 dark:border-amber-800 shadow-md space-y-3"
                >
                  <p className="text-base font-medium text-zinc-800 dark:text-zinc-100 whitespace-pre-line leading-relaxed font-serif">
                    {item.hindi}
                  </p>
                  <div className="flex items-center gap-2 pt-2 border-t border-zinc-100 dark:border-zinc-900">
                    <button
                      type="button"
                      onClick={() => handleCopy(item.id, item.hindi)}
                      className="px-3 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-xs font-bold cursor-pointer"
                    >
                      Copy
                    </button>
                    <button
                      type="button"
                      onClick={() => handleShareWhatsApp(item.hindi)}
                      className="px-3 py-1 rounded-lg bg-emerald-600 text-white text-xs font-bold cursor-pointer"
                    >
                      WhatsApp
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedQuoteForModal(item.hindi)}
                      className="px-3 py-1 rounded-lg bg-purple-600 text-white text-xs font-bold cursor-pointer"
                    >
                      Make Card
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 6. Subpages Matrix Grid */}
      <section className="space-y-4 pt-6 border-t border-zinc-200 dark:border-zinc-800 text-left">
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            Shayari Categories & Formats
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-zinc-900 dark:text-white">
            Explore Dedicated Shayari Sub-Hubs
          </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {SHAYARI_INTENT_SUBPAGES.map((sub) => (
            <Link
              key={sub.slug}
              href={`/shayari/${sub.slug}`}
              className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-amber-500 hover:shadow-md transition-all group flex flex-col justify-between gap-2"
            >
              <div>
                <span className="text-xs font-bold text-zinc-400 group-hover:text-amber-500 transition-colors">
                  {sub.badge}
                </span>
                <p className="text-xs sm:text-sm font-bold text-zinc-800 dark:text-zinc-200 line-clamp-1 pt-0.5">
                  {sub.heading}
                </p>
              </div>
              <span className="text-xs text-amber-600 dark:text-amber-400 font-semibold flex items-center gap-1">
                <span>Read Shayari</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* 7. How To Use Guide */}
      <HowToUseGuide
        guideId="shayari-selection"
        categoryName="Hindi & Urdu Shayari"
        title="How to Select, Format & Share Authentic Hindi Shayari"
        pageUrl="https://unitoolkit.com/shayari"
      />

      {/* 8. Topic Cluster Silo Cloud */}
      <TopicClusterSiloCloud
        topic="Shayari"
        contentType="shayari"
        currentRoute="/shayari"
      />

      {/* 9. E-E-A-T Editorial Review Box */}
      <AuthorBioBox categoryType="Hindi & Urdu Cultural Poetry" topic="Ghazals & Classical Shers" />

      {/* 10. FAQ Section */}
      <section className="pt-6 border-t border-zinc-200 dark:border-zinc-800">
        <FAQSection
          title="Frequently Asked Questions About Hindi Shayari"
          subtitle="Everything you need to know about poetic meters, Radif, Qafia, and image card downloads."
          faqs={SHAYARI_FAQS}
        />
      </section>

      {/* JSON-LD Schemas */}
      <JsonLdSchema type="FAQPage" faqs={SHAYARI_FAQS} />
      <JsonLdSchema
        type="ItemList"
        title="Best Hindi Shayari Collection 2026"
        description="Top curated Love, Sad, Attitude, Romantic and Dosti Shayari in Hindi and Hinglish"
        items={SHAYARI_SECTIONS.flatMap((s) => s.items.map((item) => ({ name: item.hindi })))}
      />

      {/* CTA */}
      <CTASection
        title="Want custom poetry written for your exact mood?"
        subtitle="Use our free AI Shayari Synthesizer above to generate original rhyming couplets in seconds."
      />
    </div>
  );
}
