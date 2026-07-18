import { Reveal } from "@/components/ui/reveal";
import { useTranslation } from "@/components/LanguageContext";

export function QuienesSomos() {
  const { t } = useTranslation();

  return (
    <section
      id="quienes"
      className="relative py-24 md:py-32 bg-[color:var(--linen)]"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-10 items-start">
        <div className="md:col-span-5">
          <Reveal>
            <div className="text-mono text-[11px] uppercase tracking-[0.35em] text-[color:var(--terracota)] mb-4">
              {t.quienes.eyebrow}
            </div>
            <h2 className="text-display text-5xl md:text-6xl text-[color:var(--mint)] leading-[0.9]">
              {t.quienes.title.split(" ").map((word, index, arr) => (
                <span key={word}>
                  {word}
                  {index < arr.length - 1 && <br />}
                </span>
              ))}
            </h2>
          </Reveal>
        </div>
        <div className="md:col-span-7 space-y-6 text-[color:var(--mint)]/85 font-light text-lg">
          <Reveal delay={100}>
            <p>{t.quienes.paragraph1}</p>
          </Reveal>
          <Reveal delay={200}>
            <p>{t.quienes.paragraph2}</p>
          </Reveal>
          <Reveal delay={300}>
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[color:var(--mint)]/15">
              {t.quienes.stats.map(([n, l]) => (
                <div key={l}>
                  <div className="text-mono text-3xl text-[color:var(--mint)] font-semibold">
                    {n}
                  </div>
                  <div className="text-mono text-[10px] uppercase tracking-widest text-[color:var(--mint)]/60">
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
