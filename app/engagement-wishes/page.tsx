import { generateWishMetadata, RenderWishPage } from "@/lib/wishesPageFactory";

export const metadata = generateWishMetadata("engagement-wishes");

export default function Page() {
  return RenderWishPage("engagement-wishes");
}
