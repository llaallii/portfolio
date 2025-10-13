"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAVIGATION_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = NAVIGATION_ITEMS.map((item) =>
        item.href.replace("#", "")
      );
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-[#0F172A]/95 backdrop-blur-lg border-b border-[#14B8A6]/20"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection("#hero")}
          >
            <span
              className="text-2xl font-bold"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              <span className="text-white">Med</span>
              <span className="text-[#14B8A6]">Sys</span>
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {NAVIGATION_ITEMS.map((item) => {
              const isHashLink = item.href.startsWith("#");
              const sectionId = isHashLink ? item.href.replace("#", "") : null;
              const isActive = isHashLink
                ? activeSection === sectionId
                : pathname === item.href;

              if (isHashLink) {
                return (
                  <motion.button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-medium transition-all relative",
                      isActive
                        ? "text-[#14B8A6]"
                        : "text-gray-300 hover:text-white"
                    )}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute inset-0 bg-[#14B8A6]/10 rounded-lg -z-10"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </motion.button>
                );
              } else {
                return (
                  <Link key={item.label} href={item.href}>
                    <motion.div
                      className={cn(
                        "px-4 py-2 rounded-lg text-sm font-medium transition-all relative",
                        isActive
                          ? "text-[#14B8A6]"
                          : "text-gray-300 hover:text-white"
                      )}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      {item.label}
                      {isActive && (
                        <motion.div
                          layoutId="activeSection"
                          className="absolute inset-0 bg-[#14B8A6]/10 rounded-lg -z-10"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}
                    </motion.div>
                  </Link>
                );
              }
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <motion.button
              onClick={() => scrollToSection("#contact")}
              className="px-6 py-2 bg-gradient-to-r from-[#14B8A6] to-[#06B6D4] text-white rounded-lg font-medium glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Get in Touch
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0F172A]/98 backdrop-blur-lg border-b border-[#14B8A6]/20"
          >
            <div className="px-4 pt-2 pb-4 space-y-2">
              {NAVIGATION_ITEMS.map((item) => {
                const isHashLink = item.href.startsWith("#");
                const sectionId = isHashLink ? item.href.replace("#", "") : null;
                const isActive = isHashLink
                  ? activeSection === sectionId
                  : pathname === item.href;

                if (isHashLink) {
                  return (
                    <motion.button
                      key={item.label}
                      onClick={() => scrollToSection(item.href)}
                      className={cn(
                        "block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors",
                        isActive
                          ? "text-[#14B8A6] bg-[#14B8A6]/10"
                          : "text-gray-300 hover:text-white hover:bg-white/5"
                      )}
                      whileTap={{ scale: 0.98 }}
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      {item.label}
                    </motion.button>
                  );
                } else {
                  return (
                    <Link key={item.label} href={item.href} onClick={() => setIsMobileMenuOpen(false)}>
                      <motion.div
                        className={cn(
                          "block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors",
                          isActive
                            ? "text-[#14B8A6] bg-[#14B8A6]/10"
                            : "text-gray-300 hover:text-white hover:bg-white/5"
                        )}
                        whileTap={{ scale: 0.98 }}
                        style={{ fontFamily: "var(--font-poppins)" }}
                      >
                        {item.label}
                      </motion.div>
                    </Link>
                  );
                }
              })}
              <motion.button
                onClick={() => scrollToSection("#contact")}
                className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-[#14B8A6] to-[#06B6D4] text-white rounded-lg font-medium"
                whileTap={{ scale: 0.98 }}
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Get in Touch
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
