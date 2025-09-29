
export interface AllCoursesPageCourse {
  id: number;
  title: string;
  description: string;
  rating: number;
  price: string;
  instructor: {
    name: string;
    avatar: string;
  };
  lessons: number;
  participants: number;
  duration: string;
  image: string;
  levelImg: string;
  level: "Beginning" | "Intermediate" | "Master";
}

export interface FilterOptions {
  priceRange: {
    min: number;
    max: number;
  };
  specialization: string[];
  level: string[];
  language: string[];
  mentorStatus: string[];
  isPremium: boolean;
}

export interface AccordionState {
  expandedAccordions: number[];
  toggleAccordion: (index: number) => void;
}
export interface CourseCardProps {
  course: AllCoursesPageCourse;
}

export interface CoursesGridProps {
  courses: AllCoursesPageCourse[];
}
