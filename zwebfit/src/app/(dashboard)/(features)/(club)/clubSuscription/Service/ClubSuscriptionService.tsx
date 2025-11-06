import { enviroment } from "@/lib/enviroment/enviroment";
import { Fetcher } from "@/lib/helpers/fetcher";
import { IResponse } from "@/models/modules/IResponse";


export class ClubSuscriptionService{
    private fetcher: Fetcher;
    constructor(){
        this.fetcher = new Fetcher(enviroment.Production.ApiUrl);
    }
    GetAll = () =>  this.fetcher.get<IResponse>('/suscripciones')
}