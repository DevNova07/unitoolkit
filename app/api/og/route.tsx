import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get("title") || "UniToolkit — Creator Studio";
    const subtitle =
      searchParams.get("subtitle") ||
      "15,000+ Curated Captions, Viral Hashtags & AI Social Media Tools";
    const badge = searchParams.get("badge") || "Viral Content Hub";

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
            padding: "60px 80px",
            backgroundColor: "#09090b",
            backgroundImage:
              "radial-gradient(circle at 25px 25px, #27272a 2%, transparent 0%), radial-gradient(circle at 75px 75px, #18181b 2%, transparent 0%)",
            backgroundSize: "100px 100px",
            color: "#ffffff",
            fontFamily: "sans-serif",
          }}
        >
          {/* Top Row: Logo & Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                  fontWeight: "bold",
                }}
              >
                ✨
              </div>
              <div
                style={{
                  fontSize: "28px",
                  fontWeight: "800",
                  letterSpacing: "-0.5px",
                  color: "#ffffff",
                }}
              >
                UniToolkit
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "8px 20px",
                borderRadius: "9999px",
                background: "rgba(99, 102, 241, 0.15)",
                border: "1px solid rgba(99, 102, 241, 0.3)",
                color: "#a5b4fc",
                fontSize: "18px",
                fontWeight: "600",
              }}
            >
              {badge}
            </div>
          </div>

          {/* Middle: Title & Subtitle */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              maxWidth: "950px",
            }}
          >
            <div
              style={{
                fontSize: title.length > 40 ? "54px" : "64px",
                fontWeight: "900",
                lineHeight: "1.15",
                letterSpacing: "-1.5px",
                background: "linear-gradient(180deg, #ffffff 30%, #a1a1aa 100%)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              {title}
            </div>

            <div
              style={{
                fontSize: "24px",
                lineHeight: "1.4",
                color: "#94a3b8",
                fontWeight: "400",
              }}
            >
              {subtitle}
            </div>
          </div>

          {/* Bottom: Feature Pills & Domain */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              borderTop: "1px solid #27272a",
              paddingTop: "24px",
            }}
          >
            <div style={{ display: "flex", gap: "24px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#cbd5e1", fontSize: "18px" }}>
                <span>⚡ 1-Click Copy</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#cbd5e1", fontSize: "18px" }}>
                <span>🎨 Visual Story Maker</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#cbd5e1", fontSize: "18px" }}>
                <span>🤖 AI Caption Studio</span>
              </div>
            </div>

            <div
              style={{
                fontSize: "20px",
                fontWeight: "700",
                color: "#818cf8",
              }}
            >
              unitoolkit.app
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: unknown) {
    const errorMsg = e instanceof Error ? e.message : "Unknown error";
    return new Response(`Failed to generate OG image: ${errorMsg}`, {
      status: 500,
    });
  }
}
