import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { useTranslation } from "@/components/LanguageContext";

export function Navbar() {
  const { locale, t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[color:var(--linen)]/95 backdrop-blur border-b border-[color:var(--mint)]/15"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[color:var(--mint)] flex items-center justify-center">
            <span className="text-mono text-[color:var(--lime)] text-xs font-bold">
              R
            </span>
          </div>
          <span className="font-display font-extrabold text-xl tracking-tight text-[color:var(--mint)]">
            RENOVAL
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-mono text-[11px] uppercase tracking-widest text-[color:var(--mint)]/75">
          <a href="#fabricamos" className="hover:text-[color:var(--terracota)] transition">
            {t.navbar.fabricamos}
          </a>
          <a href="#quienes" className="hover:text-[color:var(--terracota)] transition">
            {t.navbar.quienes}
          </a>
          <a href="#capacidad" className="hover:text-[color:var(--terracota)] transition">
            {t.navbar.capacidad}
          </a>
          <a href="#proceso" className="hover:text-[color:var(--terracota)] transition">
            {t.navbar.proceso}
          </a>
          <a href="#origen" className="hover:text-[color:var(--terracota)] transition">
            {t.navbar.origen}
          </a>
          <a href="#contacto" className="hover:text-[color:var(--terracota)] transition">
            {t.navbar.contacto}
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            to={locale === "es" ? "/en" : "/"}
            className="text-mono text-[11px] uppercase tracking-widest text-[color:var(--mint)] hover:text-[color:var(--terracota)] transition font-bold border border-[color:var(--mint)]/20 px-2.5 py-1.5"
          >
            {locale === "es" ? "EN" : "ES"}
          </Link>
          <a
            href="#contacto"
            className="text-mono text-[11px] uppercase tracking-widest bg-[color:var(--lime)] text-[color:var(--mint)] px-4 py-2.5 font-semibold hover:bg-[color:var(--mint)] hover:text-[color:var(--lime)] transition focus:outline-none focus:ring-2 focus:ring-[color:var(--lime)] focus:ring-offset-2 focus:ring-offset-[color:var(--linen)]"
          >
            {t.navbar.cotizar}
          </a>
        </div>
      </div>
    </header>
  );
}
