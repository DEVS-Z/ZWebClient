"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { JugadoresService } from "../Service/JugadoresService";

export default function JugadorDetallePage() {
  const { id } = useParams();
  const router = useRouter();
  const service = new JugadoresService();

  const [form, setForm] = useState({
    name: "",
    email: "",
    estado: "",
  });

  const [loading, setLoading] = useState(true);

  // 🔥 Cargar datos del jugador
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await service.getAll();
        const found = data.find((u: any) => u.id === Number(id));

        if (found) {
          setForm({
            name: found.name,
            email: found.email,
            estado: found.estado,
          });
        }
      } catch (err) {
        console.error("Error cargando jugador:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  const handleSave = async (e: any) => {
    e.preventDefault();

    try {
      await service.update(id, form);

      // 🔥 Redireccionar después de guardar
      router.push("/admin/jugadores");
    } catch (err) {
      console.error("Error guardando:", err);
      alert("Error al guardar cambios");
    }
  };

  if (loading) return <p className="p-6">Cargando jugador...</p>;

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-bold text-slate-800">
        Editar jugador: {form.name}
      </h2>

      <form onSubmit={handleSave} className="space-y-4 max-w-md">

        {/* Nombre */}
        <div>
          <label className="text-sm font-medium text-slate-600">Nombre:</label>
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        {/* Correo */}
        <div>
          <label className="text-sm font-medium text-slate-600">Correo:</label>
          <input
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        {/* Estado */}
        <div>
          <label className="text-sm font-medium text-slate-600">Estado:</label>
          <select
            value={form.estado}
            onChange={(e) => setForm({ ...form, estado: e.target.value })}
            className="w-full px-3 py-2 border rounded-md"
          >
            <option value="activo">Activo</option>
            <option value="inactivo">Inactivo</option>
          </select>
        </div>

        {/* Botón Guardar */}
        <button
          type="submit"
          className="bg-slate-800 hover:bg-[#1c1c1c] text-white text-sm px-4 py-2 rounded-md"
        >
          Guardar cambios
        </button>
      </form>
    </div>
  );
}
