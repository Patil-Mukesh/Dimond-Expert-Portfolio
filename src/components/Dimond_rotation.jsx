import React from "react";

export default function D_ro() {
  return (
    <div
      className="fixed inset-0 z-0"
      style={{
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {/* 🔹 Background Diamond Video */}
      <video
        src="public/8971886-uhd_3840_2160_25fps.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="object-cover w-full h-full"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
          opacity: 0.9,
        }}
      />

      {/* 🔹 Gradient Overlay */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.5))",
          zIndex: 1,
          pointerEvents: "none",
        }}
      ></div>
    </div>
  );
}
