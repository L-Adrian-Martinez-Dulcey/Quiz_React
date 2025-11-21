import ImageWrapper from "@/components/ImageWrapper";

export default function Bucaramanga() {
  return (
    <main className="min-h-screen p-10 bg-gradient-to-b from-green-100 via-green-50 to-white">

      {/* TÍTULO CENTRAL CON ESTILO ORGÁNICO */}
      <div className="text-center mb-10">
        <h1 className="text-6xl font-extrabold text-green-800 drop-shadow-sm">
          Bucaramanga
        </h1>
        <p className="text-green-700 mt-2 text-lg">
          La ciudad bonita • Naturaleza • Paisajes
        </p>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <section className="max-w-4xl mx-auto space-y-12">

        {/* IMAGEN PRINCIPAL */}
        <div className="overflow-hidden rounded-3xl shadow-xl border-4 border-green-300">
          <ImageWrapper
            src="/ciudades2/bucaramanga.jpg"
            alt="Bucaramanga"
            className="w-full h-80 object-cover"
          />
        </div>

        {/* SECCIÓN INFORMATIVA TIPO “NATURALEZA” */}
        <div className="bg-green-50 border border-green-200 rounded-3xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-green-800 mb-4">🌱 Información General</h2>

          <p className="text-gray-700 text-lg">
            <strong className="text-green-700">Población:</strong> 600 mil aprox.
          </p>

          <p className="text-gray-700 text-lg mt-4 leading-relaxed">
            Bucaramanga es reconocida por su calidad de vida, zonas verdes, clima cálido 
            y vistas montañosas. Es una ciudad tranquila, hermosa y llena de naturaleza.
          </p>
        </div>

        {/* ATRACTIVOS TURÍSTICOS */}
        <div className="bg-white border border-green-300 rounded-3xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-green-700 mb-4">🌿 Atractivos turísticos</h2>

          <ul className="space-y-3 text-gray-700 text-lg ml-4">
            <li>🏞️ <strong className="text-green-700">Parque Nacional del Chicamocha</strong> — maravilla natural.</li>
            <li>⛪ <strong className="text-green-700">Catedral de la Sagrada Familia</strong> — icono arquitectónico.</li>
            <li>🌤️ <strong className="text-green-700">Cerro del Santísimo</strong> — vista panorámica única.</li>
          </ul>
        </div>

        {/* IMAGEN EXTRA */}
        <div className="rounded-3xl overflow-hidden shadow-lg border-4 border-green-200">
          <ImageWrapper
            src="/ciudades2/bucaramanga2.jpg"
            alt="Paisaje Bucaramanga"
            className="w-full h-72 object-cover"
          />
        </div>

        {/* BOTÓN VOLVER */}
        <div className="text-center pt-4">
          <a
            href="/proyecto/ciudades"
            className="
              inline-block px-6 py-3 rounded-xl 
              bg-green-700 text-white font-semibold 
              shadow-lg hover:bg-green-800 
              transition-all
            "
          >
            ← Volver a ciudades
          </a>
        </div>
      </section>
    </main>
  );
}
