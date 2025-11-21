import PageHeader from "@/components/PageHeader"; 
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Proyecto() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-10 flex justify-center">
      <div className="max-w-3xl w-full">

        {/* Título */}
        <h1 className="text-4xl font-extrabold text-blue-800 tracking-tight mb-8 text-center">
          Directorio Turístico Interactivo
        </h1>

        {/* Card con estilo mejorado */}
        <Card className="
          mb-6 p-1 
          bg-gradient-to-br from-blue-100 to-blue-50 
          border border-blue-300/50 
          shadow-lg rounded-2xl
        ">
          <CardContent className="p-6 text-gray-700 text-lg leading-relaxed">
            <p>
              Este proyecto muestra rutas estáticas, dinámicas, componentes personalizados y el uso de shadcn/ui.
            </p>
          </CardContent>
        </Card>

        {/* Botones con estilo premium */}
        <div className="flex flex-col gap-4 mt-6">

          <a href="/proyecto/ciudades">
            <Button
              className="
                w-full px-6 py-3 rounded-xl font-semibold 
                bg-blue-600 text-white 
                shadow-lg shadow-blue-300
                hover:bg-blue-700 hover:shadow-blue-400
                transition-all duration-300
              "
            >
              Ver Ciudades
            </Button>
          </a>

          <a href="/proyecto/contacto">
            <Button
              className="
                w-full px-6 py-3 rounded-xl font-semibold 
                bg-gray-200 text-gray-800 
                shadow-md
                hover:bg-gray-300 hover:shadow-lg
                transition-all duration-300
              "
            >
              Contacto
            </Button>
          </a>

        </div>
      </div>
    </main>
  );
}
