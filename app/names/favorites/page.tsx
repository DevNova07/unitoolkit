import { Metadata } from "next";
import { NamesFavoritesClient } from "./NamesFavoritesClient";

export const metadata: Metadata = {
  title: "My Saved Names Collection — UniToolkit",
  description: "View and manage your privately saved favorite baby names.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NamesFavoritesPage() {
  return <NamesFavoritesClient />;
}
