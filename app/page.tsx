import StudentCard from "@/components/StudentCard";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-10 flex items-start justify-center">
      <div className="max-w-3xl w-full">

        {/* Tarjeta del Estudiante */}
        <div className="bg-white shadow-xl rounded-2xl border border-blue-200 p-8">
          <StudentCard
            name="Lenin Adrian Martinez Dulcey"
            program="Tecnólogo / Técnico — Programa SENA"
            image="/avatar.jpg"
          />
        </div>

        {/* Descripción */}
        <p className="mt-6 text-gray-700 text-lg leading-relaxed">
          Hola, soy nombre es Adrian y este es mi proyecto del Directorio Turístico para Web React.
        </p>

        {/* Botón con estilo mejorado */}
        <a href="/proyecto">
          <Button
            className="
              mt-6 px-6 py-3 
              rounded-xl font-semibold 
              bg-blue-600 text-white
              shadow-lg shadow-blue-300
              hover:bg-blue-700 hover:shadow-blue-400
              transition-all duration-300
            "
          >
            Ir al Proyecto
          </Button>
        </a>

      </div>
    </main>
  );
}
