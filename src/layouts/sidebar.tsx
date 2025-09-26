import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import { sidebarItems, bottomSidebarItems } from "../constants";
import Logo from "../assets/images/sidebar/Logo.svg";
import Diamond from "../assets/images/sidebar/Diamond.svg";
import Avatar from "../assets/images/sidebar/Avatar.svg";

const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <div className="w-[246px] lg:w-[246px] md:w-[220px] sm:w-[200px] px-3 bg-white shadow-lg h-screen flex flex-col">
      <div className="py-4 lg:py-5">
        <img className="cursor-pointer w-auto h-6 lg:h-8" src={Logo} alt="" />
      </div>
      <hr className="border-[#E5E5E5]"></hr>

      <nav className="mt-5 flex flex-col flex-1">
        <ul className="space-y-2">
          {sidebarItems.map((item) => {
            const isActive = location.pathname === item.path;
            const iconSrc = isActive ? item.activeIcon : item.icon;

            return (
              <li key={item.id}>
                <Link
                  to={item.path}
                  className={`flex items-center justify-between p-2 lg:p-3 text-xs lg:text-sm font-medium rounded-[12px] transition-colors ${
                    isActive
                      ? "bg-[#567D4A] text-white"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <div className="flex items-center min-w-0">
                    {iconSrc && (
                      <img
                        src={iconSrc}
                        alt={item.label}
                        className="w-4 h-4 lg:w-5 lg:h-5 mr-2 lg:mr-3 flex-shrink-0"
                      />
                    )}
                    <span className="truncate text-xs lg:text-sm">
                      {item.label}
                    </span>
                  </div>
                  <FiChevronRight
                    className={`w-3 h-3 lg:w-4 lg:h-4 transition-colors flex-shrink-0 ${
                      isActive ? "text-white" : "text-gray-400"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="my-5">
          <hr className="border-[#E5E5E5]" />
        </div>

        <ul className="space-y-2">
          {bottomSidebarItems.map((item) => {
            const isActive = location.pathname === item.path;
            const iconSrc = isActive ? item.activeIcon : item.icon;

            return (
              <li key={item.id}>
                <Link
                  to={item.path}
                  className={`flex items-center justify-between px-4 py-3 text-sm font-medium rounded-[12px] transition-colors ${
                    isActive
                      ? "bg-[#567D4A] text-white"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <div className="flex items-center min-w-0">
                    {iconSrc && (
                      <img
                        src={iconSrc}
                        alt={item.label}
                        className="w-4 h-4 lg:w-5 lg:h-5 mr-2 lg:mr-3 flex-shrink-0"
                      />
                    )}
                    <span className="truncate text-xs lg:text-sm">
                      {item.label}
                    </span>
                  </div>
                  <FiChevronRight
                    className={`w-3 h-3 lg:w-4 lg:h-4 transition-colors flex-shrink-0 ${
                      isActive ? "text-white" : "text-gray-400"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="rounded-lg flex flex-col gap-4 lg:gap-5">
        <div className="bg-[#F6F6F6] flex flex-col items-center text-center py-3 lg:py-4 px-2 lg:px-3 rounded-[12px] lg:rounded-[16px]">
          <img className="w-12 h-10 lg:w-16 lg:h-14" src={Diamond} alt="" />
          <h3 className="mt-2 text-xs lg:text-sm font-semibold">
            Получите Pro-версию
          </h3>
          <p className="text-[10px] lg:text-[11px] text-[#616161] mt-1 leading-tight">
            Обновитесь до Pro и получите доступ ко всем курсам, бонусам
          </p>
          <p className="text-[10px] lg:text-[11px] text-[#616161] mt-1">
            и сертификатам!
          </p>
          <button className="mt-2 lg:mt-3 text-[10px] lg:text-xs px-4 lg:px-6 py-1.5 lg:py-2.5 btn">
            Перейти
          </button>
        </div>

        <div className="flex py-2 lg:py-2.5 px-2 lg:px-2 gap-2 lg:gap-3">
          <img
            src={Avatar}
            alt=""
            className="w-8 h-8 lg:w-10 lg:h-10 flex-shrink-0"
          />
          <div className="min-w-0">
            <h3 className="font-bold text-xs lg:text-sm truncate">
              Creative Bro
            </h3>
            <p className="text-[#616161] text-[10px] lg:text-xs">Student</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
