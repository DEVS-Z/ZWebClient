// src/app/admin/jugadores/page.tsx

"use client";

import React from "react";

const mockPlayers = [
  {
    nombre: "Juan Pérez",
    club: "Club Tijuana",
    edad: 25,
    bpm: 78,
    spo2: 97,
  },
  {
    nombre: "Carlos López",
    club: "Atlas Tijuana",
    edad: 27,
    bpm: 92,
    spo2: 95,
  },
  {
    nombre: "Luis García",
    club: "Independiente",
    edad: 24,
    bpm: 101,
    spo2: 93,
  },
];

export default function AdminJugadoresPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold text-slate-800">
          Gestión de jugadores
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Aquí puedes ver todos los jugadores registrados en el sistema.
        </p>
      </div>

      <section className="bg-white rounded-xl shadow-sm border border-slate-200">
        <header className="h-14 bg-[#1c1c1c] text-white flex items-center justify-between px-6 shadow">
          <div className="font-semibold text-white text-[15px] tracking-wide">
            Lista de jugadores
          </div>
          <div className="text-sm text-gray-300">Admin (mock)</div>
        </header>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-2 text-left font-medium text-slate-500">Nombre</th>
                <th className="px-4 py-2 text-left font-medium text-slate-500">Club</th>
                <th className="px-4 py-2 text-left font-medium text-slate-500">Edad</th>
                <th className="px-4 py-2 text-left font-medium text-slate-500">BPM</th>
                <th className="px-4 py-2 text-left font-medium text-slate-500">SpO₂ (%)</th>
              </tr>
            </thead>
            <tbody>
              {mockPlayers.map((player, index) => (
                <tr
                  key={player.nombre}
                  className={index % 2 === 0 ? "bg-white" : "bg-slate-50/50"}
                >
                  <td className="px-4 py-2 text-slate-800">{player.nombre}</td>
                  <td className="px-4 py-2 text-slate-600">{player.club}</td>
                  <td className="px-4 py-2 text-slate-700">{player.edad}</td>
                  <td className="px-4 py-2 text-slate-700">{player.bpm}</td>
                  <td className="px-4 py-2 text-slate-700">{player.spo2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}