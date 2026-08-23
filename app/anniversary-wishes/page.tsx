import { generateWishMetadata, RenderWishPage } from "@/lib/wishesPageFactory";

export const metadata = generateWishMetadata("anniversary-wishes");

export default function Page() {
  return RenderWishPage("anniversary-wishes");
}
