interface FAQItem {
  question: string;
  answer: string;
}

interface BreadcrumbItem {
  name: string;
  item: string;
}

interface JsonLdSchemaProps {
  type?: "FAQPage" | "ItemList" | "SoftwareApplication" | "WebApplication" | "Article" | "WebSite" | "Breadcrumbs";
  faqs?: FAQItem[];
  items?: { name: string; position?: number }[];
  breadcrumbs?: BreadcrumbItem[];
  title?: string;
  description?: string;
  url?: string;
  ratingValue?: string;
  reviewCount?: string;
  datePublished?: string;
  dateModified?: string;
}

export function JsonLdSchema({
  type = "FAQPage",
  faqs,
  items,
  breadcrumbs,
  title = "UniToolkit — Multi-Tool Creator Studio & Global Names Vault",
  description = "Access 15,000+ verified captions, shayari, social tools, and global baby names with meanings and audio pronunciation.",
  url = "https://unitoolkit.com",
  ratingValue = "4.9",
  reviewCount = "18450",
  datePublished = "2026-01-01",
  dateModified = "2026-08-22",
}: JsonLdSchemaProps) {
  let schemaData: Record<string, unknown> = {};

  if (type === "FAQPage" && faqs && faqs.length > 0) {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    };
  } else if (type === "ItemList" && items && items.length > 0) {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: title,
      description: description,
      itemListElement: items.slice(0, 15).map((item, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: item.name,
      })),
    };
  } else if (type === "Breadcrumbs" && breadcrumbs && breadcrumbs.length > 0) {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((bc, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: bc.name,
        item: bc.item,
      })),
    };
  } else if (type === "WebApplication" || type === "SoftwareApplication") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: title,
      description: description,
      url: url,
      applicationCategory: "UtilityApplication",
      operatingSystem: "All, Web, iOS, Android, macOS, Windows",
      browserRequirements: "Requires JavaScript. Requires HTML5.",
      offers: {
        "@type": "Offer",
        price: "0.00",
        priceCurrency: "USD",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: ratingValue,
        reviewCount: reviewCount,
        bestRating: "5",
        worstRating: "1",
      },
      author: {
        "@type": "Organization",
        name: "UniToolkit Research & Development Team",
        url: "https://unitoolkit.com",
      },
    };
  } else if (type === "Article") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: title,
      description: description,
      url: url,
      datePublished: datePublished,
      dateModified: dateModified,
      author: {
        "@type": "Organization",
        name: "UniToolkit Editorial Team",
        url: "https://unitoolkit.com",
      },
      publisher: {
        "@type": "Organization",
        name: "UniToolkit",
        url: "https://unitoolkit.com",
        logo: {
          "@type": "ImageObject",
          url: "https://unitoolkit.com/icon.png",
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": url,
      },
    };
  } else {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: title,
      url: url,
      potentialAction: {
        "@type": "SearchAction",
        target: `${url}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
