"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, CheckCircle } from "lucide-react";
import { useEffect } from "react";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  achievements: string[];
  image: string;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="relative w-full max-w-4xl bg-gradient-to-br from-[#1E3A8A] to-[#0F172A] rounded-2xl shadow-2xl border border-[#14B8A6]/20 overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors backdrop-blur-sm"
                >
                  <X className="w-6 h-6 text-white" />
                </button>

                {/* Content */}
                <div className="p-8">
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <span
                        className="px-3 py-1 bg-[#14B8A6]/20 border border-[#14B8A6]/30 rounded-full text-[#14B8A6] text-sm"
                        style={{ fontFamily: "var(--font-poppins)" }}
                      >
                        {project.category}
                      </span>
                    </div>
                    <h3
                      className="text-3xl md:text-4xl font-bold text-white mb-4"
                      style={{ fontFamily: "var(--font-orbitron)" }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="text-lg text-gray-300 leading-relaxed"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      {project.description}
                    </p>
                  </div>

                  {/* Image Placeholder */}
                  <div className="mb-8 rounded-xl overflow-hidden bg-[#020617]/50 aspect-video flex items-center justify-center border border-[#14B8A6]/20">
                    <div className="text-center space-y-2">
                      <ExternalLink className="w-16 h-16 text-[#14B8A6] mx-auto" />
                      <p className="text-gray-400" style={{ fontFamily: "var(--font-poppins)" }}>
                        Project Visualization
                      </p>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4
                      className="text-xl font-semibold text-white mb-4"
                      style={{ fontFamily: "var(--font-orbitron)" }}
                    >
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                          className="px-4 py-2 bg-[#06B6D4]/10 border border-[#06B6D4]/30 rounded-lg text-[#06B6D4] font-medium"
                          style={{ fontFamily: "var(--font-poppins)" }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4
                      className="text-xl font-semibold text-white mb-4"
                      style={{ fontFamily: "var(--font-orbitron)" }}
                    >
                      Key Achievements
                    </h4>
                    <div className="space-y-3">
                      {project.achievements.map((achievement, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start space-x-3"
                        >
                          <CheckCircle className="w-6 h-6 text-[#14B8A6] flex-shrink-0 mt-0.5" />
                          <span
                            className="text-gray-300"
                            style={{ fontFamily: "var(--font-poppins)" }}
                          >
                            {achievement}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#14B8A6] opacity-10 blur-[100px] rounded-full" />
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
