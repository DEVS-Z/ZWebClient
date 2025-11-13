'use client';

import { IActividad } from '@/models/modules/IActividad';
import ThreeDotsMenu from '@/components/common/ThreeDotsMenu/ThreeDotsMenu';

interface ActividadCardProps {
  actividad: IActividad;
  rutinaName?: string;
  onView: (actividad: IActividad) => void;
  onEdit: (actividad: IActividad) => void;
  onDelete: (actividad: IActividad) => void;
}

export default function ActividadCard({ actividad, rutinaName, onView, onEdit, onDelete }: ActividadCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('es-MX', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{actividad.Tipo}</h3>
          <p className="text-gray-600 text-sm line-clamp-2">{actividad.Descripcion}</p>
        </div>
        <ThreeDotsMenu
          onView={() => onView(actividad)}
          onEdit={() => onEdit(actividad)}
          onDelete={() => onDelete(actividad)}
        />
      </div>

      <div className="grid grid-cols-1 gap-3 mt-4">
        {rutinaName && (
          <div>
            <p className="text-xs text-gray-500 uppercase">Rutina</p>
            <p className="text-sm font-medium text-gray-900">{rutinaName}</p>
          </div>
        )}
        <div>
          <p className="text-xs text-gray-500 uppercase">Fecha Inicio</p>
          <p className="text-sm font-medium text-gray-900">{formatDate(actividad.FechaInicio)}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 uppercase">Fecha Fin</p>
          <p className="text-sm font-medium text-gray-900">{formatDate(actividad.FechaFin)}</p>
        </div>
      </div>
    </div>
  );
}
