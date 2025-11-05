import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Accomplishments",
  description: "Awards, achievements, and notable accomplishments",
};

export default function AccomplishmentsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 text-4xl font-bold">Accomplishments</h1>
        <p className="text-muted-foreground mb-8 text-lg">
          Awards, achievements, and recognition
        </p>

        <Card>
          <CardHeader>
            <CardTitle>Coming Soon</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              This page will highlight my achievements, awards, certifications,
              and other notable accomplishments in my professional journey.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
