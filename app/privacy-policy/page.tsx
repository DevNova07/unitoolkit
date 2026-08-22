import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { ShieldCheck, Lock, CheckCircle2 } from "lucide-react";
import { CTASection } from "@/components/common/CTASection";

export const metadata: Metadata = {
  title: "Privacy Policy — Data Protection, Local Storage & Security | UniToolkit",
  description:
    "Learn how UniToolkit protects creator privacy with zero prompt storage, local browser preferences, and strict GDPR/CCPA data compliance.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12 text-left">
      <Breadcrumbs items={[{ label: "Privacy Policy" }]} />

      {/* Header */}
      <div className="space-y-3 border-b border-zinc-200 dark:border-zinc-800 pb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950 border border-emerald-100 dark:border-emerald-900 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Creator Privacy Guarantee</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
          Privacy Policy
        </h1>
        <p className="text-xs text-zinc-400">Effective Date: August 20, 2026 • Last Reviewed: August 2026</p>
      </div>

      {/* Privacy Highlights Box */}
      <div className="p-6 rounded-3xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-4">
        <h3 className="text-base font-bold text-zinc-900 dark:text-white flex items-center gap-2">
          <Lock className="w-4 h-4 text-emerald-500" />
          <span>Our Core Privacy Principles</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <span><strong>No Account Needed:</strong> 100% anonymous browsing and copy actions.</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <span><strong>Zero Prompt Logging:</strong> Your inputs are processed in-memory and discarded.</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <span><strong>Client-Side Storage:</strong> Bookmarks and dark mode stay in your local browser.</span>
          </div>
        </div>
      </div>

      <div className="space-y-8 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">1. Introduction & Overview</h2>
          <p>
            UniToolkit (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the website <Link href="/" className="text-indigo-600 dark:text-indigo-400 underline">unitoolkit.com</Link>. We provide social media caption libraries, status generators, bio stylers, and AI creator utilities. This Privacy Policy explains how information is handled when you visit our website.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">2. Information We Do Not Collect</h2>
          <p>
            Unlike many web platforms, UniToolkit is architected with a privacy-by-default philosophy:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-zinc-600 dark:text-zinc-400">
            <li>We do not require you to create an account, password, or profile.</li>
            <li>We do not record, store, or monitor your clipboard contents beyond the direct 1-click copy action initiated by you.</li>
            <li>We do not sell, rent, or trade personal creator data or prompt history to data brokers or third-party marketing companies.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">3. Local Browser Storage (HTML5 localStorage)</h2>
          <p>
            UniToolkit utilizes browser-based HTML5 <code className="text-xs px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 font-mono">localStorage</code> solely to provide client-side user preferences:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-zinc-600 dark:text-zinc-400">
            <li><strong>Theme Preference:</strong> Storing whether you prefer Light Mode or Dark Mode.</li>
            <li><strong>Favorites & Upvotes:</strong> Storing captions or couplets you bookmark into your local &quot;Saved&quot; vault.</li>
          </ul>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            This information resides entirely within your local device browser and is never transmitted to our remote servers. You can clear this data at any time by clearing your browser cache.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">4. AI Generation & API Processing</h2>
          <p>
            When you utilize the AI Caption Generator, AI Bio Styler, or custom topic features, your text prompt is transmitted securely over HTTPS (TLS encryption) to our inference processing pipeline. Prompts are processed strictly in ephemeral memory to return the generated response and are not used to train foundational AI models on your personal identity.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">5. Cookies & Analytics</h2>
          <p>
            We may use privacy-preserving, anonymized telemetry (such as page view counts, device viewport dimensions, and server response speeds) to ensure platform uptime and discover broken navigation links. We do not use intrusive cross-site tracking cookies.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">6. GDPR (EU) & CCPA (California) Rights</h2>
          <p>
            Under international privacy regulations including the General Data Protection Regulation (GDPR) and California Consumer Privacy Act (CCPA), users have the right to request information regarding data practices. Because UniToolkit does not maintain user databases or identify individual browsing sessions with personal identities, there are no persistent personal records stored on our servers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">7. Contact Information</h2>
          <p>
            If you have questions or concerns regarding our privacy practices, you can contact our privacy officer at <a href="mailto:privacy@unitoolkit.com" className="text-indigo-600 dark:text-indigo-400 underline">privacy@unitoolkit.com</a> or submit a message through our <Link href="/contact" className="text-indigo-600 dark:text-indigo-400 underline">Contact Page</Link>.
          </p>
        </section>
      </div>

      <CTASection />
    </div>
  );
}
