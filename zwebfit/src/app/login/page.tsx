"use client";

import LoginView from "./LoginView";
import { useRouter } from "next/navigation";
import { ILogin } from "@/models/modules/ILogin";
import { Fetcher } from "@/lib/helpers/fetcher";
import { FormHelper } from "@/lib/helpers/formhelper";
import { LoginService } from "./Service/LoginService";

export default function LoginPage() {
  const service = new LoginService();
  const router = useRouter();

  const handleLogin = async (formData: FormData) => {
  const formHelp = new FormHelper()
  let data = formHelp.getValues<ILogin>(formData)
  
  const res =  await service.Login(data as ILogin)
  console.log(res)
  if (res.status === 200 && res.data) {
  // El token está dentro de "data" que es el JWT
    const token = res.data;
    console.log("Token a guardar:", token);
    localStorage.setItem("token", token);
    router.push("/dashboard-home");
  } else {
    alert("Credenciales incorrectas");
  }
};

  return <LoginView onSubmit={handleLogin} />;
}
