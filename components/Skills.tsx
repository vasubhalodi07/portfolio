"use client";

import { motion } from "motion/react";
import profileData from "@/data/profile.json";
import { SectionHeading } from "./ui/SectionHeading";
import { SectionDivider } from "./ui/SectionDivider";

const skillsData = profileData.skills;

export default function Skills() {
  return (
    <section id="skills" className="py-16 relative">
      <SectionDivider />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16">
        <SectionHeading
          title="Technical Skills"
          subtitle="The frameworks, tools, and technologies I use to bring ideas to life."
          chip="My Tech Stack"
        />

        <div className="flex flex-col border border-zinc-200 rounded-3xl overflow-hidden bg-white shadow-sm">
          {skillsData.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col md:flex-row gap-6 p-6 md:p-8 items-start md:items-center hover:bg-zinc-50/50 transition-colors ${groupIndex !== skillsData.length - 1 ? "border-b border-zinc-200" : ""
                }`}
            >
              <div className="w-full md:w-1/3 lg:w-1/4">
                <h3 className="text-lg font-medium text-zinc-900">{skillGroup.category}</h3>
              </div>
              <div className="w-full md:w-2/3 lg:w-3/4 flex flex-wrap gap-3">
                {skillGroup.technologies.map((tech, i) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (groupIndex * 0.1) + (i * 0.05) + 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="px-4 py-2 bg-white border border-zinc-200 rounded-full text-zinc-700 text-sm font-medium hover:border-zinc-300 hover:shadow-sm transition-all cursor-default flex items-center gap-2"
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
