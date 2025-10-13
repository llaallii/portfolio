// Portfolio content constants

export const PERSONAL_INFO = {
  name: "Ratan Lal Bunkar",
  title: "Systems Engineer",
  subtitle: "Medical Device Development & Innovation",
  email: "ratanbunkar2@gmail.com",
  phone: "+886 0975 010 438",
  location: "Taoyuan City, Taiwan",
  linkedin: "https://www.linkedin.com/in/ratanlalbunkar/",
  github: "https://github.com/llaallii",
};

export const HERO = {
  headline: "Engineering the Future of Smart Medical Systems",
  description: "Systems Integration Engineer specializing in embedded electromechanical and IoT-enabled medical devices. Experienced in Python-based test automation, regulatory compliance (ISO 13485/14971/60601), and model-based systems engineering (MBSE).",
  cta: "View My Work",
};

export const ABOUT = {
  title: "About Me",
  description: "I am a Systems Engineer with over three years of experience in R&D and new product development for connected medical devices. My expertise spans requirements engineering, system definition, verification and validation (V&V), and regulatory-compliant automation for embedded systems. I've engineered custom ATE-style test systems integrating BLE, UART, and sensors to validate autoinjectors and medical IoT platforms under ISO 13485-compliant processes. My approach combines technical precision, scalability, and innovation to bridge the gap between hardware, firmware, and data systems.",
  highlights: [
    "Requirements engineering and system definition (SRS, SDS, V&V protocols)",
    "Python-based test automation for BLE, UART, and sensor validation",
    "ISO 13485, ISO 14971, ISO 11608, and IEC 60601 compliance",
    "Model-Based Systems Engineering (MBSE) with SysML",
    "Design transfer, risk management (DFMEA), and IQ/OQ/PQ validation",
  ],
  stats: [
    { value: "3+", label: "Years Experience" },
    { value: "4", label: "Major Projects" },
    { value: "5+", label: "ISO Standards" },
    { value: "100%", label: "Compliance Rate" },
  ],
};

export const PROJECTS = [
  {
    id: 1,
    title: "Elexy – Electromechanical Autoinjector",
    category: "Embedded Systems",
    description: "Developed and validated test benches to evaluate injection timing, motor stall detection, and plunger force under varying conditions. Authored SRS, SDS, and test protocols ensuring ISO 11608 and ISO 13485 compliance.",
    technologies: ["Python", "BLE", "UART", "ISO 11608", "ISO 13485", "IQ/OQ/PQ"],
    achievements: [
      "Complete V&V test automation for injection parameters",
      "ISO 11608 and ISO 13485 compliance documentation",
      "Motor stall detection and force validation systems",
    ],
    image: "/images/projects/project1.jpg",
  },
  {
    id: 2,
    title: "Molly cCap – BLE-Enabled Autoinjector Cap",
    category: "Hardware/Software",
    description: "Designed a BLE-triggered test fixture for validating broadcast timing and payload accuracy. Created low-cost circuit solutions and automated validation software for production verification.",
    technologies: ["BLE", "Python Automation", "Embedded Systems", "CATS"],
    achievements: [
      "Automated BLE broadcast validation system",
      "Low-cost production test fixture design",
      "Payload accuracy and timing verification protocols",
    ],
    image: "/images/projects/project2.jpg",
  },
  {
    id: 3,
    title: "SmartHub – Wireless Medical Data Collector",
    category: "AI Systems",
    description: "Led system-level definition, verification, and risk management for a BLE-to-cloud device platform supporting patient adherence tracking. Authored complete SRS, SDS, and validation documentation.",
    technologies: ["BLE", "Cloud Sync", "System Integration", "SysML", "ISO 14971"],
    achievements: [
      "Complete MBSE-based system architecture",
      "BLE-to-cloud data synchronization platform",
      "ISO 14971 risk management and traceability",
    ],
    image: "/images/projects/project3.jpg",
  },
  {
    id: 4,
    title: "Noise Reduction Algorithm (Research, NTUT)",
    category: "Regulatory Design",
    description: "Co-developed a Non-Negative Matrix Factorization–based algorithm for singing voice separation. Presented at ICSS&E 2022; awarded Taipei Tech International Student Scholarship.",
    technologies: ["Python", "Signal Processing", "NMF", "RPCA", "REPet"],
    achievements: [
      "Published at ICSS&E 2022 conference",
      "Awarded Taipei Tech International Student Scholarship",
      "Advanced NMF-based audio separation algorithm",
    ],
    image: "/images/projects/project4.jpg",
  },
];

export const SKILLS = {
  categories: [
    {
      name: "Systems Engineering",
      skills: [
        { name: "Requirements Definition & Traceability", level: 92 },
        { name: "Model-Based Systems Engineering (MBSE)", level: 88 },
        { name: "SysML / UML", level: 85 },
        { name: "DFMEA / Risk Assessment", level: 90 },
      ],
    },
    {
      name: "Test Development & Automation",
      skills: [
        { name: "Python-based CATS (Computer-Aided Test Systems)", level: 95 },
        { name: "IQ/OQ/PQ, TMV, Gage R&R", level: 90 },
        { name: "Custom Test Jigs & Fixtures", level: 88 },
        { name: "Data Acquisition & Signal Validation", level: 92 },
      ],
    },
    {
      name: "Regulatory Standards",
      skills: [
        { name: "ISO 13485", level: 93 },
        { name: "ISO 14971", level: 90 },
        { name: "ISO 11608", level: 88 },
        { name: "IEC 60601 / IEC 62304", level: 85 },
      ],
    },
    {
      name: "Programming & Tools",
      skills: [
        { name: "Python (Pyserial, Pyshark, BLEAK)", level: 95 },
        { name: "C++, JavaScript", level: 80 },
        { name: "Minitab, MATLAB, Wireshark", level: 85 },
        { name: "Polarion, Teamcenter, Git, Docker", level: 82 },
      ],
    },
    {
      name: "Modeling & Design",
      skills: [
        { name: "Enterprise Architect, CATIA Cameo", level: 88 },
        { name: "Requirements Traceability Tools", level: 90 },
        { name: "System Simulation & DOE", level: 85 },
        { name: "Design Transfer & Validation", level: 92 },
      ],
    },
  ],
};

export const PUBLICATIONS = [
  {
    id: 1,
    type: "paper",
    title: "Non-Negative Matrix Factorization-Based Algorithm for Singing Voice Separation",
    conference: "International Conference on System Science and Engineering (ICSS&E)",
    date: "2022",
    description: "Co-developed an advanced NMF-based algorithm for audio source separation using RPCA and REPet techniques. Awarded Taipei Tech International Student Scholarship for research excellence.",
    link: "#",
  },
];

export const CERTIFICATIONS = [
  {
    name: "Master of Science in Electrical Engineering",
    issuer: "National Taiwan University of Technology (NTUT)",
    year: "2021-2023",
  },
  {
    name: "Bachelor of Technology in Electrical Engineering",
    issuer: "Indian Institute of Technology, Ropar (IIT Ropar)",
    year: "2016-2020",
  },
];

export const NAVIGATION_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Publications", href: "#publications" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "#contact" },
];
