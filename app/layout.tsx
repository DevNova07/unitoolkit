import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ToastContainer } from "@/components/common/Toast";
import { LocaleProvider } from "@/components/common/LocaleProvider";
import { DesktopViralToolsTray } from "@/components/common/DesktopViralToolsTray";

export const metadata: Metadata = {
  metadataBase: new URL("https://unitoolkit.com"),
  title: {
    default: "Unitoolkit — Global Social Media Creator Suite & AI Generators",
    template: "%s | Unitoolkit",
  },
  description:
    "Instant AI caption generator, authentic Hindi shayari, WhatsApp status, and VIP bios crafted for 10 major platforms across 7 global languages.",
  keywords: [
    "captions",
    "instagram captions",
    "ai caption generator",
    "whatsapp status",
    "hindi shayari",
    "vip bio styler",
    "quotes",
    "social media creator suite",
  ],
  alternates: {
    canonical: "https://unitoolkit.com",
    languages: {
      "en": "https://unitoolkit.com",
      "hi": "https://unitoolkit.com?lang=hi",
      "ur": "https://unitoolkit.com?lang=ur",
      "es": "https://unitoolkit.com?lang=es",
      "pt": "https://unitoolkit.com?lang=pt",
      "ar": "https://unitoolkit.com?lang=ar",
      "id": "https://unitoolkit.com?lang=id",
      "x-default": "https://unitoolkit.com",
    },
  },
  authors: [{ name: "Unitoolkit Editorial Team", url: "https://unitoolkit.com/about" }],
  creator: "Unitoolkit",
  publisher: "Unitoolkit Inc.",
  openGraph: {
    title: "Unitoolkit — Global Social Media Creator Suite & AI Generators",
    description:
      "Find ready-to-use captions or generate unique AI captions for Instagram, TikTok, YouTube, WhatsApp, Facebook, LinkedIn and more.",
    url: "https://unitoolkit.com",
    siteName: "Unitoolkit",
    images: [
      {
        url: "/api/og?title=UniToolkit%20—%20Global%20Creator%20Suite&badge=15,000%2B%20Viral%20Lines",
        width: 1200,
        height: 630,
        alt: "Unitoolkit Global Social Media Creator Suite",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unitoolkit — Global Social Media Captions & AI Creator Tools",
    description:
      "Generate custom, viral captions with AI or browse thousands of curated social media lines.",
    creator: "@unitoolkit",
    images: ["/api/og?title=UniToolkit%20—%20Global%20Creator%20Suite&badge=15,000%2B%20Viral%20Lines"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <Script
          id="theme-initializer"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const storedTheme = localStorage.getItem('unitoolkit_theme') || localStorage.getItem('captionpro_theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            `,
          }}
        />
        {/* Google E-E-A-T Organization Schema with sameAs Links */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "UniToolkit",
              url: "https://unitoolkit.com",
              logo: "https://unitoolkit.com/icon.png",
              sameAs: [
                "https://twitter.com/unitoolkit",
                "https://www.instagram.com/unitoolkit",
                "https://www.linkedin.com/company/unitoolkit",
                "https://github.com/unitoolkit",
                "https://www.youtube.com/@unitoolkit",
              ],
              publishingPrinciples: "https://unitoolkit.com/editorial-policy",
              knowsAbout: [
                "Social Media Marketing",
                "Instagram Reel Algorithms",
                "Computational Linguistics",
                "Natural Language Processing",
                "Creative Writing",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Support & Editorial Inquiries",
                email: "support@unitoolkit.com",
                availableLanguage: ["English", "Hindi"],
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Unitoolkit",
              url: "https://unitoolkit.com",
              description:
                "The ultimate global social media caption platform, WhatsApp status studio, and AI creator toolkit.",
              applicationCategory: "DesignApplication",
              operatingSystem: "All",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
            }),
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white dark:bg-black text-zinc-900 dark:text-white antialiased selection:bg-indigo-500 selection:text-white transition-colors duration-200 font-sans">
        <LocaleProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <DesktopViralToolsTray />
          <ToastContainer />
        </LocaleProvider>
      </body>
    </html>
  );
}
