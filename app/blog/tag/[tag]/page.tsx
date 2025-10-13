import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Tag as TagIcon } from "lucide-react";
import { getPostsByTag, getAllTags } from "@/lib/blog";
import BlogCard from "@/app/components/blog/BlogCard";
import TagCloud from "@/app/components/blog/TagCloud";

interface TagPageProps {
  params: Promise<{ tag: string }>;
}

// Generate static params for all tags
export async function generateStaticParams() {
  const tags = getAllTags();
  return tags.map((tagItem) => ({ tag: tagItem.tag }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: TagPageProps): Promise<Metadata> {
  const { tag } = await params;
  const posts = getPostsByTag(tag);

  if (posts.length === 0) {
    return {
      title: "Tag Not Found",
    };
  }

  return {
    title: `${tag} Articles | MedTech Engineering Blog`,
    description: `Explore ${posts.length} article${posts.length !== 1 ? "s" : ""} about ${tag} in medical device development, V&V, and systems engineering.`,
    keywords: [tag, "medical device", "systems engineering", "V&V"].join(", "),
    openGraph: {
      title: `${tag} Articles`,
      description: `Technical articles about ${tag}`,
      type: "website",
    },
  };
}

export default async function TagPage({ params }: TagPageProps) {
  const { tag } = await params;
  const posts = getPostsByTag(tag);
  const allTags = getAllTags();

  if (posts.length === 0) {
    notFound();
  }

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

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#14B8A6] to-[#06B6D4] rounded-full mb-4">
            <TagIcon className="w-8 h-8 text-white" />
          </div>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            {tag}
          </h1>
          <p
            className="text-xl text-gray-400"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            {posts.length} article{posts.length !== 1 ? "s" : ""} about {tag}
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </div>

        {/* Other Tags Section */}
        <div className="mt-16 pt-8 border-t border-[#14B8A6]/20">
          <h2
            className="text-2xl font-bold text-white mb-6 text-center"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Explore Other Topics
          </h2>
          <TagCloud tags={allTags} maxTags={12} currentTag={tag} />
        </div>
      </div>
    </div>
  );
}
