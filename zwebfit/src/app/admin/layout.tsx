'use client';

import React from "react";
import { useRouter } from "next/navigation";
import { AdminNavLink } from "./AdminNavLink";
import Link from "next/link";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    localStorage.removeItem("role");
    localStorage.removeItem("userid");
    router.push("/admin-login");
  };

  return (
    <div className="min-h-screen flex bg-gray-100 text-gray-800 font-sans">
      {/* SIDEBAR */}
      <aside className="w-64 bg-[#1a1a1a] text-white flex flex-col border-r border-[#2e2e2e]">
        <Link href="/admin">
          <div className="flex items-center px-12 py-3 border-b border-gray-700 gap-4 cursor-pointer">
            <img
              src="/admin.png"
              alt="Logo ZFut"
              className="w-8.5 h-7.5 object-contain ml-2"
            />
            <div className="flex flex-col justify-center ml-2">
              <h1 className="text-2xl font-bold">ZFut</h1>
            </div>
          </div>
        </Link>

        <nav className="flex-1 px-3 py-4 space-y-2 text-[15px] font-medium">
          <AdminNavLink href="/admin">
            <i className="bi bi-bar-chart-line" /> Dashboard
          </AdminNavLink>
          <AdminNavLink href="/admin/jugadores">
            <i className="bi bi-person-fill" /> Usuarios
          </AdminNavLink>
          <AdminNavLink href="/admin/rutinas">
            <i className="bi bi-bar-chart-steps" /> Rutinas
          </AdminNavLink>
          <AdminNavLink href="/admin/actividades">
            <i className="bi bi-calendar-check" /> Actividades
          </AdminNavLink>
          <AdminNavLink href="/admin/reportes">
            <i className="bi bi-graph-up" /> Reportes
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
            {/* Puedes poner aquí el título de la sección si deseas */}
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-300">
              Bienvenido: <strong>Administrador</strong>
            </span>
            <button
              onClick={handleLogout}
              className="bg-slate-800 hover:bg-slate-700 text-white text-sm px-4 py-2 rounded-md"
            >
              Cerrar sesión
            </button>
          </div>
        </header>

        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
