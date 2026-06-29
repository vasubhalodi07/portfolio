"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Github, ShoppingCart, Network, Trash2, Lock } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { SectionHeading } from "./ui/SectionHeading";
import projectsData from "@/data/projects.json";

// Custom Mockup Sub-components
const EcomMockup = () => (
  <div className="w-full h-full min-h-[260px] bg-gradient-to-br from-emerald-50/60 to-teal-50/60 flex items-center justify-center p-6 select-none">
    <div className="bg-white border border-emerald-100/80 rounded-lg shadow-lg p-5 w-full max-w-[280px]">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <ShoppingCart size={12} />
          </div>
          <span className="text-[10px] font-bold text-slate-700">Order Summary</span>
        </div>
        <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">Razorpay</span>
      </div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-[10px] text-slate-400">Total Amount:</span>
        <span className="text-xs font-extrabold text-slate-800">₹8,450.00</span>
      </div>
      <div className="flex justify-between items-center mb-4">
        <span className="text-[10px] text-slate-400">Auth Status:</span>
        <span className="text-[9px] font-bold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">JWT Verified</span>
      </div>
      <div className="w-full bg-emerald-600 text-white rounded text-[10px] font-bold py-2 text-center">
        Payment Successful
      </div>
    </div>
  </div>
);

const ApiMockup = () => (
  <div className="w-full h-full min-h-[260px] bg-gradient-to-br from-blue-50/60 to-indigo-50/60 flex items-center justify-center p-6 select-none font-mono">
    <div className="bg-slate-900 border border-slate-800 rounded-lg shadow-xl p-4 w-full max-w-[280px] text-[9px] text-indigo-300">
      <div className="flex gap-1.5 mb-3 border-b border-slate-800 pb-2">
        <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
        <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
        <span className="text-[8px] text-slate-500 ml-2">REST Client</span>
      </div>
      <div className="text-indigo-400 mb-1">GET /api/v1/users/vasu/friends</div>
      <div className="text-emerald-400 mb-2">Response: 200 OK</div>
      <div className="bg-slate-950 p-2.5 rounded text-slate-400 text-[8px] leading-normal border border-slate-800/80">
        {`{`}
        <br />
        &nbsp;&nbsp;{`"user": "vasubhalodi07",`}
        <br />
        &nbsp;&nbsp;{`"database": "Neo4j Graph DB",`}
        <br />
        &nbsp;&nbsp;{`"status": "connected",`}
        <br />
        &nbsp;&nbsp;{`"friendsCount": 142`}
        <br />
        {`}`}
      </div>
    </div>
  </div>
);

const AwsMockup = () => (
  <div className="w-full h-full min-h-[260px] bg-gradient-to-br from-orange-50/60 to-amber-50/60 flex items-center justify-center p-6 select-none">
    <div className="bg-white border border-slate-200 rounded-lg shadow-lg w-full max-w-[280px] overflow-hidden">
      <div className="bg-slate-50 px-3 py-2 border-b border-slate-200 flex items-center justify-between">
        <span className="text-[10px] font-bold text-slate-600">AWS Nuke Console</span>
        <div className="flex gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
          <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
        </div>
      </div>
      <div className="p-4 flex flex-col gap-3">
        <div className="bg-red-50 border border-red-100 rounded p-2 flex items-start gap-2">
          <Lock size={12} className="text-red-500 shrink-0 mt-0.5" />
          <p className="text-[8px] text-red-700 leading-normal">
            Account: <strong>Sandbox-Dev</strong>
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between text-[8px] text-slate-500 bg-slate-50 p-1.5 rounded border border-slate-100">
            <span>S3 Buckets</span>
            <span className="font-bold text-red-500">nuke-pending</span>
          </div>
          <div className="flex items-center justify-between text-[8px] text-slate-500 bg-slate-50 p-1.5 rounded border border-slate-100">
            <span>EC2 Instances</span>
            <span className="font-bold text-red-500">nuke-pending</span>
          </div>
        </div>
        <div className="w-full bg-red-600 text-white rounded text-[10px] font-bold py-2 text-center">
          Nuke Resources
        </div>
      </div>
    </div>
  </div>
);

// Individual Project Card Component
interface ProjectCardProps {
  project: any;
  idx: number;
  isDesktop: boolean;
}

function ProjectCard({ project, idx, isDesktop }: ProjectCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position of this card relative to the top of the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Calculate 3D depth transitions when card is scrolled past (stacked underneath)
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95], { clamp: true });
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6], { clamp: true });

  const isEven = idx % 2 === 0;
  const topOffset = isDesktop ? (100 + idx * 24) : (64 + idx * 16);
  const paddingTop = isDesktop ? (idx * 8) : (idx * 4);

  const categoryLabel = project.category;

  return (
    <div
      ref={containerRef}
      className="sticky"
      style={{
        top: `${topOffset}px`,
        paddingTop: `${paddingTop}px`,
        zIndex: 10 + idx
      }}
    >
      <motion.div
        style={{ scale, opacity }}
        className="grid grid-cols-1 lg:grid-cols-12 border border-slate-200/80 rounded-theme overflow-hidden bg-white shadow-md hover:border-slate-350 transition-colors duration-300 items-stretch"
      >
        {/* Details Column */}
        <div className="p-8 lg:p-12 lg:col-span-6 flex flex-col justify-center">
          <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 mb-2 block">
            {categoryLabel}
          </span>
          
          <h3 className="text-xl font-bold text-slate-800 mb-3">
            {project.title}
          </h3>
          
          <ul className="flex flex-col gap-2 mb-6">
            {(project.description as string[]).map((point: string, pIdx: number) => (
              <li key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-300 shrink-0 mt-[5px]" />
                {point}
              </li>
            ))}
          </ul>
          
          {/* Tech Tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tags.map((tag: string) => (
              <span
                key={tag}
                className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-50 border border-slate-200/60 text-slate-700"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Actions Link */}
          <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
            {project.githubUrl ? (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-800 hover:text-indigo-600 transition-colors"
              >
                <Github size={16} />
                <span>Source Code</span>
              </Link>
            ) : (
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 select-none">
                <Lock size={12} />
                <span>Private Codebase</span>
              </div>
            )}
          </div>
        </div>

        {/* Mockup Visual Column */}
        <div className="lg:col-span-6 border-t lg:border-t-0 lg:border-l border-slate-100 relative overflow-hidden min-h-[260px]">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          ) : (
            <div className="absolute inset-0 bg-slate-50 flex items-center justify-center text-slate-300 text-xs">
              No preview
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default function Projects() {
  const projects = projectsData || [];
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="projects" className="py-20 px-6 bg-white relative z-10 border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of e-commerce systems, graph database APIs, and cloud developer tools I have built."
          chip="Portfolio"
          className="!mb-16"
        />

        {/* Projects Stack */}
        <div className="flex flex-col gap-6">
          {projects.map((project, idx) => (
            <ProjectCard
              key={idx}
              project={project}
              idx={idx}
              isDesktop={isDesktop}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
