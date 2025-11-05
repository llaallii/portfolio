import Link from "next/link";
import Image from "next/image";
import { fetchSanity } from "@/lib/sanity";
import { allPostsQuery } from "@/sanity/lib/queries";
import { Post } from "@/types/sanity";
import { urlFor } from "@/lib/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const revalidate = 3600; // 1 hour

export const metadata = {
  title: "Blog",
  description: "Read our latest articles and insights",
};

export default async function BlogPage() {
  const posts = await fetchSanity<Post[]>({
    query: allPostsQuery,
    tags: ["post"],
    revalidate: 3600,
  });

  if (!posts || posts.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="mb-8 text-4xl font-bold">Blog</h1>
        <p className="text-muted-foreground">
          No posts published yet. Check back soon!
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-12 text-4xl font-bold">Blog</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link key={post._id} href={`/blog/${post.slug.current}`}>
            <Card className="h-full transition-all hover:shadow-lg">
              {post.coverImage && (
                <div className="relative aspect-[16/9] overflow-hidden rounded-t-lg">
                  <Image
                    src={urlFor(post.coverImage).width(600).height(340).url()}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <CardHeader>
                <h2 className="text-2xl font-semibold">{post.title}</h2>
                <p className="text-muted-foreground text-sm">
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2">
                {post.tags?.slice(0, 3).map((tag) => (
                  <Badge key={tag._id} variant="secondary">
                    {tag.title}
                  </Badge>
                ))}
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
