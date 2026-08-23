import { useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { InstagramIcon, YoutubeIcon, TikTokIcon, WhatsAppIcon } from "@/components/common/BrandIcons";
import { Hash, TrendingUp } from "lucide-react";

export function Hero3DVisual() {
  const containerRef = useRef<HTMLDivElement>(null);

  // High-precision fluid spring physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 22, stiffness: 140, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [14, -14]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-14, 14]), springConfig);

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
      className="relative w-full max-w-[320px] xs:max-w-[360px] sm:max-w-[440px] lg:max-w-[500px] aspect-square mx-auto flex items-center justify-center select-none py-2"
      style={{ perspective: 1400 }}
    >
      {/* Soft Ambient Background Aura */}
      <div className="absolute inset-0 bg-radial from-purple-400/20 via-indigo-400/10 to-transparent blur-3xl -z-10 rounded-full animate-pulse" />

      {/* Main 3D Stage with Real-Time Parallax Tilt */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full h-full flex items-center justify-center"
      >
        {/* Subtle Orbit Ring */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-50 dark:opacity-30"
          style={{ transform: "translateZ(-20px)" }}
          viewBox="0 0 520 520"
        >
          <ellipse
            cx="260"
            cy="250"
            rx="225"
            ry="185"
            fill="none"
            stroke="url(#orbitWireGrad)"
            strokeWidth="2"
            strokeDasharray="6 6"
          />
          <defs>
            <linearGradient id="orbitWireGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#6366f1" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.6" />
            </linearGradient>
          </defs>
        </svg>

        {/* 3D Floating Sparkling Stars */}
        <motion.div
          animate={{ y: [-6, 6, -6], rotate: [0, 15, -15, 0], scale: [0.95, 1.15, 0.95] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-12 left-10 z-10 text-purple-400 dark:text-purple-300 text-lg drop-shadow-[0_0_8px_rgba(168,85,247,0.7)] pointer-events-none"
          style={{ transform: "translateZ(40px)" }}
        >
          ✦
        </motion.div>

        <motion.div
          animate={{ y: [6, -6, 6], rotate: [0, -20, 20, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-10 right-14 z-10 text-indigo-400 dark:text-indigo-300 text-xl drop-shadow-[0_0_10px_rgba(99,102,241,0.7)] pointer-events-none"
          style={{ transform: "translateZ(50px)" }}
        >
          ✦
        </motion.div>

        {/* ======================================================== */}
        {/* 3D MULTI-TIER CLAY PODIUM (GROUNDED AT THE VERY BOTTOM) */}
        {/* ======================================================== */}
        <div
          className="absolute -bottom-1 sm:bottom-0 z-10 flex flex-col items-center pointer-events-none"
          style={{ transform: "translateZ(20px)" }}
        >
          {/* Upper Tier Cylinder Disc */}
          <div className="relative w-40 sm:w-52 h-5 sm:h-6 rounded-full bg-gradient-to-b from-white via-slate-100 to-slate-200 dark:from-zinc-800 dark:via-zinc-850 dark:to-zinc-900 border-t-2 border-white dark:border-zinc-700 shadow-[0_6px_14px_rgba(0,0,0,0.08),inset_0_2px_4px_rgba(255,255,255,1)] dark:shadow-[0_6px_14px_rgba(0,0,0,0.4)] flex items-center justify-center">
            {/* Top Surface Specular Highlight */}
            <div className="w-32 sm:w-44 h-1.5 rounded-full bg-white/80 dark:bg-zinc-700/60 blur-[1px]" />
          </div>

          {/* Glowing Purple Inset Groove */}
          <div className="w-44 sm:w-58 h-2 sm:h-2.5 -mt-1 rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.8),inset_0_1px_2px_rgba(255,255,255,0.7)]" />

          {/* Lower Wider Tier Cylinder Disc */}
          <div className="w-50 sm:w-66 h-6 sm:h-7 -mt-1 rounded-full bg-gradient-to-b from-slate-100 via-white to-slate-200 dark:from-zinc-850 dark:via-zinc-900 dark:to-zinc-950 border-t-2 border-white dark:border-zinc-700 shadow-[0_16px_30px_rgba(0,0,0,0.15),inset_0_2px_4px_rgba(255,255,255,0.9)] dark:shadow-[0_16px_30px_rgba(0,0,0,0.6)]" />

          {/* Ground Ambient Drop Shadow & Purple Glow */}
          <div className="w-56 sm:w-72 h-4 rounded-full bg-purple-500/20 dark:bg-purple-950/60 blur-lg -mt-1.5" />
        </div>

        {/* ======================================================== */}
        {/* 3D HEXAGONAL CENTERPIECE SHIELD (RESTING ON PODIUM) */}
        {/* ======================================================== */}
        <motion.div
          animate={{
            y: [-3, 3, -3],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative z-20 mt-1 mb-3 sm:mb-4 w-34 h-38 sm:w-42 sm:h-46 flex items-center justify-center filter drop-shadow-[0_18px_30px_rgba(124,58,237,0.25)] transition-transform duration-300 hover:scale-105"
          style={{ transform: "translateZ(55px)" }}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Hexagon Clay Bevel SVG */}
            <svg viewBox="0 0 200 230" className="w-full h-full drop-shadow-md">
              {/* Outer Clay Bevel */}
              <polygon
                points="100,6 194,59 194,171 100,224 6,171 6,59"
                fill="url(#outerClayHex)"
                stroke="#ffffff"
                strokeWidth="3.5"
                strokeLinejoin="round"
              />
              {/* Inner Inset Clay Surface */}
              <polygon
                points="100,18 180,64 180,166 100,212 20,166 20,64"
                fill="url(#innerClayHex)"
                stroke="#e9d5ff"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient id="outerClayHex" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="50%" stopColor="#f8fafc" />
                  <stop offset="100%" stopColor="#e2e8f0" />
                </linearGradient>
                <linearGradient id="innerClayHex" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#f5f3ff" />
                </linearGradient>
              </defs>
            </svg>

            {/* Embossed 3D Glossy "U" */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex items-center justify-center">
                {/* 3D Deep Shadow */}
                <span className="text-6xl sm:text-7xl font-black text-purple-950/20 dark:text-black/40 absolute top-2 left-0.5 select-none filter blur-[1px]">
                  U
                </span>
                {/* 3D Gradient Body */}
                <span className="text-6xl sm:text-7xl font-black bg-gradient-to-b from-purple-500 via-indigo-600 to-purple-800 bg-clip-text text-transparent drop-shadow-[0_8px_16px_rgba(124,58,237,0.5)] select-none">
                  U
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ======================================================== */}
        {/* 3D FLOATING CLAY PLATFORM CARDS (EXACT REFERENCE LAYOUT) */}
        {/* ======================================================== */}

        {/* Card 1: Instagram Captions (Top Left) */}
        <motion.div
          animate={{ y: [-6, 6, -6], rotateZ: [-1.5, 1.5, -1.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1 left-0 sm:left-1 z-30"
          style={{ transform: "translateZ(75px)" }}
        >
          <Link
            href="/instagram-captions"
            className="group block p-2 sm:p-3 rounded-2xl sm:rounded-3xl bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 shadow-[0_14px_28px_rgba(0,0,0,0.08),inset_0_2px_4px_rgba(255,255,255,1)] dark:shadow-[0_14px_28px_rgba(0,0,0,0.5)] hover:scale-108 transition-all text-center min-w-[78px] sm:min-w-[92px]"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-xl sm:rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 shadow-[0_6px_14px_rgba(244,63,94,0.35)] group-hover:rotate-6 transition-transform flex items-center justify-center text-white">
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
          animate={{ y: [6, -6, 6], rotateZ: [1.5, -1.5, 1.5] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          className="absolute top-1 right-0 sm:right-1 z-30"
          style={{ transform: "translateZ(80px)" }}
        >
          <Link
            href="/youtube-captions"
            className="group block p-2 sm:p-3 rounded-2xl sm:rounded-3xl bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 shadow-[0_14px_28px_rgba(0,0,0,0.08),inset_0_2px_4px_rgba(255,255,255,1)] dark:shadow-[0_14px_28px_rgba(0,0,0,0.5)] hover:scale-108 transition-all text-center min-w-[78px] sm:min-w-[92px]"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-xl sm:rounded-2xl bg-gradient-to-tr from-red-600 to-rose-500 shadow-[0_6px_14px_rgba(239,68,68,0.35)] group-hover:-rotate-6 transition-transform flex items-center justify-center text-white">
              <YoutubeIcon size={22} />
            </div>
            <div className="mt-1.5 space-y-0.5">
              <p className="text-[11px] sm:text-xs font-extrabold text-zinc-900 dark:text-white leading-tight">YouTube</p>
              <p className="text-[9px] sm:text-[10px] font-semibold text-zinc-400">Titles</p>
            </div>
          </Link>
        </motion.div>

        {/* Card 3: Hashtags Generator (Middle Left - Clay 3D) */}
        <motion.div
          animate={{ y: [5, -5, 5], rotateZ: [1, -1, 1] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          className="hidden md:block absolute top-[30%] -left-3 lg:-left-4 z-25"
          style={{ transform: "translateZ(65px)" }}
        >
          <Link
            href="/hashtags"
            className="group block p-2.5 sm:p-3 rounded-2xl sm:rounded-3xl bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 shadow-[0_14px_28px_rgba(0,0,0,0.08),inset_0_2px_4px_rgba(255,255,255,1)] dark:shadow-[0_14px_28px_rgba(0,0,0,0.5)] hover:scale-108 transition-all text-center min-w-[82px]"
          >
            <div className="w-10 h-10 mx-auto rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 shadow-[0_6px_14px_rgba(16,185,129,0.35)] group-hover:rotate-6 transition-transform flex items-center justify-center text-white">
              <Hash className="w-5 h-5 font-black" />
            </div>
            <div className="mt-1.5 space-y-0.5">
              <p className="text-xs font-extrabold text-zinc-900 dark:text-white leading-tight">Hashtags</p>
              <p className="text-[10px] font-semibold text-zinc-400">Generator</p>
            </div>
          </Link>
        </motion.div>

        {/* Card 4: TikTok Scripts (Middle Right - Clay 3D) */}
        <motion.div
          animate={{ y: [-5, 5, -5], rotateZ: [-1, 1, -1] }}
          transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          className="hidden md:block absolute top-[30%] -right-3 lg:-right-4 z-25"
          style={{ transform: "translateZ(70px)" }}
        >
          <Link
            href="/tiktok-captions"
            className="group block p-2.5 sm:p-3 rounded-2xl sm:rounded-3xl bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 shadow-[0_14px_28px_rgba(0,0,0,0.08),inset_0_2px_4px_rgba(255,255,255,1)] dark:shadow-[0_14px_28px_rgba(0,0,0,0.5)] hover:scale-108 transition-all text-center min-w-[82px]"
          >
            <div className="w-10 h-10 mx-auto rounded-xl bg-zinc-950 border border-zinc-700 shadow-[0_6px_14px_rgba(0,0,0,0.4)] group-hover:-rotate-6 transition-transform flex items-center justify-center text-white">
              <TikTokIcon size={20} />
            </div>
            <div className="mt-1.5 space-y-0.5">
              <p className="text-xs font-extrabold text-zinc-900 dark:text-white leading-tight">TikTok</p>
              <p className="text-[10px] font-semibold text-zinc-400">Scripts</p>
            </div>
          </Link>
        </motion.div>

        {/* Card 5: Analytics Insights (Bottom Left - Lifted Higher with zero collision) */}
        <motion.div
          animate={{ y: [-5, 5, -5], rotateZ: [-1.5, 1.5, -1.5] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
          className="absolute bottom-10 sm:bottom-14 left-0 sm:left-1 z-30"
          style={{ transform: "translateZ(85px)" }}
        >
          <Link
            href="/whatsapp-status"
            className="group block p-2 sm:p-3 rounded-2xl sm:rounded-3xl bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 shadow-[0_16px_32px_rgba(99,102,241,0.18),inset_0_2px_4px_rgba(255,255,255,1)] dark:shadow-[0_16px_32px_rgba(0,0,0,0.6)] hover:scale-108 transition-all text-center min-w-[78px] sm:min-w-[92px]"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-xl sm:rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-600 shadow-[0_6px_14px_rgba(99,102,241,0.35)] group-hover:rotate-6 transition-transform flex items-center justify-center text-white">
              <TrendingUp size={22} />
            </div>
            <div className="mt-1.5 space-y-0.5">
              <p className="text-[11px] sm:text-xs font-extrabold text-zinc-900 dark:text-white leading-tight">Analytics</p>
              <p className="text-[9px] sm:text-[10px] font-semibold text-zinc-400">Insights</p>
            </div>
          </Link>
        </motion.div>

        {/* Card 6: AI Bio Generator (Bottom Right - Lifted Higher with zero collision) */}
        <motion.div
          animate={{ y: [5, -5, 5], rotateZ: [1.5, -1.5, 1.5] }}
          transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
          className="absolute bottom-10 sm:bottom-14 right-0 sm:right-1 z-30"
          style={{ transform: "translateZ(90px)" }}
        >
          <Link
            href="/ai-bio-generator"
            className="group block p-2 sm:p-3 rounded-2xl sm:rounded-3xl bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 shadow-[0_16px_32px_rgba(59,130,246,0.18),inset_0_2px_4px_rgba(255,255,255,1)] dark:shadow-[0_16px_32px_rgba(0,0,0,0.6)] hover:scale-108 transition-all text-center min-w-[78px] sm:min-w-[92px]"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-xl sm:rounded-2xl bg-gradient-to-tr from-blue-500 to-indigo-600 shadow-[0_6px_14px_rgba(59,130,246,0.35)] group-hover:-rotate-6 transition-transform flex items-center justify-center text-white font-black text-lg sm:text-xl">
              Aa
            </div>
            <div className="mt-1.5 space-y-0.5">
              <p className="text-[11px] sm:text-xs font-extrabold text-zinc-900 dark:text-white leading-tight">AI Bio</p>
              <p className="text-[9px] sm:text-[10px] font-semibold text-zinc-400">Generator</p>
            </div>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

