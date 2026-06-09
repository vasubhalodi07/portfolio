"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight, Github, Linkedin, Mail, GitBranch } from "lucide-react";
import Link from "next/link";
import profileData from "@/data/profile.json";
import { Button } from "./ui/Button";

/* ─── Constants ─────────────────────────────────────────────── */
const TECH_CYCLE = ["React.js", "Vue.js", "Node.js", "Docker", "GraphQL", "AWS"];

/* ─── VS Code editor lines ───────────────────────────────────── */
type Part = { text: string; color: string };
type EditorLine = { parts: Part[]; delay: number };

const LINES: EditorLine[] = [
  { delay: 350,  parts: [{ text: "// Vasu Bhalodi — Full Stack Dev", color: "#4b5563" }] },
  { delay: 0,    parts: [] },
  { delay: 700,  parts: [{ text: "import ", color: "#c678dd" }, { text: "{ motion } ", color: "#abb2bf" }, { text: "from ", color: "#c678dd" }, { text: '"motion/react"', color: "#98c379" }] },
  { delay: 1000, parts: [{ text: "import ", color: "#c678dd" }, { text: "Hero ", color: "#61dafb" }, { text: "from ", color: "#c678dd" }, { text: '"./Hero"', color: "#98c379" }] },
  { delay: 1250, parts: [{ text: "import ", color: "#c678dd" }, { text: "About ", color: "#61dafb" }, { text: "from ", color: "#c678dd" }, { text: '"./About"', color: "#98c379" }] },
  { delay: 1500, parts: [] },
  { delay: 1700, parts: [{ text: "export default function ", color: "#c678dd" }, { text: "Portfolio", color: "#e5c07b" }, { text: "() {", color: "#abb2bf" }] },
  { delay: 1950, parts: [{ text: "  return (", color: "#abb2bf" }] },
  { delay: 2200, parts: [{ text: "    <", color: "#e06c75" }, { text: "motion.main", color: "#61dafb" }] },
  { delay: 2450, parts: [{ text: "      initial", color: "#d19a66" }, { text: "={{ ", color: "#abb2bf" }, { text: "opacity", color: "#d19a66" }, { text: ": 0 }}", color: "#abb2bf" }] },
  { delay: 2700, parts: [{ text: "      animate", color: "#d19a66" }, { text: "={{ ", color: "#abb2bf" }, { text: "opacity", color: "#d19a66" }, { text: ": 1 }}", color: "#abb2bf" }] },
  { delay: 2900, parts: [{ text: "    >", color: "#e06c75" }] },
  { delay: 3100, parts: [{ text: "      <", color: "#e06c75" }, { text: "Hero ", color: "#61dafb" }, { text: "/>", color: "#e06c75" }] },
  { delay: 3300, parts: [{ text: "      <", color: "#e06c75" }, { text: "About ", color: "#61dafb" }, { text: "/>", color: "#e06c75" }] },
  { delay: 3500, parts: [{ text: "    </", color: "#e06c75" }, { text: "motion.main", color: "#61dafb" }, { text: ">", color: "#e06c75" }] },
  { delay: 3700, parts: [{ text: "  )", color: "#abb2bf" }] },
  { delay: 3900, parts: [{ text: "}", color: "#abb2bf" }] },
];

/* ─── Terminal steps ─────────────────────────────────────────── */
type TermStep = { text: string; color: string; delay: number };

const TERMINAL_STEPS: TermStep[] = [
  { delay: 500,  text: "$ git push origin main",            color: "#abb2bf" },
  { delay: 1100, text: "  Pushing to github.com/vasu...",   color: "#7c8fa8" },
  { delay: 1900, text: "$ npm run build",                   color: "#abb2bf" },
  { delay: 2700, text: "  ✓  Compiled in 2.3s",            color: "#98c379" },
  { delay: 3500, text: "$ docker build -t portfolio .",     color: "#abb2bf" },
  { delay: 4400, text: "  ✓  Image built (142 MB)",         color: "#98c379" },
  { delay: 5200, text: "$ aws ecs deploy --service app",    color: "#abb2bf" },
  { delay: 6100, text: "  ✓  Deployed to AWS ECS  🚀",      color: "#67e8f9" },
];

/* ─── CI Pipeline card ───────────────────────────────────────── */
function CIPipelineCard() {
  const stages = ["Build", "Test", "Deploy"];
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % (stages.length + 2)), 1500);
    return () => clearInterval(t);
  }, []);

  const done = Math.min(active, stages.length);

  return (
    <div
      className="glass rounded-xl px-4 py-3"
      style={{
        background: "rgba(10,10,22,0.95)",
        boxShadow: "0 12px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.10)",
      }}
    >
      <div className="flex items-center gap-3">
        <GitBranch size={12} style={{ color: "#818cf8", flexShrink: 0 }} />
        <span className="text-[10px] font-mono" style={{ color: "#94a3b8" }}>main</span>
        <span className="text-[10px] font-mono" style={{ color: "#64748b" }}>a3f9c12</span>
        <span className="text-[10px] flex-1 truncate" style={{ color: "#94a3b8" }}>
          feat: portfolio redesign
        </span>

        <div className="flex items-center gap-2">
          {stages.map((s, i) => {
            const isDone    = i < done;
            const isRunning = i === done && active <= stages.length;
            return (
              <div key={s} className="flex items-center gap-1.5">
                {i > 0 && <div className="w-3 h-px" style={{ background: "rgba(255,255,255,0.12)" }} />}
                <div className="flex items-center gap-1">
                  <motion.div
                    animate={isRunning ? { scale: [1, 1.4, 1] } : {}}
                    transition={{ duration: 0.7, repeat: Infinity }}
                    className="w-2 h-2 rounded-full"
                    style={{
                      background:  isDone ? "#22c55e" : isRunning ? "#f59e0b" : "rgba(255,255,255,0.12)",
                      boxShadow:   isDone ? "0 0 6px rgba(34,197,94,0.5)" : isRunning ? "0 0 6px rgba(245,158,11,0.5)" : "none",
                    }}
                  />
                  <span className="text-[9px]" style={{ color: "#94a3b8" }}>{s}</span>
                </div>
              </div>
            );
          })}
          {done >= stages.length && (
            <motion.span
              initial={{ opacity: 0, x: -4 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-[10px] font-semibold ml-1"
              style={{ color: "#22d3ee" }}
            >
              ✓ Live
            </motion.span>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── Terminal card ──────────────────────────────────────────── */
function TerminalCard({ phase }: { phase: number }) {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    setShown(0);
    const timers = TERMINAL_STEPS.map((_, i) =>
      setTimeout(() => setShown(s => Math.max(s, i + 1)), TERMINAL_STEPS[i].delay)
    );
    return () => timers.forEach(clearTimeout);
  }, [phase]);

  const running = shown > 0 && shown < TERMINAL_STEPS.length;

  return (
    <div
      className="glass rounded-xl overflow-hidden"
      style={{
        background: "rgba(6,6,16,0.96)",
        boxShadow: "0 -10px 40px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.09)",
      }}
    >
      {/* Chrome */}
      <div
        className="flex items-center gap-1.5 px-4 py-2.5"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
      >
        {["#ef4444", "#f59e0b", "#22c55e"].map(c => (
          <div key={c} className="w-2.5 h-2.5 rounded-full opacity-60" style={{ background: c }} />
        ))}
        <span className="ml-2 text-[10px] font-mono" style={{ color: "#94a3b8" }}>
          zsh — deploy.sh
        </span>
        <div className="ml-auto flex items-center gap-1.5">
          <motion.div
            animate={{ opacity: running ? [1, 0.3, 1] : 1 }}
            transition={{ duration: 1.1, repeat: running ? Infinity : 0 }}
            className="w-1.5 h-1.5 rounded-full"
            style={{
              background: shown >= TERMINAL_STEPS.length ? "#22c55e" : running ? "#f59e0b" : "rgba(255,255,255,0.15)",
            }}
          />
          <span className="text-[9px]" style={{ color: "#7c8fa8" }}>
            {shown >= TERMINAL_STEPS.length ? "deployed" : running ? "running" : "idle"}
          </span>
        </div>
      </div>

      {/* Output */}
      <div className="px-4 py-3 font-mono text-[11px] leading-[1.75] min-h-[108px]">
        {TERMINAL_STEPS.slice(0, shown).map((step, i) => (
          <motion.div
            key={`${phase}-${i}`}
            initial={{ opacity: 0, x: -4 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.18 }}
            style={{ color: step.color, whiteSpace: "pre" }}
          >
            {step.text}
          </motion.div>
        ))}
        {running && (
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.65, repeat: Infinity }}
            className="inline-block w-1.5 h-3.5 rounded-sm align-middle mt-0.5"
            style={{ background: "#818cf8" }}
          />
        )}
      </div>
    </div>
  );
}

/* ─── VS Code editor card ────────────────────────────────────── */
function EditorCard() {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    const timers = LINES.map((_, i) =>
      setTimeout(() => setShown(s => Math.max(s, i + 1)), LINES[i].delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div
      className="glass rounded-2xl overflow-hidden flex flex-col"
      style={{
        boxShadow: "0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.08), 0 0 60px rgba(99,102,241,0.10)",
        minHeight: "370px",
      }}
    >
      {/* Chrome */}
      <div
        className="flex items-center flex-shrink-0"
        style={{ background: "rgba(255,255,255,0.03)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}
      >
        <div className="flex items-center gap-1.5 px-4 py-3">
          {["#ef4444", "#f59e0b", "#22c55e"].map(c => (
            <div key={c} className="w-3 h-3 rounded-full opacity-70" style={{ background: c }} />
          ))}
        </div>
        <div
          className="flex items-center gap-2 px-4 py-2.5 text-xs font-medium"
          style={{
            background: "rgba(255,255,255,0.05)",
            borderRight: "1px solid rgba(255,255,255,0.07)",
            borderLeft: "1px solid rgba(255,255,255,0.07)",
            color: "#abb2bf",
          }}
        >
          <span
            className="text-[10px] px-1.5 py-0.5 rounded font-bold"
            style={{ background: "rgba(49,116,143,0.4)", color: "#61dafb" }}
          >
            TS
          </span>
          portfolio.tsx
        </div>
      </div>

      {/* Code area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Line numbers */}
        <div
          className="flex-shrink-0 py-5 px-3 text-right select-none"
          style={{
            background: "rgba(0,0,0,0.15)",
            borderRight: "1px solid rgba(255,255,255,0.05)",
            minWidth: "44px",
          }}
        >
          {LINES.slice(0, Math.max(shown, 1)).map((_, i) => (
            <div
              key={i}
              className="font-mono text-xs leading-[1.75] h-[1.75em]"
              style={{ color: i === shown - 1 ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.15)" }}
            >
              {i + 1}
            </div>
          ))}
        </div>

        {/* Code lines */}
        <div className="flex-1 py-5 px-5 overflow-hidden">
          {LINES.slice(0, shown).map((line, i) => {
            const isCurrentLine = i === shown - 1 && shown < LINES.length;
            return (
              <div
                key={i}
                className="font-mono text-xs leading-[1.75] h-[1.75em] flex items-center"
                style={{
                  background: isCurrentLine ? "rgba(255,255,255,0.03)" : "transparent",
                  borderRadius: "3px",
                  marginLeft: "-8px",
                  paddingLeft: "8px",
                }}
              >
                {line.parts.length === 0 ? (
                  <span>&nbsp;</span>
                ) : (
                  <>
                    {line.parts.map((part, pi) => (
                      <span key={pi} style={{ color: part.color, whiteSpace: "pre" }}>
                        {part.text}
                      </span>
                    ))}
                    {isCurrentLine && (
                      <motion.span
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 0.65, repeat: Infinity }}
                        className="inline-block w-[7px] h-[13px] rounded-[2px] align-middle ml-0.5"
                        style={{ background: "#818cf8" }}
                      />
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Status bar */}
      <div
        className="flex items-center justify-between px-4 py-1.5 text-[10px] flex-shrink-0"
        style={{
          background: "rgba(99,102,241,0.25)",
          borderTop: "1px solid rgba(99,102,241,0.3)",
          color: "rgba(255,255,255,0.6)",
        }}
      >
        <span>TypeScript · Next.js 15</span>
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Ready
        </span>
      </div>
    </div>
  );
}

/* ─── Right panel ────────────────────────────────────────────── */
/*
  Layout: editor card is the anchor in normal flow.
  CI card  → absolute top:0,  half above editor top edge  (paddingTop  = ½ CI height  ≈ 24px)
  Terminal → absolute bottom:0, half below editor bottom  (paddingBottom = ½ term height ≈ 96px)
  Horizontal offset: CI left-anchored, terminal right-anchored → diagonal visual flow.
*/
function RightPanel() {
  const [termPhase, setTermPhase] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setTermPhase(p => p + 1), 8500);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      {/* Mobile / tablet — just the CI card below the text */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.7 }}
        className="lg:hidden mt-6"
      >
        <CIPipelineCard />
      </motion.div>

      {/* Desktop — full 3-card stack */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.0, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="hidden lg:block"
    >
      {/* Gentle float */}
      <motion.div
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* CI Pipeline — normal flow, clearly above editor */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4"
          style={{ paddingRight: "36px" }}
        >
          <CIPipelineCard />
        </motion.div>

        {/* Editor + Terminal share a relative context */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
          style={{ zIndex: 10 }}
        >
          <EditorCard />

          {/* Terminal — centered at bottom edge, translateY(50%) keeps it
              exactly half inside / half outside regardless of its growing height */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              transform: "translateY(50%)",
              width: "60%",
              zIndex: 20,
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <TerminalCard phase={termPhase} />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
    </>
  );
}

/* ─── Hero ───────────────────────────────────────────────────── */
const social = [
  { icon: Github,   href: profileData.personal.github,            label: "GitHub" },
  { icon: Linkedin, href: profileData.personal.linkedin,          label: "LinkedIn" },
  { icon: Mail,     href: `mailto:${profileData.personal.email}`, label: "Email" },
];

const HEADING_WORDS = [
  { text: "Building",  cls: "text-white" },
  { text: "Scalable",  cls: "text-slate-500" },
  { text: "Products.", gradient: true },
];

export default function Hero() {
  const [techIdx, setTechIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setTechIdx(i => (i + 1) % TECH_CYCLE.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: "96px", paddingBottom: "80px" }}
    >
      {/* Spotlight */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[560px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.11) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10 w-full">
        <div className="grid lg:grid-cols-[1fr_1fr] xl:grid-cols-[1fr_1.1fr] gap-8 lg:gap-10 xl:gap-16 items-center">

          {/* ── Left ── */}
          <div>
            {/* Heading */}
            <div
              className="font-black tracking-tight mb-4 leading-[1.0]"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}
            >
              {HEADING_WORDS.map((w, i) => (
                <motion.div
                  key={w.text}
                  initial={{ opacity: 0, y: 44, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.85, delay: 0.12 + i * 0.14, ease: [0.16, 1, 0.3, 1] }}
                >
                  {w.gradient ? (
                    <span className="gradient-text">{w.text}</span>
                  ) : (
                    <span className={w.cls}>{w.text}</span>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Cycling tech line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.58 }}
              className="flex items-center gap-2 mb-6 text-sm"
              style={{ color: "#64748b" }}
            >
              <span>with</span>
              <span
                className="font-mono font-semibold"
                style={{ color: "#818cf8", minWidth: "88px", display: "inline-block" }}
              >
                <motion.span
                  key={techIdx}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  style={{ display: "inline-block" }}
                >
                  {TECH_CYCLE[techIdx]}
                </motion.span>
              </span>
              <span style={{ color: "#334155" }}>&amp; more</span>
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.66 }}
              className="text-[15px] mb-7 max-w-[430px] leading-relaxed"
              style={{ color: "#94a3b8" }}
            >
              Hi, I&apos;m{" "}
              <span className="text-white font-semibold">{profileData.personal.name}</span> — a{" "}
              {profileData.personal.role} at{" "}
              <span style={{ color: "#cbd5e1" }}>{profileData.personal.company}</span> building
              high-performance web apps, scalable APIs, and cloud-deployed systems.
            </motion.p>

            {/* Stat pills */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.78 }}
              className="flex flex-wrap gap-2.5 mb-8"
            >
              {[
                { val: "2+",  label: "Yrs Exp" },
                { val: `${profileData.projects.length}+`, label: "Projects" },
                { val: "10+", label: "Technologies" },
              ].map(({ val, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl glass text-sm"
                >
                  <span className="font-black gradient-text leading-none">{val}</span>
                  <span className="text-xs" style={{ color: "#94a3b8" }}>{label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.88 }}
              className="mb-8"
            >
              <Button
                variant="gradient"
                className="group"
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View Work
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="flex items-center gap-3"
            >
              {social.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 glass rounded-xl text-slate-400 hover:text-white hover:border-indigo-500/30 transition-all duration-200 cursor-pointer"
                >
                  <Icon size={17} />
                </Link>
              ))}
              <div className="w-px h-4 bg-white/10 mx-1" />
              <span className="text-xs" style={{ color: "#64748b" }}>{profileData.personal.role}</span>
            </motion.div>
          </div>

          {/* ── Right ── */}
          <RightPanel />
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[10px]" style={{ color: "#334155" }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-7 rounded-full"
          style={{ background: "linear-gradient(to bottom, rgba(99,102,241,0.6), transparent)" }}
        />
      </motion.div>
    </section>
  );
}
