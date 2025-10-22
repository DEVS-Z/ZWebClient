import { ISession } from "@/models/modules/ISession";
import SessionHomeView from "./SessionHomeView";

export const sessions: ISession[] = [
  {
    id: "1",
    createdById: "u001",
    createdByName: "Coach La Pulga",
    assignDate: new Date("2025-04-08T12:00:00"),
    duration: "90 minutos",
    sessionPlayer: 16,
    type: "Partido",
    time: "12:00 PM"
  },
  {
    id: "2",
    createdById: "u002",
    createdByName: "Coach Ramírez",
    assignDate: new Date("2025-04-09T09:30:00"),
    duration: "60 minutos",
    sessionPlayer: 12,
    type: "Entrenamiento",
    time: "9:30 AM"
  },
  {
    id: "3",
    createdById: "u003",
    createdByName: "Coach Herrera",
    assignDate: new Date("2025-04-10T18:00:00"),
    duration: "75 minutos",
    sessionPlayer: 14,
    type: "Táctica",
    time: "6:00 PM"
  }
];


export default function SessionHomePage(){
    return <SessionHomeView sessions={sessions}/> 
}