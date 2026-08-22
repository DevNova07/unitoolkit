"use client";

import { useState } from "react";
import { Sparkles, Wand2, RefreshCw, Copy, Heart, Check, Volume2 } from "lucide-react";
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
      const fullQuery = `Generate 8 beautiful, meaningful baby/personal names based on this criteria:
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
    const text = `${item.name} — ${item.meaning}`;
    const ok = await copyToClipboard(text);
    if (ok) {
      setCopiedIndex(idx);
      showToast(`Copied ${item.name}!`);
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
      style: [style],
      themes: ["custom"],
      startingLetter: item.name.charAt(0).toUpperCase(),
      detailedMeaning: item.whyItMatches,
      pronunciation: item.pronunciation,
    });
    showToast(`Saved ${item.name} to your private favorites! ❤️`);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 text-left">
      {/* Studio Header (Clean & Minimal) */}
      <div className="space-y-2">
        <h2 className="text-2xl sm:text-4xl font-black text-zinc-900 dark:text-white tracking-tight">
          {title}
        </h2>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Generator Form */}
      <form onSubmit={handleGenerate} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* Gender Selector */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Gender</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm font-semibold text-zinc-800 dark:text-zinc-200 focus:outline-none"
            >
              <option value="any">✨ Any Gender / Unisex</option>
              <option value="boy">👦 Baby Boy</option>
              <option value="girl">👧 Baby Girl</option>
            </select>
          </div>

          {/* Origin / Culture Selector */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Origin / Culture</label>
            <select
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm font-semibold text-zinc-800 dark:text-zinc-200 focus:outline-none"
            >
              <option value="any">🌍 Any Culture / Multicultural</option>
              <option value="Indian">🇮🇳 Indian / Sanskrit</option>
              <option value="Arabic">🌙 Arabic / Islamic</option>
              <option value="Persian">👑 Persian</option>
              <option value="English">🇬🇧 English / British</option>
              <option value="Japanese">🌸 Japanese</option>
              <option value="Spanish">🇪🇸 Spanish / Latin</option>
            </select>
          </div>

          {/* Style Selector */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Naming Style</label>
            <select
              value={style}
              onChange={(e) => setStyle(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm font-semibold text-zinc-800 dark:text-zinc-200 focus:outline-none"
            >
              <option value="modern">Modern & Trendy</option>
              <option value="royal">Royal & Majestic</option>
              <option value="unique">Rare & Unique</option>
              <option value="short">Short (1-2 Syllables)</option>
              <option value="nature">Nature & Celestial</option>
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
            className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm sm:text-base text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          {loading ? (
            <>
              <RefreshCw className="w-4 h-4 animate-spin" />
              <span>Generating AI Names...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4" />
              <span>Generate AI Names</span>
            </>
          )}
        </button>
      </form>

      {/* Generated Results: Pure Clean Editorial Numbered List (NO CARDS) */}
      {results.length > 0 && (
        <div className="space-y-4 pt-6 border-t border-zinc-200 dark:border-zinc-800">
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

                {/* Action buttons (Copy, Audio, Save) */}
                <div className="flex items-center gap-1.5 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity">
                  <button
                    type="button"
                    onClick={() => handlePlayAudio(res.name)}
                    title="Hear Pronunciation"
                    className="p-1.5 text-zinc-400 hover:text-indigo-600 transition-colors"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSaveName(res)}
                    title="Save to Favorites"
                    className="p-1.5 text-zinc-400 hover:text-rose-500 transition-colors"
                  >
                    <Heart className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleCopyName(res, idx)}
                    title="Copy"
                    className="p-1.5 text-zinc-400 hover:text-indigo-600 transition-colors"
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
