import React from 'react';
import { INotification } from '@/models/modules/INotification';

interface NotificationPanelViewProps {
  notifications: INotification[];
  isOpen: boolean;
  onClose: () => void;
}

const NotificationPanelView: React.FC<NotificationPanelViewProps> = ({
  notifications,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const getNotificationIcon = (type: 'match' | 'training') => {
    if (type === 'match') {
      return (
        <span className="material-symbols-outlined text-4xl">
          sports_soccer
        </span>
      );
    }
    return (
      <span className="material-symbols-outlined text-4xl">
        sports_gymnastics
      </span>
    );
  };

  return (
    <>
      {}
      <div
        className="fixed inset-0 z-40"
        onClick={onClose}
      />

      {/* Notification Panel */}
      <div className="absolute top-16 right-6 z-50 w-96 bg-white rounded-lg shadow-2xl border border-gray-200 max-h-[600px] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Notifications</h2>
        </div>

        {/* Notifications List */}
        <div className="overflow-y-auto flex-1">
          {notifications.length === 0 ? (
            <div className="px-6 py-12 text-center text-gray-500">
              <span className="material-symbols-outlined text-6xl mb-2 block text-gray-300">
                notifications_off
              </span>
              <p>No notifications yet</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className="px-6 py-4 hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <div className="flex gap-4">
                    {/* Icon */}
                    <div className="flex-shrink-0 text-gray-700">
                      {getNotificationIcon(notification.type)}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {notification.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {notification.date} – {notification.time}
                      </p>
                      <p className="text-sm text-gray-600">
                        {notification.location}
                      </p>
                    </div>

                    {/* Unread Indicator */}
                    {!notification.isRead && (
                      <div className="flex-shrink-0">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NotificationPanelView;
