import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowRight,
  ArrowLeft,
  Menu,
  X,
  Mail,
  Phone,
  Copy,
  Check,
  Linkedin,
  ExternalLink,
  Maximize2,
  Minimize2,
} from 'lucide-react';
import { ProfileSlide, SkillVolume, SKILL_VOLUMES } from './AboutSection.jsx';
import {
  ProjectSlide,
  OutcomeSlide,
  ClosingSlide,
  PROJECTS,
  ELEXY,
  OUTCOME_JIG,
  OUTCOME_BENCH,
} from './ProjectsWalkthrough.jsx';

/* ============================================================
   Boardroom · Slide deck
   12 chapters, one per viewport. ← / → to advance.
   ============================================================ */

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

/* ——— Title slide ——— */
function TitleSlide({ onContact }) {
  const facts = [
    { k: 'Experience', v: '3+ years', s: 'SHL Technologies' },
    { k: 'Education', v: 'M.S. EE · NTUT', s: 'B.Tech. EE · IIT Ropar' },
    { k: 'Based in', v: 'Taoyuan, Taiwan', s: 'Open to relocate · Anywhere in Taiwan' },
    { k: 'Targeting', v: 'Semiconductor industry', s: 'Test · Validation · Reliability · Service' },
  ];

  return (
    <section className="relative h-full w-full bg-paper">
      <div className="mx-auto flex h-full max-w-[1440px] flex-col px-6 pb-10 pt-24 md:px-12 md:pt-28">
        {/* Title band */}
        <div className="rise flex items-center justify-between border-b border-ink pb-5">
          <span className="font-jakarta text-[11px] font-bold uppercase tracking-[0.24em] text-ink-3">
            Portfolio · 2026
          </span>
          <span className="hidden font-jakarta text-[11px] font-bold uppercase tracking-[0.24em] text-ink-3 md:inline">
            Boardroom edition
          </span>
        </div>

        {/* Display */}
        <div className="rise mt-8 grid flex-1 grid-cols-1 items-end gap-8 pb-8 lg:mt-12 lg:grid-cols-2 lg:gap-16 lg:pb-10">
          <h1
            className="font-sans font-extrabold uppercase leading-[0.9] tracking-[-0.045em] text-ink"
            style={{ fontSize: 'clamp(64px, 10vw, 156px)' }}
          >
            <span className="block">Systems</span>
            <span className="block">
              <span
                className="serif-italic text-mint"
                style={{ textTransform: 'lowercase', letterSpacing: '-0.005em' }}
              >
                engineer
              </span>
              <span className="text-mint">.</span>
            </span>
          </h1>

          <p
            className="serif-italic max-w-[560px] text-ink-2"
            style={{ fontSize: 'clamp(18px, 2vw, 30px)', lineHeight: 1.3 }}
          >
            Three years turning ambiguous user needs into traceable, regulatory-aligned engineering
            outcomes across NPD, NPI, and HVM readiness.
          </p>
        </div>

        {/* CTA row */}
        <div className="rise flex flex-wrap items-center gap-3 pb-8">
          <button
            type="button"
            onClick={onContact}
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

        {/* Footline */}
        <div className="rise grid grid-cols-2 gap-x-8 gap-y-5 border-t border-ink pt-6 md:grid-cols-4 md:gap-x-10">
          {facts.map((f) => (
            <div key={f.k} className="flex flex-col">
              <span className="font-jakarta text-[10px] font-bold uppercase tracking-[0.28em] text-ink-3">
                {f.k}
              </span>
              <span className="mt-2 font-sans text-[15px] font-semibold leading-[1.2] text-ink md:text-[18px]">
                {f.v}
              </span>
              <span className="mt-1 font-sans text-[11px] font-normal text-ink-3 md:text-[13px]">
                {f.s}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ——— Logo ——— */
function Crest({ size = 42 }) {
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

function Logo() {
  return (
    <span className="flex items-center gap-3">
      <Crest size={40} />
      <span className="hidden flex-col leading-none md:flex">
        <span className="font-sans text-[14px] font-bold tracking-[-0.01em] text-ink">
          Ratan Lal Bunkar
        </span>
        <span className="mt-1 font-jakarta text-[9px] font-bold uppercase tracking-[0.28em] text-ink-3">
          Hardware &amp; Systems Engineer
        </span>
      </span>
    </span>
  );
}

/* ——— Contact modal ——— */
function ContactModal({ open, onClose }) {
  const [copied, setCopied] = useState('');

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
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
      className={`fixed inset-0 z-[80] flex items-center justify-center px-4 transition-opacity duration-300 ${
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

/* ============================================================
   Deck shell
   ============================================================ */
function useFullscreen() {
  const [isFs, setIsFs] = useState(false);
  useEffect(() => {
    const onChange = () => setIsFs(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', onChange);
    return () => document.removeEventListener('fullscreenchange', onChange);
  }, []);
  const toggle = useCallback(async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch {
      /* ignore */
    }
  }, []);
  return [isFs, toggle];
}

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isFs, toggleFs] = useFullscreen();

  // Build the deck
  const slides = useMemo(
    () => [
      { key: 'title', label: 'Title', render: () => <TitleSlide onContact={() => setContactOpen(true)} /> },
      { key: 'about', label: 'About', render: () => <ProfileSlide /> },
      ...SKILL_VOLUMES.map((vol, idx) => ({
        key: `skill-${idx}`,
        label: `Vol. ${idx + 1} · ${vol.kicker}`,
        render: () => <SkillVolume vol={vol} idx={idx} />,
      })),
      { key: 'smarthub', label: 'Ch. 01 · SmartHub', render: () => <ProjectSlide p={PROJECTS[0]} /> },
      { key: 'molly', label: 'Ch. 02 · Molly cCap', render: () => <ProjectSlide p={PROJECTS[1]} /> },
      { key: 'jig', label: 'Outcomes · Jig', render: () => <OutcomeSlide {...OUTCOME_JIG} /> },
      { key: 'elexy', label: 'Ch. 03 · Elexy', render: () => <ProjectSlide p={ELEXY} /> },
      { key: 'bench', label: 'Outcomes · Bench', render: () => <OutcomeSlide {...OUTCOME_BENCH} /> },
      { key: 'closing', label: "Let's talk", render: () => <ClosingSlide /> },
    ],
    []
  );
  const total = slides.length;
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => Math.min(c + 1, total - 1)), [total]);
  const prev = useCallback(() => setCurrent((c) => Math.max(c - 1, 0)), []);
  const jump = useCallback((i) => setCurrent(i), []);

  // Keyboard nav — disabled when modal/menu open
  useEffect(() => {
    if (contactOpen || menuOpen) return;
    const handler = (e) => {
      if (e.target && /INPUT|TEXTAREA/.test(e.target.tagName)) return;
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        next();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        prev();
      } else if (e.key === 'Home') {
        e.preventDefault();
        setCurrent(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        setCurrent(total - 1);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [next, prev, total, contactOpen, menuOpen]);

  // Lock page scroll — this is a deck, not a scroll site
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const pct = ((current + 1) / total) * 100;
  const cur = slides[current];

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-paper">
      {/* Top progress bar */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-50 h-[2px] bg-line">
        <div
          className="absolute left-0 top-0 h-full bg-mint transition-[width] duration-700 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>

      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-40">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 md:px-12 md:py-6">
          <button
            type="button"
            onClick={() => setCurrent(0)}
            className="group flex items-center gap-3"
            aria-label="Back to title"
          >
            <Logo />
          </button>

          <nav className="hidden items-center gap-9 md:flex">
            <button
              type="button"
              onClick={() => setCurrent(1)}
              className="font-jakarta text-[11px] font-bold uppercase tracking-[0.22em] text-ink/85 transition-colors duration-200 hover:text-mint"
            >
              About
            </button>
            <button
              type="button"
              onClick={() => setCurrent(6)}
              className="font-jakarta text-[11px] font-bold uppercase tracking-[0.22em] text-ink/85 transition-colors duration-200 hover:text-mint"
            >
              Projects
            </button>
            <button
              type="button"
              onClick={openAndDownloadResume}
              className="font-jakarta text-[11px] font-bold uppercase tracking-[0.22em] text-ink/85 transition-colors duration-200 hover:text-mint"
            >
              Resume
            </button>
            <button
              type="button"
              onClick={() => setContactOpen(true)}
              className="font-jakarta text-[11px] font-bold uppercase tracking-[0.22em] text-ink/85 transition-colors duration-200 hover:text-mint"
            >
              Contact
            </button>
          </nav>

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line-strong bg-paper text-ink md:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, i) => (
          <div
            key={slide.key}
            aria-hidden={i !== current}
            className={`absolute inset-0 overflow-y-auto transition-opacity duration-500 ${
              i === current ? 'pointer-events-auto z-10 opacity-100' : 'pointer-events-none z-0 opacity-0'
            }`}
          >
            <div key={i === current ? 'on' : 'off'} className="h-full">
              {/* re-mount on enter for animation refresh */}
              {i === current ? slide.render() : slide.render()}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom controls */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-40 px-6 pb-5 md:px-12 md:pb-6">
        <div className="mx-auto flex max-w-[1440px] items-end justify-between gap-3">
          {/* Prev / Next + Presentation */}
          <div className="pointer-events-auto flex items-center gap-2">
            <button
              type="button"
              onClick={prev}
              disabled={current === 0}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line-strong bg-paper text-ink transition hover:border-mint hover:text-mint disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-line-strong disabled:hover:text-ink"
              aria-label="Previous slide"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={next}
              disabled={current === total - 1}
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 font-jakarta text-[10px] font-bold uppercase tracking-[0.22em] text-paper transition hover:bg-mint disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-ink"
            >
              {current === total - 1 ? 'End of deck' : 'Next'}
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </button>
            <button
              type="button"
              onClick={toggleFs}
              className="ml-2 inline-flex items-center gap-2 rounded-full border border-line-strong bg-paper px-3.5 py-2 font-jakarta text-[10px] font-bold uppercase tracking-[0.22em] text-ink-3 transition hover:border-mint hover:text-mint"
              aria-label={isFs ? 'Exit presentation' : 'Enter presentation'}
            >
              {isFs ? (
                <>
                  <Minimize2 className="h-3 w-3" /> Exit
                </>
              ) : (
                <>
                  <Maximize2 className="h-3 w-3" /> Present
                </>
              )}
            </button>
          </div>

          {/* Counter + label */}
          <div className="pointer-events-none flex flex-col items-end gap-0.5 text-right">
            <span className="font-jakarta text-[10px] font-bold uppercase tracking-[0.22em] text-mint">
              {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
            <span className="hidden font-jakarta text-[10px] font-bold uppercase tracking-[0.22em] text-ink-3 md:block">
              {cur.label}
            </span>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        aria-hidden={!menuOpen}
        className={`fixed inset-0 z-[70] transition-opacity duration-300 md:hidden ${
          menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="absolute inset-0 bg-paper" />
        <div className="relative flex h-full flex-col px-6 py-6">
          <div className="flex items-center justify-between">
            <Logo />
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line-strong bg-paper text-ink"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="mt-12 flex flex-col">
            {[
              { label: 'Title', i: 0 },
              { label: 'About', i: 1 },
              { label: 'Skills', i: 2 },
              { label: 'Projects', i: 6 },
              { label: 'Contact', cb: () => setContactOpen(true) },
              { label: 'Resume', cb: openAndDownloadResume },
            ].map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => {
                  if (item.cb) item.cb();
                  else setCurrent(item.i);
                  setMenuOpen(false);
                }}
                className="border-b border-line py-5 text-left font-sans text-[28px] font-extrabold uppercase tracking-tight text-ink hover:text-mint"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}
