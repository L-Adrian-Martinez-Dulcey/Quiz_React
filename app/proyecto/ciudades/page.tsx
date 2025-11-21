import CityCard from "@/components/CityCard"; 
import GridContainer from "@/components/GridContainer";

export default function CiudadesPage() {
  const ciudades = [
    { name: "Medellín", image: "/ciudades/medellin.jpg", href: "/proyecto/ciudades/medellin" },
    { name: "Bogotá", image: "/ciudades/bogota.jpg", href: "/proyecto/ciudades/bogota" },
    { name: "Cali", image: "/ciudades/cali.jpg", href: "/proyecto/ciudades/cali" },
    { name: "Cartagena", image: "/ciudades/cartagena.jpg", href: "/proyecto/ciudades/cartagena" },
    { name: "Bucaramanga", image: "/ciudades/bucaramanga.jpg", href: "/proyecto/ciudades/bucaramanga" },
    { name: "Pereira", image: "/ciudades/pereira.jpg", href: "/proyecto/ciudades/pereira" },
  ];

  return (
    <main className="min-h-screen p-10 bg-gradient-to-b from-blue-50 to-white">
      <h1 className="text-4xl font-extrabold text-blue-800 mb-10 text-center tracking-tight">
        Ciudades
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {ciudades.map((c) => (
          <CityCard key={c.name} name={c.name} image={c.image} href={c.href} />
        ))}
      </div>
    </main>
  );
}

