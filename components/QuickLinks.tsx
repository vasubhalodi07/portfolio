"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { FolderGit, Briefcase, Mail, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

export default function QuickLinks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // Responsive check
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsTablet(width >= 768);
      setIsDesktop(width >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Track absolute window scroll position in pixels
  const { scrollY } = useScroll();

  // Dynamic animation translation values depending on screen size
  const translateXVal = isDesktop ? 270 : isTablet ? 200 : 0;

  // Card 1 (Left) animations: moves from center to left
  const card1X = useTransform(scrollY, [40, 240], [translateXVal, 0], { clamp: true });
  const card1Rotate = useTransform(scrollY, [40, 240], [isTablet ? -4 : 0, 0], { clamp: true });
  const card1Y = useTransform(scrollY, [40, 240], [isTablet ? 4 : 0, 0], { clamp: true });

  // Card 2 (Middle) animations: stays centered
  const card2Rotate = useTransform(scrollY, [40, 240], [0, 0], { clamp: true });

  // Card 3 (Right) animations: moves from center to right
  const card3X = useTransform(scrollY, [40, 240], [-translateXVal, 0], { clamp: true });
  const card3Rotate = useTransform(scrollY, [40, 240], [isTablet ? 4 : 0, 0], { clamp: true });
  const card3Y = useTransform(scrollY, [40, 240], [isTablet ? 8 : 0, 0], { clamp: true });

  // Spring physics config for smooth, fluid scrolling motion
  const springConfig = { stiffness: 45, damping: 30, mass: 1.2 };

  const card1XSpring = useSpring(card1X, springConfig);
  const card1RotateSpring = useSpring(card1Rotate, springConfig);
  const card1YSpring = useSpring(card1Y, springConfig);

  const card2RotateSpring = useSpring(card2Rotate, springConfig);

  const card3XSpring = useSpring(card3X, springConfig);
  const card3RotateSpring = useSpring(card3Rotate, springConfig);
  const card3YSpring = useSpring(card3Y, springConfig);

  const cards = [
    {
      title: "My Portfolio",
      description: "Explore selected projects and my approach to design.",
      href: "#projects",
      icon: FolderGit,
      style: {
        x: card1XSpring,
        rotate: card1RotateSpring,
        y: card1YSpring,
        zIndex: 10,
      },
      theme: {
        iconBg: "bg-blue-50/80 text-blue-600 border-blue-100",
        btnBg: "bg-blue-50/50 text-blue-600 border-blue-100 hover:bg-blue-100/80",
      },
    },
    {
      title: "My Experience",
      description: "A look at my professional journey, roles, and companies I have worked with.",
      href: "#experience",
      icon: Briefcase,
      style: {
        x: "0px",
        rotate: card2RotateSpring,
        y: "0px",
        zIndex: 20,
      },
      theme: {
        iconBg: "bg-amber-50/80 text-amber-600 border-amber-100",
        btnBg: "bg-amber-50/50 text-amber-600 border-amber-100 hover:bg-amber-100/80",
      },
    },
    {
      title: "Contact Me",
      description: "Let's work together to bring your ideas and vision to life.",
      href: "#contact",
      icon: Mail,
      style: {
        x: card3XSpring,
        rotate: card3RotateSpring,
        y: card3YSpring,
        zIndex: 10,
      },
      theme: {
        iconBg: "bg-emerald-50/80 text-emerald-600 border-emerald-100",
        btnBg: "bg-emerald-50/50 text-emerald-600 border-emerald-100 hover:bg-emerald-100/80",
      },
    },
  ];

  return (
    <section ref={containerRef} className="px-6 relative z-20 md:-translate-y-1/2 md:-mb-20 -translate-y-6 -mb-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 lg:gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                style={card.style}
                className="w-full h-full"
              >
                <Link
                  href={card.href}
                  className="group flex flex-col items-center text-center p-8 bg-white border border-border-primary rounded-theme hover:shadow-xl hover:shadow-slate-200/30 transition-[box-shadow] duration-300 cursor-pointer h-full"
                >
                  {/* Visual Icon */}
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center border mb-6 transition-transform duration-300 group-hover:scale-105 ${card.theme.iconBg}`}
                  >
                    <Icon size={22} />
                  </div>

                  {/* Text Content */}
                  <h3 className="text-lg font-bold text-slate-900 mb-3 tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-8 flex-grow max-w-[240px]">
                    {card.description}
                  </p>

                  {/* Arrow Action Circle */}
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center border transition-all duration-200 ${card.theme.btnBg}`}
                  >
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-200 group-hover:translate-x-0.5"
                    />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
