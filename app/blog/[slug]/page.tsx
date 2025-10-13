import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  getPostBySlug,
  getAllPostSlugs,
  renderMarkdown,
  extractTableOfContents,
  getRelatedPosts,
  getAdjacentPosts,
} from "@/lib/blog";
import BlogPost from "@/app/components/blog/BlogPost";
import TableOfContents from "@/app/components/blog/TableOfContents";
import RelatedPosts from "@/app/components/blog/RelatedPosts";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  const siteURL = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
  const postURL = `${siteURL}/blog/${slug}`;

  return {
    title: `${post.frontmatter.title} | MedTech Engineering Blog`,
    description: post.frontmatter.description,
    keywords: post.frontmatter.tags.join(", "),
    authors: [{ name: post.frontmatter.author || "Ratan Lal Bunkar" }],
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      type: "article",
      publishedTime: post.frontmatter.date,
      modifiedTime: post.frontmatter.updated,
      tags: post.frontmatter.tags,
      url: postURL,
      images: post.frontmatter.cover
        ? [{ url: `${siteURL}${post.frontmatter.cover}` }]
        : [],
    },
    alternates: {
      canonical: post.frontmatter.canonical || postURL,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post || post.frontmatter.draft) {
    notFound();
  }

  const htmlContent = renderMarkdown(post.content);
  const toc = extractTableOfContents(post.content);
  const relatedPosts = getRelatedPosts(slug, 3);
  const { prev, next } = getAdjacentPosts(slug);

  // Only show TOC for longer posts (>1200 words ~ 6 min read)
  const showTOC = toc.length > 3;

  return (
    <div className="min-h-screen bg-[#020617] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Blog Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-[#14B8A6] hover:text-[#06B6D4] mb-8 transition-colors"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className={showTOC ? "lg:col-span-8" : "lg:col-span-12"}>
            <BlogPost
              frontmatter={post.frontmatter}
              readingTime={post.readingTime}
            >
              <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
            </BlogPost>
          </div>

          {/* Sidebar with TOC */}
          {showTOC && (
            <aside className="lg:col-span-4">
              <TableOfContents items={toc} />
            </aside>
          )}
        </div>

        {/* Navigation: Previous/Next Posts */}
        <div className="max-w-4xl mx-auto mt-12 pt-8 border-t border-[#14B8A6]/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Previous Post */}
            {prev && (
              <Link
                href={`/blog/${prev.slug}`}
                className="group p-6 bg-[#1E293B] border border-[#14B8A6]/20 rounded-lg hover:border-[#14B8A6]/50 transition-all"
              >
                <div className="flex items-center gap-2 text-sm text-[#14B8A6] mb-2">
                  <ArrowLeft className="w-4 h-4" />
                  <span style={{ fontFamily: "var(--font-poppins)" }}>
                    Previous
                  </span>
                </div>
                <h3
                  className="text-lg font-bold text-white group-hover:text-[#14B8A6] transition-colors"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {prev.title}
                </h3>
              </Link>
            )}

            {/* Next Post */}
            {next && (
              <Link
                href={`/blog/${next.slug}`}
                className="group p-6 bg-[#1E293B] border border-[#14B8A6]/20 rounded-lg hover:border-[#14B8A6]/50 transition-all text-right md:ml-auto"
              >
                <div className="flex items-center justify-end gap-2 text-sm text-[#14B8A6] mb-2">
                  <span style={{ fontFamily: "var(--font-poppins)" }}>
                    Next
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </div>
                <h3
                  className="text-lg font-bold text-white group-hover:text-[#14B8A6] transition-colors"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {next.title}
                </h3>
              </Link>
            )}
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="max-w-4xl mx-auto">
            <RelatedPosts posts={relatedPosts} />
          </div>
        )}
      </div>
    </div>
  );
}
