import React, { useEffect, useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const navLinks = [
  { name: 'Presentación', href: '#presentacion' },
  { name: 'Filosofía', href: '#filosofia' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Proceso', href: '#proceso' },
  { name: 'Responsabilidad', href: '#responsabilidad' },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
    
    // Simple scroll spy logic
    const sections = navLinks.map(link => link.href.substring(1));
    let current = '';
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element && element.getBoundingClientRect().top <= 150) {
        current = section;
      }
    }
    setActiveSection(current);
  });

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 transition-all duration-500 rounded-xl backdrop-blur-md border border-white/10 ${
        isScrolled 
          ? 'bg-[#1A433D]/90 text-[#F9F6F0]' 
          : 'bg-[#F9F6F0]/90 text-[#1A433D]'
      }`}
    >
      <div className="px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="font-bold text-xl tracking-[0.15em] cursor-pointer flex items-center gap-1">
          <img src="/logo.png" alt="R" className="h-6 w-auto object-contain" />
          ENO<span className="text-[#C87A53]">VAL</span>
        </div>
        
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="relative text-xs font-medium uppercase tracking-widest hover:text-[#C87A53] transition-colors"
            >
              {link.name}
              {activeSection === link.href.substring(1) && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#C87A53]"
                />
              )}
            </a>
          ))}
        </div>

        <button className="hidden md:block bg-[#1A433D] text-[#F9F6F0] hover:bg-[#C87A53] font-bold text-xs uppercase tracking-widest px-6 py-2 rounded-lg transition-colors border border-transparent hover:border-[#1A433D]/20">
          Cotizar
        </button>
      </div>
    </motion.nav>
  );
}
