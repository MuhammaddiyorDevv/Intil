import React from "react";
import { useParams } from "react-router-dom";
import { mockCourseData } from "../../constants/allCourses";
import CourseDetailHeader from "./CourseDetailHeader";
import CourseVideoSection from "./CourseVideoSection";
import CourseDescription from "./CourseDescription";
import CourseContent from "./CourseContent";
import CourseReviews from "./CourseReviews";
import CourseAuthors from "./CourseAuthors";
import CourseSidebar from "./CourseSidebar";

const CourseDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const course = mockCourseData;

  console.log("Course ID:", id);

  const handleBuyNow = () => {
    console.log("Buy now clicked");
  };

  const handleAddToCart = () => {
    console.log("Add to cart clicked");
  };

  const handleLessonClick = (lessonId: number) => {
    console.log("Lesson clicked:", lessonId);
  };

  const lessons = Array.from({ length: course.lessons }, (_, i) => ({
    id: i + 1,
    title: `Введение в Figma`,
    duration: "11 минут",
    videoUrl: course.videoUrl,
  }));

  return (
    <div>
      <div className="px-0 sm:px-6 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 sm:gap-4">
          <div className="lg:col-span-3 space-y-8">
            <div className="bg-white px-5 sm:px-6 lg:px-8 py-6 rounded-[16px] shadow-sm">
              <CourseDetailHeader title={course.title} badge="TOP RATED" />

              <CourseVideoSection
                image={course.image}
                title={course.title}
                videoUrl={course.videoUrl}
              />
            </div>

            <div id="about">
              <CourseDescription
                fullDescription={course.fullDescription}
                keyPoints={course.keyPoints}
              />
            </div>

            <CourseContent
              lessons={lessons}
              onLessonClick={handleLessonClick}
            />

            <div id="reviews">
              <CourseReviews
                reviews={course.reviews}
                averageRating={course.rating}
                totalReviews={course.reviews.length}
              />
            </div>

            <div id="authors">
              <CourseAuthors
                authors={course.authors}
                aboutText="Наши преподаватели - это опытные профессионалы с многолетним стажем работы в индустрии."
              />
            </div>
          </div>

          <div className="lg:col-span-1">
            <CourseSidebar
              price={course.price}
              offerEndTime={course.offerEndTime}
              participants={course.participants}
              lessons={course.lessons}
              duration={course.duration}
              onBuyNow={handleBuyNow}
              onAddToCart={handleAddToCart}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;
