import beginning from "@/assets/images/newCourse/beginning.jpg";
import user from "@/assets/images/newCourse/alisher.svg";
import beginImg from "@/assets/images/newCourse/Beginning.svg";
import intermediate from "@/assets/images/newCourse/Intermediate.svg";
import master from "@/assets/images/newCourse/Master.svg";
import avatar from "@/assets/images/mentors/Avatar.svg";
import girl from "@/assets/images/mentors/girl.svg";
import man from "@/assets/images/mentors/man.svg";
import team from "@/assets/images/yourCourse/team.png";
import teamMobile from "@/assets/images/yourCourse/teammobile.svg";
import comp from "@/assets/images/yourCourse/comp.png";
import left from "@/assets/images/yourCourse/left.png";
import lola from "@/assets/images/yourCourse/lola.svg";
import type { Course, Mentor, YourCourse } from "../types";
export const courses: Course[] = [
  {
    id: 1,
    title: "Figma Master Class",
    level: "Начинающий",
    levelIcon: beginImg,
    image: beginning,
    rating: 4.5,
    price: "1 200 000 UZS",
    description:
      "Мы подготовили свежие курсы, чтобы вы могли продолжить развивать свои навыки и достигать новых высот. Подберите курс, который соответствует вашим целям и интересами классными темами у нас",
    author: "Абдуллаев Алишер",
    authorImg: user,
    lessons: 23,
    students: 2949,
    duration: "5h 32m",
  },
  {
    id: 2,
    title: "Figma Master Class",
    level: "Средний уровень",
    levelIcon: intermediate,
    image: beginning,
    rating: 4.5,
    price: "1 200 000 UZS",
    description:
      "Мы подготовили свежие курсы, чтобы вы могли продолжить развивать свои навыки и достигать новых высот. Подберите курс, который соответствует вашим целям и интересами классными темами у нас",
    author: "Абдуллаев Алишер",
    authorImg: user,
    lessons: 23,
    students: 2949,
    duration: "5h 32m",
  },
  {
    id: 3,
    title: "Figma Master Class",
    level: "Мастер",
    levelIcon: master,
    image: beginning,
    rating: 4.5,
    price: "1 200 000 UZS",
    description:
      "Мы подготовили свежие курсы, чтобы вы могли продолжить развивать свои навыки и достигать новых высот. Подберите курс, который соответствует вашим целям и интересами классными темами у нас",
    author: "Абдуллаев Алишер",
    authorImg: user,
    lessons: 23,
    students: 2949,
    duration: "5h 32m",
  },
  {
    id: 4,
    title: "Figma Master Class",
    level: "Средний уровень",
    levelIcon: intermediate,
    image: beginning,
    rating: 4.5,
    price: "1 200 000 UZS",
    description:
      "Мы подготовили свежие курсы, чтобы вы могли продолжить развивать свои навыки и достигать новых высот. Подберите курс, который соответствует вашим целям и интересами классными темами у нас",
    author: "Абдуллаев Алишер",
    authorImg: user,
    lessons: 23,
    students: 2949,
    duration: "5h 32m",
  },
  {
    id: 5,
    title: "Figma Master Class",
    level: "Мастер",
    levelIcon: master,
    image: beginning,
    rating: 4.5,
    price: "1 200 000 UZS",
    description:
      "Мы подготовили свежие курсы, чтобы вы могли продолжить развивать свои навыки и достигать новых высот. Подберите курс, который соответствует вашим целям и интересами классными темами у нас",
    author: "Абдуллаев Алишер",
    authorImg: user,
    lessons: 23,
    students: 2949,
    duration: "5h 32m",
  },
  {
    id: 6,
    title: "Figma Master Class",
    level: "Начинающий",
    levelIcon: beginImg,
    image: beginning,
    rating: 4.5,
    price: "1 200 000 UZS",
    description:
      "Мы подготовили свежие курсы, чтобы вы могли продолжить развивать свои навыки и достигать новых высот. Подберите курс, который соответствует вашим целям и интересами классными темами у нас",
    author: "Абдуллаев Алишер",
    authorImg: user,
    lessons: 23,
    students: 2949,
    duration: "5h 32m",
  },
];

export const mentors: Mentor[] = [
  {
    id: 1,
    name: "Абдуллаев Алишер",
    role: "Senior UX Designer",
    image: avatar,
  },
  {
    id: 2,
    name: "Абдуллаев Алишер",
    role: "Senior UX Designer",
    image: girl,
  },
  {
    id: 3,
    name: "Абдуллаев Алишер",
    role: "Senior UX Designer",
    image: man,
  },
  {
    id: 4,
    name: "Абдуллаев Алишер",
    role: "Senior UX Designer",
    image: avatar,
  },
  {
    id: 5,
    name: "Абдуллаев Алишер",
    role: "Senior UX Designer",
    image: girl,
  },
];
export const yourCourse: YourCourse[] = [
  {
    id: 1,
    image: team,
    imageMobile: teamMobile,
    title: "Креативность в мире 3D-дизайна",
    role: "3D Master Class — это динамичный и захватывающий...",
    user: lola,
    name: "Lola Yuldasheva",
  },
  {
    id: 2,
    image: comp,
    imageMobile: teamMobile,
    title: "Креативность в мире 3D-дизайна",
    role: "3D Master Class — это динамичный и захватывающий...",
    user: lola,
    name: "Lola Yuldasheva",
  },
  {
    id: 3,
    image: left,
    imageMobile: teamMobile,
    title: "Креативность в мире 3D-дизайна",
    role: "3D Master Class — это динамичный и захватывающий...",
    user: lola,
    name: "Lola Yuldasheva",
  },
  {
    id: 4,
    image: comp,
    imageMobile: teamMobile,
    title: "Креативность в мире 3D-дизайна",
    role: "3D Master Class — это динамичный и захватывающий...",
    user: lola,
    name: "Lola Yuldasheva",
  },
  {
    id: 5,
    image: left,
    imageMobile: teamMobile,
    title: "Креативность в мире 3D-дизайна",
    role: "3D Master Class — это динамичный и захватывающий...",
    user: lola,
    name: "Lola Yuldasheva",
  },
];
