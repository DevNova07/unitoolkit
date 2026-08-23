import { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlueprintPageTemplate } from "@/components/seo/BlueprintPageTemplate";
import {
  ALL_PLATFORM_BLUEPRINTS,
  getMasterSeoPageByRoute,
  MasterSeoPage,
} from "@/data/masterSeo300Data";
import { LONG_TAIL_45_MAP } from "@/data/master300Architecture";

export function createPlatformStaticParams(platformId: string, contentType: string) {
  const key = `${platformId}-${contentType}`;
  const subs = LONG_TAIL_45_MAP[key] || [];
  return subs.map((sub) => ({ subslug: sub }));
}

export function createPlatformMetadata(
  platformId: string,
  contentType: string,
  subslug?: string
): Metadata {
  const plat = ALL_PLATFORM_BLUEPRINTS.find((p) => p.id === platformId);
  const platName = plat ? plat.name : platformId;

  if (!subslug) {
    // Hub Page
    return {
      title: `${platName} ${capitalize(contentType)} [2026] — Best Collection`,
      description: `Explore the best ${platName} ${contentType} in Hindi & English. 1-click copy, attitude, love, sad, and funny lines. Updated 2026.`,
      alternates: {
        canonical: `/${platformId}-${contentType}`,
      },
      openGraph: {
        title: `${platName} ${capitalize(contentType)} [2026] | Unitoolkit`,
        description: `Explore the best ${platName} ${contentType} in Hindi & English. 1-click copy.`,
        url: `https://unitoolkit.com/${platformId}-${contentType}`,
      },
    };
  }

  const page = getMasterSeoPageByRoute(`/${platformId}-${contentType}/${subslug}`);
  if (!page) {
    return { title: `${capitalize(subslug)} ${platName} ${capitalize(contentType)} | Unitoolkit` };
  }

  const ogImageUrl = `/api/og?title=${encodeURIComponent(page.h1)}&badge=${encodeURIComponent(page.badge)}&subtitle=${encodeURIComponent(page.metaDescription.slice(0, 100))}`;

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: page.route,
    },
    openGraph: {
      title: `${page.h1} | Unitoolkit`,
      description: page.metaDescription,
      url: `https://unitoolkit.com${page.route}`,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: page.h1,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${page.h1} | Unitoolkit`,
      description: page.metaDescription,
      images: [ogImageUrl],
    },
  };
}

export function renderPlatformPage(
  platformId: string,
  contentType: "captions" | "bio" | "status" | "shayari" | "quotes",
  subslug?: string
) {
  const plat = ALL_PLATFORM_BLUEPRINTS.find((p) => p.id === platformId);
  const platName = plat ? plat.name : platformId;

  if (!subslug) {
    // Render Hub Page for this platform and content type
    const subpages = plat ? plat.subpages.filter((s) => s.type === contentType) : [];
    const hubPage: MasterSeoPage = {
      id: `${platformId}-${contentType}-hub`,
      route: `/${platformId}-${contentType}`,
      section: plat?.section || 2,
      sectionName: `${platName} ${capitalize(contentType)} Hub`,
      platform: platformId,
      contentType: contentType,
      h1: `Best ${platName} ${capitalize(contentType)} [2026] — Hindi & English`,
      h2s: [
        `Trending ${platName} ${capitalize(contentType)} Categories`,
        `How to Use Our ${platName} Collection`,
        `Frequently Asked Questions`,
      ],
      h3s: subpages.slice(0, 4).map((s) => s.title),
      metaTitle: `${platName} ${capitalize(contentType)} [2026] — Best Collection | Unitoolkit`,
      metaDescription: `Explore top ${platName} ${contentType} in Hindi & English with 1-click copy and instant AI customization.`,
      primaryKeyword: `${platName.toLowerCase()} ${contentType}`,
      secondaryKeywords: [
        `best ${platName.toLowerCase()} ${contentType}`,
        `${platName.toLowerCase()} ${contentType} hindi`,
        `${platName.toLowerCase()} attitude ${contentType}`,
      ],
      badge: `${platName} ${capitalize(contentType)}`,
      subheading: `Discover thousands of curated ${platName} ${contentType} for every mood, vibe, and audience.`,
      sampleItems:
        subpages.flatMap((s) => s.sampleItems).slice(0, 8) || [
          `Living softly and shining brightly on ${platName}. ✨`,
          `Building my empire in silence. 👑⚡`,
        ],
      faqs: generateComprehensiveFaqs(platformId, contentType, platName),
    };

    const relatedLinks = subpages.map((s) => ({
      label: `${capitalize(s.slug)} ${capitalize(contentType)}`,
      href: `/${platformId}-${contentType}/${s.slug}`,
    }));

    return (
      <BlueprintPageTemplate
        page={hubPage}
        breadcrumbs={[
          { label: "Platforms", href: "/platforms" },
          { label: `${platName} ${capitalize(contentType)}` },
        ]}
        relatedLinks={relatedLinks}
      />
    );
  }

  const page = getMasterSeoPageByRoute(`/${platformId}-${contentType}/${subslug}`);
  if (!page) {
    notFound();
  }

  const allSubpages = plat ? plat.subpages.filter((s) => s.type === contentType) : [];
  const relatedLinks = allSubpages
    .filter((s) => s.slug !== subslug)
    .map((s) => ({
      label: `${capitalize(s.slug)} ${capitalize(contentType)}`,
      href: `/${platformId}-${contentType}/${s.slug}`,
    }));

  return (
    <BlueprintPageTemplate
      page={page}
      breadcrumbs={[
        { label: `${platName} ${capitalize(contentType)}`, href: `/${platformId}-${contentType}` },
        { label: page.badge },
      ]}
      relatedLinks={relatedLinks}
    />
  );
}

export function createTopicMetadata(topic: string, contentType: string): Metadata {
  const capTopic = capitalize(topic);
  const capType = capitalize(contentType);
  return {
    title: `Best ${capTopic} ${capType} [2026] — Hindi & English | Unitoolkit`,
    description: `100+ Best ${capTopic} ${capType} across all platforms (Instagram, WhatsApp, TikTok, Facebook). 1-click copy & instant AI generator. Updated 2026.`,
    alternates: {
      canonical: `/${topic}-${contentType}`,
    },
    openGraph: {
      title: `${capTopic} ${capType} [2026] | Unitoolkit`,
      description: `100+ Best ${capTopic} ${capType} for Instagram, WhatsApp, and social media.`,
      url: `https://unitoolkit.com/${topic}-${contentType}`,
    },
  };
}

export function renderTopicPage(
  topic: string,
  contentType: "captions" | "bio" | "status" | "shayari" | "quotes"
) {
  const capTopic = capitalize(topic);
  const capType = capitalize(contentType);

  const topicPage: MasterSeoPage = {
    id: `${topic}-${contentType}`,
    route: `/${topic}-${contentType}`,
    section: 13,
    sectionName: "Special Topics",
    contentType: contentType,
    subCategory: topic,
    h1: `Best ${capTopic} ${capType} [2026] — All Platforms`,
    h2s: [
      `Top ${capTopic} ${capType} for Instagram & WhatsApp`,
      `${capTopic} ${capType} in Hindi & English`,
      `Short & Viral ${capTopic} Lines`,
      `Frequently Asked Questions`,
    ],
    h3s: [
      `Royal ${capTopic} Tevar`,
      `Aesthetic ${capTopic} Lines`,
      `1-Click Copy Ready`,
    ],
    metaTitle: `Best ${capTopic} ${capType} [2026] — Hindi & English | Unitoolkit`,
    metaDescription: `100+ Best ${capTopic} ${capType} across Instagram, WhatsApp, TikTok, and Facebook. Copy-paste instantly! Updated 2026.`,
    primaryKeyword: `${topic} ${contentType}`,
    secondaryKeywords: [
      `best ${topic} ${contentType}`,
      `${topic} ${contentType} in hindi`,
      `${topic} ${contentType} for instagram`,
    ],
    badge: `👑 ${capTopic} ${capType}`,
    subheading: `The ultimate master vault of ${topic} ${contentType} curated for all social media platforms with 1-click copy.`,
    sampleItems: [
      `Silence is the best answer to those who don't value your words. 👑⚡`,
      `खामोशी से अपनी पहचान बनाओ, तुम्हारी कामयाबी खुद शोर मचाएगी! 🔥`,
      `Living in my own chapter, playing by my own rules. ✨`,
      `जो दिल में है वही जुबां पर, दिखावे की आदत नहीं हमारी। 🌿`,
    ],
    faqs: generateComprehensiveFaqs(topic, contentType),
  };

  const relatedLinks = [
    { label: `${capTopic} Captions`, href: `/${topic}-captions` },
    { label: `${capTopic} Bio`, href: `/${topic}-bio` },
    { label: `${capTopic} Status`, href: `/${topic}-status` },
    { label: `${capTopic} Shayari`, href: `/${topic}-shayari` },
    { label: `${capTopic} Quotes`, href: `/${topic}-quotes` },
  ].filter((l) => l.href !== `/${topic}-${contentType}`);

  return (
    <BlueprintPageTemplate
      page={topicPage}
      breadcrumbs={[
        { label: "Topics", href: "/categories" },
        { label: `${capTopic} ${capType}` },
      ]}
      relatedLinks={relatedLinks}
    />
  );
}

export function generateComprehensiveFaqs(
  topicOrPlatform: string,
  contentType: string,
  platformName?: string
): { question: string; answer: string }[] {
  const capTopic = capitalize(topicOrPlatform);
  const capType = capitalize(contentType);
  const targetName = platformName || `${capTopic} Social Media`;

  return [
    {
      question: `What are the best ${capTopic} ${capType} for Instagram Reels and Stories in 2026?`,
      answer: `The top-performing ${capTopic.toLowerCase()} ${capType.toLowerCase()} in 2026 are short, high-impact one-liners (under 12 words) that establish immediate curiosity before the '...more' cut-off. Pair with high-contrast font overlays and slowed + reverb background music for maximum viewer dwell time.`,
    },
    {
      question: `How do I write a viral ${capTopic} ${capType} that stops the scroll?`,
      answer: `Follow the 3-Second Hook Formula: 1) Place your boldest statement or relatable insight in the first 5 words, 2) Include 1-2 curated aesthetic emojis, and 3) End with a low-friction question (e.g. '1 or 2?' or 'Agree?') to multiply comment velocity.`,
    },
    {
      question: `What is the optimal time to post ${capTopic} content on Instagram, TikTok, and WhatsApp?`,
      answer: `Engagement data shows peak leisure browsing happens between 6:00 PM – 9:00 PM on weekdays and 11:00 AM – 2:00 PM on weekends. For WhatsApp Status, morning updates at 8:00 AM – 9:30 AM achieve the highest day-long view counts.`,
    },
    {
      question: `Which hashtags should I pair with my ${capTopic} posts?`,
      answer: `Use our 3-Tier Hashtag Ladder: Combine 10 High-Competition tags (e.g. #${topicOrPlatform.toLowerCase().replace(/\s+/g, "")} #viralreels), 10 Medium Niche tags, and 10 Low-Competition discovery tags. Place them directly inside the caption body for instant Instagram search indexing.`,
    },
    {
      question: `Can I copy and share these ${capTopic} lines directly to WhatsApp or social apps?`,
      answer: `Yes! Every card features 1-click clipboard copying with verified emojis and formatting preserved. You can also tap the direct WhatsApp share button to set as your status in 1 second.`,
    },
    {
      question: `Can I export high-resolution 9:16 Story Quote Cards from these ${capTopic} lines?`,
      answer: `Yes! Click the Story Card icon next to any line to open our 1-Click Visual Quote Maker. Export clean, dark-mode 9:16 vertical graphics ready to post to Instagram Stories, Snapchat, or Pinterest.`,
    },
    {
      question: `Are these ${capTopic} ${capType} free to use for commercial and creator accounts?`,
      answer: `Yes! 100% of the ${capTopic.toLowerCase()} ${capType.toLowerCase()} on UniToolkit are free to use for personal reels, brand accounts, YouTube Shorts, sponsored creator posts, and daily status updates with no registration required.`,
    },
  ];
}

function capitalize(str: string): string {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

