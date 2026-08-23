"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import {
  Sparkles,
  RefreshCw,
  Copy,
  Heart,
  Check,
  Volume2,
  Zap,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { showToast } from "@/components/common/Toast";
import { copyToClipboard } from "@/lib/utils";
import { toggleFavoriteName } from "@/lib/namesFavoritesStore";

interface GeneratedNameResult {
  name: string;
  gender: "boy" | "girl" | "unisex";
  meaning: string;
  origin: string;
  whyItMatches: string;
  pronunciation?: string;
}

interface AINameStudioProps {
  title?: string;
  description?: string;
  defaultPrompt?: string;
  defaultGender?: string;
  defaultOrigin?: string;
  className?: string;
}

const NAME_PROMPT_SUGGESTIONS = [
  { label: "👑 Royal Hindu Boy", prompt: "Royal auspicious Hindu baby boy name with Vedic strength and sun meaning" },
  { label: "🌸 Sweet Arabic Girl", prompt: "Sweet, melodious Arabic baby girl name meaning flower of paradise or light" },
  { label: "✨ Modern 2-Syllable", prompt: "Short modern 2-syllable international baby name easy to pronounce in USA & India" },
  { label: "🌿 English Aesthetic", prompt: "Aesthetic vintage nature-inspired English baby name meaning meadow or river" },
  { label: "🕊️ Sukoon & Peace", prompt: "Meaningful peaceful baby name representing tranquility, wisdom and hope" },
];

export function AINameStudio({
  title = "AI Baby Name Generator",
  description = "Craft personalized, meaningful, and auspicious baby names for your newborn based on parental cultural heritage, sound rhythm with your surname, and positive virtues.",
  defaultPrompt = "",
  defaultGender = "any",
  defaultOrigin = "any",
  className = "",
}: AINameStudioProps) {
  const [prompt, setPrompt] = useState(defaultPrompt);
  const [gender, setGender] = useState(defaultGender);
  const [origin, setOrigin] = useState(defaultOrigin);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<GeneratedNameResult[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const handleGenerate = async (e?: React.FormEvent, customPrompt?: string) => {
    if (e) e.preventDefault();
    const activePrompt = customPrompt || prompt;
    setLoading(true);

    try {
      const fullQuery = `Generate 8 beautiful, meaningful baby/personal names based on this criteria:
Prompt: ${activePrompt.trim() || "Modern meaningful baby names"}
Gender Preference: ${gender}
Origin/Culture Preference: ${origin}

Please respond strictly in JSON array format with these exact keys:
[
  {
    "name": "Name",
    "gender": "boy" | "girl" | "unisex",
    "meaning": "Clear concise meaning",
    "origin": "Cultural or linguistic origin",
    "whyItMatches": "1 sentence why this fits the user's vision",
    "pronunciation": "Phonetic breakdown"
  }
]`;

      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: fullQuery,
          type: "name",
        }),
      });

      const data = await res.json();
      if (data.captions && Array.isArray(data.captions)) {
        let parsed: GeneratedNameResult[] = [];
        try {
          const rawText = data.captions.join("\n");
          const jsonMatch = rawText.match(/\[[\s\S]*\]/);
          if (jsonMatch) {
            parsed = JSON.parse(jsonMatch[0]);
          }
        } catch {
          parsed = data.captions.map((cap: string, idx: number) => ({
            name: cap.split("—")[0]?.trim() || `Name ${idx + 1}`,
            gender: (gender === "boy" || gender === "girl" ? gender : "unisex") as "boy" | "girl" | "unisex",
            meaning: cap.split("—")[1]?.trim() || "Auspicious, blessed and bright",
            origin: origin !== "any" ? origin : "Global Heritage",
            whyItMatches: "Crafted specifically to match your requested aesthetic and rhythm.",
          }));
        }

        if (parsed.length > 0) {
          setResults(parsed);
          showToast(`Generated ${parsed.length} tailored names! ✨`, "sparkle");
          setTimeout(() => {
            resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 100);
        }
      }
    } catch (err) {
      console.error("AI Name generation error:", err);
      showToast("Unable to generate at the moment. Please try again.", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleCopyName = async (item: GeneratedNameResult, idx: number) => {
    const text = `${item.name} — ${item.meaning}`;
    const ok = await copyToClipboard(text);
    if (ok) {
      setCopiedIndex(idx);
      showToast(`Copied ${item.name}! 📋`, "success");
      setTimeout(() => setCopiedIndex(null), 1800);
    }
  };

  const handlePlayAudio = (name: string) => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(name);
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleSaveName = (item: GeneratedNameResult) => {
    toggleFavoriteName({
      id: `ai-${Date.now()}-${item.name.toLowerCase()}`,
      name: item.name,
      gender: item.gender,
      meaning: item.meaning,
      origin: item.origin,
      culture: "AI Curated",
      language: "Universal",
      style: ["modern"],
      themes: ["custom"],
      startingLetter: item.name.charAt(0).toUpperCase(),
      detailedMeaning: item.whyItMatches,
      pronunciation: item.pronunciation,
    });
    showToast(`Saved ${item.name} to your private favorites! ❤️`);
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

  const handleSuggestionClick = (sugPrompt: string) => {
    setPrompt(sugPrompt);
    handleGenerate(undefined, sugPrompt);
  };

  return (
    <div className={`w-full max-w-4xl mx-auto space-y-8 sm:space-y-10 text-center ${className}`}>
      {/* 1. Centered Hero Header */}
      <div className="space-y-3">
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-xs font-bold text-indigo-600 dark:text-indigo-400">
            <Zap className="w-3.5 h-3.5 fill-current" />
            <span>Name Studio • AI Powered</span>
          </div>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white leading-[1.15]">
          {title}
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto leading-relaxed">
          {description}
        </p>
      </div>

      {/* 2. Direct Generator Form */}
      <form onSubmit={handleGenerate} className="space-y-4 max-w-xl mx-auto text-left">
        {/* Studio Switcher Tabs */}
        <div className="flex items-center justify-center gap-1.5 flex-wrap">
          {[
            { label: "📝 Captions", href: "/ai-caption-generator" },
            { label: "👤 Bio", href: "/ai-bio-generator" },
            { label: "💬 Status", href: "/ai-status-generator" },
            { label: "💡 Quotes", href: "/ai-caption-generator?type=quotes" },
            { label: "📜 Shayari", href: "/ai-shayari-generator" },
            { label: "👶 Names", href: "/ai-baby-name-generator", active: true },
          ].map((t) => (
            <Link
              key={t.label}
              href={t.href}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                t.active
                  ? "bg-indigo-600 text-white shadow-xs"
                  : "bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700"
              }`}
            >
              {t.label}
            </Link>
          ))}
        </div>

        {/* Gender & Culture Pills */}
        <div className="flex items-center justify-center gap-1.5 flex-wrap">
          {[
            { id: "any", label: "✨ Any Gender", type: "gender" },
            { id: "boy", label: "👦 Baby Boy", type: "gender" },
            { id: "girl", label: "👧 Baby Girl", type: "gender" },
            { id: "Indian", label: "🇮🇳 Indian", type: "origin" },
            { id: "Arabic", label: "🌙 Arabic", type: "origin" },
            { id: "English", label: "🇺🇸 American", type: "origin" },
          ].map((p) => {
            const isSelected = p.type === "gender" ? gender === p.id : origin === p.id;
            return (
              <button
                key={p.id + p.type}
                type="button"
                onClick={() => {
                  if (p.type === "gender") {
                    setGender(gender === p.id ? "any" : p.id);
                  } else {
                    setOrigin(origin === p.id ? "any" : p.id);
                  }
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  isSelected
                    ? "bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 shadow-xs"
                    : "bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700"
                }`}
              >
                {p.label}
              </button>
            );
          })}
        </div>

        {/* Input Box with Paste Button */}
        <div className="relative">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g. Modern auspicious baby name, easy to pronounce in USA & India..."
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

        {/* Big Gradient Generate Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full h-13 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:opacity-95 text-white font-extrabold text-sm uppercase tracking-wider shadow-md hover:shadow-indigo-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
        >
          {loading ? (
            <>
              <RefreshCw className="w-4 h-4 animate-spin" />
              <span>Generating AI Names...</span>
            </>
          ) : (
            <>
              <span>GENERATE AI NAMES</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>

        {/* Feature Badges */}
        <div className="flex items-center justify-center gap-4 text-[11px] font-semibold text-zinc-500 pt-1">
          <span className="flex items-center gap-1">
            <Zap className="w-3 h-3 text-indigo-500" /> Instant
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-emerald-500" /> 100% Free
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-pink-500" /> No Sign-up
          </span>
        </div>

        {/* Quick Suggestion Pills */}
        <div className="flex items-center justify-center gap-1.5 flex-wrap pt-2">
          {NAME_PROMPT_SUGGESTIONS.map((sug) => (
            <button
              key={sug.label}
              type="button"
              onClick={() => handleSuggestionClick(sug.prompt)}
              className="px-3 py-1 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[11px] font-semibold text-zinc-700 dark:text-zinc-300 hover:border-indigo-500/50 hover:text-indigo-600 transition-all cursor-pointer"
            >
              {sug.label}
            </button>
          ))}
        </div>
      </form>

      {/* 3. Generated Results */}
      {results.length > 0 && (
        <div ref={resultsRef} className="space-y-4 pt-6 border-t border-zinc-200 dark:border-zinc-800 max-w-2xl mx-auto text-left">
          <div className="pb-1 border-b border-zinc-200 dark:border-zinc-800">
            <h3 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white">
              AI Tailored Baby Names
            </h3>
            <p className="text-xs sm:text-sm text-zinc-500">
              Personalized matches crafted for your requested style and meaning.
            </p>
          </div>

          <ol className="space-y-2 text-base sm:text-lg text-zinc-900 dark:text-zinc-100 font-medium list-none">
            {results.map((res, idx) => (
              <li
                key={idx}
                className="flex items-baseline justify-between gap-3 py-2 group border-b border-zinc-100 dark:border-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 px-2 rounded-lg transition-colors"
              >
                <div className="space-y-0.5 min-w-0">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="font-bold text-zinc-900 dark:text-white">
                      {idx + 1}. {res.name}
                    </span>
                    <span className="text-zinc-400 dark:text-zinc-500">—</span>
                    <span className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 font-normal">
                      {res.meaning}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-zinc-400">
                    <span className="capitalize">{res.gender}</span>
                    <span>•</span>
                    <span>{res.origin}</span>
                    {res.pronunciation && (
                      <>
                        <span>•</span>
                        <span className="italic">/{res.pronunciation}/</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Action buttons (Audio, Save, Copy) */}
                <div className="flex items-center gap-1.5 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity">
                  <button
                    type="button"
                    onClick={() => handlePlayAudio(res.name)}
                    title="Hear Pronunciation"
                    className="p-1.5 text-zinc-400 hover:text-indigo-600 transition-colors cursor-pointer"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSaveName(res)}
                    title="Save to Favorites"
                    className="p-1.5 text-zinc-400 hover:text-rose-500 transition-colors cursor-pointer"
                  >
                    <Heart className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleCopyName(res, idx)}
                    title="Copy"
                    className="p-1.5 text-zinc-400 hover:text-indigo-600 transition-colors cursor-pointer"
                  >
                    {copiedIndex === idx ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
