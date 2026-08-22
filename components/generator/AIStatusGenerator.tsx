"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import {
  Sparkles,
  Copy,
  Check,
  RefreshCw,
  Wand2,
  Zap,
} from "lucide-react";
import { copyToClipboard } from "@/lib/utils";
import { showToast } from "@/components/common/Toast";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { CTASection } from "@/components/common/CTASection";

export function AIStatusGenerator() {
  const [prompt, setPrompt] = useState("");
  const [language, setLanguage] = useState<"hi" | "hinglish" | "en">("hi");
  const [isGenerating, setIsGenerating] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [statuses, setStatuses] = useState<string[]>([]);
  const resultsRef = useRef<HTMLDivElement>(null);

  const PRESETS = [
    { label: "👑 Royal Attitude", text: "Khamoshi me mehnat aur results me shor — royal attitude status" },
    { label: "🤍 Late Night Sukoon", text: "Late night thoughts, peace of mind, chai and self-love" },
    { label: "💔 Sad & Heartbreak", text: "Emotional heartbreak, feeling alone in the crowd, memories" },
    { label: "☀️ Morning Motivation", text: "New day, fresh energy, relentless focus on goals" },
    { label: "🤝 Dosti Yaari", text: "True brotherhood, loyal friends standing through every storm" },
  ];

  const handleGenerate = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsGenerating(true);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          generatorType: "status",
          prompt: prompt.trim() || "viral whatsapp status quotes",
          language,
          count: 6,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        if (data.captions && Array.isArray(data.captions) && data.captions.length > 0) {
          setStatuses(data.captions);
          showToast("✨ AI generated 6 WhatsApp status quotes!", "sparkle");
          setTimeout(() => {
            resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 100);
        }
      }
    } catch (err) {
      console.error("Status generation error:", err);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopy = async (text: string, idx: number) => {
    const success = await copyToClipboard(text);
    if (success) {
      setCopiedId(`status-${idx}`);
      showToast("Status copied to clipboard! 📋", "success");
      setTimeout(() => setCopiedId(null), 2000);
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
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-8 sm:space-y-10 text-center">
      <div className="flex justify-center">
        <Breadcrumbs
          items={[
            { label: "AI Tools", href: "/ai-caption-generator" },
            { label: "AI Status Generator" },
          ]}
        />
      </div>

      {/* Hero Header: Big & Bold Centered */}
      <div className="space-y-3">
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-xs font-bold text-emerald-600 dark:text-emerald-400">
            <Sparkles className="w-3.5 h-3.5 fill-current" />
            <span>AI Status Studio • 1-Click WhatsApp Share</span>
          </div>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white leading-[1.15]">
          AI WhatsApp Status Generator
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto leading-relaxed">
          Create viral, attitude, love, and daily quotes for WhatsApp status with 1-click share.
        </p>
      </div>

      {/* Direct Generator Form: NO Card Box */}
      <form onSubmit={handleGenerate} className="space-y-4 max-w-xl mx-auto text-left">
        {/* Language Script Selector */}
        <div className="flex items-center justify-center gap-1.5 flex-wrap">
          {[
            { id: "hi", label: "हिंदी (Hindi)" },
            { id: "hinglish", label: "Hinglish" },
            { id: "en", label: "English" },
          ].map((lang) => (
            <button
              key={lang.id}
              type="button"
              onClick={() => setLanguage(lang.id as "en" | "hi" | "hinglish")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                language === lang.id
                  ? "bg-emerald-600 text-white shadow-xs"
                  : "bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300"
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>

        {/* Input Box with Paste Button */}
        <div className="relative">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter mood, vibe or topic (e.g. royal attitude, late night peace)..."
            className="w-full h-14 pl-4 pr-24 rounded-2xl bg-zinc-100/90 dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 text-sm sm:text-base text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-hidden focus:border-emerald-500 shadow-2xs"
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
          className="w-full h-14 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-base font-black shadow-md hover:shadow-lg hover:opacity-95 disabled:opacity-50 transition-all flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
        >
          {isGenerating ? (
            <>
              <RefreshCw className="w-5 h-5 animate-spin" />
              <span>Generating Status...</span>
            </>
          ) : (
            <>
              <Wand2 className="w-5 h-5" />
              <span>Generate Status</span>
            </>
          )}
        </button>

        {/* Trust Badges Row */}
        <div className="flex items-center justify-center gap-4 text-xs font-semibold text-zinc-500 dark:text-zinc-400 pt-1">
          <span className="flex items-center gap-1">
            <Zap className="w-3.5 h-3.5 text-emerald-500" />
            <span>Instant AI</span>
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>100% Free</span>
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Check className="w-3.5 h-3.5 text-emerald-500" />
            <span>No Sign-up</span>
          </span>
        </div>

        {/* Quick Presets */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 pt-2">
          {PRESETS.map((item, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                setPrompt(item.text);
                setIsGenerating(true);
                fetch("/api/generate", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ generatorType: "status", prompt: item.text, language, count: 6 }),
                })
                  .then((r) => r.json())
                  .then((d) => {
                    if (d.captions) {
                      setStatuses(d.captions);
                      showToast("✨ Generated status for: " + item.label, "sparkle");
                      setTimeout(() => {
                        resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
                      }, 100);
                    }
                  })
                  .finally(() => setIsGenerating(false));
              }}
              className="px-3 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-medium hover:border-emerald-400 hover:text-emerald-600 transition-colors cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </div>
      </form>

      {/* Generated Statuses Grid */}
      {statuses.length > 0 && (
        <div ref={resultsRef} className="space-y-4 pt-6 border-t border-zinc-200 dark:border-zinc-800 animate-fade-in text-left scroll-mt-6">
          <div className="flex items-center justify-between text-xs font-bold text-zinc-500">
            <span>{statuses.length} Generated AI Status Lines</span>
            <span className="text-[11px] text-zinc-400">1-Click WhatsApp Share</span>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {statuses.map((statusText, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/70 border border-zinc-200/90 dark:border-zinc-800/90 hover:border-emerald-300 dark:hover:border-emerald-700 shadow-2xs transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
              >
                <p className="text-xs sm:text-sm font-semibold text-zinc-800 dark:text-zinc-200 leading-relaxed">
                  {statusText}
                </p>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => handleShareWhatsApp(statusText)}
                    className="px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 text-xs font-bold hover:bg-emerald-100 transition-colors flex items-center gap-1 cursor-pointer"
                    title="Share directly to WhatsApp status"
                  >
                    <span>🟢 Share</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleCopy(statusText, idx)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center gap-1.5 ${
                      copiedId === `status-${idx}`
                        ? "bg-emerald-500 border-emerald-500 text-white shadow-xs"
                        : "bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100"
                    }`}
                  >
                    {copiedId === `status-${idx}` ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Copied!</span>
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

      <CTASection />
    </div>
  );
}
