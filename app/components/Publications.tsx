"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FileText, Award, ExternalLink, Calendar } from "lucide-react";
import { PUBLICATIONS, CERTIFICATIONS } from "@/lib/constants";

export default function Publications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      id="publications"
      ref={ref}
      className="relative py-20 md:py-32 bg-[#0F172A] overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 circuit-pattern opacity-20" />
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#06B6D4] opacity-5 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-[#A855F7] opacity-5 blur-[120px] rounded-full" />

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
            Publications & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#14B8A6] to-[#06B6D4] mx-auto rounded-full mb-6" />
          <p
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Research contributions and professional certifications in medical device engineering
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Publications Timeline */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-white mb-8 flex items-center space-x-3"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              <FileText className="w-6 h-6 text-[#14B8A6]" />
              <span>Publications & Patents</span>
            </motion.h3>

            <div className="space-y-6">
              {PUBLICATIONS.map((pub, index) => (
                <motion.div
                  key={pub.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline Line */}
                  {index < PUBLICATIONS.length - 1 && (
                    <div className="absolute left-3 top-12 w-0.5 h-full bg-gradient-to-b from-[#14B8A6] to-transparent" />
                  )}

                  <div className="flex space-x-4">
                    {/* Timeline Dot */}
                    <div className="flex-shrink-0 relative">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className={`w-6 h-6 rounded-full border-2 ${
                          pub.type === "patent"
                            ? "bg-[#A855F7] border-[#A855F7]"
                            : "bg-[#06B6D4] border-[#06B6D4]"
                        } glow-${pub.type === "patent" ? "purple" : "cyan"}`}
                      />
                    </div>

                    {/* Content Card */}
                    <div className="flex-1 bg-gradient-to-br from-[#1E3A8A]/30 to-[#0F172A]/50 rounded-xl p-6 border border-[#14B8A6]/20 hover:border-[#14B8A6]/50 transition-all group-hover:glow">
                      {/* Type Badge */}
                      <div className="flex items-center justify-between mb-3">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            pub.type === "patent"
                              ? "bg-[#A855F7]/20 border border-[#A855F7]/30 text-[#A855F7]"
                              : "bg-[#06B6D4]/20 border border-[#06B6D4]/30 text-[#06B6D4]"
                          }`}
                          style={{ fontFamily: "var(--font-poppins)" }}
                        >
                          {pub.type === "patent" ? "Patent" : "Research Paper"}
                        </span>
                        <div className="flex items-center space-x-2 text-gray-400 text-sm">
                          <Calendar className="w-4 h-4" />
                          <span style={{ fontFamily: "var(--font-poppins)" }}>{pub.date}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h4
                        className="text-lg font-semibold text-white mb-2 group-hover:text-[#14B8A6] transition-colors"
                        style={{ fontFamily: "var(--font-poppins)" }}
                      >
                        {pub.title}
                      </h4>

                      {/* Details */}
                      {pub.type === "patent" && (
                        <p className="text-sm text-gray-400 mb-2" style={{ fontFamily: "var(--font-poppins)" }}>
                          {pub.number}
                        </p>
                      )}
                      {pub.type === "paper" && pub.journal && (
                        <p className="text-sm text-gray-400 mb-2" style={{ fontFamily: "var(--font-poppins)" }}>
                          {pub.journal}
                        </p>
                      )}
                      {pub.type === "paper" && pub.conference && (
                        <p className="text-sm text-gray-400 mb-2" style={{ fontFamily: "var(--font-poppins)" }}>
                          {pub.conference}
                        </p>
                      )}

                      {/* Description */}
                      {pub.description && (
                        <p className="text-sm text-gray-300 mb-3" style={{ fontFamily: "var(--font-poppins)" }}>
                          {pub.description}
                        </p>
                      )}

                      {/* Link */}
                      {pub.link && (
                        <a
                          href={pub.link}
                          className="inline-flex items-center space-x-2 text-[#14B8A6] hover:text-[#06B6D4] transition-colors text-sm font-medium"
                          style={{ fontFamily: "var(--font-poppins)" }}
                        >
                          <span>View Publication</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-white mb-8 flex items-center space-x-3"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              <Award className="w-6 h-6 text-[#14B8A6]" />
              <span>Professional Certifications</span>
            </motion.h3>

            <div className="grid gap-6">
              {CERTIFICATIONS.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-gradient-to-br from-[#1E3A8A]/30 to-[#0F172A]/50 rounded-xl p-6 border border-[#14B8A6]/20 hover:border-[#14B8A6]/50 transition-all hover:glow"
                >
                  {/* Icon */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#14B8A6] to-[#06B6D4] rounded-lg flex items-center justify-center glow">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    <div className="flex-1">
                      {/* Certification Name */}
                      <h4
                        className="text-lg font-semibold text-white mb-2 group-hover:text-[#14B8A6] transition-colors"
                        style={{ fontFamily: "var(--font-poppins)" }}
                      >
                        {cert.name}
                      </h4>

                      {/* Issuer & Year */}
                      <div className="flex items-center justify-between">
                        <p className="text-gray-400 text-sm" style={{ fontFamily: "var(--font-poppins)" }}>
                          {cert.issuer}
                        </p>
                        <span
                          className="px-3 py-1 bg-[#14B8A6]/20 border border-[#14B8A6]/30 rounded-full text-[#14B8A6] text-xs font-medium"
                          style={{ fontFamily: "var(--font-poppins)" }}
                        >
                          {cert.year}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 p-6 bg-gradient-to-r from-[#14B8A6]/10 to-[#06B6D4]/10 rounded-xl border border-[#14B8A6]/30 text-center"
            >
              <p
                className="text-gray-300 text-sm"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Committed to continuous professional development and staying current with evolving standards and best practices
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
