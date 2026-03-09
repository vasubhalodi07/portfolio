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
    <footer className="border-t border-zinc-100 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-slate-500 text-sm font-medium">
          © {new Date().getFullYear()} Vasu Bhalodi. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          {socialLinks.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-900 transition-colors"
              aria-label={social.label}
            >
              <social.icon size={20} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
