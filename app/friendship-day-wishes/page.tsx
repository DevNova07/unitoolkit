import { generateWishMetadata, RenderWishPage } from "@/lib/wishesPageFactory";

export const metadata = generateWishMetadata("friendship-day-wishes");

export default function Page() {
  return RenderWishPage("friendship-day-wishes");
}
