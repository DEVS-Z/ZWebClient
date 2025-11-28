"use client";
import Link from "next/link";
import { useState } from "react";

export default function ForgotPasswordView() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sending code to:", email);
    setStep(2);
  };

  const handleCodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Verifying code:", code);
    setStep(3);
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Updating password for:", email);
    alert("Contraseña actualizada correctamente");
    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white text-black px-6 py-12">
      <div className="w-full max-w-md border border-gray-200 rounded-2xl shadow-lg p-10 bg-white">
        <div className="flex flex-col items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg"
            alt="Balón de fútbol"
            className="mx-auto h-10 w-10"
          />

          <h2 className="mt-8 text-2xl font-semibold tracking-tight text-gray-900">
            Recuperar contraseña
          </h2>
          <p className="text-sm text-gray-500">
            {step === 1 && "Ingresa tu correo para recibir un código"}
            {step === 2 && "Ingresa el código que recibiste"}
            {step === 3 && "Ingresa tu nueva contraseña"}
          </p>
        </div>

        {step === 1 && (
          <form className="mt-10 space-y-6" onSubmit={handleEmailSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-800">
                Correo electrónico
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 block w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-base text-gray-800 placeholder-gray-400 focus:border-black focus:ring-black"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white hover:bg-gray-800 transition-colors"
            >
              Enviar código
            </button>
          </form>
        )}

        {step === 2 && (
          <form className="mt-10 space-y-6" onSubmit={handleCodeSubmit}>
            <div>
              <label htmlFor="code" className="block text-sm font-medium text-gray-800">
                Código de verificación
              </label>
              <input
                id="code"
                type="text"
                required
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="mt-2 block w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-base text-gray-800 placeholder-gray-400 focus:border-black focus:ring-black"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white hover:bg-gray-800 transition-colors"
            >
              Verificar código
            </button>
          </form>
        )}

        {step === 3 && (
          <form className="mt-10 space-y-6" onSubmit={handlePasswordSubmit}>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-800">
                Nueva contraseña
              </label>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 block w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-base text-gray-800 placeholder-gray-400 focus:border-black focus:ring-black"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white hover:bg-gray-800 transition-colors"
            >
              Actualizar contraseña
            </button>
          </form>
        )}

        <p className="mt-8 text-center text-sm text-gray-500">
          ¿Recordaste tu contraseña?{" "}
          <Link href="/login" className="font-medium text-black hover:underline">
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  );
}
