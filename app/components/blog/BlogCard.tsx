"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import type { BlogPostMetadata } from "@/lib/types/blog";

interface BlogCardProps {
  post: BlogPostMetadata;
  index?: number;
}

export default function BlogCard({ post, index = 0 }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link href={`/blog/${post.slug}`}>
        <div className="bg-[#1E293B] border border-[#14B8A6]/20 rounded-lg overflow-hidden hover:border-[#14B8A6]/50 transition-all duration-300 h-full flex flex-col">
          {/* Cover Image */}
          {post.cover && (
            <div className="relative h-48 overflow-hidden bg-[#0F172A]">
              <img
                src={post.cover}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B] to-transparent opacity-60" />
            </div>
          )}

          {/* Content */}
          <div className="p-6 flex-1 flex flex-col">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-3">
              {post.tags.slice(0, 3).map((tag) => (
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
              className="text-xl font-bold text-white mb-3 group-hover:text-[#14B8A6] transition-colors line-clamp-2"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              {post.title}
            </h3>

            {/* Description */}
            <p
              className="text-gray-400 text-sm mb-4 line-clamp-3 flex-1"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              {post.description}
            </p>

            {/* Metadata */}
            <div className="flex items-center justify-between pt-4 border-t border-[#14B8A6]/10">
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span style={{ fontFamily: "var(--font-poppins)" }}>
                    {formattedDate}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span style={{ fontFamily: "var(--font-poppins)" }}>
                    {post.readingTime}
                  </span>
                </div>
              </div>

              {/* Read More Arrow */}
              <ArrowRight className="w-5 h-5 text-[#14B8A6] group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
