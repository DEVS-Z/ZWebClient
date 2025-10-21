import { IClub } from "@/models/modules/IClub";
import ClubCardView from "./ClubCardView";


export default function ClubCardContainer({club} : {club : IClub}){
    return <ClubCardView club={club}/>
}