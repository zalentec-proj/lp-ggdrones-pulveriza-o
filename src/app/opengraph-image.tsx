import { ImageResponse } from "next/og";

export const alt = "GG Drones Pulverização — precisão que transforma o campo";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ background: "linear-gradient(115deg, #031923 5%, #003746 60%, #4ecb43)", color: "white", width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "82px", fontFamily: "sans-serif" }}>
      <div style={{ color: "#80d44d", fontSize: 28, letterSpacing: 4, fontWeight: 700 }}>GG DRONES PULVERIZAÇÃO</div>
      <div style={{ fontSize: 78, lineHeight: 1.06, fontWeight: 800, maxWidth: 800, marginTop: 32 }}>Precisão que transforma o campo</div>
      <div style={{ fontSize: 28, marginTop: 32, maxWidth: 700, opacity: 0.85 }}>Pulverização agrícola com drones em Cascavel e região.</div>
    </div>,
    size,
  );
}
