"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const mockStats = [
  { title: "Jugadores activos", value: 24, change: "+3 esta semana" },
  { title: "Sesiones registradas hoy", value: 12, change: "+5 vs ayer" },
  { title: "Alertas de salud", value: 2, change: "Revisar urgente" },
];

const mockRecentPlayers = [
  { name: "Juan Pérez", club: "Club Tijuana", hr: 78, spo2: 97 },
  { name: "Carlos López", club: "Atlas Tijuana", hr: 92, spo2: 95 },
  { name: "Luis García", club: "Independiente", hr: 101, spo2: 93 },
];

const dataPorJugador = [
  { fecha: "2025-11-20", bpm: 78, spo2: 96 },
  { fecha: "2025-11-21", bpm: 82, spo2: 95 },
  { fecha: "2025-11-22", bpm: 76, spo2: 97 },
  { fecha: "2025-11-23", bpm: 90, spo2: 94 },
  { fecha: "2025-11-24", bpm: 84, spo2: 95 },
];

export default function AdminDashboardPage() {
  return (
    <div className="space-y-10">
      {/* Encabezado */}
      <div>
        <h2 className="text-2xl font-semibold text-slate-800">Dashboard general</h2>
        <p className="text-sm text-slate-500 mt-1">
          Vista general del sistema y monitoreo de jugadores (datos simulados).
        </p>
      </div>

      {/* Tarjetas */}
      <section className="grid gap-4 md:grid-cols-3">
        {mockStats.map((stat) => (
          <article
            key={stat.title}
            className="bg-white rounded-xl shadow-sm border border-slate-200 p-4"
          >
            <h3 className="text-sm font-medium text-slate-500">{stat.title}</h3>
            <p className="mt-2 text-2xl font-semibold text-slate-900">{stat.value}</p>
            <p className="mt-1 text-xs text-emerald-600">{stat.change}</p>
          </article>
        ))}
      </section>

      {/* Tabla de jugadores */}
      <section className="bg-white rounded-xl shadow-sm border border-slate-200">
        <header className="h-14 bg-[#1c1c1c] text-white flex items-center justify-between px-6 shadow">
          <div className="font-semibold text-white text-[15px] tracking-wide">Últimos jugadores</div>
          <div className="text-sm text-gray-300">Admin (mock)</div>
        </header>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-2 text-left font-medium text-slate-500">Jugador</th>
                <th className="px-4 py-2 text-left font-medium text-slate-500">Club</th>
                <th className="px-4 py-2 text-left font-medium text-slate-500">Ritmo cardiaco (BPM)</th>
                <th className="px-4 py-2 text-left font-medium text-slate-500">SpO₂ (%)</th>
              </tr>
            </thead>
            <tbody>
              {mockRecentPlayers.map((player, idx) => (
                <tr key={player.name} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                  <td className="px-4 py-2 text-slate-800">{player.name}</td>
                  <td className="px-4 py-2 text-slate-600">{player.club}</td>
                  <td className="px-4 py-2 text-slate-700">{player.hr}</td>
                  <td className="px-4 py-2 text-slate-700">{player.spo2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Gráficas */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* BPM */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-medium text-slate-700 mb-4">Ritmo cardiaco (BPM)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dataPorJugador} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="fecha" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="bpm" stroke="#8884d8" name="BPM" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* SpO₂ */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-medium text-slate-700 mb-4">Oxigenación (SpO₂)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dataPorJugador} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="fecha" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="spo2" stroke="#82ca9d" name="SpO₂ (%)" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>
    </div>
  );
}
