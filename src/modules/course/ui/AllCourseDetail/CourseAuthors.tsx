"use client";

import React from "react";
import type { CourseAuthor } from "../../types/AllCourseDetail";

interface CourseAuthorsProps {
  authors: CourseAuthor[];
  aboutText?: string;
}

const CourseAuthors: React.FC<CourseAuthorsProps> = ({
  authors,
  aboutText,
}) => {
  return (
    <div className="bg-white rounded-[16px] shadow-sm p-6 mb-8">
      <h1 className="text-[24px] font-bold text-[#0B0C0B] mb-6">Об авторах</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {authors.slice(0, 2).map((author) => (
          <div
            key={author.id}
            className="flex items-center gap-4 border border-[#E5E5E5] p-4 rounded-[12px] hover:bg-gray-50 transition-colors"
          >
            <img
              src={author.avatar}
              alt={author.name}
              className="w-20 h-20 rounded-full object-cover flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-[#0B0C0B] mb-2">
                {author.name}
              </h3>
              <p className="text-[#616161] mb-2">{author.role}</p>
            </div>
          </div>
        ))}
      </div>

      {aboutText && (
        <div className="mt-6">
          <p className="text-[#616161] leading-relaxed text-justify text-base">
            {aboutText}
          </p>
          <p className="text-[#616161] leading-relaxed text-justify text-base mt-4">
            Наши преподаватели имеют многолетний опыт работы в ведущих IT
            компаниях и готовы поделиться своими знаниями с вами. Каждый курс
            разработан с учетом современных требований рынка и практических
            навыков, необходимых для успешной карьеры.
          </p>
          <p className="text-[#616161] leading-relaxed text-justify text-base mt-4">
            Мы стремимся к тому, чтобы каждый студент получил не только
            теоретические знания, но и практические навыки, которые можно сразу
            применить в работе. Наши курсы включают в себя реальные проекты,
            кейсы из индустрии и персональную обратную связь от экспертов.
          </p>
        </div>
      )}
    </div>
  );
};

export default CourseAuthors;
