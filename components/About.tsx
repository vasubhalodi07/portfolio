"use client";

import { motion } from "motion/react";
import { Code2, MonitorPlay, Zap } from "lucide-react";
import profileData from "@/data/profile.json";
import { SectionHeading } from "./ui/SectionHeading";

const getIcon = (index: number) => {
  if (index === 0) return Code2;
  if (index === 1) return MonitorPlay;
  return Zap;
};

const highlights = profileData.about.highlights.map((h, i) => ({
  icon: getIcon(i),
  title: h.title,
  description: h.description,
}));

export default function About() {
  return (
    <section id="about" className="py-32 relative border-y border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="About Me"
          subtitle="A brief look into my background, what drives me, and how I approach my work."
          chip="Introduction"
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg text-zinc-600 space-y-6 leading-relaxed font-light"
          >
            {profileData.about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </motion.div>

          <div className="grid gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 rounded-3xl bg-white border border-zinc-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex gap-6 items-start group"
              >
                <div className="p-4 bg-zinc-100 text-zinc-800 rounded-2xl group-hover:bg-zinc-900 group-hover:text-white transition-colors duration-300">
                  <item.icon size={26} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-zinc-900">{item.title}</h3>
                  <p className="text-zinc-500 leading-relaxed font-light">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[150px] -z-10 translate-x-1/3 -translate-y-1/2" />
    </section>
  );
}
