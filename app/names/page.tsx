import { Metadata } from "next";
import { NamesMainClient } from "./NamesMainClient";

export const metadata: Metadata = {
  title: "Global Baby Names Directory [2026] — Meanings, Origins & AI Generator | UniToolkit",
  description:
    "Explore 10,000+ verified baby names across 30+ cultures (Indian, Arabic, Persian, French, Japanese), 20 styles, and meanings. Search, copy, and generate with AI.",
  alternates: {
    canonical: "/names",
  },
  openGraph: {
    title: "Global Baby Names Directory with Meanings & Origins | UniToolkit",
    description: "Search 10,000+ verified multicultural names with meanings, origins, and AI generator.",
    url: "https://unitoolkit.com/names",
    type: "website",
  },
};

export default function NamesIndexPage() {
  return <NamesMainClient />;
}
