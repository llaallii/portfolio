import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Layers,
  CheckCircle2,
  TerminalSquare,
  Cpu,
  Radio,
  Binary,
  BarChart3,
  SearchCheck,
  ShieldCheck,
  Code2,
  Wrench,
  Boxes,
  Languages,
  MapPin,
  GraduationCap,
  Briefcase,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react';

const SUMMARY =
  'Electrical Engineer with 3+ years delivering system integration, test automation, and V&V on embedded electromechanical platforms — from requirements through NPI and HVM readiness. Strong in Python-based ATE, DOE/SPC-driven characterization, and cross-domain HW/FW/ME debug backed by structured RCA. M.S. EE (NTUT) and B.Tech. EE (IIT Ropar), fluent in turning ambiguous user needs into traceable, regulatory-aligned engineering outcomes.';

const FACTS = [
  { Icon: Briefcase, k: 'Experience', v: '3+ yrs · SHL Technologies' },
  { Icon: GraduationCap, k: 'Education', v: 'M.S. EE · NTUT   ·   B.Tech. EE · IIT Ropar' },
  { Icon: MapPin, k: 'Based in', v: 'Taoyuan, Taiwan · Open to relocate' },
  { Icon: Languages, k: 'Languages', v: 'English (TOEIC 825) · Hindi · Mandarin' },
];

const SKILLS = [
  {
    Icon: Layers,
    title: 'Systems Engineering & Requirements',
    tagline: 'Turning ambiguous user needs into traceable engineering artifacts.',
    groups: [
      {
        h: 'Modeling',
        items: [
          'MBSE (SysML / UML)',
          'Enterprise Architect',
          'Cameo Systems Modeler (CATIA Magic)',
        ],
      },
      {
        h: 'Requirements',
        items: [
          'Elicitation & decomposition',
          'SRS / SDS / URS / EURS / ESDS / EDS authoring',
          'Requirements-to-test traceability',
        ],
      },
      {
        h: 'Lifecycle',
        items: [
          'ISO/IEC/IEEE 15288',
          'ISO/IEC/IEEE 29148',
          'Design transfer',
          'Stakeholder collaboration',
        ],
      },
    ],
  },
  {
    Icon: CheckCircle2,
    title: 'Verification & Validation',
    tagline: 'Risk-based strategy, qualified fixtures, release-ready evidence.',
    groups: [
      {
        h: 'Strategy',
        items: ['Risk-based test strategy', 'Release readiness (go / no-go)'],
      },
      {
        h: 'Qualification',
        items: ['IQ / OQ / PQ', 'TMV', 'Gage R&R (GRR)', 'Fixture qualification'],
      },
      {
        h: 'Execution',
        items: ['Bench validation', 'Test plans / protocols / reports'],
      },
    ],
  },
  {
    Icon: TerminalSquare,
    title: 'Test Automation & ATE',
    tagline: 'Python ATE & SBC-based fixtures that cut cycle time up to 90%.',
    groups: [
      {
        h: 'Automation',
        items: [
          'Python-based ATE / CATS',
          'pytest / unittest',
          'State-machine test logic',
        ],
      },
      {
        h: 'Fixtures',
        items: ['Custom test jigs & fixtures', 'SBC platforms (Raspberry Pi)'],
      },
      {
        h: 'Test Regimes',
        items: [
          'Parametric sweeps',
          'Endurance testing',
          'Timing / margin validation',
        ],
      },
    ],
  },
  {
    Icon: Cpu,
    title: 'Hardware & Electronics',
    tagline: 'Schematic-to-bench: PCBA, power, timing, and sensor calibration.',
    groups: [
      {
        h: 'EDA',
        items: ['Altium Designer', 'Schematic capture', 'Pin mapping · Net routing'],
      },
      {
        h: 'Analysis',
        items: [
          'PCBA-level validation',
          'Signal-chain analysis',
          'Power-behavior analysis',
          'Timing-margin analysis',
        ],
      },
      {
        h: 'Power & Instrumentation',
        items: [
          'DC-DC switching',
          'Power rail / PDN design',
          'Oscilloscope · Multimeter',
        ],
      },
      {
        h: 'Actuators & Sensors',
        items: ['Stepper motor testing', 'RFID / optical sensor calibration'],
      },
    ],
  },
  {
    Icon: Radio,
    title: 'Embedded Interfaces & Protocols',
    tagline: 'Wired, wireless, and the tools to sniff them all.',
    groups: [
      {
        h: 'Serial',
        items: ['UART', 'SPI', 'I²C', 'RS-232 / 422 / 485'],
      },
      {
        h: 'Wireless & Bus',
        items: ['BLE', 'LTE Cat-M1', 'RFID', 'USB 2.0 / 3.0', 'Ethernet PoE'],
      },
      {
        h: 'Debug Tooling',
        items: ['pyserial', 'bleak', 'pyshark', 'Wireshark'],
      },
    ],
  },
  {
    Icon: Binary,
    title: 'Digital Design',
    tagline: 'Foundations in digital logic and semiconductor devices.',
    note: 'Coursework',
    groups: [
      {
        h: 'Logic & VLSI',
        items: [
          'Digital logic design',
          'Verilog',
          'VLSI design',
          'Microprocessors',
          'Semiconductor devices',
        ],
      },
    ],
  },
  {
    Icon: BarChart3,
    title: 'Data Analysis & Statistics',
    tagline: 'DOE-led characterization, variance reduction, signal processing.',
    groups: [
      {
        h: 'Statistics',
        items: [
          'DOE',
          'SPC',
          'ANOVA',
          'Capability analysis',
          'MSA',
          'Variance reduction',
        ],
      },
      { h: 'Tools', items: ['Minitab', 'JMP'] },
      {
        h: 'Python Stack',
        items: [
          'NumPy · Pandas · SciPy',
          'Matplotlib · seaborn',
          'scikit-learn',
        ],
      },
      {
        h: 'Signal Processing',
        items: ['FFT · Filtering', 'NMF · RPCA · REpet'],
      },
    ],
  },
  {
    Icon: SearchCheck,
    title: 'Failure Analysis & RCA',
    tagline: 'Cross-domain debug with structured root cause analysis.',
    groups: [
      {
        h: 'RCA',
        items: [
          'Cross-domain debug (HW / FW / ME / EE)',
          'Structured Root Cause Analysis',
          'DFMEA',
        ],
      },
      {
        h: 'Characterization',
        items: ['Failure characterization', 'Stress / component testing'],
      },
      {
        h: 'Pipelines',
        items: [
          'Log & packet analysis pipelines',
          'Corrective action implementation',
        ],
      },
    ],
  },
  {
    Icon: ShieldCheck,
    title: 'Quality, Compliance & NPI',
    tagline: 'NPD → NPI → HVM readiness, aligned with regulated-industry standards.',
    groups: [
      {
        h: 'Standards',
        items: [
          'ISO 13485',
          'ISO 14971',
          'ISO 11608',
          'IEC 60601',
          'IEC 62304',
          'ISO 9001',
        ],
      },
      {
        h: 'Workflows',
        items: ['QMS & PLM', 'NPD → NPI → HVM readiness', 'Design & supplier transfer'],
      },
      {
        h: 'Quality Gates',
        items: [
          'IQC protocols',
          'AQL sampling',
          'DFM / DFA reviews',
          'Obsolescence / sustenance',
        ],
      },
      {
        h: 'Regulatory Awareness',
        items: [
          'FDA',
          'EU MDR',
          'NMPA',
          'TGA',
          'Health Canada',
          'MHLW',
        ],
      },
    ],
  },
  {
    Icon: Code2,
    title: 'Programming & Software',
    tagline: 'Python for everything that touches the bench.',
    groups: [{ h: 'Languages', items: ['Python (primary)', 'C', 'C++'] }],
  },
  {
    Icon: Wrench,
    title: 'Field / Customer-Facing',
    tagline: 'Comfortable at the customer site — FSE / FAE / CSE adjacent.',
    note: 'FSE · FAE · CSE adjacent',
    groups: [
      {
        h: 'On-site',
        items: ['On-site commissioning', 'Troubleshooting documentation'],
      },
      {
        h: 'Communication',
        items: [
          'Cross-functional stakeholder communication',
          'Go / no-go reporting',
          'Technical documentation authoring',
          'Third-party lab coordination',
        ],
      },
    ],
  },
  {
    Icon: Boxes,
    title: 'Tools & Platforms',
    tagline: 'The day-to-day toolchain.',
    groups: [
      {
        h: 'ALM · PLM',
        items: ['Siemens Polarion (ALM)', 'Siemens Teamcenter (PLM)'],
      },
      { h: 'Collaboration', items: ['JIRA', 'Confluence', 'Git'] },
      { h: 'Runtime', items: ['Linux', 'Docker', 'Kubernetes'] },
      { h: 'Workstation', items: ['VS Code', 'MS Office'] },
    ],
  },
];

function useInView(ref, threshold = 0.35) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.intersectionRatio > threshold),
      { threshold: [0, threshold, 0.6, 1] }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return inView;
}

function useKeyboardNav(enabled, onPrev, onNext) {
  useEffect(() => {
    if (!enabled) return;
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
  }, [enabled, onPrev, onNext]);
}

function ChapterRail({ total, current, onJump, visible }) {
  return (
    <div
      className={`pointer-events-auto fixed right-6 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-2 transition-opacity duration-300 md:flex ${
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
            aria-label={`Jump to skill ${i + 1}`}
            className="group flex items-center gap-2"
          >
            <span
              className={`font-jakarta text-[10px] font-bold uppercase tracking-[0.22em] transition-colors ${
                active ? 'text-mint' : 'text-white/40 group-hover:text-white/70'
              }`}
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <span
              className={`h-px transition-all duration-500 ${
                active ? 'w-10 bg-mint' : 'w-4 bg-white/30 group-hover:bg-white/70'
              }`}
            />
          </button>
        );
      })}
    </div>
  );
}

function SkillSlide({ skill, index, total, mountKey }) {
  const { Icon, title, tagline, note, groups } = skill;
  return (
    <div key={mountKey} className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-14">
      {/* LEFT — title + meta */}
      <div className="md:col-span-5">
        <div className="slide-rise flex items-center gap-3">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-mint/40 bg-mint/10 text-mint">
            <Icon className="h-5 w-5" strokeWidth={1.75} />
          </span>
          <div className="flex flex-col">
            <span className="font-jakarta text-[10px] font-bold uppercase tracking-[0.3em] text-mint">
              {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
            <span className="font-jakarta text-[10px] font-bold uppercase tracking-[0.3em] text-white/45">
              Skill Matrix
            </span>
          </div>
        </div>

        <h3
          className="slide-rise mt-7 font-sans text-[36px] font-extrabold uppercase leading-[0.98] tracking-tight text-white md:text-[52px]"
          style={{ animationDelay: '120ms' }}
        >
          {title}
          <span className="text-mint">.</span>
        </h3>

        <p
          className="slide-rise mt-4 max-w-[440px] font-serif text-[20px] italic leading-[1.35] text-white/75 md:text-[22px]"
          style={{ animationDelay: '200ms' }}
        >
          {tagline}
        </p>

        {note ? (
          <p
            className="slide-rise mt-4 font-jakarta text-[10px] font-bold uppercase tracking-[0.28em] text-mint/80"
            style={{ animationDelay: '240ms' }}
          >
            {note}
          </p>
        ) : null}
      </div>

      {/* RIGHT — grouped capabilities */}
      <div className="md:col-span-7">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {groups.map((g, gi) => (
            <div
              key={g.h}
              className="slide-rise rounded-2xl border border-white/10 bg-white/[0.02] p-5"
              style={{ animationDelay: `${260 + gi * 80}ms` }}
            >
              <p className="font-jakarta text-[9px] font-bold uppercase tracking-[0.3em] text-mint">
                {g.h}
              </p>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {g.items.map((it) => (
                  <li
                    key={it}
                    className="rounded-full border border-white/10 bg-white/[0.02] px-2.5 py-1 font-jakarta text-[10px] font-medium tracking-[0.04em] text-white/80"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SkillsWalkthrough() {
  const [current, setCurrent] = useState(0);
  const [mountKey, setMountKey] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, 0.35);
  const total = SKILLS.length;
  const p = SKILLS[current];

  const next = useCallback(() => setCurrent((c) => Math.min(c + 1, total - 1)), [total]);
  const prev = useCallback(() => setCurrent((c) => Math.max(c - 1, 0)), []);
  const jump = useCallback((i) => setCurrent(i), []);

  useKeyboardNav(inView, prev, next);

  useEffect(() => {
    setMountKey((k) => k + 1);
  }, [current]);

  const pct = ((current + 1) / total) * 100;
  const label = useMemo(() => p.title, [p]);

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden bg-ink text-white"
    >
      {/* ambient backgrounds */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 85% 10%, rgba(94,210,156,0.10), transparent 55%), radial-gradient(ellipse at 10% 90%, rgba(94,210,156,0.05), transparent 60%)',
        }}
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden md:block">
        {[25, 50, 75].map((pct) => (
          <div
            key={pct}
            className="absolute top-0 h-full w-px bg-white/[0.05]"
            style={{ left: `${pct}%` }}
          />
        ))}
      </div>

      {/* top meta */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 pt-8 md:px-10">
          <span className="font-jakarta text-[10px] font-bold uppercase tracking-[0.3em] text-mint">
            Skill Walkthrough
          </span>
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

      <ChapterRail total={total} current={current} onJump={jump} visible={inView} />

      {/* slide content — full viewport */}
      <div className="relative mx-auto flex min-h-screen max-w-[1440px] items-center px-6 pt-28 pb-28 md:px-10">
        <div className="w-full">
          <SkillSlide skill={p} index={current} total={total} mountKey={mountKey} />
        </div>
      </div>

      {/* bottom controls */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 pb-8 md:pb-10">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 md:px-10">
          <div className="pointer-events-auto flex items-center gap-3">
            <button
              type="button"
              onClick={prev}
              disabled={current === 0}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-white backdrop-blur-md transition hover:border-mint hover:text-mint disabled:cursor-not-allowed disabled:opacity-30"
              aria-label="Previous skill"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={next}
              disabled={current === total - 1}
              className="group inline-flex items-center gap-2 rounded-full bg-mint px-5 py-3 font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-ink transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-30"
            >
              {current === total - 1 ? 'End of matrix' : 'Next'}
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="pointer-events-none hidden font-jakarta text-[10px] font-bold uppercase tracking-[0.3em] text-white/45 md:block">
            {label}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AboutSection() {
  return (
    <>
      {/* Intro — summary + facts */}
      <section
        id="about"
        className="relative w-full overflow-hidden bg-ink py-28 text-white md:py-36"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 15% 10%, rgba(94,210,156,0.08), transparent 55%), radial-gradient(ellipse at 85% 90%, rgba(94,210,156,0.06), transparent 60%)',
          }}
        />
        <div aria-hidden className="pointer-events-none absolute inset-0 hidden md:block">
          {[25, 50, 75].map((pct) => (
            <div
              key={pct}
              className="absolute top-0 h-full w-px bg-white/[0.04]"
              style={{ left: `${pct}%` }}
            />
          ))}
        </div>

        <div className="relative mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-12 md:gap-14">
            <div className="md:col-span-7">
              <div className="flex items-center gap-3">
                <span className="font-jakarta text-[10px] font-bold uppercase tracking-[0.3em] text-mint">
                  02 / ABOUT
                </span>
                <span className="h-px w-16 bg-white/20" />
                <span className="font-jakarta text-[10px] font-bold uppercase tracking-[0.3em] text-white/50">
                  A brief on the engineer
                </span>
              </div>

              <h2 className="mt-6 font-sans text-[48px] font-extrabold uppercase leading-[0.95] tracking-tight text-white md:text-[84px]">
                About<span className="text-mint">.</span>
              </h2>

              <p className="mt-8 max-w-[640px] font-sans text-[15px] leading-[1.75] text-white/75">
                {SUMMARY}
              </p>
            </div>

            <div className="md:col-span-5">
              <ul className="divide-y divide-white/10 border-y border-white/10">
                {FACTS.map(({ Icon, k, v }) => (
                  <li key={k} className="flex items-center gap-4 py-4">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-mint">
                      <Icon className="h-4 w-4" strokeWidth={1.75} />
                    </span>
                    <div className="flex min-w-0 flex-col">
                      <span className="font-jakarta text-[9px] font-bold uppercase tracking-[0.3em] text-white/45">
                        {k}
                      </span>
                      <span className="mt-0.5 font-sans text-[14px] font-medium text-white">
                        {v}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Scroll hint to walkthrough */}
          <div className="mt-20 flex items-center gap-4 border-t border-white/10 pt-8">
            <span className="font-jakarta text-[10px] font-bold uppercase tracking-[0.3em] text-mint">
              ↓ Skill walkthrough
            </span>
            <span className="font-sans text-[13px] text-white/55">
              12 chapters · arrow keys to navigate
            </span>
          </div>
        </div>
      </section>

      {/* Skills — journey style */}
      <SkillsWalkthrough />
    </>
  );
}
