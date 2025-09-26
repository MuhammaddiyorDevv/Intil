import React from "react";
import NewCourse from "./NewCourse";
import Mentors from "./Mentors";

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col gap-5">
      <Mentors />
      <NewCourse />
    </div>
  );
};

export default HomePage;
