import React, { useEffect, useRef, useState } from 'react';
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

/* ============================================================
   Boardroom — light, structured, reserved.
   ============================================================ */

const NAV = [
  { label: 'PROJECTS', href: '#projects' },
  { label: 'ABOUT', href: '#about' },
  { label: 'RESUME', type: 'resume' },
];

const RESUME_URL = '/ratan-lal-bunkar-cv.pdf';
const RESUME_FILENAME = 'Ratan-Lal-Bunkar-CV.pdf';

function openAndDownloadResume() {
  window.open(RESUME_URL, '_blank', 'noopener,noreferrer');
  const a = document.createElement('a');
  a.href = RESUME_URL;
  a.download = RESUME_FILENAME;
  a.rel = 'noopener';
  document.body.appendChild(a);
  a.click();
  a.remove();
}

function ResumeButton() {
  return (
    <button
      type="button"
      onClick={openAndDownloadResume}
      className="font-jakarta text-[11px] font-bold uppercase tracking-[0.22em] text-ink/85 transition-colors duration-200 hover:text-mint"
    >
      RESUME
    </button>
  );
}

/* ——— Logo · circular ink-bordered crest with mint dot ——— */
function Crest({ size = 44 }) {
  return (
    <span
      className="relative inline-flex items-center justify-center rounded-full bg-paper"
      style={{
        width: size,
        height: size,
        borderWidth: 1.5,
        borderStyle: 'solid',
        borderColor: 'var(--ink)',
      }}
    >
      <span
        className="font-sans font-extrabold leading-none text-ink"
        style={{ fontSize: size * 0.42, letterSpacing: '-0.02em' }}
      >
        R
      </span>
      <span
        className="absolute rounded-full"
        style={{
          width: size * 0.13,
          height: size * 0.13,
          right: size * 0.16,
          bottom: size * 0.16,
          background: 'var(--mint)',
        }}
      />
    </span>
  );
}

function Logo({ className = '' }) {
  return (
    <a href="#" className={`group flex items-center gap-3 ${className}`}>
      <Crest size={42} />
      <span className="flex flex-col leading-none">
        <span className="font-sans text-[15px] font-bold tracking-[-0.01em] text-ink">
          Ratan Lal Bunkar
        </span>
        <span className="mt-1 font-jakarta text-[9px] font-bold uppercase tracking-[0.28em] text-ink-3">
          Hardware &amp; Systems Engineer
        </span>
      </span>
    </a>
  );
}

/* ——— Header ——— */
function Header({ onOpenMenu }) {
  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-6 md:px-10 md:py-8">
        <Logo />

        <nav className="hidden items-center gap-9 md:flex">
          {NAV.map((item) =>
            item.type === 'resume' ? (
              <ResumeButton key={item.label} />
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="font-jakarta text-[11px] font-bold uppercase tracking-[0.22em] text-ink/85 transition-colors duration-200 hover:text-mint"
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
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line-strong bg-paper text-ink md:hidden"
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
      <div className="absolute inset-0 bg-paper" />
      <div className="relative flex h-full flex-col px-6 py-6">
        <div className="flex items-center justify-between">
          <Logo />
          <button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line-strong bg-paper text-ink"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="mt-12 flex flex-col">
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
                className="rise border-b border-line py-6 text-left font-sans text-[40px] font-extrabold uppercase tracking-tight text-ink transition-colors duration-300 hover:text-mint"
              >
                Resume
              </button>
            ) : (
              <a
                key={item.label}
                href={item.href}
                onClick={onClose}
                style={{ animationDelay: `${120 + i * 80}ms` }}
                className="rise border-b border-line py-6 font-sans text-[40px] font-extrabold uppercase tracking-tight text-ink transition-colors duration-300 hover:text-mint"
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        <div className="mt-auto space-y-3">
          <p className="font-jakarta text-[10px] font-bold uppercase tracking-[0.28em] text-mint">
            Currently in Taoyuan, Taiwan
          </p>
          <a
            href="mailto:ratanbunkar2@gmail.com"
            className="block font-serif text-[20px] italic text-ink"
          >
            ratanbunkar2@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}

/* ——— Contact modal ——— */
function ContactModal({ open, onClose }) {
  const [copied, setCopied] = useState('');

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
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
    { key: 'email', label: 'Email', value: 'ratanbunkar2@gmail.com', href: 'mailto:ratanbunkar2@gmail.com', Icon: Mail },
    { key: 'phone', label: 'Phone', value: '+886 975 010 438', href: 'tel:+886975010438', Icon: Phone },
    { key: 'linkedin', label: 'LinkedIn', value: 'linkedin.com/in/ratanlalbunkar', href: 'https://linkedin.com/in/ratanlalbunkar', external: true, Icon: Linkedin },
  ];

  return (
    <div
      aria-hidden={!open}
      className={`fixed inset-0 z-[60] flex items-center justify-center px-4 transition-opacity duration-300 ${
        open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-ink/40"
      />

      <div
        role="dialog"
        aria-modal="true"
        className={`relative w-full max-w-[520px] overflow-hidden border border-ink bg-paper transition-all duration-300 ${
          open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
        style={{ borderRadius: 4 }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-20 inline-flex h-9 w-9 items-center justify-center rounded-full border border-line-strong bg-paper text-ink transition hover:border-mint hover:text-mint"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="relative p-8 md:p-10">
          <p className="font-jakarta text-[11px] font-bold uppercase tracking-[0.28em] text-mint">
            Get in touch
          </p>
          <h3 className="mt-3 font-sans text-[40px] font-extrabold uppercase leading-[0.95] tracking-tight text-ink md:text-[52px]">
            Let's <span className="serif-italic text-mint">talk</span>
            <span className="text-mint">.</span>
          </h3>
          <p className="mt-4 max-w-[380px] font-serif text-[19px] italic leading-[1.4] text-ink-2">
            Open to test, validation, characterization, reliability and service engineering roles.
            Usually reply within 24 hours.
          </p>

          <ul className="mt-7 divide-y divide-line border-y border-line">
            {items.map(({ key, label, value, href, external, Icon }) => (
              <li key={key} className="group flex items-center gap-4 py-3">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line-strong bg-paper text-mint">
                  <Icon className="h-4 w-4" strokeWidth={1.75} />
                </span>
                <a
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className="min-w-0 flex-1"
                >
                  <span className="block font-jakarta text-[10px] font-bold uppercase tracking-[0.28em] text-ink-3">
                    {label}
                  </span>
                  <span className="mt-0.5 block truncate font-sans text-[16px] font-medium text-ink transition group-hover:text-mint">
                    {value}
                  </span>
                </a>
                <button
                  type="button"
                  onClick={() => copy(value, key)}
                  aria-label={`Copy ${label.toLowerCase()}`}
                  className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line-strong bg-paper text-ink-3 transition hover:border-mint hover:text-mint"
                >
                  {copied === key ? <Check className="h-4 w-4 text-mint" /> : <Copy className="h-4 w-4" />}
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex items-center gap-3 font-jakarta text-[10px] font-bold uppercase tracking-[0.28em] text-ink-3">
            <span className="live-dot" />
            Currently in Taoyuan, Taiwan · Open to relocate
          </div>
        </div>
      </div>
    </div>
  );
}

/* ====================================================================
   TITLE SLIDE — Hero
   Title band · 168px display · footline grid
   ==================================================================== */
function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const facts = [
    { k: 'Experience', v: '3+ years', s: 'SHL Technologies' },
    { k: 'Education', v: 'M.S. EE · NTUT', s: 'B.Tech. EE · IIT Ropar' },
    { k: 'Based in', v: 'Taoyuan, Taiwan', s: 'Open to relocate · Anywhere in Taiwan' },
    { k: 'Targeting', v: 'Semiconductor industry', s: 'Test · Validation · Reliability · Service' },
  ];

  return (
    <section className="relative min-h-screen w-full bg-paper">
      <Header onOpenMenu={() => setMenuOpen(true)} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />

      <div className="mx-auto flex min-h-screen max-w-[1440px] flex-col px-6 pb-14 pt-28 md:px-12 md:pt-36">
        {/* Title band — under header */}
        <div className="rise flex items-center justify-between border-b border-ink pb-6">
          <span className="meta-pill font-jakarta text-[11px] font-bold uppercase tracking-[0.24em] text-ink-3">
            Portfolio · 2026
          </span>
          <span className="hidden font-jakarta text-[11px] font-bold uppercase tracking-[0.24em] text-ink-3 md:inline">
            Boardroom edition
          </span>
        </div>

        {/* Display — two-column at lg, stacked on mobile */}
        <div className="rise mt-12 grid flex-1 grid-cols-1 items-end gap-10 pb-12 lg:mt-20 lg:grid-cols-2 lg:gap-20 lg:pb-20">
          <h1
            className="font-sans font-extrabold uppercase leading-[0.9] tracking-[-0.045em] text-ink"
            style={{ fontSize: 'clamp(72px, 12vw, 168px)' }}
          >
            <span className="block">Systems</span>
            <span className="block">
              <span className="serif-italic text-mint" style={{ textTransform: 'lowercase', letterSpacing: '-0.005em' }}>
                engineer
              </span>
              <span className="text-mint">.</span>
            </span>
          </h1>

          <p
            className="serif-italic max-w-[560px] text-ink-2"
            style={{ fontSize: 'clamp(20px, 2.2vw, 32px)', lineHeight: 1.3 }}
          >
            Three years turning ambiguous user needs into traceable, regulatory-aligned engineering
            outcomes across NPD, NPI, and HVM readiness.
          </p>
        </div>

        {/* CTA row */}
        <div className="rise flex flex-wrap items-center gap-3 pb-10">
          <button
            type="button"
            onClick={() => setContactOpen(true)}
            className="group inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3.5 font-jakarta text-[11px] font-bold uppercase tracking-[0.22em] text-paper transition hover:bg-mint"
          >
            Contact
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          <button
            type="button"
            onClick={openAndDownloadResume}
            className="inline-flex items-center gap-2 rounded-full border border-ink bg-paper px-6 py-3.5 font-jakarta text-[11px] font-bold uppercase tracking-[0.22em] text-ink transition hover:border-mint hover:text-mint"
          >
            <ExternalLink className="h-3.5 w-3.5" /> View Resume
          </button>
        </div>

        {/* Footline — 4-cell grid */}
        <div className="rise grid grid-cols-2 gap-x-8 gap-y-7 border-t border-ink pt-7 md:grid-cols-4 md:gap-x-10">
          {facts.map((f) => (
            <div key={f.k} className="flex flex-col">
              <span className="font-jakarta text-[10px] font-bold uppercase tracking-[0.28em] text-ink-3">
                {f.k}
              </span>
              <span className="mt-2 font-sans text-[17px] font-semibold leading-[1.2] text-ink md:text-[19px]">
                {f.v}
              </span>
              <span className="mt-1 font-sans text-[12px] font-normal text-ink-3 md:text-[13px]">
                {f.s}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ProjectsWalkthrough />
    </>
  );
}
