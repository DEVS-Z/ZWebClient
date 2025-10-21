import { IPlayer } from "@/models/modules/IPlayer";
import PlayerView from "./PlayerCardView";

export default function PlayerCardContainer({ player }: { player: IPlayer }) {
  return <PlayerView player={player} />;
}
