"use client";

import { useState } from "react";
import { Link2, Code, Check, Share2, Sparkles, Globe, Copy } from "lucide-react";

interface BacklinkWidgetProps {
  pageTitle: string;
  canonicalUrl: string;
  description?: string;
  badge?: string;
}

export function BacklinkWidget({
  pageTitle,
  canonicalUrl,
  description = "Free AI Captions, Status & Bio Generator for Creators",
  badge = "Creator Resource",
}: BacklinkWidgetProps) {
  const [copiedSnippet, setCopiedSnippet] = useState<string | null>(null);
  const [showEmbedCode, setShowEmbedCode] = useState(false);

  const fullUrl = canonicalUrl.startsWith("http")
    ? canonicalUrl
    : `https://unitoolkit.com${canonicalUrl}`;

  const htmlEmbedCode = `<!-- Unitoolkit Attribution Badge -->\n<p>Curated lines powered by <a href="${fullUrl}" target="_blank" rel="noopener noreferrer" title="${pageTitle}">Unitoolkit ${pageTitle}</a></p>`;

  const markdownEmbedCode = `[${pageTitle} by Unitoolkit](${fullUrl})`;

  const citationText = `Unitoolkit (2026). "${pageTitle}." Retrieved from ${fullUrl}`;

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSnippet(type);
    setTimeout(() => setCopiedSnippet(null), 2500);
  };

  const shareOnTwitter = () => {
    const text = encodeURIComponent(`Check out ${pageTitle} on @Unitoolkit: ${fullUrl}`);
    window.open(`https://twitter.com/intent/tweet?text=${text}`, "_blank");
  };

  const shareOnWhatsApp = () => {
    const text = encodeURIComponent(`🔥 Check out ${pageTitle}: ${fullUrl}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank");
  };

  return (
    <div className="w-full my-8 p-5 sm:p-6 rounded-3xl bg-zinc-900 text-zinc-100 border border-zinc-800 shadow-xl overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

      <div className="relative z-10 space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-pink-500/20 text-pink-400 text-[11px] font-bold">
              <Sparkles className="w-3 h-3" />
              <span>{badge}</span>
            </div>
            <h3 className="text-lg font-black text-white flex items-center gap-2">
              <Globe className="w-4 h-4 text-pink-400" />
              <span>Share & Embed on Your Website or Blog</span>
            </h3>
            <p className="text-xs text-zinc-400">
              Writing a blog post or social guide? Embed live credit link or share 1-click with creators.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={shareOnWhatsApp}
              className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition flex items-center gap-1.5 shadow-sm cursor-pointer"
              title="Share on WhatsApp"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </button>
            <button
              onClick={shareOnTwitter}
              className="px-3 py-1.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold transition flex items-center gap-1.5 shadow-sm cursor-pointer"
              title="Share on X (Twitter)"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>X / Tweet</span>
            </button>
            <button
              onClick={() => handleCopy(fullUrl, "url")}
              className="px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-bold transition flex items-center gap-1.5 border border-zinc-700 cursor-pointer"
            >
              {copiedSnippet === "url" ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied URL!</span>
                </>
              ) : (
                <>
                  <Link2 className="w-3.5 h-3.5" />
                  <span>Copy Link</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Embed / Citation Toggle */}
        <div className="pt-3 border-t border-zinc-800 flex flex-wrap gap-2 items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowEmbedCode(!showEmbedCode)}
              className="text-xs text-pink-400 hover:text-pink-300 font-bold flex items-center gap-1 underline underline-offset-4 cursor-pointer"
            >
              <Code className="w-3.5 h-3.5" />
              <span>{showEmbedCode ? "Hide HTML & Markdown Embed Snippets" : "Get HTML / Markdown Embed Code for Bloggers"}</span>
            </button>
          </div>

          <div className="text-[11px] text-zinc-500">
            SEO Indexing & Attribution Friendly
          </div>
        </div>

        {showEmbedCode && (
          <div className="space-y-4 pt-2 animate-in fade-in duration-300">
            {/* HTML Embed Snippet */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs text-zinc-400 font-semibold">
                <span>HTML Code (For WordPress, Blogger, or Custom HTML):</span>
                <button
                  onClick={() => handleCopy(htmlEmbedCode, "html")}
                  className="text-pink-400 hover:text-pink-300 flex items-center gap-1 font-bold cursor-pointer"
                >
                  {copiedSnippet === "html" ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedSnippet === "html" ? "Copied!" : "Copy HTML"}</span>
                </button>
              </div>
              <pre className="p-3 rounded-xl bg-black/60 border border-zinc-800 text-[11px] text-zinc-300 overflow-x-auto font-mono whitespace-pre-wrap">
                {htmlEmbedCode}
              </pre>
            </div>

            {/* Markdown Snippet */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs text-zinc-400 font-semibold">
                <span>Markdown (For GitHub, Notion, Substack, Medium):</span>
                <button
                  onClick={() => handleCopy(markdownEmbedCode, "markdown")}
                  className="text-pink-400 hover:text-pink-300 flex items-center gap-1 font-bold cursor-pointer"
                >
                  {copiedSnippet === "markdown" ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedSnippet === "markdown" ? "Copied!" : "Copy Markdown"}</span>
                </button>
              </div>
              <pre className="p-3 rounded-xl bg-black/60 border border-zinc-800 text-[11px] text-zinc-300 overflow-x-auto font-mono whitespace-pre-wrap">
                {markdownEmbedCode}
              </pre>
            </div>

            {/* Web Citation Snippet */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs text-zinc-400 font-semibold">
                <span>APA/Web Citation Reference:</span>
                <button
                  onClick={() => handleCopy(citationText, "citation")}
                  className="text-pink-400 hover:text-pink-300 flex items-center gap-1 font-bold cursor-pointer"
                >
                  {copiedSnippet === "citation" ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedSnippet === "citation" ? "Copied!" : "Copy Citation"}</span>
                </button>
              </div>
              <div className="p-3 rounded-xl bg-black/60 border border-zinc-800 text-[11px] text-zinc-300 font-mono">
                {citationText}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
