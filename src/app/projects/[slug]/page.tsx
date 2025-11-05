import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { fetchSanity } from "@/lib/sanity";
import { projectBySlugQuery, slugsForQuery } from "@/sanity/lib/queries";
import { Project } from "@/types/sanity";
import { urlFor } from "@/lib/image";
import { PortableText } from "@/components/portable-text";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const revalidate = 3600;

export async function generateStaticParams() {
  const slugs = await fetchSanity<{ slug: string }[]>({
    query: slugsForQuery("project"),
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
  const project = await fetchSanity<Project>({
    query: projectBySlugQuery,
    params: { slug },
    tags: [`project:${slug}`],
  });

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.excerpt,
    openGraph: {
      title: project.title,
      description: project.excerpt,
      type: "website",
      images: project.coverImage
        ? [urlFor(project.coverImage).width(1200).height(630).url()]
        : [],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await fetchSanity<Project>({
    query: projectBySlugQuery,
    params: { slug },
    tags: [`project:${slug}`],
    revalidate: 3600,
  });

  if (!project) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/projects"
          className="text-muted-foreground hover:text-foreground mb-8 inline-flex items-center text-sm"
        >
          ← Back to Projects
        </Link>

        <header className="mb-8">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            {project.title}
          </h1>
          {project.technologies && project.technologies.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          )}
          <div className="flex gap-3">
            {project.projectUrl && (
              <Button asChild>
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Live Demo
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button variant="outline" asChild>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View Source
                </a>
              </Button>
            )}
          </div>
        </header>

        {project.coverImage && (
          <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-lg">
            <Image
              src={urlFor(project.coverImage).width(1200).height(675).url()}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {project.description && (
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <PortableText value={project.description} />
          </div>
        )}
      </div>
    </article>
  );
}
