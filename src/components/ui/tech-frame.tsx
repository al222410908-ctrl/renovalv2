import { type ReactNode } from "react";

type TechFrameColor = "terracota" | "linen" | "mint";

const colorMap: Record<TechFrameColor, string> = {
  terracota: "border-[color:var(--terracota)]",
  linen: "border-[color:var(--linen)]",
  mint: "border-[color:var(--mint)]",
};

const strokeMap: Record<TechFrameColor, string> = {
  terracota: "text-[color:var(--terracota)]",
  linen: "text-[color:var(--linen)]",
  mint: "text-[color:var(--mint)]",
};

export function TechFrame({
  children,
  color = "terracota",
  tag,
  callout,
  calloutAccent = false,
  className = "",
}: {
  children: ReactNode;
  color?: TechFrameColor;
  tag?: string;
  callout?: string;
  calloutAccent?: boolean;
  className?: string;
}) {
  const border = colorMap[color];
  const stroke = strokeMap[color];

  return (
    <div className={`relative ${className}`}>
      {children}
      <span
        className={`absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 ${border}`}
      />
      <span
        className={`absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 ${border}`}
      />
      <span
        className={`absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 ${border}`}
      />
      <span
        className={`absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 ${border}`}
      />
      {tag && (
        <span
          className={`text-mono text-[10px] tracking-widest absolute -top-2 left-6 px-2 bg-[color:var(--linen)] ${stroke}`}
        >
          {tag}
        </span>
      )}
      {callout && (
        <span
          className={`text-mono text-[10px] tracking-widest absolute -bottom-2 right-6 px-2 ${
            calloutAccent
              ? "bg-[color:var(--lime)] text-[color:var(--mint)]"
              : `bg-[color:var(--linen)] ${stroke}`
          }`}
        >
          {callout}
        </span>
      )}
    </div>
  );
}
