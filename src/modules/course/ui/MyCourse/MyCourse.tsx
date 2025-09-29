import React, { useState } from "react";
import { myCoursesData, archiveCoursesData } from "../../constants/myCourses";
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

  const filteredCourses =
    activeTab === "my-courses" ? myCoursesData : archiveCoursesData;

  return (
    <div className="bg-white min-h-[calc(100vh-8rem)] p-5 rounded-[20px] flex flex-col">
      <PageHeader title="Мои курсы" tabs={tabs} onTabChange={handleTabChange} />
      <div className="flex-1 mt-5">
        <MyCoursesGrid
          courses={filteredCourses}
          isArchive={activeTab === "archive"}
        />
      </div>
    </div>
  );
};

export default MyCourse;
