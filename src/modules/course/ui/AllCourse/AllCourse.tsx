"use client";

import { useCallback, useState } from "react";
import { allCoursesData } from "../../data/allCourses";
import FiltersSidebar from "../../../shared/FiltersSidebar";
import SearchBar from "../../../shared/SearchBar";
import CoursesGrid from "./CoursesGrid";
import { MdFilterList } from "react-icons/md";
const AllCoursesPage = () => {
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000000 });
  const [searchTerm, setSearchTerm] = useState("");
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const handlePriceChange = useCallback((min: number, max: number) => {
    setPriceRange((prev) => {
      if (prev.min === min && prev.max === max) return prev;
      return { min, max };
    });
  }, []);

  const extractPrice = (priceString: string): number => {
    const numericValue = priceString.replace(/[^\d]/g, "");
    return parseInt(numericValue) || 0;
  };

  const filteredCourses = allCoursesData.filter((course) => {
    const coursePrice = extractPrice(course.price);
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice =
      coursePrice >= priceRange.min && coursePrice <= priceRange.max;

    return matchesSearch && matchesPrice;
  });

  return (
    <div className="bg-white rounded-[20px] p-5">
      {/* Desktop Layout */}
      <div className="hidden lg:flex gap-5">
        <FiltersSidebar
          priceRange={priceRange}
          onPriceChange={handlePriceChange}
          type="courses"
        />
        <div className="w-[75%] p-1">
          <h1 className="font-semibold text-[24px]">Все курсы</h1>
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            placeholder="Ищите курсы"
          />
          <CoursesGrid courses={filteredCourses} />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        <h1 className="font-semibold text-[24px] mb-4">Все курсы</h1>

        {/* Search Bar with Filter Icon */}
        <div className="flex gap-3 mb-6">
          <div className="flex-1">
            <SearchBar
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              placeholder="Ищите курсы"
            />
          </div>
          <button
            aria-label="filter"
            onClick={() => setIsFilterModalOpen(true)}
            className="flex items-center justify-center w-12 h-12 bg-[#567D4A] rounded-[12px] text-white hover:bg-[#0056b3] transition-colors"
          >
            <MdFilterList size={24} />
          </button>
        </div>

        <CoursesGrid courses={filteredCourses} />
      </div>

      {/* Mobile Filter Modal */}
      {isFilterModalOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setIsFilterModalOpen(false)}
          />

          {/* Modal Content */}
          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[20px] max-h-[80vh] overflow-y-auto">
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Филтры</h2>
                <button
                  onClick={() => setIsFilterModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              <div className="mb-4">
                <FiltersSidebar
                  priceRange={priceRange}
                  onPriceChange={handlePriceChange}
                  type="courses"
                />
              </div>

              <div className="flex gap-3 pt-4 border-t">
                <button
                  onClick={() => setIsFilterModalOpen(false)}
                  className="flex-1 py-3 px-4 border border-gray-300 rounded-[12px] text-gray-700 font-medium"
                >
                  Сбросить
                </button>
                <button
                  onClick={() => setIsFilterModalOpen(false)}
                  className="flex-1 py-3 px-4 bg-[#006ADC] text-white rounded-[12px] font-medium"
                >
                  Применить
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllCoursesPage;
