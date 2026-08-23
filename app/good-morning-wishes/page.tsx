import { generateWishMetadata, RenderWishPage } from "@/lib/wishesPageFactory";

export const metadata = generateWishMetadata("good-morning-wishes");

export default function Page() {
  return RenderWishPage("good-morning-wishes");
}
