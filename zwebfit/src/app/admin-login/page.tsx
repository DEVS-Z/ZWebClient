"use client";

import AdminLoginView from "./AdminLoginView";
import { useRouter } from "next/navigation";
import { ILogin } from "@/models/modules/ILogin";
import { FormHelper } from "@/lib/helpers/formhelper";
import { LoginService } from "../login/Service/LoginService"; // Usa el mismo servicio

function decodeJWT(token: string): any {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error("Error decoding JWT:", error);
    return null;
  }
}

export default function AdminLoginPage() {
  const router = useRouter();
  const service = new LoginService();

  const handleLogin = async (formData: FormData) => {
    const formHelp = new FormHelper();
    let data = formHelp.getValues<ILogin>(formData);
    data.password = String(data.password);
    const res = await service.Login(data as ILogin);

    if (res.status === 200 && res.data) {
      const token = res.data;
      localStorage.setItem("admin_token", token);

      const decoded = decodeJWT(token);
      console.log("Token decodificado:", decoded);

      // 🔒 Asegúrate de que estás evaluando correctamente el rol
      if (decoded?.RolId === 1 || decoded?.role === 1 || decoded?.rolId === 1) {
        router.push("/admin");
      } else {
        alert("No tienes permisos de administrador.");
      }
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return <AdminLoginView onSubmit={handleLogin} />;
}
