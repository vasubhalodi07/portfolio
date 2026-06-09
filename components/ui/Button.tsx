import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "gradient";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-xl font-medium active:scale-95 transition-all duration-200 gap-2 cursor-pointer",
          {
            "bg-white text-zinc-900 hover:bg-zinc-100 shadow-lg": variant === "primary",
            "text-slate-300 hover:text-white hover:bg-white/5": variant === "secondary",
            "text-slate-300 hover:border-white/20 hover:text-white":
              variant === "outline",
            "bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:from-indigo-500 hover:to-violet-500 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5":
              variant === "gradient",
            "px-4 py-2 text-xs": size === "sm",
            "px-7 py-3.5 text-sm": size === "md",
            "px-10 py-5 text-base rounded-2xl": size === "lg",
          },
          variant === "outline" && "border border-white/10",
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
