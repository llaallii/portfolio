"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { TagWithCount } from "@/lib/types/blog";

interface TagCloudProps {
  tags: TagWithCount[];
  maxTags?: number;
  currentTag?: string;
}

export default function TagCloud({
  tags,
  maxTags = 12,
  currentTag,
}: TagCloudProps) {
  const displayTags = tags.slice(0, maxTags);

  // Calculate font sizes based on count
  const maxCount = Math.max(...displayTags.map((t) => t.count));
  const minCount = Math.min(...displayTags.map((t) => t.count));

  const getFontSize = (count: number) => {
    if (maxCount === minCount) return "text-sm";
    const ratio = (count - minCount) / (maxCount - minCount);
    if (ratio > 0.66) return "text-lg";
    if (ratio > 0.33) return "text-base";
    return "text-sm";
  };

  return (
    <div className="flex flex-wrap gap-3">
      {displayTags.map((tagItem, index) => {
        const isActive = currentTag === tagItem.tag;
        return (
          <motion.div
            key={tagItem.tag}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <Link href={`/blog/tag/${tagItem.tag}`}>
              <motion.span
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-[#14B8A6] text-white"
                    : "bg-[#1E293B] text-gray-300 border border-[#14B8A6]/20 hover:border-[#14B8A6]/50 hover:text-white"
                } ${getFontSize(tagItem.count)}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                {tagItem.tag}
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-[#14B8A6]/10 text-[#14B8A6]"
                  }`}
                >
                  {tagItem.count}
                </span>
              </motion.span>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
