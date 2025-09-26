export interface Course {
  id: number;
  title: string;
  level: string;
  levelIcon: string;
  image: string;
  rating: number;
  price: string;
  description: string;
  author: string;
  authorImg: string;
  lessons: number;
  students: number;
  duration: string;
}

export interface Mentor {
  id: number;
  name: string;
  role: string;
  image: string;
}
