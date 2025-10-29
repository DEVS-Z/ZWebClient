'use client';

import { useState } from "react";
import SessionSelectorContainer from "@/components/feactures/module/sessions/sessionSelector/SessionSelectorContainer";
import EventListContainer from "@/components/feactures/module/events/eventList/EventListContainer";
import CreateEventButton from "@/components/feactures/module/sessions/createEventButton/CreateEventButton";
import SessionDetailsCrudContainer from "@/components/feactures/module/sessions/sessionDetailsCrud/SessionDetailsCrudContainer";
import { ISessionDetails, ISessionPlayer } from "@/models/modules/ISessionDetails";

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

export default function EventsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSession, setEditingSession] = useState<ISessionDetails | undefined>(undefined);

  const handleCreateEvent = () => {
    setEditingSession(undefined);
    setIsModalOpen(true);
  };

  const handleSave = (session: ISessionDetails) => {
    console.log('Event saved:', session);
    setIsModalOpen(false);
  };

  const handleDelete = (sessionId: string) => {
    console.log('Event deleted:', sessionId);
    setIsModalOpen(false);
  };

  return (
    <main className="p-6 flex flex-col gap-6">
      <SessionSelectorContainer />
      
      {/* Events header with Create Event button */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-black">Events</h2>
        <CreateEventButton onClick={handleCreateEvent} />
      </div>

      <EventListContainer />

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
