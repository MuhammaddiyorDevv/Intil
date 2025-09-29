"use client";

import React from "react";
import type { AllCoursesPageCourse } from "../../types/AllCourse";
import CourseCard from "./CoursesCard";
import Search from "../../../../assets/images/allCourse/search.svg";

interface CoursesGridProps {
  courses: AllCoursesPageCourse[];
}

const CoursesGrid: React.FC<CoursesGridProps> = ({ courses }) => {
  if (courses.length === 0) {
    return (
      <div className="mt-6 flex flex-col items-center justify-center py-40 text-center min-h-[400px]">
        <div className="mb-3 bg-[#F6F6F6] p-3 rounded-[8px]">
          <img src={Search} alt="" />
        </div>
        <h3 className="text-[24px] font-bold text-[#0B0C0B] mb-2">
          Курсы не найдены
        </h3>
        <p className="text-[#313131] text-[16px] max-w-md mx-auto leading-relaxed">
          К сожалению, курс по вашему запросу не найден. Попробуйте изменить
          параметры поиска или ознакомиться с другими курсами.
        </p>
      </div>
    );
  }

  return (
    <div className="gap-4 lg:gap-6 mt-6 grid grid-cols-1 sm:grid-cols-2">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CoursesGrid;
