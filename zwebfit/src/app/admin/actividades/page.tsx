"use client";

import React from "react";

const mockActividades = [
  {
    jugador: "Juan Pérez",
    rutina: "Resistencia alta",
    fecha: "2025-11-24",
    completado: true,
  },
  {
    jugador: "Carlos López",
    rutina: "Fuerza explosiva",
    fecha: "2025-11-23",
    completado: false,
  },
  {
    jugador: "Luis García",
    rutina: "Calentamiento básico",
    fecha: "2025-11-22",
    completado: true,
  },
];

export default function AdminActividadesPage() {
  return (
    <div className="space-y-8 relative">
      {/* Imagen de fondo decorativa */}
   <img
        src="/admin.png"
        alt="Decoración"
        className="absolute right-1 top-7 w-[500px] opacity-30 pointer-events-none select-none z-0"
      />


      <div>
        <h2 className="text-2xl font-semibold text-slate-800">Gestión de actividades</h2>
        <p className="text-sm text-slate-500 mt-1">
          Registro de actividades realizadas por jugadores.
        </p>
      </div>

      <section className="bg-white rounded-xl shadow-sm border border-slate-200 relative z-10">
        <header className="h-14 bg-[#1c1c1c] text-white flex items-center justify-between px-6 shadow">
          <div className="font-semibold text-white text-[15px] tracking-wide">
            Historial de actividades
          </div>
          <div className="text-sm text-gray-300">Admin (mock)</div>
        </header>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-2 text-left font-medium text-slate-500">Jugador</th>
                <th className="px-4 py-2 text-left font-medium text-slate-500">Rutina</th>
                <th className="px-4 py-2 text-left font-medium text-slate-500">Fecha</th>
                <th className="px-4 py-2 text-left font-medium text-slate-500">Estado</th>
              </tr>
            </thead>
            <tbody>
              {mockActividades.map((act, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                  <td className="px-4 py-2 text-slate-800">{act.jugador}</td>
                  <td className="px-4 py-2 text-slate-600">{act.rutina}</td>
                  <td className="px-4 py-2 text-slate-600">{act.fecha}</td>
                  <td className="px-4 py-2 text-slate-700">
                    {act.completado ? "Completado" : "Pendiente"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
