import React from 'react';
import { motion } from 'framer-motion';

const metrics = [
  { value: '9,000 m³', label: 'Volumen de Concreto Ejecutado', desc: 'Capacidad comprobada en obras de gran escala con control de calidad certificado en cada vaciado.' },
  { value: '800K', label: 'Metros Cuadrados Intervenidos', desc: 'Experiencia acumulada en proyectos industriales, comerciales y de infraestructura a nivel nacional.' },
  { value: '100%', label: 'Índice de Cumplimiento', desc: 'Historial sin precedentes en entrega de proyectos dentro de presupuesto y tiempos acordados contractualmente.' },
];

const stats = [
  { value: '+200', label: 'Proyectos completados' },
  { value: '+15', label: 'Años de experiencia' },
  { value: 'ISO', label: '9001:2015 Certificado' },
  { value: '24/7', label: 'Soporte de emergencia' },
];

const MetricsSection: React.FC = () => {
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemFadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="py-32 bg-verde-profundo text-blanco-lino relative overflow-hidden" id="metricas">
      {/* Dynamic background shapes */}
      <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-lima-electrico/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-[60%] -right-[10%] w-[40%] h-[40%] bg-terracota/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-center gap-3 mb-6 origin-left"
        >
          <div className="w-12 h-px bg-lima-electrico"></div>
          <span className="font-mono text-xs font-semibold text-lima-electrico tracking-widest uppercase">Datos & Métricas</span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-8">
            Resultados que<br />respaldan nuestra trayectoria
          </h2>
          <div className="w-16 h-1.5 bg-lima-electrico mb-20 rounded-full"></div>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {metrics.map((item, i) => (
            <motion.div 
              key={i} 
              variants={itemFadeUp}
              whileHover={{ y: -5 }}
              className="bg-blanco-lino/[0.03] p-10 lg:p-12 border-t-4 border-lima-electrico relative overflow-hidden rounded-b-2xl shadow-xl backdrop-blur-sm"
            >
              {/* Glassmorphism subtle glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-lima-electrico/10 rounded-full blur-3xl"></div>
              
              <motion.span 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 + (i * 0.1), type: "spring" }}
                className="font-mono text-5xl lg:text-6xl font-medium text-lima-electrico block mb-6 drop-shadow-md"
              >
                {item.value}
              </motion.span>
              <h3 className="text-xl font-bold mb-4 tracking-wide">{item.label}</h3>
              <p className="font-light text-base text-blanco-lino/60 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              variants={itemFadeUp}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(249, 246, 240, 0.05)" }}
              className="border border-lima-electrico/20 p-8 flex flex-col items-center justify-center text-center rounded-xl transition-colors duration-300 backdrop-blur-md"
            >
              <span className="font-mono text-3xl lg:text-4xl font-medium text-lima-electrico mb-3">{stat.value}</span>
              <span className="font-medium text-[11px] text-blanco-lino/70 uppercase tracking-[0.2em]">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default MetricsSection;
