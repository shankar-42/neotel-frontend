import { cn } from "@/lib/utils";
import { type } from "@/lib/typography";
import type { ReactNode } from "react";

interface SectionLabelProps {
  children: ReactNode;
  color?: "primary" | "secondary";
  className?: string;
}

export function SectionLabel({
  children,
  color = "primary",
  className,
}: SectionLabelProps) {
  return (
    <p
      className={cn(
        type.eyebrow,
        "mb-4",
        color === "primary" ? "text-primary" : "text-secondary",
        className,
      )}>
      {children}
    </p>
  );
}
