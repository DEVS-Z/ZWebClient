import { ISession } from "@/models/modules/ISession";
import { ArrowRight } from "lucide-react";


export default function SessionCardView({session} : {session : ISession}){
    return (
        <div className="flex items-center justify-between bg-white border border-gray-200 rounded-2xl shadow-sm p-6 w-full mb-8">
            <div className="flex flex-col items-start pr-6 border-r border-gray-200">
                <span className="text-2xl font-semibold text-black">12:00 PM</span>
                <span className="text-gray-500 text-lg">April, 08</span>
            </div>
            <div className="flex flex-col px-6 flex-1">
                <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl">🏃‍♂️</span>
                    <span className="font-semibold text-lg">Partido</span>
                </div>
                <p className="text-gray-700 text-base">
                Iniciado por coach <span className="font-medium">La Pulga</span> – Duración de 90 minutos
                </p>
                <p className="text-gray-500 text-base mt-1">16 jugadores en esta sesión</p>
            </div>
            <div className="flex items-center justify-center">
                <ArrowRight className="w-6 h-6 text-gray-600" />
            </div>
        </div>
    );
}