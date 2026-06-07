import { useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { useRef } from "react";

export default function EngineRPMTelemetry() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentStage, setCurrentStage] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  const ledIndex = useTransform(scrollYProgress, [0, 1], [0, 15]);

  useMotionValueEvent(ledIndex, "change", (latest) => {
    setCurrentStage(Math.floor(latest));
  });

  const getLedColor = (index: number, isActive: boolean) => {
    if (!isActive) {
      if (index < 5)
        return "bg-green-950/40 border-green-900/30 text-transparent";
      if (index < 10) return "bg-red-950/40 border-red-900/30 text-transparent";
      return "bg-cyan-950/40 border-cyan-900/30 text-transparent";
    }

    if (index < 5)
      return "bg-emerald-500 border-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.8)]";
    if (index < 10)
      return "bg-red-500 border-red-300 shadow-[0_0_12px_rgba(239,68,68,0.8)]";
    return "bg-cyan-400 border-cyan-200 shadow-[0_0_12px_rgba(34,211,238,0.8)]";
  };

  const isMaxRPM = currentStage >= 15;

  return (
    <div
      ref={containerRef}
      className="w-full bg-black border-y border-zinc-900 py-12 flex flex-col items-center justify-center font-mono overflow-hidden select-none"
    >
      <div className="text-[10px] text-zinc-500 tracking-[0.4em] uppercase mb-4 flex items-center gap-4">
        <span>
          SYS.RPM // {isMaxRPM ? "13500" : `${10000 + currentStage * 220}`} MAX
        </span>
        <span className="text-zinc-700">|</span>
        <span>
          GEAR // {isMaxRPM ? "8" : Math.max(1, Math.ceil(currentStage / 2))}
        </span>
      </div>

      <div className="relative bg-zinc-950/80 px-6 py-4 rounded-none border border-zinc-900 flex items-center justify-center">
        {isMaxRPM && (
          <motion.div
            className="absolute inset-0 bg-cyan-500/10 z-10 pointer-events-none"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 0.15, ease: "linear" }}
          />
        )}

        <div className="flex gap-2">
          {[...Array(15)].map((_, i) => {
            const isActive = currentStage > i;

            return (
              <motion.div
                key={i}
                className={`w-3.5 h-6 rounded-sm border-t transition-all duration-75 ${getLedColor(i, isActive)}`}
                animate={
                  isMaxRPM
                    ? {
                        backgroundColor: ["#22d3ee", "#083344", "#22d3ee"],
                        boxShadow: [
                          "0 0 15px rgba(34,211,238,0.9)",
                          "0 0 2px rgba(34,211,238,0.1)",
                          "0 0 15px rgba(34,211,238,0.9)",
                        ],
                      }
                    : {}
                }
                transition={
                  isMaxRPM
                    ? { repeat: Infinity, duration: 0.2, ease: "linear" }
                    : {}
                }
              />
            );
          })}
        </div>
      </div>

      <div className="h-6 mt-5 flex items-center justify-center">
        {isMaxRPM ? (
          <motion.p
            className="text-cyan-400 text-xs font-black tracking-[0.3em]"
            initial={{ scale: 0.95 }}
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ repeat: Infinity, duration: 0.4 }}
          >
            ▶ DRS ENABLED // PUSH NOW ◀
          </motion.p>
        ) : (
          <p className="text-zinc-600 text-[11px] tracking-[0.25em]">
            SCROLL TO DEPLOY OVERTAKE // {Math.round((currentStage / 15) * 100)}
            %
          </p>
        )}
      </div>
    </div>
  );
}
