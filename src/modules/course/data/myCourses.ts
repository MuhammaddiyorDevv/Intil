import type { MyCourse } from "../types/MyCourse";
import Avatar from "../../../assets/images/myCourse/Lola.svg";
import Teacher from "../../../assets/images/myCourse/mycourses.svg";

export const myCoursesData: MyCourse[] = [
  {
    id: 1,
    title: "Креативность в мире 3D-дизайна",
    description:
      "3D Master Class — это динамичный и захватывающий курс, который поможет вам освоить основы 3D-моделирования и дизайна.",
    instructor: {
      name: "Lola Yuldasheva",
      avatar: Avatar,
    },
    progress: 85,
    image: Teacher,
    gradient: "from-blue-500 to-purple-600",
  },
  {
    id: 2,
    title: "Веб-разработка с нуля",
    description:
      "Изучите современные технологии веб-разработки: HTML, CSS, JavaScript и React.",
    instructor: {
      name: "Ахмед Каримов",
      avatar: Avatar,
    },
    progress: 60,
    image: Teacher,
    gradient: "from-green-500 to-teal-600",
  },
  {
    id: 3,
    title: "Мобильная разработка",
    description:
      "Создавайте мобильные приложения для iOS и Android с помощью React Native.",
    instructor: {
      name: "Сара Алиева",
      avatar: Avatar,
    },
    progress: 30,
    image: Teacher,
    gradient: "from-orange-500 to-red-600",
  },
  {
    id: 4,
    title: "UI/UX Дизайн",
    description:
      "Изучите принципы дизайна пользовательского интерфейса и создавайте красивые приложения.",
    instructor: {
      name: "Диана Нурманова",
      avatar: Avatar,
    },
    progress: 95,
    image: Teacher,
    gradient: "from-purple-500 to-pink-600",
  },
];

export const archiveCoursesData: MyCourse[] = [
  {
    id: 5,
    title: "Python для начинающих",
    description:
      "Изучите основы программирования на Python с нуля до создания первых проектов.",
    instructor: {
      name: "Алексей Петров",
      avatar: Avatar,
    },
    progress: 100,
    image: Teacher,
    gradient: "from-yellow-500 to-orange-600",
  },
  {
    id: 6,
    title: "Основы дизайна",
    description:
      "Изучите принципы дизайна, цветовую теорию и создание визуальных концепций.",
    instructor: {
      name: "Мария Иванова",
      avatar: Avatar,
    },
    progress: 100,
    image: Teacher,
    gradient: "from-pink-500 to-rose-600",
  },
];
