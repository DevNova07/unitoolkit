import { generateWishMetadata, RenderWishPage } from "@/lib/wishesPageFactory";

export const metadata = generateWishMetadata("ramadan-kareem-wishes");

export default function Page() {
  return RenderWishPage("ramadan-kareem-wishes");
}
