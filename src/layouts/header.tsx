import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl px-3 border-l border-gray-200">
        <div className="flex items-center">
          <div className="flex items-center p-5">
            <h1 className="text-2xl font-bold text-gray-900">Intil Demo</h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
