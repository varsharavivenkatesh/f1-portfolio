import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
export default function DriverCard() {
  return (
    <motion.div
      className="relative w-full max-w-4xl font-mono"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.3 }}
    >
      {/* ========================================================================= */}
      {/* RED GLITCH LAYER */}
      {/* ========================================================================= */}
      <motion.div
        className="absolute top-0 left-0 w-full pointer-events-none"
        initial={{ x: 0, opacity: 0 }}
        whileInView={{
          x: [0, 25, -20, 15, -10, 8, -5, 0],
          opacity: [0, 0.9, 0.8, 0.6, 0.4, 0.2, 0.1, 0],
        }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 1.2,
          times: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1],
        }}
        style={{
          filter: "hue-rotate(320deg) saturate(3) brightness(1.3)",
          mixBlendMode: "lighten",
          zIndex: 30,
        }}
      >
        <div className="bg-black rounded-none p-6 border border-red-500">
          <div className="h-40 w-full bg-red-950/20" />
        </div>
      </motion.div>

      {/* ========================================================================= */}
      {/* CYAN GLITCH LAYER */}
      {/* ========================================================================= */}
      <motion.div
        className="absolute top-0 left-0 w-full pointer-events-none"
        initial={{ x: 0, opacity: 0 }}
        whileInView={{
          x: [0, -22, 18, -14, 10, -7, 4, 0],
          opacity: [0, 0.9, 0.8, 0.6, 0.4, 0.2, 0.1, 0],
        }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 1.2,
          times: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1],
        }}
        style={{
          filter: "hue-rotate(180deg) saturate(3) brightness(1.3)",
          mixBlendMode: "lighten",
          zIndex: 30,
        }}
      >
        <div className="bg-black rounded-none p-6 border border-cyan-500">
          <div className="h-40 w-full bg-cyan-950/20" />
        </div>
      </motion.div>

      {/* ========================================================================= */}
      {/* MAIN TELEMETRY HUD CARD */}
      {/* ========================================================================= */}
      <motion.div
        className="relative bg-black rounded-none p-6 border border-zinc-800 text-white overflow-hidden shadow-2xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4, delay: 0.8 }}
        animate={{
          boxShadow: [
            "0 0 20px rgba(239, 68, 68, 0.15)",
            "0 0 35px rgba(239, 68, 68, 0.3)",
            "0 0 20px rgba(239, 68, 68, 0.15)",
          ],
        }}
        style={{ zIndex: 40 }}
      >
        {/* Subtle decorative background telemetry grid line */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 border-l border-dashed border-zinc-900/60 pointer-events-none bg-gradient-to-r from-transparent to-zinc-950/40" />

        {/* Top Broadcast Status Bar */}
        <div className="flex justify-between items-center border-b border-zinc-800 pb-4 mb-6 text-[11px] tracking-widest text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="font-bold text-zinc-300">
              LIVE TELEMETRY // TRANS-07
            </span>
          </div>
          <div className="hidden sm:block text-zinc-500">
            SYS_STATUS: <span className="text-green-400">OPTIMAL</span>
          </div>
        </div>

        {/* Card Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10">
          {/* LEFT COLUMN: Driver Core & Identity (5 Cols) */}
          <div className="md:col-span-5 space-y-6">
            <div>
              <div className="inline-block bg-red-600 text-white text-[10px] font-black px-2 py-0.5 tracking-[0.2em] mb-2">
                PILOT INDEX
              </div>
              <div className="flex items-baseline gap-3">
                <h2 className="text-3xl font-black tracking-tighter text-white">
                  VARSHA RAVIVENKATESH
                </h2>
                <span className="text-2xl font-black text-red-500 select-none">
                  #07
                </span>
              </div>
            </div>

            {/* Tyre Strategy (Skills Layout) */}
            <div className="space-y-3">
              <p className="text-[10px] text-zinc-500 tracking-[0.15em] uppercase font-bold">
                TYRE COMPOUND ALLOCATION
              </p>

              <div className="space-y-2.5">
                {/* Soft Compound for Primary Track */}
                <div className="flex items-center gap-3 bg-zinc-950 p-2 border border-zinc-900">
                  <div className="w-7 h-7 rounded-full border-2 border-red-500 flex items-center justify-center text-xs text-red-500 font-black shrink-0 select-none bg-red-950/20">
                    S
                  </div>
                  <div>
                    <p className="text-xs text-zinc-400 font-bold tracking-wide">
                      FULL STACK ENGINEERING
                    </p>
                    <p className="text-[10px] text-zinc-600">
                      COMPOUND: OPTIMAL GRIP // PRIMARY
                    </p>
                  </div>
                </div>

                {/* Medium Compound for Secondary Track */}
                <div className="flex items-center gap-3 bg-zinc-950 p-2 border border-zinc-900">
                  <div className="w-7 h-7 rounded-full border-2 border-yellow-500 flex items-center justify-center text-xs text-yellow-500 font-black shrink-0 select-none bg-yellow-950/20">
                    M
                  </div>
                  <div>
                    <p className="text-xs text-zinc-400 font-bold tracking-wide">
                      ARTIFICIAL INTELLIGENCE
                    </p>
                    <p className="text-[10px] text-zinc-600">
                      COMPOUND: BALANCED DEPLOYMENT
                    </p>
                  </div>
                </div>

                {/* Hard Compound for Management/Strategy Track */}
                <div className="flex items-center gap-3 bg-zinc-950 p-2 border border-zinc-900">
                  <div className="w-7 h-7 rounded-full border-2 border-zinc-300 flex items-center justify-center text-xs text-zinc-300 font-black shrink-0 select-none bg-zinc-900/50">
                    H
                  </div>
                  <div>
                    <p className="text-xs text-zinc-400 font-bold tracking-wide">
                      PRODUCT MANAGEMENT
                    </p>
                    <p className="text-[10px] text-zinc-600">
                      COMPOUND: HIGH ENDURANCE SUSTAINABILITY
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Hardware & Core Specs (7 Cols) */}
          <div className="md:col-span-7 flex flex-col justify-between border-t md:border-t-0 md:border-l border-zinc-800 pt-6 md:pt-0 md:pl-8 space-y-6">
            {/* Core Chassis Specs Grid */}
            <div className="space-y-3">
              <p className="text-[10px] text-cyan-400 tracking-[0.15em] uppercase font-bold">
                CHASSIS & POWERTRAIN SPECS
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-zinc-950 p-3 border border-zinc-900">
                  <span className="text-[10px] text-zinc-500 block tracking-wider">
                    TEAM // MANUFACTURER
                  </span>
                  <span className="text-xs font-bold text-zinc-200">
                    IOWA STATE UNIVERSITY
                  </span>
                </div>
                <div className="bg-zinc-950 p-3 border border-zinc-900">
                  <span className="text-[10px] text-zinc-500 block tracking-wider">
                    CORE SYSTEM ARCH
                  </span>
                  <span className="text-xs font-bold text-zinc-200">
                    COMPUTER SCIENCE
                  </span>
                </div>
                <div className="bg-zinc-950 p-3 border border-zinc-900">
                  <span className="text-[10px] text-zinc-500 block tracking-wider">
                    CONSTRUCTOR RATING
                  </span>
                  <span className="text-xs font-bold text-zinc-200">
                    HONORS PROGRAM
                  </span>
                </div>
                <div className="bg-zinc-950 p-3 border border-zinc-900">
                  <span className="text-[10px] text-zinc-500 block tracking-wider">
                    CURRENT SEASON TIER
                  </span>
                  <span className="text-xs font-bold text-zinc-200">
                    JUNIOR GRID
                  </span>
                </div>
              </div>
            </div>

            {/* ERS Energy Efficiency Progress Display */}
            <div className="space-y-2 bg-zinc-950/60 p-3 border border-zinc-900/80">
              <div className="flex justify-between items-end">
                <div>
                  <span className="text-[10px] text-zinc-500 block tracking-wider">
                    ERS ENERGY EFFICIENCY
                  </span>
                  <span className="text-xs font-bold text-zinc-300">
                    CUMULATIVE PERFORMANCE INDEX
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-cyan-400 font-black text-sm tracking-wide">
                    3.98 / 4.00
                  </span>
                </div>
              </div>

              {/* Telemetry Progress Bar */}
              <div className="relative w-full h-2 bg-zinc-900 rounded-none overflow-hidden border border-zinc-800">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-500 to-cyan-400"
                  initial={{ width: 0 }}
                  whileInView={{ width: "99%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 1.2 }}
                />
              </div>
              <div className="flex justify-between text-[8px] text-zinc-600 tracking-widest font-mono">
                <span>0.00 RECOVERY</span>
                <span>HARVESTING MAX_EFFICIENCY</span>
              </div>
            </div>

            {/* Bottom Sector Flags Decor */}
            <div className="flex justify-between items-center text-[10px] text-zinc-500 pt-2 border-t border-zinc-900">
              <div className="flex gap-4">
                <span>
                  S1: <span className="text-purple-400 font-bold">PURPLE</span>
                </span>
                <span>
                  S2: <span className="text-purple-400 font-bold">PURPLE</span>
                </span>
                <span>
                  S3: <span className="text-green-400 font-bold">GREEN</span>
                </span>
              </div>
              <span className="text-[9px] text-zinc-600 bg-zinc-950 px-1.5 py-0.5 border border-zinc-900">
                MD_VER: 2026.05
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
