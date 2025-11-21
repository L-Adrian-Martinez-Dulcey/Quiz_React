import ImageWrapper from "@/components/ImageWrapper";

export default function Pereira() {
  return (
    <main className="min-h-screen p-8 bg-gradient-to-b from-purple-100 to-white">
      <section className="max-w-3xl mx-auto bg-white shadow-xl p-8 rounded-2xl border border-purple-200">

        <h1 className="text-5xl font-extrabold text-purple-700 mb-6">Pereira</h1>

        <ImageWrapper
          src="/ciudades2/pereira.jpg"
          alt="Pereira"
          className="w-full h-72 object-cover mb-8 rounded-xl shadow-lg"
        />

        <div className="space-y-4 text-lg text-gray-700">
          <p>
            <strong className="text-purple-700">Población:</strong> 480 mil aprox.
          </p>

          <h2 className="text-3xl font-semibold text-purple-800">Atractivos turísticos</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>🐾 Bioparque Ukumarí</li>
            <li>🗿 Plaza de Bolívar</li>
          </ul>

          <p>
            Pereira es una ciudad moderna del Eje Cafetero, rodeada de naturaleza y cultura cafetera.
          </p>
        </div>

        <a href="/proyecto/ciudades" className="inline-block mt-8 text-purple-700 text-lg font-semibold hover:underline">
          ← Volver a ciudades
        </a>

      </section>
    </main>
  );
}
