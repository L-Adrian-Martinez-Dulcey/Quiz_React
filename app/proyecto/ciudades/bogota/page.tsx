import ImageWrapper from "@/components/ImageWrapper";

export default function Bogota() {
  return (
    <main className="min-h-screen p-8 bg-gradient-to-b from-blue-100 to-white">
      <section className="max-w-3xl mx-auto bg-white shadow-xl p-8 rounded-2xl border border-blue-200">

        <h1 className="text-5xl font-extrabold text-blue-700 mb-6">Bogotá</h1>

        <ImageWrapper
          src="/ciudades2/bogota.jpg"
          alt="Bogotá"
          className="w-full h-72 object-cover mb-8 rounded-xl shadow-lg"
        />

        <div className="space-y-4 text-lg text-gray-700">
          <p>
            <strong className="text-blue-700">Población:</strong> 7.9 millones aprox.
          </p>

          <h2 className="text-3xl font-semibold text-blue-800">Atractivos turísticos</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>⛰️ Cerro de Monserrate</li>
            <li>🏛️ Museo del Oro</li>
          </ul>

          <p>
            Bogotá es la capital del país, una ciudad vibrante con historia, cultura y vida urbana.
          </p>
        </div>

        <a href="/proyecto/ciudades" className="inline-block mt-8 text-blue-700 text-lg font-semibold hover:underline">
          ← Volver a ciudades
        </a>

      </section>
    </main>
  );
}
