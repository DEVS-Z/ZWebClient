'use client';

import { ISessionDetails } from '@/models/modules/ISessionDetails';
import { X } from 'lucide-react';

interface SessionDetailsReadProps {
  isOpen: boolean;
  sessionData: ISessionDetails;
  onClose: () => void;
}

export default function SessionDetailsRead(props: SessionDetailsReadProps) {
  const { isOpen, sessionData, onClose } = props;

  if (!isOpen) return null;

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
            <div className="w-full px-4 py-2.5 border border-gray-200 rounded-lg bg-gray-50 text-gray-900">
              {sessionData.eventType || 'N/A'}
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Location
            </label>
            <div className="w-full px-4 py-2.5 border border-gray-200 rounded-lg bg-gray-50 text-gray-900">
              {sessionData.location || 'N/A'}
            </div>
          </div>

          {/* Date and Time Row */}
          <div className="grid grid-cols-3 gap-4">
            {/* Date */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Date
              </label>
              <div className="w-full px-4 py-2.5 border border-gray-200 rounded-lg bg-gray-50 text-gray-900">
                {sessionData.date ? new Date(sessionData.date).toLocaleDateString() : 'N/A'}
              </div>
            </div>

            {/* Starting Time */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Starting time
              </label>
              <div className="w-full px-4 py-2.5 border border-gray-200 rounded-lg bg-gray-50 text-gray-900">
                {sessionData.startingTime || 'N/A'}
              </div>
            </div>

            {/* Finishing Time */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Finishing Time
              </label>
              <div className="w-full px-4 py-2.5 border border-gray-200 rounded-lg bg-gray-50 text-gray-900">
                {sessionData.finishingTime || 'N/A'}
              </div>
            </div>
          </div>

          {/* Note */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Note
            </label>
            <div className="w-full px-4 py-2.5 border border-gray-200 rounded-lg bg-gray-50 text-gray-900 min-h-[80px]">
              {sessionData.note || 'No notes'}
            </div>
          </div>

          {/* Players for this session */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-3">
              Players for this session
            </label>
            <div className="grid grid-cols-3 gap-4">
              {sessionData.players.map((player) => (
                <div
                  key={player.id}
                  className="border border-gray-200 rounded-lg p-4 bg-gray-50"
                >
                  <p className="font-semibold text-gray-900 mb-1">{player.name}</p>
                  <p className="text-sm text-gray-600 mb-2">{player.age} Años</p>
                  <div className="px-3 py-1.5 bg-gray-200 rounded-lg text-sm text-gray-900 text-center">
                    {player.position}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
