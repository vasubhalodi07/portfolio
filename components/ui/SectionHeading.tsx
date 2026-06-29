import React from "react";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  chip?: string;
  className?: string;
};

export function SectionHeading({
  title,
  subtitle,
  chip,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`flex flex-col items-center text-center max-w-2xl mx-auto mb-16 ${className}`}>
      {chip && (
        <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 mb-3.5">
          {chip}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base text-slate-600 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
