'use client';

import { X } from 'lucide-react';

interface RutinaCrudViewProps {
  isOpen: boolean;
  formData: {
    Nombre: string;
    Objetivo: string;
    Tipo: string;
    NivelDificultad: string;
  };
  errors: { [key: string]: string };
  isEditMode: boolean;
  onInputChange: (field: string, value: string) => void;
  onSave: () => void;
  onDelete: () => void;
  onClose: () => void;
}

export default function RutinaCrudView(props: RutinaCrudViewProps) {
  const {
    isOpen,
    formData,
    errors,
    isEditMode,
    onInputChange,
    onSave,
    onDelete,
    onClose,
  } = props;

  if (!isOpen) return null;

  const nivelOptions = ['Principiante', 'Intermedio', 'Avanzado'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto mx-4">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 rounded-t-2xl flex items-center justify-between z-10">
          <h2 className="text-2xl font-semibold text-gray-900">
            {isEditMode ? 'Editar Rutina' : 'Nueva Rutina'}
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
          {/* Nombre */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Nombre
            </label>
            <input
              type="text"
              value={formData.Nombre}
              onChange={(e) => onInputChange('Nombre', e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900 bg-white"
              placeholder="Nombre de la rutina"
            />
            {errors.Nombre && (
              <p className="mt-1 text-sm text-red-600">{errors.Nombre}</p>
            )}
          </div>

          {/* Objetivo */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Objetivo
            </label>
            <textarea
              value={formData.Objetivo}
              onChange={(e) => onInputChange('Objetivo', e.target.value)}
              rows={3}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none text-gray-900 bg-white"
              placeholder="Objetivo de la rutina"
            />
            {errors.Objetivo && (
              <p className="mt-1 text-sm text-red-600">{errors.Objetivo}</p>
            )}
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
              placeholder="Tipo de rutina"
            />
          </div>

          {/* Nivel de Dificultad */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Nivel de Dificultad
            </label>
            <select
              value={formData.NivelDificultad}
              onChange={(e) => onInputChange('NivelDificultad', e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900 bg-white"
            >
              <option value="">Seleccionar nivel</option>
              {nivelOptions.map((nivel) => (
                <option key={nivel} value={nivel}>
                  {nivel}
                </option>
              ))}
            </select>
            {errors.NivelDificultad && (
              <p className="mt-1 text-sm text-red-600">{errors.NivelDificultad}</p>
            )}
          </div>
        </div>

        <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4 rounded-b-2xl flex items-center justify-between z-10">
          {isEditMode ? (
            <button
              onClick={onDelete}
              className="px-6 py-2.5 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors shadow-sm"
            >
              Delete
            </button>
          ) : (
            <div></div>
          )}

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
