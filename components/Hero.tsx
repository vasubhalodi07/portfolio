"use client";

import { motion } from "motion/react";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import profileData from "@/data/profile.json";
import { Chip } from "./ui/Chip";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-[120px] -z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-3">
            <Chip>Portfolio</Chip>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl font-black tracking-tight mb-8 leading-[1.1] text-zinc-900"
          >
            Crafting Digital <br className="hidden md:block" />
            <span className="text-zinc-400">
              Experiences.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-zinc-500 mb-12 max-w-2xl leading-relaxed font-light"
          >
            Hello, I&apos;m <span className="font-medium text-zinc-800">{profileData.personal.name}</span>. I am a {profileData.personal.role} building modern, high-performance web applications with a focus on intuitive user interfaces and scalable backends.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6">
            <Link
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-zinc-900 text-white font-medium rounded-2xl hover:bg-zinc-800 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-900/20 group"
            >
              View Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href={profileData.personal.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border border-zinc-200 text-zinc-800 font-medium rounded-2xl hover:bg-zinc-50 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-zinc-200/50"
            >
              <Download size={18} />
              Resume
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
