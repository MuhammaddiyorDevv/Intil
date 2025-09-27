import React from "react";
import IntermediateIcon from "../../../../../assets/images/newCourse/Intermediate.svg";

const Intermediate: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-6 h-6">
      <img src={IntermediateIcon} alt="Intermediate" className="w-[13px] h-[12px]" />
    </div>
  );
};

export default Intermediate;
