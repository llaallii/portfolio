import { getAllPosts, getAllTags } from "@/lib/blog";
import BlogClient from "./BlogClient";

export default function BlogPage() {
  const allPosts = getAllPosts();
  const allTags = getAllTags();

  return <BlogClient allPosts={allPosts} allTags={allTags} />;
}
