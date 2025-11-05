import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with me for opportunities, collaborations, or inquiries",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 text-4xl font-bold">Get in Touch</h1>
        <p className="text-muted-foreground mb-8 text-lg">
          Let&apos;s connect and discuss opportunities or collaborations
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="text-muted-foreground h-5 w-5" />
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-muted-foreground hover:text-foreground text-sm"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-muted-foreground h-5 w-5" />
                <div>
                  <p className="text-sm font-medium">Phone</p>
                  <p className="text-muted-foreground text-sm">
                    {siteConfig.phone}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="text-muted-foreground h-5 w-5" />
                <div>
                  <p className="text-sm font-medium">Location</p>
                  <p className="text-muted-foreground text-sm">
                    {siteConfig.location}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Linkedin className="text-muted-foreground h-5 w-5" />
                <div>
                  <p className="text-sm font-medium">LinkedIn</p>
                  <a
                    href={siteConfig.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground text-sm"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full" asChild>
                <a href={`mailto:${siteConfig.email}`}>
                  <Mail className="mr-2 h-4 w-4" />
                  Send Email
                </a>
              </Button>

              <Button variant="outline" className="w-full" asChild>
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  Connect on LinkedIn
                </a>
              </Button>

              <div className="pt-4">
                <p className="text-muted-foreground text-sm">
                  Contact form coming soon! For now, please use the email or
                  LinkedIn links above to get in touch.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
