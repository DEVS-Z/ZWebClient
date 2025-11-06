import PlayerCardContainer from "@/components/feactures/module/players/playerCard/PlayerCardContainer";
import ClubHomePage from "../(dashboard)/(features)/(club)/club-home/page";
import ClubAddPage from "../(dashboard)/(features)/(club)/club-add/page";
import SuscriptionClubCardContainer from "@/components/feactures/module/suscription/suscriptionClubCard/SuscriptionClubCardContainer";
import { IClubSuscription } from "@/models/modules/ISuscription";

const suscription : IClubSuscription = {
    SuscripcionId :1,
    Nombre : 'BASICO',
    Precio : 123,
    CantPlayers : 123
}

export default function PublicHomePage() {
    return (
        <div className="w-full">
            <SuscriptionClubCardContainer clubSuscription={suscription} onChange={(id) => console.log("Suscripción seleccionada:", id)}/>
        </div>
    );
}