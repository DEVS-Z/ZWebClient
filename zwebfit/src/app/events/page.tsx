'use client';

import { useState } from "react";
import SessionSelectorContainer from "@/components/feactures/module/sessions/sessionSelector/SessionSelectorContainer";
import EventListContainer from "@/components/feactures/module/events/eventList/EventListContainer";
import CreateEventButton from "@/components/feactures/module/sessions/createEventButton/CreateEventButton";
import SessionDetailsCrudContainer from "@/components/feactures/module/sessions/sessionDetailsCrud/SessionDetailsCrudContainer";
import SessionDetailsRead from "@/components/feactures/module/sessions/sessionDetailsCrud/SessionDetailsRead";
import NotificationPanelContainer from "@/components/feactures/module/notifications/notificationPanel/NotificationPanelContainer";
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

// Mock session data for testing read-only view
const mockSessionData: ISessionDetails = {
  id: '1',
  eventType: 'Training Session',
  location: 'Los Xolos Stadium',
  date: '2025-04-01',
  startingTime: '12:00',
  finishingTime: '14:00',
  note: 'Bring your equipment to do hard training',
  players: [
    {
      id: '1',
      name: 'Chicharito Hernandez',
      age: 37,
      position: 'Delantero',
      availablePositions: ['Delantero', 'Mediocampista', 'Defensa', 'Portero'],
    },
    {
      id: '2',
      name: 'Chicharito Hernandez',
      age: 37,
      position: 'Delantero',
      availablePositions: ['Delantero', 'Mediocampista', 'Defensa', 'Portero'],
    },
    {
      id: '3',
      name: 'Chicharito Hernandez',
      age: 37,
      position: 'Delantero',
      availablePositions: ['Delantero', 'Mediocampista', 'Defensa', 'Portero'],
    },
    {
      id: '4',
      name: 'Chicharito Hernandez',
      age: 37,
      position: 'Delantero',
      availablePositions: ['Delantero', 'Mediocampista', 'Defensa', 'Portero'],
    },
    {
      id: '5',
      name: 'Chicharito Hernandez',
      age: 37,
      position: 'Delantero',
      availablePositions: ['Delantero', 'Mediocampista', 'Defensa', 'Portero'],
    },
    {
      id: '6',
      name: 'Chicharito Hernandez',
      age: 37,
      position: 'Delantero',
      availablePositions: ['Delantero', 'Mediocampista', 'Defensa', 'Portero'],
    },
  ],
};

export default function EventsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isReadModalOpen, setIsReadModalOpen] = useState(false);
  const [isNotificationPanelOpen, setIsNotificationPanelOpen] = useState(false);
  const [editingSession, setEditingSession] = useState<ISessionDetails | undefined>(undefined);

  // Mock unread notifications count, will be replaced with real data
  const unreadCount = 2;

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

  const handleTestReadView = () => {
    setIsReadModalOpen(true);
  };

  const toggleNotificationPanel = () => {
    setIsNotificationPanelOpen(!isNotificationPanelOpen);
  };

  return (
    <main className="p-6 flex flex-col gap-6">
      <SessionSelectorContainer />
      
      {/* Events header with Create Event button */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-black">Events</h2>
        <div className="flex gap-3 items-center relative">
          {/* Notification Bell Button */}
          <button
            onClick={toggleNotificationPanel}
            className="relative p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Notifications"
          >
            <span className="material-symbols-outlined text-3xl">
              {unreadCount > 0 ? 'notifications_unread' : 'notifications'}
            </span>
            {unreadCount > 0 && (
              <span className="absolute top-1 right-1 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {unreadCount}
              </span>
            )}
          </button>

          {/* Notification Panel */}
          <NotificationPanelContainer
            isOpen={isNotificationPanelOpen}
            onClose={() => setIsNotificationPanelOpen(false)}
          />

          {/* Test button for read-only view - TEMPORARY */}
          <button
            onClick={handleTestReadView}
            className="px-4 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
          >
            Test Player Behavior of Details
          </button>
          <CreateEventButton onClick={handleCreateEvent} />
        </div>
      </div>

      <EventListContainer />

      {/* Session Details CRUD Modal */}
      <SessionDetailsCrudContainer
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        sessionData={editingSession}
        availablePlayers={mockPlayers}
        onSave={handleSave}
        onDelete={editingSession ? handleDelete : undefined}
      />

      {/* Session Details Read-Only Modal - TEMPORARY FOR TESTING */}
      <SessionDetailsRead
        isOpen={isReadModalOpen}
        sessionData={mockSessionData}
        onClose={() => setIsReadModalOpen(false)}
      />
    </main>
  );
}
