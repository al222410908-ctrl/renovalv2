import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const accordions = [
  { id: '01', title: 'Proyectos de reforestación en Oaxaca', content: 'Invertimos en la regeneración de los bosques para asegurar que nuestra materia prima provenga de fuentes 100% legales y sustentables, cuidando el ecosistema a largo plazo.' },
  { id: '02', title: 'Educación ambiental', content: 'Fomentamos la concientización sobre el uso responsable de los recursos forestales en las comunidades donde operamos.' },
  { id: '03', title: 'Prácticas laborales', content: 'Garantizamos condiciones de trabajo seguras, justas y equitativas, promoviendo el desarrollo técnico y personal de nuestros colaboradores.' },
];

export default function ResponsibilitySection() {
  const [openId, setOpenId] = useState<string | null>('01');

  return (
    <section id="responsabilidad" className="bg-[#1A433D] py-32 text-[#F9F6F0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Collage Izquierda */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4 relative"
          >
            {/* Precision Lines */}
            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#A3E14B]/20 z-10" />
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#A3E14B]/20 z-10" />

            <div className="aspect-square bg-[#F9F6F0]/5 rounded-xl border border-[#F9F6F0]/10 flex items-end p-6">
              <span className="font-mono text-xs uppercase tracking-widest text-[#A3E14B]">Abasto Controlado</span>
            </div>
            <div className="aspect-square bg-[#C87A53]/20 rounded-xl border border-[#C87A53]/30 mt-8 flex items-end p-6">
              <span className="font-mono text-xs uppercase tracking-widest text-[#F9F6F0]">Bosques Certificados</span>
            </div>
            <div className="aspect-square bg-[#F9F6F0]/10 rounded-xl border border-[#F9F6F0]/20 -mt-8 flex items-end p-6">
              <span className="font-mono text-xs uppercase tracking-widest text-[#F9F6F0]">Infraestructura</span>
            </div>
            <div className="aspect-square bg-transparent border border-[#A3E14B]/30 rounded-xl flex flex-col justify-center items-center p-6 text-center">
              <span className="font-mono text-4xl text-[#A3E14B] mb-2">100%</span>
              <span className="font-sans text-xs uppercase tracking-widest text-[#F9F6F0]/60">Origen Legal</span>
            </div>
          </motion.div>

          {/* Contenido Derecha */}
          <div className="flex flex-col gap-10">
            <div>
              <h2 className="font-sans font-bold text-3xl md:text-4xl uppercase tracking-tight mb-4">
                Origen Responsable<br />e Infraestructura
              </h2>
              <p className="font-sans text-[#F9F6F0]/70 text-lg">
                Aserraderos y capacidad técnica con abasto controlado desde el primer corte.
              </p>
            </div>

            <div className="flex flex-col gap-4 border-t border-[#F9F6F0]/10 pt-8">
              {accordions.map((acc) => (
                <div key={acc.id} className="border-b border-[#F9F6F0]/10 pb-4">
                  <button 
                    onClick={() => setOpenId(openId === acc.id ? null : acc.id)}
                    className="w-full flex items-center justify-between text-left group"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs text-[#A3E14B]">{acc.id}</span>
                      <span className="font-sans font-medium text-lg group-hover:text-[#C87A53] transition-colors">{acc.title}</span>
                    </div>
                    <motion.div 
                      animate={{ rotate: openId === acc.id ? 45 : 0 }}
                      className="w-6 h-6 flex items-center justify-center text-[#F9F6F0]/50"
                    >
                      +
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openId === acc.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="font-sans text-sm text-[#F9F6F0]/60 pt-4 pb-2 pl-8 leading-relaxed">
                          {acc.content}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
