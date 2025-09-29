"use client";

import React from "react";
import { MdCheckCircle } from "react-icons/md";
import type { CourseDescriptionProps } from "../../types/AllCourseDetail";

const CourseDescription: React.FC<CourseDescriptionProps> = ({
  fullDescription,
  keyPoints,
}) => {
  return (
    <div className="bg-white rounded-[16px] shadow-sm p-6">
      <div className="w-full flex flex-col gap-[20px] text-[#616161]">
        <p>{fullDescription}</p>
        <p>{fullDescription}</p>
      </div>

      <div className="mt-4">
        <h1 className="font-bold text-[#0B0C0B] text-xl sm:text-2xl">
          Ключевой момент
        </h1>
        <ul className="space-y-2 text-[#616161] items-center font-medium">
          {keyPoints.map((point, index) => (
            <li key={index} className="mt-[10px] font-normal sm:font-medium">
              <MdCheckCircle className="inline text-[#567D4A] text-2xl sm:text-[32px] mr-2" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseDescription;
