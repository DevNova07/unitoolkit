import { generateWishMetadata, RenderWishPage } from "@/lib/wishesPageFactory";

export const metadata = generateWishMetadata("eid-mubarak-wishes");

export default function Page() {
  return RenderWishPage("eid-mubarak-wishes");
}
