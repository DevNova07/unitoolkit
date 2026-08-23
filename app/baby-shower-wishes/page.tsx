import { generateWishMetadata, RenderWishPage } from "@/lib/wishesPageFactory";

export const metadata = generateWishMetadata("baby-shower-wishes");

export default function Page() {
  return RenderWishPage("baby-shower-wishes");
}
