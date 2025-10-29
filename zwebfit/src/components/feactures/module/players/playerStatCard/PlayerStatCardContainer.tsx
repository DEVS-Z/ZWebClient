import { IPlayerStat } from "@/models/modules/IPlayerStat";
import PlayerStatCardView from "./PlayerStatCardView";


export default function PlayerStatContainer({playerStat} : {playerStat : IPlayerStat}){
    return <PlayerStatCardView playerStat={playerStat} />
}