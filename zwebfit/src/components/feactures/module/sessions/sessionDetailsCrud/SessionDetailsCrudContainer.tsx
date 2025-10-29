'use client';

import { useState } from 'react';
import { ISessionDetailsFormProps, ISessionPlayer } from '@/models/modules/ISessionDetails';
import SessionDetailsCrudView from './SessionDetailsCrudView';

export default function SessionDetailsCrudContainer(props: ISessionDetailsFormProps) {
  const { isOpen, onClose, sessionData, availablePlayers, onSave, onDelete } = props;

  const [formData, setFormData] = useState({
    id: sessionData?.id || '',
    eventType: sessionData?.eventType || '',
    location: sessionData?.location || '',
    date: sessionData?.date || '',
    startingTime: sessionData?.startingTime || '',
    finishingTime: sessionData?.finishingTime || '',
    note: sessionData?.note || '',
  });

  const [selectedPlayers, setSelectedPlayers] = useState<ISessionPlayer[]>(
    sessionData?.players || []
  );

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const handlePlayerToggle = (player: ISessionPlayer) => {
    const isSelected = selectedPlayers.some((p) => p.id === player.id);
    if (isSelected) {
      setSelectedPlayers(selectedPlayers.filter((p) => p.id !== player.id));
    } else {
      setSelectedPlayers([...selectedPlayers, { ...player }]);
    }
  };

  const handlePlayerPositionChange = (playerId: string, position: string) => {
    setSelectedPlayers(
      selectedPlayers.map((p) => (p.id === playerId ? { ...p, position } : p))
    );
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.eventType) newErrors.eventType = 'Event type is required';
    if (!formData.location.trim()) newErrors.location = 'Location is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.startingTime) newErrors.startingTime = 'Starting time is required';
    if (!formData.finishingTime) newErrors.finishingTime = 'Finishing time is required';

    // Time validation
    if (formData.startingTime && formData.finishingTime) {
      const [startHour, startMin] = formData.startingTime.split(':').map(Number);
      const [endHour, endMin] = formData.finishingTime.split(':').map(Number);
      const startMinutes = startHour * 60 + startMin;
      const endMinutes = endHour * 60 + endMin;

      if (endMinutes <= startMinutes) {
        newErrors.finishingTime = 'Finishing time must be after starting time';
      }
    }

    if (selectedPlayers.length === 0) {
      newErrors.players = 'At least one player must be selected';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (!validateForm()) return;

    const sessionToSave = {
      ...formData,
      players: selectedPlayers,
    };

    onSave(sessionToSave);
    console.log('Session saved:', sessionToSave);
  };

  const handleDelete = () => {
    if (formData.id && onDelete) {
      onDelete(formData.id);
      console.log('Session deleted:', formData.id);
    }
  };

  const handleClose = () => {
    setErrors({});
    onClose();
  };

  return (
    <SessionDetailsCrudView
      isOpen={isOpen}
      formData={formData}
      selectedPlayers={selectedPlayers}
      availablePlayers={availablePlayers}
      errors={errors}
      isEditMode={!!sessionData?.id}
      onInputChange={handleInputChange}
      onPlayerToggle={handlePlayerToggle}
      onPlayerPositionChange={handlePlayerPositionChange}
      onSave={handleSave}
      onDelete={handleDelete}
      onClose={handleClose}
    />
  );
}
