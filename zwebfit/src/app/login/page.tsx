"use client";

import LoginView from "./LoginView";
import { useRouter } from "next/navigation";
import { ILogin } from "@/models/modules/ILogin";
import { Fetcher } from "@/lib/helpers/fetcher";
import { FormHelper } from "@/lib/helpers/formhelper";
import { LoginService } from "./Service/LoginService";

// Decode JWT token to extract userId
function decodeJWT(token: string): any {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error('Error decoding JWT:', error);
    return null;
  }
}

export default function LoginPage() {
  const service = new LoginService();
  const router = useRouter();

  const handleLogin = async (formData: FormData) => {
    const formHelp = new FormHelper();
    let data = formHelp.getValues<ILogin>(formData);
    data.password = String(data.password);
    const res = await service.Login(data as ILogin);
    
    if (res.status === 200 && res.data) {
      const token = res.data;
      localStorage.setItem("token", token);
      
      // Decode JWT and extract userId
      const decodedToken = decodeJWT(token);
      console.log('Decoded JWT:', decodedToken);
      
      if (decodedToken && decodedToken.userId) {
        console.log('Found userId:', decodedToken.userId);
        localStorage.setItem("userId", decodedToken.userId.toString());
      } else if (decodedToken && decodedToken.sub) {
        // Some JWTs use 'sub' for user ID
        console.log('Found sub:', decodedToken.sub);
        localStorage.setItem("userId", decodedToken.sub.toString());
      } else if (decodedToken && decodedToken.id) {
        // Or 'id'
        console.log('Found id:', decodedToken.id);
        localStorage.setItem("userId", decodedToken.id.toString());
      } else {
        console.warn('No userId found in JWT. Available fields:', Object.keys(decodedToken || {}));
      }
      
      router.push("/dashboard-home");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return <LoginView onSubmit={handleLogin} />;
}
