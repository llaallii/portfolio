import "server-only";
import { Feed } from "feed";
import { getAllPosts } from "./blog";
import { PERSONAL_INFO } from "./constants";

export function generateRSSFeed() {
  const siteURL = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
  const date = new Date();

  const feed = new Feed({
    title: `${PERSONAL_INFO.name} - MedTech Engineering Blog`,
    description:
      "Technical insights on medical device development, V&V, regulatory compliance, and systems engineering",
    id: siteURL,
    link: siteURL,
    language: "en",
    image: `${siteURL}/images/logo.png`,
    favicon: `${siteURL}/favicon.ico`,
    copyright: `All rights reserved ${date.getFullYear()}, ${PERSONAL_INFO.name}`,
    updated: date,
    generator: "Feed for Node.js",
    feedLinks: {
      rss2: `${siteURL}/rss.xml`,
      json: `${siteURL}/feed.json`,
      atom: `${siteURL}/atom.xml`,
    },
    author: {
      name: PERSONAL_INFO.name,
      email: PERSONAL_INFO.email,
      link: siteURL,
    },
  });

  const posts = getAllPosts();

  posts.forEach((post) => {
    const url = `${siteURL}/blog/${post.slug}`;

    feed.addItem({
      title: post.title,
      id: url,
      link: url,
      description: post.description,
      date: new Date(post.date),
      category: post.tags.map((tag) => ({ name: tag })),
      author: [
        {
          name: PERSONAL_INFO.name,
          email: PERSONAL_INFO.email,
          link: siteURL,
        },
      ],
    });
  });

  return feed;
}
