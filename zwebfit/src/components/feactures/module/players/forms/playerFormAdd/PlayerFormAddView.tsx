import { IMember } from "@/models/modules/IMember";

export default function PlayerFormAddView({
  onSubmit,
}: {
  onSubmit: (
    event: React.FormEvent<HTMLFormElement>,
    formData: FormData
  ) => void;
}) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    onSubmit(event, formData);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <form
        onSubmit={handleSubmit}
        className="flex-1 bg-white border border-gray-200 rounded-xl p-6 space-y-4"
      >
        <div>
          <label
            htmlFor="Posicion"
            className="block font-medium text-gray-800 mb-1"
          >
            Posición
          </label>
          <input
            type="text"
            name="Posicion"
            id="Posicion"
            placeholder="Ej. Delantero"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        {/* 🔹 WeareableId */}
        <div>
          <label
            htmlFor="WeareableId"
            className="block font-medium text-gray-800 mb-1"
          >
            Weareable ID
          </label>
          <input
            type="text"
            name="WeareableId"
            id="WeareableId"
            placeholder="Ej. 12345ABC"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        {/* 🔹 Altura */}
        <div>
          <label
            htmlFor="Altura"
            className="block font-medium text-gray-800 mb-1"
          >
            Altura (cm)
          </label>
          <input
            type="number"
            name="Altura"
            id="Altura"
            placeholder="Ej. 180"
            step="0.1"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        {/* 🔹 Peso */}
        <div>
          <label
            htmlFor="Peso"
            className="block font-medium text-gray-800 mb-1"
          >
            Peso (kg)
          </label>
          <input
            type="number"
            name="Peso"
            id="Peso"
            placeholder="Ej. 75"
            step="0.1"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        {/* 🔹 UserId */}
        <div>
          <label
            htmlFor="UserId"
            className="block font-medium text-gray-800 mb-1"
          >
            User ID
          </label>
          <input
            type="number"
            name="UserId"
            id="UserId"
            placeholder="Ej. 1"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        {/* 🔹 Botón de envío */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-black text-white font-medium px-4 py-2 rounded-md hover:bg-gray-800 transition"
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
}
