"use client";

import React from "react";
import type { AllCoursesPageCourse } from "../../types/AllCourse";
import CourseCard from "./CoursesCard";

interface CoursesGridProps {
  courses: AllCoursesPageCourse[];
}

const CoursesGrid: React.FC<CoursesGridProps> = ({ courses }) => {
  return (
    <div className="gap-4 lg:gap-6 mt-6 grid grid-cols-1 sm:grid-cols-2">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CoursesGrid;
