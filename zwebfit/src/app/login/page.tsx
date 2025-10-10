"use client";

import LoginView from "./LoginView";
import { useRouter } from "next/navigation";
import { ILogin } from "@/models/modules/ILogin";
import { Fetcher } from "@/lib/helpers/fetcher";
import { formHelper } from "@/lib/helpers/formhelper";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = async (formData: FormData) => {
    const formHelp = new formHelper()
    let data = formHelp.getValues<ILogin>(formData)
    console.log(data)
    
//   const User: ILogin = {
//     correo: formData.get("email") as string,
//     password: formData.get("password") as string,
//   };

  const fetchHelp = new Fetcher(); 
  const res = await fetchHelp.Post(data, "/api/auth/login");

  if (res.ok) {
    const { token } = await res.json();
    localStorage.setItem("token", token);
    router.push("/dashboard");
  } else {
    alert("Credenciales incorrectas");
  }
};

  return <LoginView onSubmit={handleLogin} />;
}
