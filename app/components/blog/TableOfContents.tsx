"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, ChevronRight } from "lucide-react";
import type { TableOfContentsItem } from "@/lib/types/blog";

interface TableOfContentsProps {
  items: TableOfContentsItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0% -35% 0%" }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (items.length === 0) return null;

  return (
    <nav
      className="sticky top-24 bg-[#1E293B] border border-[#14B8A6]/20 rounded-lg p-6 max-h-[calc(100vh-120px)] overflow-y-auto"
      aria-label="Table of contents"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2
          className="text-lg font-bold text-white flex items-center gap-2"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          <List className="w-5 h-5 text-[#14B8A6]" />
          Table of Contents
        </h2>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="lg:hidden p-1 hover:bg-[#14B8A6]/10 rounded transition-colors"
          aria-label={isExpanded ? "Collapse" : "Expand"}
        >
          <ChevronRight
            className={`w-5 h-5 text-[#14B8A6] transition-transform ${
              isExpanded ? "rotate-90" : ""
            }`}
          />
        </button>
      </div>

      {/* TOC Items */}
      <AnimatePresence>
        {isExpanded && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-2"
          >
            {items.map((item) => {
              const isActive = activeId === item.id;
              const paddingLeft = `${(item.level - 1) * 1}rem`;

              return (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  style={{ paddingLeft }}
                >
                  <button
                    onClick={() => scrollToHeading(item.id)}
                    className={`text-left w-full py-2 px-3 rounded-lg text-sm transition-all duration-200 ${
                      isActive
                        ? "bg-[#14B8A6]/10 text-[#14B8A6] font-medium border-l-2 border-[#14B8A6]"
                        : "text-gray-400 hover:text-white hover:bg-[#14B8A6]/5"
                    }`}
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    {item.title}
                  </button>
                </motion.li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
