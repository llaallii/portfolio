import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional work experience and career history",
};

export default function ExperiencePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 text-4xl font-bold">Work Experience</h1>
        <p className="text-muted-foreground mb-8 text-lg">
          Professional journey and career milestones
        </p>

        <Card>
          <CardHeader>
            <CardTitle>Coming Soon</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              This page will display my professional work experience, roles,
              responsibilities, and achievements throughout my career.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
