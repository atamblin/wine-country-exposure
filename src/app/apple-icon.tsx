import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// Home-screen icon for iPhones. iOS fills transparent areas with black, so put the emblem on ivory.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

const icon = await readFile(join(process.cwd(), "src/app/icon.png"), "base64");

export default async function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "#F5F2EA",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={`data:image/png;base64,${icon}`} width={164} height={164} alt="" />
      </div>
    ),
    size,
  );
}
