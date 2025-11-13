'use client';

import { useState } from 'react';
import { IRutinaFormProps } from '@/models/modules/IRutina';
import RutinaCrudView from './RutinaCrudView';
import { useAuth } from '@/app/context/authContext';

export default function RutinaCrudContainer(props: IRutinaFormProps) {
  const { isOpen, onClose, rutinaData, onSave, onDelete } = props;
  const { userId } = useAuth();

  const [formData, setFormData] = useState({
    Nombre: rutinaData?.Nombre || '',
    Objetivo: rutinaData?.Objetivo || '',
    Tipo: rutinaData?.Tipo || '',
    NivelDificultad: rutinaData?.NivelDificultad || '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.Nombre.trim()) newErrors.Nombre = 'Nombre is required';
    if (!formData.Objetivo.trim()) newErrors.Objetivo = 'Objetivo is required';
    if (!formData.NivelDificultad) newErrors.NivelDificultad = 'Nivel de dificultad is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (!validateForm()) return;

    // Generate timestamp in format: "2025-11-13 01:33:34"
    const now = new Date();
    const timestamp = now.toISOString().slice(0, 19).replace('T', ' ');

    console.log('UserId from auth context:', userId);
    console.log('Rutina data being saved:', formData);

    const rutinaToSave = {
      ...rutinaData,
      ...formData,
      CreadoPorId: userId || 0, // Auto-fill with logged-in user ID
      FechaRegistro: rutinaData?.FechaRegistro || timestamp, // Only set on create
    };

    console.log('Final rutina object:', rutinaToSave);
    onSave(rutinaToSave);
  };

  const handleDelete = () => {
    if (rutinaData?.RutinaId && onDelete) {
      onDelete(rutinaData.RutinaId);
    }
  };

  const handleClose = () => {
    setErrors({});
    onClose();
  };

  return (
    <RutinaCrudView
      isOpen={isOpen}
      formData={formData}
      errors={errors}
      isEditMode={!!rutinaData?.RutinaId}
      onInputChange={handleInputChange}
      onSave={handleSave}
      onDelete={handleDelete}
      onClose={handleClose}
    />
  );
}
