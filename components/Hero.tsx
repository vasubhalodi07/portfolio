"use client";

import { motion } from "motion/react";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import profileData from "@/data/profile.json";
import { Chip } from "./ui/Chip";
import { Button } from "./ui/Button";

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
            Crafting <span className="text-zinc-800">Digital</span> <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-500">
              Experiences.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-zinc-900 mb-12 max-w-2xl leading-relaxed font-normal"
          >
            Hello, I&apos;m <span className="font-medium text-zinc-800">{profileData.personal.name}</span>. I am a {profileData.personal.role} building modern, high-performance web applications with a focus on intuitive user interfaces and scalable backends.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6">
            <Button
              variant="gradient"
              className="group"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
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
