import { generateWishMetadata, RenderWishPage } from "@/lib/wishesPageFactory";

export const metadata = generateWishMetadata("congratulations-wishes");

export default function Page() {
  return RenderWishPage("congratulations-wishes");
}
