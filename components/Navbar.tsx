"use client";

import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import clsx from "clsx";

const navLinks = [
  { name: "About",      href: "#about"      },
  { name: "Experience", href: "#experience" },
  { name: "Skills",     href: "#skills"     },
  { name: "Projects",   href: "#projects"   },
];

const sectionIds = ["hero", "about", "experience", "skills", "projects", "contact"];

export default function Navbar() {
  const [isOpen,    setIsOpen]    = useState(false);
  const [scrolled,  setScrolled]  = useState(false);
  const [active,    setActive]    = useState("hero");

  /* scroll shadow */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* active section via IntersectionObserver */
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        }),
      { threshold: 0.35 }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-400",
          scrolled
            ? "border-b border-white/[0.06]"
            : "border-b border-transparent"
        )}
        style={{
          background: scrolled ? "rgba(2,2,9,0.82)" : "transparent",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-[68px] flex items-center justify-between gap-8">

          {/* Logo */}
          <Link
            href="/"
            className="text-lg font-black tracking-tight text-white flex-shrink-0 select-none"
          >
            Vasu Bhalodi
            <span className="gradient-text">.</span>
          </Link>

          {/* Desktop nav — centered */}
          <nav className="hidden md:flex items-center gap-1 flex-1 justify-center">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = active === id;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={clsx(
                    "relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 cursor-pointer",
                    isActive ? "text-white" : "text-slate-400 hover:text-white"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg"
                      style={{ background: "rgba(255,255,255,0.06)" }}
                      transition={{ type: "spring", stiffness: 380, damping: 36 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right: Contact CTA */}
          <div className="hidden md:flex items-center gap-4 flex-shrink-0">
            <Link
              href="#contact"
              className="px-4 py-2 text-sm font-semibold text-white rounded-lg transition-all duration-200 cursor-pointer"
              style={{
                background: "linear-gradient(135deg, rgba(99,102,241,0.3), rgba(139,92,246,0.3))",
                border: "1px solid rgba(99,102,241,0.35)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background =
                  "linear-gradient(135deg, rgba(99,102,241,0.45), rgba(139,92,246,0.45))")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background =
                  "linear-gradient(135deg, rgba(99,102,241,0.3), rgba(139,92,246,0.3))")
              }
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-slate-400 hover:text-white transition-colors cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <X size={22} />
                </motion.span>
              ) : (
                <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <Menu size={22} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[68px] left-0 right-0 z-40 md:hidden"
            style={{
              background: "rgba(2,2,9,0.96)",
              backdropFilter: "blur(24px)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <nav className="max-w-[1400px] mx-auto px-6 py-5 flex flex-col gap-1">
              {[...navLinks, { name: "Contact", href: "#contact" }].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3.5 text-sm font-medium text-slate-300 hover:text-white rounded-xl transition-all cursor-pointer hover:bg-white/5"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
