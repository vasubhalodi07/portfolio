import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  multiline?: boolean;
  rows?: number;
}

const TextField = forwardRef<HTMLInputElement | HTMLTextAreaElement, TextFieldProps>(
  ({ className, label, multiline, rows = 5, id, ...props }, ref) => {
    const defaultId = id || label.toLowerCase().replace(/\s+/g, "-");
    const inputClass = cn(
      "w-full rounded-xl px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none transition-all duration-200",
      "focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500/40",
      multiline && "resize-none",
      className
    );

    const sharedStyle = {
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.08)",
    };

    return (
      <div className="space-y-2 w-full">
        <label htmlFor={defaultId} className="block text-xs font-semibold text-slate-400 ml-1">
          {label}
        </label>
        {multiline ? (
          <textarea
            id={defaultId}
            ref={ref as React.ForwardedRef<HTMLTextAreaElement>}
            rows={rows}
            className={inputClass}
            style={sharedStyle}
            {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <input
            id={defaultId}
            ref={ref as React.ForwardedRef<HTMLInputElement>}
            className={inputClass}
            style={sharedStyle}
            {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
          />
        )}
      </div>
    );
  }
);

TextField.displayName = "TextField";

export { TextField };
