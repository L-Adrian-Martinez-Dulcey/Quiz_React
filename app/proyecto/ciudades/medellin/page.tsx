import ImageWrapper from "@/components/ImageWrapper";

export default function Medellin() {
  return (
    <main className="min-h-screen p-8 bg-gradient-to-b from-green-100 to-white">
      <section className="max-w-3xl mx-auto bg-white shadow-xl p-8 rounded-2xl border border-green-200">
        
        <h1 className="text-5xl font-extrabold text-green-700 mb-6 tracking-tight">
          Medellín
        </h1>

        <ImageWrapper
          src="/ciudades2/medellin.jpg"
          alt="Medellín"
          className="w-full h-72 object-cover mb-8 rounded-xl shadow-lg"
        />

        <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
          <p>
            <strong className="text-green-700">Población:</strong> 2.5 millones aprox.
          </p>

          <h2 className="text-3xl font-semibold text-green-800">Atractivos turísticos</h2>

          <ul className="list-disc list-inside space-y-2">
            <li>🌆 Plaza Botero</li>
            <li>🏞️ Pueblito Paisa</li>
          </ul>

          <p>
            Medellín es conocida como la “Ciudad de la Eterna Primavera” gracias a su clima
            agradable, innovación urbana y paisajes montañosos.
          </p>
        </div>

        <a
          href="/proyecto/ciudades"
          className="inline-block mt-8 text-green-800 text-lg font-semibold hover:underline"
        >
          ← Volver a ciudades
        </a>
      </section>
    </main>
  );
}
