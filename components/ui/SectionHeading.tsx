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
  const words = title.split(" ");
  const lastWord = words.pop();
  const restOfTitle = words.join(" ");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-14 ${centered ? "text-center flex flex-col items-center" : ""}`}
    >
      {chip && <Chip className={centered ? "mb-4 mx-auto" : "mb-4"}>{chip}</Chip>}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 tracking-tight text-white">
        {restOfTitle ? `${restOfTitle} ` : ""}
        <span className="gradient-text">{lastWord}</span>
      </h2>
      {subtitle && (
        <p className={`text-sm text-slate-400 max-w-xl leading-relaxed ${centered ? "mx-auto text-center" : ""}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
