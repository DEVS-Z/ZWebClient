"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { JugadoresService } from "../Service/JugadoresService";

export default function CrearJugadorPage() {
  const router = useRouter();
  const service = new JugadoresService();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [estado, setEstado] = useState("activo");
  const [loading, setLoading] = useState(false);

  const handleCreate = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1️⃣ Crear usuario (el backend siempre lo crea como ACTIVO)
      const payloadSignUp = {
        nombre: name,
        email: email,
        password: password,
      };
      

      await service.create(payloadSignUp);

      // 2️⃣ Si el admin eligió INACTIVO, cambiar el estado vía update
      if (estado !== "activo") {
        // obtener todos para encontrar el usuario recién creado
        const allUsers = await service.getAll();
        const creado = allUsers.find((u: any) => u.email === email);

        if (creado) {
          await service.update(creado.id, {
            Estado: estado,
          });
        }
      }

      alert("¡Usuario creado con éxito!");
      router.push("/admin/jugadores"); // ir al listado
    } catch (err) {
      console.error(err);
      alert("Error al crear usuario");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 space-y-8">
        {/* IMAGEN DECORATIVA CANON FORMULARIOS CHECAR */}
           <img
        src="/admin.png"
        alt="Decoración"
        className="absolute left-220 top-22 w-[620px] opacity-20 pointer-events-none select-none z-0"
      />

        
      {/* Título */}
      <div>
        <h2 className="text-2xl font-semibold text-slate-800">
          Crear nuevo usuario
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Registra un jugador dentro de la plataforma ZFut.
        </p>
      </div>

      {/* Formulario */}
      <form
        onSubmit={handleCreate}
        className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-5 max-w-lg"
      
      
      
      >
        {/* Nombre */}
        <div className="space-y-1">
          <label className="text-sm font-medium text-slate-700">
            Nombre completo
          </label>
          <input
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ej.: Juan Pérez"
            className="w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-slate-300"
          />
        </div>

        {/* Correo */}
        <div className="space-y-1">
          <label className="text-sm font-medium text-slate-700">Correo</label>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="correo@ejemplo.com"
            className="w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-slate-300"
          />
        </div>

        {/* Contraseña */}
        <div className="space-y-1">
          <label className="text-sm font-medium text-slate-700">Contraseña</label>
          <input
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-slate-300"
          />
        </div>

        {/* Estado */}
        <div className="space-y-1">
          <label className="text-sm font-medium text-slate-700">Estado</label>
          <select
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
            className="w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-slate-300"
          >
            <option value="activo">✅ Activo</option>
            <option value="inactivo">⛔ Inactivo</option>
          </select>
        </div>


        {/* Botones */}
        <div className="flex gap-3 pt-3">
          <button
            type="submit"
            disabled={loading}
            className="bg-slate-800 hover:bg-[#1c1c1c] text-white text-sm font-bold px-4 py-2 rounded-md"
          >
            {loading ? "Guardando..." : "Crear usuario"}
          </button>

          <button
            type="button"
            onClick={() => router.back()}
            className="bg-slate-200 hover:bg-slate-300 text-slate-700 text-sm px-4 py-2 rounded-md"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}
