import { IUser } from "@/models/modules/IUser";
import RegisterView from "./RegisterView";
import { formHelper } from "@/lib/helpers/formhelper";


export default function RegisterPage(){
    const handleRegister = async(formData : FormData) => {
        const formHelp = new formHelper();
        let data = formHelp.getValues<IUser>(formData)
        // const user : IUser = {
        //     name : formData.get('') as string,
        //     email : formData.get('') as string,
        //     age : parseInt(formData.get('') as string),
        //     password :  formData.get('') as string
        // }
    }
    return <RegisterView onSubmit={handleRegister}/>
}