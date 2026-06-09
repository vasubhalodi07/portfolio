"use client";

import { motion } from "motion/react";
import profileData from "@/data/profile.json";
import { SectionHeading } from "./ui/SectionHeading";
import { SectionDivider } from "./ui/SectionDivider";
import { MapPin, Calendar } from "lucide-react";

const experienceData = profileData.experience;

const palette = [
  { accent: "#6366f1", glow: "rgba(99,102,241,0.20)", muted: "rgba(99,102,241,0.10)" },
  { accent: "#8b5cf6", glow: "rgba(139,92,246,0.20)", muted: "rgba(139,92,246,0.10)" },
  { accent: "#06b6d4", glow: "rgba(6,182,212,0.20)", muted: "rgba(6,182,212,0.10)" },
  { accent: "#818cf8", glow: "rgba(129,140,248,0.20)", muted: "rgba(129,140,248,0.10)" },
];

export default function Experience() {
  return (
    <section id="experience" className="relative">
      <SectionDivider />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 relative z-10">
        <SectionHeading
          title="Experience"
          subtitle="A history of my professional roles, responsibilities, and key accomplishments."
          chip="Career Journey"
        />

        <div className="space-y-6">
          {experienceData.map((exp, index) => {
            const { accent, glow, muted } = palette[index % palette.length];
            const num = String(index + 1).padStart(2, "0");

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.75, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative glass rounded-2xl overflow-hidden transition-all duration-300"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${accent}40`;
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = `0 20px 60px rgba(0,0,0,0.3), 0 0 30px ${glow}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                {/* Left accent bar */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl"
                  style={{ background: `linear-gradient(to bottom, ${accent}, ${accent}40)` }}
                />

                {/* Large background number */}
                <div
                  className="absolute right-6 top-1/2 -translate-y-1/2 font-black select-none pointer-events-none leading-none"
                  style={{
                    fontSize: "clamp(60px, 8vw, 96px)",
                    color: "rgba(255,255,255,0.025)",
                    letterSpacing: "-0.05em",
                  }}
                >
                  {num}
                </div>

                <div className="pl-5 sm:pl-8 pr-4 sm:pr-6 md:pr-10 py-6 md:py-8 relative z-10">
                  {/* Header row */}
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                    <div className="flex-1">
                      {/* Step indicator */}
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className="text-[10px] font-bold px-2.5 py-1 rounded-full"
                          style={{ background: muted, color: accent }}
                        >
                          {num}
                        </span>
                        <div
                          className="h-px flex-1 max-w-[40px]"
                          style={{ background: `${accent}40` }}
                        />
                      </div>

                      <h3 className="text-lg font-bold text-white leading-snug mb-1">{exp.title}</h3>
                      <p className="text-sm font-semibold" style={{ color: accent }}>
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex flex-row md:flex-col items-start md:items-end gap-3 flex-shrink-0">
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 glass px-3 py-1.5 rounded-full">
                        <Calendar size={11} style={{ color: accent }} />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-slate-400">
                        <MapPin size={11} style={{ color: accent }} />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  {Array.isArray(exp.description) ? (
                    <ul className="grid md:grid-cols-2 gap-x-6 gap-y-2.5">
                      {exp.description.map((point, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-slate-400 text-sm leading-relaxed">
                          <div
                            className="w-1.5 h-1.5 rounded-full mt-[7px] flex-shrink-0"
                            style={{ background: accent }}
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-slate-400 text-sm leading-relaxed">{exp.description}</p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
