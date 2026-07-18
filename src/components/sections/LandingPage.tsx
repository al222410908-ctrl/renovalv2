import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { Marquee } from "./Marquee";
import { Fabricamos } from "./Fabricamos";
import { QuienesSomos } from "./QuienesSomos";
import { Pilares } from "./Pilares";
import { Capacidad } from "./Capacidad";
import { PrecisionCNC } from "./PrecisionCNC";
import { Proceso } from "./Proceso";
import { Origen } from "./Origen";
import { Clientes } from "./Clientes";
import { Contacto } from "./Contacto";
import { Footer } from "./Footer";

export function LandingPage() {
  return (
    <main className="min-h-screen bg-[color:var(--linen)] text-[color:var(--mint)] overflow-x-hidden">
      <Navbar />
      <Hero />
      <Marquee />
      <Fabricamos />
      <QuienesSomos />
      <Pilares />
      <Capacidad />
      <PrecisionCNC />
      <Proceso />
      <Origen />
      <Clientes />
      <Contacto />
      <Footer />
    </main>
  );
}
