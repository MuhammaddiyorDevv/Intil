"use client";

import React, { useState } from "react";
import { MdPeople, MdSchool, MdAccessTime, MdPlayArrow } from "react-icons/md";
import { FiSmartphone, FiHeadphones } from "react-icons/fi";
import Modal from "../../../../components/ui/modal";
import type { CourseSidebarProps } from "../../types/AllCourseDetail";

const CourseSidebar: React.FC<CourseSidebarProps> = ({
  price,
  offerEndTime,
  participants,
  lessons,
  duration,
  onBuyNow,
  onAddToCart,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBuyNow = () => {
    setIsModalOpen(true);
    if (onBuyNow) {
      onBuyNow();
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const sidebarSections = [
    { id: "about", title: "О курсе", href: "#about" },
    { id: "key-points", title: "Ключевой момент", href: "#key-points" },
    { id: "reviews", title: "Отзывы", href: "#reviews" },
    { id: "authors", title: "Об авторах", href: "#authors" },
  ];

  return (
    <div className="lg:col-span-1 flex flex-col gap-3 sm:gap-4">
      <div className="bg-white rounded-2xl shadow-sm p-6 hidden sm:flex">
        <ul className="flex flex-col gap-[10px] w-full">
          {sidebarSections.map((section) => (
            <li key={section.id} className="flex items-start gap-3">
              <a
                href={section.href}
                className="text-sm text-gray-600 pt-[11px] pl-[12px] pb-[9px] hover:bg-[#F6F6F6] active:bg-[#F6F6F6] transition-colors w-full cursor-pointer rounded-lg"
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="sticky top-8">
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6 flex flex-row sm:flex-col items-center justify-between">
          <div className="text-start mb-6 ">
            <div className="text-[16px] sm:text-[32px] font-bold text-[#0B0C0B] mb-2">
              {price}
            </div>
            {offerEndTime && (
              <div className="text-xs font-medium text-[#D9A055] flex items-center">
                <p className="hidden sm:flex">Предложение действует до</p>{" "}
                <span></span>
                {offerEndTime}
              </div>
            )}
          </div>

          <button
            onClick={handleBuyNow}
            className="sm:w-full py-3.5 px-8 btn text-[14px] font-semibold hover:text-[#567D4A] hover:bg-white border-[1px] transition-colors mb-4"
          >
            Купить сейчас
          </button>
          <button
            onClick={onAddToCart}
            className="w-full bg-white hidden sm:flex text-[#0B0C0B] py-3 px-6 rounded-[99px] font-semibold hover:text-[#567D4A] hover:bg-white border-[1px] border-[#E5E5E5] transition-colors mb-4"
          >
            Добавьте в корзину
          </button>

          <hr className="pt-5 text-[#E5E5E5] hidden sm:flex" />

          <div className="flex-col gap-4 hidden sm:flex">
            <div className="flex items-center gap-[10px]">
              <div className="flex items-center gap-2">
                <MdPeople className="text-[#567D4A]" />
              </div>
              <span className="text-sm font-medium text-gray-800">
                {participants.toLocaleString()} учащихся
              </span>
            </div>

            <div className="flex items-center gap-[10px]">
              <div className="flex items-center gap-2">
                <MdSchool className="text-[#567D4A]" />
              </div>
              <span className="text-sm font-medium text-gray-800">
                {lessons} урока
              </span>
            </div>

            <div className="flex items-center gap-[10px]">
              <div className="flex items-center gap-2">
                <MdAccessTime className="text-[#567D4A]" />
              </div>
              <span className="text-sm font-medium text-gray-800">
                {duration}
              </span>
            </div>

            <div className="flex items-center gap-[10px]">
              <div className="flex items-center gap-2">
                <FiSmartphone className="text-[#567D4A]" />
              </div>
              <span className="text-sm font-medium text-gray-800">
                Доступно с мобильных и десктоп
              </span>
            </div>

            <div className="flex items-center gap-[10px]">
              <div className="flex items-center gap-2">
                <MdPlayArrow className="text-[#567D4A]" />
              </div>
              <span className="text-sm font-medium text-gray-800">
                Пожизненный доступ
              </span>
            </div>

            <div className="flex items-center gap-[10px]">
              <div className="flex items-center gap-2">
                <FiHeadphones className="text-[#567D4A]" />
              </div>
              <span className="text-sm font-medium text-gray-800">
                Звуковое описание в существующем аудио
              </span>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Выбрать план"
      ></Modal>
    </div>
  );
};

export default CourseSidebar;
