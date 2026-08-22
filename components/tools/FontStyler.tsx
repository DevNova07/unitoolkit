"use client";

import { useState } from "react";
import { Copy, Check, Sparkles, RotateCcw } from "lucide-react";
import { FONT_STYLES, transformText } from "@/lib/fontUtils";
import { copyToClipboard } from "@/lib/utils";
import { showToast } from "@/components/common/Toast";

type TabCategory = "all" | "aesthetic" | "popular" | "fancy" | "decorative";

export function FontStyler() {
  const [inputText, setInputText] = useState("Aesthetic Bio & Captions");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<TabCategory>("all");

  const filteredStyles =
    activeTab === "all"
      ? FONT_STYLES
      : FONT_STYLES.filter((s) => s.category === activeTab);

  const handleCopy = async (styleId: string) => {
    const formatted = transformText(inputText || "Sample Text", styleId);
    const ok = await copyToClipboard(formatted);
    if (ok) {
      setCopiedId(styleId);
      showToast("Aesthetic font copied!");
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const TABS: { id: TabCategory; label: string }[] = [
    { id: "all", label: "All Styles (14)" },
    { id: "popular", label: "🔥 Popular" },
    { id: "aesthetic", label: "✨ Aesthetic" },
    { id: "fancy", label: "👑 Fancy" },
    { id: "decorative", label: "🎨 Decorative" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 text-left">
      {/* Input Box */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200/90 dark:border-zinc-800/90 shadow-2xs space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-500" />
              <span>Fancy Unicode Font Generator</span>
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
              Type your name, bio, or caption below to generate aesthetic cursive, bold, gothic, and calligraphy styles.
            </p>
          </div>
          {inputText && (
            <button
              type="button"
              onClick={() => setInputText("")}
              className="p-2 rounded-xl text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Clear</span>
            </button>
          )}
        </div>

        <div className="relative">
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type your bio, caption or text here..."
            rows={3}
            className="w-full p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-base sm:text-lg text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 resize-none font-medium transition-all"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-zinc-100 dark:border-zinc-900">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                activeTab === tab.id
                  ? "bg-zinc-900 dark:bg-white text-white dark:text-black border-transparent shadow-xs"
                  : "bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Font Output Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {filteredStyles.map((style) => {
          const transformed = transformText(inputText || "Sample Text", style.id);
          const isCopied = copiedId === style.id;

          return (
            <div
              key={style.id}
              className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 shadow-2xs transition-all flex items-center justify-between gap-3 group"
            >
              <div className="space-y-1 flex-1 min-w-0">
                <div className="text-[11px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                  {style.name}
                </div>
                <p className="text-base sm:text-lg text-zinc-900 dark:text-zinc-100 font-normal truncate select-text">
                  {transformed}
                </p>
              </div>

              <button
                type="button"
                onClick={() => handleCopy(style.id)}
                className={`shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                  isCopied
                    ? "bg-emerald-500 border-emerald-500 text-white shadow-xs"
                    : "bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                }`}
                aria-label="Copy font"
              >
                {isCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-200" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
