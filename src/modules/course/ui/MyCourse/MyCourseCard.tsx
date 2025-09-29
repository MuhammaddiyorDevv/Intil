import React from "react";
import type { MyCourseCardProps } from "../../types/MyCourse";
import * as Progress from "@radix-ui/react-progress";

const MyCourseCard: React.FC<MyCourseCardProps> = ({ course }) => {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(85), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white rounded-2xl items-start flex hover:shadow-xl hover:cursor-pointer transition-shadow duration-300 overflow-hidden p-4 border border-[#E5E5E5]">
      <div className=" flex-shrink-0">
        <img
          src={course.image}
          alt="Course thumbnail"
          className="w-[120px] h-[120px] sm:w-[84px] sm:h-[84px] object-cover rounded-lg"
        />
      </div>

      <div className="flex-1 px-4 h-[84px] flex flex-col justify-between">
        <div>
          <h2 className="text-sm font-bold text-gray-900 mb-1 line-clamp-1">
            {course.title}
          </h2>
          <p className="text-gray-600 mb-1 line-clamp-2 sm:line-clamp-1 text-xs">
            {course.description}
          </p>
        </div>

        <div>
          <div className="flex items-center mb-1">
            <img
              src={course.instructor.avatar}
              alt="Instructor"
              className="w-4 h-4 rounded-full object-cover mr-1"
            />
            <div>
              <p className="font-medium text-[#616161] text-xs">
                {course.instructor.name}
              </p>
            </div>
          </div>

          <div>
            <div className="flex flex-col items-end mt-3 sm:mt-0 w-full">
              <p className="text-[10px] font-medium text-[#616161]">85%</p>
              <Progress.Root
                className="relative h-2 w-full overflow-hidden rounded-full bg-[#E5E5E5]"
                value={progress}
              >
                <Progress.Indicator
                  className="h-full bg-[#567D4A] transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${100 - progress}%)` }}
                />
              </Progress.Root>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCourseCard;
