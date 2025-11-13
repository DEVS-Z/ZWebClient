'use client';

import React from 'react';
import NotificationPanelView from './NotificationPanelView';
import { INotification } from '@/models/modules/INotification';

interface NotificationPanelContainerProps {
  isOpen: boolean;
  onClose: () => void;
}

const NotificationPanelContainer: React.FC<NotificationPanelContainerProps> = ({
  isOpen,
  onClose,
}) => {
  // Mock notifications data will be replaced with real data from API when login works
  const mockNotifications: INotification[] = [
    {
      id: '1',
      type: 'match',
      title: 'Match Scheduled',
      date: 'October 13',
      time: '09:00 AM',
      location: 'Los Xolos Stadium',
      isRead: false,
    },
    {
      id: '2',
      type: 'training',
      title: 'Training Session Scheduled',
      date: 'October 13',
      time: '07:00 AM',
      location: 'Los Xolos Stadium',
      isRead: false,
    },
    {
      id: '3',
      type: 'match',
      title: 'Match Scheduled',
      date: 'October 13',
      time: '09:00 AM',
      location: 'Los Xolos Stadium',
      isRead: true,
    },
    {
      id: '4',
      type: 'training',
      title: 'Training Session Scheduled',
      date: 'October 13',
      time: '07:00 AM',
      location: 'Los Xolos Stadium',
      isRead: true,
    },
  ];

  return (
    <NotificationPanelView
      notifications={mockNotifications}
      isOpen={isOpen}
      onClose={onClose}
    />
  );
};

export default NotificationPanelContainer;
