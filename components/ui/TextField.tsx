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
      "w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500/50 transition-all font-medium",
      multiline && "resize-none",
      className
    );

    return (
      <div className="space-y-2 w-full">
        <label htmlFor={defaultId} className="text-sm font-medium text-zinc-800 mb-3 ml-1">
          {label}
        </label>
        {multiline ? (
          <textarea
            id={defaultId}
            ref={ref as React.ForwardedRef<HTMLTextAreaElement>}
            rows={rows}
            className={inputClass}
            {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <input
            id={defaultId}
            ref={ref as React.ForwardedRef<HTMLInputElement>}
            className={inputClass}
            {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
          />
        )}
      </div>
    );
  }
);
TextField.displayName = "TextField";

export { TextField };
