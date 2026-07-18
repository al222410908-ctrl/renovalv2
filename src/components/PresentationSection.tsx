import React from 'react';
import { motion } from 'framer-motion';

export default function PresentationSection() {
  return (
    <section id="presentacion" className="relative bg-[#F9F6F0] py-32 overflow-hidden border-t border-[#C87A53]/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            <div className="inline-block bg-[#C87A53] text-[#F9F6F0] px-4 py-1.5 rounded text-xs font-mono tracking-widest uppercase self-start">
              01 • Presentación
            </div>
            
            <h2 className="font-sans font-bold text-[#1A433D] text-4xl md:text-5xl uppercase tracking-tight">
              ¿Quiénes somos?<br />Somos Renoval
            </h2>
            
            <div className="flex flex-col gap-6 text-[#1A433D]/80 font-sans text-lg leading-relaxed">
              <p>
                La capacidad industrial de atender altos volúmenes con precisión milimétrica sin sacrificar calidad. 
              </p>
              <p>
                Entendemos que el embalaje no es solo un producto de madera, sino un componente crítico en la cadena de suministro. Una falla en la tarima significa un retraso en la logística, un riesgo para el producto o un sobrecosto para la empresa.
              </p>
            </div>
            
            <div className="w-16 h-[2px] bg-[#A3E14B]"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="lg:col-span-7 relative h-[500px] w-full rounded-[32px] overflow-hidden group"
          >
            {/* Using a placeholder elegant gradient instead of image */}
            <div className="absolute inset-0 bg-[#1A433D] group-hover:scale-105 transition-transform duration-1000 ease-out">
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(45deg, #C87A53 25%, transparent 25%, transparent 75%, #C87A53 75%, #C87A53), linear-gradient(45deg, #C87A53 25%, transparent 25%, transparent 75%, #C87A53 75%, #C87A53)', backgroundSize: '40px 40px', backgroundPosition: '0 0, 20px 20px' }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A433D] to-transparent"></div>
            </div>
            <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end border-b border-[#F9F6F0]/20 pb-4">
               <div className="font-mono text-[#A3E14B] text-sm">ALMACÉN PRINCIPAL</div>
               <div className="font-mono text-[#F9F6F0]/60 text-xs">CAPACIDAD INSTALADA</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
