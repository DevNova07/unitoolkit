import { renderPlatformPage, createPlatformMetadata } from "@/lib/seoPageFactory";

export const metadata = createPlatformMetadata("whatsapp", "captions");

export default function WhatsAppCaptionsHubPage() {
  return renderPlatformPage("whatsapp", "captions");
}
