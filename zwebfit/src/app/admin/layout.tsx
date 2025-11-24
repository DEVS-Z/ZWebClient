import React from "react";
import { AdminNavLink } from "./AdminNavLink";

export const metadata = {
  title: "ZFut | Admin",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-gray-100 text-gray-800 font-sans">
      {/* SIDEBAR */}
      <aside className="w-64 bg-[#1a1a1a] text-white flex flex-col">
        <div className="px-6 py-5 border-b border-[#2e2e2e]">
          <h1 className="text-xl font-bold tracking-wide">⚽ ZFut Admin</h1>
          <p className="text-sm text-gray-400 mt-1">Panel de control</p>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-2 text-[15px] font-medium">
          <AdminNavLink href="/admin">
            <i className="bi bi-speedometer2" /> Dashboard
          </AdminNavLink>
          <AdminNavLink href="/admin/jugadores">
            <i className="bi bi-person-fill" /> Jugadores
          </AdminNavLink>
          <AdminNavLink href="/admin/rutinas">
            <i className="bi bi-bar-chart-steps" /> Rutinas
          </AdminNavLink>
          <AdminNavLink href="/admin/actividades">
            <i className="bi bi-calendar-check" /> Actividades
          </AdminNavLink>
          <AdminNavLink href="/admin/notificaciones">
            <i className="bi bi-bell-fill" /> Notificaciones
          </AdminNavLink>
          <AdminNavLink href="/admin/reportes">
            <i className="bi bi-file-earmark-text" /> Reportes
          </AdminNavLink>
          <AdminNavLink href="/admin/configuracion">
            <i className="bi bi-gear-fill" /> Configuración
          </AdminNavLink>
        </nav>

        <footer className="px-4 py-3 text-xs text-gray-500 border-t border-[#2e2e2e]">
          © {new Date().getFullYear()} ZFut
        </footer>
      </aside>

      {/* MAIN AREA */}
      <div className="flex-1 flex flex-col bg-gray-50">
  <header className="h-14 bg-[#364153] text-white flex items-center justify-between px-6 shadow">
  <div className="font-semibold text-white text-[15px] tracking-wide">
    Panel de administración
  </div>
  <div className="text-sm text-gray-300">Admin (mock)</div>
</header>


        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
