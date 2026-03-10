"use client";

import { motion } from "motion/react";
import profileData from "@/data/profile.json";
import { SectionHeading } from "./ui/SectionHeading";
import { SectionDivider } from "./ui/SectionDivider";

const experienceData = profileData.experience;

export default function Experience() {
  return (
    <section id="experience" className="py-16 relative">
      <SectionDivider />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 pt-16">
        <SectionHeading
          title="Experience"
          subtitle="A history of my professional roles, responsibilities, and key accomplishments."
          chip="Career Journey"
        />

        <div className="relative border-l border-zinc-200 ml-4 md:ml-0 space-y-12">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative pl-8 md:pl-12 group"
            >
              <div className="absolute top-0 left-0 -translate-x-[5px] w-2.5 h-2.5 rounded-full bg-zinc-400 group-hover:bg-zinc-900 transition-colors ring-4 ring-white" />

              <div className="bg-zinc-50 border border-zinc-100 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900">{exp.title}</h3>
                    <div className="text-zinc-900 font-semibold mb-1">{exp.company}</div>
                  </div>
                  <div className="flex flex-col md:items-end text-sm text-zinc-900">
                    <span className="font-medium bg-white text-zinc-700 font-semibold px-4 py-1.5 rounded-full shadow-sm border border-zinc-200">{exp.duration}</span>
                    <span className="mt-2 text-zinc-900 font-medium">{exp.location}</span>
                  </div>
                </div>

                {Array.isArray(exp.description) ? (
                  <ul className="space-y-4">
                    {exp.description.map((point, i) => (
                      <li key={i} className="text-zinc-900 leading-relaxed font-normal flex items-start gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 mt-[10px] flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-zinc-900 leading-relaxed font-normal">
                    {exp.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
