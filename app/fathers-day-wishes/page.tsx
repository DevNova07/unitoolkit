import { generateWishMetadata, RenderWishPage } from "@/lib/wishesPageFactory";

export const metadata = generateWishMetadata("fathers-day-wishes");

export default function Page() {
  return RenderWishPage("fathers-day-wishes");
}
