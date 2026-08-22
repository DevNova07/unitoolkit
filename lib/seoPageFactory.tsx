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
      faqs: [
        {
          question: `How do I copy these ${platName} ${contentType}?`,
          answer: `Simply click any card to copy instantly to your clipboard.`,
        },
        {
          question: `Can I generate custom ${platName} lines with AI?`,
          answer: `Yes, click the 'Generate with AI' button to launch our free AI assistant.`,
        },
      ],
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
    faqs: [
      {
        question: `How do I copy these ${topic} ${contentType}?`,
        answer: `Click on any card to copy directly to your clipboard.`,
      },
      {
        question: `Can I use these ${topic} lines on Instagram Reels and WhatsApp Status?`,
        answer: `Yes! All lines are formatted for optimal read time and high engagement on short-form videos and stories.`,
      },
    ],
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

function capitalize(str: string): string {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

