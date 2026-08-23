import { generateWishMetadata, RenderWishPage } from "@/lib/wishesPageFactory";

export const metadata = generateWishMetadata("diwali-wishes");

export default function Page() {
  return RenderWishPage("diwali-wishes");
}
