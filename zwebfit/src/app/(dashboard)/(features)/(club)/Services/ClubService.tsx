import { enviroment } from "@/lib/enviroment/enviroment";
import { Fetcher } from "@/lib/helpers/fetcher";
import { IClub } from "@/models/modules/IClub";
import { IResponse } from "@/models/modules/IResponse";


export class ClubService{
    private fetcher: Fetcher;
    constructor(){
        this.fetcher = new Fetcher(enviroment.Production.ApiUrl);
    }
    GetAll = () =>  this.fetcher.get<IResponse>('/clubs/')
    Create = (data : IClub) => this.fetcher.post<IResponse>('/clubs/', data)
}