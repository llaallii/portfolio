import {
  PortableText as PortableTextReact,
  PortableTextComponents,
} from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";
import Image from "next/image";
import { urlFor } from "@/lib/image";

const components: PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="mt-8 mb-4 text-4xl font-bold">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="mt-6 mb-4 text-3xl font-bold">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-5 mb-3 text-2xl font-semibold">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="mt-4 mb-3 text-xl font-semibold">{children}</h4>
    ),
    normal: ({ children }) => <p className="mb-4 leading-7">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-primary my-6 border-l-4 pl-4 italic">
        {children}
      </blockquote>
    ),
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <figure className="my-8">
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src={urlFor(value).width(1200).height(675).url()}
              alt={value.alt || "Image"}
              fill
              className="object-cover"
            />
          </div>
          {value.caption && (
            <figcaption className="text-muted-foreground mt-2 text-center text-sm italic">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-4 ml-6 list-disc space-y-2">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mb-4 ml-6 list-decimal space-y-2">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-7">{children}</li>,
    number: ({ children }) => <li className="leading-7">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="bg-muted rounded px-1.5 py-0.5 font-mono text-sm">
        {children}
      </code>
    ),
    link: ({ value, children }) => {
      const target = value?.href?.startsWith("http") ? "_blank" : undefined;
      const rel = target === "_blank" ? "noopener noreferrer" : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={rel}
          className="text-primary decoration-primary/30 hover:decoration-primary font-medium underline underline-offset-2"
        >
          {children}
        </a>
      );
    },
  },
};

interface PortableTextProps {
  value: PortableTextBlock[];
  className?: string;
}

export function PortableText({ value, className }: PortableTextProps) {
  return (
    <div className={className}>
      <PortableTextReact value={value} components={components} />
    </div>
  );
}
