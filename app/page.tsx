import { HeroSection } from "@/components/hero/HeroSection";
import { CoreContentSection } from "@/components/home/CoreContentSection";
import { PlatformsClusterSection } from "@/components/home/PlatformsClusterSection";
import { TopicExplorerSection } from "@/components/home/TopicExplorerSection";
import { NamesFeatureCard } from "@/components/home/NamesFeatureCard";
import { FAQSection } from "@/components/common/FAQSection";
import { CTASection } from "@/components/common/CTASection";

export default function HomePage() {
  const homeFaqs = [
    {
      question: "What is UniToolkit?",
      answer:
        "UniToolkit is a powerful social media creator suite featuring 5 core engines: Shayari, Status, Bio, Quotes, and Captions across 10 major platforms.",
    },
    {
      question: "Which 10 social media platforms are supported?",
      answer:
        "UniToolkit natively supports Instagram, YouTube, TikTok, WhatsApp, Facebook, LinkedIn, X (Twitter), Threads, Pinterest, and Snapchat with platform-specific tools, hooks, and character-optimized formatting.",
    },
    {
      question: "Are all 5 tools and libraries really free?",
      answer:
        "Yes! 100% of the tools, AI presets, caption libraries, shayari, and status utilities on UniToolkit are completely free to use without requiring any account sign-up, email, or subscription.",
    },
    {
      question: "Can I generate and copy content in Hindi, Hinglish and English?",
      answer:
        "Yes! UniToolkit natively supports English, Romanized Hinglish, and authentic Hindi (देवनागरी) across all categories, shayari, and WhatsApp status generators.",
    },
    {
      question: "How does the 1-Click Copy and WhatsApp sharing work?",
      answer:
        "Every caption, shayari, status, and quote includes an instant 1-Click Copy button with preserved emojis, plus a direct WhatsApp share button that opens your WhatsApp status or chats immediately.",
    },
  ];

  return (
    <div className="w-full space-y-16 sm:space-y-20 pb-16">
      {/* 1. Hero Section (100% UNTOUCHED as per strict requirement) */}
      <HeroSection />

      {/* 2. The 5 Flagship Creator Tools */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CoreContentSection />
      </section>

      {/* 3. Global Names Showcase Hub (Distinct & Standalone) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NamesFeatureCard />
      </section>

      {/* 4. The 10 Dedicated Platform Hubs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PlatformsClusterSection />
      </section>

      {/* 5. Popular Search Moods (Sleek, High-Density Category Explorer) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TopicExplorerSection />
      </section>

      {/* 5. SEO FAQ Section (High Google Schema ROI) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FAQSection
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about using UniToolkit for your social media content creation."
          faqs={homeFaqs}
        />
      </section>

      {/* 6. Clean Final CTA Banner */}
      <CTASection />
    </div>
  );
}
