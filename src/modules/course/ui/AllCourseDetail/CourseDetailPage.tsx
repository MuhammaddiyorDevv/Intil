"use client";

import React from "react";
import { useParams } from "react-router-dom";
import CourseDetailHeader from "./CourseDetailHeader";
import CourseVideoSection from "./CourseVideoSection";
import CourseDescription from "./CourseDescription";
import CourseContent from "./CourseContent";
import CourseReviews from "./CourseReviews";
import CourseAuthors from "./CourseAuthors";
import CourseSidebar from "./CourseSidebar";
import type { CourseDetail } from "../../types/AllCourseDetail";

// Mock data - in real app this would come from API
const mockCourseData: CourseDetail = {
  id: 1,
  title: "Figma Master Class",
  description: "Learn Figma from scratch to advanced level",
  fullDescription:
    "Наряду с этим, искусство медиапланирования непосредственно специфицирует тактический комплексный анализ ситуации. Один из признанных классиков маркетинга Ф.Котлер определяет это так: повторный контакт специфицирует инструмент маркетинга. Отраслевой стандарт, анализируя результаты рекламной кампании, недостаточно тормозит нишевый проект, признавая определенные. Инвестиционный продукт поддерживает анализ зарубежного опыта. Примерная структура маркетингового исследования осмысленно ускоряет социометрический стиль менеджмента. Сегментация рынка спонтанно допускает экспериментальный product placement. В соответствии с законом Ципфа, точечное воздействие многопланово позиционирует рыночный маркетинг. Согласно последним исследованиям, маркетингово-ориентированное издание как всегда непредсказуемо.",
  keyPoints: [
    "Изучение основ Figma и интерфейса",
    "Создание компонентов и стилей",
    "Работа с прототипированием",
    "Коллаборация в команде",
    "Экспорт и передача дизайна разработчикам",
  ],
  price: "1 200 000 UZS",
  rating: 4.5,
  participants: 2949,
  lessons: 23,
  duration: "5h 32m",
  image: "/src/assets/images/newCourse/beginning.jpg",
  videoUrl: "https://www.youtube.com/embed/ODpB9-MCa5s?si=Yyjb4GQQGZYXyIjl",
  instructor: {
    name: "Абдуллаев Алишер",
    avatar: "/src/assets/images/mentors/Avatar.svg",
  },
  level: "Intermediate",
  uroven: {
    Beginning: () => null,
    Intermediate: () => null,
    Master: () => null,
  },
  courseLessons: [
    {
      id: 1,
      title: "Введение в Figma",
      duration: "11 минут",
      videoUrl: "https://www.youtube.com/embed/ODpB9-MCa5s?si=Yyjb4GQQGZYXyIjl",
    },
    {
      id: 2,
      title: "Основы интерфейса",
      duration: "15 минут",
      videoUrl: "https://www.youtube.com/embed/ODpB9-MCa5s?si=Yyjb4GQQGZYXyIjl",
    },
    {
      id: 3,
      title: "Создание компонентов",
      duration: "20 минут",
      videoUrl: "https://www.youtube.com/embed/ODpB9-MCa5s?si=Yyjb4GQQGZYXyIjl",
    },
  ],
  authors: [
    {
      id: 1,
      name: "Абдуллаев Алишер",
      role: "UI/UX Designer",
      avatar: "/src/assets/images/mentors/Avatar.svg",
      bio: "Опытный дизайнер с 5+ летним стажем работы в крупных IT компаниях",
    },
    {
      id: 2,
      name: "Иванова Мария",
      role: "Senior UX Researcher",
      avatar: "/src/assets/images/mentors/Avatar.svg",
      bio: "Эксперт по пользовательскому опыту с 7+ летним опытом в исследовании UX",
    },
  ],
  reviews: [
    {
      id: 1,
      name: "Анна Петрова",
      avatar: "/src/assets/images/mentors/Avatar.svg",
      rating: 5,
      comment:
        "Принцип восприятия, конечно, раскручивает ролевой формат события. Эволюция мерчандайзинга, вопреки мнению П.Друкера, однообразно синхронизирует тактический рейтинг, невзирая на действия конкурентов.",
      date: "Сегодня",
      time: "14:30",
    },
    {
      id: 2,
      name: "Иван Сидоров",
      avatar: "/src/assets/images/mentors/Avatar.svg",
      rating: 4,
      comment:
        "Имидж программирует показ баннера, опираясь на опыт западных коллег. Не факт, что VIP-мероприятие многопланово искажает культурный ребрендинг. Медиабизнес усиливает ролевой медиабизнес. Анализ рыночных цен отражает традиционный канал.",
      date: "Сегодня",
      time: "09:15",
    },
    {
      id: 3,
      name: "Мария Козлова",
      avatar: "/src/assets/images/mentors/Avatar.svg",
      rating: 5,
      comment:
        "Размещение, не меняя концепции, изложенной выше, допускает анализ зарубежного опыта, не считаясь с затратами. Воздействие на потребителя стабилизирует повторный контакт, учитывая результат предыдущих медиа-кампаний. Несмотря на сложности, эластичность спроса ",
      date: "Сегодня",
      time: "16:45",
    },
  ],
  offerEndTime: "Предложение действует до 31.12.2023",
};

const CourseDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // In real app, fetch course data by ID
  const course = mockCourseData;
  
  // Log the course ID for debugging (remove in production)
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
    <div className="">
      <div className="px-4 sm:px-6 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
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
