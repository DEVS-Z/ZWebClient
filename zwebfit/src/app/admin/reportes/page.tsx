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

const dataPorJugador = [
  { fecha: "2025-11-20", bpm: 78, spo2: 96 },
  { fecha: "2025-11-21", bpm: 82, spo2: 95 },
  { fecha: "2025-11-22", bpm: 76, spo2: 97 },
  { fecha: "2025-11-23", bpm: 90, spo2: 94 },
  { fecha: "2025-11-24", bpm: 84, spo2: 95 },
];

export default function ReporteGraficoJugador() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold text-slate-800">Estadísticas por jugador</h2>
        <p className="text-sm text-slate-500 mt-1">
          Comportamiento diario de los signos vitales del jugador seleccionado.
        </p>
      </div>

      {/* Gráfica 1: Ritmo cardiaco */}
      <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
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
      </section>

      {/* Gráfica 2: Oxigenación */}
      <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
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
      </section>
    </div>
  );
}
