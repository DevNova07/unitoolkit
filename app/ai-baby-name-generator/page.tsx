import { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  Zap,
  ShieldCheck,
  Globe2,
  Heart,
  Volume2,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  HelpCircle,
  Award,
  Users,
  Compass,
  Star,
} from "lucide-react";
import { AINameStudio } from "@/components/names/AINameStudio";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { FAQSection } from "@/components/common/FAQSection";
import { AuthorBioBox } from "@/components/common/AuthorBioBox";
import { CTASection } from "@/components/common/CTASection";
import { JsonLdSchema } from "@/components/common/JsonLdSchema";
import { HowToUseGuide } from "@/components/common/HowToUseGuide";
import { CORE_NAME_HUBS, ORIGIN_CULTURE_LIST, RELIGION_TRADITION_LIST } from "@/data/namesTaxonomy";

export const metadata: Metadata = {
  title: "AI Baby Name Generator Free — Intelligent Heritage & Meaning Matcher [2026] | UniToolkit",
  description:
    "Discover unique, auspicious, and modern baby names with our free AI Baby Name Generator. Blend dual parental heritages, verify Sanskrit & Quranic meanings, and test syllable harmony.",
  keywords: [
    "AI baby name generator",
    "free baby name generator with meaning",
    "Indian baby name generator AI",
    "Hindu baby boy names AI",
    "Muslim baby girl names AI",
    "modern baby name combiner",
    "dual heritage baby names",
    "baby name matcher with surname",
  ],
  alternates: {
    canonical: "/ai-baby-name-generator",
  },
  openGraph: {
    title: "AI Baby Name Generator Free — Intelligent Heritage Matcher [2026]",
    description:
      "Find meaningful, modern, and culturally authentic baby names with AI. Dual heritage blending, surname harmony, and audio pronunciation.",
    url: "https://unitoolkit.com/ai-baby-name-generator",
    type: "website",
  },
};

const BABY_NAME_FAQS = [
  {
    question: "How does the AI Baby Name Generator create personalized name suggestions?",
    answer:
      "Our AI combines computational linguistics, onomastic dictionaries, and cultural naming taxonomies. When you select your preferred gender, heritage (e.g. Sanskrit, Arabic, Celtic, Latin), and style (e.g. Modern, Royal, Spiritual), the AI evaluates syllable cadence, linguistic roots, and auspicious meanings to generate harmonious name recommendations.",
  },
  {
    question: "Can I blend both parents' cultural backgrounds to find multicultural names?",
    answer:
      "Yes! In the prompt field, you can specify dual heritages (e.g. 'Father is Indian Hindu, Mother is American Italian — suggest names that sound natural in both cultures with positive meanings'). The AI will prioritize cross-cultural names like Maya, Bodhi, Arya, Nina, or Leo.",
  },
  {
    question: "How do I check if a baby name sounds good with my family surname?",
    answer:
      "A great naming rule is the 'Syllable Balance Test'. If you have a short 1-syllable surname (like Roy, Shah, Clark), choose a 2 or 3-syllable first name (like Aarav, Advik, Kiara). If you have a long 3 or 4-syllable surname (like Mukhopadhyay, Richardson), pick a crisp 1 or 2-syllable first name (like Dev, Neil, Sia).",
  },
  {
    question: "Does the AI verify religious, Vedic, and Quranic authenticity?",
    answer:
      "Yes. Every generated name is cross-referenced with ancient root texts including Sanskrit Dhatus (Vedic texts, Upanishads) and Arabic lexicon (Quranic and Prophetic virtues) to ensure honorable and positive meanings.",
  },
  {
    question: "Can I hear how the baby name is pronounced?",
    answer:
      "Yes! Click the 🔊 speaker icon next to any generated name card to hear instant audio pronunciation spoken clearly via your browser's speech synthesis engine.",
  },
  {
    question: "Is this AI Baby Name Generator 100% free with unlimited tries?",
    answer:
      "Yes! UniToolkit AI Baby Name Studio is completely free forever. You don't need to enter a credit card, sign up for an account, or deal with paywalls. Generate as many baby name variations as you need.",
  },
];

export default function AIBabyNameGeneratorPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 space-y-12 sm:space-y-16 text-left">
      {/* 1. Google Schema.org JSON-LD Rich Structured Data */}
      <JsonLdSchema
        type="WebApplication"
        title="AI Baby Name Generator & Heritage Matcher"
        description="Free AI baby name generator crafting meaningful names based on parental culture, surname rhythm, and positive virtues."
        url="https://unitoolkit.com/ai-baby-name-generator"
      />
      <JsonLdSchema
        type="FAQPage"
        faqs={BABY_NAME_FAQS}
        title="AI Baby Name Generator FAQ"
        description="Frequently asked questions about choosing baby names, cultural origins, and surname harmony."
        url="https://unitoolkit.com/ai-baby-name-generator"
      />

      {/* Top Breadcrumb Navigation */}
      <Breadcrumbs
        items={[
          { label: "Names", href: "/names" },
          { label: "AI Baby Name Generator" },
        ]}
      />

      {/* 2. Main Hero & Interactive AI Generator Studio Tool */}
      <AINameStudio
        title="AI Baby Name Generator & Heritage Matcher"
        description="Craft personalized, meaningful, and auspicious baby names for your newborn based on parental cultural heritage, sound rhythm with your surname, and positive virtues."
        defaultPrompt="Modern auspicious baby name with good rhythm, easy pronunciation, and meaningful heritage"
      />

      {/* 3. Section: How to Find the Perfect Baby Name (Google HowTo Schema) */}
      <HowToUseGuide
        guideId="ai-baby-name-generator"
        pageUrl="https://unitoolkit.com/ai-baby-name-generator"
      />

      {/* 4. Section: 6 Core AI Name Matching Features */}
      <section className="space-y-6 pt-10 border-t border-zinc-200 dark:border-zinc-800">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 text-xs font-bold text-purple-600 dark:text-purple-400">
            <Sparkles className="w-3.5 h-3.5 fill-current" />
            <span>Intelligent Onomastic Features</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-white">
            Why Parents Trust UniToolkit AI Baby Name Studio
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-3xl">
            We go beyond generic alphabetical lists by providing deep cultural context, phonetic clarity, and parental harmonization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {/* Feature 1 */}
          <div className="p-6 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-3 hover:border-indigo-500/50 transition-all shadow-xs">
            <div className="w-10 h-10 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
              <Globe2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
              Dual-Heritage Cultural Blending
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Honor both parents&apos; backgrounds (e.g. Indian + European, Arabic + Western) with names that celebrate multicultural harmony and universal ease of pronunciation.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-3 hover:border-purple-500/50 transition-all shadow-xs">
            <div className="w-10 h-10 rounded-2xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center">
              <Volume2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
              Phonetic Audio Pronunciation
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Never wonder how a unique or traditional name sounds. Instant 1-tap browser audio speech synthesis speaks the name with natural syllable stress.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-3 hover:border-amber-500/50 transition-all shadow-xs">
            <div className="w-10 h-10 rounded-2xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center">
              <Star className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
              Vedic & Nakshatra Compatibility
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Looking for a specific Janma Rashi or astrological birth letter (A, S, K, M, R)? The AI matches auspicious starting sounds rooted in Vedic traditions.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="p-6 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-3 hover:border-emerald-500/50 transition-all shadow-xs">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
              Sibling Harmony & Matching
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Have an older child and want a harmonious sibling pair? Enter your older child&apos;s name to find complementary names with matching tone and rhythm.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="p-6 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-3 hover:border-rose-500/50 transition-all shadow-xs">
            <div className="w-10 h-10 rounded-2xl bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 flex items-center justify-center">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
              Deep Meaning & Virtue Verification
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Every name includes a verified onomastic meaning explaining its historical virtue, such as wisdom, divine light, brave warrior, peace, or natural beauty.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="p-6 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-3 hover:border-cyan-500/50 transition-all shadow-xs">
            <div className="w-10 h-10 rounded-2xl bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
              100% Private & Ad-Free
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Your name ideas and family details are completely private. We never store personal data on remote servers; all favorites stay securely in your device browser.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Section: The 2026 Expecting Parents Naming Checklist */}
      <section className="p-6 sm:p-10 rounded-3xl bg-linear-to-br from-indigo-50/50 via-purple-50/30 to-white dark:from-zinc-900 dark:via-zinc-900/60 dark:to-zinc-950 border border-indigo-100 dark:border-zinc-800 space-y-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 text-xs font-bold">
            <Award className="w-3.5 h-3.5" />
            <span>Essential Parent Advice</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-zinc-900 dark:text-white">
            The 4-Step Baby Naming Checklist for Expecting Parents
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-2xl">
            Before finalizing your newborn&apos;s legal birth certificate name, run your top choices through these four practical tests:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="p-5 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
            <h3 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>1. The Monogram / Initials Check</span>
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Write down the first, middle, and last initials (e.g. <em>Samuel Alexander Dad = S.A.D.</em>). Ensure the initials do not spell awkward words or acronyms on luggage tags or diplomas.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
            <h3 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>2. The Playground / Nickname Test</span>
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Say the name out loud in a busy park. Consider what natural short forms friends or teachers will naturally use, and ensure you love the potential nicknames too.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
            <h3 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>3. Surname Cadence & Rhyme Test</span>
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Avoid first names that end with the exact same syllable your last name starts with (e.g. <em>Jack Cooper</em> sounds like <em>Jackooper</em>). Aim for crisp phonetic separation.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
            <h3 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>4. The Boardroom / Lifetime Test</span>
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              While cute baby nicknames are adorable for infants, remember your child will grow into an adult professional, artist, or leader. Pick a name with timeless dignity.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Section: Browse 10,000+ Curated Baby Names by Category (SEO Link Web) */}
      <section className="space-y-6 pt-10 border-t border-zinc-200 dark:border-zinc-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white">
              Explore 10,000+ Curated Baby Names by Origin & Heritage
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
              Browse our master cultural taxonomy with phonetic pronunciation and meaning guides.
            </p>
          </div>
          <Link
            href="/names"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            <span>View All Name Categories</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {[...CORE_NAME_HUBS, ...ORIGIN_CULTURE_LIST.slice(0, 8), ...RELIGION_TRADITION_LIST.slice(0, 4)].map((hub) => (
            <Link
              key={hub.slug}
              href={`/names/${hub.slug}`}
              className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500/50 hover:bg-white dark:hover:bg-zinc-900 transition-all flex items-center justify-between shadow-2xs group"
            >
              <div className="space-y-0.5 truncate">
                <p className="text-xs font-bold text-zinc-800 dark:text-zinc-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors truncate">
                  {hub.name}
                </p>
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                  {("count" in hub && typeof hub.count === "string" ? hub.count : "500+")} names
                </p>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
            </Link>
          ))}
        </div>
      </section>

      {/* 7. Section: Related Interactive AI Studios & Utilities */}
      <section className="space-y-6 pt-10 border-t border-zinc-200 dark:border-zinc-800">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white">
            More Free Creator & Generation Studios
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
            Discover other AI-powered generators and creator utilities on UniToolkit.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            href="/names/name-combiner"
            className="p-5 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-purple-500/50 hover:shadow-md transition-all space-y-2"
          >
            <span className="text-2xl">🧬</span>
            <h3 className="text-base font-bold text-zinc-900 dark:text-white">AI Name Combiner</h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">Blend Mom + Dad names into harmonious newborn name ideas.</p>
          </Link>

          <Link
            href="/ai-bio-generator"
            className="p-5 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-pink-500/50 hover:shadow-md transition-all space-y-2"
          >
            <span className="text-2xl">👑</span>
            <h3 className="text-base font-bold text-zinc-900 dark:text-white">AI Bio Generator</h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">Aesthetic VIP attitude bios with clean line breaks and fonts.</p>
          </Link>

          <Link
            href="/ai-caption-generator"
            className="p-5 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500/50 hover:shadow-md transition-all space-y-2"
          >
            <span className="text-2xl">✨</span>
            <h3 className="text-base font-bold text-zinc-900 dark:text-white">AI Caption Studio</h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">Create 10+ viral hooks and captions for Reels and TikTok.</p>
          </Link>

          <Link
            href="/ai-shayari-generator"
            className="p-5 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-amber-500/50 hover:shadow-md transition-all space-y-2"
          >
            <span className="text-2xl">📜</span>
            <h3 className="text-base font-bold text-zinc-900 dark:text-white">AI Hindi Shayari</h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">Authentic 2-line rhyming poetry in Hindi Devanagari & Hinglish.</p>
          </Link>
        </div>
      </section>

      {/* 8. E-E-A-T Editorial Review & Linguistic Research Credentials */}
      <AuthorBioBox categoryType="Onomastic Research" topic="Global Baby Names & Etymology" />

      {/* 9. FAQ Section */}
      <FAQSection
        title="Frequently Asked Questions (FAQ)"
        subtitle="Common questions about our AI baby name generator, cultural naming traditions, and syllable cadence."
        faqs={BABY_NAME_FAQS}
      />

      {/* 10. Final Call to Action */}
      <CTASection
        title="Ready to find your baby's forever name?"
        subtitle="Use our free AI studio above to generate unlimited auspicious, modern, and meaningful name ideas."
      />
    </div>
  );
}
