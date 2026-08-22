"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const DEFAULT_FAQS: FAQItem[] = [
  {
    question: "What is an AI caption generator?",
    answer:
      "An AI caption generator is an intelligent tool that uses natural language processing to craft creative, viral, and context-aware captions for your social media posts based on your topic, desired mood, platform guidelines, and tone.",
  },
  {
    question: "Can I generate captions for Instagram, TikTok, and YouTube?",
    answer:
      "Yes! CaptionPro specifically optimizes captions for 10+ platforms including Instagram (Posts, Reels, Stories), TikTok viral hooks, YouTube Shorts, LinkedIn professional posts, Threads, X (Twitter), Pinterest, and WhatsApp status.",
  },
  {
    question: "Can I use the ready-made captions freely?",
    answer:
      "Absolutely. All ready-made and AI-generated captions in our library are 100% free to copy, customize, and publish across your personal and commercial social media accounts without attribution.",
  },
  {
    question: "Does the AI support different tones and styles?",
    answer:
      "Yes. You can customize your results across 10 styles (Aesthetic, Viral, Savage, Funny, Minimal, Romantic, Inspirational, Professional, Emotional, Casual) and 7 distinct tones (Confident, Friendly, Funny, Emotional, Bold, Professional, Chill).",
  },
  {
    question: "Can I generate captions in Hinglish or Hindi?",
    answer:
      "Yes! In the generator language dropdown, select 'Hinglish' or 'Hindi' to generate authentic Bollywood-inspired, desi attitude, and relatable desi humor captions.",
  },
  {
    question: "Is there any limit to how many captions I can generate?",
    answer:
      "CaptionPro V1 is completely free to use with instant generation. You can generate 5, 8, or 10 captions per click and generate as many times as you like!",
  },
];

interface FAQSectionProps {
  faqs?: FAQItem[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export function FAQSection({
  faqs = DEFAULT_FAQS,
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about CaptionPro and our caption library.",
  className = "",
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className={`w-full max-w-4xl mx-auto ${className}`}>
      <div className="text-center space-y-2 mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs font-semibold text-zinc-700 dark:text-zinc-300">
          <HelpCircle className="w-3.5 h-3.5 text-indigo-500" />
          <span>Got Questions?</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
          {title}
        </h2>
        <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 max-w-lg mx-auto">
          {subtitle}
        </p>
      </div>

      <div className="space-y-3 text-left">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800/80 overflow-hidden transition-all shadow-2xs"
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-zinc-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                aria-expanded={isOpen}
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 text-zinc-400 shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-indigo-600 dark:text-indigo-400" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed border-t border-zinc-100 dark:border-zinc-900 pt-3.5 animate-in fade-in-50 duration-150">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
