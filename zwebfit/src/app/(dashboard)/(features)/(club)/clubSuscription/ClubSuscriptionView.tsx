import SuscriptionClubCardContainer from "@/components/feactures/module/suscription/suscriptionClubCard/SuscriptionClubCardContainer";
import { IClubSuscription } from "@/models/modules/ISuscription";


export default function ClubSuscriptionView({clubSuscriptions} : {clubSuscriptions : IClubSuscription[]}){
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
            {clubSuscriptions.map((suscription) => (
                <SuscriptionClubCardContainer clubSuscription={suscription} onChange={(id) => console.log("Suscripción seleccionada:", id)}/>
            ))}
        </div>
    )
}