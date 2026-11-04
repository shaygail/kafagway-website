import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          background: "#171717",
          color: "#FAFAF8",
          padding: "64px",
        }}
      >
        <div style={{ display: "flex", fontSize: 22, letterSpacing: 6, color: "#A52B32" }}>
          KAFAGWAY DENTAL CENTER
        </div>
        <div style={{ display: "flex", marginTop: 28, fontSize: 68, lineHeight: 0.95, letterSpacing: -2, maxWidth: 900 }}>
          Because every smile deserves thoughtful care.
        </div>
        <div style={{ display: "flex", marginTop: 28, fontSize: 24, color: "#D4CFC8" }}>Baguio City</div>
      </div>
    ),
    { ...size },
  );
}
