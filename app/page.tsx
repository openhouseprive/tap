"use client";
import { useState } from "react";

const CODE_MAP: Record<string, string> = {
  "1848": "https://1848-w-15th-ave-demo.vercel.app",
  "1848w15": "https://1848-w-15th-ave-demo.vercel.app",
  "1848-demo": "https://1848-demo.vercel.app",
  "1848-w-15th-ave-demo": "https://1848-w-15th-ave-demo.vercel.app",
  "1801": "https://1801-1515-alberni.vercel.app",
};

export default function TapCodeEntry() {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  function submit() {
    const clean = code.trim().toLowerCase();
    const url = CODE_MAP[clean];
    if (url) window.location.href = url;
    else { setError("Invalid code — request code from your listing agent"); setTimeout(()=>setError(""), 3000); }
  }

  return (
    <div style={{ minHeight:"100vh", background:"#0A0A0A", color:"#FFFEFB", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:32, fontFamily:"Inter, sans-serif" }}>
      {/* TRANSPARENT LOGO - upload public/logo.png */}
      <img src="/logo.png" alt="OpenHouse Privé" style={{ width:280, maxWidth:"80%", marginBottom:36, objectFit:"contain" }} />
      
      <div style={{ width:1, height:48, background:"#C9A86A", marginBottom:28, opacity:0.8 }} />
      <p style={{ color:"#C9A86A", fontSize:10, letterSpacing:"0.32em", textTransform:"uppercase", margin:0, marginBottom:48 }}>Enter private code</p>

      <div style={{ display:"flex", gap:12, width:"100%", maxWidth:320 }}>
        <input value={code} onChange={e=>setCode(e.target.value)} onKeyDown={e=>e.key==="Enter"&&submit()} placeholder="PRIVATE CODE" autoFocus
          style={{ flex:1, background:"#0F0F0F", border:"1px solid #1A1A1A", borderBottom: error ? "1px solid #ff4444" : "1px solid #C9A86A", color:"#FFFEFB", padding:"18px 20px", fontSize:13, letterSpacing:"0.18em", outline:"none", textAlign:"center" }} />
        <button onClick={submit} style={{ background:"#C9A86A", color:"#0A0A0A", border:"none", padding:"0 26px", fontSize:20, cursor:"pointer", transition:"opacity 0.2s" }}>→</button>
      </div>

      {error ? (
        <p style={{ color:"#ff6666", fontSize:11, marginTop:18, letterSpacing:"0.06em", textAlign:"center" }}>{error}</p>
      ) : (
        <p style={{ color:"#6B6B6B", fontSize:10, marginTop:18, letterSpacing:"0.12em", textAlign:"center" }}>Request code from your listing agent</p>
      )}

      <p style={{ marginTop:96, fontSize:9, color:"#2A2A2A", letterSpacing:"0.24em", textTransform:"uppercase" }}>Tap Universal • One QR • All Listings</p>
    </div>
  );
}
