"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/Button";
import personalData from "@/data/personal.json";

export default function HeroSection() {
  const { heroTitle, heroDescription } = personalData;

  return (
    <section
      id="home"
      className="w-full min-h-screen lg:h-screen lg:min-h-[820px] flex items-center pt-32 pb-20 md:pt-28 md:pb-32 px-6 lg:px-16 relative overflow-hidden bg-primary-bg hero-responsive-height"
    >
      {/* Background soft ambient glows */}
      <div
        className="absolute top-1/4 left-1/3 w-[450px] h-[450px] rounded-full pointer-events-none opacity-50 blur-[90px]"
        style={{
          background: "radial-gradient(circle, rgba(79,70,229,0.12) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none opacity-40 blur-[100px]"
        style={{
          background: "radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)",
        }}
      />

      {/* Hero Content */}
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        {/* Left Column - Copy & Call to actions */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.15]">
            {heroTitle.includes("Software Engineer") ? (
              <>
                Hello! I&apos;m Vasu, a <span className="gradient-text">Software Engineer</span>.
              </>
            ) : (
              heroTitle
            )}
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-600 mb-10 leading-relaxed max-w-xl">
            {heroDescription}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <Link href={personalData.resume} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" className="group gap-2 w-full sm:w-auto px-6">
                View Resume
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
              </Button>
            </Link>

            <Link href="#projects">
              <Button variant="outline" className="gap-2 bg-white w-full sm:w-auto px-6 border-slate-200">
                See My Work
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Column - Tech Avatar Model */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
            {/* Visual Frame */}
            <div className="absolute inset-0 rounded-theme border border-slate-200/50 bg-white/40 backdrop-blur-sm -rotate-3 scale-[0.98] pointer-events-none" />
            <div className="absolute inset-0 rounded-theme border border-slate-200/80 bg-white shadow-xl shadow-slate-200/30 rotate-2 flex items-center justify-center overflow-hidden p-3 group transition-transform duration-300 hover:rotate-0">
              <Image
                src="/developer_boy_avatar.png"
                alt="Vasu Bhalodi - Developer Illustration"
                width={400}
                height={400}
                className="w-full h-full object-contain rounded-theme"
                priority
              />
            </div>

            {/* Circular decorative items */}
            <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shadow-md animate-bounce pointer-events-none">
              &lt;/&gt;
            </div>
            <div className="absolute -bottom-2 -left-4 w-10 h-10 rounded-full bg-violet-50 border border-violet-100 flex items-center justify-center text-violet-600 shadow-md pointer-events-none">
              JS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
