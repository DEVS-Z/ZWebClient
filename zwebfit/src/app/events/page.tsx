'use client';

import { useState, useEffect } from "react";
import SessionSelectorContainer from "@/components/feactures/module/sessions/sessionSelector/SessionSelectorContainer";
import ActividadCard from "@/components/feactures/module/activities/actividadCard/ActividadCard";
import ActividadCrudContainer from "@/components/feactures/module/activities/actividadCrud/ActividadCrudContainer";
import ActividadDetailsRead from "@/components/feactures/module/activities/actividadDetailsRead/ActividadDetailsRead";
import NotificationPanelContainer from "@/components/feactures/module/notifications/notificationPanel/NotificationPanelContainer";
import { IRutina } from "@/models/modules/IRutina";
import { IActividad } from "@/models/modules/IActividad";
import { rutinasApi } from "@/lib/helpers/rutinasApi";
import { actividadesApi } from "@/lib/helpers/actividadesApi";

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
  const [actividades, setActividades] = useState<IActividad[]>([]);
  const [rutinas, setRutinas] = useState<IRutina[]>([]);
  const [loading, setLoading] = useState(false);
  const [isNotificationPanelOpen, setIsNotificationPanelOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedActividad, setSelectedActividad] = useState<IActividad | undefined>(undefined);

  // Mock unread notifications count
  const unreadCount = 2;

  // Fetch actividades and rutinas
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Fetch rutinas for dropdown
        const rutinasResponse = await rutinasApi.getAll();
        if (rutinasResponse.status === 200 && rutinasResponse.data) {
          setRutinas(rutinasResponse.data);
        }
        // Fetch actividades
        const actividadesResponse = await actividadesApi.getAll();
        if (actividadesResponse.status === 200 && actividadesResponse.data) {
          setActividades(actividadesResponse.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const toggleNotificationPanel = () => {
    setIsNotificationPanelOpen(!isNotificationPanelOpen);
  };

  const handleCreateActividad = () => {
    setSelectedActividad(undefined);
    setIsCreateModalOpen(true);
  };

  const handleViewActividad = (actividad: IActividad) => {
    setSelectedActividad(actividad);
    setIsViewModalOpen(true);
  };

  const handleEditActividad = async (actividad: IActividad) => {
    if (!actividad.ActividadId) return;
    
    try {
      setLoading(true);
      const response = await actividadesApi.getById(actividad.ActividadId);
      if (response.status === 200 && response.data) {
        setSelectedActividad(response.data);
        setIsEditModalOpen(true);
      }
    } catch (error) {
      console.error('Error fetching actividad:', error);
      alert('Error cargando datos de actividad');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteActividad = async (actividad: IActividad) => {
    if (!actividad.ActividadId) return;
    
    const confirmed = window.confirm(`¿Estás seguro de eliminar la actividad "${actividad.Tipo}"?`);
    if (!confirmed) return;

    try {
      setLoading(true);
      const response = await actividadesApi.delete(actividad.ActividadId);
      if (response.status === 200) {
        alert('Actividad eliminada exitosamente');
        // Refresh list
        const listResponse = await actividadesApi.getAll();
        if (listResponse.status === 200 && listResponse.data) {
          setActividades(listResponse.data);
        }
      }
    } catch (error: any) {
      console.error('Error deleting actividad:', error);
      alert(`Error eliminando actividad: ${error.message || 'Unknown error'}`);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveActividad = async (actividad: IActividad) => {
    try {
      setLoading(true);
      if (actividad.ActividadId) {
        // Update
        const response = await actividadesApi.update(actividad.ActividadId, actividad);
        if (response.status === 200) {
          alert('Actividad actualizada exitosamente');
        }
      } else {
        // Create
        const response = await actividadesApi.create(actividad);
        if (response.status === 200 || response.status === 201) {
          alert('Actividad creada exitosamente');
        }
      }
      // Refresh list
      const listResponse = await actividadesApi.getAll();
      if (listResponse.status === 200 && listResponse.data) {
        setActividades(listResponse.data);
      }
      setIsCreateModalOpen(false);
      setIsEditModalOpen(false);
    } catch (error: any) {
      console.error('Error saving actividad:', error);
      alert(`Error guardando actividad: ${error.message || 'Unknown error'}`);
    } finally {
      setLoading(false);
    }
  };

  // Helper to get rutina name
  const getRutinaName = (rutinaId?: number) => {
    if (!rutinaId) return undefined;
    const rutina = rutinas.find(r => r.RutinaId === rutinaId);
    return rutina?.Nombre;
  };

  return (
    <main className="p-6 flex flex-col gap-6">
      <SessionSelectorContainer />
      
      {/* Actividades header with Create button and Notification */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-black">Actividades</h2>
          <p className="text-gray-600">{actividades.length} actividades disponibles</p>
        </div>
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

          {/* Create Actividad Button */}
          <button
            onClick={handleCreateActividad}
            className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Crear Actividad
          </button>
        </div>
      </div>

      {/* Loading state */}
      {loading && <p className="text-gray-600">Cargando actividades...</p>}

      {/* Actividad cards list */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {actividades.map((actividad) => (
          <ActividadCard
            key={actividad.ActividadId}
            actividad={actividad}
            rutinaName={getRutinaName(actividad.RutinaId)}
            onView={handleViewActividad}
            onEdit={handleEditActividad}
            onDelete={handleDeleteActividad}
          />
        ))}
      </div>

      {/* No actividades message */}
      {!loading && actividades.length === 0 && (
        <p className="text-gray-600 text-center py-8">
          No hay actividades disponibles. Crea una nueva actividad para comenzar.
        </p>
      )}

      {/* Create Actividad Modal */}
      <ActividadCrudContainer
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        actividadData={undefined}
        rutinas={rutinas}
        onSave={handleSaveActividad}
        onDelete={undefined}
      />

      {/* Edit Actividad Modal */}
      <ActividadCrudContainer
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        actividadData={selectedActividad}
        rutinas={rutinas}
        onSave={handleSaveActividad}
        onDelete={selectedActividad?.ActividadId ? () => handleDeleteActividad(selectedActividad) : undefined}
      />

      {/* View Actividad Modal */}
      <ActividadDetailsRead
        isOpen={isViewModalOpen}
        actividad={selectedActividad || null}
        rutinaName={selectedActividad ? getRutinaName(selectedActividad.RutinaId) : undefined}
        onClose={() => setIsViewModalOpen(false)}
      />
    </main>
  );
}
