import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import heroImg from "@/assets/hero-tarimas.jpg";
import tarimaImg from "@/assets/product-tarima.jpg";
import huacalImg from "@/assets/product-huacal.jpg";
import cncImg from "@/assets/product-cnc.jpg";
import processCncImg from "@/assets/process-cnc.jpg";
import forestImg from "@/assets/forest.jpg";
import warehouseImg from "@/assets/warehouse.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

/* -------- hooks -------- */
function useInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    if (!ref.current || seen) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } },
      { threshold }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [seen, threshold]);
  return { ref, seen };
}

function Counter({ to, suffix = "", prefix = "", duration = 1800 }: { to: number; suffix?: string; prefix?: string; duration?: number }) {
  const { ref, seen } = useInView<HTMLSpanElement>(0.4);
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!seen) return;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen, to, duration]);
  return <span ref={ref} className="text-mono">{prefix}{n.toLocaleString("es-MX")}{suffix}</span>;
}

function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const { ref, seen } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}ms` }}
      className={`${seen ? "animate-fade-up" : "opacity-0"} ${className}`}
    >
      {children}
    </div>
  );
}

/* -------- technical frame (corner marks) -------- */
function TechFrame({ children, color = "terracota", tag, callout, calloutAccent = false, className = "" }: {
  children: ReactNode;
  color?: "terracota" | "linen" | "mint";
  tag?: string;
  callout?: string;
  calloutAccent?: boolean;
  className?: string;
}) {
  const stroke = color === "linen" ? "text-[color:var(--linen)]" : color === "mint" ? "text-[color:var(--mint)]" : "text-[color:var(--terracota)]";
  return (
    <div className={`relative ${className}`}>
      {children}
      <span className={`absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 ${stroke.replace('text-','border-')}`} />
      <span className={`absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 ${stroke.replace('text-','border-')}`} />
      <span className={`absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 ${stroke.replace('text-','border-')}`} />
      <span className={`absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 ${stroke.replace('text-','border-')}`} />
      {tag && (
        <span className={`text-mono text-[10px] tracking-widest absolute -top-2 left-6 px-2 bg-[color:var(--linen)] ${stroke}`}>
          {tag}
        </span>
      )}
      {callout && (
        <span className={`text-mono text-[10px] tracking-widest absolute -bottom-2 right-6 px-2 ${calloutAccent ? "bg-[color:var(--lime)] text-[color:var(--mint)]" : "bg-[color:var(--linen)] " + stroke}`}>
          {callout}
        </span>
      )}
    </div>
  );
}

/* -------- animated hero canvas: tarima assembly -------- */
function HeroPlan() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.22]"
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#C87A53" strokeWidth="0.4" opacity="0.35" />
        </pattern>
      </defs>
      <rect width="800" height="600" fill="url(#grid)" />

      {/* Board slats top (stringers) */}
      <g stroke="#F9F6F0" strokeWidth="1.5" fill="none">
        {[0, 1, 2, 3, 4, 5, 6].map((i) => {
          const y = 180 + i * 30;
          return (
            <rect
              key={`t-${i}`}
              x="150" y={y} width="500" height="16"
              style={{
                strokeDasharray: 1050,
                strokeDashoffset: 1050,
                animation: `draw-line 1.6s cubic-bezier(0.4,0,0.2,1) forwards`,
                animationDelay: `${0.4 + i * 0.35}s`,
              }}
            />
          );
        })}
      </g>

      {/* Cross stringers */}
      <g stroke="#C87A53" strokeWidth="1.5" fill="none">
        {[170, 390, 610].map((x, i) => (
          <rect
            key={`s-${i}`}
            x={x} y="180" width="20" height="196"
            style={{
              strokeDasharray: 500,
              strokeDashoffset: 500,
              animation: `draw-line 1.4s cubic-bezier(0.4,0,0.2,1) forwards`,
              animationDelay: `${0.15 + i * 0.2}s`,
            }}
          />
        ))}
      </g>

      {/* Dimension lines */}
      <g stroke="#F9F6F0" strokeWidth="0.75" opacity="0.85" fill="none">
        <line x1="150" y1="420" x2="650" y2="420"
          style={{ strokeDasharray: 500, strokeDashoffset: 500, animation: `draw-line 1s ease-out forwards`, animationDelay: `3s` }} />
        <line x1="150" y1="415" x2="150" y2="425" />
        <line x1="650" y1="415" x2="650" y2="425" />
      </g>
      <text x="400" y="440" textAnchor="middle" fill="#F9F6F0" fontSize="10" fontFamily="JetBrains Mono, monospace" opacity="0.9" className="animate-fade-up" style={{ animationDelay: "3.3s" } as React.CSSProperties}>
        1200 MM · ±3
      </text>

      {/* Callout circle */}
      <g opacity="0.9" className="animate-fade-up" style={{ animationDelay: "3.5s" } as React.CSSProperties}>
        <circle cx="700" cy="200" r="26" fill="none" stroke="#A3E14B" strokeWidth="1.2" />
        <text x="700" y="204" textAnchor="middle" fill="#A3E14B" fontSize="9" fontFamily="JetBrains Mono, monospace">HT · 56°C</text>
      </g>
    </svg>
  );
}

/* ============================= PAGE ============================= */
function Index() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="min-h-screen bg-[color:var(--linen)] text-[color:var(--mint)] overflow-x-hidden">
      {/* NAV */}
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "bg-[color:var(--linen)]/95 backdrop-blur border-b border-[color:var(--mint)]/15" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[color:var(--mint)] flex items-center justify-center">
              <span className="text-mono text-[color:var(--lime)] text-xs font-bold">R</span>
            </div>
            <span className="font-display font-extrabold text-xl tracking-tight text-[color:var(--mint)]">RENOVAL</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-mono text-[11px] uppercase tracking-widest text-[color:var(--mint)]/75">
            <a href="#fabricamos" className="hover:text-[color:var(--terracota)] transition">Fabricamos</a>
            <a href="#quienes" className="hover:text-[color:var(--terracota)] transition">Quiénes somos</a>
            <a href="#capacidad" className="hover:text-[color:var(--terracota)] transition">Capacidad</a>
            <a href="#proceso" className="hover:text-[color:var(--terracota)] transition">Proceso</a>
            <a href="#origen" className="hover:text-[color:var(--terracota)] transition">Origen</a>
            <a href="#contacto" className="hover:text-[color:var(--terracota)] transition">Contacto</a>
          </nav>
          <a href="#contacto" className="text-mono text-[11px] uppercase tracking-widest bg-[color:var(--lime)] text-[color:var(--mint)] px-4 py-2.5 font-semibold hover:bg-[color:var(--mint)] hover:text-[color:var(--lime)] transition focus:outline-none focus:ring-2 focus:ring-[color:var(--lime)] focus:ring-offset-2 focus:ring-offset-[color:var(--linen)]">
            Cotizar →
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-screen w-full overflow-hidden bg-[color:var(--mint)] text-[color:var(--linen)] pt-28 pb-16">
        <HeroPlan />
        <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--mint-deep)]/70 via-[color:var(--mint)]/60 to-[color:var(--mint)]/90 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-[calc(100vh-11rem)] flex flex-col justify-between gap-16">
          <div>
            <div className="flex items-center gap-3 text-mono text-[11px] uppercase tracking-[0.35em] text-[color:var(--terracota)] mb-6 animate-fade-up">
              <span className="w-8 h-px bg-[color:var(--terracota)]" />
              Fabricamos · +10 años de trayectoria industrial
            </div>
            <h1 className="text-display text-[15vw] md:text-[10.5vw] leading-[0.85] text-[color:var(--linen)]">
              <span className="block animate-reveal" style={{ animationDelay: "0.15s" }}>TARIMAS</span>
              <span className="block animate-reveal text-[color:var(--terracota)]" style={{ animationDelay: "0.55s" }}>HUACALES</span>
              <span className="block animate-reveal" style={{ animationDelay: "0.95s" }}>CNC</span>
            </h1>
            <p className="mt-8 max-w-xl text-[color:var(--linen)]/85 text-lg font-light leading-relaxed animate-fade-up" style={{ animationDelay: "1.3s" }}>
              Embalaje industrial de precisión milimétrica. Madera certificada y cadena logística que escala junto con tu operación.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up" style={{ animationDelay: "1.55s" }}>
              <a href="#contacto" className="text-mono text-xs uppercase tracking-widest bg-[color:var(--lime)] text-[color:var(--mint)] px-8 py-4 font-bold hover:translate-x-1 transition animate-pulse-lime focus:outline-none focus:ring-2 focus:ring-[color:var(--lime)] focus:ring-offset-2 focus:ring-offset-[color:var(--mint)]">
                Cotizar mi proyecto →
              </a>
              <a href="#capacidad" className="text-mono text-xs uppercase tracking-widest text-[color:var(--linen)] border-b border-[color:var(--terracota)] pb-1 hover:text-[color:var(--terracota)] transition">
                Ver capacidad
              </a>
            </div>
          </div>

          {/* Bottom callouts (technical annotations) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-mono text-[11px] uppercase tracking-widest">
            {[
              { k: "Tolerancia", v: "±3 MM", accent: true },
              { k: "Planta", v: "12,000 M²" },
              { k: "Trazabilidad", v: "LOTE #04521" },
              { k: "Certificado", v: "NOM-144 · HT" },
            ].map((c) => (
              <div key={c.k} className="border-t border-[color:var(--terracota)]/60 pt-3">
                <div className="text-[color:var(--linen)]/60 mb-1">{c.k}</div>
                <div className={`text-base ${c.accent ? "text-[color:var(--lime)]" : "text-[color:var(--linen)]"}`}>{c.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="bg-[color:var(--mint-deep)] border-y border-[color:var(--terracota)]/30 overflow-hidden py-4">
        <div className="flex animate-marquee whitespace-nowrap text-mono text-sm tracking-widest text-[color:var(--linen)]">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center gap-10 pr-10">
              {[
                "TARIMA NUEVA", "◆", "TARIMA RECICLADA", "◆", "HUACALES", "◆",
                "COMPONENTES CNC", "◆", "SELLO HT · NOM-144", "◆", "TRAZABILIDAD POR LOTE", "◆",
                "ISPM-15", "◆", "DISEÑO A LA MEDIDA", "◆",
              ].map((t, i) => (
                <span key={i} className={t === "◆" ? "text-[color:var(--terracota)]" : ""}>{t}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* FABRICAMOS */}
      <section id="fabricamos" className="relative py-24 md:py-32 bg-[color:var(--linen)]">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="grid md:grid-cols-[minmax(0,1fr)_auto] items-end gap-6 mb-16">
              <div>
                <div className="text-mono text-[11px] uppercase tracking-[0.35em] text-[color:var(--terracota)] mb-4">01 · Lo que fabricamos</div>
                <h2 className="text-display text-5xl md:text-7xl text-[color:var(--mint)]">
                  ESTO<br />FABRICAMOS.
                </h2>
              </div>
              <p className="text-mono text-xs uppercase tracking-widest text-[color:var(--mint)]/70 max-w-xs md:text-right">
                A la medida · Madera de origen legal · Estándar escrito
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                img: tarimaImg, n: "01", title: "TARIMAS",
                sub: "Nueva · Reciclada · Con tacón · A la medida",
                specs: [["Dim.", "1200×1000 MM"], ["Tolerancia", "±3 MM"], ["Madera", "PINO CERTIFICADO"], ["Carga", "1,500 KG"]],
              },
              {
                img: huacalImg, n: "02", title: "HUACALES",
                sub: "Cajas y plataformas de exportación con Sello HT",
                specs: [["Norma", "NOM-144-SEMARNAT"], ["Sello", "HT · ISPM-15"], ["Uso", "EXPORTACIÓN"], ["Lote", "TRAZABLE"]],
              },
              {
                img: cncImg, n: "03", title: "CNC",
                sub: "Componentes precisos cortados a especificación",
                specs: [["Precisión", "±0.5 MM"], ["Repetibilidad", "100%"], ["Formato", "DXF · STEP"], ["Línea", "LISTO ENSAMBLE"]],
              },
            ].map((p, i) => (
              <Reveal key={p.title} delay={i * 120}>
                <a href="#contacto" className="group relative block aspect-[4/5] overflow-hidden bg-[color:var(--mint)]">
                  <img src={p.img} alt={p.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-70 transition-all duration-[1000ms] group-hover:opacity-30 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--mint)] via-[color:var(--mint)]/60 to-transparent" />
                  {/* Corner marks */}
                  <span className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[color:var(--terracota)]" />
                  <span className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[color:var(--terracota)]" />
                  <span className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[color:var(--terracota)]" />
                  <span className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[color:var(--terracota)]" />

                  <div className="absolute inset-0 flex flex-col justify-between p-7">
                    <div className="flex items-start justify-between">
                      <span className="text-mono text-xs tracking-widest text-[color:var(--terracota)]">{p.n} / 03</span>
                      <span className="text-mono text-[10px] tracking-widest text-[color:var(--linen)]/70">FICHA →</span>
                    </div>
                    <div>
                      <h3 className="text-display text-4xl md:text-5xl text-[color:var(--linen)] mb-2">{p.title}</h3>
                      <p className="text-mono text-[11px] uppercase tracking-widest text-[color:var(--linen)]/70">{p.sub}</p>

                      {/* Hover ficha técnica */}
                      <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500 overflow-hidden">
                        {p.specs.map(([k, v]) => (
                          <div key={k} className="text-mono text-[10px] uppercase tracking-wider border-t border-[color:var(--terracota)]/50 pt-1">
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

      {/* QUIÉNES SOMOS */}
      <section id="quienes" className="relative py-24 md:py-32 bg-[color:var(--linen)]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <Reveal>
              <div className="text-mono text-[11px] uppercase tracking-[0.35em] text-[color:var(--terracota)] mb-4">02 · Quiénes somos</div>
              <h2 className="text-display text-5xl md:text-6xl text-[color:var(--mint)] leading-[0.9]">
                SOMOS<br />RENOVAL.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-7 space-y-6 text-[color:var(--mint)]/85 font-light text-lg">
            <Reveal delay={100}>
              <p>
                Una operación construida para volumen alto sin perder precisión. Diseñamos y fabricamos embalaje industrial de madera para líneas de manufactura que no pueden permitirse fallas de suministro.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p>
                Cobertura en <span className="text-mono text-base text-[color:var(--terracota)]">Toluca, Edo. Méx. y Querétaro</span>, planta propia de <span className="text-mono text-base text-[color:var(--terracota)]">12,000 m²</span>, madera certificada y procesos auditables pieza a pieza.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[color:var(--mint)]/15">
                {[
                  ["+10", "AÑOS"],
                  ["12K", "M² PLANTA"],
                  ["100%", "TRAZABLE"],
                ].map(([n, l]) => (
                  <div key={l}>
                    <div className="text-mono text-3xl text-[color:var(--mint)] font-semibold">{n}</div>
                    <div className="text-mono text-[10px] uppercase tracking-widest text-[color:var(--mint)]/60">{l}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PILARES */}
      <section className="relative py-24 md:py-32 bg-[color:var(--mint)] text-[color:var(--linen)]">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="text-mono text-[11px] uppercase tracking-[0.35em] text-[color:var(--terracota)] mb-4">03 · Filosofía</div>
            <h2 className="text-display text-5xl md:text-7xl text-[color:var(--linen)] mb-16 max-w-3xl leading-[0.9]">
              CUATRO PILARES.<br />
              <span className="text-[color:var(--terracota)]">NINGUNA EXCUSA.</span>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { n: "P.01", t: "CALIDAD", d: "Control dimensional pieza a pieza. Si algo no cumple la ficha, no sale de línea.", spec: "±3 MM" },
              { n: "P.02", t: "COMPROMISO", d: "Entregas planeadas con visibilidad de lote y fecha. Cero improvisación.", spec: "24 HRS" },
              { n: "P.03", t: "SUSTENTABILIDAD", d: "Madera de aserraderos certificados en Oaxaca. Reciclaje total de merma.", spec: "100% FSC" },
              { n: "P.04", t: "INNOVACIÓN", d: "Diseño paramétrico, ficha técnica digital, trazabilidad por QR.", spec: "CAD / CNC" },
            ].map((p, i) => (
              <Reveal key={p.n} delay={i * 100}>
                <div className="relative border border-[color:var(--terracota)]/40 p-6 h-full bg-[color:var(--mint-deep)]/40 hover:border-[color:var(--lime)] transition-colors">
                  <span className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[color:var(--terracota)]" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[color:var(--terracota)]" />
                  <span className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-[color:var(--terracota)]" />
                  <span className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[color:var(--terracota)]" />
                  <div className="text-mono text-xs text-[color:var(--terracota)] mb-6">{p.n}</div>
                  <div className="font-display text-2xl font-bold mb-3 tracking-tight">{p.t}</div>
                  <p className="text-sm text-[color:var(--linen)]/70 font-light mb-6">{p.d}</p>
                  <div className="text-mono text-xs text-[color:var(--lime)] border-t border-[color:var(--terracota)]/30 pt-3">{p.spec}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CAPACIDAD */}
      <section id="capacidad" className="relative py-24 md:py-32 bg-[color:var(--linen)]">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="text-mono text-[11px] uppercase tracking-[0.35em] text-[color:var(--terracota)] mb-4">04 · Capacidad</div>
            <h2 className="text-display text-5xl md:text-7xl text-[color:var(--mint)] mb-16 leading-[0.9]">
              LA PLANTA<br />EN CIFRAS.
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-20">
            {[
              { n: 9000, s: "", u: "M³", label: "CAPACIDAD ANUAL" },
              { n: 800, s: "K", u: "PZS/AÑO", label: "PRODUCCIÓN", accent: true },
              { n: 100, s: "%", u: "", label: "TRAZABILIDAD" },
              { n: 10, s: "+", u: "AÑOS", label: "TRAYECTORIA" },
              { n: 50, s: "+", u: "", label: "CLIENTES ACTIVOS" },
            ].map((k, i) => (
              <Reveal key={k.label} delay={i * 80}>
                <div className="border-t-2 border-[color:var(--mint)] pt-4">
                  <div className={`text-4xl md:text-5xl font-semibold leading-none ${k.accent ? "text-[color:var(--lime)] drop-shadow-[0_0_1px_var(--mint)]" : "text-[color:var(--mint)]"}`}>
                    <Counter to={k.n} suffix={k.s} />
                  </div>
                  <div className="text-mono text-[10px] uppercase tracking-widest text-[color:var(--terracota)] mt-1">{k.u}</div>
                  <div className="text-mono text-[10px] uppercase tracking-widest text-[color:var(--mint)]/60 mt-3">{k.label}</div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* 8 líneas de servicio */}
          <Reveal>
            <div className="border-t border-[color:var(--mint)]/20 pt-10">
              <div className="text-mono text-[11px] uppercase tracking-[0.35em] text-[color:var(--terracota)] mb-6">Líneas de servicio</div>
              <div className="grid md:grid-cols-2 gap-x-10">
                {[
                  "Tarimas nuevas a la medida",
                  "Tarimas recicladas certificadas",
                  "Huacales y cajas industriales",
                  "Componentes CNC de madera",
                  "Tratamiento térmico HT · ISPM-15",
                  "Marcado y trazabilidad por lote",
                  "Diseño paramétrico y ficha técnica",
                  "Recolección y reciclaje de merma",
                ].map((s, i) => (
                  <div key={s} className="flex items-center justify-between py-4 border-b border-[color:var(--mint)]/15 hover:border-[color:var(--terracota)] transition-colors group">
                    <div className="flex items-center gap-4">
                      <span className="text-mono text-xs text-[color:var(--terracota)]">{String(i + 1).padStart(2, "0")}</span>
                      <span className="font-medium text-[color:var(--mint)] group-hover:text-[color:var(--terracota)] transition-colors">{s}</span>
                    </div>
                    <span className="text-mono text-xs text-[color:var(--mint)]/40 group-hover:text-[color:var(--terracota)] transition-colors">→</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PRECISIÓN CNC — full bleed */}
      <section className="relative min-h-[85vh] flex items-end overflow-hidden">
        <img src={processCncImg} alt="CNC cortando madera" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--mint)]/95 via-[color:var(--mint)]/60 to-transparent" />
        {/* corner marks */}
        <span className="absolute top-6 left-6 w-6 h-6 border-t-2 border-l-2 border-[color:var(--linen)]" />
        <span className="absolute top-6 right-6 w-6 h-6 border-t-2 border-r-2 border-[color:var(--linen)]" />
        <span className="absolute bottom-6 left-6 w-6 h-6 border-b-2 border-l-2 border-[color:var(--linen)]" />
        <span className="absolute bottom-6 right-6 w-6 h-6 border-b-2 border-r-2 border-[color:var(--linen)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
          <Reveal>
            <div className="text-mono text-[11px] uppercase tracking-[0.35em] text-[color:var(--lime)] mb-4">05 · Precisión CNC</div>
            <h2 className="text-display text-6xl md:text-8xl text-[color:var(--linen)] mb-6 leading-[0.85]">
              CORTAMOS<br />
              LO QUE NADIE<br />
              <span className="text-[color:var(--terracota)]">PUEDE.</span>
            </h2>
            <p className="max-w-md text-[color:var(--linen)]/85 font-light text-lg">
              Componentes a especificación milimétrica. Repetibles, trazables, listos para línea.
            </p>
            <div className="mt-8 inline-block text-mono text-[10px] uppercase tracking-widest text-[color:var(--linen)] border border-[color:var(--lime)] px-3 py-1.5">
              <span className="text-[color:var(--lime)]">±0.5 MM</span> · REPETIBILIDAD 100%
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROCESO */}
      <section id="proceso" className="relative py-24 md:py-32 bg-[color:var(--mint)] text-[color:var(--linen)]">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="text-mono text-[11px] uppercase tracking-[0.35em] text-[color:var(--terracota)] mb-4">06 · Proceso</div>
            <h2 className="text-display text-5xl md:text-7xl mb-6 leading-[0.9]">
              DEL PEDIDO<br />
              <span className="text-[color:var(--terracota)]">A LA ENTREGA.</span>
            </h2>
            <p className="max-w-xl text-[color:var(--linen)]/80 font-light text-lg mb-16">
              Si algo no está listo a tiempo, lo sabrás <span className="text-[color:var(--lime)]">antes</span> que tu operación lo note.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              { n: "01", t: "Diagnóstico", d: "Carga, almacenamiento, frecuencia y destino. Definimos requerimientos técnicos y normativos." },
              { n: "02", t: "Diseño y cotización", d: "Especificaciones dimensionales, resistencia, madera y ficha técnica firmada." },
              { n: "03", t: "Producción", d: "Madera de aserradero certificado, corte CNC, ensamble bajo estándar escrito." },
              { n: "04", t: "Control de calidad", d: "Muestreo dimensional al final de línea. Si no pasa la ficha, no sale de planta." },
              { n: "05", t: "Entrega y trazabilidad", d: "Trazabilidad por lote: fecha, origen de madera, sello HT y responsable de línea." },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 120}>
                <div className="relative">
                  <div className="text-display text-7xl md:text-8xl text-[color:var(--terracota)]/30 font-extrabold mb-2">{s.n}</div>
                  <div className="h-px w-full bg-[color:var(--terracota)] mb-4" />
                  <div className="text-mono text-[10px] uppercase tracking-widest text-[color:var(--lime)] mb-2">PASO {s.n}</div>
                  <div className="font-display text-xl font-bold mb-3">{s.t}</div>
                  <p className="text-sm text-[color:var(--linen)]/75 font-light">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ORIGEN */}
      <section id="origen" className="relative py-24 md:py-32 bg-[color:var(--linen)]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="relative">
              <img src={forestImg} alt="Bosque de pinos en Oaxaca" loading="lazy" className="w-full aspect-[4/5] object-cover" />
              <span className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[color:var(--terracota)]" />
              <span className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-[color:var(--terracota)]" />
              <span className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-[color:var(--terracota)]" />
              <span className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[color:var(--terracota)]" />
              <div className="absolute -bottom-6 left-6 right-6 bg-[color:var(--mint)] text-[color:var(--linen)] p-4 border-l-4 border-[color:var(--lime)]">
                <div className="text-mono text-[10px] uppercase tracking-widest text-[color:var(--terracota)]">Origen</div>
                <div className="font-display text-xl font-bold mt-1">100% TALA LEGAL · OAXACA</div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div>
              <div className="text-mono text-[11px] uppercase tracking-[0.35em] text-[color:var(--terracota)] mb-4">07 · Origen responsable</div>
              <h2 className="text-display text-5xl md:text-6xl text-[color:var(--mint)] mb-8 leading-[0.9]">
                MADERA QUE<br />REGRESA<br /><span className="text-[color:var(--terracota)]">AL BOSQUE.</span>
              </h2>
              <div className="space-y-5">
                {[
                  { t: "Trazabilidad desde origen", d: "Madera de comunidades forestales de Oaxaca bajo estudio CONAFOR / FSC." },
                  { t: "Reforestación", d: "Contribución por m³ aprovechado. Reporte anual de compensación." },
                  { t: "Reciclaje total de merma", d: "100% de la merma se recicla en subproductos y biomasa." },
                  { t: "Sello HT · ISPM-15", d: "NOM-144-SEMARNAT-2017. Tratamiento térmico certificado para exportación." },
                ].map((it) => (
                  <div key={it.t} className="grid grid-cols-[auto_1fr] gap-4 items-start border-l-2 border-[color:var(--terracota)] pl-4 py-1">
                    <span className="text-mono text-xs text-[color:var(--terracota)] mt-1">◆</span>
                    <div>
                      <div className="font-display text-base font-bold text-[color:var(--mint)] uppercase tracking-tight">{it.t}</div>
                      <div className="text-sm text-[color:var(--mint)]/75 font-light">{it.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CLIENTES MARQUEE */}
      <section id="clientes" className="relative py-20 bg-[color:var(--mint-deep)] text-[color:var(--linen)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
          <Reveal>
            <div className="text-mono text-[11px] uppercase tracking-[0.35em] text-[color:var(--terracota)] mb-3">08 · Clientes</div>
            <h2 className="text-display text-4xl md:text-6xl leading-[0.9]">
              +50 EMPRESAS QUE<br /><span className="text-[color:var(--terracota)]">NO PUEDEN FALLAR.</span>
            </h2>
          </Reveal>
        </div>
        <div className="relative">
          <div className="flex animate-marquee-slow whitespace-nowrap">
            {Array.from({ length: 2 }).map((_, k) => (
              <div key={k} className="flex items-center gap-14 pr-14">
                {["NOVAPRINT", "AMESA", "ALUTUB", "AMA PARTS", "APIC", "ECOSHELL", "ITALIKA", "SIGPACK", "TEXENSY", "PRISPAPIER", "NISSIN", "PAPIER"].map((c) => (
                  <span key={c} className="font-display font-extrabold text-3xl md:text-4xl text-[color:var(--linen)]/40 hover:text-[color:var(--terracota)] transition-colors tracking-tight">
                    {c}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO — DIAGNÓSTICO */}
      <section id="contacto" className="relative overflow-hidden bg-[color:var(--linen)]">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-16">
          <div>
            <div className="text-mono text-[11px] uppercase tracking-[0.35em] text-[color:var(--terracota)] mb-4">09 · Diagnóstico</div>
            <h2 className="text-display text-5xl md:text-7xl text-[color:var(--mint)] mb-6 leading-[0.88]">
              SOLICITA TU<br />
              FICHA<br />
              <span className="text-[color:var(--terracota)]">TÉCNICA.</span>
            </h2>
            <p className="text-[color:var(--mint)]/80 max-w-md mb-10 font-light text-lg">
              Respuesta en <span className="text-mono text-base text-[color:var(--mint)]">24 hrs</span>. Evaluación de normativas NOM-144, ISPM-15 y trazabilidad por lote.
            </p>

            <div className="space-y-5 border-t border-[color:var(--mint)]/15 pt-8">
              <div>
                <div className="text-mono text-[10px] uppercase tracking-widest text-[color:var(--terracota)] mb-1">Teléfono</div>
                <a href="tel:7221936801" className="text-mono text-xl text-[color:var(--mint)] hover:text-[color:var(--terracota)] block">722 193 6801</a>
                <a href="tel:7227501071" className="text-mono text-xl text-[color:var(--mint)] hover:text-[color:var(--terracota)] block">722 750 1071</a>
              </div>
              <div>
                <div className="text-mono text-[10px] uppercase tracking-widest text-[color:var(--terracota)] mb-1">Web</div>
                <a href="https://renovaltarimas.mx" target="_blank" rel="noreferrer" className="text-mono text-lg text-[color:var(--mint)] hover:text-[color:var(--terracota)]">renovaltarimas.mx</a>
              </div>
              <div>
                <div className="text-mono text-[10px] uppercase tracking-widest text-[color:var(--terracota)] mb-1">Planta</div>
                <p className="text-[color:var(--mint)]/85 text-sm leading-relaxed">
                  Adolfo López Mateos 110, San Pedro,<br />
                  52105 San Mateo Atenco, Estado de México.
                </p>
              </div>
            </div>
          </div>

          {/* FORM */}
          <Reveal delay={150}>
            <form
              onSubmit={(e) => { e.preventDefault(); alert("Solicitud enviada. Te contactamos en 24 hrs."); }}
              className="relative bg-[color:var(--mint)] text-[color:var(--linen)] p-8 md:p-10 border border-[color:var(--terracota)]/40"
            >
              <span className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-[color:var(--terracota)]" />
              <span className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-[color:var(--terracota)]" />
              <span className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-[color:var(--terracota)]" />
              <span className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-[color:var(--terracota)]" />

              <div className="flex items-center justify-between mb-8">
                <div className="text-mono text-[10px] uppercase tracking-widest text-[color:var(--terracota)]">FORM · DIAG-001</div>
                <div className="text-mono text-[10px] uppercase tracking-widest text-[color:var(--lime)]">REV. 2025</div>
              </div>

              <div className="space-y-5">
                {[
                  { l: "Empresa", n: "empresa", ph: "Razón social" },
                  { l: "Contacto · Correo", n: "email", ph: "correo@empresa.mx", type: "email" },
                  { l: "Tipo de carga y destino", n: "carga", ph: "Ej. Auto-partes / exportación EEUU" },
                  { l: "Volumen estimado", n: "volumen", ph: "Ej. 500 pzs/mes" },
                ].map((f) => (
                  <div key={f.n}>
                    <label className="text-mono text-[10px] uppercase tracking-widest text-[color:var(--linen)]/60 block mb-1.5">{f.l}</label>
                    <input
                      name={f.n}
                      type={f.type || "text"}
                      placeholder={f.ph}
                      required
                      className="w-full bg-transparent border-b border-[color:var(--linen)]/25 py-2 text-[color:var(--linen)] placeholder:text-[color:var(--linen)]/30 focus:outline-none focus:border-[color:var(--lime)] transition"
                    />
                  </div>
                ))}
                <div>
                  <label className="text-mono text-[10px] uppercase tracking-widest text-[color:var(--linen)]/60 block mb-1.5">Principal desafío logístico</label>
                  <textarea
                    name="desafio"
                    rows={3}
                    placeholder="Describe brevemente"
                    className="w-full bg-transparent border-b border-[color:var(--linen)]/25 py-2 text-[color:var(--linen)] placeholder:text-[color:var(--linen)]/30 focus:outline-none focus:border-[color:var(--lime)] transition resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-8 w-full text-mono text-xs uppercase tracking-widest bg-[color:var(--lime)] text-[color:var(--mint)] py-4 font-bold hover:bg-[color:var(--linen)] transition focus:outline-none focus:ring-2 focus:ring-[color:var(--lime)] focus:ring-offset-2 focus:ring-offset-[color:var(--mint)]"
              >
                Enviar solicitud →
              </button>
              <div className="mt-4 text-mono text-[10px] uppercase tracking-widest text-[color:var(--linen)]/50 text-center">
                Respuesta en 24 HRS · NOM-144 · ISPM-15
              </div>
            </form>
          </Reveal>
        </div>

        {/* Warehouse strip */}
        <div className="relative h-40 overflow-hidden">
          <img src={warehouseImg} alt="Planta Renoval" loading="lazy" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[color:var(--mint)]/60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-mono text-[10px] uppercase tracking-[0.4em] text-[color:var(--linen)]">
              PLANTA · SAN MATEO ATENCO · EDO. MÉX.
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[color:var(--mint-deep)] text-[color:var(--linen)] py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-[color:var(--lime)] flex items-center justify-center">
                <span className="text-mono text-[color:var(--mint)] text-xs font-bold">R</span>
              </div>
              <span className="font-display font-extrabold text-xl tracking-tight">RENOVAL</span>
            </div>
            <p className="text-mono text-[10px] uppercase tracking-widest text-[color:var(--linen)]/60">
              Ingeniería · Tarimas · Embalaje industrial
            </p>
          </div>
          <div>
            <div className="text-mono text-[10px] uppercase tracking-widest text-[color:var(--terracota)] mb-3">Certificaciones</div>
            <ul className="space-y-2 text-mono text-xs text-[color:var(--linen)]/85">
              <li>◆ FSC · Cadena de custodia</li>
              <li>◆ NOM-144-SEMARNAT-2017</li>
              <li>◆ ISPM-15 · Sello HT autorizado</li>
            </ul>
          </div>
          <div>
            <div className="text-mono text-[10px] uppercase tracking-widest text-[color:var(--terracota)] mb-3">Contacto</div>
            <ul className="space-y-1 text-mono text-xs text-[color:var(--linen)]/85">
              <li>722 193 6801</li>
              <li>722 750 1071</li>
              <li>renovaltarimas.mx</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-6 border-t border-[color:var(--linen)]/10 flex flex-col md:flex-row items-center justify-between gap-4 text-mono text-[10px] uppercase tracking-widest text-[color:var(--linen)]/50">
          <div>© {new Date().getFullYear()} RENOVAL TYE S.A. de C.V.</div>
          <div>LOTE · REV.2025 · MADE IN MÉXICO</div>
        </div>
      </footer>
    </main>
  );
}
