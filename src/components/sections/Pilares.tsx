import { Reveal } from "@/components/ui/reveal";
import { useTranslation } from "@/components/LanguageContext";

export function Pilares() {
  const { t } = useTranslation();

  return (
    <section className="relative py-24 md:py-32 bg-[color:var(--mint)] text-[color:var(--linen)]">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-mono text-[11px] uppercase tracking-[0.35em] text-[color:var(--terracota)] mb-4">
            {t.pilares.eyebrow}
          </div>
          <h2 className="text-display text-5xl md:text-7xl text-[color:var(--linen)] mb-16 max-w-3xl leading-[0.9]">
            {t.pilares.title}
            <br />
            <span className="text-[color:var(--terracota)]">{t.pilares.subtitle}</span>
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-4 gap-6">
          {t.pilares.items.map((p, i) => (
            <Reveal key={p.n} delay={i * 100}>
              <div className="relative border border-[color:var(--terracota)]/40 p-6 h-full bg-[color:var(--mint-deep)]/40 hover:border-[color:var(--lime)] transition-colors">
                <span className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[color:var(--terracota)]" />
                <span className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[color:var(--terracota)]" />
                <span className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-[color:var(--terracota)]" />
                <span className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[color:var(--terracota)]" />
                <div className="text-mono text-xs text-[color:var(--terracota)] mb-6">
                  {p.n}
                </div>
                <div className="font-display text-2xl font-bold mb-3 tracking-tight">
                  {p.t}
                </div>
                <p className="text-sm text-[color:var(--linen)]/70 font-light mb-6">
                  {p.d}
                </p>
                <div className="text-mono text-xs text-[color:var(--lime)] border-t border-[color:var(--terracota)]/30 pt-3">
                  {p.spec}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
