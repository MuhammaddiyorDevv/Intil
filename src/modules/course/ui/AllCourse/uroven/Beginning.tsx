import React from "react";
import BeginningIcon from "../../../../../assets/images/newCourse/Beginning.svg";

const Beginning: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-6 h-6">
      <img src={BeginningIcon} alt="Beginning" className="w-[13px] h-[12px]" />
    </div>
  );
};

export default Beginning;
