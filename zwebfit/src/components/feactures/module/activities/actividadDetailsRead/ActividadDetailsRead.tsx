'use client';

import { X } from 'lucide-react';
import { IActividad } from '@/models/modules/IActividad';

interface ActividadDetailsReadProps {
  isOpen: boolean;
  actividad: IActividad | null;
  rutinaName?: string;
  onClose: () => void;
}

export default function ActividadDetailsRead({ isOpen, actividad, rutinaName, onClose }: ActividadDetailsReadProps) {
  if (!isOpen || !actividad) return null;

  const formatDateTime = (dateString: string) => {
    return new Date(dateString).toLocaleString('es-MX', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-2xl">
          <h2 className="text-2xl font-bold text-gray-900">Detalles de Actividad</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Tipo */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tipo
            </label>
            <div className="bg-gray-50 rounded-lg p-3 text-gray-900">
              {actividad.Tipo}
            </div>
          </div>

          {/* Rutina */}
          {rutinaName && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Rutina Asociada
              </label>
              <div className="bg-gray-50 rounded-lg p-3 text-gray-900">
                {rutinaName}
              </div>
            </div>
          )}

          {/* Descripcion */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Descripción
            </label>
            <div className="bg-gray-50 rounded-lg p-3 text-gray-900 whitespace-pre-wrap">
              {actividad.Descripcion}
            </div>
          </div>

          {/* Fechas */}
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Fecha Inicio
              </label>
              <div className="bg-gray-50 rounded-lg p-3 text-gray-900">
                {formatDateTime(actividad.FechaInicio)}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Fecha Fin
              </label>
              <div className="bg-gray-50 rounded-lg p-3 text-gray-900">
                {formatDateTime(actividad.FechaFin)}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4 rounded-b-2xl">
          <button
            onClick={onClose}
            className="w-full bg-gray-200 text-gray-900 py-3 px-6 rounded-lg font-medium hover:bg-gray-300 transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
