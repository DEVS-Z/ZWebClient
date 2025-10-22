import { ISession } from "@/models/modules/ISession";
import SessionCardView from "./SessionCardView";

export default function SessionCardContainer({session} : {session : ISession}){
    return <SessionCardView session={session}/>
}