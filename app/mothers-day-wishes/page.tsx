import { generateWishMetadata, RenderWishPage } from "@/lib/wishesPageFactory";

export const metadata = generateWishMetadata("mothers-day-wishes");

export default function Page() {
  return RenderWishPage("mothers-day-wishes");
}
