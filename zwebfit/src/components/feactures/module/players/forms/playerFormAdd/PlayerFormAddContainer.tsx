import { IPlayer } from "@/models/modules/IPlayer";
import PlayerFormAddView from "./PlayerFormAddView";


export default function PlayerFormAddContainer({ player } : { player : IPlayer}){
    return <PlayerFormAddView player={player} />
}