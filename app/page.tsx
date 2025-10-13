import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Publications from "./components/Publications";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="relative">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Publications />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-[#020617] border-t border-[#14B8A6]/20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p
              className="text-gray-400 text-sm"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              © {new Date().getFullYear()} Medical Systems Engineer. All rights reserved.
            </p>
            <p
              className="text-gray-500 text-sm"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Built with Next.js 15, Tailwind CSS, and Framer Motion
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
