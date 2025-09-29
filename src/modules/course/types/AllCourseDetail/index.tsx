import type { AllCoursesPageCourse } from "../AllCourse";

export interface CourseDetail extends AllCoursesPageCourse {
  fullDescription: string;
  keyPoints: string[];
  videoUrl?: string;
  courseLessons: Array<{
    id: number;
    title: string;
    duration: string;
    videoUrl?: string;
  }>;
  authors: Array<{
    id: number;
    name: string;
    avatar: string;
    role: string;
    bio?: string;
  }>;
  reviews: Review[];
  offerEndTime?: string;
}

export interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  time: string;
  comment: string;
}

export interface CourseLesson {
  id: number;
  title: string;
  duration: string;
  videoUrl?: string;
  isCompleted?: boolean;
}

export interface CourseAuthor {
  id: number;
  name: string;
  avatar: string;
  role: string;
  bio?: string;
}

export interface CourseSidebarSection {
  id: string;
  title: string;
  href: string;
}
export interface CourseAuthorsProps {
  authors: CourseAuthor[];
  aboutText?: string;
}
export interface CourseContentProps {
  lessons: Array<{
    id: number;
    title: string;
    duration: string;
    videoUrl?: string;
  }>;
  onLessonClick?: (lessonId: number) => void;
}
export interface CourseDescriptionProps {
  fullDescription: string;
  keyPoints: string[];
}
export interface CourseDetailHeaderProps {
  title: string;
  badge?: string;
}
export interface CourseReviewsProps {
  reviews: Review[];
  averageRating?: number;
  totalReviews?: number;
}
export interface CourseSidebarProps {
  price: string;
  offerEndTime?: string;
  participants: number;
  lessons: number;
  duration: string;
  onBuyNow?: () => void;
  onAddToCart?: () => void;
}
export interface CourseVideoSectionProps {
  image: string;
  title: string;
  videoUrl?: string;
}
