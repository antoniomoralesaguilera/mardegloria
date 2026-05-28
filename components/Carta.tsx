"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { carta, type Seccion } from "@/lib/menu";

const romanos: Record<Seccion["slug"], string> = {
  entrantes: "I",
  pescados: "II",
  carnes: "III",
  guarniciones: "IV"
};

export default function Carta() {
  const [active, setActive] = useState<Seccion["slug"]>("entrantes");
  const seccion = carta.find((s) => s.slug === active)!;

  return (
    <section id="carta" className="relative telon py-28 lg:py-40 overflow-hidden">
      {/* Encabezado de capítulo con monograma central */}
      <div className="text-center px-6 lg:px-20">
        <motion.span
          initial={{ opacity: 0, letterSpacing: "0.2em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.5em" }}
          viewport={{ once: true }}
          transition={{ duration: 1.4 }}
          className="block font-sans text-[0.7rem] uppercase text-oro/80"
        >
          Capítulo Tercero
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-6 font-display"
        >
          <span className="block font-display italic text-oro-shine text-7xl lg:text-9xl leading-none">
            La&nbsp;Carta
          </span>
        </motion.h2>

        <div className="mt-6 flex items-center justify-center gap-3 text-oro/60">
          <span className="h-px w-12 bg-oro/40" />
          <span className="font-display italic text-sm">cocina tradicional · estilo contemporáneo</span>
          <span className="h-px w-12 bg-oro/40" />
        </div>
      </div>

      {/* Pestañas tipo cinta */}
      <div className="mt-20 px-6 lg:px-20">
        <div className="max-w-5xl mx-auto grid grid-cols-4 border-y border-oro/25">
          {carta.map((s) => (
            <button
              key={s.slug}
              onClick={() => setActive(s.slug)}
              className={`relative py-6 px-2 group transition-colors ${
                active === s.slug ? "bg-burdeos-ink/40" : "hover:bg-burdeos-ink/20"
              }`}
            >
              <span className={`block font-display text-base lg:text-xl ${active === s.slug ? "text-oro-light italic" : "text-crema/60"}`}>
                {romanos[s.slug]}
              </span>
              <span className={`mt-1 block font-sans text-[0.6rem] lg:text-[0.7rem] tracking-[0.35em] uppercase ${
                active === s.slug ? "text-crema" : "text-crema/50"
              }`}>
                {s.titulo}
              </span>
              {active === s.slug && (
                <motion.span
                  layoutId="tabCinta"
                  className="absolute -bottom-px left-0 right-0 h-[2px] bg-oro"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Contenido: lista de platos como un menú impreso de dos columnas */}
      <div className="mt-16 px-6 lg:px-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={seccion.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <ol className="grid md:grid-cols-2 gap-x-16 gap-y-10">
              {seccion.platos.map((p, i) => (
                <motion.li
                  key={p.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="group"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-sans text-[0.65rem] tracking-[0.3em] text-oro/60 mt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="flex-1 font-display italic text-crema text-2xl group-hover:text-oro-light transition-colors">
                      {p.nombre}
                    </h3>
                    <span className="font-display italic text-oro text-xl whitespace-nowrap">
                      {p.precio}€
                    </span>
                  </div>

                  {/* Línea de puntos clásica de menú */}
                  <div className="mt-2 ml-7 flex items-center gap-2 text-oro/15 select-none">
                    {Array.from({ length: 40 }).map((_, k) => (
                      <span key={k} className="text-[0.5rem]">·</span>
                    ))}
                  </div>

                  {p.descripcion && (
                    <p className="mt-2 ml-7 font-display italic text-crema/65 text-sm">
                      {p.descripcion}
                    </p>
                  )}
                  {p.descripcionEn && (
                    <p className="mt-1 ml-7 font-sans text-[0.6rem] tracking-[0.2em] uppercase text-crema/30">
                      {p.descripcionEn}
                    </p>
                  )}
                  {p.nota && (
                    <p className="mt-1 ml-7 font-display italic text-oro/70 text-xs">({p.nota})</p>
                  )}
                </motion.li>
              ))}
            </ol>

            {seccion.acompanamientos && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-20 text-center"
              >
                <p className="font-display italic text-oro text-lg">
                  · Complete su plato con el acompañamiento perfecto ·
                </p>
                <p className="mt-3 font-sans text-[0.65rem] tracking-[0.35em] uppercase text-crema/55">
                  {seccion.acompanamientos.join("  ·  ")}
                </p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="mt-20 flex justify-center">
          <a
            href="/carta.pdf"
            target="_blank"
            className="inline-flex items-center gap-3 font-sans text-[0.65rem] tracking-[0.4em] uppercase text-oro hover:text-oro-light"
          >
            <span className="h-px w-12 bg-current" />
            Descargar carta en PDF
            <span className="h-px w-12 bg-current" />
          </a>
        </div>
      </div>
    </section>
  );
}
