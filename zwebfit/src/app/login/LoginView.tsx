"use client";

export default function LoginView({ onSubmit }: { onSubmit: (data: any) => void }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      {/* Columna izquierda (Formulario) */}
      <div className="flex flex-col justify-center items-center bg-gray-900 px-8 py-12">
        <div className="w-full max-w-sm">
          <img
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
            alt="Your Company"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-white">
            Sign in to your account
          </h2>

          <form
            className="mt-10 space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              onSubmit(data);
            }}
          >
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-200">Email address</label>
              <input id="email" type="email" name="email" required className="mt-2 block w-full rounded-md bg-white/5 px-3 py-2 text-base text-white outline-1 outline-white/10 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-500" />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-200">
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                required
                className="mt-2 block w-full rounded-md bg-white/5 px-3 py-2 text-base text-white outline-1 outline-white/10 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-400 focus:outline-indigo-500"
            >
              Sign in
            </button>
          </form>

          <p className="mt-10 text-center text-sm text-gray-400">
            Not a member?
            <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300">
              {" "}Register
            </a>
          </p>
        </div>
      </div>

      {/* Columna derecha (imagen o contenido visual) */}
      <div className="hidden md:flex items-center justify-center bg-indigo-600">
        <img
          src="https://static.dw.com/image/61527609_804.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
