'use client';
import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import ModuleSelectorView from './ModuleSelectorView';

export default function ModuleSelectorContainer() {
  const router = useRouter();
  const pathname = usePathname();
  
  const getActiveTab = () => {
    if (pathname?.includes('/rutinas')) return 'Rutinas';
    if (pathname?.includes('/actividades')) return 'Actividades';
    if (pathname?.includes('/jugadores')) return 'Jugadores';
    return 'Actividades';
  };

  const [activeTab, setActiveTab] = useState(getActiveTab());
  const tabs = ['Actividades', 'Rutinas', 'Jugadores'];

  useEffect(() => {
    setActiveTab(getActiveTab());
  }, [pathname]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    
    // Navigate to corresponding route
    if (tab === 'Rutinas') {
      router.push('/rutinas');
    } else if (tab === 'Actividades') {
      router.push('/actividades');
    } else if (tab === 'Jugadores') {
      router.push('/jugadores');
    }
  };

  return (
    <ModuleSelectorView
      tabs={tabs}
      activeTab={activeTab}
      onTabChange={handleTabChange}
    />
  );
}
