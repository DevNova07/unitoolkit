"use client";

import { ShieldCheck, CheckCircle2, Award, Users, RefreshCw } from "lucide-react";

export function TrustSection() {
  const trustSignals = [
    {
      icon: Award,
      title: "Hand-Curated by Experts",
      desc: "Every caption, shayari, and name is reviewed by native cultural & linguistic specialists for authenticity.",
    },
    {
      icon: ShieldCheck,
      title: "100% Free & No Login",
      desc: "Zero paywalls, no email collection, and no subscriptions. Designed for instant creator workflow.",
    },
    {
      icon: RefreshCw,
      title: "Updated Weekly for 2026",
      desc: "Hashtag volumes and trending hooks are regularly synced with current Instagram & TikTok algorithm shifts.",
    },
    {
      icon: Users,
      title: "Loved by 500K+ Creators",
      desc: "Powering daily captions, status updates, and profile bios across India, USA, UK, and 40+ countries.",
    },
  ];

  return (
    <section className="w-full text-left space-y-6">
      <div className="p-6 sm:p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/90 dark:border-zinc-800/90 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-200 dark:border-zinc-800 pb-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Google Helpful Content & E-E-A-T Standards</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
              Why Creators & Marketers Trust UniToolkit
            </h3>
          </div>
          <span className="text-xs text-zinc-500 font-medium">Verified Editorial Policy</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {trustSignals.map((sig, idx) => {
            const Icon = sig.icon;
            return (
              <div key={idx} className="space-y-2">
                <div className="w-9 h-9 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-800/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                  <Icon className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-zinc-900 dark:text-white">{sig.title}</h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">{sig.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
