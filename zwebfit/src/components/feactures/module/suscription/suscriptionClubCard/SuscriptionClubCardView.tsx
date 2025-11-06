import { IClubSuscription, IClubSuscriptionProps } from "@/models/modules/ISuscription";

export default function SuscriptionClubCardView({ clubSuscription, onChange }: IClubSuscriptionProps) {
  return (
    <div key={clubSuscription.SuscripcionId} className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col items-center text-center">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">{clubSuscription.Nombre}</h2>
      <p className="text-3xl text-gray-500  mb-1">${clubSuscription.Precio}</p>
      <p className="text-gray-500 mb-4">Up to {clubSuscription.CantPlayers} Players</p>

      <button className="bg-gray-800 text-white rounded-full py-2 px-6 font-medium hover:bg-gray-700 transition-colors">
        Choose
      </button>
    </div>
  );
}
