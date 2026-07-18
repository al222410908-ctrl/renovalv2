import { Reveal } from "@/components/ui/reveal";
import { useTranslation } from "@/components/LanguageContext";

const clientes = [
  "NOVAPRINT",
  "AMESA",
  "ALUTUB",
  "AMA PARTS",
  "APIC",
  "ECOSHELL",
  "ITALIKA",
  "SIGPACK",
  "TEXENSY",
  "PRISPAPIER",
  "NISSIN",
  "PAPIER",
];

export function Clientes() {
  const { t } = useTranslation();

  return (
    <section
      id="clientes"
      className="relative py-20 bg-[color:var(--mint-deep)] text-[color:var(--linen)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <Reveal>
          <div className="text-mono text-[11px] uppercase tracking-[0.35em] text-[color:var(--terracota)] mb-3">
            {t.clientes.eyebrow}
          </div>
          <h2 className="text-display text-4xl md:text-6xl leading-[0.9]">
            {t.clientes.titleLine1}
            <br />
            <span className="text-[color:var(--terracota)]">
              {t.clientes.titleLine2}
            </span>
          </h2>
        </Reveal>
      </div>
      <div className="relative">
        <div className="flex animate-marquee-slow whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center gap-14 pr-14">
              {clientes.map((c) => (
                <span
                  key={c}
                  className="font-display font-extrabold text-3xl md:text-4xl text-[color:var(--linen)]/40 hover:text-[color:var(--terracota)] transition-colors tracking-tight"
                >
                  {c}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
