import { Reveal } from "@/components/ui/reveal";
import { useTranslation } from "@/components/LanguageContext";

export function Proceso() {
  const { t } = useTranslation();

  return (
    <section
      id="proceso"
      className="relative py-24 md:py-32 bg-[color:var(--mint)] text-[color:var(--linen)]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-mono text-[11px] uppercase tracking-[0.35em] text-[color:var(--terracota)] mb-4">
            {t.proceso.eyebrow}
          </div>
          <h2 className="text-display text-5xl md:text-7xl mb-6 leading-[0.9]">
            {t.proceso.titleLine1}
            <br />
            <span className="text-[color:var(--terracota)]">{t.proceso.titleLine2}</span>
          </h2>
          <p className="max-w-xl text-[color:var(--linen)]/80 font-light text-lg mb-16">
            {t.proceso.subtitle}
          </p>
        </Reveal>

        <div className="grid md:grid-cols-5 gap-8">
          {t.proceso.steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 120}>
              <div className="relative">
                <div className="text-display text-7xl md:text-8xl text-[color:var(--terracota)]/30 font-extrabold mb-2">
                  {s.n}
                </div>
                <div className="h-px w-full bg-[color:var(--terracota)] mb-4" />
                <div className="text-mono text-[10px] uppercase tracking-widest text-[color:var(--lime)] mb-2">
                  {t.proceso.stepPrefix} {s.n}
                </div>
                <div className="font-display text-xl font-bold mb-3">
                  {s.t}
                </div>
                <p className="text-sm text-[color:var(--linen)]/75 font-light">
                  {s.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
