import React from "react";
import NewCourse from "./NewCourse";

const HomePage: React.FC = () => {
  return (
    <div className="">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Bosh Sahifa</h1>
      <NewCourse />
    </div>
  );
};

export default HomePage;
