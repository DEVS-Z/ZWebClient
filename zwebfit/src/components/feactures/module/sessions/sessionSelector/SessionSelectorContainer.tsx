'use client';
import React, { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import SessionSelectorView from './SessionSelectorView';

export default function SessionSelectorContainer() {
  const router = useRouter();
  const pathname = usePathname();
  
  const getActiveTab = () => {
    if (pathname === '/sessions') return 'Sessions';
    if (pathname === '/events') return 'Events';
    if (pathname === '/roaster') return 'Roaster';
    return 'Roaster';
  };

  const [activeTab, setActiveTab] = useState(getActiveTab());
  const tabs = ['Roaster', 'Sessions', 'Events'];

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    
    // Navigate to corresponding route
    if (tab === 'Sessions') {
      router.push('/sessions');
    } else if (tab === 'Events') {
      router.push('/events');
    } else if (tab === 'Roaster') {
      router.push('/roaster');
    }
  };

  return (
    <SessionSelectorView
      tabs={tabs}
      activeTab={activeTab}
      onTabChange={handleTabChange}
    />
  );
}
