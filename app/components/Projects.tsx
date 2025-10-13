"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Code2, Cpu, Shield, Brain } from "lucide-react";
import { PROJECTS } from "@/lib/constants";
import ProjectModal from "./ProjectModal";

const categoryIcons = {
  "AI Systems": Brain,
  "Hardware/Software": Cpu,
  "Embedded Systems": Code2,
  "Regulatory Design": Shield,
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);
  const [filter, setFilter] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const categories = ["All", ...Array.from(new Set(PROJECTS.map((p) => p.category)))];
  const filteredProjects = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <>
      <section
        id="projects"
        ref={ref}
        className="relative py-20 md:py-32 bg-[#0F172A] overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 circuit-pattern opacity-20" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#06B6D4] opacity-5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#A855F7] opacity-5 blur-[120px] rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#14B8A6] to-[#06B6D4] mx-auto rounded-full mb-6" />
            <p
              className="text-lg text-gray-300 max-w-2xl mx-auto"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Innovative medical device solutions combining precision engineering with regulatory excellence
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  filter === category
                    ? "bg-gradient-to-r from-[#14B8A6] to-[#06B6D4] text-white glow"
                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                }`}
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project, index) => {
              const Icon = categoryIcons[project.category as keyof typeof categoryIcons] || Code2;

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="group relative bg-gradient-to-br from-[#1E3A8A]/30 to-[#0F172A]/50 rounded-2xl overflow-hidden border border-[#14B8A6]/20 hover:border-[#14B8A6]/50 transition-all hover:glow cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Project Image Placeholder */}
                  <div className="relative h-64 bg-gradient-to-br from-[#1E3A8A] to-[#020617] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 circuit-pattern opacity-20" />
                    <Icon className="w-24 h-24 text-[#14B8A6] opacity-50 group-hover:opacity-100 transition-opacity group-hover:scale-110 transform transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] to-transparent opacity-60" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Category Badge */}
                    <div className="flex items-center space-x-2 mb-3">
                      <span
                        className="px-3 py-1 bg-[#14B8A6]/20 border border-[#14B8A6]/30 rounded-full text-[#14B8A6] text-xs font-medium"
                        style={{ fontFamily: "var(--font-poppins)" }}
                      >
                        {project.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className="text-2xl font-bold text-white mb-3 group-hover:text-[#14B8A6] transition-colors"
                      style={{ fontFamily: "var(--font-orbitron)" }}
                    >
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-gray-400 mb-4 line-clamp-3"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-[#06B6D4]/10 border border-[#06B6D4]/30 rounded text-[#06B6D4] text-xs"
                          style={{ fontFamily: "var(--font-poppins)" }}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span
                          className="px-2 py-1 bg-gray-700/50 rounded text-gray-400 text-xs"
                          style={{ fontFamily: "var(--font-poppins)" }}
                        >
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* View Details Button */}
                    <div className="flex items-center space-x-2 text-[#14B8A6] font-medium group-hover:translate-x-2 transition-transform">
                      <span style={{ fontFamily: "var(--font-poppins)" }}>View Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#14B8A6]/0 to-[#06B6D4]/0 group-hover:from-[#14B8A6]/5 group-hover:to-[#06B6D4]/5 transition-all pointer-events-none" />
                </motion.div>
              );
            })}
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-gray-400 text-lg" style={{ fontFamily: "var(--font-poppins)" }}>
                No projects found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}
