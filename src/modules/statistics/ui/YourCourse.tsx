import { ChevronLeft, ChevronRight } from "lucide-react";
import { yourCourse } from "../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import React, { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";
import { Progress } from "@/components/ui/progress";

const YourCourse = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(85), 500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="bg-white p-5 rounded-[20px]">
      <div className="w-full flex items-center justify-between">
        <div>
          <p className="font-bold text-xl sm:text-2xl">Ваши курсы</p>
          <p className="font-normal line-clamp-2 text-[14px] sm:text-[16px] text-[#616161]">
            Продолжайте обучение в удобное время вместе с нами
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
          delay: 2000,
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
        {yourCourse.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="border rounded-2xl border-[#E5E5E5] p-4 flex items-center justify-between gap-[61px]">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <picture>
                  <source
                    srcSet={item.imageMobile}
                    media="(max-width: 768px)"
                    className="cursor-pointer"
                  />

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto cursor-pointer"
                  />
                </picture>

                <div className="w-full">
                  <p className="font-semibold text-[14px]">{item.title}</p>
                  <p className=" text-[#616161] font-normal text-xs sm:text-[10px] sm:line-clamp-1">
                    {item.role}
                  </p>
                  <div className="flex items-center gap-1 mt-1.5">
                    <img src={item.user} alt="" />
                    <p className="font-normal text-[12px] sm:text-[10px]">
                      {item.name}
                    </p>
                  </div>
                  <div className="flex flex-col items-end mt-3 sm:mt-0 w-full">
                    <p className="text-[10px] font-medium text-[#616161]">
                      85%
                    </p>
                    <Progress
                      value={progress}
                      className=" bg-[#E5E5E5] [&>div]:bg-[#567D4A]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default YourCourse;
