"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Settings, Shield, CheckSquare, Code } from "lucide-react";
import { SKILLS } from "@/lib/constants";

const categoryIcons = {
  "Systems Engineering": Settings,
  "Compliance & Standards": Shield,
  "Verification & Validation": CheckSquare,
  "Technical Skills": Code,
};

interface SkillBarProps {
  name: string;
  level: number;
  index: number;
  isInView: boolean;
}

function SkillBar({ name, level, index, isInView }: SkillBarProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span
          className="text-gray-300 font-medium"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          {name}
        </span>
        <span
          className="text-[#14B8A6] font-semibold"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          {level}%
        </span>
      </div>
      <div className="h-2 bg-[#1E3A8A]/30 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{
            duration: 1,
            delay: index * 0.1,
            ease: "easeOut",
          }}
          className="h-full bg-gradient-to-r from-[#14B8A6] to-[#06B6D4] rounded-full relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
        </motion.div>
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-20 md:py-32 bg-[#020617] overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 circuit-pattern opacity-30" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#14B8A6] opacity-5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#A855F7] opacity-5 blur-[120px] rounded-full" />

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
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#14B8A6] to-[#06B6D4] mx-auto rounded-full mb-6" />
          <p
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Comprehensive expertise in medical device development, compliance, and systems engineering
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {SKILLS.categories.map((category, categoryIndex) => {
            const Icon = categoryIcons[category.name as keyof typeof categoryIcons] || Settings;

            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="group relative bg-gradient-to-br from-[#1E3A8A]/30 to-[#0F172A]/50 rounded-2xl p-8 border border-[#14B8A6]/20 hover:border-[#14B8A6]/50 transition-all"
              >
                {/* Category Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-[#14B8A6] to-[#06B6D4] rounded-lg glow-cyan">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3
                    className="text-2xl font-bold text-white"
                    style={{ fontFamily: "var(--font-orbitron)" }}
                  >
                    {category.name}
                  </h3>
                </div>

                {/* Skills */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      index={skillIndex}
                      isInView={isInView}
                    />
                  ))}
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#14B8A6]/0 to-[#06B6D4]/0 group-hover:from-[#14B8A6]/5 group-hover:to-[#06B6D4]/5 transition-all pointer-events-none rounded-2xl" />
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p
            className="text-gray-400 text-sm"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Proficiency levels based on years of hands-on experience and successful project delivery
          </p>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
}
