import { Metadata } from "next";
import { HeroSection } from "@/components/hero/HeroSection";
import { CoreContentSection } from "@/components/home/CoreContentSection";
import { AiStudiosSection } from "@/components/home/AiStudiosSection";
import { HashtagFeatureCard } from "@/components/home/HashtagFeatureCard";
import { NamesFeatureCard } from "@/components/home/NamesFeatureCard";
import { PlatformsClusterSection } from "@/components/home/PlatformsClusterSection";
import { TopicExplorerSection } from "@/components/home/TopicExplorerSection";
import { TrustSection } from "@/components/home/TrustSection";
import { FAQSection } from "@/components/common/FAQSection";
import { CTASection } from "@/components/common/CTASection";
import { JsonLdSchema } from "@/components/common/JsonLdSchema";

export const metadata: Metadata = {
  title: "UniToolkit — Free Social Media Captions, Hashtags, Shayari, Status, Bios & Baby Names [2026]",
  description:
    "Instant AI caption generator, 120-tag hashtag ladders, authentic Hindi shayari, daily WhatsApp status, VIP bios, and 10,000+ baby names across 10 major platforms.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "UniToolkit — Ultimate Creator Suite & AI Studios [2026]",
    description: "Free social media creator tools, captions vault, shayari, VIP bios, hashtags, and baby names.",
    url: "https://unitoolkit.com",
    type: "website",
  },
};

export default function HomePage() {
  const homeFaqs = [
    {
      question: "What is UniToolkit and what tools are available?",
      answer:
        "UniToolkit is an all-in-one social media content suite featuring 6 core ready vaults (Captions, Hashtags, Shayari, WhatsApp Status, VIP Bios, Quotes), 6 ChatGPT-powered AI generation studios, a 10,000+ baby names directory, and tailored toolkits across 10 social networks.",
    },
    {
      question: "How do the 4-tier Hashtag Ladders help boost social reach?",
      answer:
        "Our hashtag ladders structure tags into 4 competition levels: Mega (50M+ posts), High Popularity (5M-20M), Medium Niche (500K-2M), and Low Competition (50K-200K). This balanced combination helps new posts rank in the 'Top Posts' tab without getting lost in high-volume spam feeds.",
    },
    {
      question: "Are all AI generation tools and caption libraries 100% free?",
      answer:
        "Yes! 100% of the tools, AI studios, shayari vaults, and naming utilities on UniToolkit are completely free to use without requiring any account sign-up, email, or subscription.",
    },
    {
      question: "Can I generate and copy content in Hindi, Hinglish and English?",
      answer:
        "Yes! UniToolkit natively supports English, Romanized Hinglish, and authentic Hindi (देवनागरी) across all categories, shayari, and WhatsApp status generators.",
    },
    {
      question: "Which 10 social media platforms are supported on UniToolkit?",
      answer:
        "UniToolkit provides tailored formatting and character-optimized tools for Instagram, YouTube, TikTok, WhatsApp, Facebook, LinkedIn, Twitter / X, Threads, Pinterest, and Snapchat.",
    },
    {
      question: "How does the 1-Click Copy and WhatsApp sharing work?",
      answer:
        "Every caption, hashtag set, shayari, status, and quote includes an instant 1-Click Copy button with preserved emojis, plus a direct WhatsApp share button that opens your WhatsApp status or chats immediately.",
    },
  ];

  return (
    <div className="w-full space-y-16 sm:space-y-20 pb-16">
      {/* Google Structured Data (JSON-LD) */}
      <JsonLdSchema
        type="WebSite"
        title="UniToolkit Social Media Creator Suite"
        description="Free AI caption generator, hashtags ladders, Hindi shayari, WhatsApp status, and baby names directory."
        url="https://unitoolkit.com"
      />
      <JsonLdSchema type="FAQPage" faqs={homeFaqs} />

      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. The 6 Flagship Creator Vaults */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CoreContentSection />
      </section>

      {/* 3. 6 Dedicated AI Generation Studios */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AiStudiosSection />
      </section>

      {/* 4. Trending Hashtags Showcase Hub */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HashtagFeatureCard />
      </section>

      {/* 5. Global Names Showcase Hub (Distinct & Standalone) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NamesFeatureCard />
      </section>

      {/* 6. The 10 Dedicated Platform Hubs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PlatformsClusterSection />
      </section>

      {/* 7. Popular Search Moods (Sleek, High-Density Category Explorer) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TopicExplorerSection />
      </section>

      {/* 8. Google E-E-A-T & Trust Signal Standards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TrustSection />
      </section>

      {/* 9. SEO FAQ Section (High Google Schema ROI) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FAQSection
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about using UniToolkit for your social media content creation."
          faqs={homeFaqs}
        />
      </section>

      {/* 10. Clean Final CTA Banner */}
      <CTASection />
    </div>
  );
}
