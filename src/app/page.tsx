import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { fetchSanity } from "@/lib/sanity";
import { allPostsQuery, featuredProjectsQuery } from "@/sanity/lib/queries";
import { Post, Project } from "@/types/sanity";
import Link from "next/link";
import { urlFor } from "@/lib/image";
import Image from "next/image";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

export const revalidate = 3600; // Revalidate every hour

export default async function Home() {
  const [posts, projects] = await Promise.all([
    fetchSanity<Post[]>({
      query: allPostsQuery,
      tags: ["post"],
      revalidate: 3600,
    }),
    fetchSanity<Project[]>({
      query: featuredProjectsQuery,
      tags: ["project"],
      revalidate: 3600,
    }),
  ]);

  const latestPosts = posts.slice(0, 3);
  const featuredProjects = projects.slice(0, 3);

  return (
    <main className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="mb-20 flex min-h-[60vh] flex-col items-center justify-center text-center">
        <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
          Hi, I&apos;m <span className="text-primary">&lt;YOUR_NAME&gt;</span>
        </h1>
        <p className="text-muted-foreground mb-8 max-w-2xl text-xl">
          Building innovative software solutions with modern web technologies.
          Passionate about creating exceptional user experiences and solving
          complex problems.
        </p>
        <div className="flex gap-4">
          <Button asChild size="lg">
            <Link href="/blog">
              Read My Blog <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/projects">View Projects</Link>
          </Button>
        </div>
      </section>

      {/* Latest Blog Posts */}
      {latestPosts.length > 0 && (
        <section className="mb-20">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-3xl font-bold">Latest Blog Posts</h2>
            <Button asChild variant="ghost">
              <Link href="/blog">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map((post) => (
              <Card key={post._id} className="overflow-hidden">
                {post.coverImage && (
                  <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                      src={urlFor(post.coverImage).width(600).height(340).url()}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="line-clamp-2">
                    <Link
                      href={`/blog/${post.slug.current}`}
                      className="hover:text-primary"
                    >
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {post.tags?.slice(0, 3).map((tag) => (
                      <Badge key={tag._id} variant="secondary">
                        {tag.title}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section>
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <Button asChild variant="ghost">
              <Link href="/projects">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <Card key={project._id} className="overflow-hidden">
                {project.coverImage && (
                  <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                      src={urlFor(project.coverImage)
                        .width(600)
                        .height(340)
                        .url()}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="line-clamp-1">
                    <Link
                      href={`/projects/${project.slug.current}`}
                      className="hover:text-primary"
                    >
                      {project.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {project.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.technologies?.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <Button asChild variant="outline" size="sm">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.projectUrl && (
                      <Button asChild variant="outline" size="sm">
                        <a
                          href={project.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
