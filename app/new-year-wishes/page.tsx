import { generateWishMetadata, RenderWishPage } from "@/lib/wishesPageFactory";

export const metadata = generateWishMetadata("new-year-wishes");

export default function Page() {
  return RenderWishPage("new-year-wishes");
}
