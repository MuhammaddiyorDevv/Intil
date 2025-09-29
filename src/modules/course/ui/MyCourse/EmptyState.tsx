import React from "react";
import Cloud from "../../../../assets/images/sidebar/link-cloud-sucess.svg";
import type { EmptyStateProps } from "../../types/MyCourse";

const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="mb-6">
        {icon || (
          <div className="w-[56px] h-[56px] bg-[#F6F6F6] rounded-[8px] flex items-center justify-center">
            <img className="h-[32px] w-[32px]" src={Cloud} alt="" />
          </div>
        )}
      </div>
      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
        {title}
      </h3>
      <p className="text-[#313131] text-[14px] sm:text-[16px] text-center max-w-[300px]">
        {description}
      </p>
    </div>
  );
};

export default EmptyState;
