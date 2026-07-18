import React from 'react';
import { motion } from 'framer-motion';

const pillars = [
  { id: '01', title: 'Calidad', desc: 'Materiales seleccionados y procesos estandarizados.' },
  { id: '02', title: 'Compromiso', desc: 'Cumplimiento absoluto de tiempos y especificaciones.' },
  { id: '03', title: 'Sustentabilidad', desc: 'Madera de origen legal y procesos de reciclaje.' },
  { id: '04', title: 'Innovación', desc: 'Diseño asistido por software de ingeniería.' },
];

export default function PillarsSection() {
  return (
    <section className="bg-[#F9F6F0] pt-32 pb-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="mb-16">
          <h2 className="font-sans font-bold text-[#1A433D] text-3xl uppercase tracking-widest inline-block pb-4 border-b border-[#C87A53]">
            Nuestros Pilares
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {pillars.map((pillar, i) => (
            <motion.div 
              key={pillar.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white p-8 rounded-xl border border-[#1A433D]/10 hover:border-[#A3E14B] transition-all duration-300 shadow-sm hover:shadow-lg relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#F9F6F0] rounded-bl-3xl flex items-center justify-center border-b border-l border-[#1A433D]/5 group-hover:border-[#A3E14B]/30 transition-colors">
                 <span className="font-mono text-xs text-[#1A433D]/40 group-hover:text-[#A3E14B] transition-colors">{pillar.id}</span>
              </div>
              <h3 className="font-sans font-bold text-[#1A433D] text-lg uppercase tracking-wider mb-4 mt-8">{pillar.title}</h3>
              <p className="font-sans text-[#1A433D]/70 text-sm leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Cierre de Impacto */}
      <div className="bg-[#1A433D] w-full py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 text-[#F9F6F0]/5 font-serif text-[200px] leading-none select-none">"</div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <p className="font-sans italic text-2xl md:text-4xl text-[#F9F6F0] leading-snug">
            "La tarima que entregamos es la <span className="text-[#A3E14B] font-bold not-italic">promesa física</span> de nuestra empresa..."
          </p>
        </div>
      </div>
    </section>
  );
}
