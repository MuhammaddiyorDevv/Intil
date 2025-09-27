"use client";

import { ChevronRight } from "lucide-react";
import { bottomSidebarItems, sidebarItems } from "@/constants/index";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/images/sidebar/Logo.svg";
import diamond from "@/assets/images/sidebar/Diamond.svg";
import avatar from "@/assets/images/sidebar/Avatar.svg";

export default function Sidebar() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <aside className="w-64 bg-white shadow-md flex flex-col px-3 h-screen">
      <div className="flex items-center py-[20px]">
        <img src={logo} alt="Logo" />
      </div>
      <hr className="text-[#E5E5E5]" />

      <nav className="flex-1 py-[20px] max-[1920px]:overflow-y-auto">
        <div>
          <ul className="space-y-2 pb-[20px]">
            {sidebarItems.map(({ id, label, path, icon: Icon }) => {
              const active =
                pathname === path ||
                (path === "/all-course" && pathname.startsWith("/course/"));
              return (
                <li key={id}>
                  <Link
                    to={path}
                    className={`flex items-center gap-3 p-3 rounded-lg transition ${
                      active
                        ? "bg-[#567D4A] text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <Icon size={20} />
                    <span>{label}</span>
                    <ChevronRight size={16} className="ml-auto" />
                  </Link>
                </li>
              );
            })}
          </ul>

          <hr className="border-[#E5E5E5]" />

          <ul className="space-y-2 py-[20px]">
            {bottomSidebarItems.map(({ id, label, path, icon: Icon }) => {
              const active = pathname === path;
              return (
                <li key={id}>
                  <Link
                    to={path}
                    className={`flex items-center gap-3 p-3 rounded-lg transition ${
                      active
                        ? "bg-[#567D4A] text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <Icon size={20} />
                    <span className="text-[15px]">{label}</span>
                    <ChevronRight size={16} className="ml-auto" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      <div className="rounded-lg flex flex-col gap-[20px]">
        <div className="bg-[#F6F6F6] flex flex-col items-center text-center py-[16px] px-[14px] rounded-t-lg">
          <img className="w-[64px] h-[56px]" src={diamond} alt="Pro" />
          <h3 className="mt-2 font-semibold">Получите Pro-версию</h3>
          <p className="text-[12px] text-[#616161] mt-1">
            Обновитесь до Pro и получите доступ ко всем курсам, бонусам и
            сертификатам!
          </p>
          <a
            href="#"
            className="mt-3 bg-[#567D4A] text-white px-[72.5px] py-[11px] rounded-[99px]"
          >
            Перейти
          </a>
        </div>

        <div className="flex py-[10px] px-[8px] gap-[12px]">
          <img src={avatar} alt="User Avatar" />
          <div>
            <h3 className="font-bold">Creative Bro</h3>
            <p className="text-[#616161]">Student</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
