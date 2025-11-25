"use client";

import React from "react";

const mockRutinas = [
  {
    nombre: "Resistencia alta",
    duracion: "45 min",
    nivel: "Avanzado",
  },
  {
    nombre: "Calentamiento básico",
    duracion: "15 min",
    nivel: "Principiante",
  },
  {
    nombre: "Fuerza explosiva",
    duracion: "30 min",
    nivel: "Intermedio",
  },
];

export default function AdminRutinasPage() {
  return (
    <div className="relative space-y-8">
      {/* Imagen decorativa al fondo */}
      <img
        src="/admin.png"
        alt="Decoración"
        className="absolute right-1 top-7 w-[500px] opacity-30 pointer-events-none select-none z-0"
      />

      <div className="relative z-10">
        <h2 className="text-2xl font-semibold text-slate-800">Gestión de rutinas</h2>
        <p className="text-sm text-slate-500 mt-1">
          Rutinas disponibles dentro del sistema.
        </p>
      </div>

      <section className="relative z-10 bg-white rounded-xl shadow-sm border border-slate-200">
        <header className="h-14 bg-[#1c1c1c] text-white flex items-center justify-between px-6 shadow">
          <div className="font-semibold text-white text-[15px] tracking-wide">
            Lista de rutinas
          </div>
          <div className="text-sm text-gray-300">Admin (mock)</div>
        </header>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-2 text-left font-medium text-slate-500">Nombre</th>
                <th className="px-4 py-2 text-left font-medium text-slate-500">Duración</th>
                <th className="px-4 py-2 text-left font-medium text-slate-500">Nivel</th>
              </tr>
            </thead>
            <tbody>
              {mockRutinas.map((rutina, index) => (
                <tr key={rutina.nombre} className={index % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                  <td className="px-4 py-2 text-slate-800">{rutina.nombre}</td>
                  <td className="px-4 py-2 text-slate-600">{rutina.duracion}</td>
                  <td className="px-4 py-2 text-slate-700">{rutina.nivel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
