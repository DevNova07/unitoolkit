"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Copy,
  Check,
  RefreshCw,
  Zap,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { generateCaptions } from "@/lib/aiEngine";
import { GeneratorOptions } from "@/lib/types";
import { copyToClipboard } from "@/lib/utils";
import { showToast } from "@/components/common/Toast";

interface AIGeneratorStudioProps {
  initialTopic?: string;
  className?: string;
}

const PLATFORM_PRESETS: Record<string, {
  name: string;
  badge: string;
  tone: string;
  placeholder: string;
  suggestions: { label: string; prompt: string }[];
  starters: string[];
}> = {
  instagram: {
    name: "Instagram",
    badge: "Reels & Post Hooks",
    tone: "aesthetic",
    placeholder: "e.g. Golden hour sunset reel, attitude fit check, travel dump...",
    suggestions: [
      { label: "🌅 Golden hour sunset", prompt: "Golden hour aesthetic sunset by the beach, warm pastel skies and soft glow" },
      { label: "👑 Silent moves attitude", prompt: "Unapologetic boss moves, silent execution, dressed for success, playing in my own league" },
      { label: "🎂 Birthday photo dump", prompt: "Stepping into my new chapter, golden balloons, celebration with best friends" },
      { label: "🪞 Mirror selfie check", prompt: "Mirror selfie fit check, flash on, elevator lighting doing all the heavy lifting" },
    ],
    starters: [
      "Living for the moments that feel like a movie ✨",
      "Collecting memories, not things 🎞️",
      "Main character energy, no understudy needed 👑",
    ],
  },
  linkedin: {
    name: "LinkedIn",
    badge: "Thought Leadership",
    tone: "professional",
    placeholder: "e.g. Scaling a startup, career lesson, leadership mistake, hiring insights...",
    suggestions: [
      { label: "🚀 Startup growth lesson", prompt: "What building a startup taught me about consistency and resilience over talent" },
      { label: "💼 Career milestone", prompt: "Stepping into a new leadership role and the 3 principles I will follow" },
    ],
    starters: [
      "Most people overestimate what they can do in a day and underestimate what they can achieve in 5 years 🚀",
      "The best career move I ever made wasn't a promotion—it was learning to say no 💼",
    ],
  },
  whatsapp: {
    name: "WhatsApp",
    badge: "Status & Hinglish",
    tone: "relatable",
    placeholder: "e.g. Late night thoughts, sukoon, dosti yaari, royal attitude status...",
    suggestions: [
      { label: "👑 Royal Attitude", prompt: "Khamoshi me mehnat aur results me shor royal attitude status" },
      { label: "🤍 Late Night Sukoon", prompt: "Late night thoughts and chai sukoon status" },
      { label: "☀️ Morning Motivation", prompt: "Nayi subah, naye khwab aur nayi umeed morning status" },
      { label: "🤝 Dosti Yaari", prompt: "Bhai jaisi dosti aur har musibat me saath khade rehne wale dost" },
    ],
    starters: [
      "खामोशी से अपनी पहचान बनाओ, वक्त खुद तुम्हारा नाम बताएगा 👑",
      "Pahadon me subah ki pehli chai aur sukoon. Bas yahi hai zindagi 🏔️☕",
    ],
  },
  tiktok: {
    name: "TikTok",
    badge: "Viral FYP Hooks",
    tone: "viral",
    placeholder: "e.g. POV relatable moment, workout transformation, travel hack...",
    suggestions: [
      { label: "👀 POV Relatable", prompt: "POV: You finally stopped caring what people think and life got 10x better" },
      { label: "🔥 Glow up journey", prompt: "The 6-month glow up transformation that changed everything" },
    ],
    starters: [
      "POV: You realized peace of mind is the only flex that matters 🌸",
      "3 seconds to rate this view (Wrong answers only) 🌊",
    ],
  },
  youtube: {
    name: "YouTube",
    badge: "Shorts & Video Hooks",
    tone: "high-ctr",
    placeholder: "e.g. Coding tutorial hook, tech unboxing, fitness challenge...",
    suggestions: [
      { label: "⚡ Curiosity Hook", prompt: "The 1 secret top 1% creators use to 10x their reach" },
    ],
    starters: [
      "Don't make this mistake before starting in 2026 🚨",
      "How I built this in under 24 hours without coding 🤯",
    ],
  },
};

export function AIGeneratorStudio({
  initialTopic = "",
  className = "",
}: AIGeneratorStudioProps) {
  const searchParams = useSearchParams();
  const rawPlatform = (searchParams?.get("platform") || "instagram").toLowerCase();
  const queryTopic = searchParams?.get("topic") || initialTopic;
  
  const currentPlatformKey = PLATFORM_PRESETS[rawPlatform] ? rawPlatform : "instagram";
  const [selectedPlatform, setSelectedPlatform] = useState<string>(currentPlatformKey);
  const [contentType, setContentType] = useState<"captions" | "bio" | "status" | "shayari" | "quotes">("captions");
  const platformPreset = PLATFORM_PRESETS[selectedPlatform] || PLATFORM_PRESETS.instagram;

  const [prompt, setPrompt] = useState(queryTopic || "");
  const [isGenerating, setIsGenerating] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const [results, setResults] = useState<string[]>([]);

  const handleGenerateWithPrompt = useCallback(async (
    userPrompt: string,
    plat: string,
    type: string
  ) => {
    setIsGenerating(true);

    try {
      const preset = PLATFORM_PRESETS[plat] || PLATFORM_PRESETS.instagram;
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          generatorType: type,
          prompt: userPrompt.trim() || `${plat} viral content`,
          platform: plat,
          style: preset.tone,
          tone: plat === "linkedin" ? "authoritative" : plat === "whatsapp" ? "relatable" : "confident",
          length: plat === "instagram" ? "short" : "medium",
          count: 8,
          includeHashtags: plat === "instagram" || plat === "tiktok",
          includeEmojis: true,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        if (data.captions && Array.isArray(data.captions) && data.captions.length > 0) {
          setResults(data.captions);
          setIsGenerating(false);
          showToast(`✨ Generated 8 lines for ${preset.name}!`, "sparkle");
          setTimeout(() => {
            resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 100);
          return;
        }
      }
    } catch (err) {
      console.error("AI Generation error:", err);
    }

    // Fallback generator
    const fallback = generateCaptions({
      prompt: userPrompt || "viral memories",
      platform: (plat as GeneratorOptions["platform"]) || "instagram",
      style: "aesthetic",
      tone: "confident",
      length: "medium",
      language: "en",
      count: 8,
    });
    setResults(fallback);
    setIsGenerating(false);
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }, []);

  const prevPlatformRef = useRef(rawPlatform);
  useEffect(() => {
    if (rawPlatform && PLATFORM_PRESETS[rawPlatform] && prevPlatformRef.current !== rawPlatform) {
      prevPlatformRef.current = rawPlatform;
      const timer = setTimeout(() => setSelectedPlatform(rawPlatform), 0);
      return () => clearTimeout(timer);
    }
  }, [rawPlatform]);

  const prevTopicRef = useRef(queryTopic);
  useEffect(() => {
    if (queryTopic && queryTopic !== prevTopicRef.current) {
      prevTopicRef.current = queryTopic;
      const timer = setTimeout(() => {
        setPrompt(queryTopic);
        handleGenerateWithPrompt(queryTopic, selectedPlatform, contentType);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [queryTopic, selectedPlatform, contentType, handleGenerateWithPrompt]);

  const handlePlatformChange = (plat: string) => {
    setSelectedPlatform(plat);
  };

  const handlePresetClick = (presetPrompt: string) => {
    setPrompt(presetPrompt);
    handleGenerateWithPrompt(presetPrompt, selectedPlatform, contentType);
  };

  const handleGenerate = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    handleGenerateWithPrompt(prompt, selectedPlatform, contentType);
  };

  const handleCopySingle = async (text: string, index: number) => {
    const success = await copyToClipboard(text);
    if (success) {
      setCopiedId(`cap-${index}`);
      showToast("Line copied to clipboard!", "success");
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const handleCopyAll = async () => {
    if (results.length === 0) return;
    const allText = results.join("\n\n");
    const success = await copyToClipboard(allText);
    if (success) {
      showToast("All lines copied to clipboard! ✨", "success");
    }
  };

  const handleShareWhatsApp = (text: string) => {
    const encoded = encodeURIComponent(text);
    window.open(`https://api.whatsapp.com/send?text=${encoded}`, "_blank", "noopener,noreferrer");
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (text) {
        setPrompt(text);
        showToast("Pasted from clipboard! 📋", "success");
      }
    } catch {}
  };

  return (
    <div className={`w-full max-w-4xl mx-auto space-y-8 sm:space-y-10 text-center ${className}`}>
      {/* Hero Header: Big & Bold Centered */}
      <div className="space-y-3">
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-xs font-bold text-indigo-600 dark:text-indigo-400">
            <Zap className="w-3.5 h-3.5 fill-current" />
            <span>Caption Studio • AI Powered</span>
          </div>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white leading-[1.15]">
          AI Caption Generator
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto leading-relaxed">
          Generate viral reels, post hooks, and aesthetic captions tailored for your audience with AI.
        </p>
      </div>

      {/* Direct Generator Form: NO Card Box */}
      <form onSubmit={handleGenerate} className="space-y-4 max-w-xl mx-auto text-left">
        {/* Content Type Selector */}
        <div className="flex items-center justify-center gap-1.5 flex-wrap">
          {[
            { id: "captions", label: "📝 Captions" },
            { id: "bio", label: "👤 Bio" },
            { id: "status", label: "💬 Status" },
            { id: "quotes", label: "💡 Quotes" },
            { id: "shayari", label: "📜 Shayari" },
          ].map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setContentType(t.id as "captions" | "bio" | "status" | "quotes" | "shayari")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                contentType === t.id
                  ? "bg-indigo-600 text-white shadow-xs"
                  : "bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300"
              }`}
            >
              {t.label}
            </button>
          ))}
          <Link
            href="/ai-baby-name-generator"
            className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 transition-all cursor-pointer"
          >
            👶 Names
          </Link>
        </div>

        {/* Platform Selector */}
        <div className="flex items-center justify-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {["instagram", "whatsapp", "tiktok", "youtube", "linkedin", "x"].map((pKey) => (
            <button
              key={pKey}
              type="button"
              onClick={() => handlePlatformChange(pKey)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold capitalize transition-all cursor-pointer shrink-0 ${
                selectedPlatform === pKey
                  ? "bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 shadow-xs"
                  : "bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300"
              }`}
            >
              {pKey === "whatsapp" ? "WhatsApp" : pKey === "youtube" ? "YouTube" : pKey === "x" ? "X (Twitter)" : pKey}
            </button>
          ))}
        </div>

        {/* Input Box with Paste Button */}
        <div className="relative">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder={platformPreset.placeholder}
            className="w-full h-14 pl-4 pr-24 rounded-2xl bg-zinc-100/90 dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 text-sm sm:text-base text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-hidden focus:border-indigo-500 shadow-2xs"
          />

          {prompt ? (
            <button
              type="button"
              onClick={() => setPrompt("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-lg bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 text-xs font-semibold hover:bg-zinc-300 transition-colors"
            >
              Clear
            </button>
          ) : (
            <button
              type="button"
              onClick={handlePaste}
              className="absolute right-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-zinc-200/80 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-bold hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>Paste</span>
            </button>
          )}
        </div>

        {/* Big Hero Generate Button */}
        <button
          type="submit"
          disabled={isGenerating}
          className="w-full h-14 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white text-base font-black shadow-md hover:shadow-lg hover:opacity-95 disabled:opacity-50 transition-all flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
        >
          {isGenerating ? (
            <>
              <RefreshCw className="w-5 h-5 animate-spin" />
              <span>Creating Captions...</span>
            </>
          ) : (
            <>
              <span>Generate Captions</span>
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>

        {/* Trust Badges Row */}
        <div className="flex items-center justify-center gap-4 text-xs font-semibold text-zinc-500 dark:text-zinc-400 pt-1">
          <span className="flex items-center gap-1">
            <Zap className="w-3.5 h-3.5 text-indigo-500" />
            <span>Instant</span>
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>100% Free</span>
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Check className="w-3.5 h-3.5 text-emerald-500" />
            <span>No Sign-up</span>
          </span>
        </div>

        {/* Quick Suggestion Pills */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 pt-2">
          {platformPreset.suggestions.map((item, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handlePresetClick(item.prompt)}
              className="px-3 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-medium hover:border-indigo-400 hover:text-indigo-600 transition-colors cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </div>
      </form>

      {/* Generated Results List */}
      {results.length > 0 && (
        <div ref={resultsRef} className="space-y-4 pt-6 border-t border-zinc-200 dark:border-zinc-800 animate-fade-in text-left scroll-mt-6">
          <div className="flex items-center justify-between text-xs font-bold text-zinc-500 dark:text-zinc-400 px-1">
            <span>{results.length} Generated AI Lines</span>
            <button
              type="button"
              onClick={handleCopyAll}
              className="text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 cursor-pointer"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>Copy All</span>
            </button>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {results.map((line, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-200/90 dark:border-zinc-800/90 hover:border-indigo-300 dark:hover:border-indigo-700 shadow-2xs transition-all flex items-start justify-between gap-3 group"
              >
                <pre className="font-sans text-xs sm:text-sm font-medium text-zinc-800 dark:text-zinc-200 whitespace-pre-line leading-relaxed">
                  {line}
                </pre>

                <div className="flex items-center gap-1.5 shrink-0 pt-0.5">
                  <button
                    type="button"
                    onClick={() => handleShareWhatsApp(line)}
                    className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-100 transition-colors cursor-pointer"
                    title="Share to WhatsApp"
                  >
                    <span className="text-xs">🟢</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleCopySingle(line, idx)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center gap-1 ${
                      copiedId === `cap-${idx}`
                        ? "bg-emerald-500 border-emerald-500 text-white shadow-xs"
                        : "bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100"
                    }`}
                  >
                    {copiedId === `cap-${idx}` ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-zinc-400" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
