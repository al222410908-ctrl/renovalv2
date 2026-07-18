import forestImg from "@/assets/forest.webp";
import { Reveal } from "@/components/ui/reveal";
import { useTranslation } from "@/components/LanguageContext";

export function Origen() {
  const { t } = useTranslation();

  return (
    <section
      id="origen"
      className="relative py-24 md:py-32 bg-[color:var(--linen)]"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <Reveal>
          <div className="relative">
            <img
              src={forestImg}
              alt="Pine forest in Oaxaca"
              loading="lazy"
              className="w-full aspect-[4/5] object-cover"
            />
            <span className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[color:var(--terracota)]" />
            <span className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-[color:var(--terracota)]" />
            <span className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-[color:var(--terracota)]" />
            <span className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[color:var(--terracota)]" />
            <div className="absolute -bottom-6 left-6 right-6 bg-[color:var(--mint)] text-[color:var(--linen)] p-4 border-l-4 border-[color:var(--lime)]">
              <div className="text-mono text-[10px] uppercase tracking-widest text-[color:var(--terracota)]">
                {t.navbar.origen}
              </div>
              <div className="font-display text-xl font-bold mt-1 text-mono">
                {t.origen.stampText}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div>
            <div className="text-mono text-[11px] uppercase tracking-[0.35em] text-[color:var(--terracota)] mb-4">
              {t.origen.eyebrow}
            </div>
            <h2 className="text-display text-5xl md:text-6xl text-[color:var(--mint)] mb-8 leading-[0.9]">
              {t.origen.titleLine1}
              <br />
              {t.origen.titleLine2}
              <br />
              <span className="text-[color:var(--terracota)]">{t.origen.titleLine3}</span>
            </h2>
            <div className="space-y-5">
              {t.origen.items.map((it) => (
                <div
                  key={it.t}
                  className="grid grid-cols-[auto_1fr] gap-4 items-start border-l-2 border-[color:var(--terracota)] pl-4 py-1"
                >
                  <span className="text-mono text-xs text-[color:var(--terracota)] mt-1">
                    ◆
                  </span>
                  <div>
                    <div className="font-display text-base font-bold text-[color:var(--mint)] uppercase tracking-tight">
                      {it.t}
                    </div>
                    <div className="text-sm text-[color:var(--mint)]/75 font-light">
                      {it.d}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
