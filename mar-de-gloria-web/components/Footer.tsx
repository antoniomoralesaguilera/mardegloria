"use client";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contacto" className="relative bg-burdeos-ink overflow-hidden">
      {/* Cinta dorada superior */}
      <div className="h-px bg-gradient-to-r from-transparent via-oro/60 to-transparent" />

      <div className="px-6 lg:px-20 pt-24 pb-10 max-w-7xl mx-auto">
        {/* Frase tipográfica gigantesca */}
        <p className="font-display italic text-oro-shine text-5xl lg:text-8xl leading-[0.95] text-balance max-w-5xl">
          Una mesa, un equipo, y la memoria de una casa.
        </p>

        <div className="mt-24 grid md:grid-cols-4 gap-12 border-t border-oro/15 pt-12">
          <div className="md:col-span-1">
            <p className="font-display text-crema text-2xl tracking-[0.18em]">MAR <span className="text-oro">·</span> DE</p>
            <p className="font-display text-oro-shine text-4xl tracking-[0.06em] leading-none mt-1">GLORIA</p>
            <p className="font-sans text-[0.55rem] tracking-[0.4em] uppercase text-crema/40 mt-2">Restaurante · Antequera</p>
          </div>

          <Col title="Dirección">
            <p>Antequera</p>
            <p>29200 · Málaga</p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Restaurante+Mar+de+Gloria+Antequera"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block italic text-oro hover:text-oro-light"
            >
              Cómo llegar →
            </a>
          </Col>

          <Col title="Contacto">
            <p>
              <a href="tel:+34951991276" className="hover:text-oro-light">951 991 276</a>
            </p>
            <p>
              <a href="https://wa.me/34671155211" target="_blank" rel="noreferrer" className="hover:text-oro-light">
                WhatsApp · +34 671 155 211
              </a>
            </p>
            <p>
              <a href="mailto:restaurante@mardegloria.es" className="hover:text-oro-light">restaurante@mardegloria.es</a>
            </p>
          </Col>

          <Col title="Síganos">
            <a href="https://instagram.com/mar_degloria" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-oro hover:text-oro-light not-italic">
              <Instagram size={12} /> @mar_degloria
            </a>
            <p><a href="https://facebook.com/MarDGloria" target="_blank" rel="noreferrer" className="hover:text-oro-light">Facebook · MarDGloria</a></p>
            <p><a href="https://tiktok.com/@mardegloria" target="_blank" rel="noreferrer" className="hover:text-oro-light">TikTok · @mardegloria</a></p>
            <p><a href="https://twitter.com/soyMardeGloria" target="_blank" rel="noreferrer" className="hover:text-oro-light">X · @soyMardeGloria</a></p>
          </Col>
        </div>

        <div className="mt-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[0.6rem] tracking-[0.4em] uppercase text-crema/35 font-sans">
          <p>© {new Date().getFullYear()} Mar de Gloria — Todos los derechos reservados</p>
          <p>Aviso legal · Privacidad · Cookies</p>
        </div>
      </div>

      {/* Banner enorme inferior, tipo neón impreso */}
      <p className="font-display text-oro/10 text-[20vw] leading-none tracking-tight text-center -mt-8 select-none pointer-events-none">
        MAR&nbsp;DE&nbsp;GLORIA
      </p>
    </footer>
  );
}

function Col({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="font-sans text-[0.6rem] tracking-[0.45em] uppercase text-oro mb-4">— {title}</h4>
      <div className="font-display italic text-crema/75 text-base leading-relaxed space-y-1">{children}</div>
    </div>
  );
}
