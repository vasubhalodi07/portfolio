"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
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

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 400, damping: 40 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 400, damping: 40 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      /* perspective wrapper — no overflow here so 3D is not clipped */
      style={{ perspective: "1200px" }}
    >
      <motion.div
        ref={ref}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={(e) => {
          handleMouseLeave();
          (e.currentTarget.querySelector(".card-shell") as HTMLElement).style.borderColor =
            "rgba(255,255,255,0.10)";
        }}
        onMouseEnter={(e) =>
          ((e.currentTarget.querySelector(".card-shell") as HTMLElement).style.borderColor =
            "rgba(255,255,255,0.18)")
        }
        className="group relative flex flex-col h-full cursor-pointer"
      >
        {/* Card shell — overflow-hidden here, separate from 3D transform element */}
        <div
          className="card-shell glass rounded-2xl overflow-hidden flex flex-col flex-1 transition-colors duration-300"
        >
          {/* Gradient image area */}
          <div className={`h-44 relative overflow-hidden bg-gradient-to-br ${project.color} flex-shrink-0`}>
            <div className="absolute inset-0 bg-black/20" />
            {/* Specular highlight */}
            <div
              className="absolute inset-0 opacity-25"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.5) 0%, transparent 55%)",
              }}
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm bg-black/25">
              <span
                className="text-white text-xs font-medium flex items-center gap-2 px-4 py-2 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.22)",
                }}
              >
                View Project <ExternalLink size={12} />
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-base font-bold text-white mb-2 leading-snug">{project.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-5 line-clamp-3">
              {project.description}
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.tags.map((tag) => {
                const iconPath = getTechIcon(tag);
                return (
                  <span
                    key={tag}
                    className="flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-slate-400 rounded-lg"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    {iconPath && (
                      <Image
                        src={iconPath}
                        alt={tag}
                        width={11}
                        height={11}
                        className="w-3 h-3 object-contain"
                      />
                    )}
                    {tag}
                  </span>
                );
              })}
            </div>

            {/* Links */}
            <div
              className="flex items-center gap-4 pt-4 text-xs font-medium"
              style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
            >
              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  <Github size={13} /> Code
                </Link>
              )}
              {project.demoUrl && (
                <Link
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer ml-auto"
                >
                  <ExternalLink size={13} /> Live Demo
                </Link>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative">
      <SectionDivider />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of my recent work, highlighting problem-solving and technical implementation."
          chip="Portfolio"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(profileData.projects as Project[]).map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
