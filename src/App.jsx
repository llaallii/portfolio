import React, { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import {
  ArrowRight,
  Menu,
  X,
  Mail,
  Phone,
  Copy,
  Check,
  Linkedin,
  ExternalLink,
  Download,
} from 'lucide-react';
import ProjectsWalkthrough from './ProjectsWalkthrough.jsx';
import AboutSection from './AboutSection.jsx';

/**
 * FAB/LINE — Hero
 * Dark, high-end, semicon-targeted portfolio hero.
 * Asset: /assets/Wafer_inspection_probe_202604221428.mp4
 * Works with HLS (.m3u8) via hls.js (enableWorker: false) or native MP4.
 */
const VIDEO_SRC = '/Wafer_inspection_probe_202604221428.mp4';

function useHlsVideo(src) {
  const ref = useRef(null);

  useEffect(() => {
    const video = ref.current;
    if (!video || !src) return;

    const isHls = src.endsWith('.m3u8');
    let hls;

    if (isHls && Hls.isSupported()) {
      hls = new Hls({ enableWorker: false });
      hls.loadSource(src);
      hls.attachMedia(video);
    } else if (isHls && video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src;
    } else {
      video.src = src;
    }

    const tryPlay = () => video.play().catch(() => {});
    video.addEventListener('loadedmetadata', tryPlay);

    return () => {
      video.removeEventListener('loadedmetadata', tryPlay);
      if (hls) hls.destroy();
    };
  }, [src]);

  return ref;
}

const NAV = [
  { label: 'PROJECTS', href: '#projects' },
  { label: 'ABOUT', href: '#about' },
  { label: 'RESUME', type: 'resume' },
];

const RESUME_URL = '/ratan-lal-bunkar-cv.pdf';
const RESUME_FILENAME = 'Ratan-Lal-Bunkar-CV.pdf';

/**
 * Opens the CV in a new tab AND triggers a download of the PDF simultaneously.
 */
function openAndDownloadResume() {
  // 1. Open in a new tab for viewing
  window.open(RESUME_URL, '_blank', 'noopener,noreferrer');
  // 2. Trigger a download via a synthetic anchor
  const a = document.createElement('a');
  a.href = RESUME_URL;
  a.download = RESUME_FILENAME;
  a.rel = 'noopener';
  document.body.appendChild(a);
  a.click();
  a.remove();
}

function ResumeMenu() {
  return (
    <button
      type="button"
      onClick={openAndDownloadResume}
      className="nav-link font-sans text-[16px] font-medium text-white/85 transition-colors duration-300 hover:text-mint"
    >
      RESUME
    </button>
  );
}

function Logo({ className = '' }) {
  return (
    <a href="#" className={`group flex items-center gap-3 ${className}`}>
      {/* Monogram mark — bold R with a green accent dot */}
      <span className="relative inline-flex h-9 w-9 items-center justify-center">
        <span className="absolute inset-0 rounded-full border border-white/25 transition-colors duration-300 group-hover:border-mint/60" />
        <span className="font-sans text-[16px] font-extrabold leading-none text-white">R</span>
        <span className="absolute bottom-[6px] right-[6px] h-1 w-1 rounded-full bg-mint shadow-[0_0_6px_#5ed29c]" />
      </span>

      {/* Wordmark — personal, not brandy */}
      <span className="flex flex-col leading-none">
        <span className="font-sans text-[13px] font-semibold tracking-tight text-white">
          Ratan Lal Bunkar
        </span>
        <span className="mt-1 font-jakarta text-[9px] font-bold uppercase tracking-[0.28em] text-white/45">
          Systems Engineer
        </span>
      </span>
    </a>
  );
}

function Header({ onOpenMenu }) {
  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-6 md:px-10 md:py-8">
        <Logo />

        <nav className="hidden items-center gap-9 md:flex">
          {NAV.map((item) =>
            item.type === 'resume' ? (
              <ResumeMenu key={item.label} />
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="nav-link font-sans text-[16px] font-medium text-white/85 transition-colors duration-300 hover:text-mint"
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        <button
          type="button"
          aria-label="Open menu"
          onClick={onOpenMenu}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-white md:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}

function MobileMenu({ open, onClose }) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div
      aria-hidden={!open}
      className={`fixed inset-0 z-50 transition-opacity duration-500 md:hidden ${
        open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <div className="absolute inset-0 bg-[#04080a]/95 backdrop-blur-xl" />
      <div className="relative flex h-full flex-col px-6 py-6">
        <div className="flex items-center justify-between">
          <Logo />
          <button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="mt-16 flex flex-col gap-1">
          {NAV.map((item, i) =>
            item.type === 'resume' ? (
              <button
                key={item.label}
                type="button"
                onClick={() => {
                  openAndDownloadResume();
                  onClose();
                }}
                style={{ animationDelay: `${120 + i * 80}ms` }}
                className="rise border-b border-white/10 py-6 text-left font-sans text-[34px] font-extrabold uppercase tracking-tight text-white transition-colors duration-300 hover:text-mint"
              >
                Resume
              </button>
            ) : (
              <a
                key={item.label}
                href={item.href}
                onClick={onClose}
                style={{ animationDelay: `${120 + i * 80}ms` }}
                className="rise border-b border-white/10 py-6 font-sans text-[34px] font-extrabold uppercase tracking-tight text-white transition-colors duration-300 hover:text-mint"
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        <div className="mt-auto space-y-4">
          <p className="font-jakarta text-[11px] font-bold uppercase tracking-[0.2em] text-mint">
            Currently in Taoyuan, Taiwan
          </p>
          <a
            href="mailto:ratanbunkar2@gmail.com"
            className="block font-serif text-[22px] italic text-white/90"
          >
            ratanbunkar2@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}

function GridLines() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-[1] hidden md:block">
      {[25, 50, 75].map((pct) => (
        <div
          key={pct}
          className="absolute top-0 h-full w-px bg-white/10"
          style={{ left: `${pct}%` }}
        />
      ))}
    </div>
  );
}

function CenterGlow() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-[-10%] z-[1] flex justify-center">
      <svg
        className="glow-pulse"
        width="1400"
        height="520"
        viewBox="0 0 1400 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="gblur" x="-20%" y="-50%" width="140%" height="200%">
            <feGaussianBlur stdDeviation="25" />
          </filter>
          <radialGradient id="gg" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#5ed29c" stopOpacity="0.55" />
            <stop offset="45%" stopColor="#0f5b48" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#070b0a" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="700" cy="260" rx="620" ry="120" fill="url(#gg)" filter="url(#gblur)" />
      </svg>
    </div>
  );
}

function LiquidGlassCard() {
  return (
    <div
      className="liquid-glass rise mx-auto flex h-[200px] w-[200px] -translate-y-[50px] flex-col justify-between p-5"
      style={{ animationDelay: '120ms' }}
    >
      <div className="flex items-center justify-between">
        <span className="font-jakarta text-[14px] font-semibold tracking-[0.14em] text-white/85">
          [ 2025 ]
        </span>
        <span className="h-1.5 w-1.5 rounded-full bg-mint shadow-[0_0_10px_#5ed29c]" />
      </div>

      <h3 className="font-sans text-[18px] font-semibold leading-[1.15] text-white">
        Taught by <span className="font-serif italic font-normal text-mint">Industry</span>{' '}
        Professionals
      </h3>

      <p className="font-sans text-[11px] leading-[1.45] text-white/60">
        3+ years across tool validation, ATE, and HVM readiness on electromechanical platforms.
      </p>
    </div>
  );
}

function Portrait() {
  // profile image has a space in the filename — encode it
  const src = '/profile%20image.png';
  return (
    <div
      className="rise pointer-events-none absolute right-6 top-36 z-10 hidden lg:block"
      style={{ animationDelay: '360ms' }}
    >
      <div className="pointer-events-auto relative">
        {/* subtle mint glow behind */}
        <div
          aria-hidden
          className="absolute -inset-6 -z-10 rounded-[28px] opacity-70 blur-2xl"
          style={{
            background:
              'radial-gradient(ellipse at 60% 40%, rgba(94,210,156,0.35), transparent 65%)',
          }}
        />

        {/* portrait frame */}
        <div className="group relative h-[420px] w-[320px] overflow-hidden rounded-[22px] border border-white/15 bg-[#0a100e] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)]">
          <img
            src={src}
            alt="Ratan Lal Bunkar"
            className="h-full w-full object-cover grayscale-[30%] transition duration-700 group-hover:grayscale-0 group-hover:scale-[1.02]"
          />
          {/* inner highlight */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[22px]"
            style={{
              boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.15)',
            }}
          />
          {/* bottom gradient */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-32"
            style={{
              background:
                'linear-gradient(0deg, rgba(7,11,10,0.95) 0%, rgba(7,11,10,0) 100%)',
            }}
          />

          {/* bottom caption — name only */}
          <div className="absolute inset-x-4 bottom-4">
            <p className="font-sans text-[14px] font-semibold text-white">
              Ratan Lal Bunkar
            </p>
          </div>
        </div>

        {/* ticker under the card */}
        <div className="mt-4 flex items-center gap-3 font-jakarta text-[9px] font-bold uppercase tracking-[0.3em] text-white/45">
          <span className="h-px w-8 bg-white/30" />
          Currently in Taoyuan
        </div>
      </div>
    </div>
  );
}

function StatsRow() {
  const items = [
    { k: '90%', v: 'Validation cycle time cut' },
    { k: '75%', v: 'Output variance reduced' },
    { k: '3+', v: 'Years experience' },
    {
      k: 'MS · BS',
      v: (
        <span className="block normal-case tracking-normal">
          <span className="block font-sans text-[13px] font-semibold text-white">
            Electrical Engineering
          </span>
          <span className="mt-1 block font-sans text-[12px] font-medium text-white/60">
            National Taipei Univ. of Technology
          </span>
          <span className="block font-sans text-[12px] font-medium text-white/60">
            IIT Ropar
          </span>
        </span>
      ),
    },
  ];
  return (
    <div className="mt-14 hidden w-full max-w-[1100px] grid-cols-4 gap-8 border-t border-white/10 pt-8 md:grid">
      {items.map((it, i) => (
        <div
          key={it.k}
          className="rise flex flex-col"
          style={{ animationDelay: `${700 + i * 80}ms` }}
        >
          <span className="font-sans text-[28px] font-extrabold tracking-tight text-white">
            {it.k}
            <span className="text-mint">.</span>
          </span>
          <span className="mt-1 font-jakarta text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55">
            {it.v}
          </span>
        </div>
      ))}
    </div>
  );
}

function ContactModal({ open, onClose }) {
  const [copied, setCopied] = useState('');

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  const copy = async (value, key) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(key);
      setTimeout(() => setCopied(''), 1800);
    } catch {
      /* ignore */
    }
  };

  const items = [
    {
      key: 'email',
      label: 'Email',
      value: 'ratanbunkar2@gmail.com',
      href: 'mailto:ratanbunkar2@gmail.com',
      Icon: Mail,
    },
    {
      key: 'phone',
      label: 'Phone',
      value: '+886 975 010 438',
      href: 'tel:+886975010438',
      Icon: Phone,
    },
    {
      key: 'linkedin',
      label: 'LinkedIn',
      value: 'linkedin.com/in/ratanlalbunkar',
      href: 'https://linkedin.com/in/ratanlalbunkar',
      external: true,
      Icon: Linkedin,
    },
  ];

  return (
    <div
      aria-hidden={!open}
      className={`fixed inset-0 z-[60] flex items-center justify-center px-4 transition-opacity duration-300 ${
        open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      {/* backdrop */}
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-black/70 backdrop-blur-md"
      />

      {/* modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Contact"
        className={`relative w-full max-w-[520px] overflow-hidden rounded-2xl border border-white/10 bg-[#0a100e] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] transition-all duration-300 ${
          open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        {/* ambient glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -top-20 h-40"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(94,210,156,0.25), transparent 60%)',
          }}
        />

        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-20 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white/80 backdrop-blur transition hover:border-mint hover:bg-mint/10 hover:text-mint"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="relative p-8 md:p-10">
          <p className="font-jakarta text-[10px] font-bold uppercase tracking-[0.3em] text-mint">
            Get in touch
          </p>
          <h3 className="mt-3 font-sans text-[32px] font-extrabold uppercase leading-[1] tracking-tight text-white md:text-[40px]">
            Let's talk<span className="text-mint">.</span>
          </h3>
          <p className="mt-3 max-w-[380px] font-sans text-[13px] leading-[1.6] text-white/60">
            Open to test, validation, characterization, reliability and service
            engineering roles. Usually reply within 24 hours.
          </p>

          <ul className="mt-7 space-y-3">
            {items.map(({ key, label, value, href, external, Icon }) => (
              <li
                key={key}
                className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-3 transition hover:border-mint/40 hover:bg-white/[0.04]"
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-mint">
                  <Icon className="h-4 w-4" />
                </span>
                <a
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className="min-w-0 flex-1"
                >
                  <span className="block font-jakarta text-[9px] font-bold uppercase tracking-[0.28em] text-white/45">
                    {label}
                  </span>
                  <span className="mt-0.5 block truncate font-sans text-[14px] font-medium text-white transition group-hover:text-mint">
                    {value}
                  </span>
                </a>
                <button
                  type="button"
                  onClick={() => copy(value, key)}
                  aria-label={`Copy ${label.toLowerCase()}`}
                  className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-white/70 transition hover:border-mint hover:text-mint"
                >
                  {copied === key ? (
                    <Check className="h-4 w-4 text-mint" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex items-center gap-2 font-jakarta text-[10px] font-bold uppercase tracking-[0.28em] text-white/40">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
            </span>
            Currently in Taoyuan, Taiwan · Open to relocate
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  const videoRef = useHlsVideo(VIDEO_SRC);
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-ink">
      {/* --- Video background --- */}
      <video
        ref={videoRef}
        className="absolute inset-0 z-0 h-full w-full object-cover"
        style={{ opacity: 0.6 }}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      {/* --- Overlays --- */}
      <div
        aria-hidden
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'linear-gradient(90deg, #070b0a 0%, rgba(7,11,10,0.75) 30%, rgba(7,11,10,0.2) 70%, rgba(7,11,10,0) 100%)',
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'linear-gradient(0deg, #070b0a 0%, rgba(7,11,10,0.75) 18%, rgba(7,11,10,0) 55%)',
        }}
      />

      <GridLines />
      <CenterGlow />
      <div className="grain z-[2]" />

      <Header onOpenMenu={() => setMenuOpen(true)} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />

      {/* --- Content --- */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1440px] flex-col px-6 pt-32 md:px-10 md:pt-40">
        <Portrait />
        <div className="flex flex-col items-start">
          <p
            className="rise font-jakarta text-[11px] font-bold uppercase tracking-[0.28em] text-mint"
            style={{ animationDelay: '220ms' }}
          >
            System Design · V&amp;V · Integration · Installation · Qualification
          </p>

          <h1
            className="rise mt-5 font-sans text-[56px] font-extrabold uppercase leading-[0.95] tracking-tight text-white md:text-[96px] lg:text-[120px]"
            style={{ animationDelay: '320ms' }}
          >
            System{' '}
            <span className="font-serif italic font-normal text-white/80">Engineer</span>
            <span className="text-mint">.</span>
          </h1>

          <p
            className="rise mt-7 max-w-[640px] font-sans text-[14px] leading-[1.7] text-white/70"
            style={{ animationDelay: '440ms' }}
          >
            Hardware &amp; Systems Engineer with 3+ years in tool validation, equipment
            qualification, system integration, and cross-domain HW/FW/ME debug on
            electromechanical and connected platforms through NPD, NPI, and HVM readiness.
            Built Python-based ATE and custom fixtures on SBC platforms, cutting validation
            cycle time 90% and output variance 75% via DOE, SPC, and Gage R&amp;R. Led
            structured root cause analysis on power-behavior and wireless communication
            interface failures, identifying electrical and mechanical root causes and driving
            corrective action with R&amp;D, firmware, quality, and manufacturing teams.
          </p>

          <div
            className="rise mt-9 flex flex-wrap items-center gap-4"
            style={{ animationDelay: '560ms' }}
          >
            <button
              type="button"
              onClick={() => setContactOpen(true)}
              className="group inline-flex items-center gap-3 rounded-full bg-mint px-7 py-4 font-sans text-[12px] font-bold uppercase tracking-[0.18em] text-ink transition-all duration-300 hover:bg-white hover:shadow-[0_10px_40px_-10px_rgba(94,210,156,0.6)]"
            >
              Contact
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              type="button"
              onClick={openAndDownloadResume}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.02] px-6 py-4 font-sans text-[12px] font-bold uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm transition-all duration-300 hover:border-white/35 hover:text-white"
            >
              <ExternalLink className="h-3.5 w-3.5" /> View Resume
            </button>
          </div>

          <StatsRow />
        </div>

      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Hero />
      <ProjectsWalkthrough />
      <AboutSection />
    </>
  );
}
