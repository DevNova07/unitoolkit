interface FAQItem {
  question: string;
  answer: string;
}

interface BreadcrumbItem {
  name: string;
  item: string;
}

interface JsonLdSchemaProps {
  type?: "FAQPage" | "ItemList" | "SoftwareApplication" | "WebSite" | "Breadcrumbs";
  faqs?: FAQItem[];
  items?: { name: string; position?: number }[];
  breadcrumbs?: BreadcrumbItem[];
  title?: string;
  description?: string;
  url?: string;
  ratingValue?: string;
  reviewCount?: string;
}

export function JsonLdSchema({
  type = "FAQPage",
  faqs,
  items,
  breadcrumbs,
  title = "Unitoolkit — Social Media Caption Generator & Creator Studio",
  description = "Find 15,000+ viral, aesthetic, and attitude captions for Instagram, TikTok, Facebook, and Threads.",
  url = "https://unitoolkit.app",
  ratingValue = "4.9",
  reviewCount = "18450",
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
  } else if (type === "SoftwareApplication") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: title,
      description: description,
      applicationCategory: "DesignApplication",
      operatingSystem: "All, Web, iOS, Android, macOS, Windows",
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
