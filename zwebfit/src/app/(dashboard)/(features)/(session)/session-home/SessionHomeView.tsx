import SessionCardContainer from "@/components/feactures/module/sessions/sessionCard/SessionCardContainer";
import { ISession } from "@/models/modules/ISession";


export default function SessionHomeView({sessions} : {sessions : ISession[]}){
    return(
        <div className="w-full">
            <div className="mb-8">
                <h5 className="text-xl text-black font-bold mb-2">Sessions</h5>
                <p className="text-gray-600">All</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1">
                {sessions.map((session) => (
                    <SessionCardContainer session={session} key={session.id}/> 
                ))}
            </div>
        </div>
    );
}