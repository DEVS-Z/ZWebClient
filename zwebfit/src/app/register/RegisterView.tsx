export default function RegisterView({ onSubmit }: { onSubmit: (data: any) => void }) {
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
            Crear cuenta
          </h2>
          <p className="text-sm text-gray-500">Regístrate para comenzar</p>
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
            <label htmlFor="name" className="block text-sm font-medium text-gray-800">
              Nombre
            </label>
            <input
              id="name"
              type="text"
              name="nombre"
              required
              className="mt-2 block w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-base text-gray-800 placeholder-gray-400 focus:border-black focus:ring-black"
            />
          </div>

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
            Registrar
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-gray-500">
          ¿Ya tienes una cuenta?{" "}
          <a href="#" className="font-medium text-black hover:underline">
            Inicia sesión
          </a>
        </p>
      </div>
    </div>
  );
}
