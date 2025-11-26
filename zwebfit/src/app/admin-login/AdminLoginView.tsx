"use client";

export default function AdminLoginView({ onSubmit }: { onSubmit: (data: any) => void }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen bg-white text-black">
      {/* Formulario */}
      <div className="flex flex-col justify-center items-center px-6 py-12">
        <div className="w-full max-w-md border border-gray-200 rounded-2xl shadow-lg p-10 bg-white">
          <div className="flex flex-col items-center">
            <img
              src="/admin.png"
              alt="Admin Icon"
              className="mx-auto h-12 w-12"
            />
            <h2 className="mt-6 text-2xl font-semibold tracking-tight text-gray-900">
              Ingreso administrador
            </h2>
            <p className="text-sm text-gray-500">Panel exclusivo para administradores</p>
          </div>

          <form
            className="mt-10 space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              onSubmit(data);
            }}
          >
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-800">
                Correo electrónico
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-2 block w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-800">
                Contraseña
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="mt-2 block w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white px-3 py-2 rounded-md hover:bg-gray-800"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>

      {/* Imagen decorativa */}
      <div className="hidden md:flex items-center justify-center bg-white">
        <img
          src="/admin.png"
          alt="Decoración admin"
          className="w-full h-full object-contain opacity-30"
        />
      </div>
    </div>
  );
}
