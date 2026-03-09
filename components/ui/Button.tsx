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
          "inline-flex items-center justify-center rounded-xl font-medium transition-colors active:scale-95 transition-all gap-2",
          {
            "bg-zinc-900 text-white hover:bg-zinc-800 shadow-lg hover:shadow-xl": variant === "primary",
            "bg-zinc-100 text-zinc-900 hover:bg-zinc-200": variant === "secondary",
            "bg-transparent border border-zinc-200 text-zinc-800 hover:bg-zinc-50": variant === "outline",
            "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 shadow-lg hover:shadow-blue-500/20": variant === "gradient",
            "px-4 py-2 text-sm": size === "sm",
            "px-8 py-4 text-base": size === "md",
            "px-10 py-5 text-lg rounded-2xl": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
