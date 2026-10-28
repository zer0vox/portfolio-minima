export const profile = {
  firstName: "SUMIP",
  lastName: "CHAUDHARY",
  initial: "S",
  tagline: "Building mindful systems.",
  role: "Full-Stack Web Developer · React · Node.js · REST APIs · Blockchain",
  about:
    "I build production-grade web applications end to end, from intuitive interfaces to solid back-end APIs. I have a B.E. in Electronics, Communication & Information Engineering, and my recent work includes an AI-powered e-learning platform and a blockchain-based product authentication system. I care about clean code, performance and user-centric design.",
  location: "Kathmandu, Nepal",
  email: "sumip780@gmail.com",
  github: "https://github.com/zer0vox",
  githubLabel: "github.com/zer0vox",
};

export type Project = {
  title: string;
  at?: string;
  points: string[];
  stack: string[];
  link?: { href: string; label: string };
};

export const projects: Project[] = [
  {
    title: "E-Sikshya",
    at: "Intelligent E-Learning Platform",
    points: [
      "Full-stack, AI-powered learning platform with intelligent Q&A and automatic text summarization using Google PaLM.",
      "Offline-capable retrieval-augmented system using FAISS vector search over CSV-based datasets.",
      "Accessible React.js front end, backed by RESTful Node.js/Express.js services for sessions, content delivery and AI requests.",
    ],
    stack: ["React.js", "Node.js", "Google PaLM", "Python", "FAISS", "Hugging Face"],
  },
  {
    title: "Blockchain Product Authentication",
    at: "dApp",
    points: [
      "Decentralized application that verifies FMCG product authenticity to combat counterfeiting.",
      "Ethereum smart contracts in Solidity for product lifecycle tracking and ownership management.",
      "React.js front end with Web3.js / MetaMask, plus a Node.js backend that bridges on-chain and off-chain data over REST.",
    ],
    stack: ["React.js", "Node.js", "Solidity", "Web3.js", "Ganache", "MetaMask"],
  },
  {
    title: "KaskoIsP",
    at: "ISP Comparison Platform for Nepal",
    points: [
      "Production-ready web app for comparing Internet Service Providers across Nepal.",
      "Fast, responsive React.js front end with a strong focus on UX and accessibility.",
      "REST API backend that aggregates, normalizes and serves ISP data with efficient queries.",
    ],
    stack: ["React.js", "Node.js", "REST API"],
    link: { href: "https://github.com/zer0vox/KaskoIsP", label: "View on GitHub" },
  },
  {
    title: "Coffee Vending Machine",
    at: "FSM Simulation",
    points: [
      "Designed and simulated a finite state machine for vending logic that handles multiple cash denominations, change return and dispensing.",
    ],
    stack: ["Verilog", "Xilinx ISE", "FSM Design"],
  },
];

export type Experience = {
  title: string;
  at: string;
  when: string;
  where: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    title: "Frontend Design Intern",
    at: "NepBud InfoTech Pvt. Ltd.",
    when: "Nov 2025 – Jan 2026",
    where: "Jwagal, Lalitpur, Nepal",
    points: [
      "Built modular, reusable React components and shipped them into production projects with React.js, Vite, JavaScript and HTML/CSS.",
      "Implemented responsive UI/UX with cross-browser compatibility and a consistent experience across devices.",
      "Optimized performance using Vite's build tooling; collaborated through Git/GitHub code reviews.",
    ],
  },
  {
    title: "Engineering Intern",
    at: "Civil Aviation Authority of Nepal",
    when: "Jan 2025 – Mar 2025",
    where: "Kathmandu, Nepal",
    points: [
      "Assisted with maintenance and operational oversight of wireless communication systems in live aviation environments.",
      "Worked with VHF communication systems and aviation communication protocols.",
      "Supported senior engineers with system checks, equipment testing and technical documentation.",
    ],
  },
];

export const skills: { label: string; value: string }[] = [
  { label: "Frontend", value: "React.js, HTML5, CSS3, JavaScript (ES6+), Figma, Adobe Photoshop / Illustrator" },
  { label: "Backend", value: "Node.js, Express.js, REST API development, Python" },
  { label: "Databases", value: "MongoDB, MySQL" },
  { label: "Blockchain", value: "Solidity, Web3.js, Ethereum, Ganache, MetaMask" },
  { label: "AI / ML", value: "Google PaLM, Hugging Face, FAISS, chatbot development" },
  { label: "Languages", value: "C++, C, MATLAB, VHDL" },
  { label: "Tools", value: "Git, GitHub, VS Code, Postman, Proteus, Xilinx ISE" },
  { label: "Strengths", value: "Problem solving, team collaboration, UI/UX sense, technical documentation, system simulation, agile workflow" },
];

export const writing = [
  {
    title: "Blockchain-Driven Supply Chain Innovation for the FMCG Sector",
    when: "Dec 2025",
    sub: "Sumip Chaudhary, Ramesh Tamang, Ashok G.M. · Journal of Himalaya College of Engineering, Tribhuvan University",
    link: { href: "https://doi.org/10.3126/jhcoe.v2i1.91516", label: "doi.org/10.3126/jhcoe.v2i1.91516" },
  },
];

export const education = [
  {
    title: "B.E. Electronics, Communication & Information Engineering",
    when: "2021 – 2025",
    sub: "Himalaya College of Engineering, Tribhuvan University · Lalitpur, Nepal",
  },
  {
    title: "Registered Electronics Engineer",
    when: "2025",
    sub: "Nepal Engineering Council (10th General Registration) · Kathmandu",
  },
  {
    title: "+2 Science",
    when: "2020",
    sub: "Kathmandu Model Secondary School · Kathmandu",
  },
];

export const menuItems = [
  { label: "HOME", href: "#top" },
  { label: "ABOUT", href: "#about" },
  { label: "PROJECTS", href: "#projects" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "SKILLS", href: "#skills" },
  { label: "WRITING", href: "#writing" },
  { label: "EDUCATION", href: "#education" },
  { label: "CONTACT", href: "#contact" },
];
