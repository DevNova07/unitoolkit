import { generateWishMetadata, RenderWishPage } from "@/lib/wishesPageFactory";

export const metadata = generateWishMetadata("christmas-wishes");

export default function Page() {
  return RenderWishPage("christmas-wishes");
}
