import { useEffect, useState } from "react";
import { HeroPlan } from "./HeroPlan";
import { useTranslation } from "@/components/LanguageContext";

export function Hero() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-screen w-full overflow-hidden bg-[color:var(--mint)] text-[color:var(--linen)] pt-28 pb-16"
    >
      <HeroPlan />
      <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--mint-deep)]/70 via-[color:var(--mint)]/60 to-[color:var(--mint)]/90 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-[calc(100vh-11rem)] flex flex-col justify-between gap-16">
        <div>
          <div className="flex items-center gap-3 text-mono text-[11px] uppercase tracking-[0.35em] text-[color:var(--terracota)] mb-6 animate-fade-up">
            <span className="w-8 h-px bg-[color:var(--terracota)]" />
            {t.hero.eyebrow}
          </div>
          <h1 className="text-display text-[15vw] md:text-[10.5vw] leading-[0.85] text-[color:var(--linen)]">
            <span className="block animate-reveal" style={{ animationDelay: "0.15s" }}>
              {t.hero.titleLine1}
            </span>
            <span
              className="block animate-reveal text-[color:var(--terracota)]"
              style={{ animationDelay: "0.55s" }}
            >
              {t.hero.titleLine2}
            </span>
            <span className="block animate-reveal" style={{ animationDelay: "0.95s" }}>
              {t.hero.titleLine3}
            </span>
          </h1>
          <p
            className="mt-8 max-w-xl text-[color:var(--linen)]/85 text-lg font-light leading-relaxed animate-fade-up"
            style={{ animationDelay: "1.3s" }}
          >
            {t.hero.subtitle}
          </p>
          <div
            className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up"
            style={{ animationDelay: "1.55s" }}
          >
            <a
              href="#contacto"
              className="text-mono text-xs uppercase tracking-widest bg-[color:var(--lime)] text-[color:var(--mint)] px-8 py-4 font-bold hover:translate-x-1 transition animate-pulse-lime focus:outline-none focus:ring-2 focus:ring-[color:var(--lime)] focus:ring-offset-2 focus:ring-offset-[color:var(--mint)]"
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href="#capacidad"
              className="text-mono text-xs uppercase tracking-widest text-[color:var(--linen)] border-b border-[color:var(--terracota)] pb-1 hover:text-[color:var(--terracota)] transition"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>

        {/* Bottom callouts (technical annotations) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-mono text-[11px] uppercase tracking-widest">
          {[
            { k: t.hero.stats.tolerance, v: "±3 MM", accent: true },
            { k: t.hero.stats.plant, v: "12,000 M²" },
            { k: t.hero.stats.traceability, v: "LOTE #04521" },
            { k: t.hero.stats.certified, v: "NOM-144 · HT" },
          ].map((c) => (
            <div key={c.k} className="border-t border-[color:var(--terracota)]/60 pt-3">
              <div className="text-[color:var(--linen)]/60 mb-1">{c.k}</div>
              <div
                className={`text-base ${
                  c.accent ? "text-[color:var(--lime)]" : "text-[color:var(--linen)]"
                }`}
              >
                {c.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
