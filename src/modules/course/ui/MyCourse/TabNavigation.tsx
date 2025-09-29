import React from "react";
import type { TabNavigationProps } from "../../types/MyCourse";

const TabNavigation: React.FC<TabNavigationProps> = ({ tabs, onTabChange }) => {
  return (
    <div className="flex gap-4">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`py-3 px-5 rounded-xl text-[14px] sm:text-[16px] font-medium shadow-sm transition-colors cursor-pointer ${
            tab.isActive
              ? "bg-[#567D4A] text-white hover:bg-[#4a6b3e]"
              : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
          }`}
          aria-label={tab.label}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;
