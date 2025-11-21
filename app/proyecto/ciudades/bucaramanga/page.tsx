import ImageWrapper from "@/components/ImageWrapper";

export default function Bucaramanga() {
  return (
    <main className="min-h-screen p-8 bg-gradient-to-b from-red-100 to-white">
      <section className="max-w-3xl mx-auto bg-white shadow-xl p-8 rounded-2xl border border-red-200">

        <h1 className="text-5xl font-extrabold text-red-700 mb-6">Bucaramanga</h1>

        <ImageWrapper
          src="/ciudades2/bucaramanga.jpg"
          alt="Bucaramanga"
          className="w-full h-72 object-cover mb-8 rounded-xl shadow-lg"
        />

        <div className="space-y-4 text-lg text-gray-700">
          <p>
            <strong className="text-red-700">Población:</strong> 600 mil aprox.
          </p>

          <h2 className="text-3xl font-semibold text-red-800">Atractivos turísticos</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>🏞️ Parque Nacional del Chicamocha</li>
            <li>⛪ Catedral de la Sagrada Familia</li>
          </ul>

          <p>
            Bucaramanga es conocida por su calidad de vida, parques y hermosos paisajes montañosos.
          </p>
        </div>

        <a href="/proyecto/ciudades" className="inline-block mt-8 text-red-700 text-lg font-semibold hover:underline">
          ← Volver a ciudades
        </a>

      </section>
    </main>
  );
}
