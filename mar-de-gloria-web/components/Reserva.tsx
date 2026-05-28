"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Reserva() {
  const [enviado, setEnviado] = useState(false);

  return (
    <section id="reserva" className="relative telon py-32 lg:py-44 px-6 lg:px-20 overflow-hidden">
      <span className="absolute -top-10 right-4 lg:right-20 font-display text-[14rem] lg:text-[26rem] leading-none text-oro/[0.06] pointer-events-none select-none">
        V
      </span>

      <div className="relative max-w-5xl mx-auto">
        {/* Cabecera */}
        <div className="text-center">
          <p className="font-sans text-[0.65rem] tracking-[0.5em] uppercase text-oro/80">Capítulo Quinto</p>
          <h2 className="mt-4 font-display italic text-oro-shine text-6xl lg:text-8xl leading-[0.9]">
            Libro de Reservas
          </h2>
          <p className="mt-6 font-display italic text-crema/70 text-lg max-w-xl mx-auto">
            Anote sus datos y le confirmaremos la mesa en menos de doce horas.
          </p>
        </div>

        {/* Tarjeta tipo papel oficial */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-20 relative papel marco-oro p-10 lg:p-16"
        >
          {/* Sello */}
          <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full border-2 border-burdeos/60 bg-crema-paper/90 flex items-center justify-center -rotate-12">
            <div className="text-center font-display text-burdeos">
              <p className="text-[0.5rem] tracking-[0.3em] uppercase">Mar de</p>
              <p className="text-sm italic leading-none">Gloria</p>
              <p className="text-[0.5rem] tracking-[0.3em] uppercase mt-0.5">MMV</p>
            </div>
          </div>

          {enviado ? (
            <div className="text-center py-10">
              <p className="font-display italic text-burdeos text-5xl">Gracias.</p>
              <p className="mt-4 font-display italic text-burdeos-ink/70 text-lg max-w-md mx-auto">
                Hemos anotado su solicitud en nuestro libro. Le escribiremos para confirmar.
              </p>
            </div>
          ) : (
            <>
              <div className="flex items-baseline justify-between border-b border-burdeos/30 pb-4 mb-10">
                <span className="font-display italic text-burdeos text-2xl">Solicitud de mesa</span>
                <span className="font-sans text-[0.65rem] tracking-[0.35em] uppercase text-burdeos-ink/60">
                  Folio N.º {String(Math.floor(Math.random() * 9000) + 1000)}
                </span>
              </div>

              <form
                onSubmit={(e) => { e.preventDefault(); setEnviado(true); }}
                className="grid md:grid-cols-2 gap-x-10 gap-y-8"
              >
                <Field label="Nombre y apellidos" name="nombre" required />
                <Field label="Teléfono de contacto" name="telefono" type="tel" required />
                <Field label="Fecha" name="fecha" type="date" required />
                <Field label="Hora" name="hora" type="time" required />
                <Field label="Comensales" name="comensales" type="number" min={1} max={20} required />
                <Field label="Correo electrónico" name="email" type="email" required />
                <div className="md:col-span-2">
                  <Field label="Ocasión, alergias o notas" name="notas" />
                </div>

                <div className="md:col-span-2 flex flex-col md:flex-row md:items-center md:justify-between gap-6 mt-6 pt-6 border-t border-burdeos/30">
                  <p className="font-display italic text-burdeos-ink/60 text-sm">
                    Para grupos de más de 8, contacte con sala al <span className="text-burdeos">+34 952 00 00 00</span>.
                  </p>
                  <button
                    type="submit"
                    className="group font-sans text-[0.7rem] tracking-[0.4em] uppercase bg-burdeos text-crema-paper px-10 py-4 hover:bg-burdeos-ink transition-colors"
                  >
                    Firmar &amp; enviar →
                  </button>
                </div>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function Field({
  label, name, type = "text", required, min, max
}: { label: string; name: string; type?: string; required?: boolean; min?: number; max?: number }) {
  return (
    <label className="block">
      <span className="font-sans text-[0.6rem] tracking-[0.4em] uppercase text-burdeos/80">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        min={min}
        max={max}
        className="mt-2 w-full bg-transparent border-b-2 border-burdeos/25 focus:border-burdeos outline-none py-2 font-display italic text-xl text-burdeos-ink placeholder:text-burdeos/30 transition-colors"
      />
    </label>
  );
}
