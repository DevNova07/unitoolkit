import { generateWishMetadata, RenderWishPage } from "@/lib/wishesPageFactory";

export const metadata = generateWishMetadata("good-night-wishes");

export default function Page() {
  return RenderWishPage("good-night-wishes");
}
