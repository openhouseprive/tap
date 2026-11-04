import Link from "next/link";

const LISTINGS = [
  { id: "1848-w-15th-ave-demo", address: "1848 W 15th Ave", city: "Vancouver • Open Now", url: "https://1848-w-15th-ave-demo.vercel.app" },
  { id: "1848-demo", address: "1848 W 15th Demo", city: "Vancouver • Preview", url: "https://1848-demo.vercel.app" },
  // ADD MORE CONCURRENT LISTINGS HERE - just copy a line:
  // { id: "1290-w-10th", address: "1290 W 10th Ave", city: "Kitsilano • Open Now", url: "https://1290-w-10th.vercel.app" },
];

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", background: "#0A0A0A", color: "#FFFEFB", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 24, fontFamily: "Inter, sans-serif" }}>
      <div style={{ width: 1, height: 64, background: "#C9A86A", marginBottom: 24 }} />
      <h1 style={{ fontFamily: "Instrument Serif, serif", fontSize: 28, letterSpacing: "-0.02em", margin: 0 }}>OpenHouse Privé</h1>
      <p style={{ color: "#C9A86A", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", marginTop: 8, marginBottom: 48 }}>Select your private presentation</p>
      
      <div style={{ width: "100%", maxWidth: 360, display: "flex", flexDirection: "column", gap: 12 }}>
        {LISTINGS.map(l => (
          <Link key={l.id} href={`/${l.id}`} style={{ border: "1px solid #1A1A1A", background: "#111", padding: "20px 20px", textDecoration: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ color: "#FFFEFB", fontSize: 14, letterSpacing: "0.02em" }}>{l.address}</div>
              <div style={{ color: "#888", fontSize: 11, marginTop: 4 }}>{l.city}</div>
            </div>
            <div style={{ color: "#C9A86A", fontSize: 16 }}>→</div>
          </Link>
        ))}
      </div>

      <p style={{ marginTop: 64, fontSize: 10, color: "#444", letterSpacing: "0.15em" }}>TAP UNIVERSAL • ONE QR • ALL LISTINGS</p>
      <p style={{ marginTop: 8, fontSize: 10, color: "#333" }}>Test any listing: /your-listing-id</p>
    </div>
  );
}
