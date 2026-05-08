import React from 'react';

/* ============================================================
   PROJECTS — Boardroom edition
   Five chapters: 3 project intros + 2 outcome deep-dives,
   plus a closing "Let's talk" slide.
   ============================================================ */

export const PROJECTS = [
  {
    id: 'smarthub',
    chapter: 'Ch. 01',
    num: '02 / 12',
    label: 'System Definition · V&V · Cloud',
    sig: 'Project one of three',
    kicker: 'SmartHub · BLE-to-Cloud Gateway',
    name: 'SmartHub',
    tagline: 'A connected gateway, modeled in SysML, owned end-to-end.',
    role: 'Systems Engineer · Owner',
    narrative: [
      'Owned full system definition for a BLE-to-cloud connected health gateway.',
      'Modeled architecture in Cameo (SysML); authored SRS / SDS / System Test Spec; drove the BOM.',
      'Led integration, V&V, and structured RCA across hardware, firmware and cloud layers.',
    ],
    outcomes: [
      { n: 'Full', l: 'HW · FW · Cloud stack' },
      { n: 'MBSE', l: 'SysML system design' },
      { n: 'E2E', l: 'Req → test traceability' },
    ],
    media: { type: 'image', src: '/Smatrthub.jpg', alt: 'SmartHub gateway' },
    chapterTag: 'Ch. 01 · SmartHub',
    contain: true,
  },
  {
    id: 'molly',
    chapter: 'Ch. 02',
    num: '03 / 12',
    label: 'Fixture Design · IQ/OQ/PQ · Gage R&R',
    sig: 'Project two of three',
    kicker: 'Molly cCap · BLE Timing & Latency',
    name: 'Molly cCap',
    tagline: 'A Raspberry-Pi fixture that replaced commercial validation gear.',
    role: 'Test Automation Engineer',
    narrative: [
      'Designed a low-cost SBC fixture measuring BLE activation time, payload accuracy and broadcast latency.',
      'Authored URS / EDS, then executed IQ, OQ, PQ and Gage R&R to qualify for production release.',
      'Replaced commercial validation equipment with in-house SBC ATE · 8% saving on V&V tooling.',
    ],
    outcomes: [
      { n: '90', u: '%', l: 'Cycle time cut' },
      { n: '8', u: '%', l: 'Tooling savings' },
      { n: 'IQ·OQ·PQ', l: 'Qualified for HVM', small: true },
    ],
    media: { type: 'video', src: '/molly-ccap.mp4', poster: '/MollyCcap.png' },
    chapterTag: 'Ch. 02 · Molly cCap',
  },
];

export const ELEXY = {
  id: 'elexy',
  chapter: 'Ch. 03',
  num: '05 / 12',
  label: 'DOE · Characterization · Process Window',
  sig: 'Project three of three',
  kicker: 'Elexy · Power Unit Test Bench',
  name: 'Elexy',
  tagline: 'A power-unit test bench that mapped the operating margin.',
  role: 'Hardware Systems & Test Automation',
  narrative: [
    'Built a Power Unit Test Bench characterizing plunger force, dose accuracy and retraction timing.',
    'Ran DOE-driven sweeps across electrical and mechanical parameters to define the process window.',
    'Authored IQC protocols, drove stepper-motor validation, surfaced cross-domain failures pre-NPI.',
  ],
  outcomes: [
    { n: '75', u: '%', l: 'Variance reduced' },
    { n: 'DOE', l: 'Process window mapped' },
    { n: 'Pre-NPI', l: 'Failures caught early', small: true },
  ],
  media: { type: 'video', src: '/Elexy-animation.mp4', poster: '/Elexy.png' },
  chapterTag: 'Ch. 03 · Elexy',
};

/* ——— Project intro slide ——— */
export function ProjectSlide({ p }) {
  return (
    <section className="relative w-full bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <div className="slide-head">
          <div className="h-left">
            <span className="num">
              {p.chapter} · {p.num}
            </span>
            <span className="pipe" />
            <span className="label">{p.label}</span>
          </div>
          <span className="signature">{p.sig}</span>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div className="flex flex-col justify-center">
            <p className="kicker">{p.kicker}</p>

            <h2
              className="mt-4 font-sans font-extrabold uppercase tracking-[-0.035em] text-ink"
              style={{ fontSize: 'clamp(56px, 9vw, 124px)', lineHeight: 0.92, margin: '0 0 16px' }}
            >
              {p.name}
              <span className="text-mint">.</span>
            </h2>

            <p
              className="serif-italic max-w-[580px] text-ink-2"
              style={{ fontSize: 'clamp(20px, 2.4vw, 36px)', lineHeight: 1.2, margin: '0 0 32px' }}
            >
              {p.tagline}
            </p>

            <div
              className="grid grid-cols-[80px_1fr] items-baseline gap-5 border-y border-line py-4 md:grid-cols-[100px_1fr]"
              style={{ marginBottom: 24 }}
            >
              <span className="font-jakarta text-[11px] font-bold uppercase tracking-[0.28em] text-ink-3">
                Role
              </span>
              <span className="font-sans text-[16px] font-semibold text-ink md:text-[20px]">
                {p.role}
              </span>
            </div>

            <ul className="m-0 list-none p-0">
              {p.narrative.map((line, i) => (
                <li
                  key={i}
                  className="grid grid-cols-[50px_1fr] items-baseline gap-4 py-3 md:grid-cols-[60px_1fr] md:gap-5"
                >
                  <span className="font-jakarta text-[12px] font-bold tracking-[0.22em] text-mint">
                    → {String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    className="font-sans text-ink-2"
                    style={{ fontSize: 'clamp(15px, 1.5vw, 22px)', lineHeight: 1.5 }}
                  >
                    {line}
                  </span>
                </li>
              ))}
            </ul>

            {/* outcomes */}
            <div className="mt-9 grid grid-cols-3 border-y border-ink">
              {p.outcomes.map((o, i) => (
                <div
                  key={i}
                  className={`py-6 pr-4 ${
                    i === p.outcomes.length - 1 ? '' : 'border-r border-line'
                  } ${i > 0 ? 'pl-4 md:pl-6' : ''}`}
                >
                  <div
                    className="font-sans font-extrabold tracking-[-0.02em] leading-none text-ink"
                    style={{ fontSize: o.small ? 'clamp(18px, 2.2vw, 32px)' : 'clamp(28px, 3.4vw, 44px)' }}
                  >
                    {o.n}
                    {o.u ? (
                      <span
                        className="text-mint"
                        style={{ fontSize: o.small ? '0.7em' : '0.65em' }}
                      >
                        {o.u}
                      </span>
                    ) : null}
                  </div>
                  <span className="mt-2 block font-jakarta text-[10px] font-bold uppercase tracking-[0.22em] text-ink-3 md:text-[11px]">
                    {o.l}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* media */}
          <div
            className={`media-frame${p.contain ? ' contain' : ''} min-h-[420px] lg:min-h-[700px]`}
          >
            <span className="chapter-tag">{p.chapterTag}</span>
            {p.media.type === 'video' ? (
              <video
                src={p.media.src}
                poster={p.media.poster}
                autoPlay
                muted
                loop
                playsInline
              />
            ) : (
              <img src={p.media.src} alt={p.media.alt || ''} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ——— Outcome slide (media left, big-stat list right) ——— */
export function OutcomeSlide({
  num,
  label,
  sig,
  media,
  chapterTag,
  kicker,
  headline,
  tagline,
  rows,
}) {
  return (
    <section className="relative w-full bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <div className="slide-head">
          <div className="h-left">
            <span className="num">{num}</span>
            <span className="pipe" />
            <span className="label">{label}</span>
          </div>
          <span className="signature">{sig}</span>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          {/* media — contain */}
          <div className="media-frame contain min-h-[420px] lg:min-h-[680px]">
            <span className="chapter-tag">{chapterTag}</span>
            <img src={media} alt={chapterTag} />
          </div>

          <div className="flex flex-col justify-center">
            <p className="kicker">{kicker}</p>
            <h2
              className="font-sans font-extrabold uppercase tracking-[-0.03em] text-ink"
              style={{
                fontSize: 'clamp(40px, 6vw, 84px)',
                lineHeight: 0.95,
                margin: '16px 0 24px',
              }}
            >
              {headline}
              <span className="text-mint">.</span>
            </h2>
            <p
              className="serif-italic max-w-[560px] text-ink-2"
              style={{ fontSize: 'clamp(18px, 2vw, 30px)', lineHeight: 1.25, margin: '0 0 32px' }}
            >
              {tagline}
            </p>

            <div className="flex flex-col border-y border-ink">
              {rows.map((r, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-1 items-baseline gap-3 py-7 md:grid-cols-[200px_1fr] md:gap-8 ${
                    i === rows.length - 1 ? '' : 'border-b border-line'
                  }`}
                >
                  <div
                    className="font-sans font-extrabold leading-[0.9] tracking-[-0.04em] text-ink"
                    style={{ fontSize: r.numSize || 'clamp(56px, 8vw, 128px)' }}
                  >
                    {r.n}
                    {r.u ? (
                      <span className="text-mint" style={{ fontSize: '0.5em' }}>
                        {r.u}
                      </span>
                    ) : null}
                  </div>
                  <div>
                    <p className="kicker mb-2">{r.label}</p>
                    <p
                      className="m-0 font-sans text-ink-2"
                      style={{ fontSize: 'clamp(15px, 1.5vw, 22px)', lineHeight: 1.45 }}
                    >
                      {r.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ——— Closing slide ——— */
export function ClosingSlide() {
  return (
    <section className="relative w-full bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <div className="slide-head">
          <div className="h-left">
            <span className="live-dot" />
            <span className="num" style={{ marginLeft: 8 }}>
              11 / 12 · The ask
            </span>
            <span className="pipe" />
            <span className="label">Open to relocate · Anywhere in Taiwan</span>
          </div>
          <span className="signature">Thank you</span>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <div className="flex flex-col justify-center">
            <h2
              className="font-sans font-extrabold uppercase tracking-[-0.045em] text-ink"
              style={{ fontSize: 'clamp(64px, 11vw, 156px)', lineHeight: 0.9, margin: 0 }}
            >
              Let's{' '}
              <span className="serif-italic text-mint" style={{ textTransform: 'lowercase' }}>
                talk
              </span>
              <span className="text-mint">.</span>
            </h2>
            <p
              className="serif-italic max-w-[700px] text-ink-2"
              style={{ fontSize: 'clamp(18px, 2.2vw, 32px)', lineHeight: 1.3, margin: '24px 0 0' }}
            >
              Targeting test, validation, characterization, reliability and service engineering
              roles across Taiwan's semiconductor industry. ASML, KLA, Applied Materials, ASM,
              Micron and beyond.
            </p>
            <p className="mt-12 font-jakarta text-[11px] font-bold uppercase tracking-[0.24em] text-ink-3 md:text-[14px]">
              Available now · Notice period flexible
            </p>
          </div>

          {/* contact card */}
          <div
            className="flex flex-col border border-ink bg-paper p-8 md:p-12"
            style={{ borderRadius: 4 }}
          >
            <h4 className="m-0 border-b border-ink pb-4 font-jakarta text-[11px] font-bold uppercase tracking-[0.28em] text-mint md:text-[14px]">
              Get in touch
            </h4>
            <ul className="mt-6 flex list-none flex-col p-0">
              {[
                { k: 'Email', v: 'ratanbunkar2@gmail.com', href: 'mailto:ratanbunkar2@gmail.com' },
                { k: 'Phone', v: '+886 975 010 438', href: 'tel:+886975010438' },
                {
                  k: 'LinkedIn',
                  v: 'linkedin.com/in/ratanlalbunkar',
                  href: 'https://linkedin.com/in/ratanlalbunkar',
                  external: true,
                },
                { k: 'Location', v: 'Taoyuan, Taiwan' },
              ].map((c, i, arr) => (
                <li
                  key={c.k}
                  className={`flex flex-col gap-1 py-4 ${
                    i === arr.length - 1 ? '' : 'border-b border-line'
                  }`}
                >
                  <span className="font-jakarta text-[10px] font-bold uppercase tracking-[0.28em] text-ink-3">
                    {c.k}
                  </span>
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.external ? '_blank' : undefined}
                      rel={c.external ? 'noopener noreferrer' : undefined}
                      className="font-sans text-[16px] font-medium text-ink transition hover:text-mint md:text-[20px]"
                    >
                      {c.v}
                    </a>
                  ) : (
                    <span className="font-sans text-[16px] font-medium text-ink md:text-[20px]">
                      {c.v}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export const OUTCOME_JIG = {
  num: '04 / 12',
  label: 'Outcomes · Custom Jig · Python ATE',
  sig: 'Built it. Measured it.',
  kicker: 'Outcomes · Quantified',
  headline: 'Built by hand',
  tagline: 'A custom in-house jig that quietly replaced the commercial ATE.',
  media: '/equipment.png',
  chapterTag: 'Custom test jig · SBC ATE',
  rows: [
    {
      n: '90',
      u: '%',
      label: 'Cycle time cut',
      body: 'Validation cycle time cut on Molly cCap via Python ATE on SBC.',
    },
    {
      n: '8',
      u: '%',
      label: 'Tooling savings',
      body: 'V&V tooling savings. In-house SBC fixtures replaced commercial ATE.',
    },
  ],
};

export const OUTCOME_BENCH = {
  num: '06 / 12',
  label: 'Outcomes · Power Unit Test Bench · DOE',
  sig: 'Built it. Characterized it.',
  kicker: 'Outcomes · Quantified',
  headline: 'Mapped the margin',
  tagline:
    'A bench that turned plunger force, dose accuracy and timing into a defensible process window.',
  media: '/testbench.png',
  chapterTag: 'Power Unit Test Bench · Elexy',
  rows: [
    {
      n: '75',
      u: '%',
      label: 'Variance reduced',
      body:
        'Output variance reduced on Elexy through DOE-driven characterization across electrical and mechanical parameters.',
    },
    {
      n: 'Pre-NPI',
      label: 'Failures caught early',
      body:
        'Stepper-motor validation, IQC protocols and cross-domain failures surfaced before NPI release.',
      numSize: 'clamp(40px, 5vw, 96px)',
    },
  ],
};

export default function ProjectsWalkthrough() {
  return (
    <div id="projects">
      {/* SmartHub */}
      <ProjectSlide p={PROJECTS[0]} />

      {/* Molly cCap */}
      <ProjectSlide p={PROJECTS[1]} />

      {/* Test Jig outcome slide */}
      <OutcomeSlide
        num="04 / 12"
        label="Outcomes · Custom Jig · Python ATE"
        sig="Built it. Measured it."
        kicker="Outcomes · Quantified"
        headline="Built by hand"
        tagline="A custom in-house jig that quietly replaced the commercial ATE."
        media="/equipment.png"
        chapterTag="Custom test jig · SBC ATE"
        rows={[
          {
            n: '90',
            u: '%',
            label: 'Cycle time cut',
            body: 'Validation cycle time cut on Molly cCap via Python ATE on SBC.',
          },
          {
            n: '8',
            u: '%',
            label: 'Tooling savings',
            body: 'V&V tooling savings. In-house SBC fixtures replaced commercial ATE.',
          },
        ]}
      />

      {/* Elexy */}
      <ProjectSlide p={ELEXY} />

      {/* Power Unit Test Bench outcome slide */}
      <OutcomeSlide
        num="06 / 12"
        label="Outcomes · Power Unit Test Bench · DOE"
        sig="Built it. Characterized it."
        kicker="Outcomes · Quantified"
        headline="Mapped the margin"
        tagline="A bench that turned plunger force, dose accuracy and timing into a defensible process window."
        media="/testbench.png"
        chapterTag="Power Unit Test Bench · Elexy"
        rows={[
          {
            n: '75',
            u: '%',
            label: 'Variance reduced',
            body: 'Output variance reduced on Elexy through DOE-driven characterization across electrical and mechanical parameters.',
          },
          {
            n: 'Pre-NPI',
            label: 'Failures caught early',
            body: 'Stepper-motor validation, IQC protocols and cross-domain failures surfaced before NPI release.',
            numSize: 'clamp(40px, 5vw, 96px)',
          },
        ]}
      />

      {/* Closing — Let's talk */}
      <ClosingSlide />
    </div>
  );
}
