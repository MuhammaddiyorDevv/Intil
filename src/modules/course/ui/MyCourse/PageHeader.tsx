import React from "react";
import TabNavigation from "./TabNavigation";
import type { PageHeaderProps } from "../../types/MyCourse";

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  tabs,
  onTabChange,
}) => {
  return (
    <div className="mb-5">
      <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 ">
        {title}
      </h1>
      <TabNavigation tabs={tabs} onTabChange={onTabChange} />
    </div>
  );
};

export default PageHeader;
