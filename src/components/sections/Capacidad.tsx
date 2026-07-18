import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { Counter } from "@/components/ui/counter";
import { useTranslation } from "@/components/LanguageContext";

const statsConfig = [
  { n: 9000, s: "" },
  { n: 800, s: "K", accent: true },
  { n: 100, s: "%" },
  { n: 10, s: "+" },
  { n: 50, s: "+" },
];

export function Capacidad() {
  const { t } = useTranslation();

  const stats = t.capacidad.stats.map((s, idx) => ({
    ...s,
    ...statsConfig[idx],
  }));

  return (
    <section
      id="capacidad"
      className="relative py-24 md:py-32 bg-[color:var(--linen)]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          number={t.capacidad.eyebrow}
          title={<>{t.capacidad.title.split(" ").map((word, index, arr) => (
            <span key={word}>
              {word}
              {index < arr.length - 1 && <br />}
            </span>
          ))}</>}
        />

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-20">
          {stats.map((k, i) => (
            <Reveal key={k.label} delay={i * 80}>
              <div className="border-t-2 border-[color:var(--mint)] pt-4">
                <div
                  className={`text-4xl md:text-5xl font-semibold leading-none ${
                    k.accent
                      ? "text-[color:var(--lime)] drop-shadow-[0_0_1px_var(--mint)]"
                      : "text-[color:var(--mint)]"
                  }`}
                >
                  <Counter to={k.n} suffix={k.s} />
                </div>
                <div className="text-mono text-[11px] font-semibold text-[color:var(--terracota)] mt-1">
                  {k.u}
                </div>
                <div className="text-xs font-light text-[color:var(--mint)]/85 mt-2 leading-relaxed">
                  {k.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* 8 líneas de servicio */}
        <Reveal>
          <div className="border-t border-[color:var(--mint)]/20 pt-10">
            <div className="text-mono text-[11px] uppercase tracking-[0.35em] text-[color:var(--terracota)] mb-6">
              {t.capacidad.servicesTitle}
            </div>
            <div className="grid md:grid-cols-2 gap-x-10">
              {t.capacidad.servicios.map((s, i) => (
                <div
                  key={s}
                  className="flex items-center justify-between py-4 border-b border-[color:var(--mint)]/15 hover:border-[color:var(--terracota)] transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-mono text-xs text-[color:var(--terracota)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-medium text-[color:var(--mint)] group-hover:text-[color:var(--terracota)] transition-colors">
                      {s}
                    </span>
                  </div>
                  <span className="text-mono text-xs text-[color:var(--mint)]/40 group-hover:text-[color:var(--terracota)] transition-colors">
                    →
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
