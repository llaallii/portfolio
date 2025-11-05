import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Technical skills and expertise in web development, machine learning, and software engineering",
};

export default function SkillsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 text-4xl font-bold">Skills & Expertise</h1>
        <p className="text-muted-foreground mb-8 text-lg">
          Technical skills and proficiencies across various domains
        </p>

        <Card>
          <CardHeader>
            <CardTitle>Coming Soon</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              This page will showcase my technical skills including programming
              languages, frameworks, tools, and technologies I work with.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
