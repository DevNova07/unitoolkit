import { ImageResponse } from "next/og";

export const dynamic = "force-dynamic";
export const alt = "UniToolkit — Global Social Media Creator Suite & AI Generators";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
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
        {/* Top Header */}
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
              gap: "14px",
            }}
          >
            <div
              style={{
                width: "52px",
                height: "52px",
                borderRadius: "14px",
                background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "26px",
                fontWeight: "900",
                color: "#ffffff",
              }}
            >
              U
            </div>
            <div
              style={{
                fontSize: "30px",
                fontWeight: "900",
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
              background: "rgba(99, 102, 241, 0.18)",
              border: "1px solid rgba(99, 102, 241, 0.4)",
              color: "#a5b4fc",
              fontSize: "18px",
              fontWeight: "700",
            }}
          >
            15,000+ Viral Captions & AI Tools
          </div>
        </div>

        {/* Center Title & Tagline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            maxWidth: "960px",
          }}
        >
          <div
            style={{
              fontSize: "56px",
              fontWeight: "900",
              lineHeight: 1.15,
              letterSpacing: "-1px",
              background: "linear-gradient(135deg, #ffffff 30%, #a1a1aa 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Global Social Media Creator Suite & AI Tools
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "#94a3b8",
              lineHeight: 1.4,
              fontWeight: "400",
            }}
          >
            Attitude Captions • Hindi Shayari • WhatsApp Status • VIP Bios • AI Generators
          </div>
        </div>

        {/* Footer Metrics & Badges */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid rgba(255, 255, 255, 0.12)",
            paddingTop: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "28px",
              fontSize: "16px",
              color: "#cbd5e1",
              fontWeight: "600",
            }}
          >
            <span>✨ 10 Platforms</span>
            <span>⚡ 6 AI Studios</span>
            <span>📱 100% Free Forever</span>
          </div>

          <div
            style={{
              fontSize: "18px",
              fontWeight: "700",
              color: "#818cf8",
            }}
          >
            unitoolkit.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
