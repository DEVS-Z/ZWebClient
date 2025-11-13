"use client";

export default function LoginView({ onSubmit }: { onSubmit: (data: any) => void }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen bg-white text-black">
      {/* Columna izquierda (Formulario) */}
      <div className="flex flex-col justify-center items-center px-6 py-12">
        <div className="w-full max-w-md border border-gray-200 rounded-2xl shadow-lg p-10 bg-white">
          <div className="flex flex-col items-center">
            {/* Ícono balón blanco/negro */}
            <img
  src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg"
  alt="Balón de fútbol"
  className="mx-auto h-10 w-10"
/>

            <h2 className="mt-8 text-2xl font-semibold tracking-tight text-gray-900">
              Inicia sesión
            </h2>
            <p className="text-sm text-gray-500">Accede a tu cuenta de rendimiento</p>
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
                type="email"
                name="email"
                required
                className="mt-2 block w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-base text-gray-800 placeholder-gray-400 focus:border-black focus:ring-black"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-800">
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                name="password"
                required
                className="mt-2 block w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-base text-gray-800 placeholder-gray-400 focus:border-black focus:ring-black"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white hover:bg-gray-800 transition-colors"
            >
              Entrar
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-gray-500">
            ¿No tienes cuenta?
            <a href="#" className="font-medium text-black hover:underline"> Regístrate</a>
          </p>
        </div>
      </div>

      {/* Columna derecha (imagen inspirada en medición deportiva) */}
      <div className="hidden md:flex items-center justify-center bg-white">
        <img
          src="https://zone14.ai/wp-content/uploads/2024/11/DALL%C2%B7E-2024-11-06-09.35.08-A-detailed-illustration-showcasing-wearable-technology-for-football-players-on-a-soccer-field.-The-image-includes-multiple-wearables-such-as-a-GPS-tra.webp"
          alt="Monitoreo de rendimiento de futbolistas"
          className="w-full h-full object-cover grayscale"
        />
      </div>
    </div>
  );
}
