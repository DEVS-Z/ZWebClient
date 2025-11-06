import { enviroment } from "@/lib/enviroment/enviroment";
import { Fetcher } from "@/lib/helpers/fetcher";
import { IResponse } from "@/models/modules/IResponse";
import { IUser } from "@/models/modules/IUser";


export class RegisterService{
    private fetcher: Fetcher;
    constructor(){
        this.fetcher = new Fetcher(enviroment.Production.ApiUrl);
    }
    Register = (data : IUser) =>  this.fetcher.post<IResponse>('/usuarios/', data)
}