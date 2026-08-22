import Link from "next/link";
import { Sparkles, Heart, ShieldCheck, Zap, Layers, Wand2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200/80 dark:border-zinc-800/80 bg-white/90 dark:bg-zinc-950 text-zinc-600 dark:text-zinc-400 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 text-left">
          {/* Brand Col (Spans 2 columns on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/25 group-hover:scale-105 transition-transform">
                <span className="font-black text-lg tracking-tight select-none">U</span>
              </div>
              <span className="font-extrabold text-xl tracking-tight text-zinc-900 dark:text-white">
                Uni<span className="text-indigo-600 dark:text-indigo-400">toolkit</span>
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 max-w-sm leading-relaxed">
              The premier social media creator suite with 5 flagship engines (Shayari, Status, Bio, Quotes & Captions) crafted for 10 major platforms. 100% free with instant 1-click copy & WhatsApp sharing.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-zinc-500">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 font-bold text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5" /> 100% Free Forever
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 font-bold text-[11px]">
                <Zap className="w-3.5 h-3.5" /> No Login Required
              </span>
            </div>
          </div>

          {/* Col 1: The 5 Core Tools */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-black uppercase tracking-wider text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
              <Wand2 className="w-3.5 h-3.5 text-indigo-500" />
              <span>5 Core Tools</span>
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/captions" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  AI Captions & 15K+ Vault
                </Link>
              </li>
              <li>
                <Link href="/shayari" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Hindi Shayari Vault
                </Link>
              </li>
              <li>
                <Link href="/whatsapp-status" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  WhatsApp Status Quotes
                </Link>
              </li>
              <li>
                <Link href="/bios" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  VIP Bio Generator
                </Link>
              </li>
              <li>
                <Link href="/quotes" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Quotes & Wisdom Hub
                </Link>
              </li>
              <li>
                <Link href="/tools" className="font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">
                  All 5 Tools Directory →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Platforms (Social & Video) */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-black uppercase tracking-wider text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-rose-500" />
              <span>Platforms (1-5)</span>
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/instagram-captions" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Instagram Captions
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
                <Link href="/facebook-captions" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Facebook Captions
                </Link>
              </li>
              <li>
                <Link href="/snapchat-captions" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Snapchat Streak Lines
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Platforms (Pro, Visual & Messaging) */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-black uppercase tracking-wider text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-blue-500" />
              <span>Platforms (6-10)</span>
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/linkedin-captions" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  LinkedIn Professional
                </Link>
              </li>
              <li>
                <Link href="/twitter-captions" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Twitter / X One-Liners
                </Link>
              </li>
              <li>
                <Link href="/threads-captions" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Threads App Captions
                </Link>
              </li>
              <li>
                <Link href="/pinterest-captions" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Pinterest Aesthetic
                </Link>
              </li>
              <li>
                <Link href="/whatsapp-status" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  WhatsApp Status Hub
                </Link>
              </li>
              <li>
                <Link href="/platforms" className="font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">
                  All 10 Platforms →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="mt-14 pt-8 border-t border-zinc-200/60 dark:border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-400">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} UniToolkit. 5 Tools & 10 Platforms. Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-current inline" />
            <span>for creators.</span>
          </div>

          <div className="flex items-center gap-6 text-xs font-medium">
            <Link href="/about" className="hover:text-zinc-900 dark:hover:text-white transition-colors">About</Link>
            <Link href="/contact" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Contact</Link>
            <Link href="/privacy-policy" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
