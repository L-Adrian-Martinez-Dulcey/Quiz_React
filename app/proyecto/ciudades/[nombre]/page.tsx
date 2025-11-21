"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useParams } from "next/navigation";

export default function CiudadDinamica() {
  const { nombre } = useParams();

  // Ajustamos la inicial para que se vea bonito
  const ciudad = String(nombre).charAt(0).toUpperCase() + String(nombre).slice(1);

  return (
    <main className="min-h-screen p-10 bg-gradient-to-b from-blue-50 to-white">
      
      {/* Título */}
      <h1 className="text-4xl font-extrabold text-blue-800 mb-6 text-center">
        {ciudad}
      </h1>

      {/* Imagen */}
      <div className="max-w-4xl mx-auto mb-8 overflow-hidden rounded-2xl shadow-xl">
        <img
          src={`/ciudades/.jpg`}
          alt={ciudad}
          className="w-full h-80 object-cover"
        />
      </div>

      {/* Card con la info */}
      <Card className="max-w-3xl mx-auto border-blue-200 shadow-lg bg-white/80 backdrop-blur rounded-2xl">
        <CardContent className="p-6 text-gray-700 leading-relaxed text-lg">
          <p>
            Esta es una página generada dinámicamente para la ciudad de{" "}
            <strong className="text-blue-700">{ciudad}</strong>.
          </p>
        </CardContent>
      </Card>

      {/* Botón volver */}
      <div className="text-center mt-10">
        <a
          href="/proyecto/ciudades"
          className="
            inline-block px-6 py-3 rounded-xl 
            bg-blue-600 text-white font-semibold 
            shadow-lg shadow-blue-300
            hover:bg-blue-700 
            transition-all duration-300
          "
        >
          ← Volver a Ciudades
        </a>
      </div>
    </main>
  );
}
