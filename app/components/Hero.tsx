"use client";

import { motion } from "framer-motion";
import { ChevronDown, Heart, Activity } from "lucide-react";
import ParticleBackground from "./ParticleBackground";
import { HERO } from "@/lib/constants";

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Particle Background */}
      <ParticleBackground />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-[#0F172A]/95 to-[#0F172A] -z-10" />

      {/* Holographic Accents */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#14B8A6] opacity-10 blur-[120px] rounded-full" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#A855F7] opacity-10 blur-[120px] rounded-full" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Animated Icons */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center space-x-6"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="text-[#14B8A6]"
            >
              <Heart className="w-8 h-8" fill="currentColor" />
            </motion.div>
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="text-[#06B6D4]"
            >
              <Activity className="w-10 h-10" />
            </motion.div>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, -5, 5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="text-[#A855F7]"
            >
              <Heart className="w-8 h-8" fill="currentColor" />
            </motion.div>
          </motion.div>

          {/* Headline with Typewriter Effect */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            <span className="block text-white mb-2">Engineering the</span>
            <span className="block bg-gradient-to-r from-[#14B8A6] via-[#06B6D4] to-[#A855F7] bg-clip-text text-transparent">
              Future of Medical
            </span>
            <span className="block text-white mt-2">Technology</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            {HERO.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <motion.button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 bg-gradient-to-r from-[#14B8A6] to-[#06B6D4] text-white rounded-lg font-semibold text-lg glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              {HERO.cta}
            </motion.button>
            <motion.button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 border-2 border-[#14B8A6] text-white rounded-lg font-semibold text-lg hover:bg-[#14B8A6]/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Get in Touch
            </motion.button>
          </motion.div>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-8"
          >
            {["ISO 13485", "FDA Compliant", "IEC 62304", "Risk Management"].map(
              (badge, index) => (
                <motion.div
                  key={badge}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                  className="px-4 py-2 bg-[#14B8A6]/10 border border-[#14B8A6]/30 rounded-full text-[#14B8A6] text-sm font-medium"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {badge}
                </motion.div>
              )
            )}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToAbout}
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="flex flex-col items-center space-y-2"
          >
            <span className="text-gray-400 text-sm" style={{ fontFamily: "var(--font-poppins)" }}>
              Scroll to explore
            </span>
            <ChevronDown className="w-6 h-6 text-[#14B8A6]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
