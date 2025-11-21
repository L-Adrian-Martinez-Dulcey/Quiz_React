import ImageWrapper from "@/components/ImageWrapper";

export default function Cartagena() {
  return (
    <main className="min-h-screen p-8 bg-gradient-to-b from-orange-100 to-white">
      <section className="max-w-3xl mx-auto bg-white shadow-xl p-8 rounded-2xl border border-orange-200">

        <h1 className="text-5xl font-extrabold text-orange-700 mb-6">Cartagena</h1>

        <ImageWrapper
          src="/ciudades2/cartagena.jpg"
          alt="Cartagena"
          className="w-full h-72 object-cover mb-8 rounded-xl shadow-lg"
        />

        <div className="space-y-4 text-lg text-gray-700">
          <p>
            <strong className="text-orange-700">Población:</strong> 1 millón aprox.
          </p>

          <h2 className="text-3xl font-semibold text-orange-800">Atractivos turísticos</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>🏰 Castillo de San Felipe</li>
            <li>🏙️ Ciudad Amurallada</li>
          </ul>

          <p>
            Cartagena es una joya colonial del Caribe, famosa por su historia, playas y atardeceres.
          </p>
        </div>

        <a href="/proyecto/ciudades" className="inline-block mt-8 text-orange-700 text-lg font-semibold hover:underline">
          ← Volver a ciudades
        </a>

      </section>
    </main>
  );
}
