"use client";

import { motion } from "motion/react";

export function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-white">
      <motion.div
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -50, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-zinc-100/80 rounded-full blur-[120px]"
        style={{ willChange: "transform" }}
      />

      <motion.div
        animate={{
          x: [0, -50, 50, 0],
          y: [0, 50, -50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-zinc-200/40 rounded-full blur-[150px]"
        style={{ willChange: "transform" }}
      />

      <motion.div
        animate={{
          x: [0, 80, -80, 0],
          y: [0, 80, -80, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[30%] right-[20%] w-[30%] h-[30%] bg-zinc-100/50 rounded-full blur-[100px]"
        style={{ willChange: "transform" }}
      />

      {/* Spaced-out dot matrix pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `radial-gradient(#000 1px, transparent 1px)`,
          backgroundSize: `48px 48px`
        }}
      />
    </div>
  );
}
