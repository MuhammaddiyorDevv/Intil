"use client";

import React from "react";
import type { CourseAuthorsProps } from "../../types/AllCourseDetail";

const CourseAuthors: React.FC<CourseAuthorsProps> = ({
  authors,
  aboutText,
}) => {
  return (
    <div className="bg-white rounded-[16px] shadow-sm p-6">
      <h1 className="text-xl sm:text-[24px] font-bold text-[#0B0C0B] mb-6">
        Об авторах
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {authors.slice(0, 2).map((author) => (
          <div
            key={author.id}
            className="flex items-center gap-2.5 border border-[#E5E5E5] p-4 rounded-[12px] hover:bg-gray-50 transition-colors"
          >
            <img
              src={author.avatar}
              alt={author.name}
              className="w-[42px] h-[42px] rounded-full object-cover flex-shrink-0"
            />
            <div className="flex flex-col">
              <b className="font-bold sm:font-semibold text-[#0B0C0B] mb-2">
                {author.name}
              </b>
              <p className="text-[#616161] text-[14px] mb-2">{author.role}</p>
            </div>
          </div>
        ))}
      </div>

      {aboutText && (
        <div className="mt-6">
          {/* <p className="text-[#616161] leading-relaxed text-justify text-base">
              {aboutText}
            </p> */}
          <p className="text-[#616161]">
            Наши преподаватели имеют многолетний опыт работы в ведущих IT
            компаниях и готовы поделиться своими знаниями с вами. Каждый курс
            разработан с учетом современных требований рынка и практических
            навыков, необходимых для успешной карьеры.
          </p>
        </div>
      )}
    </div>
  );
};

export default CourseAuthors;
