"use client";

import { motion, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { Code2, MonitorPlay, Zap } from "lucide-react";
import profileData from "@/data/profile.json";
import { SectionHeading } from "./ui/SectionHeading";
import { SectionDivider } from "./ui/SectionDivider";

/* ─── Count-up hook ──────────────────────────────────────────── */
function useCountUp(target: number, duration = 1200) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return { value, ref };
}

/* ─── Stat card ─────────────────────────────────────────────── */
function StatCard({
  value,
  suffix = "+",
  label,
  color,
  delay = 0,
}: {
  value: number;
  suffix?: string;
  label: string;
  color: string;
  delay?: number;
}) {
  const { value: count, ref } = useCountUp(value);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className="glass rounded-2xl p-6 flex flex-col justify-center items-center text-center"
    >
      <span
        className="text-4xl font-black leading-none mb-2"
        style={{
          background: `linear-gradient(135deg, ${color}, ${color}99)`,
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {count}
        {suffix}
      </span>
      <span className="text-xs text-slate-400 font-medium">{label}</span>
    </motion.div>
  );
}

/* ─── Highlight card ─────────────────────────────────────────── */
const icons = [Code2, MonitorPlay, Zap];
const accents = [
  { bg: "rgba(99,102,241,0.10)", border: "rgba(99,102,241,0.25)", text: "#818cf8", bar: "#6366f1" },
  { bg: "rgba(139,92,246,0.10)", border: "rgba(139,92,246,0.25)", text: "#a78bfa", bar: "#8b5cf6" },
  { bg: "rgba(6,182,212,0.10)", border: "rgba(6,182,212,0.25)", text: "#67e8f9", bar: "#06b6d4" },
];

/* ─── About ──────────────────────────────────────────────────── */
export default function About() {
  const highlights = profileData.about.highlights.map((h, i) => ({
    icon: icons[i % icons.length],
    title: h.title,
    description: h.description,
    accent: accents[i % accents.length],
  }));

  return (
    <section id="about" className="relative">
      <SectionDivider />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
        <SectionHeading
          title="About Me"
          subtitle="A brief look into my background, what drives me, and how I approach my work."
          chip="Introduction"
        />

        {/* ── Bento grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 auto-rows-auto">

          {/* Bio card — spans 2 cols on md+ */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-2 glass rounded-2xl p-8 relative overflow-hidden"
          >
            {/* Subtle background glow */}
            <div
              className="absolute -top-20 -left-20 w-64 h-64 rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
              }}
            />
            <div className="relative space-y-4">
              {profileData.about.paragraphs.map((p, i) => (
                <p key={i} className="text-slate-300 leading-relaxed text-base">
                  {p}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Stat cards — stacked in 3rd col on xl, 2-wide row on md */}
          <div className="grid grid-cols-1 gap-4">
            <StatCard value={2} suffix="+" label="Years Exp." color="#818cf8" delay={0.1} />
            <StatCard
              value={profileData.projects.length}
              suffix="+"
              label="Projects Built"
              color="#67e8f9"
              delay={0.2}
            />
          </div>

          {/* Highlight cards — 3-column row */}
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass rounded-2xl p-6 relative overflow-hidden transition-all duration-300 cursor-default group"
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = item.accent.border)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)")
              }
            >
              {/* Top gradient line */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
                style={{ background: `linear-gradient(90deg, ${item.accent.bar}, transparent)` }}
              />

              <div
                className="inline-flex p-3 rounded-xl mb-4"
                style={{ background: item.accent.bg, border: `1px solid ${item.accent.border}` }}
              >
                <item.icon size={20} style={{ color: item.accent.text }} />
              </div>

              <h3 className="text-sm font-bold text-white mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
