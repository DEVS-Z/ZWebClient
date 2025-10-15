"use client";

import LoginView from "./LoginView";
import { useRouter } from "next/navigation";
import { ILogin } from "@/models/modules/ILogin";
import { Fetcher } from "@/lib/helpers/fetcher";
import { FormHelper } from "@/lib/helpers/formhelper";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = async (formData: FormData) => {
  const formHelp = new FormHelper()
  let data = formHelp.getValues<ILogin>(formData)
  
  const api = new Fetcher("https://api.example.com");
  const res = await api.post("/login", data);

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
