import "server-only";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import MarkdownIt from "markdown-it";
import type {
  BlogPost,
  BlogPostMetadata,
  BlogFrontmatter,
  TagWithCount,
  TableOfContentsItem,
} from "./types/blog";

const postsDirectory = path.join(process.cwd(), "content/blog");

// Initialize markdown parser
const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
});

/**
 * Get all blog post slugs
 */
export function getAllPostSlugs(): string[] {
  try {
    if (!fs.existsSync(postsDirectory)) {
      return [];
    }
    const files = fs.readdirSync(postsDirectory);
    return files
      .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
      .map((file) => file.replace(/\.mdx?$/, ""));
  } catch (error) {
    console.error("Error reading post slugs:", error);
    return [];
  }
}

/**
 * Get a single blog post by slug
 */
export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    const frontmatter = data as BlogFrontmatter;

    // Calculate reading time
    const stats = readingTime(content);

    // Generate excerpt (first 160 characters)
    const excerpt = content.substring(0, 160).trim() + "...";

    return {
      slug,
      frontmatter,
      content,
      excerpt,
      readingTime: stats.text,
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

/**
 * Get all blog posts with metadata
 */
export function getAllPosts(includeDrafts = false): BlogPostMetadata[] {
  const slugs = getAllPostSlugs();
  const posts = slugs
    .map((slug) => {
      const post = getPostBySlug(slug);
      if (!post) return null;

      // Filter out drafts unless explicitly requested
      if (!includeDrafts && post.frontmatter.draft) {
        return null;
      }

      return {
        slug: post.slug,
        title: post.frontmatter.title,
        description: post.frontmatter.description,
        date: post.frontmatter.date,
        updated: post.frontmatter.updated,
        tags: post.frontmatter.tags,
        cover: post.frontmatter.cover,
        readingTime: post.readingTime,
      };
    })
    .filter((post): post is BlogPostMetadata => post !== null)
    .sort((a, b) => {
      // Sort by date, most recent first
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  return posts;
}

/**
 * Get posts by tag
 */
export function getPostsByTag(tag: string): BlogPostMetadata[] {
  const allPosts = getAllPosts();
  return allPosts.filter((post) =>
    post.tags.map((t) => t.toLowerCase()).includes(tag.toLowerCase())
  );
}

/**
 * Get all tags with post counts
 */
export function getAllTags(): TagWithCount[] {
  const allPosts = getAllPosts();
  const tagCounts = new Map<string, number>();

  allPosts.forEach((post) => {
    post.tags.forEach((tag) => {
      const normalizedTag = tag.toLowerCase();
      tagCounts.set(normalizedTag, (tagCounts.get(normalizedTag) || 0) + 1);
    });
  });

  return Array.from(tagCounts.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
}

/**
 * Get related posts based on shared tags
 */
export function getRelatedPosts(
  currentSlug: string,
  limit = 3
): BlogPostMetadata[] {
  const currentPost = getPostBySlug(currentSlug);
  if (!currentPost) return [];

  const allPosts = getAllPosts();
  const currentTags = currentPost.frontmatter.tags.map((t) => t.toLowerCase());

  // Calculate relevance score for each post
  const scoredPosts = allPosts
    .filter((post) => post.slug !== currentSlug)
    .map((post) => {
      const sharedTags = post.tags
        .map((t) => t.toLowerCase())
        .filter((tag) => currentTags.includes(tag));
      return {
        post,
        score: sharedTags.length,
      };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);

  return scoredPosts.slice(0, limit).map((item) => item.post);
}

/**
 * Render markdown to HTML
 */
export function renderMarkdown(content: string): string {
  return md.render(content);
}

/**
 * Extract table of contents from markdown content
 */
export function extractTableOfContents(
  content: string
): TableOfContentsItem[] {
  const toc: TableOfContentsItem[] = [];
  const lines = content.split("\n");

  lines.forEach((line) => {
    const match = line.match(/^(#{1,3})\s+(.+)$/);
    if (match) {
      const level = match[1].length;
      const title = match[2].trim();
      const id = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");

      toc.push({ id, title, level });
    }
  });

  return toc;
}

/**
 * Get next and previous posts
 */
export function getAdjacentPosts(currentSlug: string): {
  prev: BlogPostMetadata | null;
  next: BlogPostMetadata | null;
} {
  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex((post) => post.slug === currentSlug);

  if (currentIndex === -1) {
    return { prev: null, next: null };
  }

  return {
    prev: currentIndex > 0 ? allPosts[currentIndex - 1] : null,
    next:
      currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null,
  };
}

/**
 * Search posts by query (title, description, tags)
 */
export function searchPosts(query: string): BlogPostMetadata[] {
  const allPosts = getAllPosts();
  const normalizedQuery = query.toLowerCase().trim();

  if (!normalizedQuery) return allPosts;

  return allPosts.filter((post) => {
    const titleMatch = post.title.toLowerCase().includes(normalizedQuery);
    const descMatch = post.description.toLowerCase().includes(normalizedQuery);
    const tagMatch = post.tags.some((tag) =>
      tag.toLowerCase().includes(normalizedQuery)
    );

    return titleMatch || descMatch || tagMatch;
  });
}
