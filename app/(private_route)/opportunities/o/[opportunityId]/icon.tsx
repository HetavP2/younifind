import { ImageResponse } from "next/og";

export const size = {
  width: 33,
  height: 33,
};

export const contentType = "image/png";

export default function icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: "royalblue",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "royalyellow",
          borderRadius: "5px",
        }}
      >
        O
      </div>
    ),
    size
  );
}
