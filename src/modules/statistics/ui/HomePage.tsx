import React from "react";
import NewCourse from "./NewCourse";
import Mentors from "./Mentors";
import YourCourse from "./YourCourse";
import Chart from "./Chart";

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col gap-5">
      <Chart />
      <YourCourse />
      <Mentors />
      <NewCourse />
    </div>
  );
};

export default HomePage;
