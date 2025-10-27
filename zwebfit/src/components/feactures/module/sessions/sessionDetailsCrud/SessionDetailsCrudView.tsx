'use client';

import { ISessionPlayer } from '@/models/modules/ISessionDetails';
import { X } from 'lucide-react';

interface SessionDetailsCrudViewProps {
  isOpen: boolean;
  formData: {
    id: string;
    eventType: string;
    location: string;
    date: string;
    startingTime: string;
    finishingTime: string;
    note: string;
  };
  selectedPlayers: ISessionPlayer[];
  availablePlayers: ISessionPlayer[];
  errors: { [key: string]: string };
  isEditMode: boolean;
  onInputChange: (field: string, value: string) => void;
  onPlayerToggle: (player: ISessionPlayer) => void;
  onPlayerPositionChange: (playerId: string, position: string) => void;
  onSave: () => void;
  onDelete: () => void;
  onClose: () => void;
}

export default function SessionDetailsCrudView(props: SessionDetailsCrudViewProps) {
  const {
    isOpen,
    formData,
    selectedPlayers,
    availablePlayers,
    errors,
    isEditMode,
    onInputChange,
    onPlayerToggle,
    onPlayerPositionChange,
    onSave,
    onDelete,
    onClose,
  } = props;

  if (!isOpen) return null;

  const eventTypes = ['Training Session', 'Match'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop with blur */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto mx-4">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 rounded-t-2xl flex items-center justify-between z-10">
          <h2 className="text-2xl font-semibold text-gray-900">Session Details</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-6 space-y-6">
          {/* Event Type */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Event Type
            </label>
            <select
              value={formData.eventType}
              onChange={(e) => onInputChange('eventType', e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900 bg-white"
            >
              <option value="">Select event type</option>
              {eventTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            {errors.eventType && (
              <p className="mt-1 text-sm text-red-600">{errors.eventType}</p>
            )}
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Location
            </label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => onInputChange('location', e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900 bg-white"
              placeholder="Where the session will take place at"
            />
            {errors.location && (
              <p className="mt-1 text-sm text-red-600">{errors.location}</p>
            )}
          </div>

          {/* Date and Time Row */}
          <div className="grid grid-cols-3 gap-4">
            {/* Date */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Date
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => onInputChange('date', e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900 bg-white"
              />
              {errors.date && (
                <p className="mt-1 text-sm text-red-600">{errors.date}</p>
              )}
            </div>

            {/* Starting Time */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Starting time
              </label>
              <input
                type="time"
                value={formData.startingTime}
                onChange={(e) => onInputChange('startingTime', e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900 bg-white"
              />
              {errors.startingTime && (
                <p className="mt-1 text-sm text-red-600">{errors.startingTime}</p>
              )}
            </div>

            {/* Finishing Time */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Finishing Time
              </label>
              <input
                type="time"
                value={formData.finishingTime}
                onChange={(e) => onInputChange('finishingTime', e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900 bg-white"
              />
              {errors.finishingTime && (
                <p className="mt-1 text-sm text-red-600">{errors.finishingTime}</p>
              )}
            </div>
          </div>

          {/* Note */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Note
            </label>
            <textarea
              value={formData.note}
              onChange={(e) => onInputChange('note', e.target.value)}
              rows={3}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none text-gray-900 bg-white"
              placeholder="Write a note for your players to see"
            />
          </div>

          {/* Players for this session */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-3">
              Players for this session
            </label>
            <div className="space-y-3 max-h-64 overflow-y-auto border border-gray-200 rounded-lg p-4 bg-gray-50">
              {availablePlayers.map((player) => {
                const isSelected = selectedPlayers.some((p) => p.id === player.id);
                const selectedPlayer = selectedPlayers.find((p) => p.id === player.id);

                return (
                  <div
                    key={player.id}
                    className="flex items-center gap-4 pb-3 border-b border-gray-200 last:border-b-0 last:pb-0 bg-white p-3 rounded-lg"
                  >
                    {/* Checkbox */}
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => onPlayerToggle(player)}
                      className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer"
                    />

                    {/* Player Info */}
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">{player.name}</p>
                      <p className="text-sm text-gray-600">{player.age} Años</p>
                    </div>

                    {/* Position Dropdown */}
                    {isSelected && (
                      <select
                        value={selectedPlayer?.position || ''}
                        onChange={(e) =>
                          onPlayerPositionChange(player.id, e.target.value)
                        }
                        className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm text-gray-900 bg-white min-w-[150px]"
                      >
                        <option value="" className="text-gray-500">Select Position</option>
                        {player.availablePositions.map((pos) => (
                          <option key={pos} value={pos} className="text-gray-900">
                            {pos}
                          </option>
                        ))}
                      </select>
                    )}
                  </div>
                );
              })}
            </div>
            {errors.players && (
              <p className="mt-2 text-sm text-red-600">{errors.players}</p>
            )}
          </div>
        </div>

        {/* Footer */}
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
