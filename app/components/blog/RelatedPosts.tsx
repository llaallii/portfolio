"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import type { BlogPostMetadata } from "@/lib/types/blog";

interface RelatedPostsProps {
  posts: BlogPostMetadata[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <section className="mt-16 pt-8 border-t border-[#14B8A6]/20">
      <h2
        className="text-2xl font-bold text-white mb-6"
        style={{ fontFamily: "var(--font-poppins)" }}
      >
        Related Articles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link href={`/blog/${post.slug}`}>
              <div className="bg-[#1E293B] border border-[#14B8A6]/20 rounded-lg p-5 hover:border-[#14B8A6]/50 transition-all duration-300 h-full flex flex-col">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium bg-[#14B8A6]/10 text-[#14B8A6] rounded"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3
                  className="text-lg font-bold text-white mb-2 hover:text-[#14B8A6] transition-colors line-clamp-2 flex-1"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {post.title}
                </h3>

                {/* Description */}
                <p
                  className="text-gray-400 text-sm mb-3 line-clamp-2"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {post.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-[#14B8A6]/10">
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span style={{ fontFamily: "var(--font-poppins)" }}>
                      {post.readingTime}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#14B8A6]" />
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
