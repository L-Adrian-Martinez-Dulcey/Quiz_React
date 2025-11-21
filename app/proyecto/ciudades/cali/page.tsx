import ImageWrapper from "@/components/ImageWrapper";

export default function Cali() {
  return (
    <main className="min-h-screen p-8 bg-gradient-to-b from-yellow-100 to-white">
      <section className="max-w-3xl mx-auto bg-white shadow-xl p-8 rounded-2xl border border-yellow-200">

        <h1 className="text-5xl font-extrabold text-yellow-700 mb-6">Cali</h1>

        <ImageWrapper
          src="/ciudades2/cali.jpg"
          alt="Cali"
          className="w-full h-72 object-cover mb-8 rounded-xl shadow-lg"
        />

        <div className="space-y-4 text-lg text-gray-700">
          <p>
            <strong className="text-yellow-700">Población:</strong> 2.2 millones aprox.
          </p>

          <h2 className="text-3xl font-semibold text-yellow-800">Atractivos turísticos</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>🦁 Zoológico de Cali</li>
            <li>⛰️ Cerro de las Tres Cruces</li>
          </ul>

          <p>
            Cali es la capital mundial de la salsa, una ciudad alegre, cálida y llena de vida.
          </p>
        </div>

        <a href="/proyecto/ciudades" className="inline-block mt-8 text-yellow-700 text-lg font-semibold hover:underline">
          ← Volver a ciudades
        </a>

      </section>
    </main>
  );
}
