import React from 'react';
import { motion } from 'framer-motion';

const clients = [
  "SIGPACK", "TEXEN", "SYPRIS", "PAPIER", 
  "NISSIN", "NOVAPRINT", "AMESA", "ALUTUB", 
  "AMA PARTS", "APIC", "ECOSHELL", "ITALIKA"
];

export default function ClientsSection() {
  return (
    <section className="bg-[#F9F6F0] py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-16">
        <h2 className="font-sans font-bold text-[#1A433D] text-3xl uppercase tracking-tight mb-4">
          Quiénes confían en nosotros
        </h2>
        <p className="font-sans text-[#1A433D]/70 text-lg max-w-2xl mx-auto">
          Empresas que no pueden permitirse fallas en su cadena de suministro.
        </p>
      </div>

      {/* Infinite Marquee - Pure CSS approach via Tailwind could be used, but we'll use a framer-motion infinite animation */}
      <div className="relative w-full flex overflow-x-hidden border-y border-[#1A433D]/10 py-12 bg-white">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          className="flex whitespace-nowrap min-w-max items-center gap-24 px-12"
        >
          {/* Duplicate list to create seamless loop */}
          {[...clients, ...clients].map((client, idx) => (
            <div key={idx} className="font-sans font-extrabold text-[#1A433D]/30 text-2xl uppercase tracking-widest hover:text-[#1A433D] transition-colors cursor-default">
              {client}
            </div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center mt-20">
        <p className="font-sans italic text-xl md:text-2xl text-[#1A433D] leading-snug">
          "Nuestra prioridad es construir relaciones de confianza basadas en la honestidad, la calidad y el conocimiento técnico."
        </p>
      </div>
    </section>
  );
}
