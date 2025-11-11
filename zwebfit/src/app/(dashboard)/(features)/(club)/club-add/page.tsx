"use client";
import { FormHelper } from "@/lib/helpers/formhelper";
import ClubAddView from "./ClubAddView";
import { IClub } from "@/models/modules/IClub";
import { ClubService } from "../Services/ClubService";
import { useRouter } from "next/navigation";


export default function ClubAddPage(){
    const service = new ClubService();
    const router = useRouter();
    const handleClubSubmit = async (event: React.FormEvent<HTMLFormElement>, formData: FormData) => {
        const formHelp = new FormHelper()
        let data = formHelp.getValues<IClub>(formData)
        const now = new Date();
        const formattedDate = now.toISOString().slice(0, 19).replace('T', ' ');
        data.FechaRegistro = formattedDate;
        let res = await service.Create(data as IClub)
        if (res.status == 200) {
            router.push("/club-home");
        } else {
            console.log(res)
        }
    };
    return <ClubAddView onSubmit={handleClubSubmit}/>
}