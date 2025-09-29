"use client";

import React, { useState } from "react";
import { MdPlayArrow } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import type { CourseContentProps } from "../../types/AllCourseDetail";

const CourseContent: React.FC<CourseContentProps> = ({
  lessons,
  onLessonClick,
}) => {
  const [visibleLessons, setVisibleLessons] = useState(7);

  return (
    <div className="bg-white rounded-[16px] shadow-sm p-6">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
        Содержание курса
      </h2>
      <div className="space-y-4 border-[1px] border-[#E5E5E5] rounded-[12px] py-4 px-5">
        {Array.from(
          { length: Math.min(visibleLessons, lessons.length) },
          (_, i) => {
            const lesson = lessons[i];
            return (
              <div
                key={lesson.id}
                className="flex items-center gap-4 p-4 border-b border-[#E5E5E5] rounded-[12px] hover:bg-gray-50 transition-colors"
              >
                <div className="flex-1">
                  <h3 className="font-bold text-[14px] sm:text-[16px] text-gray-800">
                    {i + 1}. {lesson.title}
                  </h3>
                  <p className="text-xs sm:text-[16px] text-gray-600">
                    {lesson.duration}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <button
                    onClick={() => onLessonClick?.(lesson.id)}
                    className="hover:opacity-70 transition-opacity"
                  >
                    <MdPlayArrow className="text-[#567D4A] text-[24px] sm:text-[32px]" />
                  </button>
                </div>
              </div>
            );
          }
        )}

        {visibleLessons < lessons.length && (
          <div className="flex justify-center pt-4">
            <button
              onClick={() =>
                setVisibleLessons((prev) => Math.min(prev + 7, lessons.length))
              }
              className="px-6 py-2 text-[#567D4A] cursor-pointer text-[14px] font-semibold"
            >
              Показать больше <IoIosArrowDown className="inline-block ml-2" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseContent;
