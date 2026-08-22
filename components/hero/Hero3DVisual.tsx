import { useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { InstagramIcon, YoutubeIcon, TikTokIcon, WhatsAppIcon } from "@/components/common/BrandIcons";
import { Hash } from "lucide-react";

export function Hero3DVisual() {
  const containerRef = useRef<HTMLDivElement>(null);

  // High-precision fluid spring physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 120, mass: 0.6 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [16, -16]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-16, 16]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[300px] xs:max-w-[340px] sm:max-w-[420px] lg:max-w-[500px] aspect-square mx-auto flex items-center justify-center select-none"
      style={{ perspective: 1400 }}
    >
      {/* Dynamic Background Ambient Glow */}
      <div className="absolute inset-0 bg-radial from-purple-500/25 via-indigo-500/15 to-transparent blur-3xl -z-10 rounded-full animate-pulse" />

      {/* Main 3D Stage with Real-Time Parallax Tilt */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full h-full flex items-center justify-center"
      >
        {/* Glowing Elliptical Orbit Wire */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-40 dark:opacity-20"
          style={{ transform: "translateZ(-30px)" }}
          viewBox="0 0 520 520"
        >
          <ellipse
            cx="260"
            cy="260"
            rx="220"
            ry="180"
            fill="none"
            stroke="url(#orbitGlowGrad)"
            strokeWidth="2"
            strokeDasharray="8 6"
          />
          <defs>
            <linearGradient id="orbitGlowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#818cf8" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#a855f7" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>

        {/* 3D Floating Sparkling Stars */}
        <motion.div
          animate={{ y: [-8, 8, -8], rotate: [0, 20, -20, 0], scale: [0.9, 1.15, 0.9] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-12 z-10 text-purple-400 text-lg drop-shadow-[0_0_12px_rgba(192,132,252,0.8)] pointer-events-none"
          style={{ transform: "translateZ(45px)" }}
        >
          ✦
        </motion.div>

        <motion.div
          animate={{ y: [8, -8, 8], rotate: [0, -25, 25, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          className="absolute top-8 right-16 z-10 text-purple-400 text-xl drop-shadow-[0_0_14px_rgba(192,132,252,0.9)] pointer-events-none"
          style={{ transform: "translateZ(55px)" }}
        >
          ✦
        </motion.div>

        {/* ======================================================== */}
        {/* 3D MULTI-TIER PEDESTAL PODIUM */}
        {/* ======================================================== */}
        <div
          className="absolute -bottom-2 z-10 flex flex-col items-center pointer-events-none"
          style={{ transform: "translateZ(10px)" }}
        >
          {/* Top Tier Disc */}
          <div className="w-52 h-7 sm:w-60 sm:h-8 rounded-full bg-gradient-to-b from-white via-slate-50 to-purple-100 dark:from-zinc-800 dark:to-zinc-900 border-t-2 border-white dark:border-zinc-600 shadow-[0_8px_20px_rgba(124,58,237,0.2)] flex items-center justify-center">
            <div className="w-44 h-2.5 rounded-full bg-purple-500/25 dark:bg-purple-500/35 blur-[1px]" />
          </div>
          {/* Middle Purple Rim */}
          <div className="w-60 h-3.5 sm:w-68 sm:h-4 -mt-1.5 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 shadow-[inset_0_2px_4px_rgba(255,255,255,0.4),0_4px_12px_rgba(124,58,237,0.4)]" />
          {/* Bottom Wider Tier Disc */}
          <div className="w-70 h-8 sm:w-78 sm:h-9 -mt-2 rounded-full bg-gradient-to-b from-purple-100 via-white to-purple-200 dark:from-zinc-800 dark:to-zinc-950 border-t-2 border-white dark:border-zinc-700 shadow-[0_20px_40px_rgba(0,0,0,0.2)]" />
        </div>

        {/* ======================================================== */}
        {/* 3D HEXAGONAL CENTERPIECE SHIELD & GLOSSY EMBOSSED "U" */}
        {/* ======================================================== */}
        <motion.div
          animate={{
            y: [-6, 6, -6],
            rotateZ: [-1, 1, -1],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative z-20 w-36 h-40 sm:w-44 sm:h-48 flex items-center justify-center filter drop-shadow-[0_24px_40px_rgba(124,58,237,0.35)] transition-transform duration-300 hover:scale-105"
          style={{ transform: "translateZ(45px)" }}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Hexagon SVG */}
            <svg viewBox="0 0 200 230" className="w-full h-full filter drop-shadow-lg">
              <polygon
                points="100,6 194,59 194,171 100,224 6,171 6,59"
                fill="url(#outerHexGrad)"
                stroke="#c084fc"
                strokeWidth="3.5"
                strokeLinejoin="round"
              />
              <polygon
                points="100,16 182,64 182,166 100,214 18,166 18,64"
                fill="url(#innerClayGrad)"
                stroke="#f3e8ff"
                strokeWidth="3"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient id="outerHexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#d8b4fe" />
                  <stop offset="50%" stopColor="#7c3aed" />
                  <stop offset="100%" stopColor="#4f46e5" />
                </linearGradient>
                <linearGradient id="innerClayGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#f5f3ff" />
                </linearGradient>
              </defs>
            </svg>

            {/* Embossed Glossy 3D Purple "U" Letter */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex items-center justify-center">
                <span className="text-6xl sm:text-7xl font-black text-purple-950/25 absolute top-2 left-0.5 select-none filter blur-[1px]">
                  U
                </span>
                <span className="text-6xl sm:text-7xl font-black bg-gradient-to-b from-purple-400 via-indigo-600 to-purple-900 bg-clip-text text-transparent drop-shadow-[0_10px_20px_rgba(124,58,237,0.6)] select-none">
                  U
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ======================================================== */}
        {/* NON-OVERLAPPING 3D FLOATING PLATFORM CARDS */}
        {/* ======================================================== */}

        {/* Card 1: Instagram Captions (Top Left) */}
        <motion.div
          animate={{ y: [-8, 8, -8], rotateZ: [-2, 2, -2] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1 left-0 sm:left-2 z-30"
          style={{ transform: "translateZ(70px)" }}
        >
          <Link
            href="/instagram-captions"
            className="group block p-2.5 sm:p-3.5 rounded-2xl sm:rounded-3xl bg-white/95 dark:bg-zinc-900/95 border-2 border-white/90 dark:border-zinc-700/90 shadow-[0_16px_30px_-8px_rgba(244,63,94,0.25),inset_0_2px_4px_rgba(255,255,255,0.9)] backdrop-blur-md hover:scale-110 transition-all text-center min-w-[76px] sm:min-w-[90px]"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-xl sm:rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 shadow-[0_6px_16px_rgba(244,63,94,0.4)] group-hover:rotate-6 transition-transform flex items-center justify-center text-white">
              <InstagramIcon size={22} />
            </div>
            <div className="mt-1.5 space-y-0.5">
              <p className="text-[11px] sm:text-xs font-extrabold text-zinc-900 dark:text-white leading-tight">Instagram</p>
              <p className="text-[9px] sm:text-[10px] font-semibold text-zinc-400">Captions</p>
            </div>
          </Link>
        </motion.div>

        {/* Card 2: YouTube Titles (Top Right) */}
        <motion.div
          animate={{ y: [8, -8, 8], rotateZ: [2, -2, 2] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          className="absolute top-1 right-0 sm:right-2 z-30"
          style={{ transform: "translateZ(80px)" }}
        >
          <Link
            href="/youtube-captions"
            className="group block p-2.5 sm:p-3.5 rounded-2xl sm:rounded-3xl bg-white/95 dark:bg-zinc-900/95 border-2 border-white/90 dark:border-zinc-700/90 shadow-[0_16px_30px_-8px_rgba(239,68,68,0.25),inset_0_2px_4px_rgba(255,255,255,0.9)] backdrop-blur-md hover:scale-110 transition-all text-center min-w-[76px] sm:min-w-[90px]"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-xl sm:rounded-2xl bg-gradient-to-tr from-red-600 to-rose-500 shadow-[0_6px_16px_rgba(239,68,68,0.4)] group-hover:-rotate-6 transition-transform flex items-center justify-center text-white">
              <YoutubeIcon size={22} />
            </div>
            <div className="mt-1.5 space-y-0.5">
              <p className="text-[11px] sm:text-xs font-extrabold text-zinc-900 dark:text-white leading-tight">YouTube</p>
              <p className="text-[9px] sm:text-[10px] font-semibold text-zinc-400">Titles</p>
            </div>
          </Link>
        </motion.div>

        {/* Card 3: TikTok FYP (Middle Right - visible on md/lg screens) */}
        <motion.div
          animate={{ y: [-7, 7, -7], rotateZ: [-1.5, 1.5, -1.5] }}
          transition={{ duration: 4.3, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
          className="hidden md:block absolute top-1/2 -translate-y-1/2 -right-4 z-25"
          style={{ transform: "translateZ(65px)" }}
        >
          <Link
            href="/tiktok-captions"
            className="group block p-3 rounded-3xl bg-white/95 dark:bg-zinc-900/95 border-2 border-white/90 dark:border-zinc-700/90 shadow-[0_16px_30px_-8px_rgba(6,182,212,0.25)] backdrop-blur-md hover:scale-110 transition-all text-center min-w-[85px]"
          >
            <div className="w-11 h-11 mx-auto rounded-2xl bg-zinc-950 border border-zinc-700 shadow-[0_6px_16px_rgba(0,0,0,0.5)] group-hover:-rotate-6 transition-transform flex items-center justify-center text-white">
              <TikTokIcon size={22} />
            </div>
            <div className="mt-1.5 space-y-0.5">
              <p className="text-xs font-extrabold text-zinc-900 dark:text-white leading-tight">TikTok</p>
              <p className="text-[10px] font-semibold text-zinc-400">FYP Hooks</p>
            </div>
          </Link>
        </motion.div>

        {/* Card 4: AI Hashtags (Middle Left - visible on md/lg screens) */}
        <motion.div
          animate={{ y: [7, -7, 7], rotateZ: [1.5, -1.5, 1.5] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          className="hidden md:block absolute top-1/2 -translate-y-1/2 -left-4 z-25"
          style={{ transform: "translateZ(60px)" }}
        >
          <Link
            href="/ai-quotes-generator"
            className="group block p-3 rounded-3xl bg-white/95 dark:bg-zinc-900/95 border-2 border-white/90 dark:border-zinc-700/90 shadow-[0_16px_30px_-8px_rgba(16,185,129,0.25)] backdrop-blur-md hover:scale-110 transition-all text-center min-w-[85px]"
          >
            <div className="w-11 h-11 mx-auto rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 shadow-[0_6px_16px_rgba(16,185,129,0.4)] group-hover:rotate-6 transition-transform flex items-center justify-center text-white">
              <Hash className="w-6 h-6" />
            </div>
            <div className="mt-1.5 space-y-0.5">
              <p className="text-xs font-extrabold text-zinc-900 dark:text-white leading-tight">Hashtags</p>
              <p className="text-[10px] font-semibold text-zinc-400">AI Viral</p>
            </div>
          </Link>
        </motion.div>

        {/* Card 5: WhatsApp Status (Bottom Left - Replaces irrelevant Analytics!) */}
        <motion.div
          animate={{ y: [-7, 7, -7], rotateZ: [-2, 2, -2] }}
          transition={{ duration: 5.1, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
          className="absolute bottom-8 left-0 sm:left-2 z-30"
          style={{ transform: "translateZ(75px)" }}
        >
          <Link
            href="/whatsapp-status"
            className="group block p-2.5 sm:p-3.5 rounded-2xl sm:rounded-3xl bg-white/95 dark:bg-zinc-900/95 border-2 border-white/90 dark:border-zinc-700/90 shadow-[0_16px_30px_-8px_rgba(37,211,102,0.25),inset_0_2px_4px_rgba(255,255,255,0.9)] backdrop-blur-md hover:scale-110 transition-all text-center min-w-[76px] sm:min-w-[90px]"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-xl sm:rounded-2xl bg-gradient-to-tr from-emerald-500 to-green-600 shadow-[0_6px_16px_rgba(37,211,102,0.4)] group-hover:rotate-6 transition-transform flex items-center justify-center text-white">
              <WhatsAppIcon size={22} />
            </div>
            <div className="mt-1.5 space-y-0.5">
              <p className="text-[11px] sm:text-xs font-extrabold text-zinc-900 dark:text-white leading-tight">WhatsApp</p>
              <p className="text-[9px] sm:text-[10px] font-semibold text-zinc-400">Status</p>
            </div>
          </Link>
        </motion.div>

        {/* Card 6: AI Bio Generator (Bottom Right) */}
        <motion.div
          animate={{ y: [7, -7, 7], rotateZ: [2, -2, 2] }}
          transition={{ duration: 4.7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute bottom-8 right-0 sm:right-2 z-30"
          style={{ transform: "translateZ(85px)" }}
        >
          <Link
            href="/ai-bio-generator"
            className="group block p-2.5 sm:p-3.5 rounded-2xl sm:rounded-3xl bg-white/95 dark:bg-zinc-900/95 border-2 border-white/90 dark:border-zinc-700/90 shadow-[0_16px_30px_-8px_rgba(236,72,153,0.25),inset_0_2px_4px_rgba(255,255,255,0.9)] backdrop-blur-md hover:scale-110 transition-all text-center min-w-[76px] sm:min-w-[90px]"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-xl sm:rounded-2xl bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 shadow-[0_6px_16px_rgba(236,72,153,0.4)] group-hover:-rotate-6 transition-transform flex items-center justify-center text-white font-black text-xl sm:text-2xl">
              Aa
            </div>
            <div className="mt-1.5 space-y-0.5">
              <p className="text-[11px] sm:text-xs font-extrabold text-zinc-900 dark:text-white leading-tight">AI Bio</p>
              <p className="text-[9px] sm:text-[10px] font-semibold text-zinc-400">Generator</p>
            </div>
          </Link>
        </motion.div>
      </motion.div>

      {/* Smooth Bottom Gradient Shadow Mask */}
      <div className="absolute -bottom-6 inset-x-0 h-12 bg-gradient-to-t from-white dark:from-black to-transparent pointer-events-none" />
    </div>
  );
}
