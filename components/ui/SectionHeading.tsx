"use client";

import { motion } from "motion/react";
import { Chip } from "./Chip";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  chip?: string;
  centered?: boolean;
}

export function SectionHeading({ title, subtitle, chip, centered = false }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-16 ${centered ? "text-center flex flex-col items-center" : ""}`}
    >
      {chip && <Chip className={centered ? "mb-3 mx-auto" : "mb-3"}>{chip}</Chip>}
      <h2 className="text-4xl md:text-5xl font-bold mb-3 text-zinc-900 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg text-zinc-600 font-light max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
