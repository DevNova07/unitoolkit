import { generateWishMetadata, RenderWishPage } from "@/lib/wishesPageFactory";

export const metadata = generateWishMetadata("promotion-wishes");

export default function Page() {
  return RenderWishPage("promotion-wishes");
}
