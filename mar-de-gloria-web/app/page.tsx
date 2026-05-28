import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Filosofia from "@/components/Filosofia";
import Carta from "@/components/Carta";
import Galeria from "@/components/Galeria";
import Reserva from "@/components/Reserva";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Filosofia />
      <Carta />
      <Galeria />
      <Reserva />
      <Footer />
    </main>
  );
}
