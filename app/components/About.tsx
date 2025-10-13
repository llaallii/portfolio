"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { CheckCircle2, Award, Target, Users } from "lucide-react";
import { ABOUT } from "@/lib/constants";

function AnimatedCounter({ value, duration = 2 }: { value: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const numericValue = parseInt(value.replace(/\D/g, ""));
    if (isNaN(numericValue)) return;

    let start = 0;
    const increment = numericValue / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  const suffix = value.replace(/[0-9]/g, "");
  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-[#14B8A6]">
      {count}
      {suffix}
    </div>
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-20 md:py-32 bg-[#020617] overflow-hidden"
    >
      {/* Circuit Pattern Background */}
      <div className="absolute inset-0 circuit-pattern opacity-30" />

      {/* Gradient Accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#14B8A6] opacity-5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#A855F7] opacity-5 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            {ABOUT.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#14B8A6] to-[#06B6D4] mx-auto rounded-full" />
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden holographic p-1">
              <div className="w-full h-full bg-gradient-to-br from-[#1E3A8A] to-[#0F172A] rounded-2xl flex items-center justify-center">
                {/* Placeholder for profile image or medical device illustration */}
                <div className="text-center space-y-4 p-8">
                  <div className="w-40 h-40 mx-auto bg-gradient-to-br from-[#14B8A6] to-[#06B6D4] rounded-full flex items-center justify-center glow">
                    <Award className="w-20 h-20 text-white" />
                  </div>
                  <p
                    className="text-gray-300 text-sm"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    Systems Engineer
                    <br />
                    Medical Product Development
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-[#A855F7]/20 rounded-lg backdrop-blur-sm border border-[#A855F7]/30 flex items-center justify-center"
            >
              <Target className="w-12 h-12 text-[#A855F7]" />
            </motion.div>

            <motion.div
              animate={{
                y: [0, 10, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#06B6D4]/20 rounded-lg backdrop-blur-sm border border-[#06B6D4]/30 flex items-center justify-center"
            >
              <Users className="w-12 h-12 text-[#06B6D4]" />
            </motion.div>
          </motion.div>

          {/* Right: Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <p
              className="text-lg text-gray-300 leading-relaxed"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              {ABOUT.description}
            </p>

            {/* Highlights */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-3"
            >
              {ABOUT.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#14B8A6] flex-shrink-0 mt-0.5" />
                  <span
                    className="text-gray-300"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    {highlight}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Statistics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {ABOUT.stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-[#1E3A8A]/20 to-transparent border border-[#14B8A6]/20 hover:border-[#14B8A6]/50 transition-all hover:glow"
            >
              <AnimatedCounter value={stat.value} />
              <p
                className="text-gray-400 mt-2"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
