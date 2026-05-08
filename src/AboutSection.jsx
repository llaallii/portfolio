import React from 'react';

const FACTS = [
  { k: 'Experience', v: '3+ yrs · SHL Technologies' },
  { k: 'Education', v: 'M.S. EE · NTUT  ·  B.Tech. EE · IIT Ropar' },
  { k: 'Languages', v: 'English (TOEIC 825) · Hindi · Mandarin' },
];

const SKILL_VOLUMES = [
  {
    vol: 'Vol. 1',
    kicker: 'The discipline',
    headline: ['Requirements,', 'qualification,', 'automation'],
    pages: 'three categories · twelve total',
    next: 'Next → Hardware & Embedded',
    cols: [
      {
        num: '01 / 12',
        h: 'Systems Engineering & Requirements',
        tag: 'Turning ambiguous user needs into traceable engineering artifacts.',
        items: [
          'MBSE · SysML / UML',
          'Enterprise Architect',
          'Cameo Systems Modeler',
          'SRS · SDS · URS · EURS · ESDS · EDS',
          'Requirements → test traceability',
          'ISO/IEC/IEEE 15288 · 29148',
          'Design transfer',
        ],
      },
      {
        num: '02 / 12',
        h: 'Verification & Validation',
        tag: 'Risk-based strategy, qualified fixtures, release-ready evidence.',
        items: [
          'Risk-based test strategy',
          'Release readiness (go / no-go)',
          'IQ / OQ / PQ',
          'TMV · Gage R&R',
          'Fixture qualification',
          'Bench validation',
          'Test plans · protocols · reports',
        ],
      },
      {
        num: '03 / 12',
        h: 'Test Automation & ATE',
        tag: 'Python ATE & SBC fixtures that cut cycle time up to 90%.',
        items: [
          'Python ATE / CATS',
          'pytest · unittest',
          'State-machine test logic',
          'Custom test jigs & fixtures',
          'SBC platforms (Raspberry Pi)',
          'Parametric sweeps · Endurance',
          'Timing / margin validation',
        ],
      },
    ],
  },
  {
    vol: 'Vol. 2',
    kicker: 'The bench',
    headline: ['Schematic,', 'signal,', 'silicon'],
    pages: 'three categories · twelve total',
    next: 'Next → Method & Quality',
    cols: [
      {
        num: '04 / 12',
        h: 'Hardware & Electronics',
        tag: 'Schematic-to-bench: PCBA, power, timing, sensor calibration.',
        items: [
          'Altium Designer',
          'Schematic capture · Pin map · Net routing',
          'PCBA validation · Signal-chain analysis',
          'Power-behavior · Timing-margin',
          'DC-DC switching · PDN design',
          'Oscilloscope · Multimeter',
          'Stepper motors · RFID / optical sensors',
        ],
      },
      {
        num: '05 / 12',
        h: 'Embedded Interfaces & Protocols',
        tag: 'Wired, wireless, and the tools to sniff them all.',
        items: [
          'UART · SPI · I²C',
          'RS-232 / 422 / 485',
          'BLE · LTE Cat-M1 · RFID',
          'USB 2.0 / 3.0 · Ethernet PoE',
          'pyserial · bleak',
          'pyshark · Wireshark',
        ],
      },
      {
        num: '06 / 12',
        sub: '· Coursework',
        h: 'Digital Design',
        tag: 'Foundations in digital logic and semiconductor devices.',
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
    vol: 'Vol. 3',
    kicker: 'The method',
    headline: ['DOE,', 'RCA,', 'regulated workflows'],
    pages: 'three categories · twelve total',
    next: 'Next → Toolkit & Field',
    cols: [
      {
        num: '07 / 12',
        h: 'Data Analysis & Statistics',
        tag: 'DOE-led characterization, variance reduction, signal processing.',
        items: [
          'DOE · SPC · ANOVA',
          'Capability analysis · MSA',
          'Minitab · JMP',
          'NumPy · Pandas · SciPy',
          'Matplotlib · seaborn · scikit-learn',
          'FFT · Filtering',
          'NMF · RPCA · REpet',
        ],
      },
      {
        num: '08 / 12',
        h: 'Failure Analysis & RCA',
        tag: 'Cross-domain debug with structured root cause analysis.',
        items: [
          'HW / FW / ME / EE debug',
          'Structured Root Cause Analysis',
          'DFMEA',
          'Failure characterization',
          'Stress / component testing',
          'Log & packet analysis pipelines',
          'Corrective action implementation',
        ],
      },
      {
        num: '09 / 12',
        h: 'Quality, Compliance & NPI',
        tag: 'NPD → NPI → HVM readiness, aligned with regulated standards.',
        items: [
          'ISO 13485 · 14971 · 11608 · 9001',
          'IEC 60601 · 62304',
          'QMS · PLM · Design / supplier transfer',
          'IQC · AQL · DFM / DFA',
          'FDA · EU MDR · NMPA · TGA · MHLW',
        ],
      },
    ],
  },
  {
    vol: 'Vol. 4',
    kicker: 'The toolkit',
    headline: ['Code,', 'customer site,', 'day-to-day'],
    pages: 'three categories · twelve total',
    next: 'End of matrix · 12 of 12',
    cols: [
      {
        num: '10 / 12',
        h: 'Programming & Software',
        tag: 'Python for everything that touches the bench.',
        items: ['Python (primary)', 'C', 'C++'],
      },
      {
        num: '11 / 12',
        sub: '· FSE · FAE · CSE',
        h: 'Field / Customer-Facing',
        tag: 'Comfortable at the customer site.',
        items: [
          'On-site commissioning',
          'Troubleshooting documentation',
          'Cross-functional stakeholder comms',
          'Go / no-go reporting',
          'Technical documentation authoring',
          'Third-party lab coordination',
        ],
      },
      {
        num: '12 / 12',
        h: 'Tools & Platforms',
        tag: 'The day-to-day toolchain.',
        items: [
          'Siemens Polarion (ALM)',
          'Siemens Teamcenter (PLM)',
          'JIRA · Confluence · Git',
          'Linux · Docker · Kubernetes',
          'VS Code · MS Office',
        ],
      },
    ],
  },
];

/* ——— Profile slide ——— */
function ProfileSlide() {
  return (
    <section
      id="about"
      className="relative w-full bg-paper py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        {/* slide head */}
        <div className="slide-head">
          <div className="h-left">
            <span className="num">01 / 12</span>
            <span className="pipe" />
            <span className="label">About the engineer</span>
          </div>
          <span className="signature">A brief introduction</span>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div className="flex flex-col justify-center gap-8">
            <h2
              className="font-sans font-extrabold uppercase tracking-[-0.04em] text-ink"
              style={{ fontSize: 'clamp(56px, 9vw, 128px)', lineHeight: 0.92, margin: 0 }}
            >
              About<span className="text-mint">.</span>
            </h2>

            <p
              className="serif-italic m-0 max-w-[680px] text-ink-2"
              style={{ fontSize: 'clamp(22px, 2.4vw, 36px)', lineHeight: 1.25 }}
            >
              Electrical engineer with three years of system integration, test automation, and V&amp;V
              on embedded electromechanical platforms.
            </p>

            <p
              className="m-0 max-w-[680px] font-sans text-ink-2"
              style={{ fontSize: 'clamp(15px, 1.4vw, 21px)', lineHeight: 1.65 }}
            >
              From requirements through NPI and HVM readiness · strong in Python ATE,
              DOE/SPC characterization, and cross-domain HW/FW/ME debug. M.S. EE (NTUT)
              and B.Tech EE (IIT Ropar).
            </p>

            <ul className="mt-2 list-none p-0">
              {FACTS.map((f, i) => (
                <li
                  key={f.k}
                  className={`grid grid-cols-[140px_1fr] gap-6 border-t border-line py-5 md:grid-cols-[200px_1fr] md:gap-8 ${
                    i === FACTS.length - 1 ? 'border-b border-line' : ''
                  }`}
                  style={{ alignItems: 'baseline' }}
                >
                  <span className="font-jakarta text-[11px] font-bold uppercase tracking-[0.28em] text-ink-3">
                    {f.k}
                  </span>
                  <span className="font-sans text-[16px] font-medium text-ink md:text-[20px]">
                    {f.v}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Portrait frame */}
          <div className="media-frame min-h-[480px] lg:min-h-[640px]">
            <img src="/profile%20image.png" alt="Ratan Lal Bunkar" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ——— Skills volume slide ——— */
function SkillVolume({ vol, idx }) {
  return (
    <section className="relative w-full bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        {/* slide head */}
        <div className="slide-head">
          <div className="h-left">
            <span className="num">
              {String(idx * 3 + 4).padStart(2, '0')}–{String(idx * 3 + 6).padStart(2, '0')} / 12 ·
              Skill Matrix {idx + 1} of 4
            </span>
            <span className="pipe" />
            <span className="label">{vol.kicker}</span>
          </div>
          <span className="signature">Volume {['one', 'two', 'three', 'four'][idx]}</span>
        </div>

        {/* skill-slide-head */}
        <div className="grid grid-cols-1 items-end gap-8 border-b border-ink pb-8 md:grid-cols-[1fr_auto] md:gap-14">
          <div>
            <p className="kicker">{vol.kicker}</p>
            <h2
              className="mt-3 font-sans font-extrabold uppercase tracking-[-0.03em] text-ink"
              style={{ fontSize: 'clamp(38px, 6vw, 84px)', lineHeight: 0.96, margin: 0 }}
            >
              {vol.headline[0]} {vol.headline[1]} {vol.headline[2]}
              <span className="text-mint">.</span>
            </h2>
          </div>
          <p
            className="serif-italic whitespace-nowrap pb-2 text-ink-3"
            style={{ fontSize: 'clamp(18px, 1.8vw, 28px)' }}
          >
            {vol.pages}
          </p>
        </div>

        {/* 3-col skill grid */}
        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-0">
          {vol.cols.map((c, i) => (
            <div
              key={c.num}
              className={`flex flex-col gap-4 md:px-8 ${
                i === 0 ? 'md:pl-0' : ''
              } ${i === vol.cols.length - 1 ? 'md:border-r-0 md:pr-0' : 'md:border-r md:border-line'}`}
            >
              <span className="font-jakarta text-[12px] font-bold uppercase tracking-[0.28em] text-mint">
                {c.num}
                {c.sub ? (
                  <span className="ml-2 font-medium tracking-[0.18em] text-ink-soft">
                    {c.sub}
                  </span>
                ) : null}
              </span>
              <h3
                className="font-sans font-bold tracking-[-0.015em] text-ink"
                style={{ fontSize: 'clamp(20px, 2vw, 32px)', lineHeight: 1.05, margin: 0 }}
              >
                {c.h}
              </h3>
              <p
                className="serif-italic m-0 border-b border-line pb-3 text-ink-2"
                style={{ fontSize: 'clamp(16px, 1.5vw, 22px)', lineHeight: 1.3 }}
              >
                {c.tag}
              </p>
              <ul className="m-0 flex list-none flex-col p-0">
                {c.items.map((it, j) => (
                  <li
                    key={it}
                    className={`font-sans text-[14px] font-medium text-ink-2 md:text-[17px] ${
                      j === c.items.length - 1 ? '' : 'border-b border-line'
                    } py-1.5`}
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* toolkit band */}
        <div className="mt-10 flex items-center justify-between border-t border-ink pt-6 font-jakarta text-[11px] font-bold uppercase tracking-[0.24em] text-ink-3">
          <span>{vol.vol} · {vol.kicker}</span>
          <span>{vol.next}</span>
        </div>
      </div>
    </section>
  );
}

export default function AboutSection() {
  return (
    <>
      <ProfileSlide />
      {SKILL_VOLUMES.map((v, i) => (
        <SkillVolume key={v.vol} vol={v} idx={i} />
      ))}
    </>
  );
}
