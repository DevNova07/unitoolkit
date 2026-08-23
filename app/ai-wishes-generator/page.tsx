import { Metadata } from "next";
import { AIWishesGenerator } from "@/components/generator/AIWishesGenerator";
import { FAQSection } from "@/components/common/FAQSection";
import { JsonLdSchema } from "@/components/common/JsonLdSchema";
import { AuthorBioBox } from "@/components/common/AuthorBioBox";
import { TopicClusterSiloCloud } from "@/components/common/TopicClusterSiloCloud";
import { HowToUseGuide } from "@/components/common/HowToUseGuide";

export const metadata: Metadata = {
  title: "AI Wishes Generator (Free) — 150+ Occasion Greetings & Messages",
  description:
    "Generate personalized, heartfelt, and funny wishes for birthdays, weddings, Eid, Diwali, New Year, promotions, and 150+ occasions in 1-click with WhatsApp share.",
  keywords: [
    "ai wishes generator",
    "birthday wishes generator",
    "custom anniversary wishes",
    "festival greetings generator",
    "whatsapp greeting maker",
  ],
  alternates: {
    canonical: "/ai-wishes-generator",
  },
};

const FAQS = [
  {
    question: "How does the AI Wishes Generator personalize messages?",
    answer:
      "Select your occasion (150+ presets), enter the recipient's name or relationship (e.g. Mom, Bestie, Boss), choose a tone (Emotional, Funny, Poetic), and our AI writes 4 unique tailored wishes in seconds.",
  },
  {
    question: "Can I download generated wishes as story cards for WhatsApp & Instagram?",
    answer:
      "Yes! Click the 🖼️ Photo Card button on any wish to open the visual maker and export high-res 9:16 story cards in 5 aesthetic palettes.",
  },
  {
    question: "Can I generate wishes in Hindi and Hinglish?",
    answer:
      "Yes. Use the language selector to output messages in English, Hindi (Devanagari), or conversational Roman Hinglish.",
  },
  {
    question: "Is this AI Wishes Generator completely free?",
    answer:
      "Yes, 100% free with unlimited generations and zero sign-up required.",
  },
];

export default function AIWishesPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-14">
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
          Free AI Wishes &{" "}
          <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 bg-clip-text text-transparent">
            Greetings Generator
          </span>
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          Personalize meaningful wishes for birthdays, weddings, festivals, and life milestones across 150+ occasions.
        </p>
      </div>

      <AIWishesGenerator />

      <HowToUseGuide
        guideId="ai-wishes-guide"
        categoryName="AI Wishes Generator"
        title="How to Generate, Personalize & Share AI Wishes"
        pageUrl="https://unitoolkit.com/ai-wishes-generator"
      />

      <TopicClusterSiloCloud topic="Wishes & Greetings" contentType="wishes" currentRoute="/ai-wishes-generator" />

      <AuthorBioBox categoryType="AI Tools & Greeting Synthesizers" topic="Personalized Wishes" />

      <section className="pt-6 border-t border-zinc-200 dark:border-zinc-800">
        <FAQSection
          title="Frequently Asked Questions About AI Wishes"
          subtitle="Everything you need to know about tailoring custom wishes."
          faqs={FAQS}
        />
      </section>

      <JsonLdSchema type="FAQPage" faqs={FAQS} />
    </div>
  );
}
