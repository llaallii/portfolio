import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { fetchSanity } from "@/lib/sanity";
import { allProjectsQuery } from "@/sanity/lib/queries";
import { Project } from "@/types/sanity";
import { urlFor } from "@/lib/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const revalidate = 3600;

export const metadata = {
  title: "Projects",
  description: "Explore my portfolio of projects and work",
};

export default async function ProjectsPage() {
  const projects = await fetchSanity<Project[]>({
    query: allProjectsQuery,
    tags: ["project"],
    revalidate: 3600,
  });

  if (!projects || projects.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="mb-8 text-4xl font-bold">Projects</h1>
        <p className="text-muted-foreground">
          No projects available yet. Check back soon!
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-12 text-4xl font-bold">Projects</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project._id} className="flex h-full flex-col">
            {project.coverImage && (
              <div className="relative aspect-[16/9] overflow-hidden rounded-t-lg">
                <Image
                  src={urlFor(project.coverImage).width(600).height(340).url()}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <CardHeader>
              <Link href={`/projects/${project.slug.current}`}>
                <h2 className="hover:text-primary text-2xl font-semibold">
                  {project.title}
                </h2>
              </Link>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-muted-foreground mb-4">{project.excerpt}</p>
              {project.technologies && project.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              )}
            </CardContent>
            <CardFooter className="flex gap-2">
              {project.projectUrl && (
                <Button variant="outline" size="sm" asChild className="flex-1">
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button variant="outline" size="sm" asChild className="flex-1">
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
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
