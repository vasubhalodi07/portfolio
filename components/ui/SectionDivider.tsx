"use client";

export function SectionDivider() {
  return (
    <div className="w-full flex justify-center h-[1px] relative z-20">
      <div
        className="w-[80%] h-full"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.35), rgba(139,92,246,0.35), transparent)",
        }}
      />
    </div>
  );
}
