"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import {
  Sparkles,
  Bookmark,
  Menu,
  X,
  Layers,
  BookOpen,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  MessageCircle,
  User,
  Quote,
  FileText,
  Hash,
} from "lucide-react";
import {
  InstagramIcon,
  WhatsAppIcon,
  YoutubeIcon,
  TikTokIcon,
  LinkedInIcon,
  XIcon,
  PinterestIcon,
  ThreadsIcon,
  FacebookIcon,
  SnapchatIcon,
} from "@/components/common/BrandIcons";
import { getFavorites, FAVORITES_CHANGE_EVENT } from "@/lib/favoritesStore";

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [favoritesCount, setFavoritesCount] = useState(() => {
    if (typeof window !== "undefined") {
      try {
        return getFavorites().length;
      } catch {
        return 0;
      }
    }
    return 0;
  });
  const [scrolled, setScrolled] = useState(false);

  // Mobile accordion collapse states
  const [mobileAiOpen, setMobileAiOpen] = useState(true);
  const [mobilePlatformsOpen, setMobilePlatformsOpen] = useState(false);

  // Desktop dropdown states
  const [aiToolsDropdownOpen, setAiToolsDropdownOpen] = useState(false);
  const [platformsDropdownOpen, setPlatformsDropdownOpen] = useState(false);
  const aiTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const platTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const updateFavs: EventListener = () => {
      setFavoritesCount(getFavorites().length);
    };

    window.addEventListener(FAVORITES_CHANGE_EVENT, updateFavs);
    return () => window.removeEventListener(FAVORITES_CHANGE_EVENT, updateFavs);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const prevPathname = useRef(pathname);
  useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;
      const timer = setTimeout(() => {
        setMobileMenuOpen(false);
        setAiToolsDropdownOpen(false);
        setPlatformsDropdownOpen(false);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const handleAiMouseEnter = () => {
    if (aiTimeoutRef.current) clearTimeout(aiTimeoutRef.current);
    setAiToolsDropdownOpen(true);
  };

  const handleAiMouseLeave = () => {
    aiTimeoutRef.current = setTimeout(() => {
      setAiToolsDropdownOpen(false);
    }, 180);
  };

  const handlePlatMouseEnter = () => {
    if (platTimeoutRef.current) clearTimeout(platTimeoutRef.current);
    setPlatformsDropdownOpen(true);
  };

  const handlePlatMouseLeave = () => {
    platTimeoutRef.current = setTimeout(() => {
      setPlatformsDropdownOpen(false);
    }, 180);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled
          ? "bg-white/90 dark:bg-zinc-950/90 backdrop-blur-xl border-b border-zinc-200/80 dark:border-zinc-800/80 shadow-xs"
          : "bg-white dark:bg-zinc-950 border-b border-zinc-200/80 dark:border-zinc-800/80"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* 1. Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group shrink-0">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white font-black text-sm shadow-xs group-hover:scale-105 transition-transform">
            U
          </div>
          <span className="font-extrabold text-base tracking-tight text-zinc-900 dark:text-white">
            Uni<span className="text-indigo-600 dark:text-indigo-400">toolkit</span>
          </span>
        </Link>

        {/* 2. Desktop Navigation (AI Tools Dropdown + Direct 5 Pillars + 10 Platforms Dropdown) */}
        <nav className="hidden lg:flex items-center gap-1.5 text-xs font-semibold">
          {/* 🌟 1. AI TOOLS DROPDOWN (5 Dedicated AI Engines) */}
          <div
            className="relative"
            onMouseEnter={handleAiMouseEnter}
            onMouseLeave={handleAiMouseLeave}
          >
            <button
              type="button"
              onClick={() => setAiToolsDropdownOpen(!aiToolsDropdownOpen)}
              className={`px-3 py-2 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer font-bold ${
                aiToolsDropdownOpen || pathname.startsWith("/ai-")
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-xs"
                  : "bg-indigo-50/80 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200/80 dark:border-indigo-800/80 hover:bg-indigo-100"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 fill-current" />
              <span>AI Tools</span>
              <span className="px-1.5 py-0.2 rounded-full text-[10px] font-black bg-indigo-500/20 text-indigo-600 dark:text-indigo-300">
                5
              </span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  aiToolsDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {aiToolsDropdownOpen && (
              <div className="absolute top-full left-0 w-[340px] p-3 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-2xl space-y-1 animate-in fade-in-50 slide-in-from-top-2 duration-150 z-50 text-left">
                <div className="px-2 py-1 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                    5 Dedicated AI Generators
                  </span>
                  <span className="text-[10px] text-zinc-400">ChatGPT Style</span>
                </div>

                {/* AI Tool 1: AI Caption Generator */}
                <Link
                  href="/ai-caption-generator"
                  className="flex items-center gap-2.5 p-2.5 rounded-2xl hover:bg-zinc-100 dark:hover:bg-zinc-900 text-xs font-bold text-zinc-800 dark:text-zinc-200 hover:text-indigo-600 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-extrabold text-xs">AI Caption Studio</p>
                    <p className="text-[10px] font-normal text-zinc-400">Reels, Posts & Story hooks</p>
                  </div>
                </Link>

                {/* AI Tool 2: AI Bio Generator */}
                <Link
                  href="/ai-bio-generator"
                  className="flex items-center gap-2.5 p-2.5 rounded-2xl hover:bg-zinc-100 dark:hover:bg-zinc-900 text-xs font-bold text-zinc-800 dark:text-zinc-200 hover:text-pink-600 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-xl bg-pink-50 dark:bg-pink-950 text-pink-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-extrabold text-xs">AI Bio Generator & Styler</p>
                    <p className="text-[10px] font-normal text-zinc-400">VIP attitude & aesthetic fonts</p>
                  </div>
                </Link>

                {/* AI Tool 3: AI Status Generator */}
                <Link
                  href="/ai-status-generator"
                  className="flex items-center gap-2.5 p-2.5 rounded-2xl hover:bg-zinc-100 dark:hover:bg-zinc-900 text-xs font-bold text-zinc-800 dark:text-zinc-200 hover:text-emerald-600 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-extrabold text-xs">AI Status Generator</p>
                    <p className="text-[10px] font-normal text-zinc-400">WhatsApp live mobile preview</p>
                  </div>
                </Link>

                {/* AI Tool 4: AI Hindi Shayari Generator */}
                <Link
                  href="/ai-shayari-generator"
                  className="flex items-center gap-2.5 p-2.5 rounded-2xl hover:bg-zinc-100 dark:hover:bg-zinc-900 text-xs font-bold text-zinc-800 dark:text-zinc-200 hover:text-amber-600 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-xl bg-amber-50 dark:bg-amber-950 text-amber-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-extrabold text-xs">AI Hindi Shayari</p>
                    <p className="text-[10px] font-normal text-zinc-400">Love, Sad & 2-Line poetry</p>
                  </div>
                </Link>

                {/* AI Tool 5: AI Hashtags & Quotes Generator */}
                <Link
                  href="/ai-quotes-generator"
                  className="flex items-center gap-2.5 p-2.5 rounded-2xl hover:bg-zinc-100 dark:hover:bg-zinc-900 text-xs font-bold text-zinc-800 dark:text-zinc-200 hover:text-yellow-600 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-xl bg-yellow-50 dark:bg-yellow-950 text-yellow-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Hash className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-extrabold text-xs">AI Hashtags & Quotes</p>
                    <p className="text-[10px] font-normal text-zinc-400">Viral tags & mindset wisdom</p>
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* 📝 Captions Direct Link */}
          <Link
            href="/captions"
            className={`px-3 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
              pathname === "/captions"
                ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50/80 dark:bg-indigo-950/50 font-bold"
                : "text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100/70 dark:hover:bg-zinc-900/70"
            }`}
          >
            <FileText className="w-3.5 h-3.5 text-indigo-500" />
            <span>Captions</span>
          </Link>

          {/* 📜 Shayari Direct Link */}
          <Link
            href="/shayari"
            className={`px-3 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
              pathname.startsWith("/shayari")
                ? "text-amber-600 dark:text-amber-400 bg-amber-50/80 dark:bg-amber-950/50 font-bold"
                : "text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100/70 dark:hover:bg-zinc-900/70"
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-amber-500" />
            <span>Shayari</span>
          </Link>

          {/* 💬 Status Direct Link */}
          <Link
            href="/whatsapp-status"
            className={`px-3 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
              pathname.startsWith("/whatsapp-status") || pathname === "/status"
                ? "text-emerald-600 dark:text-emerald-400 bg-emerald-50/80 dark:bg-emerald-950/50 font-bold"
                : "text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100/70 dark:hover:bg-zinc-900/70"
            }`}
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-500" />
            <span>Status</span>
          </Link>

          {/* 👤 Bio Direct Link */}
          <Link
            href="/bios"
            className={`px-3 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
              pathname.startsWith("/bios")
                ? "text-pink-600 dark:text-pink-400 bg-pink-50/80 dark:bg-pink-950/50 font-bold"
                : "text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100/70 dark:hover:bg-zinc-900/70"
            }`}
          >
            <User className="w-3.5 h-3.5 text-pink-500" />
            <span>Bio</span>
          </Link>

          {/* 💡 Quotes Direct Link */}
          <Link
            href="/quotes"
            className={`px-3 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
              pathname.startsWith("/quotes")
                ? "text-yellow-600 dark:text-yellow-400 bg-yellow-50/80 dark:bg-yellow-950/50 font-bold"
                : "text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100/70 dark:hover:bg-zinc-900/70"
            }`}
          >
            <Quote className="w-3.5 h-3.5 text-yellow-500" />
            <span>Quotes</span>
          </Link>

          {/* 📱 10 PLATFORMS DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={handlePlatMouseEnter}
            onMouseLeave={handlePlatMouseLeave}
          >
            <button
              type="button"
              onClick={() => setPlatformsDropdownOpen(!platformsDropdownOpen)}
              className={`px-3 py-2 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer ${
                platformsDropdownOpen ||
                pathname.includes("-captions") ||
                pathname.startsWith("/platforms")
                  ? "text-rose-600 dark:text-rose-400 bg-rose-50/80 dark:bg-rose-950/50 font-bold"
                  : "text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100/70 dark:hover:bg-zinc-900/70"
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-rose-500" />
              <span>Platforms</span>
              <span className="px-1.5 py-0.2 rounded-full text-[10px] font-bold bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                10
              </span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  platformsDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {platformsDropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[520px] p-4 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-2xl space-y-3 animate-in fade-in-50 slide-in-from-top-2 duration-150 z-50 text-left">
                <div className="grid grid-cols-2 gap-4">
                  {/* Column 1: Social & Video */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 px-2 flex items-center gap-1">
                      <span>Social & Video (5)</span>
                    </span>

                    <Link
                      href="/instagram-captions"
                      className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 text-xs font-bold text-zinc-800 dark:text-zinc-200 hover:text-pink-600 transition-colors"
                    >
                      <div className="w-6 h-6 rounded-lg bg-pink-50 dark:bg-pink-950 flex items-center justify-center text-pink-600 shrink-0">
                        <InstagramIcon size={14} />
                      </div>
                      <div>
                        <p>Instagram</p>
                        <p className="text-[10px] font-normal text-zinc-400">Reels, Bios, Captions</p>
                      </div>
                    </Link>

                    <Link
                      href="/tiktok-captions"
                      className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 text-xs font-bold text-zinc-800 dark:text-zinc-200 hover:text-cyan-500 transition-colors"
                    >
                      <div className="w-6 h-6 rounded-lg bg-zinc-900 flex items-center justify-center text-cyan-400 shrink-0">
                        <TikTokIcon size={12} />
                      </div>
                      <div>
                        <p>TikTok</p>
                        <p className="text-[10px] font-normal text-zinc-400">Viral FYP & sounds</p>
                      </div>
                    </Link>

                    <Link
                      href="/youtube-captions"
                      className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 text-xs font-bold text-zinc-800 dark:text-zinc-200 hover:text-red-600 transition-colors"
                    >
                      <div className="w-6 h-6 rounded-lg bg-red-50 dark:bg-red-950 flex items-center justify-center text-red-600 shrink-0">
                        <YoutubeIcon size={14} />
                      </div>
                      <div>
                        <p>YouTube</p>
                        <p className="text-[10px] font-normal text-zinc-400">Shorts, Titles & Tags</p>
                      </div>
                    </Link>

                    <Link
                      href="/facebook-captions"
                      className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 text-xs font-bold text-zinc-800 dark:text-zinc-200 hover:text-blue-600 transition-colors"
                    >
                      <div className="w-6 h-6 rounded-lg bg-blue-50 dark:bg-blue-950 flex items-center justify-center text-blue-600 shrink-0">
                        <FacebookIcon size={14} />
                      </div>
                      <div>
                        <p>Facebook</p>
                        <p className="text-[10px] font-normal text-zinc-400">Photos & milestones</p>
                      </div>
                    </Link>

                    <Link
                      href="/snapchat-captions"
                      className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 text-xs font-bold text-zinc-800 dark:text-zinc-200 hover:text-amber-500 transition-colors"
                    >
                      <div className="w-6 h-6 rounded-lg bg-amber-50 dark:bg-amber-950 flex items-center justify-center text-amber-500 shrink-0">
                        <SnapchatIcon size={14} />
                      </div>
                      <div>
                        <p>Snapchat</p>
                        <p className="text-[10px] font-normal text-zinc-400">Streaks & spotlight</p>
                      </div>
                    </Link>
                  </div>

                  {/* Column 2: Professional, Real-Time & Visual */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 px-2 flex items-center gap-1">
                      <span>Pro, Threads & Visual (5)</span>
                    </span>

                    <Link
                      href="/linkedin-captions"
                      className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 text-xs font-bold text-zinc-800 dark:text-zinc-200 hover:text-blue-600 transition-colors"
                    >
                      <div className="w-6 h-6 rounded-lg bg-blue-50 dark:bg-blue-950 flex items-center justify-center text-blue-600 shrink-0">
                        <LinkedInIcon size={14} />
                      </div>
                      <div>
                        <p>LinkedIn</p>
                        <p className="text-[10px] font-normal text-zinc-400">Thought leadership</p>
                      </div>
                    </Link>

                    <Link
                      href="/twitter-captions"
                      className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 text-xs font-bold text-zinc-800 dark:text-zinc-200 hover:text-zinc-900 dark:hover:text-white transition-colors"
                    >
                      <div className="w-6 h-6 rounded-lg bg-zinc-900 flex items-center justify-center text-white shrink-0">
                        <XIcon size={12} />
                      </div>
                      <div>
                        <p>Twitter / X</p>
                        <p className="text-[10px] font-normal text-zinc-400">One-liners & tweets</p>
                      </div>
                    </Link>

                    <Link
                      href="/threads-captions"
                      className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 text-xs font-bold text-zinc-800 dark:text-zinc-200 hover:text-zinc-900 dark:hover:text-white transition-colors"
                    >
                      <div className="w-6 h-6 rounded-lg bg-zinc-900 flex items-center justify-center text-white shrink-0">
                        <ThreadsIcon size={14} />
                      </div>
                      <div>
                        <p>Threads</p>
                        <p className="text-[10px] font-normal text-zinc-400">Conversational takes</p>
                      </div>
                    </Link>

                    <Link
                      href="/pinterest-captions"
                      className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 text-xs font-bold text-zinc-800 dark:text-zinc-200 hover:text-red-600 transition-colors"
                    >
                      <div className="w-6 h-6 rounded-lg bg-red-50 dark:bg-red-950 flex items-center justify-center text-red-600 shrink-0">
                        <PinterestIcon size={14} />
                      </div>
                      <div>
                        <p>Pinterest</p>
                        <p className="text-[10px] font-normal text-zinc-400">Aesthetic moodboards</p>
                      </div>
                    </Link>

                    <Link
                      href="/whatsapp-status"
                      className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 text-xs font-bold text-zinc-800 dark:text-zinc-200 hover:text-emerald-600 transition-colors"
                    >
                      <div className="w-6 h-6 rounded-lg bg-emerald-50 dark:bg-emerald-950 flex items-center justify-center text-emerald-600 shrink-0">
                        <WhatsAppIcon size={14} />
                      </div>
                      <div>
                        <p>WhatsApp</p>
                        <p className="text-[10px] font-normal text-zinc-400">Status & shayari</p>
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs px-1">
                  <span className="text-[11px] text-zinc-400">10 Dedicated Platform Hubs</span>
                  <Link
                    href="/platforms"
                    className="font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
                  >
                    <span>View All Platforms</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* 3. Right Action Controls (Saved Favorites + Theme Toggle + Mobile Toggle) */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Favorites Link */}
          <Link
            href="/favorites"
            className="relative p-2 rounded-xl text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 transition-colors"
            title="Saved Favorites"
            aria-label="View Saved Captions"
          >
            <Bookmark className="w-4 h-4" />
            {favoritesCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-indigo-600 text-[10px] font-bold text-white flex items-center justify-center shadow-xs">
                {favoritesCount > 9 ? "9+" : favoritesCount}
              </span>
            )}
          </Link>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Simple, Sleek Slide-over Sidebar Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex justify-end">
          {/* Dark Backdrop Overlay */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Slide-out Sidebar Panel */}
          <div className="relative w-full max-w-[320px] sm:max-w-[350px] h-full bg-white dark:bg-zinc-950 border-l border-zinc-200 dark:border-zinc-800 shadow-2xl flex flex-col z-50 animate-in slide-in-from-right duration-200 ease-out text-left select-none">
            {/* Top Brand Header */}
            <div className="p-4 sm:p-5 border-b border-zinc-200 dark:border-zinc-850 flex items-center justify-between bg-zinc-50/50 dark:bg-zinc-900/50">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 group"
              >
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white font-black text-sm shadow-xs">
                  U
                </div>
                <span className="font-black text-base tracking-tight text-zinc-900 dark:text-white">
                  Uni<span className="text-indigo-600 dark:text-indigo-400">toolkit</span>
                </span>
              </Link>

              <div className="flex items-center gap-2">
                <ThemeToggle className="w-8 h-8" />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-8 h-8 rounded-xl flex items-center justify-center text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                  aria-label="Close sidebar"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Content Body (Simple clean list without cards, bigger text) */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-6">
              {/* 🌟 Section 1: AI TOOLS (Dropdown Toggle) */}
              <div className="space-y-1">
                <button
                  type="button"
                  onClick={() => setMobileAiOpen(!mobileAiOpen)}
                  className="w-full flex items-center justify-between py-1 px-1 text-left cursor-pointer group"
                >
                  <span className="text-xs font-black uppercase tracking-wider text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
                    AI Tools
                  </span>
                  <div className="flex items-center gap-1.5 text-zinc-400">
                    <span className="text-xs font-bold px-1.5 py-0.2 rounded-md bg-zinc-100 dark:bg-zinc-900 text-zinc-500">5</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        mobileAiOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>

                {mobileAiOpen && (
                  <div className="space-y-0.5 pt-1 animate-in fade-in-50 duration-150">
                    {[
                      { name: "AI Caption Studio", href: "/ai-caption-generator", icon: <Sparkles className="w-5 h-5 text-indigo-500" /> },
                      { name: "AI Bio Generator", href: "/ai-bio-generator", icon: <User className="w-5 h-5 text-pink-500" /> },
                      { name: "AI WhatsApp Status", href: "/ai-status-generator", icon: <MessageCircle className="w-5 h-5 text-emerald-500" /> },
                      { name: "AI Hindi Shayari", href: "/ai-shayari-generator", icon: <BookOpen className="w-5 h-5 text-amber-500" /> },
                      { name: "AI Quotes & Hashtags", href: "/ai-quotes-generator", icon: <Hash className="w-5 h-5 text-yellow-500" /> },
                    ].map((tool) => (
                      <Link
                        key={tool.name}
                        href={tool.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between py-2.5 px-2 rounded-xl text-base font-bold text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors group"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-xl bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center shrink-0">
                            {tool.icon}
                          </span>
                          <span>{tool.name}</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-200 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* 📱 Section 2: PLATFORMS (Dropdown Toggle) */}
              <div className="space-y-1">
                <button
                  type="button"
                  onClick={() => setMobilePlatformsOpen(!mobilePlatformsOpen)}
                  className="w-full flex items-center justify-between py-1 px-1 text-left cursor-pointer group"
                >
                  <span className="text-xs font-black uppercase tracking-wider text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
                    Platforms
                  </span>
                  <div className="flex items-center gap-1.5 text-zinc-400">
                    <span className="text-xs font-bold px-1.5 py-0.2 rounded-md bg-zinc-100 dark:bg-zinc-900 text-zinc-500">10</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        mobilePlatformsOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>

                {mobilePlatformsOpen && (
                  <div className="space-y-0.5 pt-1 animate-in fade-in-50 duration-150">
                    {[
                      { name: "Instagram", href: "/instagram-captions", icon: <InstagramIcon size={18} color="#E1306C" /> },
                      { name: "Facebook", href: "/facebook-captions", icon: <FacebookIcon size={18} color="#1877F2" /> },
                      { name: "Snapchat", href: "/snapchat-captions", icon: <SnapchatIcon size={18} color="#EAB308" /> },
                      { name: "WhatsApp", href: "/whatsapp-status", icon: <WhatsAppIcon size={18} color="#25D366" /> },
                      { name: "TikTok", href: "/tiktok-captions", icon: <TikTokIcon size={16} /> },
                      { name: "YouTube", href: "/youtube-captions", icon: <YoutubeIcon size={18} color="#FF0000" /> },
                      { name: "Twitter / X", href: "/twitter-captions", icon: <XIcon size={16} /> },
                      { name: "LinkedIn", href: "/linkedin-captions", icon: <LinkedInIcon size={18} color="#0A66C2" /> },
                      { name: "Threads", href: "/threads-captions", icon: <ThreadsIcon size={16} /> },
                      { name: "Pinterest", href: "/pinterest-captions", icon: <PinterestIcon size={18} color="#E60023" /> },
                    ].map((plat) => (
                      <Link
                        key={plat.name}
                        href={plat.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between py-2.5 px-2 rounded-xl text-base font-bold text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors group"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-xl bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center shrink-0">
                            {plat.icon}
                          </span>
                          <span>{plat.name}</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-200 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* 📚 Section 3: VAULTS & LIBRARIES (Clean Simple List) */}
              <div className="space-y-1">
                <p className="px-1 text-xs font-black uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                  Vaults & Libraries
                </p>

                <div className="space-y-0.5 pt-1">
                  {[
                    { name: "Captions Library", href: "/captions", icon: <FileText className="w-5 h-5 text-indigo-500" /> },
                    { name: "Hindi Shayari", href: "/shayari", icon: <BookOpen className="w-5 h-5 text-amber-500" /> },
                    { name: "WhatsApp Status", href: "/whatsapp-status", icon: <MessageCircle className="w-5 h-5 text-emerald-500" /> },
                    { name: "VIP Bios Styler", href: "/bios", icon: <User className="w-5 h-5 text-pink-500" /> },
                    { name: "Quotes Vault", href: "/quotes", icon: <Quote className="w-5 h-5 text-yellow-500" /> },
                  ].map((vault) => (
                    <Link
                      key={vault.name}
                      href={vault.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between py-2.5 px-2 rounded-xl text-base font-bold text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-xl bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center shrink-0">
                          {vault.icon}
                        </span>
                        <span>{vault.name}</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-200 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* ⚙️ Section 4: SAVED & PREFERENCES */}
              <div className="space-y-1 pt-3 border-t border-zinc-200/80 dark:border-zinc-800/80">
                <Link
                  href="/favorites"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2.5 px-2 rounded-xl text-base font-bold text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-indigo-50 dark:bg-indigo-950 flex items-center justify-center shrink-0">
                      <Bookmark className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    </span>
                    <span>Saved Favorites</span>
                  </div>
                  {favoritesCount > 0 && (
                    <span className="px-2 py-0.5 rounded-full bg-indigo-600 text-xs font-bold text-white">
                      {favoritesCount}
                    </span>
                  )}
                </Link>
              </div>
            </div>

            {/* Sidebar Bottom Status */}
            <div className="p-4 border-t border-zinc-200 dark:border-zinc-850 bg-zinc-50/50 dark:bg-zinc-900/50 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
              <span className="font-semibold">⚡ 100% Free Creator Suite</span>
              <span className="font-extrabold text-indigo-600 dark:text-indigo-400">UniToolkit</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
