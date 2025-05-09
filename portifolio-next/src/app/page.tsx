import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />

      <section className="h-195 bg-gray-dark text-white px-6 py-20">
        <h2 className="text-3xl font-bold mb-4 bg-black">Conteúdo do portfólio</h2>
        <p className="max-w-1">
          Aqui você pode mostrar seus projetos, experiências ou habilidades.
        </p>
      </section>
    </main>
  );
}
