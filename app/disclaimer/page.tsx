import { Metadata } from "next";
import { BlueprintPageTemplate } from "@/components/seo/BlueprintPageTemplate";
import { CORE_PAGES } from "@/data/masterSeo300Data";

const pageData = CORE_PAGES.find((p) => p.route === "/disclaimer")!;

export const metadata: Metadata = {
  title: pageData.metaTitle,
  description: pageData.metaDescription,
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <BlueprintPageTemplate
      page={pageData}
      breadcrumbs={[{ label: "Disclaimer" }]}
      relatedLinks={[
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms of Service", href: "/terms-of-service" },
        { label: "About Us", href: "/about" },
        { label: "Contact Us", href: "/contact" },
      ]}
    />
  );
}
