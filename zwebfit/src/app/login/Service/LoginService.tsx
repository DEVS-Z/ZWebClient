import { enviroment } from "@/lib/enviroment/enviroment";
import { Fetcher } from "@/lib/helpers/fetcher";
import { ILogin } from "@/models/modules/ILogin";
import { IResponse } from "@/models/modules/IResponse";

export class LoginService{
    private fetcher: Fetcher;
    constructor(){
        this.fetcher = new Fetcher(enviroment.Production.ApiUrl);
    }
    Login = (data : ILogin) =>  this.fetcher.post<IResponse>('/auth/sign-in', data)
}