import React from "react";

type TextFieldProps = {
  label: string;
  id: string;
  multiline?: boolean;
  rows?: number;
  placeholder?: string;
  type?: string;
  className?: string;
};

export function TextField({
  label,
  id,
  multiline = false,
  rows = 4,
  placeholder = "",
  type = "text",
  className = "",
}: TextFieldProps) {
  const baseInputStyles =
    "w-full px-4 py-3 rounded-theme border border-slate-200 bg-slate-50/50 text-slate-900 placeholder-slate-400 text-sm transition-all duration-200 focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/5";

  return (
    <div className={`flex flex-col gap-1.5 w-full ${className}`}>
      <label htmlFor={id} className="text-xs font-semibold text-slate-700 tracking-wide uppercase">
        {label}
      </label>
      {multiline ? (
        <textarea
          id={id}
          rows={rows}
          placeholder={placeholder}
          className={baseInputStyles}
        />
      ) : (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          className={baseInputStyles}
        />
      )}
    </div>
  );
}
