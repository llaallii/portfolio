import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { fetchSanity } from "@/lib/sanity";
import { postBySlugQuery, slugsForQuery } from "@/sanity/lib/queries";
import { Post } from "@/types/sanity";
import { urlFor } from "@/lib/image";
import { PortableText } from "@/components/portable-text";
import { Badge } from "@/components/ui/badge";

export const revalidate = 3600;

export async function generateStaticParams() {
  const slugs = await fetchSanity<{ slug: string }[]>({
    query: slugsForQuery("post"),
    revalidate: 3600,
  });

  return slugs.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await fetchSanity<Post>({
    query: postBySlugQuery,
    params: { slug },
    tags: [`post:${slug}`],
  });

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      images: post.coverImage
        ? [urlFor(post.coverImage).width(1200).height(630).url()]
        : [],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await fetchSanity<Post>({
    query: postBySlugQuery,
    params: { slug },
    tags: [`post:${slug}`],
    revalidate: 3600,
  });

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/blog"
          className="text-muted-foreground hover:text-foreground mb-8 inline-flex items-center text-sm"
        >
          ← Back to Blog
        </Link>

        <header className="mb-8">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">{post.title}</h1>
          <div className="text-muted-foreground flex flex-wrap items-center gap-4 text-sm">
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            {post.author && (
              <div className="flex items-center gap-2">
                {post.author.image && (
                  <Image
                    src={urlFor(post.author.image).width(32).height(32).url()}
                    alt={post.author.name}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                )}
                <span>By {post.author.name}</span>
              </div>
            )}
          </div>
          {post.tags && post.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag._id} variant="secondary">
                  {tag.title}
                </Badge>
              ))}
            </div>
          )}
        </header>

        {post.coverImage && (
          <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-lg">
            <Image
              src={urlFor(post.coverImage).width(1200).height(675).url()}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {post.content && (
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <PortableText value={post.content} />
          </div>
        )}
      </div>
    </article>
  );
}
