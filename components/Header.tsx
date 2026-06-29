"use client";

import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import personalData from "@/data/personal.json";

export default function Header() {
  const { name, github, linkedin, email } = personalData;
  const logoText = name.split(" ")[0].toUpperCase();

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
    <header className="relative z-10 px-4 py-4 md:py-6">
      <div
        className="max-w-6xl mx-auto rounded-theme px-6 py-3.5 flex flex-col md:flex-row items-center justify-between gap-4 border bg-secondary-bg border-border-primary backdrop-blur-md"
      >
        {/* Logo */}
        <Link href="#home" className="text-base font-bold tracking-[0.22em] uppercase text-slate-900 select-none">
          {logoText}
        </Link>

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

        {/* Social Icons */}
        <div className="flex items-center gap-2.5">
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
