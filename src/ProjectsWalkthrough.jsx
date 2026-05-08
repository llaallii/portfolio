import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowRight,
  ArrowLeft,
  Bluetooth,
  Cpu,
  Gauge,
  Play,
  Pause,
  Sparkles,
  Maximize2,
  Minimize2,
} from 'lucide-react';

/**
 * ProjectsWalkthrough
 * A presentation-style projects deck. Navigate with ← / → keys, Space, or on-screen controls.
 * Designed to replace a slide deck — one project per viewport, editorial layout.
 */

const PROJECTS = [
  {
    id: 'intro',
    kind: 'intro',
    kicker: 'THE WALKTHROUGH',
    title: ['Three tools.', 'Three stories.', 'One engineer.'],
    lede:
      "A guided tour through the platforms I owned end-to-end at SHL Technologies — from system definition, to validation, to high-volume readiness. Use the arrow keys ← → to move. Press space to advance.",
    meta: [
      { k: 'CH. 01', v: 'SmartHub · BLE-to-Cloud V&V' },
      { k: 'CH. 02', v: 'Molly cCap · BLE Timing & Latency' },
      { k: 'CH. 03', v: 'Elexy · Electromechanical Characterization' },
    ],
  },
  {
    id: 'smarthub',
    kind: 'project',
    chapter: 'CH. 01',
    kicker: 'SYSTEM DEFINITION · V&V · CLOUD',
    name: 'SmartHub',
    tagline: 'BLE-to-Cloud System Definition & V&V',
    role: 'Systems Engineer · Owner',
    stack: ['MBSE / SysML', 'Cameo', 'SRS / SDS', 'BLE', 'Cloud', 'RCA'],
    icon: Bluetooth,
    narrative: [
      'Owned the full system definition for a connected health gateway bridging BLE devices to the cloud.',
      'Modeled the architecture in Cameo (SysML), authored SRS / SDS / System Test Specification, and drove the BOM.',
      'Led integration, verification & validation, and structured RCA across the hardware, firmware, and cloud layers.',
    ],
    outcomes: [
      { k: 'Full', v: 'HW / FW / Cloud stack owned' },
      { k: 'MBSE', v: 'SysML-driven system design' },
      { k: 'E2E', v: 'Requirements → test traceability' },
    ],
    media: { type: 'image', src: '/Smatrthub.jpg', alt: 'SmartHub BLE-to-Cloud gateway' },
  },
  {
    id: 'molly',
    kind: 'project',
    chapter: 'CH. 02',
    kicker: 'FIXTURE DESIGN · IQ/OQ/PQ · GAGE R&R',
    name: 'Molly cCap',
    tagline: 'BLE Timing & Latency Validation',
    role: 'Test Automation Engineer',
    stack: ['Python · pytest', 'Raspberry Pi SBC', 'BLE / UART sniffers', 'Gage R&R', 'IQ/OQ/PQ'],
    icon: Cpu,
    narrative: [
      'Designed a low-cost automated fixture to measure BLE activation time, payload accuracy, and broadcast latency.',
      'Authored URS / EDS, then executed IQ, OQ, PQ and Gage R&R to qualify the fixture for production release.',
      'Replaced commercial validation equipment with in-house SBC ATE — 8% cost saving on V&V tooling.',
    ],
    outcomes: [
      { k: '90%', v: 'Validation cycle time cut' },
      { k: '8%', v: 'Tooling-spend savings' },
      { k: 'IQ/OQ/PQ', v: 'Qualified for HVM' },
    ],
    media: { type: 'image', src: '/MollyCcap.png', alt: 'Molly cCap validation fixture' },
    sideMedia: { type: 'image', src: '/equipment.png', alt: 'Test equipment' },
  },
  {
    id: 'elexy',
    kind: 'project',
    chapter: 'CH. 03',
    kicker: 'DOE · CHARACTERIZATION · PROCESS WINDOW',
    name: 'Elexy',
    tagline: 'Electromechanical Platform Characterization',
    role: 'Hardware Systems & Test Automation Engineer',
    stack: ['Python ATE', 'DOE', 'Minitab', 'SPC / ANOVA', 'Altium', 'Stepper motors'],
    icon: Gauge,
    narrative: [
      'Built a Power Unit Test Bench to characterize plunger force, dose accuracy, and retraction timing under variable loads.',
      'Ran DOE-driven sweeps across electrical and mechanical parameters to map operating margin and define the process window.',
      'Authored IQC protocols, drove stepper-motor validation, and surfaced cross-domain failures in the design phase.',
    ],
    outcomes: [
      { k: '75%', v: 'Output variance reduced' },
      { k: 'DOE', v: 'Process window mapped' },
      { k: 'Design', v: 'Failures caught pre-NPI' },
    ],
    media: { type: 'video', src: '/Elexy-animation.mp4', poster: '/Elexy.png' },
    sideMedia: { type: 'image', src: '/testbench.png', alt: 'Test bench' },
  },
  {
    id: 'outro',
    kind: 'outro',
    kicker: 'NEXT CHAPTER',
    title: ["Let's build the", 'tools that ship', 'tomorrow\u2019s silicon.'],
    lede:
      "Targeting Test, Validation, Characterization, Reliability and Service Engineering roles at ASML, KLA, AMAT, ASM and Micron. Based in Taoyuan. Open to relocate.",
    cta: { label: 'Start a conversation', href: 'mailto:ratanbunkar2@gmail.com' },
  },
];

function useKeyboardNav(onPrev, onNext) {
  useEffect(() => {
    const handler = (e) => {
      if (e.target && /INPUT|TEXTAREA/.test(e.target.tagName)) return;
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        onNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        onPrev();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onPrev, onNext]);
}

function Media({ media, className = '' }) {
  const vref = useRef(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const v = vref.current;
    if (!v) return;
    v.play().catch(() => {});
  }, []);

  if (!media) return null;

  if (media.type === 'video') {
    return (
      <div className={`relative overflow-hidden rounded-2xl border border-white/10 bg-black ${className}`}>
        <video
          ref={vref}
          className="h-full w-full object-cover"
          src={media.src}
          poster={media.poster}
          autoPlay
          muted
          loop
          playsInline
        />
        <button
          type="button"
          onClick={() => {
            const v = vref.current;
            if (!v) return;
            if (v.paused) {
              v.play();
              setPlaying(true);
            } else {
              v.pause();
              setPlaying(false);
            }
          }}
          className="absolute bottom-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition hover:border-mint hover:text-mint"
          aria-label={playing ? 'Pause' : 'Play'}
        >
          {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </button>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-2xl border border-white/10 bg-black ${className}`}>
      <img src={media.src} alt={media.alt || ''} className="h-full w-full object-cover" />
    </div>
  );
}

function ChapterRail({ total, current, onJump, visible }) {
  return (
    <div
      className={`pointer-events-auto fixed left-6 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-3 transition-opacity duration-300 md:flex ${
        visible ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      {Array.from({ length: total }).map((_, i) => {
        const active = i === current;
        return (
          <button
            key={i}
            type="button"
            onClick={() => onJump(i)}
            aria-label={`Jump to slide ${i + 1}`}
            className="group flex items-center gap-3"
          >
            <span
              className={`h-px transition-all duration-500 ${
                active ? 'w-10 bg-mint' : 'w-4 bg-white/30 group-hover:bg-white/70'
              }`}
            />
            <span
              className={`font-jakarta text-[10px] font-bold uppercase tracking-[0.22em] transition-colors ${
                active ? 'text-mint' : 'text-white/40 group-hover:text-white/70'
              }`}
            >
              {String(i + 1).padStart(2, '0')}
            </span>
          </button>
        );
      })}
    </div>
  );
}

function TopMeta({ current, total, project }) {
  const pct = ((current + 1) / total) * 100;
  const [isFs, setIsFs] = useState(false);

  useEffect(() => {
    const onChange = () => setIsFs(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', onChange);
    return () => document.removeEventListener('fullscreenchange', onChange);
  }, []);

  const togglePresentation = async () => {
    try {
      if (!document.fullscreenElement) {
        // Scroll the projects section fully into view, then enter fullscreen
        const el = document.getElementById('projects');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Fullscreen the whole document so the user can still scroll through chapters
        await document.documentElement.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch {
      /* user may have denied, or API unavailable */
    }
  };

  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 pt-8 md:px-10">
        <button
          type="button"
          onClick={togglePresentation}
          className="pointer-events-auto group flex items-center gap-4 rounded-full border border-transparent px-3 py-1.5 transition hover:border-mint/30 hover:bg-mint/[0.06]"
          aria-label={isFs ? 'Exit presentation mode' : 'Enter presentation mode'}
        >
          <span className="flex items-center gap-2 font-jakarta text-[10px] font-bold uppercase tracking-[0.3em] text-mint">
            {isFs ? (
              <Minimize2 className="h-3 w-3" strokeWidth={2.25} />
            ) : (
              <Maximize2 className="h-3 w-3" strokeWidth={2.25} />
            )}
            {isFs ? 'Exit Presentation' : 'Presentation Mode'}
          </span>
        </button>
      </div>

      <div className="mx-auto mt-6 max-w-[1440px] px-6 md:px-10">
        <div className="relative h-px w-full overflow-hidden bg-white/10">
          <div
            className="absolute left-0 top-0 h-full bg-mint transition-[width] duration-700 ease-out"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>
    </div>
  );
}

function BottomControls({ current, total, onPrev, onNext, label }) {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 pb-8 md:pb-10">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 md:px-10">
        <div className="pointer-events-auto flex items-center gap-3">
          <button
            type="button"
            onClick={onPrev}
            disabled={current === 0}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-white backdrop-blur-md transition hover:border-mint hover:text-mint disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-white/15 disabled:hover:text-white"
            aria-label="Previous slide"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={onNext}
            disabled={current === total - 1}
            className="group inline-flex items-center gap-2 rounded-full bg-mint px-5 py-3 font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-ink transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-30"
          >
            {current === total - 1 ? 'End of reel' : 'Next'}
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="pointer-events-none hidden font-jakarta text-[10px] font-bold uppercase tracking-[0.3em] text-white/45 md:block">
          {label}
        </div>
      </div>
    </div>
  );
}

function IntroSlide({ p }) {
  return (
    <div className="mx-auto grid min-h-screen max-w-[1440px] grid-cols-1 items-center gap-10 px-6 pt-28 pb-24 md:grid-cols-12 md:px-10">
      <div className="md:col-span-8">
        <p className="slide-rise font-jakarta text-[11px] font-bold uppercase tracking-[0.28em] text-mint">
          {p.kicker}
        </p>
        <h2
          className="slide-rise mt-6 font-sans text-[48px] font-extrabold uppercase leading-[0.95] tracking-tight text-white md:text-[92px]"
          style={{ animationDelay: '120ms' }}
        >
          {p.title.map((line, i) => (
            <span key={i} className="block">
              {line.includes('stories') ? (
                <>
                  Three <span className="font-serif italic font-normal text-mint">stories</span>.
                </>
              ) : (
                line
              )}
            </span>
          ))}
        </h2>
        <p
          className="slide-rise mt-8 max-w-[560px] font-sans text-[15px] leading-[1.7] text-white/70"
          style={{ animationDelay: '220ms' }}
        >
          {p.lede}
        </p>
      </div>
      <div
        className="slide-rise md:col-span-4"
        style={{ animationDelay: '320ms' }}
      >
        <ol className="space-y-4 border-l border-white/15 pl-5">
          {p.meta.map((m) => (
            <li key={m.k} className="flex flex-col">
              <span className="font-jakarta text-[10px] font-bold uppercase tracking-[0.3em] text-mint">
                {m.k}
              </span>
              <span className="mt-1 font-sans text-[15px] font-medium text-white">{m.v}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

function ProjectSlide({ p }) {
  const Icon = p.icon;
  return (
    <div className="mx-auto grid min-h-screen max-w-[1440px] grid-cols-1 items-center gap-10 px-6 pt-28 pb-24 md:grid-cols-12 md:gap-14 md:px-10">
      {/* LEFT — narrative */}
      <div className="md:col-span-6">
        <div className="slide-rise flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-mint/40 bg-mint/10 text-mint">
            <Icon className="h-4 w-4" />
          </span>
          <span className="font-jakarta text-[11px] font-bold uppercase tracking-[0.28em] text-mint">
            {p.kicker}
          </span>
        </div>

        <h2
          className="slide-rise mt-6 font-sans text-[44px] font-extrabold uppercase leading-[0.95] tracking-tight text-white md:text-[76px]"
          style={{ animationDelay: '120ms' }}
        >
          {p.name}
          <span className="text-mint">.</span>
        </h2>

        <p
          className="slide-rise mt-3 max-w-[520px] font-serif text-[22px] italic leading-[1.3] text-white/75 md:text-[26px]"
          style={{ animationDelay: '200ms' }}
        >
          {p.tagline}
        </p>

        <div
          className="slide-rise mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 font-jakarta text-[10px] font-bold uppercase tracking-[0.22em] text-white/55"
          style={{ animationDelay: '280ms' }}
        >
          <span className="text-white/80">Role</span>
          <span className="h-3 w-px bg-white/20" />
          <span>{p.role}</span>
        </div>

        <ul className="mt-8 space-y-3">
          {p.narrative.map((line, i) => (
            <li
              key={i}
              className="slide-rise flex gap-4"
              style={{ animationDelay: `${340 + i * 90}ms` }}
            >
              <span className="mt-[9px] h-px w-6 shrink-0 bg-mint/70" />
              <span className="font-sans text-[15px] leading-[1.65] text-white/80">{line}</span>
            </li>
          ))}
        </ul>

        <div
          className="slide-rise mt-8 flex flex-wrap gap-2"
          style={{ animationDelay: '620ms' }}
        >
          {p.stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-white/15 bg-white/[0.03] px-3 py-1.5 font-jakarta text-[10px] font-bold uppercase tracking-[0.18em] text-white/70"
            >
              {s}
            </span>
          ))}
        </div>

        <div
          className="slide-rise mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-6"
          style={{ animationDelay: '720ms' }}
        >
          {p.outcomes.map((o) => (
            <div key={o.k} className="flex flex-col">
              <span className="font-sans text-[26px] font-extrabold tracking-tight text-white">
                {o.k}
                <span className="text-mint">.</span>
              </span>
              <span className="mt-1 font-jakarta text-[10px] font-bold uppercase tracking-[0.22em] text-white/55">
                {o.v}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT — media */}
      <div className="md:col-span-6">
        <div
          className="slide-rise relative"
          style={{ animationDelay: '180ms' }}
        >
          <div className="absolute -left-4 -top-4 font-jakarta text-[10px] font-bold uppercase tracking-[0.3em] text-mint">
            {p.chapter}
          </div>
          <Media
            media={p.media}
            className="aspect-[4/5] w-full shadow-[0_40px_80px_-20px_rgba(0,0,0,0.7)]"
          />
          {p.sideMedia ? (
            <div
              className="slide-rise absolute -bottom-10 -left-10 hidden h-[180px] w-[260px] md:block"
              style={{ animationDelay: '420ms' }}
            >
              <Media media={p.sideMedia} className="h-full w-full" />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function OutroSlide({ p }) {
  return (
    <div className="mx-auto flex min-h-screen max-w-[1440px] flex-col items-start justify-center gap-10 px-6 pt-28 pb-24 md:px-10">
      <p className="slide-rise font-jakarta text-[11px] font-bold uppercase tracking-[0.28em] text-mint">
        <Sparkles className="mr-2 inline h-3 w-3" />
        {p.kicker}
      </p>
      <h2
        className="slide-rise max-w-[18ch] font-sans text-[54px] font-extrabold uppercase leading-[0.95] tracking-tight text-white md:text-[104px]"
        style={{ animationDelay: '120ms' }}
      >
        {p.title.map((line, i) => (
          <span key={i} className="block">
            {line.includes('silicon') ? (
              <>
                tomorrow's <span className="font-serif italic font-normal text-mint">silicon</span>.
              </>
            ) : (
              line
            )}
          </span>
        ))}
      </h2>
      <p
        className="slide-rise max-w-[620px] font-sans text-[15px] leading-[1.7] text-white/70"
        style={{ animationDelay: '220ms' }}
      >
        {p.lede}
      </p>
      <div className="slide-rise flex flex-wrap items-center gap-4" style={{ animationDelay: '320ms' }}>
        <a
          href={p.cta.href}
          className="group inline-flex items-center gap-3 rounded-full bg-mint px-7 py-4 font-sans text-[12px] font-bold uppercase tracking-[0.18em] text-ink transition-all duration-300 hover:bg-white hover:shadow-[0_10px_40px_-10px_rgba(94,210,156,0.6)]"
        >
          {p.cta.label}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
        <a
          href="https://linkedin.com/in/ratanlalbunkar"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.02] px-6 py-4 font-sans text-[12px] font-bold uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm transition hover:border-white/35 hover:text-white"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default function ProjectsWalkthrough() {
  const [current, setCurrent] = useState(0);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);
  const total = PROJECTS.length;
  const p = PROJECTS[current];

  const next = useCallback(() => setCurrent((c) => Math.min(c + 1, total - 1)), [total]);
  const prev = useCallback(() => setCurrent((c) => Math.max(c - 1, 0)), []);
  const jump = useCallback((i) => setCurrent(i), []);

  // Only enable keyboard nav AND show rail when the section is in view
  useKeyboardNav(
    inView ? prev : () => {},
    inView ? next : () => {}
  );

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.intersectionRatio > 0.35),
      { threshold: [0, 0.35, 0.6, 1] }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Reset entrance animations on slide change
  const [mountKey, setMountKey] = useState(0);
  useEffect(() => {
    setMountKey((k) => k + 1);
  }, [current]);

  const label = useMemo(() => {
    if (p.kind === 'intro') return 'The Walkthrough';
    if (p.kind === 'outro') return 'End of reel';
    return `${p.name} — ${p.tagline}`;
  }, [p]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="projects-deck relative w-full overflow-hidden bg-ink text-white"
    >
      {/* Ambient background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 80% 10%, rgba(94,210,156,0.10), transparent 55%), radial-gradient(ellipse at 10% 80%, rgba(94,210,156,0.05), transparent 60%)',
        }}
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden md:block">
        {[25, 50, 75].map((pct) => (
          <div
            key={pct}
            className="absolute top-0 h-full w-px bg-white/5"
            style={{ left: `${pct}%` }}
          />
        ))}
      </div>

      <TopMeta current={current} total={total} project={p} />
      <ChapterRail total={total} current={current} onJump={jump} visible={inView} />

      <div key={mountKey} className="relative">
        {p.kind === 'intro' && <IntroSlide p={p} />}
        {p.kind === 'project' && <ProjectSlide p={p} />}
        {p.kind === 'outro' && <OutroSlide p={p} />}
      </div>

      <BottomControls
        current={current}
        total={total}
        onPrev={prev}
        onNext={next}
        label={label}
      />
    </section>
  );
}
