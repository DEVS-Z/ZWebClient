'use client';

import { X } from 'lucide-react';

interface ActividadCrudViewProps {
  isOpen: boolean;
  formData: {
    RutinaId: number;
    Tipo: string;
    FechaInicio: string;
    FechaFin: string;
    Descripcion: string;
  };
  rutinas: Array<{ RutinaId: number; Nombre: string }>;
  errors: { [key: string]: string };
  isEditMode: boolean;
  onInputChange: (field: string, value: string | number) => void;
  onSave: () => void;
  onDelete: () => void;
  onClose: () => void;
}

export default function ActividadCrudView(props: ActividadCrudViewProps) {
  const {
    isOpen,
    formData,
    rutinas,
    errors,
    isEditMode,
    onInputChange,
    onSave,
    onDelete,
    onClose,
  } = props;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto mx-4">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 rounded-t-2xl flex items-center justify-between z-10">
          <h2 className="text-2xl font-semibold text-gray-900">
            {isEditMode ? 'Editar Actividad' : 'Nueva Actividad'}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <div className="px-6 py-6 space-y-6">
          {/* Rutina */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Rutina (Opcional)
            </label>
            <select
              value={formData.RutinaId}
              onChange={(e) => onInputChange('RutinaId', parseInt(e.target.value))}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900 bg-white"
            >
              <option value="0">Seleccionar rutina</option>
              {rutinas.map((rutina) => (
                <option key={rutina.RutinaId} value={rutina.RutinaId}>
                  {rutina.Nombre}
                </option>
              ))}
            </select>
          </div>

          {/* Tipo */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Tipo
            </label>
            <input
              type="text"
              value={formData.Tipo}
              onChange={(e) => onInputChange('Tipo', e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900 bg-white"
              placeholder="Tipo de actividad"
            />
            {errors.Tipo && (
              <p className="mt-1 text-sm text-red-600">{errors.Tipo}</p>
            )}
          </div>

          {/* Fecha Inicio */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Fecha Inicio
            </label>
            <input
              type="datetime-local"
              value={formData.FechaInicio}
              onChange={(e) => onInputChange('FechaInicio', e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900 bg-white"
            />
            {errors.FechaInicio && (
              <p className="mt-1 text-sm text-red-600">{errors.FechaInicio}</p>
            )}
          </div>

          {/* Fecha Fin */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Fecha Fin
            </label>
            <input
              type="datetime-local"
              value={formData.FechaFin}
              onChange={(e) => onInputChange('FechaFin', e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900 bg-white"
            />
            {errors.FechaFin && (
              <p className="mt-1 text-sm text-red-600">{errors.FechaFin}</p>
            )}
          </div>

          {/* Descripcion */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Descripción
            </label>
            <textarea
              value={formData.Descripcion}
              onChange={(e) => onInputChange('Descripcion', e.target.value)}
              rows={3}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none text-gray-900 bg-white"
              placeholder="Descripción de la actividad"
            />
          </div>
        </div>

        <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4 rounded-b-2xl flex items-center justify-end z-10">
          <button
            onClick={onSave}
            className="px-8 py-2.5 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors shadow-sm"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
