import PlayerCardContainer from "@/components/feactures/module/players/playerCard/PlayerCardContainer";
import ClubHomePage from "../(dashboard)/(features)/(club)/club-home/page";
import SessionHomePage from "../(dashboard)/(features)/(sessions)/session-home/page";

export default function PublicHomePage() {
    return (
        <div className="w-full">
            <SessionHomePage />
        </div>
    );
}