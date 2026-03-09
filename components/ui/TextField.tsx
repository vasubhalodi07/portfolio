import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  multiline?: boolean;
  rows?: number;
}

const TextField = forwardRef<HTMLInputElement | HTMLTextAreaElement, TextFieldProps>(
  ({ className, label, multiline, rows = 5, id, ...props }, ref) => {
    const defaultId = id || label.toLowerCase().replace(/\s+/g, '-');
    const inputClass = cn(
      "w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900/20 transition-all font-medium",
      multiline && "resize-none",
      className
    );

    return (
      <div className="space-y-2 w-full">
        <label htmlFor={defaultId} className="text-sm font-medium text-zinc-800 ml-1">
          {label}
        </label>
        {multiline ? (
          <textarea
            id={defaultId}
            ref={ref as any}
            rows={rows}
            className={inputClass}
            {...(props as any)}
          />
        ) : (
          <input
            id={defaultId}
            ref={ref as any}
            className={inputClass}
            {...(props as any)}
          />
        )}
      </div>
    );
  }
);
TextField.displayName = "TextField";

export { TextField };
