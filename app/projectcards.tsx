import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";

export default function ProjectCards() {
  const projects = [
    {
      id: 1,
      round: "STAGE // 01",
      title: "INGREDIENT ANALYZER",
      subtitle: "CORE SYSTEM // FULL STACK",
      date: "JAN - MAR 2025",

      description:
        "A heavy-duty scanner tool designed to parse complex text matrices on food packets, automatically cross-referencing and isolating non-vegetarian chemical additives.",
      features: [
        "Computer Vision optical text extraction",
        "Automated dietary hazard detection",
        "NLP-powered semantic parsing engine",
        "Instant preference translation mapping",
      ],
      tech: ["Python", "Flask", "Tesseract", "TextBlob", "Tailwind"],
      githubUrl:
        "https://github.com/varsharavivenkatesh/Packet-ingredient-analyzer",
    },
    {
      id: 2,
      round: "STAGE // 02",
      title: "MOOD JOURNAL ENGINE",
      subtitle: "PERSISTENT DATABASE // MERN",
      date: "APR - JUN 2025",

      description:
        "Full-stack timeline infrastructure engineered to record and visualize emotional variance parameters over time, utilizing automated algorithmic sentiment scoring.",
      features: [
        "Secure JWT session authentication",
        "Dynamic real-time telemetry rendering",
        "Automated linguistic sentiment parsing",
        "Interactive mathematical plotting",
      ],
      tech: ["React", "Node.js", "Express", "MongoDB", "Chart.js"],
      githubUrl: "https://github.com/varsharavivenkatesh/mern-mood-journal",
    },
    {
      id: 3,
      round: "STAGE // 03",
      title: "FINALLY COOKING",
      subtitle: "EFFICIENCY ROUTING // RECIPE DISCOVERY",
      date: "MAR - MAY 2026",

      description:
        "An intelligent digital kitchen tool developed alongside NHA to optimize meal efficiency by checking existing inventory matrices and mapping them to dynamic recipes.",
      features: [
        "Dynamic inventory management system",
        "Algorithmic recipe matching logic",
        "Waste mitigation data mapping",
        "High-efficiency kitchen routing UI",
      ],
      tech: ["React", "Tailwind CSS", "Node.js", "Express"],
      githubUrl: "https://github.com/varsharavivenkatesh/Finally-Cooking",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-black py-16 px-6 md:px-8 font-mono border-t border-zinc-900">
      {/* SECTION HEADER */}
      <div className="max-w-7xl mx-auto mb-16 border-b border-zinc-900 pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <div className="inline-block bg-red-600 text-white text-[10px] font-black px-2 py-0.5 tracking-[0.2em] mb-2">
            CONSTRUCTOR ARCHIVE
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white italic">
            PROJECT GRID <span className="text-zinc-700">//</span>{" "}
            <span className="text-red-500">DEPLOYMENTS</span>
          </h2>
        </div>
        <div className="text-[11px] text-zinc-500 tracking-[0.2em]">
          TOTAL_RECORDS: <span className="text-white font-bold">03_ACTIVE</span>
        </div>
      </div>

      {/* CARDS GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="relative bg-zinc-950 border border-zinc-800 rounded-none overflow-hidden group cursor-pointer shadow-2xl flex flex-col justify-between"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            whileHover={{
              y: -5,
              borderColor: "rgb(239, 68, 68)",
              boxShadow: "0 0 30px rgba(239, 68, 68, 0.15)",
            }}
            onClick={() => window.open(project.githubUrl, "_blank")}
          >
            {/* TECHNICAL HEADER AREA */}
            <div>
              <div className="relative h-44 bg-gradient-to-br from-zinc-900 to-zinc-950 flex flex-col items-start justify-between p-6 overflow-hidden border-b border-zinc-900">
                {/* Vector Overlay Graphic */}
                {project && (
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 w-40 h-40 opacity-10 pointer-events-none mix-blend-luminosity select-none transition-transform duration-500 group-hover:scale-110"></div>
                )}

                {/* Meta Stage Code */}
                <div className="relative z-10 w-full flex justify-between items-center">
                  <p className="text-[10px] font-bold text-red-500 tracking-[0.2em]">
                    {project.round}
                  </p>
                  <span className="text-[9px] text-zinc-600 border border-zinc-800 bg-black/40 px-1.5 py-0.5">
                    SYS_ID: 0{project.id}
                  </span>
                </div>

                {/* Bold Wide Title Block */}
                <div className="relative z-10">
                  <h3 className="text-xl font-black text-white tracking-tight leading-tight uppercase group-hover:text-red-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest mt-1">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              {/* TIMING RECORD BAR */}
              <div className="bg-zinc-900/40 px-6 py-2 border-b border-zinc-900 flex justify-between items-center text-[10px]">
                <span className="text-zinc-600 tracking-wider font-bold">
                  INTERVAL TIMING
                </span>
                <p className="text-zinc-300 font-bold tracking-widest text-right">
                  {project.date}
                </p>
              </div>

              {/* PROJECT DIAGNOSTICS & DETAILS */}
              <div className="p-6 space-y-5">
                {/* Micro Description */}
                <p className="text-zinc-400 text-xs leading-relaxed">
                  {project.description}
                </p>

                {/* Features Telemetry Checklist */}
                <div>
                  <p className="text-[9px] font-black text-zinc-500 uppercase tracking-widest mb-2.5">
                    KEY CORE PARAMETERS
                  </p>
                  <ul className="space-y-1.5">
                    {project.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-xs text-zinc-300 flex items-start gap-2 font-sans tracking-wide"
                      >
                        <span className="text-red-500 font-mono font-bold shrink-0 select-none">
                          +
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* LOWER HARDWARE ARCHITECTURE ENVIRONMENT */}
            <div className="p-6 pt-0">
              <p className="text-[9px] font-black text-zinc-500 uppercase tracking-widest mb-2">
                SYSTEM ENVIRONMENT
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 bg-black text-zinc-400 text-[10px] font-mono rounded-none border border-zinc-800 uppercase tracking-wider"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* HOVER STATUS INDICATOR STRIP */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-zinc-900 overflow-hidden">
              <motion.div
                className="h-full bg-red-500"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
