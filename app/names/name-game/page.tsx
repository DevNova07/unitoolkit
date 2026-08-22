import { Metadata } from "next";
import { NamesTemplate } from "@/components/names/NamesTemplate";
import { NAMES_DATA } from "@/data/namesData";

export const metadata: Metadata = {
  title: "Baby Name Shortlist Game — Discover & Vote on Names | UniToolkit",
  description: "Play the interactive baby name discovery game. Swipe through curated names and build your couple's shared top-10 shortlist.",
  alternates: {
    canonical: "/names/name-game",
  },
};

export default function NameGameUtilityPage() {
  return (
    <NamesTemplate
      h1="Interactive Baby Name Discovery & Shortlist Game"
      badge="🎮 Baby Name Discovery Game"
      intro="Discover unexpected naming treasures! Browse and save names with 1-click to quickly build your family's favorite shortlist."
      items={NAMES_DATA}
      categoryType="utility"
      categorySlug="name-game"
      breadcrumbs={[{ label: "Names", href: "/names" }, { label: "Baby Name Game" }]}
    />
  );
}
