import { Link } from "@tanstack/react-router";
import { useTranslation } from "@/components/LanguageContext";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[color:var(--mint-deep)] text-[color:var(--linen)] py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src="/logo.png" alt="Renoval Logo" className="w-8 h-8 object-contain" />
            <span className="font-display font-extrabold text-xl tracking-tight">
              RENOVAL
            </span>
          </div>
          <p className="text-mono text-[10px] uppercase tracking-widest text-[color:var(--linen)]/60">
            {t.footer.desc}
          </p>
        </div>
        <div>
          <div className="text-mono text-[10px] uppercase tracking-widest text-[color:var(--terracota)] mb-3">
            {t.footer.certifications}
          </div>
          <ul className="space-y-2 text-mono text-xs text-[color:var(--linen)]/85">
            <li>◆ FSC · Cadena de custodia</li>
            <li>◆ NOM-144-SEMARNAT-2017</li>
            <li>◆ ISPM-15 · Sello HT authorized</li>
          </ul>
        </div>
        <div>
          <div className="text-mono text-[10px] uppercase tracking-widest text-[color:var(--terracota)] mb-3">
            {t.footer.contacto}
          </div>
          <ul className="space-y-1 text-mono text-xs text-[color:var(--linen)]/85">
            <li>722 193 6801</li>
            <li>722 750 1071</li>
            <li>renovaltarimas.mx</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-6 border-t border-[color:var(--linen)]/10 flex flex-col md:flex-row items-center justify-between gap-4 text-mono text-[10px] uppercase tracking-widest text-[color:var(--linen)]/50">
        <div>{t.footer.rights.replace("{year}", String(new Date().getFullYear()))}</div>
        <div className="flex items-center gap-3">
          <Link to="/" className="hover:text-[color:var(--lime)] transition">
            ES
          </Link>
          <span>·</span>
          <Link to="/en" className="hover:text-[color:var(--lime)] transition">
            EN
          </Link>
          <span className="opacity-30">|</span>
          <span>{t.footer.meta}</span>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
