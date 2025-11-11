"use client";
import { IUser } from "@/models/modules/IUser";
import RegisterView from "./RegisterView";
import { FormHelper } from "@/lib/helpers/formhelper";
import { RegisterService } from "./Service/RegisterService";
import { useRouter } from "next/navigation";


export default function RegisterPage(){
    const service = new RegisterService();
    const router = useRouter();
    const handleRegister = async(formData : FormData) => {
        const formHelp = new FormHelper()
        let data = formHelp.getValues(formData)
        data.password = String(data.password);
        const res =  await service.Register(data)
        if (res.status == 200) {
            router.push("/login");
        } else {
            console.log(res)
        }
    }
    return <RegisterView onSubmit={handleRegister}/>
}