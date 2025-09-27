import React from "react";
import MasterIcon from "../../../../../assets/images/newCourse/Master.svg";

const Master: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-6 h-6">
      <img src={MasterIcon} alt="Master" className="w-[13px] h-[12px]" />
    </div>
  );
};

export default Master;
