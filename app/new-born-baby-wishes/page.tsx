import { generateWishMetadata, RenderWishPage } from "@/lib/wishesPageFactory";

export const metadata = generateWishMetadata("new-born-baby-wishes");

export default function Page() {
  return RenderWishPage("new-born-baby-wishes");
}
