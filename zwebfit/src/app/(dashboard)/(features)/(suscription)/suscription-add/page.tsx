import { FormHelper } from "@/lib/helpers/formhelper";
import SuscriptionAddView from "./SuscriptionAddView";
import { IClubSuscription } from "@/models/modules/ISuscription";
import { SuscriptionService } from "../Services/SuscriptionService";
import { useRouter } from "next/router";


export default function SuscriptionAddPage(){
    const service = new SuscriptionService();
    const handleClubSubmit = async (event: React.FormEvent<HTMLFormElement>, formData: FormData) => {
        const formHelp = new FormHelper()
        let data2 = formHelp.getValues<IClubSuscription>(formData)
        const res =  await service.Create(data2 as IClubSuscription)
    };
    return <SuscriptionAddView onSubmit={handleClubSubmit}/>
}