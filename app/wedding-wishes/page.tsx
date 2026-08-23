import { generateWishMetadata, RenderWishPage } from "@/lib/wishesPageFactory";

export const metadata = generateWishMetadata("wedding-wishes");

export default function Page() {
  return RenderWishPage("wedding-wishes");
}
