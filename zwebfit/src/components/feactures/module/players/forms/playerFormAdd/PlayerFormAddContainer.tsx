import { IPlayer } from "@/models/modules/IPlayer";
import PlayerFormAddView from "./PlayerFormAddView";


export default function PlayerFormAddContainer({onSubmit, }: { onSubmit: (event: React.FormEvent<HTMLFormElement>, formData: FormData) => void; }){
    return <PlayerFormAddView onSubmit={onSubmit} />
}