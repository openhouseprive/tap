import { notFound, redirect } from "next/navigation";

// Same map as your main page - short codes for brass cards
const CODE_MAP: Record<string, string> = {
  "1848": "https://1848-w-15th-ave-demo.vercel.app",
  "1848w15": "https://1848-w-15th-ave-demo.vercel.app",
  "1848-demo": "https://1848-demo.vercel.app",
  "1848-w-15th-ave-demo": "https://1848-w-15th-ave-demo.vercel.app",
};

export default function DirectCode({ params }: { params: { id: string } }) {
  const id = params.id.toLowerCase().trim();
  const url = CODE_MAP[id];
  if (!url) notFound();
  redirect(url);
}
