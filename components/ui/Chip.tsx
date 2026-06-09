import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ChipProps {
  children: ReactNode;
  className?: string;
}

export function Chip({ children, className }: ChipProps) {
  return (
    <span
      className={cn("inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold", className)}
      style={{
        background: "rgba(99,102,241,0.1)",
        border: "1px solid rgba(99,102,241,0.25)",
        color: "#818cf8",
      }}
    >
      {children}
    </span>
  );
}
