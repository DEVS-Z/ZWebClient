import { enviroment } from "@/lib/enviroment/enviroment";
import { Fetcher } from "@/lib/helpers/fetcher";
import { IPlayer } from "@/models/modules/IPlayer";
import { IResponse } from "@/models/modules/IResponse";

export class PlayerService{
    private fetcher: Fetcher;
    constructor(){
        this.fetcher = new Fetcher(enviroment.Production.ApiUrl);
    }
    GetAll = () =>  this.fetcher.get<IResponse>('/miembros/')
    Create = (data : IPlayer) => this.fetcher.post<IResponse>('/miembros/', data)
}