'use client';

import { X } from 'lucide-react';
import { IRutina } from '@/models/modules/IRutina';

interface RutinaDetailsReadProps {
  isOpen: boolean;
  rutina: IRutina | null;
  onClose: () => void;
}

export default function RutinaDetailsRead({ isOpen, rutina, onClose }: RutinaDetailsReadProps) {
  if (!isOpen || !rutina) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-2xl">
          <h2 className="text-2xl font-bold text-gray-900">Detalles de Rutina</h2>
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
          {/* Nombre */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nombre
            </label>
            <div className="bg-gray-50 rounded-lg p-3 text-gray-900">
              {rutina.Nombre}
            </div>
          </div>

          {/* Objetivo */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Objetivo
            </label>
            <div className="bg-gray-50 rounded-lg p-3 text-gray-900 whitespace-pre-wrap">
              {rutina.Objetivo}
            </div>
          </div>

          {/* Tipo and Nivel */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tipo
              </label>
              <div className="bg-gray-50 rounded-lg p-3 text-gray-900">
                {rutina.Tipo}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nivel de Dificultad
              </label>
              <div className="bg-gray-50 rounded-lg p-3 text-gray-900">
                {rutina.NivelDificultad}
              </div>
            </div>
          </div>

          {/* Fecha Registro */}
          {rutina.FechaRegistro && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Fecha de Registro
              </label>
              <div className="bg-gray-50 rounded-lg p-3 text-gray-900">
                {new Date(rutina.FechaRegistro).toLocaleString('es-MX')}
              </div>
            </div>
          )}
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
