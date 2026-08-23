import { generateWishMetadata, RenderWishPage } from "@/lib/wishesPageFactory";

export const metadata = generateWishMetadata("raksha-bandhan-wishes");

export default function Page() {
  return RenderWishPage("raksha-bandhan-wishes");
}
