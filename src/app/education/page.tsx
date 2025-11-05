import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Education",
  description: "Educational background and academic qualifications",
};

export default function EducationPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 text-4xl font-bold">Education</h1>
        <p className="text-muted-foreground mb-8 text-lg">
          Academic background and qualifications
        </p>

        <Card>
          <CardHeader>
            <CardTitle>Coming Soon</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              This page will showcase my educational background including
              degrees, institutions, specializations, and academic achievements.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
