import React from "react";
import type { MyCourse } from "../../types/MyCourse";
import MyCourseCard from "./MyCourseCard";

interface MyCoursesGridProps {
  courses: MyCourse[];
}

const MyCoursesGrid: React.FC<MyCoursesGridProps> = ({ courses }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {courses.map((course) => (
        <MyCourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default MyCoursesGrid;
