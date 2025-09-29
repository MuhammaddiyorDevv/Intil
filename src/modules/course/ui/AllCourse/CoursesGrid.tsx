import React from "react";
import type { CoursesGridProps } from "../../types/AllCourse";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Clock, GraduationCap, Star, Users } from "lucide-react";
import { courses } from "@/modules/statistics/constants/index";
import { Link } from "react-router-dom";

const CoursesGrid: React.FC<CoursesGridProps> = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4 mt-4 sm:mt-[19px]">
      {courses.map((course) => (
        <Link to={`/course/${course.id}`} key={course.id}>
          <Card className="border-[#E5E5E5] rounded-2xl! w-full p-0">
            <CardHeader className="p-0!">
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="rounded-t-2xl"
                />
                <div className="absolute bg-white top-[14px] left-[14px] flex items-center gap-[6px] p-[6px] rounded-[4px] cursor-pointer">
                  <p className="text-[10px] font-semibold">{course.level}</p>
                  <img
                    src={course.levelIcon}
                    alt={course.level}
                    className="w-3 h-3"
                  />
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-4!">
              <div className="flex flex-col sm:flex-row justify-between">
                <div className="flex justify-between items-center gap-1.5">
                  <p className="font-semibold">{course.title}</p>
                  <div className="flex items-center justify-between gap-1.5">
                    <Star className="text-[#D9A055] fill-[#D9A055] w-3 h-3" />
                    <p className="font-normal text-xs text-[#616161]">
                      {course.rating}
                    </p>
                  </div>
                </div>
                <p className="font-semibold text-[#006ADC] text-xs sm:text-sm md:text-base truncate max-w-[90px] sm:max-w-none">
                  {course.price}
                </p>
              </div>
              <p className="text-xs font-normal text-[#616161] mt-2.5 mb-4">
                {course.description}
              </p>
            </CardContent>

            <CardFooter className="flex-col gap-3 items-start">
              <div className="flex items-center gap-1.5 cursor-pointer">
                <img src={course.authorImg} alt={course.author} />
                <p className="text-xs font-medium">{course.author}</p>
              </div>

              <div className="text-[#616161] text-xs font-medium w-full flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <GraduationCap className="w-3 h-3" />
                  <p>{course.lessons} уроков</p>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  <p>{course.students} Участников</p>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <p>{course.duration}</p>
                </div>
              </div>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default CoursesGrid;
