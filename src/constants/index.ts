import type { SidebarItem, SidebarMobile } from "../types";
import {
  Home,
  CloudCheck,
  Package,
  GraduationCap,
  Settings,
} from "lucide-react";

export const sidebarItems: SidebarItem[] = [
  {
    id: 1,
    label: "Главная",
    path: "/",
    icon: Home,
    activeIcon: "/src/assets/images/sidebar/home-active.svg",
  },
  {
    id: 2,
    label: "Мои курсы",
    path: "/my-course",
    icon: CloudCheck,
    activeIcon: "/src/assets/images/sidebar/link-cloud-active.svg",
  },
  {
    id: 3,
    label: "Все курсы",
    path: "/all-course",
    icon: Package,
    activeIcon: "/src/assets/images/sidebar/bookshelf-active.svg",
  },
  {
    id: 4,
    label: "Менторы ",
    path: "/mentors",
    icon: GraduationCap,
    activeIcon: "/src/assets/images/sidebar/degree-hat-active.svg",
  },
  {
    id: 5,
    label: "Блоги",
    path: "/blogs",
    icon: Settings,
    activeIcon: "/src/assets/images/sidebar/newspaper-active.svg",
  },
];

export const bottomSidebarItems: SidebarItem[] = [
  {
    id: 6,
    label: "Подписка и тарифы",
    path: "/subscription",
    icon: Package,
    activeIcon: "/src/assets/images/sidebar/trafic-active.svg",
  },
  {
    id: 7,
    label: "Помощь",
    path: "/help",

    icon: Settings,
    activeIcon: "/src/assets/images/sidebar/help-active.svg",
  },
];
export const sidebarMobile: SidebarMobile[] = [
  { id: 1, icon: Home, name: "Главная", href: "/" },
  { id: 2, icon: CloudCheck, name: "Мои курсы", href: "/my-course" },
  { id: 3, icon: Package, name: "Все курсы", href: "/all-course" },
  { id: 4, icon: GraduationCap, name: "Блоги", href: "/blogs" },
  { id: 5, icon: Settings, name: "Меню", href: "/help" },
];
