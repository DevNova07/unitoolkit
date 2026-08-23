"use client";

import Link from "next/link";
import { ShieldCheck, Award, CheckCircle2, UserCheck, ExternalLink } from "lucide-react";

interface AuthorBioBoxProps {
  categoryType?: string;
  topic?: string;
}

export function AuthorBioBox({
  categoryType = "Social Media Growth",
  topic = "Creator Strategy",
}: AuthorBioBoxProps) {
  return (
    <section className="p-6 sm:p-7 rounded-3xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 space-y-4 text-left">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          {/* Avatar Icon */}
          <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white font-black text-base shadow-md shrink-0">
            AS
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="text-base font-bold text-zinc-900 dark:text-white">
                Aanya Sharma & UniToolkit Editorial Team
              </h3>
              <CheckCircle2 className="w-4 h-4 text-indigo-500 fill-indigo-50 dark:fill-indigo-950" />
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Senior Social Media Strategist (6+ Yrs Exp) & Cultural Linguistics Specialist
            </p>
          </div>
        </div>

        {/* E-E-A-T Trust Badge & Link */}
        <div className="flex items-center gap-2">
          <Link
            href="/editorial-policy"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-400 text-xs font-bold shrink-0 hover:bg-indigo-100 transition-colors"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Editorial Standards</span>
            <ExternalLink className="w-2.5 h-2.5 opacity-70" />
          </Link>
        </div>
      </div>

      <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
        Our content is crafted and reviewed according to strict linguistic lexicons, authentic cultural records, and real-time social algorithm analytics. Every caption, shayari, and status entry undergoes human editorial verification for grammatical accuracy, cultural nuance, and dwell-time performance.
      </p>

      {/* Trust Checklist */}
      <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 border-t border-zinc-200/80 dark:border-zinc-800/80 text-xs font-semibold text-zinc-600 dark:text-zinc-400">
        <span className="flex items-center gap-1.5">
          <Award className="w-3.5 h-3.5 text-indigo-500" />
          <span>Linguistic Root Verified</span>
        </span>
        <span className="flex items-center gap-1.5">
          <UserCheck className="w-3.5 h-3.5 text-indigo-500" />
          <span>Peer-Reviewed by Senior Editors</span>
        </span>
        <span className="flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500" />
          <span>100% Free from Automated Duplicate Spam</span>
        </span>
      </div>
    </section>
  );
}
