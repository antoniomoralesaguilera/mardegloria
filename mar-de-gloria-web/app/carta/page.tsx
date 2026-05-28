import Navbar from "@/components/Navbar";
import Carta from "@/components/Carta";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Carta · Mar de Gloria",
  description: "Carta del restaurante Mar de Gloria — Entrantes, Pescados, Carnes y Guarniciones."
};

export default function CartaPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-24">
        <Carta />
      </div>
      <Footer />
    </main>
  );
}
