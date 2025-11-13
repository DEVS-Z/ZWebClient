import { enviroment } from "@/lib/enviroment/enviroment";
import { Fetcher } from "@/lib/helpers/fetcher";
import { IResponse } from "@/models/modules/IResponse";
import { IUser } from "@/models/modules/IUser";


export class RegisterService{
    private fetcher: Fetcher;
    constructor(){
        this.fetcher = new Fetcher(enviroment.Production.ApiUrl);
    }
    Register = (data : any) =>  fetch(`${enviroment.Production.ApiUrl}/auth/sign-up`,{ method : 'POST', body: JSON.stringify(data)})
}