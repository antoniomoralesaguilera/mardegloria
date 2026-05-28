"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Filosofia() {
  return (
    <section id="manifiesto" className="relative papel py-32 lg:py-48 px-6 lg:px-32 overflow-hidden">
      {/* Capítulo grande de fondo */}
      <span className="absolute -top-10 right-4 lg:right-20 font-display text-[14rem] lg:text-[26rem] leading-none text-burdeos/[0.06] pointer-events-none select-none">
        II
      </span>

      <div className="relative max-w-6xl mx-auto">
        {/* Cabecera editorial */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-20">
          <div>
            <p className="font-sans text-[0.65rem] tracking-[0.5em] uppercase text-burdeos/70">Capítulo Segundo</p>
            <h2 className="mt-4 font-display italic text-burdeos text-6xl lg:text-8xl leading-[0.9]">
              Manifiesto<span className="text-oro">.</span>
            </h2>
          </div>
          <p className="font-display italic text-burdeos-deep/70 text-lg lg:text-right max-w-sm">
            — Sobre por qué hacemos lo que hacemos, y cómo lo hacemos.
          </p>
        </div>

        {/* Columna editorial con drop cap + imagen flotante */}
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="font-display text-burdeos-ink text-lg lg:text-xl leading-[1.7]"
          >
            <p className="drop-cap text-balance">
              En el corazón de Málaga, una puerta burdeos abre paso a una mesa donde el recetario andaluz se sirve con la
              precisión de la cocina contemporánea. No buscamos reinventar la tradición; la honramos con producto honesto,
              tiempos respetados y un acabado que sorprende.
            </p>

            <p className="mt-8 text-balance">
              Cada plato es una conversación entre lo que fue —el puchero, la ensaladilla, la porra antequerana— y lo
              que está siendo: técnica, mano y memoria sobre la misma mesa.
            </p>

            <div className="mt-10 flex items-center gap-4">
              <span className="h-px w-16 bg-oro" />
              <span className="font-sans text-[0.65rem] tracking-[0.45em] uppercase text-burdeos">
                El equipo de Mar de Gloria
              </span>
            </div>
          </motion.div>

          {/* Polaroid girada */}
          <motion.figure
            initial={{ opacity: 0, rotate: -8, y: 40 }}
            whileInView={{ opacity: 1, rotate: 3, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative bg-crema-paper p-4 pb-16 shadow-[0_30px_60px_-25px_rgba(74,0,0,0.45)]"
          >
            <div className="relative aspect-[4/5] w-full bg-burdeos-deep">
              <Image
                src="/images/RESTAURANTE-scaled.jpg"
                alt="Interior del restaurante"
                fill
                sizes="(max-width:1024px) 100vw, 30vw"
                className="object-cover sepia-[0.1]"
              />
            </div>
            <figcaption className="absolute bottom-3 left-0 right-0 text-center font-display italic text-burdeos-ink/70 text-base">
              La sala, una tarde de jueves.
            </figcaption>
          </motion.figure>
        </div>

        {/* Tres principios en línea tipográfica fuerte */}
        <div className="mt-28 grid md:grid-cols-3 border-t border-burdeos/20">
          {[
            { n: "01", t: "Producto", d: "Lonja y mercado, cada amanecer." },
            { n: "02", t: "Memoria", d: "Recetas que cruzan generaciones." },
            { n: "03", t: "Servicio", d: "La sala como continuación de la cocina." }
          ].map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className={`py-10 px-4 md:px-8 ${i < 2 ? "md:border-r border-burdeos/20" : ""}`}
            >
              <span className="font-display text-oro text-sm tracking-[0.4em]">— {p.n}</span>
              <h3 className="mt-3 font-display italic text-burdeos text-4xl">{p.t}</h3>
              <p className="mt-3 text-burdeos-ink/65 text-sm leading-relaxed">{p.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
