import PlayerFormAddContainer from "@/components/feactures/module/players/forms/playerFormAdd/PlayerFormAddContainer";
import Link from "next/link";


export default function PlayerAddView({ onSubmit }: { onSubmit: (event: React.FormEvent<HTMLFormElement>, formData: FormData) => void }){
    return(
        <div className="w-full">
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <h5 className="text-xl text-black font-bold mb-2">Crear club</h5>
                    <p className="text-gray-600">Nuevo</p>
                </div>

                <Link href="/club-home">
                    <button className="bg-black text-white font-medium px-4 py-2 rounded-md hover:bg-gray-800 transition">
                        Volver
                    </button>
                </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1">
                <PlayerFormAddContainer onSubmit={onSubmit}/>
            </div>
        </div>
    )
}