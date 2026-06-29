"use client";

import React from "react";
import { motion } from "motion/react";
import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import personalData from "@/data/personal.json";

export default function Experience() {
  const experience = personalData.experience || [];
  const education = personalData.education || [];

  return (
    <section id="experience" className="py-20 px-6 bg-white relative z-10 border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey — where I have worked, what I have built, and how I have grown as an engineer."
          chip="Career"
          className="!mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Left: Work Experience */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2.5 mb-8">
              <div className="w-8 h-8 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                <Briefcase size={14} />
              </div>
              <h3 className="text-sm font-bold text-slate-800 tracking-wide">Work Experience</h3>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-[15px] top-2 bottom-2 w-px bg-slate-200" />

              <div className="flex flex-col gap-10">
                {experience.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="relative pl-10"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-1.5 w-[30px] h-[30px] rounded-full bg-white border-2 border-indigo-300 flex items-center justify-center z-10">
                      <div className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
                    </div>

                    {/* Card */}
                    <div className="bg-white border border-slate-200/80 rounded-theme p-6 hover:border-slate-300 hover:shadow-md transition-all duration-300">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                        <div>
                          <h4 className="text-base font-bold text-slate-800">{item.title}</h4>
                          <p className="text-sm font-semibold text-indigo-600 mt-0.5">{item.company}</p>
                        </div>
                        {/* Badge: Current or past */}
                        {item.duration.toLowerCase().includes("present") ? (
                          <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 self-start shrink-0">
                            Current
                          </span>
                        ) : (
                          <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-700 self-start shrink-0">
                            Past
                          </span>
                        )}
                      </div>

                      {/* Meta */}
                      <div className="flex flex-wrap gap-3 mb-5 text-[11px] text-slate-700 font-medium">
                        <span className="flex items-center gap-1">
                          <Calendar size={11} />
                          {item.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={11} />
                          {item.location}
                        </span>
                      </div>

                      {/* Description bullets */}
                      <ul className="flex flex-col gap-2">
                        {item.description.slice(0, 3).map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-300 shrink-0 mt-[5px]" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Education */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5 mb-8">
              <div className="w-8 h-8 rounded-full bg-violet-50 border border-violet-100 flex items-center justify-center text-violet-600">
                <GraduationCap size={14} />
              </div>
              <h3 className="text-sm font-bold text-slate-800 tracking-wide">Education</h3>
            </div>

            <div className="flex flex-col gap-6">
              {education.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-white border border-slate-200/80 rounded-theme p-6 hover:border-slate-300 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-violet-50 border border-violet-100 flex items-center justify-center text-violet-600 shrink-0">
                      <GraduationCap size={16} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 mb-1">{item.institution}</h4>
                      <p className="text-xs text-slate-700 leading-relaxed mb-3">{item.degree}</p>
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-slate-700">
                        <Calendar size={10} />
                        {item.duration}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
