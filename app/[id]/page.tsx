import { notFound, redirect } from "next/navigation";

const LISTINGS: Record<string, string> = {
  "1848-w-15th-ave-demo": "https://1848-w-15th-ave-demo.vercel.app",
  "1848-demo": "https://1848-demo.vercel.app",
};

export default function ListingRedirect({ params }: { params: { id: string } }) {
  const url = LISTINGS[params.id];
  if (!url) notFound();
  redirect(url);
}
