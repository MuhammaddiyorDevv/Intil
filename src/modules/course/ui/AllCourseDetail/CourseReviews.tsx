"use client";

import React, { useState } from "react";
import { MdStar } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import type { CourseReviewsProps } from "../../types/AllCourseDetail";

const CourseReviews: React.FC<CourseReviewsProps> = ({
  reviews,
  averageRating = 4.5,
  totalReviews = 142,
}) => {
  const [visibleReviews, setVisibleReviews] = useState(3);

  return (
    <div className="bg-white rounded-[16px] shadow-sm p-4">
      <div className="flex items-center gap-3 mb-6">
        <h1 className="text-xl sm:text-2xl font-bold text-[#0B0C0B]">
          Отзывы ({totalReviews})
        </h1>
        <div className="items-center flex gap-2">
          <MdStar className="inline text-[#D9A055] text-[24px] mr-1" />
          <span className="font-medium text-[#616161] text-[16px]">
            {averageRating}
          </span>
        </div>
      </div>

      <div className="space-y-4">
        {reviews.slice(0, visibleReviews).map((review) => (
          <div
            key={review.id}
            className="border border-[#E5E5E5] rounded-[16px] p-4"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-8 h-8 sm:w-15 sm:h-15 rounded-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-[#0B0C0B] text-[14px] sm:text-[16px] font-medium text-base">
                      {review.name}
                    </h3>
                    <p className="text-[#616161] text-xs opacity-80">
                      {review.date}, {review.time}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 flex-shrink-0 ml-4">
                    {Array.from({ length: review.rating }, (_, i) => (
                      <FaStar
                        key={i}
                        className="text-[#D9A055] text-[16px] sm:text-[20px]"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-[#616161] text-sm leading-relaxed">
                  {review.comment}
                </p>
              </div>
            </div>
          </div>
        ))}

        {visibleReviews < reviews.length && (
          <div className="">
            <button
              onClick={() =>
                setVisibleReviews((prev) => Math.min(prev + 3, reviews.length))
              }
              className="px-6 py-2 text-[#567D4A] text-[14px] font-semibold cursor-pointer"
            >
              Показать больше <IoIosArrowDown className="inline-block ml-2" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseReviews;
