"use client";

import { motion } from "motion/react";

export function Loader({ className }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center p-4 ${className || ""}`}>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="w-8 h-8 rounded-full border-4 border-zinc-400 border-t-zinc-900"
      />
    </div>
  );
}
