"use client";

import { useState, useRef } from "react";
import { X, Download, Copy, Check, Sparkles, Image as ImageIcon, Smartphone, Square } from "lucide-react";
import { showToast } from "@/components/common/Toast";

interface VisualQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  captionText: string;
}

const THEMES = [
  { id: "dark", name: "Dark Slate", bg: "bg-zinc-950 text-white", border: "border-zinc-800", authorColor: "text-zinc-400" },
  { id: "cream", name: "Warm Cream", bg: "bg-[#FBF9F5] text-zinc-900", border: "border-zinc-300", authorColor: "text-zinc-600" },
  { id: "purple", name: "Nebula Glow", bg: "bg-gradient-to-br from-indigo-950 via-purple-900 to-black text-white", border: "border-purple-800", authorColor: "text-purple-300" },
  { id: "sunset", name: "Sunset Gold", bg: "bg-gradient-to-br from-amber-950 via-rose-900 to-black text-white", border: "border-rose-800", authorColor: "text-amber-300" },
  { id: "emerald", name: "Emerald Sage", bg: "bg-gradient-to-br from-emerald-950 via-teal-900 to-black text-white", border: "border-teal-800", authorColor: "text-emerald-300" },
];

export function VisualQuoteModal({ isOpen, onClose, captionText }: VisualQuoteModalProps) {
  const [selectedTheme, setSelectedTheme] = useState(THEMES[0]);
  const [aspectRatio, setAspectRatio] = useState<"square" | "story" | "portrait">("story");
  const [copied, setCopied] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handleDownload = () => {
    // Generate Canvas and Download PNG
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = 1080;
    const height = aspectRatio === "story" ? 1920 : aspectRatio === "portrait" ? 1350 : 1080;
    canvas.width = width;
    canvas.height = height;

    // Background
    if (selectedTheme.id === "cream") {
      ctx.fillStyle = "#FBF9F5";
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = "#18181b";
    } else if (selectedTheme.id === "purple") {
      const grad = ctx.createLinearGradient(0, 0, width, height);
      grad.addColorStop(0, "#1e1b4b");
      grad.addColorStop(0.5, "#581c87");
      grad.addColorStop(1, "#09090b");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = "#ffffff";
    } else if (selectedTheme.id === "sunset") {
      const grad = ctx.createLinearGradient(0, 0, width, height);
      grad.addColorStop(0, "#451a03");
      grad.addColorStop(0.5, "#881337");
      grad.addColorStop(1, "#09090b");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = "#ffffff";
    } else if (selectedTheme.id === "emerald") {
      const grad = ctx.createLinearGradient(0, 0, width, height);
      grad.addColorStop(0, "#022c22");
      grad.addColorStop(0.5, "#134e4a");
      grad.addColorStop(1, "#09090b");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = "#ffffff";
    } else {
      ctx.fillStyle = "#09090b";
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = "#ffffff";
    }

    // Typography
    ctx.font = "bold 56px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // Word wrap helper
    const words = captionText.split(" ");
    const lines = [];
    let currentLine = "";
    const maxWidth = width * 0.8;

    for (const word of words) {
      const testLine = currentLine + (currentLine ? " " : "") + word;
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth && currentLine !== "") {
        lines.push(currentLine);
        currentLine = word;
      } else {
        currentLine = testLine;
      }
    }
    lines.push(currentLine);

    const lineHeight = 80;
    const totalHeight = lines.length * lineHeight;
    let startY = (height - totalHeight) / 2;

    lines.forEach((line) => {
      ctx.fillText(line, width / 2, startY);
      startY += lineHeight;
    });

    // Watermark
    ctx.font = "600 28px -apple-system, sans-serif";
    ctx.fillStyle = selectedTheme.id === "cream" ? "#71717a" : "#a1a1aa";
    ctx.fillText("✨ Unitoolkit.com", width / 2, height - 120);

    const link = document.createElement("a");
    link.download = `unitoolkit-quote-${Date.now()}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
    showToast("Visual quote card downloaded!", "sparkle");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-lg rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 p-5 sm:p-8 shadow-2xl space-y-5 sm:space-y-6 text-left my-auto max-h-[92vh] overflow-y-auto no-scrollbar">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <div className="space-y-1 pr-6">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 text-xs font-semibold">
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Story & Pinterest Card</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white">
            Visual Quote Card Generator
          </h3>
          <p className="text-xs text-zinc-500">
            Download high-res aesthetic cards ready to post on Instagram Stories, Pinterest, or WhatsApp status.
          </p>
        </div>

        {/* Card Live Preview */}
        <div className="flex justify-center">
          <div
            ref={cardRef}
            className={`w-full ${
              aspectRatio === "story"
                ? "aspect-[9/16] max-h-[300px] sm:max-h-[340px]"
                : aspectRatio === "portrait"
                ? "aspect-[4/5] max-h-[280px] sm:max-h-[320px]"
                : "aspect-square max-h-[260px] sm:max-h-[300px]"
            } rounded-2xl p-6 sm:p-8 flex flex-col justify-between items-center text-center shadow-lg transition-all border ${selectedTheme.bg} ${selectedTheme.border}`}
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold">
              ❝
            </div>
            <p className="text-sm sm:text-base font-bold leading-relaxed max-w-xs line-clamp-6">
              {captionText}
            </p>
            <span className={`text-[10px] tracking-wider uppercase font-semibold ${selectedTheme.authorColor}`}>
              ✨ Unitoolkit.com
            </span>
          </div>
        </div>

        {/* Controls: Themes & Aspect Ratio */}
        <div className="space-y-3.5">
          {/* Format Picker */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2">
            <span className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Format:</span>
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
              <button
                type="button"
                onClick={() => setAspectRatio("story")}
                className={`px-2.5 py-1.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1 border transition-all ${
                  aspectRatio === "story"
                    ? "bg-indigo-600 text-white border-indigo-600 shadow-2xs"
                    : "bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-800"
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Story 9:16</span>
              </button>
              <button
                type="button"
                onClick={() => setAspectRatio("portrait")}
                className={`px-2.5 py-1.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1 border transition-all ${
                  aspectRatio === "portrait"
                    ? "bg-indigo-600 text-white border-indigo-600 shadow-2xs"
                    : "bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-800"
                }`}
              >
                <span>Portrait 4:5</span>
              </button>
              <button
                type="button"
                onClick={() => setAspectRatio("square")}
                className={`px-2.5 py-1.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1 border transition-all ${
                  aspectRatio === "square"
                    ? "bg-indigo-600 text-white border-indigo-600 shadow-2xs"
                    : "bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-800"
                }`}
              >
                <Square className="w-3.5 h-3.5" />
                <span>Post 1:1</span>
              </button>
            </div>
          </div>

          {/* Theme Palette */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2">
            <span className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Theme:</span>
            <div className="flex flex-wrap gap-1.5">
              {THEMES.map((theme) => (
                <button
                  key={theme.id}
                  type="button"
                  onClick={() => setSelectedTheme(theme)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium border transition-all ${
                    selectedTheme.id === theme.id
                      ? "ring-2 ring-indigo-500 border-indigo-500 scale-105"
                      : "border-zinc-200 dark:border-zinc-800 hover:border-zinc-400"
                  } ${theme.bg}`}
                >
                  {theme.name.split(" ")[0]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button
          type="button"
          onClick={handleDownload}
          className="w-full py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
        >
          <Download className="w-4 h-4" />
          <span>Download Visual Quote Card (HD PNG)</span>
        </button>
      </div>
    </div>
  );
}
