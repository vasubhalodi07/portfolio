"use client";

import { motion } from "motion/react";
import profileData from "@/data/profile.json";
import { SectionHeading } from "./ui/SectionHeading";
import { SectionDivider } from "./ui/SectionDivider";
import { getTechIcon } from "@/lib/icons";
import Image from "next/image";

const skillsData = profileData.skills;

const palette = [
  { bar: "#6366f1", text: "#818cf8", glow: "rgba(99,102,241,0.18)", muted: "rgba(99,102,241,0.08)" },
  { bar: "#8b5cf6", text: "#a78bfa", glow: "rgba(139,92,246,0.18)", muted: "rgba(139,92,246,0.08)" },
  { bar: "#06b6d4", text: "#67e8f9", glow: "rgba(6,182,212,0.18)", muted: "rgba(6,182,212,0.08)" },
  { bar: "#10b981", text: "#6ee7b7", glow: "rgba(16,185,129,0.18)", muted: "rgba(16,185,129,0.08)" },
  { bar: "#f59e0b", text: "#fcd34d", glow: "rgba(245,158,11,0.18)", muted: "rgba(245,158,11,0.08)" },
  { bar: "#ef4444", text: "#fca5a5", glow: "rgba(239,68,68,0.18)", muted: "rgba(239,68,68,0.08)" },
];

export default function Skills() {
  return (
    <section id="skills" className="relative">
      <SectionDivider />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
        <SectionHeading
          title="Technical Skills"
          subtitle="The frameworks, tools, and technologies I use to bring ideas to life."
          chip="My Tech Stack"
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {skillsData.map((skillGroup, gi) => {
            const { bar, text, glow, muted } = palette[gi % palette.length];
            return (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, delay: gi * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="glass rounded-2xl p-6 relative overflow-hidden transition-all duration-300"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${bar}40`;
                  e.currentTarget.style.boxShadow = `0 0 30px ${glow}`;
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)";
                  e.currentTarget.style.boxShadow = "";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
                  style={{ background: `linear-gradient(90deg, ${bar}, transparent)` }}
                />

                {/* Category header */}
                <div className="flex items-center gap-2.5 mb-5">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: muted, border: `1px solid ${bar}30` }}
                  >
                    <div className="w-2 h-2 rounded-full" style={{ background: bar }} />
                  </div>
                  <h3 className="text-sm font-bold" style={{ color: text }}>
                    {skillGroup.category}
                  </h3>
                </div>

                {/* Pills */}
                <div className="flex flex-wrap gap-2">
                  {skillGroup.technologies.map((tech, i) => {
                    const iconPath = getTechIcon(tech);
                    return (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: gi * 0.06 + i * 0.03, ease: [0.16, 1, 0.3, 1] }}
                        whileHover={{ scale: 1.07, transition: { duration: 0.15 } }}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white transition-colors duration-150 cursor-default"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.08)",
                        }}
                      >
                        {iconPath && (
                          <Image
                            src={iconPath}
                            alt={tech}
                            width={13}
                            height={13}
                            className="w-3.5 h-3.5 object-contain"
                          />
                        )}
                        {tech}
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
