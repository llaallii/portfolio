import { generateRSSFeed } from "@/lib/rss";

export async function GET() {
  const feed = generateRSSFeed();
  const rss = feed.rss2();

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
