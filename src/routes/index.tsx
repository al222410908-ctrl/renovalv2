import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
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

function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    if (!ref.current || seen) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [seen]);
  return { ref, seen };
}

function Counter({ to, suffix = "", duration = 1600 }: { to: number; suffix?: string; duration?: number }) {
  const { ref, seen } = useInView<HTMLSpanElement>();
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!seen) return;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen, to, duration]);
  return (
    <span ref={ref}>
      {n.toLocaleString("es-MX")}
      {suffix}
    </span>
  );
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, seen } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}ms` }}
      className={seen ? "animate-fade-up" : "opacity-0"}
    >
      {children}
    </div>
  );
}

function Index() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <div className="w-9 h-9 wood-gradient rounded-sm rotate-45" />
            <span className="text-display text-2xl tracking-widest">RENOVAL</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest text-muted-foreground">
            <a href="#productos" className="hover:text-primary transition">Productos</a>
            <a href="#proceso" className="hover:text-primary transition">Proceso</a>
            <a href="#sustentable" className="hover:text-primary transition">Origen</a>
            <a href="#clientes" className="hover:text-primary transition">Clientes</a>
          </nav>
          <a
            href="#contacto"
            className="bg-primary text-primary-foreground px-5 py-2.5 text-sm uppercase tracking-widest font-semibold hover:bg-ember transition"
          >
            Cotizar
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative h-screen min-h-[720px] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Tarimas de madera apiladas en almacén industrial"
          width={1920}
          height={1280}
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/30 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 to-transparent" />

        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/60 animate-float-dust"
            style={{
              left: `${(i * 83) % 100}%`,
              top: `${(i * 47) % 100}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${5 + (i % 4)}s`,
            }}
          />
        ))}

        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-24 md:pb-32">
          <div className="text-primary text-sm md:text-base uppercase tracking-[0.4em] mb-6 animate-fade-up">
            Fabricamos · Desde 2014
          </div>
          <h1 className="text-display text-[16vw] md:text-[11vw] leading-[0.85] text-cream">
            <span className="block animate-reveal" style={{ animationDelay: "0.1s" }}>
              TARIMAS
            </span>
            <span className="block animate-reveal text-primary" style={{ animationDelay: "0.5s" }}>
              HUACALES
            </span>
            <span className="block animate-reveal" style={{ animationDelay: "0.9s" }}>
              CNC
            </span>
          </h1>
          <div className="mt-8 flex items-center gap-6 animate-fade-up" style={{ animationDelay: "1.3s" }}>
            <a
              href="#productos"
              className="bg-primary text-primary-foreground px-8 py-4 uppercase tracking-widest text-sm font-bold hover:bg-ember transition-all hover:translate-x-1"
            >
              Ver productos →
            </a>
            <a href="#contacto" className="text-cream uppercase tracking-widest text-sm border-b border-primary pb-1">
              Cotizar ahora
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 border-t border-border bg-background/70 backdrop-blur-sm overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap py-4 text-display text-3xl text-primary/90">
            {Array.from({ length: 2 }).map((_, k) => (
              <div key={k} className="flex items-center gap-10 pr-10">
                {[
                  "TARIMA NUEVA", "◆", "HUACALES", "◆", "COMPONENTES CNC", "◆",
                  "EMBALAJE ESPECIAL", "◆", "SELLO HT · NOM-144", "◆", "TARIMA RECICLADA", "◆",
                ].map((t, i) => (
                  <span key={i} className="tracking-wider">{t}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="productos" className="relative py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="flex items-end justify-between mb-16">
              <div>
                <div className="text-primary text-sm uppercase tracking-[0.4em] mb-4">Lo que hacemos</div>
                <h2 className="text-display text-6xl md:text-8xl">
                  ESTO<br />FABRICAMOS
                </h2>
              </div>
              <div className="hidden md:block text-muted-foreground text-sm max-w-xs text-right">
                A la medida. Con madera de origen legal. Bajo estándar escrito.
              </div>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { img: tarimaImg, title: "TARIMAS", sub: "Nueva · Reciclada · Con tacón · A la medida", n: "01" },
              { img: huacalImg, title: "HUACALES", sub: "Cajas y plataformas de exportación con Sello HT", n: "02" },
              { img: cncImg, title: "CNC", sub: "Componentes precisos cortados a especificación", n: "03" },
            ].map((p, i) => (
              <Reveal key={p.title} delay={i * 150}>
                <a href="#contacto" className="group relative block overflow-hidden bg-card aspect-[4/5]">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
                    <div className="text-primary text-display text-4xl">{p.n}</div>
                    <div>
                      <h3 className="text-display text-5xl md:text-6xl mb-3 group-hover:text-primary transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-sm text-muted-foreground uppercase tracking-widest">{p.sub}</p>
                      <div className="mt-4 h-[2px] w-12 bg-primary transition-all duration-500 group-hover:w-full" />
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* NUMBERS */}
      <section className="relative py-24 border-y border-border bg-card/40">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { n: 9000, s: " m³", label: "Madera anual" },
            { n: 800, s: "K ft³", label: "Capacidad producción" },
            { n: 10, s: "+ años", label: "Experiencia" },
            { n: 50, s: "+", label: "Clientes activos" },
          ].map((k) => (
            <Reveal key={k.label}>
              <div className="text-center md:text-left">
                <div className="text-display text-5xl md:text-7xl text-primary">
                  <Counter to={k.n} suffix={k.s} />
                </div>
                <div className="mt-2 text-xs md:text-sm uppercase tracking-widest text-muted-foreground">
                  {k.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CNC PROCESS */}
      <section id="proceso" className="relative">
        <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
          <img
            src={processCncImg}
            alt="CNC cortando madera"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
          <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
            <div className="max-w-xl">
              <Reveal>
                <div className="text-primary text-sm uppercase tracking-[0.4em] mb-4">Precisión CNC</div>
                <h2 className="text-display text-6xl md:text-8xl mb-6">
                  CORTAMOS<br />LO QUE NADIE<br />PUEDE.
                </h2>
                <p className="text-muted-foreground max-w-md">
                  Componentes de madera a especificación milimétrica. Repetibles, trazables, listos para línea.
                </p>
              </Reveal>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-24">
          <Reveal>
            <h3 className="text-display text-5xl md:text-7xl mb-16">
              DEL PEDIDO<br />A LA ENTREGA.
            </h3>
          </Reveal>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { n: "01", t: "Diagnóstico", d: "Carga, almacenamiento, frecuencia, destino." },
              { n: "02", t: "Diseño", d: "Especificaciones, dimensiones y resistencia." },
              { n: "03", t: "Producción", d: "Madera de aserradero bajo estándar escrito." },
              { n: "04", t: "Calidad", d: "Muestreo al final de línea. Si no pasa, no sale." },
              { n: "05", t: "Entrega", d: "Trazabilidad de lote, fecha y origen." },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <div className="border-t-2 border-primary pt-4 h-full">
                  <div className="text-display text-4xl text-primary mb-3">{s.n}</div>
                  <div className="text-lg font-semibold uppercase tracking-wider mb-2">{s.t}</div>
                  <p className="text-sm text-muted-foreground">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SUSTAINABILITY */}
      <section id="sustentable" className="relative py-24 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={forestImg}
                alt="Bosque de pinos en Oaxaca"
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1500ms]"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-background/85 backdrop-blur-sm p-4 border-l-4 border-primary">
                <div className="text-primary text-xs uppercase tracking-widest">Origen</div>
                <div className="text-display text-3xl">100% TALA LEGAL · OAXACA</div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div>
              <div className="text-primary text-sm uppercase tracking-[0.4em] mb-4">Origen responsable</div>
              <h2 className="text-display text-5xl md:text-7xl mb-8">
                MADERA QUE<br />REGRESA<br />AL BOSQUE.
              </h2>
              <div className="space-y-6">
                {[
                  { t: "Aserraderos certificados", d: "Estudios forestales por zona y comunidad." },
                  { t: "Reciclaje", d: "Recuperamos y reutilizamos madera aprovechable." },
                  { t: "Sello HT", d: "NOM-144-SEMARNAT-2017. Certificado térmico para exportación." },
                ].map((it) => (
                  <div key={it.t} className="border-l-2 border-primary pl-4">
                    <div className="text-lg font-bold uppercase tracking-wider">{it.t}</div>
                    <div className="text-muted-foreground text-sm">{it.d}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CLIENTS */}
      <section id="clientes" className="relative py-24 border-y border-border bg-card/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="text-primary text-sm uppercase tracking-[0.4em] mb-4 text-center">
              Confían en nosotros
            </div>
            <h2 className="text-display text-5xl md:text-7xl text-center mb-16">
              +50 EMPRESAS<br />QUE NO PUEDEN FALLAR.
            </h2>
          </Reveal>
        </div>
        <div className="relative">
          <div className="flex animate-marquee whitespace-nowrap">
            {Array.from({ length: 2 }).map((_, k) => (
              <div key={k} className="flex items-center gap-16 pr-16">
                {[
                  "SIGPACK", "TEXEN", "SYPRIS", "PAPIER", "NISSIN", "NOVAPRINT",
                  "AMESA", "ALUTUB", "AMA PARTS", "APIC", "ECOSHELL", "ITALIKA",
                ].map((c) => (
                  <span key={c} className="text-display text-4xl md:text-5xl text-muted-foreground/70 hover:text-primary transition-colors">
                    {c}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contacto" className="relative overflow-hidden">
        <img
          src={warehouseImg}
          alt="Almacén Renoval"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-40">
          <Reveal>
            <div className="text-primary text-sm uppercase tracking-[0.4em] mb-6">Cotiza tu pedido</div>
            <h2 className="text-display text-6xl md:text-9xl mb-10 max-w-4xl">
              HABLEMOS DE<br />TU EMBALAJE.
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl">
              <a href="tel:7221936801" className="group border-t-2 border-primary pt-4 hover:border-ember transition">
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Teléfono</div>
                <div className="text-display text-3xl group-hover:text-primary transition">722 193 6801</div>
                <div className="text-display text-3xl group-hover:text-primary transition">722 750 1071</div>
              </a>
              <a href="https://renovaltarimas.mx" target="_blank" rel="noreferrer" className="group border-t-2 border-primary pt-4 hover:border-ember transition">
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Web</div>
                <div className="text-display text-3xl group-hover:text-primary transition">renovaltarimas.mx</div>
              </a>
              <div className="border-t-2 border-primary pt-4">
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Planta</div>
                <div className="text-sm">
                  Adolfo López Mateos 110,<br />
                  San Pedro, 52105<br />
                  San Mateo Atenco, Méx.
                </div>
              </div>
            </div>
            <a
              href="tel:7221936801"
              className="inline-flex mt-12 bg-primary text-primary-foreground px-10 py-5 uppercase tracking-widest text-base font-bold hover:bg-ember transition animate-pulse-glow"
            >
              Llamar ahora →
            </a>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink py-8 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 wood-gradient rounded-sm rotate-45" />
            <span className="text-display text-xl tracking-widest">RENOVAL</span>
            <span className="text-xs text-muted-foreground uppercase tracking-widest hidden md:inline">
              · Ingeniería · Tarimas · Embalajes
            </span>
          </div>
          <div className="text-xs text-muted-foreground uppercase tracking-widest">
            © {new Date().getFullYear()} RENOVAL TYE S.A. de C.V.
          </div>
        </div>
      </footer>
    </main>
  );
}
