"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yDoor = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  return (
    <section id="top" ref={ref} className="relative min-h-[100svh] telon overflow-hidden">
      {/* Partido asimétrico: izquierda fachada, derecha tipografía editorial */}
      <div className="relative grid lg:grid-cols-[42%_58%] min-h-[100svh]">

        {/* IZQUIERDA — fachada con marco oro y polaroid girada */}
        <motion.div style={{ y: yDoor }} className="relative h-[60svh] lg:h-auto">
          <div className="absolute inset-0 lg:inset-6">
            <Image
              src="/images/FACHADA-scaled.jpg"
              alt="Entrada del restaurante Mar de Gloria"
              fill
              priority
              sizes="(max-width:1024px) 100vw, 42vw"
              className="object-cover grayscale-[0.15] contrast-110"
            />
            <div className="absolute inset-0 bg-burdeos/15 mix-blend-multiply" />
            <div className="absolute inset-0 border border-oro/30 m-3 pointer-events-none" />
          </div>
        </motion.div>

        {/* DERECHA — composición editorial con número de portada */}
        <motion.div style={{ y: yText }} className="relative flex flex-col justify-center px-8 lg:px-20 py-20 lg:py-0">

          {/* Número de capítulo gigante translúcido */}
          <span className="absolute right-6 top-10 lg:right-20 lg:top-20 font-display text-[14rem] lg:text-[22rem] leading-none text-oro/[0.08] pointer-events-none select-none">
            I
          </span>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="relative z-10 max-w-xl"
          >
            <div className="flex items-center gap-4 text-oro">
              <span className="h-px w-12 bg-oro/60" />
              <span className="font-sans text-[0.65rem] tracking-[0.5em] uppercase">Capítulo Primero</span>
            </div>

            <motion.h1
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 font-display leading-[0.88]"
            >
              <span className="block text-crema/85 text-3xl lg:text-5xl tracking-[0.3em] font-light">MAR DE</span>
              <span className="block text-oro-shine text-7xl lg:text-[11rem] tracking-[0.04em] font-medium -ml-1 mt-1">
                Gloria
              </span>
              <span className="block mt-4 text-crema/70 text-[0.7rem] lg:text-xs tracking-[0.6em] font-light">
                · RESTAURANTE ·
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-10 max-w-md font-display italic text-lg lg:text-xl text-crema/75 leading-relaxed"
            >
              «Cocinamos y servimos como lo haríamos para nuestra propia familia.»
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="mt-12 flex flex-wrap items-center gap-6"
            >
              <a
                href="#carta"
                className="group relative font-sans text-[0.7rem] tracking-[0.4em] uppercase text-burdeos-ink bg-oro px-9 py-4 hover:bg-oro-light transition-colors"
              >
                Abrir la carta →
              </a>
              <a
                href="#reserva"
                className="font-display italic text-crema text-lg underline underline-offset-8 decoration-oro/50 hover:decoration-oro decoration-1"
              >
                o reservar una mesa
              </a>
            </motion.div>
          </motion.div>

          {/* Footer del hero — datos editoriales */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="absolute bottom-8 left-8 lg:left-20 right-8 lg:right-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-3 text-[0.6rem] tracking-[0.4em] uppercase text-crema/45 font-sans"
          >
            <span>N.º 01 — Cocina tradicional · Estilo contemporáneo</span>
            <span className="flex items-center gap-3">
              <span className="h-px w-8 bg-oro/40" />
              Pulse para descender
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Banda dorada inferior tipo cinta de carta */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-oro/60 to-transparent" />
    </section>
  );
}
