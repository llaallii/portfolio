import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ExternalLink,
  Github,
  AlertCircle,
  Lightbulb,
  Target,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";
import { fetchSanity } from "@/lib/sanity";
import { projectBySlugQuery, slugsForQuery } from "@/sanity/lib/queries";
import { Project } from "@/types/sanity";
import { urlFor } from "@/lib/image";
import { PortableText } from "@/components/portable-text";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

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
      <div className="mx-auto max-w-4xl">
        <Link
          href="/projects"
          className="text-muted-foreground hover:text-foreground mb-8 inline-flex items-center text-sm"
        >
          ← Back to Projects
        </Link>

        {/* Hero Header */}
        <header className="mb-8">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            {project.title}
          </h1>

          {/* Role & Duration */}
          <div className="text-muted-foreground mb-4 flex flex-wrap gap-4 text-sm">
            {project.role && (
              <span>
                <strong className="text-foreground">Role:</strong>{" "}
                {project.role}
              </span>
            )}
            {project.duration && (
              <span>
                <strong className="text-foreground">Duration:</strong>{" "}
                {project.duration}
              </span>
            )}
          </div>

          {/* Technologies */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          )}

          {/* Action Buttons */}
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

        {/* Cover Image */}
        {project.coverImage && (
          <div className="relative mb-12 aspect-[16/9] overflow-hidden rounded-lg">
            <Image
              src={urlFor(project.coverImage).width(1200).height(675).url()}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Overview */}
        {project.description && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate dark:prose-invert max-w-none">
              <PortableText value={project.description} />
            </CardContent>
          </Card>
        )}

        {/* Challenge / Problem */}
        {project.challenge && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                Challenge
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate dark:prose-invert max-w-none">
              <PortableText value={project.challenge} />
            </CardContent>
          </Card>
        )}

        {/* Constraints */}
        {project.constraints && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5" />
                Constraints & Requirements
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate dark:prose-invert max-w-none">
              <PortableText value={project.constraints} />
            </CardContent>
          </Card>
        )}

        {/* Approach / Solution */}
        {project.approach && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5" />
                Approach & Solution
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate dark:prose-invert max-w-none">
              <PortableText value={project.approach} />
            </CardContent>
          </Card>
        )}

        {/* Outcomes / Results */}
        {project.outcomes && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Outcomes & Impact
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate dark:prose-invert max-w-none">
              <PortableText value={project.outcomes} />
            </CardContent>
          </Card>
        )}

        {/* Image Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <>
            <Separator className="my-8" />
            <div className="mb-8">
              <h2 className="mb-6 text-2xl font-bold">Gallery</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {project.gallery.map((image, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-lg border"
                  >
                    <div className="relative aspect-[16/9]">
                      <Image
                        src={urlFor(image).width(800).height(450).url()}
                        alt={image.alt || `Gallery image ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    {image.caption && (
                      <div className="bg-muted/50 p-3 text-sm">
                        {image.caption}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Back to Projects CTA */}
        <Separator className="my-8" />
        <div className="text-center">
          <Button variant="outline" asChild>
            <Link href="/projects">← Back to All Projects</Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
