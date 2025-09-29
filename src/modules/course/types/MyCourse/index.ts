export interface MyCourse {
  id: number;
  title: string;
  description: string;
  instructor: {
    name: string;
    avatar: string;
  };
  progress: number;
  image: string;
  gradient: string;
}

export interface TabOption {
  id: string;
  label: string;
  isActive: boolean;
}

export interface TabNavigationProps {
  tabs: TabOption[];
  onTabChange: (tabId: string) => void;
}
export interface PageHeaderProps {
  title: string;
  tabs: TabNavigationProps["tabs"];
  onTabChange: (tabId: string) => void;
}
export interface MyCoursesGridProps {
  courses: MyCourse[];
  isArchive?: boolean;
}
export interface MyCourseCardProps {
  course: MyCourse;
}
export interface EmptyStateProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}
