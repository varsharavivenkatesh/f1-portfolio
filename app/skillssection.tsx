import { useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { useRef } from "react";
export default function SkillsSection() {
  return (
    <section className="bg-black text-white py-16 px-6 font-mono border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        {/* F1 SECTION HEADER */}
        <div className="mb-12 border-b border-zinc-900 pb-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <div className="inline-block bg-red-600 text-white text-[10px] font-black px-2 py-0.5 tracking-[0.2em] mb-2">
              DIAGNOSTICS
            </div>
            <h2 className="text-4xl font-black tracking-tighter text-white">
              GARAGE TELEMETRY <span className="text-zinc-500">//</span>{" "}
              <span className="text-red-500">TECH STACK</span>
            </h2>
          </div>
          <div className="text-[11px] text-zinc-500 tracking-widest uppercase">
            SYS_DIAG_MODE: <span className="text-green-400">ACTIVE_SCAN</span>
          </div>
        </div>

        {/* F1 TELEMETRY METRIC GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {techStack.map((item, index) => (
            <motion.div
              key={index}
              className="relative bg-zinc-950 border border-zinc-800 p-6 rounded-none overflow-hidden group shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{
                borderColor: "rgb(239, 68, 68)",
                boxShadow: "0 0 25px rgba(239, 68, 68, 0.1)",
              }}
            >
              {/* SUBTLE CORNER ACCENTS */}
              <div className="absolute top-0 right-0 w-8 h-8 border-r border-t border-zinc-800 pointer-events-none group-hover:border-red-500" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-l border-b border-zinc-800 pointer-events-none group-hover:border-red-500" />

              {/* TELEMETRY METADATA HEADER */}
              <div className="flex justify-between items-center text-[10px] text-zinc-500 tracking-wider mb-3 pb-2 border-b border-dashed border-zinc-900">
                <span>CHANNEL_0{index + 1}</span>
                <span className="text-green-400 font-bold bg-green-950/20 px-1 border border-green-900/40">
                  {item.status}
                </span>
              </div>

              {/* CATEGORY TITLE */}
              <h3 className="text-base font-black text-white tracking-wide mb-4">
                {item.category}
              </h3>

              {/* SKILLS BADGES */}
              <div className="flex flex-wrap gap-2 mb-6">
                {item.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-zinc-900/60 border border-zinc-800 text-zinc-300 px-2.5 py-1 text-xs font-bold uppercase tracking-wide hover:bg-zinc-800 hover:text-white hover:border-zinc-700 transition-all duration-150 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* INTEGRATED VEHICLE SET-UP BALANCER BAR */}
              <div className="space-y-1.5 pt-3 border-t border-zinc-900">
                <div className="flex justify-between text-[10px] tracking-widest font-bold">
                  <span className="text-zinc-500 uppercase">
                    {item.metricName}
                  </span>
                  <span className="text-red-500">{item.metricValue}</span>
                </div>

                <div className="relative w-full h-1.5 bg-zinc-900 border border-zinc-800 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-red-600 to-red-500"
                    initial={{ width: 0 }}
                    whileInView={{
                      width: item.metricValue.includes("%")
                        ? item.metricValue
                        : "88%",
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM DEPLOYMENT HUD */}
        <div className="mt-8 bg-zinc-950 border border-zinc-900 p-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-zinc-500 tracking-widest">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-cyan-400 animate-pulse rounded-none" />
            <span>
              ALL MODULES FIRING WITHIN EXPECTED OPERATING TEMPERATURES
            </span>
          </div>
          <span className="text-zinc-700 hidden sm:inline">|</span>
          <span>SYSTEM_LIMITS // 100% RELIABILITY METRIC</span>
        </div>
      </div>
    </section>
  );
}
const techStack = [
  {
    category: " LANGUAGES",
    skills: [
      "Java",
      "Python",
      "JavaScript (ES6+)",
      "SQL",
      "HTML5/CSS3",
      "C#",
      ".NET",
    ],
    metricName: "THERMAL_EFFICIENCY",
    metricValue: "94%",
    status: "MAX_OUTPUT",
  },
  {
    category: " FRONTEND",
    skills: [
      "React.js",
      "Tailwind CSS",
      "Bootstrap",
      "Next.js",
      "React Native",
    ],
    metricName: "DOWNFORCE_COEFF",
    metricValue: "92.7",
    status: "STABLE",
  },
  {
    category: " BACKEND & DATABASE",
    skills: [
      "Node.js",
      "Express.js",
      "Flask",
      "MongoDB",
      "REST APIs",
      "Microsoft SQL Server",
    ],
    metricName: "TORQUE_TRANSFER",
    metricValue: "98.2%",
    status: "OPTIMAL",
  },
  {
    category: " TOOLS & AI",
    skills: [
      "Git & GitHub",
      "Machine Unlearning",
      "Uncertainty Quantification",
      "Random Forest Regressors",
      "Agile/Scrum",
      "Power BI",
      "Azure DevOps",
    ],
    metricName: "STRAT_PREDICTION",
    metricValue: "99.1%",
    status: "COMPUTING",
  },
];
