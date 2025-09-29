"use client";

import React from "react";
import type { CourseDetailHeaderProps } from "../../types/AllCourseDetail";

const CourseDetailHeader: React.FC<CourseDetailHeaderProps> = ({
  title,
  badge = "TOP RATED",
}) => {
  return (
    <div className="bg-white py-4">
      <div className="flex flex-col gap-2 mb-4">
        <span className="bg-[#D5EECD] text-[#567D4A] py-1 px-[6px] rounded-[4px] text-xs font-semibold w-fit">
          {badge}
        </span>
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 leading-tight">
          {title}
        </h1>
      </div>
      <hr className="text-[#E5E5E5]" />
    </div>
  );
};

export default CourseDetailHeader;
