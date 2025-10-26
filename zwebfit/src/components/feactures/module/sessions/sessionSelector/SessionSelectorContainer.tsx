'use client';
import React, { useState } from 'react';
import SessionSelectorView from './SessionSelectorView';

export default function SessionSelectorContainer() {
  const [activeTab, setActiveTab] = useState('Roaster');
  const tabs = ['Roaster', 'Sessions', 'Events'];

  return (
    <SessionSelectorView
      tabs={tabs}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    />
  );
}
