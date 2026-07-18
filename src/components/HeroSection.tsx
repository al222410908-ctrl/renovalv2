import React from 'react';
import { motion } from 'framer-motion';

const RegistrationMark = ({ className }: { className?: string }) => (
  <div className={`absolute w-8 h-8 pointer-events-none flex items-center justify-center ${className}`}>
    <div className="w-full h-[1px] bg-[#1A433D]/20 absolute" />
    <div className="h-full w-[1px] bg-[#1A433D]/20 absolute" />
    <div className="w-4 h-4 border border-[#1A433D]/20 rounded-full absolute" />
  </div>
);

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#F9F6F0] pt-32 pb-20 overflow-hidden flex items-center border-b border-[#1A433D]/10">
      {/* Precision Lines Background & Blueprint Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#1A433D 1px, transparent 1px), linear-gradient(90deg, #1A433D 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[10%] top-0 bottom-0 w-[1px] bg-[#C87A53]/20" />
        <div className="absolute left-[90%] top-0 bottom-0 w-[1px] bg-[#C87A53]/20" />
        <div className="absolute top-[20%] left-0 right-0 h-[1px] bg-[#C87A53]/10" />
        
        {/* Registration Marks */}
        <RegistrationMark className="top-[10%] left-[5%]" />
        <RegistrationMark className="top-[10%] right-[5%]" />
        <RegistrationMark className="bottom-[10%] left-[5%]" />
        <RegistrationMark className="bottom-[10%] right-[5%]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Lado Izquierdo */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
            className="flex flex-col gap-6"
          >
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-mono text-xs tracking-widest text-[#C87A53] uppercase flex items-center gap-4"
            >
              <span>Sustentable</span>
              <span className="w-1 h-1 rounded-full bg-[#A3E14B]"></span>
              <span>Ingeniería</span>
              <span className="w-1 h-1 rounded-full bg-[#A3E14B]"></span>
              <span>Logística</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-sans font-extrabold text-[#1A433D] text-5xl md:text-7xl leading-tight uppercase tracking-tight relative"
            >
              Brochure<br />Corporativo
              <div className="absolute -left-6 top-2 h-full w-[1px] bg-[#A3E14B]"></div>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-sans text-[#1A433D]/80 text-lg max-w-md leading-relaxed"
            >
              Diseño e ingeniería de tarimas para operaciones industriales de alta exigencia y tolerancia cero.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex gap-4 mt-8"
            >
              <button className="group flex items-center gap-3 bg-[#1A433D] text-[#F9F6F0] px-8 py-4 rounded-lg uppercase tracking-widest text-xs font-bold hover:bg-[#112d29] transition-colors relative overflow-hidden">
                <span className="absolute inset-0 bg-[#A3E14B]/10 translate-y-full group-hover:translate-y-0 transition-transform"></span>
                Cotizar mi proyecto
                <span className="group-hover:translate-x-1 transition-transform">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A3E14B" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </span>
              </button>
              <button className="group flex items-center gap-3 bg-transparent border border-[#1A433D]/20 text-[#1A433D] px-8 py-4 rounded-lg uppercase tracking-widest text-xs font-bold hover:border-[#1A433D] transition-colors">
                Ver capacidad
              </button>
            </motion.div>
          </motion.div>

          {/* Lado Derecho */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative h-[600px] w-full"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#C87A53] to-[#8a5439] rounded-[32px] overflow-hidden shadow-2xl border border-[#C87A53]/50">
              {/* Overlay con estilo plano técnico */}
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#F9F6F0 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#F9F6F0 1px, transparent 1px), linear-gradient(90deg, #F9F6F0 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border border-[#F9F6F0]/30 rounded-xl relative">
                {/* Cotas flotantes */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 font-mono text-[#F9F6F0]/80 text-[10px] tracking-widest border-b border-[#F9F6F0]/30 w-full text-center pb-1">1200 mm</div>
                <div className="absolute -right-12 top-1/2 -translate-y-1/2 font-mono text-[#F9F6F0]/80 text-[10px] tracking-widest border-l border-[#F9F6F0]/30 h-full flex items-center pl-2 rotate-90 origin-left">1000 mm</div>
              </div>
              
              <div className="absolute top-6 left-6 font-mono text-[#F9F6F0]/70 text-xs tracking-widest">FR-001/A // MODELO 3D</div>
              <div className="absolute bottom-6 right-6 font-mono text-[#A3E14B] text-xs tracking-widest uppercase flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#A3E14B] animate-pulse"></div>
                Tolerancia Cero
              </div>
            </div>

            {/* Floating Card */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -bottom-8 -left-8 bg-[#F9F6F0] p-6 rounded-xl shadow-xl border border-[#1A433D]/10 max-w-sm"
            >
              <div className="font-sans font-bold text-[#1A433D] mb-2 uppercase tracking-wider text-sm">Tarimas de alta precisión</div>
              <div className="flex items-center gap-3">
                <div className="h-[1px] w-12 bg-[#C87A53]"></div>
                <span className="font-mono text-xs text-[#1A433D]/60 uppercase tracking-widest">Cadena de custodia FSC</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
