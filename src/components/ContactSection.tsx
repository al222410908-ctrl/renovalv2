import React from 'react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  return (
    <section className="bg-[#F9F6F0] py-32 border-t border-[#C87A53]/20 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Formulario */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-2xl border border-[#1A433D]/10 shadow-sm"
          >
            <div className="mb-8">
              <span className="font-mono text-xs text-[#C87A53] tracking-widest uppercase mb-2 block">Cotizador Corporativo</span>
              <h2 className="font-sans font-bold text-[#1A433D] text-3xl uppercase tracking-tight">Iniciar Proyecto</h2>
            </div>

            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-xs text-[#1A433D]/70 uppercase">Nombre / Empresa</label>
                  <input type="text" className="bg-[#F9F6F0] border border-[#1A433D]/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#C87A53] transition-colors" placeholder="Ej. Juan Pérez" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-xs text-[#1A433D]/70 uppercase">Correo Electrónico</label>
                  <input type="email" className="bg-[#F9F6F0] border border-[#1A433D]/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#C87A53] transition-colors" placeholder="correo@empresa.com" />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="font-mono text-xs text-[#1A433D]/70 uppercase">Tipo de Requerimiento</label>
                <select className="bg-[#F9F6F0] border border-[#1A433D]/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#C87A53] transition-colors">
                  <option>Fabricación de tarima nueva</option>
                  <option>Tarima reciclada</option>
                  <option>Embalajes especiales</option>
                  <option>Reparación / Selección</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-mono text-xs text-[#1A433D]/70 uppercase">Especificaciones Técnicas (Opcional)</label>
                <textarea rows={4} className="bg-[#F9F6F0] border border-[#1A433D]/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#C87A53] transition-colors" placeholder="Medidas, capacidad de carga, tratamiento térmico, etc."></textarea>
              </div>

              <button type="button" className="bg-[#1A433D] text-[#F9F6F0] font-bold text-sm uppercase tracking-widest py-4 rounded-lg hover:bg-[#112d29] transition-colors mt-4">
                Solicitar Cotización
              </button>
            </form>
          </motion.div>

          {/* Datos de Contacto */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3 className="font-sans font-bold text-[#1A433D] text-4xl uppercase tracking-tight mb-12">
              Gracias por<br />elegirnos
            </h3>
            
            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#1A433D]/5 flex items-center justify-center border border-[#1A433D]/10 shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C87A53" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <h4 className="font-mono text-xs text-[#1A433D]/50 uppercase tracking-widest mb-1">Dirección Física</h4>
                  <p className="font-sans text-[#1A433D] font-medium">Adolfo López Mateos 110, San Pedro,<br />52105 San Mateo Atenco, Méx.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#1A433D]/5 flex items-center justify-center border border-[#1A433D]/10 shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C87A53" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <h4 className="font-mono text-xs text-[#1A433D]/50 uppercase tracking-widest mb-1">Teléfonos Directos</h4>
                  <p className="font-sans text-[#1A433D] font-medium">722 193 6801<br />722 750 1071</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#1A433D]/5 flex items-center justify-center border border-[#1A433D]/10 shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C87A53" strokeWidth="1.5"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                </div>
                <div>
                  <h4 className="font-mono text-xs text-[#1A433D]/50 uppercase tracking-widest mb-1">Sitio Web Oficial</h4>
                  <a href="https://renovaltarimas.mx" className="font-sans text-[#1A433D] font-medium hover:text-[#C87A53] transition-colors">renovaltarimas.mx</a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
