import React from 'react';
import { motion } from 'framer-motion';

export default function PhilosophySection() {
  return (
    <section id="filosofia" className="relative bg-[#1A433D] py-32 overflow-hidden text-[#F9F6F0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            <div className="inline-block border border-[#C87A53] text-[#C87A53] px-4 py-1.5 rounded text-xs font-mono tracking-widest uppercase self-start">
              02 • Filosofía Empresarial
            </div>
            <h2 className="font-sans font-bold text-4xl md:text-5xl uppercase tracking-tight">
              Embalaje industrial<br />con propósito
            </h2>
            <p className="font-sans text-[#F9F6F0]/80 text-lg leading-relaxed max-w-md">
              Aseguramos la integridad de tu cadena logística, brindándote la tranquilidad de que tu producto llegará seguro a su destino.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#F9F6F0]/5 backdrop-blur border border-[#F9F6F0]/10 p-10 rounded-2xl flex items-center"
          >
            <p className="font-sans italic text-2xl md:text-3xl leading-snug">
              "Nuestro reto: Demostrar que <span className="text-[#A3E14B] not-italic font-bold">eficiencia</span> y <span className="text-[#A3E14B] not-italic font-bold">conciencia</span> siempre pueden ir de la mano."
            </p>
          </motion.div>
        </div>

        {/* Hitos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-[#F9F6F0]/10 pt-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <div className="font-mono text-[#A3E14B] text-4xl">+10</div>
            <div className="font-sans text-sm uppercase tracking-widest text-[#F9F6F0]/60">Años de experiencia</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <div className="font-mono text-[#A3E14B] text-4xl">+50</div>
            <div className="font-sans text-sm uppercase tracking-widest text-[#F9F6F0]/60">Clientes corporativos</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <div className="w-8 h-8 rounded-full border border-[#C87A53] flex items-center justify-center mb-1">
               <div className="w-2 h-2 rounded-full bg-[#A3E14B]"></div>
            </div>
            <div className="font-sans text-sm uppercase tracking-widest text-[#F9F6F0]/60 leading-relaxed">
              Cobertura:<br />Zona Industrial Toluca,<br />Estado de México y Querétaro
            </div>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
