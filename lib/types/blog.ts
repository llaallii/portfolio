// Blog post types and interfaces

export interface BlogFrontmatter {
  title: string;
  description: string;
  date: string; // ISO date format
  updated?: string; // ISO date format for substantial edits
  tags: string[];
  cover?: string; // Path to cover image
  draft?: boolean;
  canonical?: string; // Canonical URL if cross-posted
  author?: string;
}

export interface BlogPost {
  slug: string;
  frontmatter: BlogFrontmatter;
  content: string;
  excerpt: string;
  readingTime: string;
}

export interface BlogPostMetadata {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  tags: string[];
  cover?: string;
  readingTime: string;
}

export interface TableOfContentsItem {
  id: string;
  title: string;
  level: number; // 1, 2, or 3 for H1, H2, H3
}

export interface RelatedPost {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  readingTime: string;
}

export interface TagWithCount {
  tag: string;
  count: number;
}
