import type { ElementType } from "react";

export interface SidebarItem {
  id: number;
  label: string;
  path: string;
  icon: ElementType;
  activeIcon?: string;
}
export interface SidebarMobile {
  id: number;
  icon: ElementType;
  name: string;
  href: string;
}
