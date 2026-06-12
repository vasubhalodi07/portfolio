"use client";

import { motion } from "motion/react";
import { Send, Github, Linkedin, Mail, MapPin, Clock } from "lucide-react";
import Link from "next/link";
import profileData from "@/data/profile.json";
import { SectionHeading } from "./ui/SectionHeading";
import { SectionDivider } from "./ui/SectionDivider";
import { TextField } from "./ui/TextField";
import { Button } from "./ui/Button";

const socialLinks = [
  {
    icon: Github,
    href: profileData.personal.github,
    label: "GitHub",
    sub: "github.com/vasubhalodi",
    color: "#818cf8",
    bg: "rgba(129,140,248,0.08)",
    border: "rgba(129,140,248,0.20)",
  },
  {
    icon: Linkedin,
    href: profileData.personal.linkedin,
    label: "LinkedIn",
    sub: "linkedin.com/in/vasu",
    color: "#60a5fa",
    bg: "rgba(96,165,250,0.08)",
    border: "rgba(96,165,250,0.20)",
  },
  {
    icon: Mail,
    href: `mailto:${profileData.personal.email}`,
    label: "Email",
    sub: profileData.personal.email,
    color: "#a78bfa",
    bg: "rgba(167,139,250,0.08)",
    border: "rgba(167,139,250,0.20)",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <SectionDivider />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 relative z-10">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind or want to collaborate? I'd love to hear from you."
          chip="Contact"
        />

        {/* Full-width two-column layout */}
        <div className="grid lg:grid-cols-[380px_1fr] xl:grid-cols-[420px_1fr] gap-8">

          {/* ── Left: contact info ── */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6"
          >
            {/* Heading card */}
            <div
              className="glass rounded-2xl p-7 relative overflow-hidden"
            >
              {/* Background glow */}
              <div
                className="absolute -top-10 -right-10 w-40 h-40 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)" }}
              />
              <h3 className="text-xl font-bold text-white mb-2 relative">
                Let&apos;s work together
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed relative">
                Open to full-time roles, freelance projects, and open-source collaborations.
              </p>

              <div className="mt-5 space-y-3 relative">
                <div className="flex items-center gap-2.5 text-sm text-slate-400">
                  <Mail size={14} style={{ color: "#818cf8" }} />
                  <span className="truncate">{profileData.personal.email}</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-400">
                  <MapPin size={14} style={{ color: "#67e8f9" }} />
                  <span>India</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-400">
                  <Clock size={14} style={{ color: "#6ee7b7" }} />
                  <span>Replies within 24 hours</span>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="flex flex-col gap-3">
              {socialLinks.map(({ icon: Icon, href, label, sub, color, bg, border }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 glass rounded-xl transition-all duration-200 group cursor-pointer"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = border;
                    e.currentTarget.style.transform = "translateX(4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)";
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  <div
                    className="p-2.5 rounded-xl flex-shrink-0 transition-transform duration-200 group-hover:scale-105"
                    style={{ background: bg, border: `1px solid ${border}` }}
                  >
                    <Icon size={18} style={{ color }} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-white leading-none mb-1">{label}</p>
                    <p className="text-xs text-slate-500 truncate">{sub}</p>
                  </div>
                  <div
                    className="ml-auto text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0"
                    style={{ color }}
                  >
                    Visit →
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* ── Right: form ── */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="glass rounded-2xl p-5 sm:p-7 md:p-10 relative overflow-hidden"
          >
            {/* Subtle corner glow */}
            <div
              className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)" }}
            />

            <h3 className="text-lg font-bold text-white mb-6 relative">Send a message</h3>

            <form className="space-y-5 relative" onSubmit={(e) => e.preventDefault()}>
              {/* Row 1: Name + Email */}
              <div className="grid sm:grid-cols-2 gap-5">
                <TextField label="Name" id="name" type="text" placeholder="John Doe" />
                <TextField label="Email" id="email" type="email" placeholder="john@example.com" />
              </div>

              {/* Row 2: Subject */}
              <TextField label="Subject" id="subject" type="text" placeholder="Project enquiry / freelance / other" />

              {/* Row 3: Message */}
              <TextField
                label="Message"
                id="message"
                multiline
                rows={6}
                placeholder="Tell me about your project, timeline, and budget…"
              />

              {/* Submit row */}
              <div className="flex items-center justify-between gap-4 pt-1">
                <Button type="submit" variant="gradient" size="md" className="group gap-2">
                  <Send size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-200" />
                  Send Message
                </Button>
                <p className="text-xs text-slate-500 hidden sm:block">
                  I&apos;ll get back to you within 24h.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
