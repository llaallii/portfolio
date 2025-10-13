"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle2, Copy, ExternalLink } from "lucide-react";
import { submitContactForm } from "@/app/actions/contact";
import { PERSONAL_INFO } from "@/lib/constants";
import QRCode from "react-qr-code";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleSubmit = async (formData: FormData) => {
    setFormStatus("submitting");
    const result = await submitContactForm(formData);

    if (result.success) {
      setFormStatus("success");
      setStatusMessage(result.message);
      // Reset form
      (document.getElementById("contact-form") as HTMLFormElement)?.reset();
    } else {
      setFormStatus("error");
      setStatusMessage(result.message);
    }

    // Reset status after 5 seconds
    setTimeout(() => {
      setFormStatus("idle");
      setStatusMessage("");
    }, 5000);
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-20 md:py-32 bg-[#020617] overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 circuit-pattern opacity-30" />
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
            Get in Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#14B8A6] to-[#06B6D4] mx-auto rounded-full mb-6" />
          <p
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Let's discuss your next medical device innovation project
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact Info & QR Code */}
          <div className="space-y-8">
            {/* Futuristic Contact Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="relative bg-gradient-to-br from-[#1E3A8A]/30 to-[#0F172A]/50 rounded-2xl p-8 border border-[#14B8A6]/20 holographic overflow-hidden"
            >
              {/* Glow Effect */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#14B8A6] opacity-10 blur-[100px] rounded-full" />

              <h3
                className="text-2xl font-bold text-white mb-6"
                style={{ fontFamily: "var(--font-orbitron)" }}
              >
                Contact Information
              </h3>

              <div className="space-y-4">
                {/* Email */}
                <div className="group flex items-center space-x-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all">
                  <div className="p-3 bg-gradient-to-br from-[#14B8A6] to-[#06B6D4] rounded-lg glow">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-400 mb-1" style={{ fontFamily: "var(--font-poppins)" }}>
                      Email
                    </p>
                    <p className="text-white" style={{ fontFamily: "var(--font-poppins)" }}>
                      {PERSONAL_INFO.email}
                    </p>
                  </div>
                  <button
                    onClick={() => copyToClipboard(PERSONAL_INFO.email, "email")}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    {copiedField === "email" ? (
                      <CheckCircle2 className="w-5 h-5 text-[#14B8A6]" />
                    ) : (
                      <Copy className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                </div>

                {/* Phone */}
                <div className="group flex items-center space-x-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all">
                  <div className="p-3 bg-gradient-to-br from-[#06B6D4] to-[#A855F7] rounded-lg glow-cyan">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-400 mb-1" style={{ fontFamily: "var(--font-poppins)" }}>
                      Phone
                    </p>
                    <p className="text-white" style={{ fontFamily: "var(--font-poppins)" }}>
                      {PERSONAL_INFO.phone}
                    </p>
                  </div>
                  <button
                    onClick={() => copyToClipboard(PERSONAL_INFO.phone, "phone")}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    {copiedField === "phone" ? (
                      <CheckCircle2 className="w-5 h-5 text-[#14B8A6]" />
                    ) : (
                      <Copy className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                </div>

                {/* Location */}
                <div className="group flex items-center space-x-4 p-4 rounded-lg bg-white/5">
                  <div className="p-3 bg-gradient-to-br from-[#A855F7] to-[#14B8A6] rounded-lg glow-purple">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-400 mb-1" style={{ fontFamily: "var(--font-poppins)" }}>
                      Location
                    </p>
                    <p className="text-white" style={{ fontFamily: "var(--font-poppins)" }}>
                      {PERSONAL_INFO.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-6 pt-6 border-t border-[#14B8A6]/20">
                <p
                  className="text-sm text-gray-400 mb-4"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Connect with me
                </p>
                <div className="flex space-x-4">
                  <motion.a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-[#0A66C2]/20 hover:bg-[#0A66C2]/30 border border-[#0A66C2]/30 rounded-lg transition-all glow-cyan"
                  >
                    <Linkedin className="w-6 h-6 text-[#0A66C2]" />
                  </motion.a>
                  <motion.a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-all"
                  >
                    <Github className="w-6 h-6 text-white" />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* QR Code Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-[#1E3A8A]/30 to-[#0F172A]/50 rounded-2xl p-8 border border-[#14B8A6]/20 text-center"
            >
              <h4
                className="text-lg font-semibold text-white mb-4"
                style={{ fontFamily: "var(--font-orbitron)" }}
              >
                Scan to Connect
              </h4>
              <div className="inline-block p-4 bg-white rounded-xl">
                <QRCode value={PERSONAL_INFO.linkedin} size={180} />
              </div>
              <p
                className="text-sm text-gray-400 mt-4"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Scan QR code to visit LinkedIn profile
              </p>
            </motion.div>
          </div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <form
              id="contact-form"
              action={handleSubmit}
              className="bg-gradient-to-br from-[#1E3A8A]/30 to-[#0F172A]/50 rounded-2xl p-8 border border-[#14B8A6]/20 space-y-6"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-[#020617]/50 border border-[#14B8A6]/30 rounded-lg text-white placeholder-gray-500 focus:border-[#14B8A6] focus:outline-none focus:ring-2 focus:ring-[#14B8A6]/20 transition-all"
                  placeholder="John Doe"
                  style={{ fontFamily: "var(--font-poppins)" }}
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-[#020617]/50 border border-[#14B8A6]/30 rounded-lg text-white placeholder-gray-500 focus:border-[#14B8A6] focus:outline-none focus:ring-2 focus:ring-[#14B8A6]/20 transition-all"
                  placeholder="john@example.com"
                  style={{ fontFamily: "var(--font-poppins)" }}
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300 mb-2"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-[#020617]/50 border border-[#14B8A6]/30 rounded-lg text-white placeholder-gray-500 focus:border-[#14B8A6] focus:outline-none focus:ring-2 focus:ring-[#14B8A6]/20 transition-all"
                  placeholder="Project Collaboration"
                  style={{ fontFamily: "var(--font-poppins)" }}
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-[#020617]/50 border border-[#14B8A6]/30 rounded-lg text-white placeholder-gray-500 focus:border-[#14B8A6] focus:outline-none focus:ring-2 focus:ring-[#14B8A6]/20 transition-all resize-none"
                  placeholder="Tell me about your project..."
                  style={{ fontFamily: "var(--font-poppins)" }}
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={formStatus === "submitting"}
                whileHover={{ scale: formStatus === "submitting" ? 1 : 1.02 }}
                whileTap={{ scale: formStatus === "submitting" ? 1 : 0.98 }}
                className={`w-full px-8 py-4 rounded-lg font-semibold text-white flex items-center justify-center space-x-2 transition-all ${
                  formStatus === "submitting"
                    ? "bg-gray-600 cursor-not-allowed"
                    : formStatus === "success"
                    ? "bg-green-600 glow"
                    : formStatus === "error"
                    ? "bg-red-600"
                    : "bg-gradient-to-r from-[#14B8A6] to-[#06B6D4] glow"
                }`}
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                {formStatus === "submitting" ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : formStatus === "success" ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

              {/* Status Message */}
              {statusMessage && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-sm text-center ${
                    formStatus === "success" ? "text-green-400" : "text-red-400"
                  }`}
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {statusMessage}
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
