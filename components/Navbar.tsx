"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#manifiesto", label: "Manifiesto", num: "I" },
  { href: "#carta", label: "La Carta", num: "II" },
  { href: "#sala", label: "La Sala", num: "III" },
  { href: "#reserva", label: "Reservar", num: "IV" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [section, setSection] = useState("I");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + window.innerHeight / 3;
      let current = "I";
      links.forEach((l) => {
        const el = document.querySelector(l.href) as HTMLElement | null;
        if (el && el.offsetTop <= y) current = l.num;
      });
      setSection(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Rail vertical fijo a la izquierda — propio del proyecto */}
      <aside className="hidden lg:flex fixed left-6 top-0 bottom-0 z-40 flex-col items-center justify-between py-10 pointer-events-none">
        <a href="#top" className="pointer-events-auto font-display text-crema text-xl tracking-[0.4em] [writing-mode:vertical-rl] rotate-180">
          MAR <span className="text-oro">·</span> DE <span className="text-oro">·</span> GLORIA
        </a>
        <div className="pointer-events-auto flex flex-col items-center gap-3">
          {links.map((l) => (
            <a key={l.num} href={l.href} className="group relative block py-2">
              <span className={`block font-display text-xs transition-all ${section === l.num ? "text-oro-light" : "text-crema/40 hover:text-crema/70"}`}>
                {l.num}
              </span>
              {section === l.num && (
                <motion.span
                  layoutId="railDot"
                  className="absolute -right-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-oro"
                />
              )}
            </a>
          ))}
          <span className="mt-2 w-px h-12 bg-oro/30" />
          <span className="font-sans text-[0.55rem] tracking-[0.4em] uppercase text-crema/40 [writing-mode:vertical-rl] rotate-180">
            est. Málaga
          </span>
        </div>
      </aside>

      {/* Top bar mínima */}
      <header className="fixed top-0 inset-x-0 z-40 px-6 lg:px-20 h-16 flex items-center justify-between mix-blend-difference text-crema">
        <span className="lg:hidden font-display text-sm tracking-[0.3em]">M·D·G</span>
        <span className="hidden lg:block font-sans text-[0.6rem] tracking-[0.5em] uppercase">
          Cap. {section} · 2026
        </span>
        <button
          onClick={() => setOpen(true)}
          className="font-sans text-[0.65rem] tracking-[0.45em] uppercase border border-current px-4 py-2 hover:bg-current hover:text-burdeos transition-colors"
        >
          Índice
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 telon"
          >
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.7, ease: [0.77, 0, 0.175, 1] }}
              className="absolute inset-0 grid lg:grid-cols-[1fr_1.4fr]"
            >
              <div className="hidden lg:flex relative items-end p-12">
                <div>
                  <p className="font-display italic text-oro-light text-lg">— Restaurante</p>
                  <p className="mt-2 font-display text-5xl leading-none text-oro-shine">Mar de Gloria</p>
                  <p className="mt-6 max-w-xs text-crema/70 text-sm font-light">
                    Una casa de cocina tradicional con mirada contemporánea, en el corazón de Málaga.
                  </p>
                </div>
              </div>

              <nav className="relative flex flex-col justify-center p-10 lg:p-20 bg-burdeos-deep">
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-6 right-6 lg:top-10 lg:right-10 font-sans text-[0.65rem] tracking-[0.45em] uppercase text-crema/70 hover:text-oro"
                >
                  Cerrar ✕
                </button>
                <ol className="space-y-3 lg:space-y-1">
                  {links.map((l, i) => (
                    <motion.li
                      key={l.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + i * 0.08 }}
                    >
                      <a
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className="group flex items-baseline gap-6 border-b border-oro/15 py-6"
                      >
                        <span className="font-display text-oro/60 text-sm w-8">{l.num}</span>
                        <span className="font-display text-4xl lg:text-6xl text-crema group-hover:text-oro-light group-hover:italic transition-all">
                          {l.label}
                        </span>
                      </a>
                    </motion.li>
                  ))}
                </ol>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
