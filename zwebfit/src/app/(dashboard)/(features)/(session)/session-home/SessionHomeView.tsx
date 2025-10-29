'use client';

import { useState } from "react";
import SessionCardContainer from "@/components/feactures/module/sessions/sessionCard/SessionCardContainer";
import CreateEventButton from "@/components/feactures/module/sessions/createEventButton/CreateEventButton";
import SessionDetailsCrudContainer from "@/components/feactures/module/sessions/sessionDetailsCrud/SessionDetailsCrudContainer";
import { ISession } from "@/models/modules/ISession";
import { ISessionDetails, ISessionPlayer } from "@/models/modules/ISessionDetails";

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

export default function SessionHomeView({sessions} : {sessions : ISession[]}){
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

    return(
        <div className="w-full">
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <h5 className="text-xl text-black font-bold mb-2">Sessions</h5>
                    <p className="text-gray-600">All</p>
                </div>
                <CreateEventButton onClick={handleCreateEvent} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1">
                {sessions.map((session) => (
                    <SessionCardContainer session={session} key={session.id}/> 
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
        </div>
    );
}