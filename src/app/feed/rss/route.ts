import { Feed } from "feed";
import { fetchSanity } from "@/lib/sanity";
import { allPostsQuery } from "@/sanity/lib/queries";
import { Post } from "@/types/sanity";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const feed = new Feed({
    title: "<YOUR_NAME> - Blog",
    description: "Latest blog posts from <YOUR_NAME>",
    id: baseUrl,
    link: baseUrl,
    language: "en",
    image: `${baseUrl}/og-image.png`,
    favicon: `${baseUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, <YOUR_NAME>`,
    feedLinks: {
      rss2: `${baseUrl}/feed/rss`,
    },
    author: {
      name: "<YOUR_NAME>",
      link: baseUrl,
    },
  });

  const posts = await fetchSanity<Post[]>({
    query: allPostsQuery,
    tags: ["post"],
    revalidate: 3600,
  });

  posts.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: `${baseUrl}/blog/${post.slug.current}`,
      link: `${baseUrl}/blog/${post.slug.current}`,
      description: post.excerpt || "",
      content: post.excerpt || "",
      author: [
        {
          name: post.author?.name || "<YOUR_NAME>",
        },
      ],
      date: new Date(post.publishedAt),
    });
  });

  return new Response(feed.rss2(), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
