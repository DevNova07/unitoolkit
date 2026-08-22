"use client";

import { ShieldCheck, Award, CheckCircle2, UserCheck } from "lucide-react";

interface AuthorBioBoxProps {
  categoryType?: string;
  topic?: string;
}

export function AuthorBioBox({ categoryType = "Names & Cultural Content", topic = "UniToolkit Editorial Team" }: AuthorBioBoxProps) {
  return (
    <section className="p-6 sm:p-7 rounded-3xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 space-y-4 text-left">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          {/* Avatar Icon */}
          <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-black text-lg shadow-md shrink-0">
            UT
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="text-base font-bold text-zinc-900 dark:text-white">
                UniToolkit Editorial & Research Team
              </h3>
              <CheckCircle2 className="w-4 h-4 text-indigo-500 fill-indigo-50 dark:fill-indigo-950" />
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Curated & Fact-Checked by Cultural Specialists • Updated for 2026
            </p>
          </div>
        </div>

        {/* E-E-A-T Trust Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 text-xs font-bold shrink-0">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>E-E-A-T Verified</span>
        </div>
      </div>

      <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
        Our content is meticulously compiled using verified linguistic lexicons, authentic cultural records, and real-time social media trend analytics. Every entry undergoes quality reviews for grammatical accuracy, cultural sensitivity, and phonetic clarity.
      </p>

      {/* Trust Checklist */}
      <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 border-t border-zinc-200/80 dark:border-zinc-800/80 text-xs font-semibold text-zinc-600 dark:text-zinc-400">
        <span className="flex items-center gap-1.5">
          <Award className="w-3.5 h-3.5 text-indigo-500" />
          <span>Linguistic Root Verified</span>
        </span>
        <span className="flex items-center gap-1.5">
          <UserCheck className="w-3.5 h-3.5 text-indigo-500" />
          <span>Peer-Reviewed Methodology</span>
        </span>
        <span className="flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500" />
          <span>Free from Automated Duplicate Spam</span>
        </span>
      </div>
    </section>
  );
}
