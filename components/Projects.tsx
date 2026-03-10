"use client";

import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import profileData from "@/data/profile.json";
import { SectionHeading } from "./ui/SectionHeading";
import { SectionDivider } from "./ui/SectionDivider";

import { getTechIcon } from "@/lib/icons";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  color: string;
}

const projectsData = profileData.projects as Project[];

export default function Projects() {
  return (
    <section id="projects" className="py-16 relative">
      <SectionDivider />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of my recent work, highlighting problem-solving and technical implementation."
          chip="Portfolio"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-3xl overflow-hidden bg-zinc-50 border border-zinc-200 hover:border-zinc-300 transition-all flex flex-col hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-900/5 block"
            >
              {/* Image Placeholder */}
              <div className={`h-48 w-full bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-transparent" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm bg-white/30">
                  <span className="text-white font-medium flex items-center gap-2">View Project <ExternalLink size={16} /></span>
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-semibold mb-3 text-zinc-900 group-hover:text-zinc-600 transition-colors tracking-tight">{project.title}</h3>
                <div className="flex-1 mb-6">
                  <p className="text-zinc-900 font-normal line-clamp-3 overflow-hidden break-words">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => {
                    const iconPath = getTechIcon(tag);
                    return (
                      <span key={tag} className="px-3 py-1 text-xs font-medium bg-white text-zinc-700 rounded-full border border-zinc-200 flex items-center gap-1.5">
                        {iconPath && (
                          <Image
                            src={iconPath}
                            alt={tag}
                            width={14}
                            height={14}
                            className="w-3.5 h-3.5 object-contain"
                          />
                        )}
                        {tag}
                      </span>
                    );
                  })}
                </div>

                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-zinc-200 text-zinc-900 text-sm font-semibold">
                  {project.githubUrl && (
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 transition-colors flex items-center gap-2">
                      <Github size={18} /> Code
                    </Link>
                  )}
                  {project.demoUrl && (
                    <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 transition-colors flex items-center gap-2 ml-auto">
                      <ExternalLink size={18} /> Live Demo
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
