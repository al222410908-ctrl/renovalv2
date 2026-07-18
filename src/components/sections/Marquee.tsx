import { useTranslation } from "@/components/LanguageContext";

export function Marquee() {
  const { t } = useTranslation();

  return (
    <div className="bg-[color:var(--mint-deep)] border-y border-[color:var(--terracota)]/30 overflow-hidden py-4">
      <div className="flex animate-marquee whitespace-nowrap text-mono text-sm tracking-widest text-[color:var(--linen)]">
        {Array.from({ length: 2 }).map((_, k) => (
          <div key={k} className="flex items-center gap-10 pr-10">
            {t.marquee.flatMap((text, i) => [
              <span key={`text-${i}`}>{text}</span>,
              <span key={`bullet-${i}`} className="text-[color:var(--terracota)]">
                ◆
              </span>,
            ])}
          </div>
        ))}
      </div>
    </div>
  );
}
export default Marquee;
