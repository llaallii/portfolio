"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, Tag, AlertCircle } from "lucide-react";
import type { BlogFrontmatter } from "@/lib/types/blog";

interface BlogPostProps {
  frontmatter: BlogFrontmatter;
  readingTime: string;
  children: React.ReactNode;
}

export default function BlogPost({
  frontmatter,
  readingTime,
  children,
}: BlogPostProps) {
  const formattedDate = new Date(frontmatter.date).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  const updatedDate = frontmatter.updated
    ? new Date(frontmatter.updated).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <article className="max-w-4xl mx-auto">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {frontmatter.tags.map((tag) => (
            <Link key={tag} href={`/blog/tag/${tag}`}>
              <span className="inline-flex items-center gap-1 px-3 py-1 text-sm font-medium bg-[#14B8A6]/10 text-[#14B8A6] rounded-lg hover:bg-[#14B8A6]/20 transition-colors">
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            </Link>
          ))}
        </div>

        {/* Title */}
        <h1
          className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          {frontmatter.title}
        </h1>

        {/* Description */}
        <p
          className="text-xl text-gray-400 mb-6"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          {frontmatter.description}
        </p>

        {/* Metadata */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span style={{ fontFamily: "var(--font-poppins)" }}>
              Published {formattedDate}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span style={{ fontFamily: "var(--font-poppins)" }}>
              {readingTime}
            </span>
          </div>
        </div>

        {/* Updated Notice */}
        {updatedDate && (
          <div className="mt-4 p-3 bg-[#14B8A6]/10 border border-[#14B8A6]/20 rounded-lg">
            <p className="text-sm text-[#14B8A6]">
              <span className="font-medium">Updated:</span> {updatedDate}
            </p>
          </div>
        )}
      </motion.header>

      {/* Cover Image */}
      {frontmatter.cover && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 rounded-lg overflow-hidden"
        >
          <img
            src={frontmatter.cover}
            alt={frontmatter.title}
            className="w-full h-auto"
          />
        </motion.div>
      )}

      {/* Regulatory Disclaimer */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-8 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg"
      >
        <div className="flex gap-3">
          <AlertCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm text-gray-300" style={{ fontFamily: "var(--font-poppins)" }}>
              <span className="font-medium text-yellow-500">Engineering Context Only:</span> This article discusses engineering methods and technical approaches. It does not make product claims or provide prescriptive regulatory guidance. Content is based on professional experience and cited standards.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Article Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="prose prose-invert prose-lg max-w-none
          prose-headings:font-bold prose-headings:text-white
          prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
          prose-h1:mt-8 prose-h2:mt-8 prose-h3:mt-6
          prose-h1:mb-4 prose-h2:mb-4 prose-h3:mb-3
          prose-p:text-gray-300 prose-p:leading-relaxed
          prose-a:text-[#14B8A6] prose-a:no-underline hover:prose-a:underline
          prose-strong:text-white prose-strong:font-semibold
          prose-code:text-[#14B8A6] prose-code:bg-[#1E293B] prose-code:px-1 prose-code:py-0.5 prose-code:rounded
          prose-pre:bg-[#1E293B] prose-pre:border prose-pre:border-[#14B8A6]/20
          prose-blockquote:border-l-4 prose-blockquote:border-[#14B8A6] prose-blockquote:bg-[#1E293B] prose-blockquote:p-4
          prose-ul:text-gray-300 prose-ol:text-gray-300
          prose-li:marker:text-[#14B8A6]
          prose-img:rounded-lg prose-img:shadow-lg
          prose-hr:border-[#14B8A6]/20"
        style={{ fontFamily: "var(--font-poppins)" }}
      >
        {children}
      </motion.div>

      {/* Author Box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-12 p-6 bg-[#1E293B] border border-[#14B8A6]/20 rounded-lg"
      >
        <div className="flex items-start gap-4">
          <div className="flex-1">
            <h3
              className="text-lg font-bold text-white mb-2"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              About the Author
            </h3>
            <p
              className="text-gray-400 text-sm"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Systems Engineer specializing in medical device development, V&V,
              and regulatory compliance. Experienced in Python-based test
              automation, ISO standards, and model-based systems engineering.
            </p>
          </div>
        </div>
      </motion.div>
    </article>
  );
}
