import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MapPin, Languages, GraduationCap, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Ratan Lal Bunkar - Systems Integration & Test Automation Engineer specializing in IoT medical devices, Python-based ATE, and regulated environments",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-4xl">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold">About Me</h1>
          <p className="text-muted-foreground text-lg">
            Systems Integration & Test Automation Engineer
          </p>
        </div>

        {/* Professional Summary */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Professional Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              Results-driven Systems Integration & Test Automation Engineer with
              3+ years of experience building smart IoT and embedded
              electromechanical medical devices. Expert in Python-based
              automated test equipment (ATE), supplier transfer, and risk-based
              verification & validation in regulated environments (ISO 13485,
              ISO 14971, ISO 9001). Proven track record in New Product
              Development (NPD) and New Product Introduction (NPI), reducing
              verification & validation cycle time by 30% through innovative
              automation solutions. Specializes in translating design
              requirements into traceable system specifications using
              Model-Based Systems Engineering (MBSE) methodologies.
            </p>
          </CardContent>
        </Card>

        {/* Value Proposition */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Key Strengths</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="bg-primary text-primary-foreground mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold">
                  1
                </div>
                <p className="text-muted-foreground">
                  <span className="text-foreground font-medium">
                    End-to-End Product Development:
                  </span>{" "}
                  From user requirements gathering through design transfer to
                  manufacturing, ensuring complete product lifecycle management
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-primary text-primary-foreground mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold">
                  2
                </div>
                <p className="text-muted-foreground">
                  <span className="text-foreground font-medium">
                    Cost-Effective Test Automation:
                  </span>{" "}
                  Develops innovative Python-based automated test solutions
                  using low-cost single-board computers (Raspberry Pi),
                  significantly reducing testing costs while increasing coverage
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-primary text-primary-foreground mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold">
                  3
                </div>
                <p className="text-muted-foreground">
                  <span className="text-foreground font-medium">
                    Regulatory Expertise:
                  </span>{" "}
                  Deep knowledge of medical device standards including ISO
                  13485, ISO 14971, IEC 60601, and ISO 11608 with proven
                  compliance track record
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-primary text-primary-foreground mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold">
                  4
                </div>
                <p className="text-muted-foreground">
                  <span className="text-foreground font-medium">
                    Cross-Functional Leadership:
                  </span>{" "}
                  Proven ability to collaborate effectively across R&D,
                  firmware, quality, NPI, and manufacturing teams to deliver
                  complex projects
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-primary text-primary-foreground mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold">
                  5
                </div>
                <p className="text-muted-foreground">
                  <span className="text-foreground font-medium">
                    MBSE Specialist:
                  </span>{" "}
                  Expert in Model-Based Systems Engineering with comprehensive
                  requirements traceability and documentation excellence
                </p>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Quick Facts */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Quick Facts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              {/* Location */}
              <div className="flex items-start gap-3">
                <MapPin className="text-primary mt-1 h-5 w-5" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground text-sm">
                    {siteConfig.location}
                  </p>
                  <p className="text-muted-foreground mt-1 text-xs">
                    Open to relocation opportunities
                  </p>
                </div>
              </div>

              {/* Languages */}
              <div className="flex items-start gap-3">
                <Languages className="text-primary mt-1 h-5 w-5" />
                <div>
                  <p className="font-medium">Languages</p>
                  <div className="mt-1 flex gap-2">
                    <Badge variant="secondary">English</Badge>
                    <Badge variant="secondary">Hindi</Badge>
                  </div>
                  <p className="text-muted-foreground mt-1 text-xs">
                    Professional proficiency
                  </p>
                </div>
              </div>

              {/* Education */}
              <div className="flex items-start gap-3">
                <GraduationCap className="text-primary mt-1 h-5 w-5" />
                <div>
                  <p className="font-medium">Education</p>
                  <p className="text-muted-foreground text-sm">
                    M.S. Electrical Engineering
                  </p>
                  <p className="text-muted-foreground text-xs">
                    National Taiwan University of Technology (NTUT)
                  </p>
                  <p className="text-muted-foreground mt-2 text-sm">
                    B.E. Electrical Engineering
                  </p>
                  <p className="text-muted-foreground text-xs">
                    Indian Institute of Technology (IIT) Ropar
                  </p>
                </div>
              </div>

              {/* Certifications & Standards */}
              <div className="flex items-start gap-3">
                <div className="text-primary mt-1 flex h-5 w-5 items-center justify-center font-bold">
                  ✓
                </div>
                <div>
                  <p className="font-medium">Compliance Expertise</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    <Badge variant="outline" className="text-xs">
                      ISO 13485
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      ISO 14971
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      ISO 9001
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      IEC 60601
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      ISO 11608
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Separator className="my-8" />

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="mb-4 text-2xl font-bold">Explore More</h2>
          <p className="text-muted-foreground mb-6">
            Learn more about my work and technical insights
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild>
              <Link href="/projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/blog">
                Read Blog
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
