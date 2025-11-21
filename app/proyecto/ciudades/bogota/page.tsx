import ImageWrapper from "@/components/ImageWrapper";

export default function Bogota() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white pb-16">

      {/* HERO SECTION */}
      <section className="relative w-full h-96 mb-12">
        <img
          src="/ciudades2/bogota.jpg"
          alt="Bogotá"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <h1 className="text-6xl font-extrabold drop-shadow-lg tracking-wide">
            Bogotá
          </h1>
          <p className="text-lg mt-3 opacity-90">
            La capital vibrante, cultural y moderna de Colombia.
          </p>
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="max-w-4xl mx-auto px-6 space-y-10">

        {/* CARD DE INFORMACIÓN */}
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-xl">
          <h2 className="text-3xl font-bold text-blue-400 mb-4">
            🏙 Información General
          </h2>

          <p className="text-gray-200 text-lg">
            <strong className="text-blue-300">Población:</strong> 7.9 millones aprox.
          </p>

          <p className="mt-4 text-gray-300 leading-relaxed">
            Bogotá es el epicentro cultural, educativo y económico del país. 
            Ubicada a 2.600 msnm, mezcla arquitectura moderna, zonas históricas 
            y una vida urbana vibrante.
          </p>
        </div>

        {/* TARJETA DE ATRACTIVOS */}
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-blue-400/30 shadow-lg">
          <h2 className="text-3xl font-bold text-blue-300 mb-4">🌟 Atractivos Turísticos</h2>

          <ul className="space-y-3 text-gray-200 text-lg ml-4">
            <li>⛰️ <strong className="text-blue-300">Monserrate</strong> — vista panorámica de toda la ciudad.</li>
            <li>🏛️ <strong className="text-blue-300">Museo del Oro</strong> — uno de los más importantes de Latinoamérica.</li>
            <li>🎨 <strong className="text-blue-300">Barrio La Candelaria</strong> — historia, arte y arquitectura colonial.</li>
          </ul>
        </div>

        {/* IMAGEN ADICIONAL */}
        <div className="rounded-2xl shadow-xl overflow-hidden">
          <ImageWrapper
            src="/ciudades2/bogota2.jpg"
            alt="Bogotá Centro"
            className="w-full h-72 object-cover"
          />
        </div>

        {/* BOTÓN VOLVER */}
        <div className="text-center pt-6">
          <a
            href="/proyecto/ciudades"
            className="inline-block px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 
                       transition-all shadow-lg text-white font-semibold"
          >
            ← Volver a ciudades
          </a>
        </div>

      </section>
    </main>
  );
}
