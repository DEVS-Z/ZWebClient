"use client";
import { IClub } from "@/models/modules/IClub";

export default function ClubFormAddView({onSubmit,
}: {
  onSubmit: (event: React.FormEvent<HTMLFormElement>, formData: FormData) => void;
}) {
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();                 
    const formData = new FormData(event.currentTarget);
    onSubmit(event, formData);              
  };

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <form onSubmit={handleSubmit} className="flex-1 bg-white border border-gray-200 rounded-xl p-6 space-y-4">
        <div>
          <label htmlFor="name" className="block font-medium text-gray-800 mb-1">
            Nombre del club
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Value"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-800 mb-1">País de origen</label>
          <input
            type="text"
            name="country"
            placeholder="Value"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-800 mb-1">Cantidad de miembros</label>
          <input
            type="number"
            name="members"
            placeholder="Value"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-800 mb-1">Logo del equipo</label>
          <textarea
            name="clubImage"
            placeholder="URL del logo"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700 transition-colors"
        >
          Submit
        </button>
      </form>

      <div className="flex-1 flex flex-col items-center justify-center bg-gray-100 rounded-xl shadow-inner p-6">
        <div className="w-64 h-64 bg-gray-200 flex items-center justify-center mb-4 rounded-lg text-gray-400">
            Sin logo
        </div>
        <p className="text-lg font-medium text-gray-900">
            Nombre del club
        </p>
      </div>
    </div>
  );
}
