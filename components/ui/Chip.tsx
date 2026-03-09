import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ChipProps {
  children: ReactNode;
  className?: string;
}

export function Chip({ children, className }: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-4 py-1.5 rounded-full bg-zinc-100 text-zinc-800 text-xs font-semibold uppercase tracking-widest border border-zinc-200/60",
        className
      )}
    >
      {children}
    </span>
  );
}
