import React from "react";

const mockStats = [
  {
    title: "Jugadores activos",
    value: 24,
    change: "+3 esta semana",
  },
  {
    title: "Sesiones registradas hoy",
    value: 12,
    change: "+5 vs ayer",
  },
  {
    title: "Alertas de salud",
    value: 2,
    change: "Revisar urgente",
  },
];

const mockRecentPlayers = [
  {
    name: "Juan Pérez",
    club: "Club Tijuana",
    hr: 78,
    spo2: 97,
  },
  {
    name: "Carlos López",
    club: "Atlas Tijuana",
    hr: 92,
    spo2: 95,
  },
  {
    name: "Luis García",
    club: "Independiente",
    hr: 101,
    spo2: 93,
  },
];

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold text-slate-800">
          Dashboard general
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Datos de ejemplo (mockup). Luego conectamos con la API/sensores.
        </p>
      </div>

      {/* TARJETAS DE ESTADÍSTICAS */}
      <section className="grid gap-4 md:grid-cols-3">
        {mockStats.map((stat) => (
          <article
            key={stat.title}
            className="bg-white rounded-xl shadow-sm border border-slate-200 p-4"
          >
            <h3 className="text-sm font-medium text-slate-500">
              {stat.title}
            </h3>
            <p className="mt-2 text-2xl font-semibold text-slate-900">
              {stat.value}
            </p>
            <p className="mt-1 text-xs text-emerald-600">{stat.change}</p>
          </article>
        ))}
      </section>

      {/* TABLA SIMPLE DE JUGADORES */}
      <section className="bg-white rounded-xl shadow-sm border border-slate-200">
<header className="h-14 bg-[#1c1c1c] text-white flex items-center justify-between px-6 shadow">
  <div className="font-semibold text-white text-[15px] tracking-wide">
    Panel de administración222
  </div>
  <div className="text-sm text-gray-300">Admin (mock)</div>
</header>


        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-2 text-left font-medium text-slate-500">
                  Jugador
                </th>
                <th className="px-4 py-2 text-left font-medium text-slate-500">
                  Club
                </th>
                <th className="px-4 py-2 text-left font-medium text-slate-500">
                  Ritmo cardiaco (BPM)
                </th>
                <th className="px-4 py-2 text-left font-medium text-slate-500">
                  SpO₂ (%)
                </th>
              </tr>
            </thead>
            <tbody>
              {mockRecentPlayers.map((player, idx) => (
                <tr
                  key={player.name}
                  className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"}
                >
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
    </div>
  );
}
