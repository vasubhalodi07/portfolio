"use client";

import { motion } from "motion/react";

export function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none" style={{ background: "#020209" }}>
      {/* Indigo orb — top left */}
      <motion.div
        animate={{ x: [0, 60, -30, 0], y: [0, -40, 60, 0], scale: [1, 1.1, 0.95, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(99,102,241,0.03) 50%, transparent 70%)",
          willChange: "transform",
        }}
      />

      {/* Violet orb — center right */}
      <motion.div
        animate={{ x: [0, -80, 40, 0], y: [0, 60, -40, 0], scale: [1, 0.9, 1.1, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-[30%] -right-[15%] w-[55%] h-[55%] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, rgba(139,92,246,0.03) 50%, transparent 70%)",
          willChange: "transform",
        }}
      />

      {/* Cyan orb — bottom */}
      <motion.div
        animate={{ x: [0, 50, -60, 0], y: [0, -30, 40, 0], scale: [1, 1.15, 0.9, 1] }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-[20%] left-[20%] w-[50%] h-[50%] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(6,182,212,0.10) 0%, rgba(6,182,212,0.02) 50%, transparent 70%)",
          willChange: "transform",
        }}
      />

      {/* Grid lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Dot matrix */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />
    </div>
  );
}
