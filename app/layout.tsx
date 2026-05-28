import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap"
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Mar de Gloria · Restaurante",
  description:
    "Cocina tradicional, estilo contemporáneo. Restaurante Mar de Gloria — una experiencia culinaria de autor en un entorno íntimo y elegante.",
  openGraph: {
    title: "Mar de Gloria",
    description: "Cocina tradicional · Estilo contemporáneo",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="font-sans bg-obsidian text-nacar overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
