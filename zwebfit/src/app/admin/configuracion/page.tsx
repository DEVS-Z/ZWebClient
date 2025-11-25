"use client";

import React from "react";

export default function AdminConfiguracionPage() {
  return (
    <div className="space-y-8 relative">
      {/* Imagen decorativa de fondo */}
     <img
        src="/admin.png"
        alt="Decoración"
        className="absolute right-1 top-7 w-[500px] opacity-30 pointer-events-none select-none z-0"
      />
      <div>
        <h2 className="text-2xl font-semibold text-slate-800">Configuración del sistema</h2>
        <p className="text-sm text-slate-500 mt-1">
          Aquí puedes exportar datos y configurar opciones generales del panel.
        </p>
      </div>

      <section className="bg-white rounded-xl shadow-sm border border-slate-200 relative z-10">
        <header className="h-14 bg-[#1c1c1c] text-white flex items-center justify-between px-6 shadow">
          <div className="font-semibold text-white text-[15px] tracking-wide">
            Exportar datos
          </div>
          <div className="text-sm text-gray-300">Admin (mock)</div>
        </header>

        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-800 font-medium">Exportar estadísticas en CSV</p>
              <p className="text-sm text-slate-500">Descarga los registros en formato de hoja de cálculo.</p>
            </div>
            <button className="bg-slate-800 hover:bg-[#1c1c1c] text-white text-sm px-4 py-2 rounded-md">
              Exportar CSV
            </button>
          </div>

          <hr className="border-slate-200" />

          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-800 font-medium">Exportar estadísticas en PDF</p>
              <p className="text-sm text-slate-500">Genera un archivo PDF con la información relevante.</p>
            </div>
            <button className="bg-slate-800 hover:bg-[#1c1c1c] text-white text-sm px-4 py-2 rounded-md">
              Exportar PDF
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
