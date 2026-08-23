import Link from "next/link";
import { Heart, ShieldCheck, Zap, Layers, Globe2, BookOpen, Hash, PenTool, Cpu } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200/80 dark:border-zinc-800/80 bg-white/90 dark:bg-zinc-950 text-zinc-600 dark:text-zinc-400 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 text-left">
          {/* Brand Col (Spans 1 or 2 columns on lg) */}
          <div className="lg:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/25 group-hover:scale-105 transition-transform">
                <span className="font-black text-lg tracking-tight select-none">U</span>
              </div>
              <span className="font-extrabold text-xl tracking-tight text-zinc-900 dark:text-white">
                Uni<span className="text-indigo-600 dark:text-indigo-400">toolkit</span>
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Global content suite featuring 6 core vaults (Captions, Shayari, Status, Bios, Quotes, Names) and 6 AI generators across 10 platforms.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs text-zinc-500">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 font-bold text-[11px] w-fit">
                <ShieldCheck className="w-3.5 h-3.5" /> 100% Free Forever
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 font-bold text-[11px] w-fit">
                <Zap className="w-3.5 h-3.5" /> No Login Required
              </span>
            </div>
          </div>

          {/* Col 1: 6 Core Ready Vaults */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-black uppercase tracking-wider text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-indigo-500" />
              <span>Ready Vaults</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/captions" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  15K+ Captions Vault
                </Link>
              </li>
              <li>
                <Link href="/shayari" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Hindi Shayari Hub
                </Link>
              </li>
              <li>
                <Link href="/whatsapp-status" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  WhatsApp Status Quotes
                </Link>
              </li>
              <li>
                <Link href="/bios" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  VIP Bios & Font Styler
                </Link>
              </li>
              <li>
                <Link href="/wishes" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-semibold text-amber-600 dark:text-amber-400">
                  Wishes & Occasions Hub
                </Link>
              </li>
              <li>
                <Link href="/quotes" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Quotes & Wisdom
                </Link>
              </li>
              <li>
                <Link href="/names" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Global Names Directory
                </Link>
              </li>
              <li>
                <Link href="/hashtags" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-semibold text-emerald-600 dark:text-emerald-400">
                  Trending Hashtags Hub
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: AI Studios */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-black uppercase tracking-wider text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-purple-500" />
              <span>AI Studios</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/ai-wishes-generator" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-semibold text-amber-600 dark:text-amber-400">
                  AI Wishes Generator
                </Link>
              </li>
              <li>
                <Link href="/ai-caption-generator" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  AI Caption Studio
                </Link>
              </li>
              <li>
                <Link href="/ai-hashtag-generator" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-semibold text-purple-600 dark:text-purple-400">
                  AI Hashtag Generator
                </Link>
              </li>
              <li>
                <Link href="/ai-bio-generator" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  AI Bio Generator
                </Link>
              </li>
              <li>
                <Link href="/ai-status-generator" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  AI WhatsApp Status
                </Link>
              </li>
              <li>
                <Link href="/ai-shayari-generator" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  AI Hindi Shayari
                </Link>
              </li>
              <li>
                <Link href="/ai-baby-name-generator" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  AI Baby Name Studio
                </Link>
              </li>
              <li>
                <Link href="/ai-baby-name-generator" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  AI Baby Name Matcher
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Global Names Directory */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-black uppercase tracking-wider text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
              <Globe2 className="w-3.5 h-3.5 text-blue-500" />
              <span>Names Hub (A–Z)</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/names/hindu" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Hindu Baby Names (A–Z)
                </Link>
              </li>
              <li>
                <Link href="/names/muslim" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Muslim & Islamic Names
                </Link>
              </li>
              <li>
                <Link href="/names/indian" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Indian Baby Names
                </Link>
              </li>
              <li>
                <Link href="/names/boy" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Baby Boy Names
                </Link>
              </li>
              <li>
                <Link href="/names/girl" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Baby Girl Names
                </Link>
              </li>
              <li>
                <Link href="/names/unique" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Unique & Rare Names
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: 10 Platforms & Tools */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-black uppercase tracking-wider text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-rose-500" />
              <span>Platforms & Tools</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/instagram-captions" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Instagram Hub
                </Link>
              </li>
              <li>
                <Link href="/tiktok-captions" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  TikTok Viral FYP
                </Link>
              </li>
              <li>
                <Link href="/youtube-captions" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  YouTube Shorts
                </Link>
              </li>
              <li>
                <Link href="/tools/hashtag-generator" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Hashtag Generator
                </Link>
              </li>
              <li>
                <Link href="/tools/fancy-font-generator" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Fancy Font Styler
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">
                  Complete HTML Sitemap →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="mt-14 pt-8 border-t border-zinc-200/60 dark:border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-400">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} UniToolkit. 6 Verticals & 10 Platforms. Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-current inline" />
            <span>for creators worldwide.</span>
          </div>

          <div className="flex items-center gap-5 text-xs font-medium flex-wrap">
            <Link href="/about" className="hover:text-zinc-900 dark:hover:text-white transition-colors">About</Link>
            <Link href="/editorial-policy" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Editorial Policy</Link>
            <Link href="/blog" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Blog</Link>
            <Link href="/contact" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Contact</Link>
            <Link href="/privacy-policy" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Terms</Link>
            <Link href="/disclaimer" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
