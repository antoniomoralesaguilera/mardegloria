"use client";
import { motion } from "framer-motion";
import Image from "next/image";

type Card = { src: string; alt: string; tag: string; caption: string; rotate: number; size: string };

const cards: Card[] = [
  { src: "/images/RUSA-scaled.jpg", alt: "Ensaladilla rusa de gambas", tag: "Entrante", caption: "Ensaladilla Rusa de Gambas — huevo roto y regañá.", rotate: -4, size: "w-[78%] md:w-[58%]" },
  { src: "/images/SOLOMILLO-AJILLO2-1280x853.jpg", alt: "Solomillo al ajillo", tag: "Carne", caption: "Solomillo al Ajillo, setas, jamón crujiente.", rotate: 3, size: "w-[68%] md:w-[46%]" },
  { src: "/images/RESTAURANTE-scaled.jpg", alt: "Sala", tag: "La sala", caption: "Una noche cualquiera, sala llena.", rotate: -2, size: "w-[82%] md:w-[60%]" },
  { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1400&q=80", alt: "Mise en place", tag: "Cocina", caption: "Mise en place — cinco minutos antes del servicio.", rotate: 5, size: "w-[70%] md:w-[48%]" },
  { src: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=1400&q=80", alt: "Atún rojo", tag: "Pescado", caption: "Atún rojo de almadraba.", rotate: -3, size: "w-[74%] md:w-[52%]" },
  { src: "/images/FACHADA-scaled.jpg", alt: "Fachada", tag: "Bienvenida", caption: "La puerta burdeos — siempre abierta.", rotate: 2, size: "w-[78%] md:w-[55%]" }
];

export default function Galeria() {
  return (
    <section id="sala" className="relative papel py-32 lg:py-48 overflow-hidden">
      <span className="absolute -top-12 left-4 lg:left-20 font-display text-[14rem] lg:text-[26rem] leading-none text-burdeos/[0.06] pointer-events-none select-none">
        IV
      </span>

      <div className="relative px-6 lg:px-32 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-20">
          <div>
            <p className="font-sans text-[0.65rem] tracking-[0.5em] uppercase text-burdeos/70">Capítulo Cuarto</p>
            <h2 className="mt-4 font-display italic text-burdeos text-6xl lg:text-8xl leading-[0.9]">
              La&nbsp;Sala<span className="text-oro">.</span>
            </h2>
          </div>
          <p className="font-display italic text-burdeos-deep/70 text-lg max-w-sm">
            — Postales de un servicio. Producto, sala y oficio.
          </p>
        </div>

        {/* Tablón de postales en zigzag */}
        <div className="relative">
          {cards.map((c, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 60, rotate: c.rotate * 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: c.rotate }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ rotate: 0, scale: 1.03, zIndex: 10 }}
              className={`relative ${c.size} ${i % 2 === 0 ? "ml-0 md:ml-[6%]" : "ml-auto mr-0 md:mr-[6%]"} -mt-10 md:-mt-24 first:mt-0 bg-crema-paper p-3 md:p-4 pb-12 md:pb-16 shadow-[0_25px_50px_-20px_rgba(74,0,0,0.55)]`}
            >
              <div className="relative aspect-[4/3] w-full bg-burdeos-deep">
                <Image
                  src={c.src}
                  alt={c.alt}
                  fill
                  sizes="(max-width: 768px) 80vw, 50vw"
                  className="object-cover sepia-[0.1]"
                />
                <span className="absolute top-3 left-3 bg-burdeos px-2 py-1 font-sans text-[0.55rem] tracking-[0.35em] uppercase text-crema">
                  {c.tag}
                </span>
              </div>
              <figcaption className="absolute bottom-2 md:bottom-3 left-4 right-4 font-display italic text-burdeos-ink/80 text-sm md:text-base text-center">
                {c.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
