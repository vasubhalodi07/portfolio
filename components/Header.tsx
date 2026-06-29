"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import personalData from "@/data/personal.json";

export default function Header() {
  const { name, github, linkedin, email } = personalData;
  const logoText = name.split(" ")[0].toUpperCase();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Toolbox", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: github,
      label: "Github",
    },
    {
      icon: Linkedin,
      href: linkedin,
      label: "Linkedin",
    },
    {
      icon: Mail,
      href: `mailto:${email}`,
      label: "Email",
    },
  ];

  return (
    <header
      className={`absolute md:fixed top-0 left-0 right-0 z-50 w-full px-6 border-b transition-all duration-300 ${
        isScrolled
          ? "bg-transparent border-transparent py-4 md:bg-white/80 md:border-slate-200/50 md:shadow-sm md:backdrop-blur-md md:py-3"
          : "bg-transparent border-transparent py-4 md:py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-y-3 gap-x-4 w-full">
        {/* Top Row for Mobile: Logo & Socials */}
        <div className="flex items-center justify-between w-full md:w-auto">
          {/* Logo */}
          <Link href="#home" className="text-base font-bold tracking-[0.22em] uppercase text-slate-900 select-none">
            {logoText}
          </Link>
          
          {/* Social Icons (Mobile Only) */}
          <div className="flex items-center gap-2 md:hidden">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-slate-200/80 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:border-slate-350 hover:bg-slate-50/50 transition-all duration-200 cursor-pointer"
                  title={social.label}
                >
                  <Icon size={15} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Social Icons (Desktop Only) */}
        <div className="hidden md:flex items-center gap-2.5">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-slate-200/80 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:border-slate-350 hover:bg-slate-50/50 transition-all duration-200 cursor-pointer"
                title={social.label}
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
}
