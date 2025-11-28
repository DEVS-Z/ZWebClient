"use client";

import { enviroment } from "@/lib/enviroment/enviroment";

export class JugadoresService {
update(id: any, data: any) {
  return fetch(`http://54.234.36.199/usuarios/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("admin_token")}`,
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
}


async getAll() {
  const token = localStorage.getItem("admin_token");

  if (!token) {
    console.warn("❌ No existe admin_token en localStorage");
    return []; // evita el crash
  }

  const res = await fetch(`${enviroment.Production.ApiUrl}/usuarios/`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  const json = await res.json();

  if (!json.data) {
    console.warn("❌ La API devolvió un formato inesperado:", json);
    return [];
  }

  const users = json.data;

  return users.map((u: any) => ({
    id: u.UserId,
    name: u.Nombre,
    email: u.Correo,
    rolId: u.RolId,
    estado: u.Estado,
    fecha: u.FechaRegistro,
  }));
}


}

