import React from "react";
import personalData from "@/data/personal.json";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const logoText = personalData.name.split(" ")[0].toUpperCase();

  return (
    <footer className="border-t border-slate-100 bg-white py-8 px-6 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-slate-400 font-medium">
        <div>
          &copy; {currentYear} <span className="font-bold tracking-[0.15em] text-slate-600 uppercase">{logoText}</span>. All rights reserved.
        </div>
        <div>
          Designed &amp; Built with Next.js &amp; Tailwind
        </div>
      </div>
    </footer>
  );
}
