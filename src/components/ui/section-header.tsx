import { type ReactNode } from "react";
import { Reveal } from "./reveal";

export function SectionHeader({
  number,
  title,
  subtitle,
  light = false,
}: {
  number: string;
  title: ReactNode;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <Reveal>
      <div className="grid md:grid-cols-[minmax(0,1fr)_auto] items-end gap-6 mb-16">
        <div>
          <div
            className={`text-mono text-[11px] uppercase tracking-[0.35em] mb-4 ${
              light ? "text-[color:var(--terracota)]" : "text-[color:var(--terracota)]"
            }`}
          >
            {number}
          </div>
          <h2
            className={`text-display text-5xl md:text-7xl ${
              light ? "text-[color:var(--linen)]" : "text-[color:var(--mint)]"
            }`}
          >
            {title}
          </h2>
        </div>
        {subtitle && (
          <p
            className={`text-mono text-xs uppercase tracking-widest max-w-xs md:text-right ${
              light
                ? "text-[color:var(--linen)]/70"
                : "text-[color:var(--mint)]/70"
            }`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </Reveal>
  );
}
