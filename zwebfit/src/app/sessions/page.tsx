'use client';

import { useState } from "react";
import SessionSelectorContainer from "@/components/feactures/module/sessions/sessionSelector/SessionSelectorContainer";
import SessionCardContainer from "@/components/feactures/module/sessions/sessionCard/SessionCardContainer";
import CreateEventButton from "@/components/feactures/module/sessions/createEventButton/CreateEventButton";
import SessionDetailsCrudContainer from "@/components/feactures/module/sessions/sessionDetailsCrud/SessionDetailsCrudContainer";
import { ISession } from "@/models/modules/ISession";
import { ISessionDetails, ISessionPlayer } from "@/models/modules/ISessionDetails";

// Mock sessions data
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

// Mock players data
const mockPlayers: ISessionPlayer[] = [
  {
    id: '1',
    name: 'Chicharito Hernandez',
    age: 37,
    position: 'Delantero',
    availablePositions: ['Delantero', 'Mediocampista', 'Defensa', 'Portero'],
  },
  {
    id: '2',
    name: 'Memo Ochoa',
    age: 39,
    position: 'Portero',
    availablePositions: ['Portero', 'Defensa'],
  },
  {
    id: '3',
    name: 'Raúl Jiménez',
    age: 33,
    position: 'Delantero',
    availablePositions: ['Delantero', 'Mediocampista'],
  },
  {
    id: '4',
    name: 'Héctor Moreno',
    age: 36,
    position: 'Defensa',
    availablePositions: ['Defensa', 'Mediocampista'],
  },
  {
    id: '5',
    name: 'Hirving Lozano',
    age: 29,
    position: 'Delantero',
    availablePositions: ['Delantero', 'Mediocampista', 'Defensa'],
  },
];

export default function SessionsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSession, setEditingSession] = useState<ISessionDetails | undefined>(undefined);

  const handleCreateEvent = () => {
    setEditingSession(undefined);
    setIsModalOpen(true);
  };

  const handleSave = (session: ISessionDetails) => {
    console.log('Session saved:', session);
    setIsModalOpen(false);
  };

  const handleDelete = (sessionId: string) => {
    console.log('Session deleted:', sessionId);
    setIsModalOpen(false);
  };

  return ( 
    <main className="p-6 flex flex-col gap-6">
      {/* 3-button navigation */}
      <SessionSelectorContainer />
      
      {/* Sessions header with Create Event button */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-black">Sessions</h2>
          <p className="text-gray-600">All</p>
        </div>
        <CreateEventButton onClick={handleCreateEvent} />
      </div>

      {/* Session cards list */}
      <div className="grid grid-cols-1 gap-4">
        {sessions.map((session) => (
          <SessionCardContainer session={session} key={session.id} /> 
        ))}
      </div>

      {/* Session Details Modal */}
      <SessionDetailsCrudContainer
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        sessionData={editingSession}
        availablePlayers={mockPlayers}
        onSave={handleSave}
        onDelete={editingSession ? handleDelete : undefined}
      />
    </main>
  );
}



 