import Link from "next/link";
import { ISession } from "@/models/modules/ISession";
import { PersonStanding, ArrowRightToLine } from "lucide-react";

export default function SessionCardView({ session }: { session: ISession }) {
  const {
    id,
    time = "12:00 PM",
    assignDate,
    type = "Partido",
    createdByName = "La Pulga",
    duration = "90",
    sessionPlayer = 16,
  } = session;

  const formattedDate = assignDate
    ? new Date(assignDate).toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
      })
    : "April, 08";

  return (
    <div className="flex items-center justify-between bg-white border border-gray-200 rounded-xl p-6 w-full mb-6">
     
      <div className="flex flex-col items-center justify-center pr-6 border-r border-gray-300">
        <span className="text-lg font-semibold text-black">{time}</span>
        <span className="text-gray-400 text-sm">{formattedDate}</span>
      </div>

      <div className="flex flex-col px-6 flex-1">
        <div className="flex items-center gap-2 mb-1">
          <PersonStanding className="w-4 h-4 text-black" />
          <span className="font-semibold text-base text-black">{type}</span>
        </div>

        <p className="text-gray-800 text-sm leading-snug">
          Iniciado por coach{" "}
          <span className="font-medium">{createdByName}</span> – Duración de{" "}
          {duration} minutos
        </p>

        <p className="text-gray-500 text-sm mt-1">
          {sessionPlayer} jugadores en esta sesión
        </p>
      </div>

      {/* Icono clickeable para que despues arroja a algun link */}
      <div className="flex items-center justify-center pl-4">
        <Link
          href={`/sessions/${id}`} //Redirige dinámicamente segun el id de la sesion que tenga
          //de momento agarra el valor del archivo session listview, por el id que tiene en 
          //el arreglo manual, luego sera el id del api
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <ArrowRightToLine className="w-5 h-5 text-gray-900 hover:text-black" />
        </Link>
      </div>
    </div>
  );
}
