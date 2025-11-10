import { enviroment } from "@/lib/enviroment/enviroment";
import { Fetcher } from "@/lib/helpers/fetcher";
import { IResponse } from "@/models/modules/IResponse";
import { IClubSuscription } from "@/models/modules/ISuscription";


export class SuscriptionService{
    private fetcher: Fetcher;
    constructor(){
        this.fetcher = new Fetcher(enviroment.Production.ApiUrl);
    }
    Create = (data : IClubSuscription) =>  this.fetcher.post<IResponse>('/suscripciones', data)
}