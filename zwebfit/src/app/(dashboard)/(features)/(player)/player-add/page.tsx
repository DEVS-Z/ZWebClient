"use client";
import { useRouter } from "next/navigation";
import { PlayerService } from "../Services/PlayerService";
import PlayerAddView from "./PlayerAddView";
import { FormHelper } from "@/lib/helpers/formhelper";
import { IMember } from "@/models/modules/IMember";


export default function PlayerAddPage(){
    const service = new PlayerService();
        const router = useRouter();
        const handleClubSubmit = async (event: React.FormEvent<HTMLFormElement>, formData: FormData) => {
            const formHelp = new FormHelper()
            let data = formHelp.getValues<IMember>(formData)
            const now = new Date();
            const formattedDate = now.toISOString().slice(0, 19).replace('T', ' ');
            data.FechaRegistro = formattedDate;
            let res = await service.Create(data as IMember)
            if (res.status == 200) {
                router.push("/player-home");
            } else {
                console.log(res)
            }
        };
    return <PlayerAddView  onSubmit={handleClubSubmit}/>
}