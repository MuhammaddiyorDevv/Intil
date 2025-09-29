import React from "react";
import type { MyCoursesGridProps } from "../../types/MyCourse";
import MyCourseCard from "./MyCourseCard";
import EmptyState from "./EmptyState";

const MyCoursesGrid: React.FC<MyCoursesGridProps> = ({
  courses,
  isArchive = false,
}) => {
  if (courses.length === 0) {
    return (
      <div className="flex items-center justify-center py-20 ">
        <EmptyState
          title={isArchive ? "Пока пусто" : "Курсы не найдены"}
          description={
            isArchive
              ? "Когда вы начнёте обучение, все ваши курсы появятся здесь."
              : "У вас пока нет активных курсов. Выберите курс из каталога, чтобы начать обучение."
          }
        />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {courses.map((course) => (
        <MyCourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default MyCoursesGrid;
