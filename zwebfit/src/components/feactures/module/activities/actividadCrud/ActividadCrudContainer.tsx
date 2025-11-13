'use client';

import { useState, useEffect } from 'react';
import { IActividadFormProps } from '@/models/modules/IActividad';
import ActividadCrudView from './ActividadCrudView';
import { useAuth } from '@/app/context/authContext';

export default function ActividadCrudContainer(props: IActividadFormProps) {
  const { isOpen, onClose, actividadData, rutinas, onSave, onDelete } = props;
  const { userId } = useAuth();

  const [formData, setFormData] = useState({
    RutinaId: 0,
    Tipo: '',
    FechaInicio: '',
    FechaFin: '',
    Descripcion: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Update form data when actividadData changes
  useEffect(() => {
    if (actividadData) {
      setFormData({
        RutinaId: actividadData.RutinaId || 0,
        Tipo: actividadData.Tipo || '',
        FechaInicio: actividadData.FechaInicio || '',
        FechaFin: actividadData.FechaFin || '',
        Descripcion: actividadData.Descripcion || '',
      });
    } else {
      // Reset form for create mode
      setFormData({
        RutinaId: 0,
        Tipo: '',
        FechaInicio: '',
        FechaFin: '',
        Descripcion: '',
      });
    }
    setErrors({});
  }, [actividadData, isOpen]);

  const handleInputChange = (field: string, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.Tipo.trim()) newErrors.Tipo = 'Tipo is required';
    if (!formData.FechaInicio) newErrors.FechaInicio = 'Fecha inicio is required';
    if (!formData.FechaFin) newErrors.FechaFin = 'Fecha fin is required';

    if (formData.FechaInicio && formData.FechaFin) {
      if (new Date(formData.FechaFin) <= new Date(formData.FechaInicio)) {
        newErrors.FechaFin = 'Fecha fin must be after fecha inicio';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (!validateForm()) return;

    const actividadToSave = {
      ...actividadData,
      ...formData,
      JugadorId: userId || 0, // Auto-fill with logged-in user ID
      RutinaId: formData.RutinaId || undefined,
    };

    onSave(actividadToSave);
  };

  const handleDelete = () => {
    if (actividadData?.ActividadId && onDelete) {
      onDelete(actividadData.ActividadId);
    }
  };

  const handleClose = () => {
    setErrors({});
    onClose();
  };

  return (
    <ActividadCrudView
      isOpen={isOpen}
      formData={formData}
      rutinas={rutinas}
      errors={errors}
      isEditMode={!!actividadData?.ActividadId}
      onInputChange={handleInputChange}
      onSave={handleSave}
      onDelete={handleDelete}
      onClose={handleClose}
    />
  );
}
