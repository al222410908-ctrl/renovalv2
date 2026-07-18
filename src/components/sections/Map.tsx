import { useEffect, useRef, useState } from "react";
import { useTranslation } from "@/components/LanguageContext";

declare global {
  interface Window {
    L: any;
  }
}

export function Map() {
  const { t, locale } = useTranslation();
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=19.2736,-99.5329";

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (window.L) {
      setLoaded(true);
      return;
    }

    const cssId = "leaflet-cdn-css";
    if (!document.getElementById(cssId)) {
      const link = document.createElement("link");
      link.id = cssId;
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      link.crossOrigin = "";
      document.head.appendChild(link);
    }

    const jsId = "leaflet-cdn-js";
    if (!document.getElementById(jsId)) {
      const script = document.createElement("script");
      script.id = jsId;
      script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
      script.crossOrigin = "";
      script.onload = () => setLoaded(true);
      document.head.appendChild(script);
    } else {
      const interval = setInterval(() => {
        if (window.L) {
          setLoaded(true);
          clearInterval(interval);
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, []);

  useEffect(() => {
    if (!loaded || !mapContainerRef.current || !window.L) return;

    const L = window.L;
    // Location of the plant in San Mateo Atenco
    const position = [19.2736, -99.5329];

    const map = L.map(mapContainerRef.current, {
      center: position,
      zoom: 15,
      scrollWheelZoom: false,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    const customIcon = L.divIcon({
      html: `
        <div class="relative w-8 h-8 flex items-center justify-center">
          <span class="absolute w-8 h-8 rounded-full bg-[color:var(--lime)] opacity-35 animate-ping"></span>
          <span class="absolute w-5 h-5 rounded-full bg-[color:var(--lime)] border-2 border-[color:var(--mint)]"></span>
        </div>
      `,
      className: "custom-leaflet-marker",
      iconSize: [32, 32],
      iconAnchor: [16, 16],
    });

    L.marker(position, { icon: customIcon })
      .addTo(map)
      .bindPopup(`
        <div class="text-center font-mono">
          <b>RENOVAL Plant</b><br/>
          <span class="text-[9px] opacity-80">${t.contacto.mapMarkerLabel}</span><br/>
          <a href="${mapsUrl}" target="_blank" rel="noopener noreferrer" class="inline-block mt-2 text-[color:var(--lime)] underline hover:text-[color:var(--terracota)] transition-colors">
            ${locale === "es" ? "ABRIR GOOGLE MAPS →" : "OPEN GOOGLE MAPS →"}
          </a>
        </div>
      `)
      .openPopup();

    return () => {
      map.remove();
    };
  }, [loaded, t, locale]);

  return (
    <div className="relative w-full h-[350px] md:h-[400px] border border-[color:var(--terracota)]/40 overflow-hidden group">
      <span className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-[color:var(--terracota)] z-20" />
      <span className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-[color:var(--terracota)] z-20" />
      <span className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-[color:var(--terracota)] z-20" />
      <span className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-[color:var(--terracota)] z-20" />
      
      {/* Absolute overlay button */}
      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4 z-[1000] text-mono text-[10px] uppercase tracking-widest bg-[color:var(--lime)] text-[color:var(--mint)] px-3 py-2 font-bold border border-[color:var(--mint)] hover:bg-[color:var(--mint)] hover:text-[color:var(--lime)] transition shadow-lg"
      >
        {locale === "es" ? "Abrir Google Maps ↗" : "Open Google Maps ↗"}
      </a>
      
      <div ref={mapContainerRef} className="w-full h-full custom-map-filter" />
    </div>
  );
}
export default Map;
