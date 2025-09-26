import React, { useState } from "react";
import { myCoursesData, archiveCoursesData } from "../../data/myCourses";
import type { TabOption } from "../../types/MyCourse";
import PageHeader from "./PageHeader";
import MyCoursesGrid from "./MyCoursesGrid";

const MyCourse: React.FC = () => {
  const [activeTab, setActiveTab] = useState("my-courses");

  const tabs: TabOption[] = [
    {
      id: "my-courses",
      label: "Мои курсы",
      isActive: activeTab === "my-courses",
    },
    {
      id: "archive",
      label: "Архив",
      isActive: activeTab === "archive",
    },
  ];

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  const filteredCourses = activeTab === "my-courses" ? myCoursesData : archiveCoursesData;

  return (
    <div className="">
      <div className="bg-white p-5 rounded-[20px]">
        <PageHeader
          title="Мои курсы"
          tabs={tabs}
          onTabChange={handleTabChange}
        />
        <MyCoursesGrid courses={filteredCourses} />
      </div>
    </div>
  );
};

export default MyCourse;
