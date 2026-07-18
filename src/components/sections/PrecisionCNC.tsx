import processCncImg from "@/assets/process-cnc.webp";
import { Reveal } from "@/components/ui/reveal";
import { useTranslation } from "@/components/LanguageContext";

export function PrecisionCNC() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[85vh] flex items-end overflow-hidden">
      <img
        src={processCncImg}
        alt="CNC cutting wood"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--mint)]/95 via-[color:var(--mint)]/60 to-transparent" />
      {/* corner marks */}
      <span className="absolute top-6 left-6 w-6 h-6 border-t-2 border-l-2 border-[color:var(--linen)]" />
      <span className="absolute top-6 right-6 w-6 h-6 border-t-2 border-r-2 border-[color:var(--linen)]" />
      <span className="absolute bottom-6 left-6 w-6 h-6 border-b-2 border-l-2 border-[color:var(--linen)]" />
      <span className="absolute bottom-6 right-6 w-6 h-6 border-b-2 border-r-2 border-[color:var(--linen)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
        <Reveal>
          <div className="text-mono text-[11px] uppercase tracking-[0.35em] text-[color:var(--lime)] mb-4">
            {t.cnc.eyebrow}
          </div>
          <h2 className="text-display text-6xl md:text-8xl text-[color:var(--linen)] mb-6 leading-[0.85]">
            {t.cnc.titleLine1}
            <br />
            {t.cnc.titleLine2}
            <br />
            <span className="text-[color:var(--terracota)]">{t.cnc.titleLine3}</span>
          </h2>
          <p className="max-w-md text-[color:var(--linen)]/85 font-light text-lg">
            {t.cnc.subtitle}
          </p>
          <div className="mt-8 inline-block text-mono text-[10px] uppercase tracking-widest text-[color:var(--linen)] border border-[color:var(--lime)] px-3 py-1.5">
            <span className="text-[color:var(--lime)]">±0.5 MM</span> · {t.cnc.tag}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
