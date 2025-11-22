import PlayerCardContainer from "@/components/feactures/module/players/playerCard/PlayerCardContainer";
import { IPlayer } from "@/models/modules/IPlayer";
import Link from "next/link";


export default function PlayerHomeView({players} : {players : IPlayer[]}){
    return(
        <div className="w-full">
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <h5 className="text-xl text-black font-bold mb-2">Jugadores</h5>
                    <p className="text-gray-600">Todos</p>
                </div>

                <Link href="/player-add">
                    <button className="bg-black text-white font-medium px-4 py-2 rounded-md hover:bg-gray-800 transition">
                        Crear
                    </button>
                </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
                {players.map((player) => (
                    <PlayerCardContainer key={player.MiembroId} player={player}/>
                ))}
            </div>
        </div>
    );
}