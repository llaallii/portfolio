import { MetadataRoute } from "next";
import { fetchSanity } from "@/lib/sanity";
import { allPostsQuery, allProjectsQuery } from "@/sanity/lib/queries";
import { Post, Project } from "@/types/sanity";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  // Fetch all posts and projects
  const [posts, projects] = await Promise.all([
    fetchSanity<Post[]>({
      query: allPostsQuery,
      tags: ["post"],
      revalidate: 3600,
    }),
    fetchSanity<Project[]>({
      query: allProjectsQuery,
      tags: ["project"],
      revalidate: 3600,
    }),
  ]);

  // Static routes
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  // Blog post routes
  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug.current}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Project routes
  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug.current}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...routes, ...postRoutes, ...projectRoutes];
}
