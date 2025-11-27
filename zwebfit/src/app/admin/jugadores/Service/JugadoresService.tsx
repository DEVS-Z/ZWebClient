"use client";

import { enviroment } from "@/lib/enviroment/enviroment";

export class JugadoresService {

  async getAll() {
    const token = localStorage.getItem("admin_token");

    const res = await fetch(`${enviroment.Production.ApiUrl}/usuarios/`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    const json = await res.json();
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
