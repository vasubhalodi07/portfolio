"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import * as Lucide from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import skillsDataRaw from "@/data/skills.json";

type Skill = {
  name: string;
  category: "Frontend" | "Backend" | "DevOps & Tools";
  level: "Core" | "Advanced" | "Familiar";
  icon: string;
  cardHover: string;
  iconStyle: string;
};

export default function Skills() {
  const categories = ["All", "Frontend", "Backend", "DevOps & Tools"] as const;
  type Category = typeof categories[number];

  const [activeTab, setActiveTab] = useState<Category>("All");
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const skillsData = skillsDataRaw as Skill[];

  const filteredSkills = activeTab === "All"
    ? skillsData
    : skillsData.filter(skill => skill.category === activeTab);

  // Stagger variants for entry transitions
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 15 } }
  };

  return (
    <section id="skills" className="py-20 px-6 bg-white relative z-10 border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <SectionHeading
          title="My Toolbox"
          subtitle="A comprehensive overview of libraries, frameworks, database systems, and deployment automation tools I use in production."
          chip="Skills & Tools"
          className="!mb-8"
        />

        {/* Category Filter Tabs */}
        <div className="flex justify-start sm:justify-center mb-8 overflow-x-auto no-scrollbar -mx-6 px-6">
          <div className="flex bg-slate-100 p-1.5 rounded-full border border-slate-200/50">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`relative px-4 py-2 text-xs font-semibold rounded-full transition-colors duration-200 cursor-pointer ${activeTab === cat ? "text-white" : "text-slate-600 hover:text-slate-900"
                  }`}
              >
                {activeTab === cat && (
                  <motion.div
                    layoutId="activeTabPill"
                    className="absolute inset-0 bg-indigo-600 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    style={{ zIndex: 0 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div
          key={activeTab}
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {filteredSkills.map((skill) => {
            const isImageIcon = skill.icon.startsWith("/");
            const LucideIcon = (Lucide as any)[skill.icon];

            return (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className={`group bg-white p-5 border border-border-primary rounded-theme flex flex-col items-start transition-all duration-300 hover:border-slate-300 hover:shadow-lg ${skill.cardHover} cursor-default`}
              >
                {/* Skill Icon */}
                <div className={`w-12 h-12 rounded-full flex items-center justify-center border mb-4 group-hover:scale-105 transition-transform duration-200 ${skill.iconStyle}`}>
                  {isImageIcon ? (
                    <img src={skill.icon} alt={skill.name} className="w-7 h-7 object-contain" />
                  ) : LucideIcon ? (
                    <LucideIcon size={22} />
                  ) : null}
                </div>

                {/* Name */}
                <h3 className="text-sm font-bold text-slate-800 mb-1 group-hover:text-slate-900">
                  {skill.name}
                </h3>

                {/* Level Tag */}
                <span className="text-[10px] font-semibold text-slate-600 group-hover:text-slate-800">
                  {skill.level}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
