import React from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

const services = [
  "Fabricación de tarima nueva de barrote",
  "Fabricación de tarima con tacón",
  "Fabricación de tarima reciclada",
  "Embalajes especiales",
  "Reparación",
  "Selección",
  "Asesoría",
  "Compra de tarima"
];

function Counter({ from, to, duration = 2 }: { from: number, to: number, duration?: number }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  
  React.useEffect(() => {
    const controls = animate(count, to, { duration, ease: "easeOut" });
    return controls.stop;
  }, [count, to, duration]);

  return <motion.span>{rounded}</motion.span>;
}

export default function ServicesSection() {
  return (
    <section id="servicios" className="bg-[#F9F6F0] py-32 relative">
      {/* Precision vertical line */}
      <div className="absolute left-[5%] md:left-[10%] top-0 bottom-0 w-[1px] bg-[#C87A53]/20" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Lado Izquierdo: Servicios */}
          <div className="flex flex-col gap-12">
            <div>
              <h2 className="font-sans font-bold text-[#1A433D] text-3xl md:text-4xl uppercase tracking-tight mb-4">
                Capacidad y Servicios
              </h2>
              <p className="font-sans text-[#1A433D]/70 text-lg">
                Soluciones integrales diseñadas para la continuidad de su operación.
              </p>
            </div>

            <div className="flex flex-col">
              {services.map((service, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="group flex items-center gap-6 py-5 border-b border-[#1A433D]/10 cursor-pointer"
                >
                  <span className="font-mono text-xs text-[#1A433D]/40 group-hover:text-[#C87A53] group-hover:translate-x-2 transition-all duration-300">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="font-sans font-medium text-[#1A433D]/80 group-hover:text-[#1A433D] transition-colors text-lg">
                    {service}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Lado Derecho: Estadísticas */}
          <div className="flex flex-col gap-6 justify-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#1A433D] p-10 rounded-2xl flex flex-col gap-2 relative overflow-hidden"
            >
              <div className="absolute -right-4 -bottom-4 font-mono text-[120px] text-[#F9F6F0]/5 leading-none select-none">9K</div>
              <div className="font-mono text-[#A3E14B] text-5xl md:text-6xl tracking-tighter">
                <Counter from={0} to={9000} />
              </div>
              <div className="font-sans text-[#F9F6F0]/80 uppercase tracking-widest text-sm relative z-10">
                Tarimas fabricadas por turno
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#1A433D] p-10 rounded-2xl flex flex-col gap-2 relative overflow-hidden"
            >
              <div className="absolute -right-4 -bottom-4 font-mono text-[120px] text-[#F9F6F0]/5 leading-none select-none">800</div>
              <div className="font-mono text-[#A3E14B] text-5xl md:text-6xl tracking-tighter flex items-baseline">
                <Counter from={0} to={800} />
                <span className="text-3xl ml-1">K</span>
              </div>
              <div className="font-sans text-[#F9F6F0]/80 uppercase tracking-widest text-sm relative z-10">
                Pies cúbicos procesados al año
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#1A433D] p-10 rounded-2xl flex flex-col gap-2 relative overflow-hidden mb-6"
            >
              <div className="absolute -right-4 -bottom-4 font-mono text-[120px] text-[#F9F6F0]/5 leading-none select-none">100</div>
              <div className="font-mono text-[#A3E14B] text-5xl md:text-6xl tracking-tighter flex items-baseline">
                <Counter from={0} to={100} />
                <span className="text-3xl ml-1">%</span>
              </div>
              <div className="font-sans text-[#F9F6F0]/80 uppercase tracking-widest text-sm relative z-10">
                Madera de origen legal
              </div>
            </motion.div>

            {/* Sello HT */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-[#1A433D]/10 border border-[#1A433D]/20 p-6 rounded-xl flex items-center justify-between"
            >
              <div className="flex flex-col">
                <span className="font-sans font-bold text-[#1A433D] uppercase tracking-wider text-sm">Sello HT</span>
                <span className="font-mono text-xs text-[#1A433D]/60 mt-1">NOM-144-SEMARNAT-2017</span>
              </div>
              <div className="w-12 h-12 rounded-full bg-[#F9F6F0] flex items-center justify-center border border-[#1A433D]/20">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C87A53" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
