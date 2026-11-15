import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

// The preview card shown when someone texts, emails, or posts a link to the site.
export const alt = `${site.name}: real estate photography, video, and 3D for Sonoma County`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const photo = await readFile(join(process.cwd(), "src/assets/og/og-photo.jpg"), "base64");
const icon = await readFile(join(process.cwd(), "src/app/icon.png"), "base64");

export default async function Image() {
  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", position: "relative" }}>
        <img
          src={`data:image/jpeg;base64,${photo}`}
          width={1200}
          height={630}
          alt=""
          style={{ position: "absolute", inset: 0, objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1200,
            height: 630,
            display: "flex",
            backgroundImage: "linear-gradient(90deg, rgba(20,24,27,0.88) 0%, rgba(20,24,27,0.55) 55%, rgba(20,24,27,0.1) 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 72px",
            color: "#F5F2EA",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <div
              style={{
                display: "flex",
                width: 96,
                height: 96,
                borderRadius: 48,
                background: "#F5F2EA",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={`data:image/png;base64,${icon}`} width={92} height={92} alt="" />
            </div>
            <div style={{ fontSize: 52, fontWeight: 700, letterSpacing: -1 }}>{site.name}</div>
          </div>
          <div style={{ marginTop: 28, fontSize: 34, maxWidth: 720, lineHeight: 1.3 }}>
            Real estate photography, video, aerials, and 3D tours for Sonoma County agents.
          </div>
          <div style={{ marginTop: 24, fontSize: 26, color: "#C8FF3D" }}>winecountryexposure.com</div>
        </div>
      </div>
    ),
    size,
  );
}
