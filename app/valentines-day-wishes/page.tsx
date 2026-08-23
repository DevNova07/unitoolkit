import { generateWishMetadata, RenderWishPage } from "@/lib/wishesPageFactory";

export const metadata = generateWishMetadata("valentines-day-wishes");

export default function Page() {
  return RenderWishPage("valentines-day-wishes");
}
