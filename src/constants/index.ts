import type { SidebarItem } from "../types";

export const sidebarItems: SidebarItem[] = [
  {
    id: "home",
    label: "Главная",
    path: "/",
    icon: "/src/assets/images/sidebar/home.svg",
    activeIcon: "/src/assets/images/sidebar/home-active.svg",
  },
  {
    id: "myCourse",
    label: "Мои курсы",
    path: "/my-course",
    icon: "/src/assets/images/sidebar/link-cloud-sucess.svg",
    activeIcon: "/src/assets/images/sidebar/link-cloud-active.svg",
  },
  {
    id: "allCourse",
    label: "Все курсы",
    path: "/all-course",
    icon: "/src/assets/images/sidebar/bookshelf.svg",
    activeIcon: "/src/assets/images/sidebar/bookshelf-active.svg",
  },
  {
    id: "mentors",
    label: "Менторы ",
    path: "/mentors",
    icon: "/src/assets/images/sidebar/degree-hat.svg",
    activeIcon: "/src/assets/images/sidebar/degree-hat-active.svg",
  },
  {
    id: "blogs",
    label: "Блоги",
    path: "/blogs",
    icon: "/src/assets/images/sidebar/newspaper-folding.svg",
    activeIcon: "/src/assets/images/sidebar/newspaper-active.svg",
  },
];

export const bottomSidebarItems: SidebarItem[] = [
  {
    id: "subscription",
    label: "Подписка и тарифы",
    path: "/subscription",
    icon: "/src/assets/images/sidebar/paper-money-two.svg",
    activeIcon: "/src/assets/images/sidebar/trafic-active.svg",
  },
  {
    id: "help",
    label: "Помощь",
    path: "/help",
    icon: "/src/assets/images/sidebar/help.svg",
    activeIcon: "/src/assets/images/sidebar/help-active.svg",
  },
];
