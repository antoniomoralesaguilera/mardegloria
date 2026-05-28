# Mar de Gloria — Web

Experiencia digital del Restaurante **Mar de Gloria** (Málaga). Cocina tradicional, estilo contemporáneo.

## Stack

- **Next.js 14** (App Router) + **React 18** + **TypeScript estricto**
- **Tailwind CSS** con sistema de diseño basado en la identidad visual oficial (burdeos `#6d0000`, oro `#9b8548`, nácar `#c9d9d6`, obsidiana `#020202`)
- **Framer Motion** para parallax, reveals, transiciones de pestaña y microinteracciones
- **Firebase** (Firestore + Auth) preparado para gestionar carta, reservas y media

## Tipografías

- Display: **Cormorant Garamond** (servida via `next/font`)
- Sans: **Jost** (servida via `next/font`)

## Estructura

```
mar-de-gloria-web/
├── app/
│   ├── layout.tsx
│   ├── page.tsx            # Landing (Hero + Filosofía + Carta + Galería + Reserva)
│   ├── carta/page.tsx      # Carta dedicada
│   └── globals.css
├── components/             # Navbar, Hero, Filosofia, Carta, Galeria, Reserva, Footer
├── lib/
│   ├── menu.ts             # Carta completa tipada (4 secciones)
│   └── firebase.ts         # Inicialización idempotente
├── public/
│   ├── carta.pdf           # PDF original de la carta
│   └── images/             # Fotos del restaurante + provisionales
├── firestore.schema.json   # Esquema de colecciones
├── tailwind.config.ts
└── package.json
```

## Puesta en marcha

```bash
npm install
cp .env.local.example .env.local   # rellena con credenciales Firebase si procede
npm run dev
```

Abre http://localhost:3000

## Producción

```bash
npm run build && npm run start
```

## Notas de diseño

- **Dark mode nativo**. Fondos sobre `#020202` con texturas de grano y *glows* burdeos.
- **Acentos exclusivos** en gradiente oro (`#c8ad6b → #9b8548 → #6f5d2e`) para CTAs, hover y subrayados.
- **Tipografía editorial**: serif itálica para platos y titulares, sans en versalitas con *letter-spacing* amplio para etiquetas.
- **Mobile-first**, navbar con drawer animado, parallax en el hero y reveals on-scroll en todas las secciones.

## Imágenes

Las fotos de la fachada, sala, ensaladilla y solomillo provienen del material oficial del restaurante (carpeta `photos/`). Dos imágenes de Unsplash quedan como provisionales en la galería; sustitúyelas en `components/Galeria.tsx` cuando se disponga de fotografía profesional.
