import PlayerCardContainer from "@/components/feactures/module/players/playerCard/PlayerCardContainer";
import { IPlayer } from "@/models/modules/IPlayer";


export default function PlayerHomeView({players} : {players : IPlayer[]}){
    return(
        <div className="w-full">
            <div className="mb-8">
                <h5 className="text-xl text-black font-bold mb-2">Player Roaster</h5>
                <p className="text-gray-600">All</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
                {players.map((player) => (
                    <PlayerCardContainer key={player.id} player={player}/>
                ))}
            </div>
        </div>
    );
}