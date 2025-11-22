'use client';
import React from 'react';

type Props = {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
};

export default function ModuleSelectorView({
  tabs,
  activeTab,
  onTabChange,
}: Props) {
  return (
    <div className="relative flex flex-col items-center -mt-9">
      {/* Botones */}
      <div className="flex gap-10 pb-3">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`px-6 py-2.5 rounded-2xl text-sm font-medium transition-all duration-200 
              ${
                activeTab === tab
                  ? 'bg-neutral-900 text-white shadow-sm scale-[1.02] hover:bg-neutral-800'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-gray-100/60'
              }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}
