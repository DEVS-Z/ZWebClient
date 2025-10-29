'use client';
import React, { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import SessionSelectorView from './SessionSelectorView';

export default function SessionSelectorContainer() {
  const router = useRouter();
  const pathname = usePathname();
  
  // Determine active tab based on current route
  const getActiveTab = () => {
    if (pathname === '/sessions') return 'Sessions';
    if (pathname === '/events') return 'Events';
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
      // Add your roaster route here when ready
      // router.push('/roaster');
      console.log('Roaster navigation not yet implemented');
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
