"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { BookOpen, Rss } from "lucide-react";
import BlogCard from "../components/blog/BlogCard";
import SearchBar from "../components/blog/SearchBar";
import TagCloud from "../components/blog/TagCloud";
import type { BlogPostMetadata, TagWithCount } from "@/lib/types/blog";

interface BlogClientProps {
  allPosts: BlogPostMetadata[];
  allTags: TagWithCount[];
}

export default function BlogClient({ allPosts, allTags }: BlogClientProps) {
  const [searchQuery, setSearchQuery] = useState("");

  // Client-side search filtering
  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) return allPosts;

    const query = searchQuery.toLowerCase();
    return allPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(query) ||
        post.description.toLowerCase().includes(query) ||
        post.tags.some((tag) => tag.toLowerCase().includes(query))
    );
  }, [searchQuery, allPosts]);

  return (
    <div className="min-h-screen bg-[#020617] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#14B8A6] to-[#06B6D4] rounded-full mb-4">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            MedTech Engineering Blog
          </h1>
          <p
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Technical insights on medical device development, V&V, regulatory
            compliance, and systems engineering
          </p>

          {/* RSS Link */}
          <motion.a
            href="/rss.xml"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 px-4 py-2 bg-[#1E293B] border border-[#14B8A6]/20 rounded-lg text-[#14B8A6] hover:border-[#14B8A6]/50 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            <Rss className="w-4 h-4" />
            Subscribe via RSS
          </motion.a>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <SearchBar
            onSearch={setSearchQuery}
            placeholder="Search by title, description, or tags..."
          />
        </motion.div>

        {/* Tag Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <h2
            className="text-2xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Topics
          </h2>
          <TagCloud tags={allTags} maxTags={12} />
        </motion.div>

        {/* Results Count */}
        {searchQuery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6"
          >
            <p
              className="text-gray-400"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Found {filteredPosts.length} article
              {filteredPosts.length !== 1 ? "s" : ""} for &quot;{searchQuery}
              &quot;
            </p>
          </motion.div>
        )}

        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <BlogCard key={post.slug} post={post} index={index} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p
              className="text-gray-400 text-lg"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              {searchQuery
                ? "No articles found matching your search."
                : "No articles published yet. Check back soon!"}
            </p>
          </motion.div>
        )}

        {/* Footer Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-[#14B8A6]/20"
        >
          <p
            className="text-sm text-gray-500 text-center max-w-4xl mx-auto"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            <strong className="text-gray-400">Disclaimer:</strong> All blog
            content is provided for engineering and educational purposes only.
            Information represents professional experience and cited standards,
            not prescriptive regulatory guidance or product claims. Readers
            should consult appropriate standards and regulatory bodies for
            specific compliance requirements.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
