"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("Mensaje enviado correctamente 🙌");
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-10 flex justify-center items-start">
      <Card className="w-full max-w-lg shadow-xl border border-blue-200 rounded-2xl bg-white/80 backdrop-blur">
        <CardContent className="p-8">

          <div className="text-left mb-6">
            <a
              href="/proyecto"
              className="
                inline-block px-6 py-3 rounded-xl
                bg-blue-600 text-white font-semibold
                shadow-lg shadow-blue-300
                hover:bg-blue-700
                transition-all duration-300
              "
            >
              ← Volver 
            </a>
          </div>

          <h1 className="text-3xl font-extrabold text-blue-800 mb-6 text-center">
            Contacto
          </h1>

          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <input
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              placeholder="Nombre"
              className="
                w-full px-4 py-3 rounded-xl
                border border-blue-300
                focus:ring-2 focus:ring-blue-400
                focus:border-blue-500
                transition-all
              "
            />

            <input
              type="email"
              name="correo"
              value={form.correo}
              onChange={handleChange}
              placeholder="Correo electrónico"
              className="
                w-full px-4 py-3 rounded-xl
                border border-blue-300
                focus:ring-2 focus:ring-blue-400
                focus:border-blue-500
                transition-all
              "
            />

            <textarea
              name="mensaje"
              value={form.mensaje}
              onChange={handleChange}
              placeholder="Mensaje"
              rows={4}
              className="
                w-full px-4 py-3 rounded-xl
                border border-blue-300
                focus:ring-2 focus:ring-blue-400
                focus:border-blue-500
                transition-all
              "
            ></textarea>

            <Button
              type="submit"
              className="
                mt-3 w-full py-3 rounded-xl
                bg-blue-600 text-white font-semibold
                shadow-lg shadow-blue-300
                hover:bg-blue-700
                transition-all duration-300
              "
            >
              Enviar
            </Button>
          </form>

        </CardContent>
      </Card>
    </main>
  );
}
