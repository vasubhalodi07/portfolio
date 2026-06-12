import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import profileData from "@/data/profile.json";

const socialLinks = [
  { icon: Github, href: profileData.personal.github, label: "GitHub" },
  { icon: Linkedin, href: profileData.personal.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${profileData.personal.email}`, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative mt-8">
      <div
        className="w-full h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(99,102,241,0.5), rgba(139,92,246,0.5), transparent)",
        }}
      />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-0.5">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="text-slate-200 font-semibold">Vasu Bhalodi</span>
            <span className="gradient-text">.</span>
          </p>
        </div>
        <div className="flex items-center gap-3">
          {socialLinks.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="p-2.5 glass rounded-xl text-slate-400 hover:text-white transition-all duration-200 hover:scale-110 hover:border-white/20 cursor-pointer"
            >
              <social.icon size={16} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
