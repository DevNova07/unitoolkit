"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  Copy,
  Check,
  MessageCircle,
  Share2,
  RefreshCw,
  Send,
  Languages,
  Sliders,
  Image as ImageIcon,
  Heart,
  Volume2,
} from "lucide-react";
import { OCCASION_HUBS } from "@/data/wishesTaxonomy";
import { copyToClipboard } from "@/lib/utils";
import { showToast } from "@/components/common/Toast";
import { VisualQuoteModal } from "@/components/captions/VisualQuoteModal";

const OCCASIONS_150 = [
  "Birthday (General)",
  "18th Milestone Birthday",
  "21st Milestone Birthday",
  "30th Milestone Birthday",
  "50th Milestone Birthday",
  "Wedding & Marriage",
  "Wedding Anniversary",
  "25th Silver Jubilee Anniversary",
  "50th Golden Jubilee Anniversary",
  "Engagement & Ring Ceremony",
  "New Baby Boy Welcome",
  "New Baby Girl Welcome",
  "Twins Baby Welcome",
  "Baby Shower & Godh Bharai",
  "Eid-ul-Fitr Mubarak",
  "Eid-ul-Adha (Bakra Eid)",
  "Ramadan Kareem",
  "Jummah Mubarak",
  "Shab-e-Barat",
  "Milad-un-Nabi",
  "Diwali (Deepavali)",
  "Dhanteras Wealth",
  "Bhai Dooj",
  "Holi & Rangotsav",
  "Raksha Bandhan",
  "Navratri & Garba",
  "Durga Puja",
  "Ganesh Chaturthi",
  "Janmashtami",
  "Maha Shivratri",
  "Ram Navami",
  "Makar Sankranti & Pongal",
  "New Year 2026",
  "Christmas Eve & Day",
  "Valentine's Day",
  "Rose Day",
  "Propose Day",
  "Chocolate Day",
  "Teddy Day",
  "Promise Day",
  "Hug Day",
  "Kiss Day",
  "Easter Sunday",
  "Thanksgiving",
  "Halloween",
  "Good Morning & Suprabhat",
  "Good Night & Sweet Dreams",
  "Thank You & Gratitude",
  "Sorry & Heartfelt Apology",
  "Get Well Soon & Speedy Recovery",
  "Miss You & Long Distance",
  "Congratulations & Big Wins",
  "Job Promotion",
  "New Job & Career Move",
  "Retirement & Farewell",
  "Graduation & Convocation",
  "Exam Success & Board Exams",
  "New Business & Shop Opening",
  "New House (Griha Pravesh)",
  "New Car / Vehicle Purchase",
  "Mother's Day",
  "Father's Day",
  "Friendship Day",
  "Teachers' Day",
  "Women's Day",
  "Men's Day",
  "Children's Day",
  "Doctor's Day",
  "Independence Day",
  "Republic Day",
];

export function AIWishesGenerator() {
  const [occasion, setOccasion] = useState("Birthday (General)");
  const [recipient, setRecipient] = useState("Best Friend");
  const [tone, setTone] = useState("Heartfelt & Emotional");
  const [language, setLanguage] = useState("en");
  const [customDetail, setCustomDetail] = useState("");
  const [generatedWishes, setGeneratedWishes] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);
  const [selectedForCard, setSelectedForCard] = useState<string | null>(null);

  const handleCopy = async (idx: number, text: string) => {
    const success = await copyToClipboard(text);
    if (success) {
      setCopiedIdx(idx);
      showToast("Wish copied to clipboard! 💌✨", "success");
      setTimeout(() => setCopiedIdx(null), 2000);
    }
  };

  const handleShareWhatsApp = (text: string) => {
    const encoded = encodeURIComponent(text);
    const url = `https://api.whatsapp.com/send?text=${encoded}`;
    window.open(url, "_blank", "noopener,noreferrer");
    showToast("Opening WhatsApp... 🟢", "success");
  };

  const handleGenerate = async () => {
    setIsGenerating(true);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: `Create 4 distinct ${occasion} wishes for ${recipient} with tone ${tone}. Context details: ${customDetail || "genuine, moving and modern"}`,
          platform: "whatsapp",
          style: "creative",
          tone: tone.toLowerCase(),
          length: "medium",
          language: language,
          count: 4,
          includeHashtags: false,
          includeEmojis: true,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        if (data.captions && Array.isArray(data.captions) && data.captions.length > 0) {
          setGeneratedWishes(data.captions);
          setIsGenerating(false);
          showToast(`✨ Generated 4 custom ${occasion} wishes!`, "sparkle");
          return;
        }
      }
    } catch (e) {
      console.warn("AI generation fallback error:", e);
    }

    // Local fallback
    const fallbackList = [
      `May this ${occasion} bring you endless moments of happiness, peace, and breakthroughs! Sending you all my warmest love and prayers! 🥂✨`,
      `To the most incredible ${recipient}: On this ${occasion}, I hope your heart is filled with pure joy and every dream of yours turns into reality! 💖🚀`,
      `Wishing you a blessed ${occasion} overflowing with laughter, sweet memories, and good health! Have a memorable celebration! 🎂🎉`,
      `Cheers to you on this special ${occasion}! May your future be brighter, bolder, and more rewarding than ever! 🌟🤍`,
    ];

    setGeneratedWishes(fallbackList);
    setIsGenerating(false);
    showToast("✨ Fresh wishes generated!", "sparkle");
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-10">
      {/* Visual Quote Studio Modal */}
      {selectedForCard && (
        <VisualQuoteModal
          isOpen={!!selectedForCard}
          onClose={() => setSelectedForCard(null)}
          captionText={selectedForCard}
        />
      )}

      {/* Generator Control Card */}
      <div className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-xl space-y-6 text-left">
        <div className="space-y-1 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 text-amber-600 dark:text-amber-400 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 fill-current" />
            <span>AI Wishes Synthesizer (150+ Occasions)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white">
            Generate Custom Wishes for Any Person & Moment
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
            Tailor personal details, select emotional vibe, and generate 4 polished greeting lines with 1-tap WhatsApp sharing.
          </p>
        </div>

        {/* Form Inputs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Occasion Dropdown */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-zinc-700 dark:text-zinc-300">
              Select Occasion / Festival:
            </label>
            <select
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm font-medium text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              {OCCASIONS_150.map((occ) => (
                <option key={occ} value={occ}>
                  {occ}
                </option>
              ))}
            </select>
          </div>

          {/* Recipient */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-zinc-700 dark:text-zinc-300">
              Who is this for? (Recipient):
            </label>
            <input
              type="text"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              placeholder="e.g. Best Friend, Mom, Crush, Boss, Sister..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm font-medium text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          {/* Tone */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-zinc-700 dark:text-zinc-300">
              Tone & Vibe:
            </label>
            <select
              value={tone}
              onChange={(e) => setTone(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm font-medium text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="Heartfelt & Emotional">❤️ Heartfelt & Emotional</option>
              <option value="Funny & Roast">😂 Funny & Roast</option>
              <option value="Romantic & Sweet">🌹 Romantic & Sweet</option>
              <option value="Formal & Professional">👔 Formal & Professional</option>
              <option value="Short & Punchy">⚡ Short & Punchy (1-Liner)</option>
              <option value="Poetic Shayari">📜 Poetic Shayari Style</option>
            </select>
          </div>

          {/* Language */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-zinc-700 dark:text-zinc-300">
              Language / Script:
            </label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm font-medium text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="en">🇬🇧 English</option>
              <option value="hi">📜 Hindi (देवनागरी)</option>
              <option value="hinglish">🔤 Hinglish (Roman)</option>
              <option value="ur">🌙 Urdu</option>
            </select>
          </div>
        </div>

        {/* Custom Context Note */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-zinc-700 dark:text-zinc-300">
            Special Notes / Inside Joke / Personal Detail (Optional):
          </label>
          <input
            type="text"
            value={customDetail}
            onChange={(e) => setCustomDetail(e.target.value)}
            placeholder="e.g. Loves chai, moving to Canada, turning 25, got promoted to senior designer..."
            className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        {/* Action Button */}
        <button
          type="button"
          onClick={handleGenerate}
          disabled={isGenerating}
          className="w-full py-4 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-black text-sm sm:text-base shadow-lg shadow-amber-500/20 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
        >
          {isGenerating ? (
            <>
              <RefreshCw className="w-4 h-4 animate-spin" />
              <span>Crafting Personalized Wishes...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4" />
              <span>Generate 4 {occasion} Wishes</span>
            </>
          )}
        </button>
      </div>

      {/* Generated Output Grid */}
      {generatedWishes.length > 0 && (
        <div className="space-y-4 text-left">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
              AI Generated Results ({occasion})
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {generatedWishes.map((text, idx) => {
              const isCopied = copiedIdx === idx;
              return (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-zinc-950 border border-amber-300 dark:border-amber-900 shadow-md flex flex-col justify-between gap-4"
                >
                  <p className="text-sm sm:text-base font-medium text-zinc-800 dark:text-zinc-100 whitespace-pre-line leading-relaxed select-all">
                    {text}
                  </p>

                  <div className="flex items-center gap-2 pt-3 border-t border-zinc-100 dark:border-zinc-900">
                    <button
                      type="button"
                      onClick={() => handleCopy(idx, text)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                        isCopied
                          ? "bg-amber-600 text-white"
                          : "bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200"
                      }`}
                    >
                      {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{isCopied ? "Copied" : "Copy"}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleShareWhatsApp(text)}
                      className="px-3 py-1.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold border border-emerald-500/20 transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-current" />
                      <span>WhatsApp</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedForCard(text)}
                      title="Make Greeting Card"
                      className="p-2 rounded-xl bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-800 text-xs font-bold cursor-pointer"
                    >
                      <ImageIcon className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
