import { PortableTextBlock } from "@portabletext/types";

export interface Author {
  _id: string;
  name: string;
  slug: { current: string };
  image?: {
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
  bio?: PortableTextBlock[];
}

export interface Tag {
  _id: string;
  title: string;
  slug: { current: string };
  description?: string;
}

export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  coverImage: {
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
  content?: PortableTextBlock[];
  publishedAt: string;
  featured?: boolean;
  author: Author;
  tags?: Tag[];
}

export interface ProjectGalleryImage {
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
  caption?: string;
}

export interface Project {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  coverImage: {
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
  description?: PortableTextBlock[];
  role?: string;
  duration?: string;
  challenge?: PortableTextBlock[];
  constraints?: PortableTextBlock[];
  approach?: PortableTextBlock[];
  outcomes?: PortableTextBlock[];
  gallery?: ProjectGalleryImage[];
  technologies?: string[];
  projectUrl?: string;
  githubUrl?: string;
  publishedAt: string;
  featured?: boolean;
}
