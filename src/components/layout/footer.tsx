"use client";

import Link from "next/link";
import { Linkedin, Mail, Phone, Presentation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-border/40 bg-background border-t">
      <div className="container px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">{siteConfig.name}</h3>
            <p className="text-muted-foreground text-sm">
              {siteConfig.description}
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" asChild>
                <a
                  href={siteConfig.links.linkedin}
                  aria-label="LinkedIn profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href={`mailto:${siteConfig.email}`} aria-label="Send email">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {siteConfig.nav.slice(0, 4).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* More Links */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">More</h3>
            <nav className="flex flex-col space-y-2">
              {siteConfig.nav.slice(4).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact & Presentation */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="text-muted-foreground space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-foreground"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>{siteConfig.phone}</span>
              </div>
            </div>
            <Button
              variant="default"
              className="mt-4 w-full"
              onClick={() => {
                // Placeholder for future presentation mode
                alert("Presentation mode coming soon!");
              }}
            >
              <Presentation className="mr-2 h-4 w-4" />
              Start Presentation
            </Button>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Copyright */}
        <div className="text-muted-foreground flex flex-col items-center justify-between gap-4 text-center text-sm sm:flex-row sm:text-left">
          <p>
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p>
            Built with{" "}
            <Link
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground font-medium underline underline-offset-4"
            >
              Next.js
            </Link>{" "}
            &{" "}
            <Link
              href="https://sanity.io"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground font-medium underline underline-offset-4"
            >
              Sanity
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
