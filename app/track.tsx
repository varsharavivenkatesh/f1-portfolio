"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Track() {
  const [activeId, setActiveId] = useState<number>(5); // Default to the newest active experience

  const experiences = [
    {
      id: 1,
      title: "Undergraduate Research Assistant",
      company: "Iowa State University",
      duration: "Jan 2025 - May 2025",
      type: "Part-time",
      location: "Ames, Iowa · On-site",
      sector: "SECTOR_01",
      status: "COMPLETED",
      description: [
        "Developed and implemented AI models using popular machine learning frameworks (e.g., TensorFlow, PyTorch)",
        "Regularly attended and participated in research group meetings, presenting progress, challenges, and findings",
        "Wrote a research report summarizing the objectives, methods, results, and conclusions of the project",
      ],
      logo: "/isu.png",
      labelCoords: { x: 580, y: 125 },
    },
    {
      id: 2,
      title: "Data Research Analyst Intern",
      company: "Kingland",
      duration: "Jan 2025 - May 2025",
      type: "Part-time",
      location: "On-site",
      sector: "SECTOR_02",
      status: "COMPLETED",
      description: [
        "Researched and entered data on corporations and investment vehicles, ensuring accuracy and validation",
        "Improved data quality through ongoing clean-up of new and existing datasets",
        "Maintained data standards and contributed to process automation and efficiency improvements",
      ],
      logo: "/kingland.png",
      labelCoords: { x: 860, y: 470 },
    },
    {
      id: 3,
      title: "Software Engineering Intern",
      company: "DataMavenz",
      duration: "June 2025 - July 2025",
      type: "Full-time",
      location: "On-site",
      sector: "SECTOR_03",
      status: "COMPLETED",
      description: [
        "Designed and deployed a mobile-responsive website using HTML, CSS, Tailwind, and JavaScript, hosted on Firebase for scalable and reliable access",
        "Developed an AI-powered virtual assistant to enhance user experience by enabling website navigation, email automation, and real-time responses to company inquiries",
      ],
      logo: "/datamavenz_logo.jpg",
      labelCoords: { x: 500, y: 585 },
    },
    {
      id: 4,
      title: "National Research Trainee",
      company: "Dependable Data Driven Discovery NRT (D4)",
      duration: "August 2025 - April 2026",
      type: "Part-time",
      location: "On-site",
      sector: "SECTOR_04",
      status: "COMPLETED",
      description: [
        "Selected for a competitive interdisciplinary AI research traineeship focused on improving trustworthiness in data science lifecycles",
        "Researching mitigating bias and uncertainty in machine learning models using techniques from statistics, ethics, and model evaluation",
      ],
      logo: "/d4.jpg",
      labelCoords: { x: 235, y: 440 },
    },
    {
      id: 5,
      title: "Software Engineering Intern",
      company: "Buildertrend",
      duration: "May 2026 - Aug. 2026",
      type: "Full-time",
      location: "Omaha, NE · On-site",
      sector: "SECTOR_05",
      status: "LIVE_INTERVAL",
      description: [
        "Developing full-stack features using C#, .NET, React, and SQL within an Agile development environment",
        "Participating in sprint planning, daily standups, and retrospectives to deliver iterative software improvements on a live product",
        "Resolving bugs and support tickets by diagnosing root causes across the frontend and backend layers of the application",
        "Collaborating with cross-functional engineering teams to implement, review, and test new functionality in a production codebase",
      ],
      logo: "/buildertrend.png",
      labelCoords: { x: 155, y: 220 },
    },
  ];

  const currentExp =
    experiences.find((e) => e.id === activeId) || experiences[0];

  return (
    <div className="w-full min-h-screen bg-black text-white font-mono p-6 md:p-12 border-t border-zinc-900">
      {/* HEADER FEED */}
      <div className="max-w-7xl mx-auto mb-12 border-b border-zinc-900 pb-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <div className="inline-block bg-red-600 text-white text-[10px] font-black px-2 py-0.5 tracking-[0.2em] mb-2">
            PILOT TELEMETRY
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter italic uppercase">
            CAREER CIRCUIT <span className="text-zinc-700">//</span>{" "}
            <span className="text-red-500">TRACK LOGS</span>
          </h2>
        </div>
        <div className="text-[11px] text-zinc-500 tracking-widest uppercase">
          SYSTEM_STATUS:{" "}
          <span className="text-green-400 animate-pulse font-bold">ONLINE</span>
        </div>
      </div>

      {/* CORE MULTI-COLUMN DATA MATRIX */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* LEFT COLUMN: HIGH-ACCURACY INLINE VECTOR CIRCUIT */}
        <div className="lg:col-span-5 bg-zinc-950 border border-zinc-900 p-6 flex flex-col justify-between relative min-h-[450px] lg:min-h-0 overflow-hidden">
          <div>
            <span className="text-[10px] font-black text-zinc-500 tracking-widest uppercase">
              LIVE CIRCUIT OVERVIEW
            </span>
            <div className="text-sm text-red-500 font-black mt-1 italic tracking-tight">
              {currentExp.sector} <span className="text-zinc-700">//</span>{" "}
              {currentExp.company.toUpperCase()}
            </div>
          </div>

          {/* THE SECTOR TEXT LABEL FIX: Vector tracking path with floating typography metrics */}
          <div className="my-auto w-full flex items-center justify-center py-4">
            <svg
              viewBox="0 0 1000 650"
              className="w-full h-auto drop-shadow-[0_0_30px_rgba(239,68,68,0.04)] select-none"
            >
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* SECTION UNDERLAY: Dark Track Foundation */}
              <path
                d="M 95 180 L 890 150 C 930 150, 940 210, 910 260 L 785 410 L 755 520 L 705 570 L 675 510 L 625 560 L 595 500 L 460 415 C 440 405, 410 425, 385 450 L 350 490 L 175 490 C 145 490, 145 430, 165 395 L 165 310 C 165 290, 145 285, 115 285 L 95 280 C 75 275, 75 200, 95 180 Z"
                fill="none"
                stroke="#18181b"
                strokeWidth="18"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* SECTOR 1: ISU - Long top straight leading towards Turn 1/2 */}
              <path
                d="M 280 172 L 890 150 C 930 150, 940 210, 910 260"
                fill="none"
                stroke={activeId === 1 ? "#ef4444" : "#3f3f46"}
                strokeWidth={activeId === 1 ? "6" : "4"}
                filter={activeId === 1 ? "url(#glow)" : ""}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-all duration-300"
              />

              {/* SECTOR 2: Kingland - Drops, twists, and right corners */}
              <path
                d="M 910 260 L 785 410 L 755 520 L 705 570 L 675 510 L 625 560"
                fill="none"
                stroke={activeId === 2 ? "#3b82f6" : "#3f3f46"}
                strokeWidth={activeId === 2 ? "6" : "4"}
                filter={activeId === 2 ? "url(#glow)" : ""}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-all duration-300"
              />

              {/* SECTOR 3: DataMavenz - Bottom straight and center incline */}
              <path
                d="M 625 560 L 595 500 L 460 415 C 440 405, 410 425, 385 450 L 350 490"
                fill="none"
                stroke={activeId === 3 ? "#eab308" : "#3f3f46"}
                strokeWidth={activeId === 3 ? "6" : "4"}
                filter={activeId === 3 ? "url(#glow)" : ""}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-all duration-300"
              />

              {/* SECTOR 4: D4 - Left-side complex hairpin layout */}
              <path
                d="M 350 490 L 175 490 C 145 490, 145 430, 165 395 L 165 310"
                fill="none"
                stroke={activeId === 4 ? "#22c55e" : "#3f3f46"}
                strokeWidth={activeId === 4 ? "6" : "4"}
                filter={activeId === 4 ? "url(#glow)" : ""}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-all duration-300"
              />

              {/* SECTOR 5: Buildertrend - Final segment wrapping into main straightaway */}
              <path
                d="M 165 310 C 165 290, 145 285, 115 285 L 95 280 C 75 275, 75 200, 95 180 L 280 172"
                fill="none"
                stroke={activeId === 5 ? "#a855f7" : "#3f3f46"}
                strokeWidth={activeId === 5 ? "6" : "4"}
                filter={activeId === 5 ? "url(#glow)" : ""}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-all duration-300"
              />

              {/* DYNAMIC METRIC TYPOGRAPHY OVERLAYS */}
              {experiences.map((exp) => {
                const isSelected = exp.id === activeId;
                const sectorColors = {
                  1: {
                    fill: "rgba(239, 68, 68, 0.15)",
                    text: "#ef4444",
                    border: "#ef4444",
                  },
                  2: {
                    fill: "rgba(59, 130, 246, 0.15)",
                    text: "#3b82f6",
                    border: "#3b82f6",
                  },
                  3: {
                    fill: "rgba(234, 179, 8, 0.15)",
                    text: "#eab308",
                    border: "#eab308",
                  },
                  4: {
                    fill: "rgba(34, 197, 94, 0.15)",
                    text: "#22c55e",
                    border: "#22c55e",
                  },
                  5: {
                    fill: "rgba(168, 85, 247, 0.15)",
                    text: "#a855f7",
                    border: "#a855f7",
                  },
                }[exp.id as 1 | 2 | 3 | 4 | 5];

                return (
                  <g
                    key={exp.id}
                    className="cursor-pointer transition-all duration-200"
                    onClick={() => setActiveId(exp.id)}
                    opacity={isSelected ? 1 : 0.4}
                  >
                    {/* Interactive Box Wrapper */}
                    <rect
                      x={exp.labelCoords.x - 70}
                      y={exp.labelCoords.y - 20}
                      width="140"
                      height="38"
                      fill={isSelected ? sectorColors.fill : "#09090b"}
                      stroke={isSelected ? sectorColors.border : "#27272a"}
                      strokeWidth={isSelected ? "1.5" : "1"}
                      rx="2"
                    />

                    {/* Sector Index Subtitle */}
                    <text
                      x={exp.labelCoords.x}
                      y={exp.labelCoords.y - 6}
                      textAnchor="middle"
                      fill={isSelected ? sectorColors.text : "#71717a"}
                      fontSize="9"
                      fontWeight="bold"
                      letterSpacing="0.1em"
                    >
                      {exp.sector}
                    </text>

                    {/* Company Abbreviation Identifier Text */}
                    <text
                      x={exp.labelCoords.x}
                      y={exp.labelCoords.y + 11}
                      textAnchor="middle"
                      fill="#ffffff"
                      fontSize="10"
                      fontWeight="900"
                      letterSpacing="0.05em"
                    >
                      {exp.company.split(" ")[0].toUpperCase()}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          <div className="border-t border-zinc-900 pt-4 flex justify-between text-[10px] text-zinc-600 tracking-wide font-bold">
            <span>MAP_REF_MODE: VECTOR_SECTOR_LIT</span>
            <span>GRID_SCALE: 1000x650_VBOX</span>
          </div>
        </div>

        {/* MIDDLE COLUMN: STAGE LOG SELECTOR TIMELINE */}
        <div className="lg:col-span-3 flex flex-col gap-3">
          <span className="text-[10px] font-black text-zinc-500 tracking-widest uppercase px-1">
            CIRCUIT MILESTONES
          </span>
          <div className="flex flex-col gap-2.5 h-full">
            {experiences.map((exp) => {
              const isSelected = exp.id === activeId;
              return (
                <button
                  key={exp.id}
                  onClick={() => setActiveId(exp.id)}
                  className={`w-full text-left p-4 rounded-none border transition-all relative overflow-hidden flex flex-col justify-between h-full ${
                    isSelected
                      ? "bg-zinc-900/90 border-zinc-700 shadow-[0_0_15px_rgba(239,68,68,0.05)]"
                      : "bg-zinc-950 border-zinc-900 hover:border-zinc-800"
                  }`}
                >
                  {isSelected && (
                    <div
                      className={`absolute left-0 top-0 bottom-0 w-1 ${
                        exp.id === 1
                          ? "bg-red-500"
                          : exp.id === 2
                            ? "bg-blue-500"
                            : exp.id === 3
                              ? "bg-yellow-500"
                              : exp.id === 4
                                ? "bg-green-500"
                                : "bg-purple-500"
                      }`}
                    />
                  )}

                  <div className="flex justify-between items-start w-full gap-2 mb-2">
                    <span
                      className={`text-[9px] font-bold px-1.5 py-0.5 tracking-wider ${
                        exp.status === "LIVE_INTERVAL"
                          ? "bg-purple-900/40 text-purple-400"
                          : "bg-zinc-900 text-zinc-400"
                      }`}
                    >
                      {exp.sector}
                    </span>
                    <span className="text-[9px] text-zinc-600 font-bold">
                      {exp.duration.split(" ").slice(-1)}
                    </span>
                  </div>

                  <div>
                    <h4
                      className={`text-sm font-black truncate uppercase tracking-tight ${isSelected ? "text-white" : "text-zinc-400"}`}
                    >
                      {exp.company}
                    </h4>
                    <p className="text-[10px] text-zinc-500 truncate mt-0.5 font-bold">
                      {exp.title}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* RIGHT COLUMN: DETAILED CHRONICLE / INTERN DIAGNOSTICS DISPLAY */}
        <div className="lg:col-span-4 bg-zinc-950 border border-zinc-900 p-6 flex flex-col justify-between relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.2 }}
              className="space-y-6 flex-1 flex flex-col justify-between"
            >
              <div>
                {/* Header Profile Info */}
                <div className="flex items-center gap-3 border-b border-zinc-900 pb-4 mb-4">
                  <div className="w-10 h-10 rounded-none bg-white relative overflow-hidden shrink-0 border border-zinc-800">
                    <Image
                      src={currentExp.logo}
                      alt={currentExp.company}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-black tracking-tight leading-tight uppercase text-white truncate">
                      {currentExp.title}
                    </h3>
                    <p className="text-cyan-400 text-xs font-bold tracking-wider uppercase mt-0.5">
                      {currentExp.company}
                    </p>
                  </div>
                </div>

                {/* Sub Metadata Strip */}
                <div className="text-[10px] text-zinc-400 space-y-1 bg-zinc-900/30 p-2.5 border border-zinc-900 mb-4 tracking-wide font-bold">
                  <div>
                    <span className="text-zinc-600">INTERVAL:</span>{" "}
                    {currentExp.duration.toUpperCase()} //{" "}
                    {currentExp.type.toUpperCase()}
                  </div>
                  <div>
                    <span className="text-zinc-600">LOCATION:</span>{" "}
                    {currentExp.location.toUpperCase()}
                  </div>
                  <div>
                    <span className="text-zinc-600">STG_STATE:</span>{" "}
                    <span
                      className={
                        currentExp.status === "LIVE_INTERVAL"
                          ? "text-purple-400 font-bold animate-pulse"
                          : "text-zinc-400"
                      }
                    >
                      {currentExp.status}
                    </span>
                  </div>
                </div>

                {/* Chronicle Log Points */}
                <div className="space-y-3">
                  <p className="text-[9px] font-black text-zinc-500 uppercase tracking-widest">
                    DEBRIS / CHRONICLE LOGS:
                  </p>
                  <div className="space-y-2.5 max-h-64 overflow-y-auto pr-1">
                    {currentExp.description.map((item, idx) => (
                      <div
                        key={idx}
                        className="text-xs text-zinc-300 flex items-start gap-2.5 leading-relaxed font-sans"
                      >
                        <span className="text-zinc-600 shrink-0 font-mono font-bold text-xs select-none">
                          ›
                        </span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Stream */}
              <div className="pt-4 border-t border-zinc-900 mt-6 flex justify-between items-center text-[10px] text-zinc-600 font-bold">
                <span>FILE_STREAM: VERIFIED</span>
                <span className="text-zinc-400 text-right">
                  SEC_DATA_LOADED // 100%
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
