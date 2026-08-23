import { generateWishMetadata, RenderWishPage } from "@/lib/wishesPageFactory";

export const metadata = generateWishMetadata("birthday-wishes");

export default function Page() {
  return RenderWishPage("birthday-wishes");
}
