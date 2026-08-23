import { generateWishMetadata, RenderWishPage } from "@/lib/wishesPageFactory";

export const metadata = generateWishMetadata("jummah-mubarak-wishes");

export default function Page() {
  return RenderWishPage("jummah-mubarak-wishes");
}
