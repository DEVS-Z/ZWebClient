"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { JugadoresService } from "./Service/JugadoresService";

export default function JugadoresPage() {
  const router = useRouter();
  const service = new JugadoresService();

  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await service.getAll();

        // 🔥 Solo usuarios con rolId = 5
        const filtered = data.filter((u: any) => u.rolId === 5);

        setUsers(filtered);
      } catch (err) {
        console.error("Error al cargar usuarios:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="space-y-8 p-6">
      {/* TITULO */}
      <div>
        <h2 className="text-2xl font-semibold text-slate-800">
          Gestión de usuarios
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Administración general de los jugadores registrados.
        </p>
      </div>

      {/* TABLA */}
      <section className="bg-white rounded-xl shadow-sm border border-slate-200">
        <header className="h-14 bg-[#1c1c1c] text-white flex items-center justify-between px-6 shadow">
          <div className="font-semibold tracking-wide">
            Jugadores registrados en plataforma
          </div>
        </header>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-2 text-left font-medium text-slate-500">
                  Nombre
                </th>
                <th className="px-4 py-2 text-left font-medium text-slate-500">
                  Correo
                </th>
                <th className="px-4 py-2 text-left font-medium text-slate-500">
                  Estado
                </th>
                <th className="px-4 py-2 text-left font-medium text-slate-500">
                  Acciones
                </th>
              </tr>
            </thead>

            <tbody>
              {users.map((u, idx) => (
                <tr
                  key={u.id}
                  className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"}
                >
                  <td className="px-4 py-2 text-slate-800">{u.name}</td>
                  <td className="px-4 py-2 text-slate-600">{u.email}</td>

                  {/* ETIQUETA ESTADO */}
                  <td className="px-4 py-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        u.estado === "activo"
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {u.estado}
                    </span>
                  </td>

                  {/* ACCIONES */}
                  <td className="px-4 py-2 text-slate-700 flex gap-3">
                    <button
                      onClick={() => router.push(`/admin/jugadores/${u.id}`)}
                      className="bg-slate-800 hover:bg-[#1c1c1c] text-white text-xs px-3 py-2 rounded-md"
                    >
                      Editar
                    </button>

                    <button
                      onClick={() => alert(`Eliminar jugador ${u.name}`)}
                      className="bg-red-600 hover:bg-red-700 text-white text-xs px-3 py-2 rounded-md"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}

              {/* Si NO hay usuarios */}
              {users.length === 0 && !loading && (
                <tr>
                  <td
                    colSpan={4}
                    className="text-center py-4 text-slate-500 italic"
                  >
                    No hay jugadores registrados.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
