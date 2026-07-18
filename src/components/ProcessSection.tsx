import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
  { id: '01', title: 'Diagnóstico', desc: 'Análisis de carga y operación.' },
  { id: '02', title: 'Diseño', desc: 'Ingeniería y cotización milimétrica.' },
  { id: '03', title: 'Producción', desc: 'Fabricación industrializada.' },
  { id: '04', title: 'Control', desc: 'Inspección de calidad rigurosa.' },
  { id: '05', title: 'Entrega', desc: 'Logística y trazabilidad total.' },
];

export default function ProcessSection() {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="proceso" className="bg-[#F9F6F0] py-32 border-t border-[#1A433D]/10 overflow-hidden relative">
      <div className="absolute left-0 right-0 h-[1px] top-4 bg-[#C87A53]/20" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-24">
          <h2 className="font-sans font-bold text-[#1A433D] text-3xl md:text-4xl uppercase tracking-tight mb-4">
            Proceso de Trabajo
          </h2>
          <p className="font-mono text-xs text-[#C87A53] tracking-widest uppercase flex items-center justify-center gap-4">
            <span className="w-12 h-[1px] bg-[#C87A53]/50"></span>
            Ingeniería de la madera • Tolerancia Cero
            <span className="w-12 h-[1px] bg-[#C87A53]/50"></span>
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto" ref={containerRef}>
          {/* Static Background Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-[#1A433D]/10 md:-translate-x-1/2"></div>
          
          {/* Animated Scroll Line (1px ultra-fine as requested) */}
          <motion.div 
            className="absolute left-6 md:left-1/2 top-0 w-[1px] bg-[#A3E14B] md:-translate-x-1/2 origin-top shadow-[0_0_8px_rgba(163,225,75,0.5)]"
            style={{ height: lineHeight }}
          ></motion.div>

          <div className="flex flex-col gap-16 relative z-10">
            {steps.map((step, idx) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col md:flex-row items-center gap-8 group ${
                  idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Text Content */}
                <div className={`w-full md:w-1/2 pl-16 md:pl-0 flex flex-col ${
                  idx % 2 === 0 ? 'md:items-end md:text-right md:pr-12' : 'md:items-start md:text-left md:pl-12'
                }`}>
                  <span className="font-mono text-xs text-[#C87A53] mb-2 tracking-widest">PASO {step.id}</span>
                  <h3 className="font-sans font-bold text-[#1A433D] text-xl uppercase tracking-wider mb-2 group-hover:text-[#C87A53] transition-colors">{step.title}</h3>
                  <p className="font-sans text-[#1A433D]/70 text-sm max-w-xs">{step.desc}</p>
                </div>
                
                {/* Node - Technical precision style */}
                <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-none bg-[#F9F6F0] border border-[#1A433D] md:-translate-x-1/2 transform -translate-x-[6px] rotate-45 group-hover:border-[#A3E14B] group-hover:bg-[#A3E14B]/10 transition-colors"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Cierre inferior */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 max-w-4xl mx-auto bg-white p-10 rounded-none border border-[#1A433D]/10 shadow-sm text-center relative"
        >
          {/* Technical corners */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#A3E14B]"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#A3E14B]"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#A3E14B]"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#A3E14B]"></div>
          
          <h4 className="font-sans font-bold text-[#1A433D] text-sm uppercase tracking-widest mb-4 flex items-center justify-center gap-3">
             <span className="w-8 h-[1px] bg-[#1A433D]/20"></span>
             Nuestra Promesa de Entrega
             <span className="w-8 h-[1px] bg-[#1A433D]/20"></span>
          </h4>
          <p className="font-sans text-[#1A433D]/80 leading-relaxed text-sm">
            Ante cualquier reclamación de calidad, nos comprometemos a reemplazar el producto en un plazo no mayor a 24 horas, asegurando la continuidad ininterrumpida de su cadena logística.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
