import { generateWishMetadata, RenderWishPage } from "@/lib/wishesPageFactory";

export const metadata = generateWishMetadata("holi-wishes");

export default function Page() {
  return RenderWishPage("holi-wishes");
}
