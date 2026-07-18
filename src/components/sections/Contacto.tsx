import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import warehouseImg from "@/assets/warehouse.webp";
import { Reveal } from "@/components/ui/reveal";
import { useTranslation } from "@/components/LanguageContext";
import { Map } from "./Map";
import { z } from "zod";

export function Contacto() {
  const { t, locale } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Dynamic schema based on locale
  const schema = z.object({
    empresa: z.string().min(2, locale === "es" ? "La empresa debe tener al menos 2 caracteres" : "Company name must be at least 2 characters"),
    email: z.string().min(1, locale === "es" ? "El correo es obligatorio" : "Email is required").email(locale === "es" ? "Ingresa un correo válido" : "Enter a valid email"),
    carga: z.string().min(3, locale === "es" ? "Describe el tipo de carga y destino" : "Describe cargo type and destination"),
    volumen: z.string().min(1, locale === "es" ? "El volumen es obligatorio" : "Volume is required"),
    desafio: z.string().optional(),
  });

  type ContactoFormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactoFormData>({
    resolver: zodResolver(schema),
  });

  function onSubmit() {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success(t.contacto.successMessage, {
        description: t.contacto.successDesc,
      });
      reset();
    }, 1200);
  }

  const inputClasses =
    "w-full bg-transparent border-b border-[color:var(--linen)]/25 py-2 text-[color:var(--linen)] placeholder:text-[color:var(--linen)]/30 focus:outline-none focus:border-[color:var(--lime)] transition";
  const errorClasses = "text-mono text-[10px] text-red-400 mt-1";

  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-[color:var(--linen)]"
    >
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-16">
        <div>
          <div className="text-mono text-[11px] uppercase tracking-[0.35em] text-[color:var(--terracota)] mb-4">
            {t.contacto.eyebrow}
          </div>
          <h2 className="text-display text-5xl md:text-7xl text-[color:var(--mint)] mb-6 leading-[0.88]">
            {t.contacto.titleLine1}
            <br />
            {t.contacto.titleLine2}
            <br />
            <span className="text-[color:var(--terracota)]">{t.contacto.titleLine3}</span>
          </h2>
          <p className="text-[color:var(--mint)]/80 max-w-md mb-10 font-light text-lg">
            {t.contacto.subtitle1}
            <span className="text-mono text-base text-[color:var(--mint)]">
              {t.contacto.subtitle2}
            </span>
            {t.contacto.subtitle3}
          </p>

          <div className="space-y-5 border-t border-[color:var(--mint)]/15 pt-8 mb-8">
            <div>
              <div className="text-mono text-[10px] uppercase tracking-widest text-[color:var(--terracota)] mb-1">
                {t.contacto.telLabel}
              </div>
              <a
                href="tel:7221936801"
                className="text-mono text-xl text-[color:var(--mint)] hover:text-[color:var(--terracota)] block"
              >
                722 193 6801
              </a>
              <a
                href="tel:7227501071"
                className="text-mono text-xl text-[color:var(--mint)] hover:text-[color:var(--terracota)] block"
              >
                722 750 1071
              </a>
            </div>
            <div>
              <div className="text-mono text-[10px] uppercase tracking-widest text-[color:var(--terracota)] mb-1">
                {t.contacto.webLabel}
              </div>
              <a
                href="https://renovaltarimas.mx"
                target="_blank"
                rel="noreferrer"
                className="text-mono text-lg text-[color:var(--mint)] hover:text-[color:var(--terracota)]"
              >
                renovaltarimas.mx
              </a>
            </div>
            <div>
              <div className="text-mono text-[10px] uppercase tracking-widest text-[color:var(--terracota)] mb-1">
                {t.contacto.plantaLabel}
              </div>
              <p className="text-[color:var(--mint)]/85 text-sm leading-relaxed">
                Adolfo López Mateos 110, San Pedro,
                <br />
                52105 San Mateo Atenco, Estado de México.
              </p>
            </div>
          </div>

          <Map />
        </div>

        {/* FORM */}
        <Reveal delay={150}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="relative bg-[color:var(--mint)] text-[color:var(--linen)] p-8 md:p-10 border border-[color:var(--terracota)]/40"
          >
            <span className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-[color:var(--terracota)]" />
            <span className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-[color:var(--terracota)]" />
            <span className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-[color:var(--terracota)]" />
            <span className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-[color:var(--terracota)]" />

            <div className="flex items-center justify-between mb-8">
              <div className="text-mono text-[10px] uppercase tracking-widest text-[color:var(--terracota)]">
                {t.contacto.formTitle}
              </div>
              <div className="text-mono text-[10px] uppercase tracking-widest text-[color:var(--lime)]">
                {t.contacto.formRev}
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <label className="text-mono text-[10px] uppercase tracking-widest text-[color:var(--linen)]/60 block mb-1.5">
                  {t.contacto.empresaLabel}
                </label>
                <input
                  {...register("empresa")}
                  type="text"
                  placeholder={t.contacto.empresaPlaceholder}
                  className={inputClasses}
                />
                {errors.empresa && (
                  <p className={errorClasses}>{errors.empresa.message}</p>
                )}
              </div>

              <div>
                <label className="text-mono text-[10px] uppercase tracking-widest text-[color:var(--linen)]/60 block mb-1.5">
                  {t.contacto.emailLabel}
                </label>
                <input
                  {...register("email")}
                  type="email"
                  placeholder={t.contacto.emailPlaceholder}
                  className={inputClasses}
                />
                {errors.email && (
                  <p className={errorClasses}>{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="text-mono text-[10px] uppercase tracking-widest text-[color:var(--linen)]/60 block mb-1.5">
                  {t.contacto.cargaLabel}
                </label>
                <input
                  {...register("carga")}
                  type="text"
                  placeholder={t.contacto.cargaPlaceholder}
                  className={inputClasses}
                />
                {errors.carga && (
                  <p className={errorClasses}>{errors.carga.message}</p>
                )}
              </div>

              <div>
                <label className="text-mono text-[10px] uppercase tracking-widest text-[color:var(--linen)]/60 block mb-1.5">
                  {t.contacto.volumenLabel}
                </label>
                <input
                  {...register("volumen")}
                  type="text"
                  placeholder={t.contacto.volumenPlaceholder}
                  className={inputClasses}
                />
                {errors.volumen && (
                  <p className={errorClasses}>{errors.volumen.message}</p>
                )}
              </div>

              <div>
                <label className="text-mono text-[10px] uppercase tracking-widest text-[color:var(--linen)]/60 block mb-1.5">
                  {t.contacto.desafioLabel}
                </label>
                <textarea
                  {...register("desafio")}
                  rows={3}
                  placeholder={t.contacto.desafioPlaceholder}
                  className={`${inputClasses} resize-none`}
                />
                {errors.desafio && (
                  <p className={errorClasses}>{errors.desafio.message}</p>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-8 w-full text-mono text-xs uppercase tracking-widest bg-[color:var(--lime)] text-[color:var(--mint)] py-4 font-bold hover:bg-[color:var(--linen)] transition focus:outline-none focus:ring-2 focus:ring-[color:var(--lime)] focus:ring-offset-2 focus:ring-offset-[color:var(--mint)] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? t.contacto.submitButtonLoading : t.contacto.submitButton}
            </button>
            <div className="mt-4 text-mono text-[10px] uppercase tracking-widest text-[color:var(--linen)]/50 text-center">
              {t.contacto.footerLabel}
            </div>
          </form>
        </Reveal>
      </div>

      {/* Warehouse strip */}
      <div className="relative h-40 overflow-hidden">
        <img
          src={warehouseImg}
          alt="Planta Renoval"
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[color:var(--mint)]/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-mono text-[10px] uppercase tracking-[0.4em] text-[color:var(--linen)]">
            PLANTA · SAN MATEO ATENCO · EDO. MÉX.
          </div>
        </div>
      </div>
    </section>
  );
}
