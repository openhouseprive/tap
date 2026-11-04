"use client";
import { useState } from "react";

// ADD ALL YOUR CONCURRENT LISTINGS HERE - code : vercel URL
// The code is what you print on the small brass card next to the TAP stand
const CODE_MAP: Record<string, string> = {
  "1848": "https://1848-w-15th-ave-demo.vercel.app",
  "1848w15": "https://1848-w-15th-ave-demo.vercel.app",
  "1848-demo": "https://1848-demo.vercel.app",
  // Add more like:
  // "1290": "https://1290-w-10th.vercel.app",
  // "2121": "https://2121-granville.vercel.app",
};

export default function TapCodeEntry() {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  function submit() {
    const clean = code.trim().toLowerCase();
    const url = CODE_MAP[clean];
    if (url) {
      window.location.href = url;
    } else {
      setError("Invalid code — check the card at the entrance");
      setTimeout(() => setError(""), 3000);
    }
  }

  return (
    <div style={{ minHeight: "100vh", background: "#0A0A0A", color: "#FFFEFB", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 32, fontFamily: "Inter, sans-serif" }}>
      <div style={{ width: 1, height: 72, background: "#C9A86A", marginBottom: 28 }} />
      <h1 style={{ fontFamily: "Instrument Serif, serif", fontSize: 28, letterSpacing: "-0.02em", margin: 0, fontWeight: 400 }}>OpenHouse Privé</h1>
      <p style={{ color: "#C9A86A", fontSize: 10, letterSpacing: "0.24em", textTransform: "uppercase", marginTop: 10, marginBottom: 48 }}>Enter private code</p>

      <div style={{ display: "flex", gap: 12, width: "100%", maxWidth: 320 }}>
        <input
          value={code}
          onChange={(e) => setCode(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && submit()}
          placeholder="e.g. 1848"
          autoFocus
          style={{
            flex: 1,
            background: "#111",
            border: "1px solid #222",
            borderBottom: error ? "1px solid #ff4444" : "1px solid #C9A86A",
            color: "#FFFEFB",
            padding: "16px 20px",
            fontSize: 16,
            letterSpacing: "0.1em",
            outline: "none",
            textTransform: "uppercase",
          }}
        />
        <button
          onClick={submit}
          style={{
            background: "#C9A86A",
            color: "#0A0A0A",
            border: "none",
            padding: "0 24px",
            fontSize: 18,
            cursor: "pointer",
          }}
        >
          →
        </button>
      </div>

      {error && <p style={{ color: "#ff6666", fontSize: 11, marginTop: 16, letterSpacing: "0.05em" }}>{error}</p>}
      {!error && <p style={{ color: "#555", fontSize: 10, marginTop: 16, letterSpacing: "0.1em" }}>Code is on the brass card at entrance</p>}

      <p style={{ marginTop: 80, fontSize: 9, color: "#2A2A2A", letterSpacing: "0.2em" }}>TAP UNIVERSAL • ONE QR • ALL LISTINGS • PRIVATE</p>
    </div>
  );
}
