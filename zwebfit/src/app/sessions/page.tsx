'use client';

import { useState, useEffect } from "react";
import SessionSelectorContainer from "@/components/feactures/module/sessions/sessionSelector/SessionSelectorContainer";
import RutinaCard from "@/components/feactures/module/routines/rutinaCard/RutinaCard";
import RutinaCrudContainer from "@/components/feactures/module/routines/routineCrud/RutinaCrudContainer";
import RutinaDetailsRead from "@/components/feactures/module/routines/rutinaDetailsRead/RutinaDetailsRead";
import { IRutina } from "@/models/modules/IRutina";
import { rutinasApi } from "@/lib/helpers/rutinasApi";

export default function SessionsPage() {
  const [rutinas, setRutinas] = useState<IRutina[]>([]);
  const [loading, setLoading] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedRutina, setSelectedRutina] = useState<IRutina | undefined>(undefined);

  // Fetch all rutinas
  useEffect(() => {
    const fetchRutinas = async () => {
      try {
        setLoading(true);
        const response = await rutinasApi.getAll();
        if (response.status === 200 && response.data) {
          setRutinas(response.data);
        }
      } catch (error) {
        console.error('Error fetching rutinas:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchRutinas();
  }, []);

  const handleCreateRutina = () => {
    setSelectedRutina(undefined);
    setIsCreateModalOpen(true);
  };

  const handleViewRutina = (rutina: IRutina) => {
    setSelectedRutina(rutina);
    setIsViewModalOpen(true);
  };

  const handleEditRutina = async (rutina: IRutina) => {
    if (!rutina.RutinaId) return;
    
    try {
      setLoading(true);
      const response = await rutinasApi.getById(rutina.RutinaId);
      if (response.status === 200 && response.data) {
        setSelectedRutina(response.data);
        setIsEditModalOpen(true);
      }
    } catch (error) {
      console.error('Error fetching rutina:', error);
      alert('Error cargando datos de rutina');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteRutina = async (rutina: IRutina) => {
    if (!rutina.RutinaId) return;
    
    const confirmed = window.confirm(`¿Estás seguro de eliminar la rutina "${rutina.Nombre}"?`);
    if (!confirmed) return;

    try {
      setLoading(true);
      const response = await rutinasApi.delete(rutina.RutinaId);
      if (response.status === 200) {
        alert('Rutina eliminada exitosamente');
        // Refresh list
        const listResponse = await rutinasApi.getAll();
        if (listResponse.status === 200 && listResponse.data) {
          setRutinas(listResponse.data);
        }
      }
    } catch (error: any) {
      console.error('Error deleting rutina:', error);
      alert(`Error eliminando rutina: ${error.message || 'Unknown error'}`);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveRutina = async (rutina: IRutina) => {
    try {
      setLoading(true);
      if (rutina.RutinaId) {
        // Update
        const response = await rutinasApi.update(rutina.RutinaId, rutina);
        if (response.status === 200) {
          alert('Rutina actualizada exitosamente');
        }
      } else {
        // Create
        const response = await rutinasApi.create(rutina);
        if (response.status === 200 || response.status === 201) {
          alert('Rutina creada exitosamente');
        }
      }
      // Refresh list
      const listResponse = await rutinasApi.getAll();
      if (listResponse.status === 200 && listResponse.data) {
        setRutinas(listResponse.data);
      }
      setIsCreateModalOpen(false);
      setIsEditModalOpen(false);
    } catch (error: any) {
      console.error('Error saving rutina:', error);
      alert(`Error guardando rutina: ${error.message || 'Unknown error'}`);
    } finally {
      setLoading(false);
    }
  };

  return ( 
    <main className="p-6 flex flex-col gap-6">
      {/* 3-button navigation */}
      <SessionSelectorContainer />
      
      {/* Rutinas header with Create button */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-black">Rutinas</h2>
          <p className="text-gray-600">{rutinas.length} rutinas disponibles</p>
        </div>
        <button
          onClick={handleCreateRutina}
          className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          Crear Rutina
        </button>
      </div>

      {/* Loading state */}
      {loading && <p className="text-gray-600">Cargando rutinas...</p>}

      {/* Rutina cards list */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {rutinas.map((rutina) => (
          <RutinaCard
            key={rutina.RutinaId}
            rutina={rutina}
            onView={handleViewRutina}
            onEdit={handleEditRutina}
            onDelete={handleDeleteRutina}
          />
        ))}
      </div>

      {/* No rutinas message */}
      {!loading && rutinas.length === 0 && (
        <p className="text-gray-600 text-center py-8">
          No hay rutinas disponibles. Crea una nueva rutina para comenzar.
        </p>
      )}

      {/* Create Rutina Modal */}
      <RutinaCrudContainer
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        rutinaData={undefined}
        onSave={handleSaveRutina}
        onDelete={undefined}
      />

      {/* Edit Rutina Modal */}
      <RutinaCrudContainer
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        rutinaData={selectedRutina}
        onSave={handleSaveRutina}
        onDelete={selectedRutina?.RutinaId ? () => handleDeleteRutina(selectedRutina) : undefined}
      />

      {/* View Rutina Modal */}
      <RutinaDetailsRead
        isOpen={isViewModalOpen}
        rutina={selectedRutina || null}
        onClose={() => setIsViewModalOpen(false)}
      />
    </main>
  );
}



 