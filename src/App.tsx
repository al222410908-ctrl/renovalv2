import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PresentationSection from './components/PresentationSection';
import PhilosophySection from './components/PhilosophySection';
import PillarsSection from './components/PillarsSection';
import ServicesSection from './components/ServicesSection';
import ProcessSection from './components/ProcessSection';
import ResponsibilitySection from './components/ResponsibilitySection';
import ClientsSection from './components/ClientsSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="font-sans antialiased text-[#1A433D] bg-[#F9F6F0] selection:bg-[#A3E14B] selection:text-[#1A433D]">
      <Navbar />
      
      <main>
        <HeroSection />
        <PresentationSection />
        <PhilosophySection />
        <PillarsSection />
        <ServicesSection />
        <ProcessSection />
        <ResponsibilitySection />
        <ClientsSection />
        <ContactSection />
      </main>

      <footer className="bg-[#1A433D] text-[#F9F6F0] py-12 border-t border-[#C87A53]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center flex flex-col gap-4">
          <div className="font-bold text-xl tracking-[0.15em] cursor-pointer flex items-center justify-center gap-1">
            <img src="/logo.png" alt="R" className="h-6 w-auto object-contain" />
            ENO<span className="text-[#C87A53]">VAL</span>
          </div>
          <p className="font-mono text-xs text-[#F9F6F0]/50 tracking-widest uppercase mt-4">
            © 2026 RENOVAL S.A. DE C.V. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
