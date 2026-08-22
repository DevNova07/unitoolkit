"use client";

import { useState } from "react";
import { Sparkles, Wand2, RefreshCw, Copy, Heart, Check, BookOpen, Globe2 } from "lucide-react";
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
}

export function AINameStudio({
  title = "AI Name Generator Studio",
  description = "Describe your ideal baby or character name in plain words. Our AI analyzes global linguistic roots, phonetic rhythms, and cultural meanings.",
  defaultPrompt = "",
  defaultGender = "any",
  defaultOrigin = "any",
}: AINameStudioProps) {
  const [prompt, setPrompt] = useState(defaultPrompt);
  const [gender, setGender] = useState(defaultGender);
  const [origin, setOrigin] = useState(defaultOrigin);
  const [style, setStyle] = useState("modern");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<GeneratedNameResult[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleGenerate = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setLoading(true);

    try {
      const fullQuery = `Generate 6 beautiful, meaningful baby/personal names based on this criteria:
Prompt: ${prompt.trim() || "Modern meaningful names"}
Gender Preference: ${gender}
Origin/Culture Preference: ${origin}
Style/Tone: ${style}

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
        // Try parsing json from first caption if returned as block
        let parsed: GeneratedNameResult[] = [];
        try {
          const rawText = data.captions.join("\n");
          const jsonMatch = rawText.match(/\[[\s\S]*\]/);
          if (jsonMatch) {
            parsed = JSON.parse(jsonMatch[0]);
          }
        } catch {
          // Fallback parsing lines
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
          showToast(`Generated ${parsed.length} tailored names!`, "sparkle");
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
    const text = `${item.name} (${item.gender}) — Meaning: ${item.meaning} [Origin: ${item.origin}]`;
    const ok = await copyToClipboard(text);
    if (ok) {
      setCopiedIndex(idx);
      showToast(`Copied ${item.name}!`);
      setTimeout(() => setCopiedIndex(null), 2000);
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
      style: [style],
      themes: ["custom"],
      startingLetter: item.name.charAt(0).toUpperCase(),
      detailedMeaning: item.whyItMatches,
      pronunciation: item.pronunciation,
    });
    showToast(`Saved ${item.name} to your private favorites! ❤️`);
  };

  return (
    <div className="w-full rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 space-y-8 text-left shadow-sm">
      {/* Studio Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-xs font-bold text-indigo-600 dark:text-indigo-400">
          <Wand2 className="w-3.5 h-3.5" />
          <span>Intelligent Linguistic Name Generator</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white tracking-tight">
          {title}
        </h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
          {description}
        </p>
      </div>

      {/* Generator Control Form */}
      <form onSubmit={handleGenerate} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* Gender Selector */}
          <div className="space-y-1">
            <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">Gender</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full px-3 py-2.5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm font-semibold text-zinc-800 dark:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="any">✨ Any Gender / Unisex</option>
              <option value="boy">👦 Baby Boy</option>
              <option value="girl">👧 Baby Girl</option>
            </select>
          </div>

          {/* Origin / Culture Selector */}
          <div className="space-y-1">
            <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">Origin / Culture</label>
            <select
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              className="w-full px-3 py-2.5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm font-semibold text-zinc-800 dark:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="any">🌍 Any Culture / Multicultural</option>
              <option value="Indian">🇮🇳 Indian / Sanskrit</option>
              <option value="Arabic">🌙 Arabic / Islamic</option>
              <option value="Persian">👑 Persian</option>
              <option value="English">🇬🇧 English / British</option>
              <option value="French">🇫🇷 French</option>
              <option value="Japanese">🇯🇵 Japanese</option>
              <option value="Spanish">🇪🇸 Spanish / Latin</option>
              <option value="Italian">🇮🇹 Italian</option>
              <option value="African">🌍 African</option>
              <option value="Hebrew">🕊️ Hebrew / Biblical</option>
            </select>
          </div>

          {/* Style Selector */}
          <div className="space-y-1">
            <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">Style & Vibe</label>
            <select
              value={style}
              onChange={(e) => setStyle(e.target.value)}
              className="w-full px-3 py-2.5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm font-semibold text-zinc-800 dark:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="modern">Modern & Chic</option>
              <option value="royal">Royal & Aristocratic</option>
              <option value="unique">Rare & Unique</option>
              <option value="short">Short & Punchy (1-2 Syllables)</option>
              <option value="nature">Nature & Celestial</option>
              <option value="cute">Cute & Melodious</option>
            </select>
          </div>
        </div>

        {/* Prompt Input */}
        <div className="relative">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe preferences (e.g. 'Starts with S, means peaceful morning light, easy to pronounce in USA & India')..."
            className="w-full px-4 py-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm sm:text-base text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-bold text-sm shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          {loading ? (
            <>
              <RefreshCw className="w-4 h-4 animate-spin" />
              <span>Analyzing Linguistic Roots & Generating...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4" />
              <span>Generate 6 Custom Names</span>
            </>
          )}
        </button>
      </form>

      {/* Generated Results Grid */}
      {results.length > 0 && (
        <div className="space-y-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
              AI Tailored Suggestions
            </h3>
            <span className="text-xs text-zinc-500">{results.length} results</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {results.map((res, idx) => (
              <div
                key={idx}
                className="p-5 rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                      {res.origin}
                    </span>
                    <span className="text-xs text-zinc-400 capitalize">
                      {res.gender === "boy" ? "👦 Boy" : res.gender === "girl" ? "👧 Girl" : "⚡ Unisex"}
                    </span>
                  </div>

                  <h4 className="text-xl font-black text-zinc-900 dark:text-white">
                    {res.name}
                  </h4>
                  {res.pronunciation && (
                    <span className="text-[11px] text-zinc-400 font-mono">/{res.pronunciation}/</span>
                  )}
                  <p className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                    {res.meaning}
                  </p>
                  <p className="text-[11px] text-zinc-500 leading-relaxed pt-1">
                    {res.whyItMatches}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-zinc-200/60 dark:border-zinc-800 text-xs">
                  <button
                    type="button"
                    onClick={() => handleSaveName(res)}
                    className="flex items-center gap-1 text-zinc-500 hover:text-rose-500 font-medium"
                  >
                    <Heart className="w-3.5 h-3.5" />
                    <span>Save</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleCopyName(res, idx)}
                    className="flex items-center gap-1 font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    {copiedIndex === idx ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedIndex === idx ? "Copied" : "Copy"}</span>
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
