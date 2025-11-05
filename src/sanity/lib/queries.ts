export const allPostsQuery = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  coverImage,
  publishedAt,
  featured,
  author->{
    name,
    slug,
    image
  },
  tags[]->{
    title,
    slug
  }
}`;

export const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  coverImage,
  content,
  publishedAt,
  featured,
  author->{
    name,
    slug,
    image,
    bio
  },
  tags[]->{
    title,
    slug,
    description
  }
}`;

export const allProjectsQuery = `*[_type == "project"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  coverImage,
  technologies,
  projectUrl,
  githubUrl,
  publishedAt,
  featured
}`;

export const projectBySlugQuery = `*[_type == "project" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  coverImage,
  description,
  technologies,
  projectUrl,
  githubUrl,
  publishedAt,
  featured
}`;

export const slugsForQuery = (type: "post" | "project") =>
  `*[_type == "${type}"] { "slug": slug.current }`;

export const featuredPostsQuery = `*[_type == "post" && featured == true] | order(publishedAt desc) [0...3] {
  _id,
  title,
  slug,
  excerpt,
  coverImage,
  publishedAt,
  author->{
    name,
    slug
  }
}`;

export const featuredProjectsQuery = `*[_type == "project" && featured == true] | order(publishedAt desc) [0...3] {
  _id,
  title,
  slug,
  excerpt,
  coverImage,
  technologies,
  publishedAt
}`;
