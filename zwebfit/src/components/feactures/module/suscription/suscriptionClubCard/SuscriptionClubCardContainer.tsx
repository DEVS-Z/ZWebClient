import { IClubSuscription, IClubSuscriptionProps } from "@/models/modules/ISuscription";
import SuscriptionClubCardView from "./SuscriptionClubCardView";


export default function SuscriptionClubCardContainer({ clubSuscription, onChange }: IClubSuscriptionProps){
    return <SuscriptionClubCardView clubSuscription={clubSuscription} onChange={onChange}/>
}