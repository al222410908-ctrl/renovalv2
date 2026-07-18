import tarimaImg from "@/assets/product-tarima.webp";
import huacalImg from "@/assets/product-huacal.webp";
import cncImg from "@/assets/product-cnc.webp";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { useTranslation } from "@/components/LanguageContext";

const images = [tarimaImg, huacalImg, cncImg];

export function Fabricamos() {
  const { t } = useTranslation();

  const productItems = t.fabricamos.products.map((p, idx) => ({
    ...p,
    img: images[idx],
    n: `0${idx + 1}`,
  }));

  return (
    <section
      id="fabricamos"
      className="relative py-24 md:py-32 bg-[color:var(--linen)]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          number={t.fabricamos.eyebrow}
          title={<>{t.fabricamos.title.split(" ").map((word, index, arr) => (
            <span key={word}>
              {word}
              {index < arr.length - 1 && <br />}
            </span>
          ))}</>}
          subtitle={t.fabricamos.subtitle}
        />

        <div className="grid md:grid-cols-3 gap-6">
          {productItems.map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
              <a
                href="#contacto"
                className="group relative block aspect-[4/5] overflow-hidden bg-[color:var(--mint)]"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover opacity-70 transition-all duration-[1000ms] group-hover:opacity-30 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--mint)] via-[color:var(--mint)]/60 to-transparent" />
                {/* Corner marks */}
                <span className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[color:var(--terracota)]" />
                <span className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[color:var(--terracota)]" />
                <span className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[color:var(--terracota)]" />
                <span className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[color:var(--terracota)]" />

                <div className="absolute inset-0 flex flex-col justify-between p-7">
                  <div className="flex items-start justify-between">
                    <span className="text-mono text-xs tracking-widest text-[color:var(--terracota)]">
                      {p.n} / 03
                    </span>
                    <span className="text-mono text-[10px] tracking-widest text-[color:var(--linen)]/70">
                      {t.fabricamos.fichaLink}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-display text-4xl md:text-5xl text-[color:var(--linen)] mb-2">
                      {p.title}
                    </h3>
                    <p className="text-mono text-[11px] uppercase tracking-widest text-[color:var(--linen)]/70">
                      {p.sub}
                    </p>

                    {/* Hover ficha técnica */}
                    <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500 overflow-hidden">
                      {p.specs.map(([k, v]) => (
                        <div
                          key={k}
                          className="text-mono text-[10px] uppercase tracking-wider border-t border-[color:var(--terracota)]/50 pt-1"
                        >
                          <div className="text-[color:var(--linen)]/50">{k}</div>
                          <div className="text-[color:var(--lime)]">{v}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
