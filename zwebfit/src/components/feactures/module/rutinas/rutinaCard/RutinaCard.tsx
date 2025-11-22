'use client';

import { IRutina } from '@/models/modules/IRutina';
import ThreeDotsMenu from '@/components/common/ThreeDotsMenu/ThreeDotsMenu';

interface RutinaCardProps {
  rutina: IRutina;
  onView: (rutina: IRutina) => void;
  onEdit: (rutina: IRutina) => void;
  onDelete: (rutina: IRutina) => void;
}

export default function RutinaCard({ rutina, onView, onEdit, onDelete }: RutinaCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{rutina.Nombre}</h3>
          <p className="text-gray-600 text-sm line-clamp-2">{rutina.Objetivo}</p>
        </div>
        <ThreeDotsMenu
          onView={() => onView(rutina)}
          onEdit={() => onEdit(rutina)}
          onDelete={() => onDelete(rutina)}
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <p className="text-xs text-gray-500 uppercase">Tipo</p>
          <p className="text-sm font-medium text-gray-900">{rutina.Tipo}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 uppercase">Nivel</p>
          <p className="text-sm font-medium text-gray-900">{rutina.NivelDificultad}</p>
        </div>
      </div>

      {rutina.FechaRegistro && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-500">
            Registrado: {new Date(rutina.FechaRegistro).toLocaleDateString()}
          </p>
        </div>
      )}
    </div>
  );
}
