"use client";

import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { mentors } from "../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";

const Mentors = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="bg-white p-5 rounded-[20px]">
      <div className="w-full flex items-center justify-between">
        <div>
          <p className="font-bold text-xl sm:text-2xl flex">
            Ваши наставники
            <span className="hidden sm:flex">- эксперты в деле</span>
          </p>
          <p className="font-normal line-clamp-2 text-[14px] sm:text-[16px] text-[#616161]">
            Практики, которые помогут вам разобраться в сложных темах, поделятся
            ценными инсайтами
          </p>
        </div>
        <div className="hidden sm:flex gap-2">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="opacity-50 active:opacity-100 transition duration-300 ease-in-out cursor-pointer"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="opacity-50 active:opacity-100 transition duration-300 ease-in-out cursor-pointer"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      <Swiper
        spaceBetween={16}
        slidesPerView={1.5}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Autoplay]}
        className="mt-4"
      >
        {mentors.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="border rounded-2xl border-[#E5E5E5] p-4 flex items-center justify-between gap-[61px]">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <img
                  src={item.image}
                  alt={item.role}
                  className="cursor-pointer"
                />
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-[#616161]">{item.role}</p>
                </div>
                <button className="flex sm:hidden! btn py-[11px] px-[52px]">
                  Continue
                </button>
              </div>
              <Play className="hidden sm:flex fill-[#567D4A] text-[#567D4A] cursor-pointer" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Mentors;
