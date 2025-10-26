"use client";

import { ISession } from "@/models/modules/ISession";
//aunque no este usando Link directamente en este archivo, es necesario importarlo
//para que funcione el Link dentro de SessionCardView
import Link from "next/link";
import SessionCardView from "../sessionCard/SessionCardView";

export default function SessionListView() {
  const sessions: ISession[] = [
    {
      id: "s1",
      time: "12:00 PM",
      assignDate: new Date(2025, 3, 8), 
      type: "Partido",
      createdByName: "La Pulga",
      duration: "90",
      sessionPlayer: 16,
    },
    {
      id: "s2",
      time: "10:00 AM",
      assignDate: new Date(2025, 3, 10),
      type: "Entrenamiento",
      createdByName: "Messi",
      duration: "120",
      sessionPlayer: 12,
    },
    {
      id: "s3",
      time: "05:00 PM",
      assignDate: new Date(2025, 3, 12),
      type: "Tácticas",
      createdByName: "Scaloni",
      duration: "60",
      sessionPlayer: 8,
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      {sessions.map((s) => (
        <SessionCardView key={s.id} session={s} />
      ))}
    </div>
  );
}
