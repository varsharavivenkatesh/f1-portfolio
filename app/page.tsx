"use client";
import ProjectCards from "./projectcards";
import DriverCard from "./drivercard";
import Track from "./track";
import Footer from "./footer";
import EngineRPMTelemetry from "./enginerpmt";
import SkillsSection from "./skillssection";
import { useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { useRef } from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <motion.nav
        className="relative w-full h-120 overflow-hidden flex items-center justify-center"
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2.0, ease: "easeOut" }}
      >
        <img
          src="/f1-wing.png"
          alt="F1 Front Wing"
          className="w-auto h-full max-w-none"
        />
      </motion.nav>

      <div>
        <EngineRPMTelemetry />
      </div>

      <div className="flex items-center justify-center p-8">
        <DriverCard />
      </div>
      <div>
        <SkillsSection />
      </div>
      <div className="flex items-center justify-center p-8">
        <Track />
      </div>

      <div>
        <ProjectCards />
      </div>

      <Footer />
    </div>
  );
}

// You can use icons from 'react-icons' if you have it installed, e.g., import { FaReact } from 'react-icons/fa'
// For this example, we'll use clean text-based badges with nice styling.
