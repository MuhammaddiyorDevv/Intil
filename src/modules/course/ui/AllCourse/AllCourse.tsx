import { useCallback, useState } from "react";
import { allCoursesData } from "../../constants/allCourses";
import FiltersSidebar from "../../../shared/FiltersSidebar";
import SearchBar from "../../../shared/SearchBar";
import CoursesGrid from "./CoursesGrid";
import { FiFilter } from "react-icons/fi";

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
      <h1 className="font-semibold text-[24px] mb-4">Все курсы</h1>

      <div className="flex flex-col lg:flex-row gap-5">
        <div className="hidden lg:block w-[25%] lg:sticky lg:top-0 lg:self-start max-h-screen overflow-y-auto">
          <FiltersSidebar
            priceRange={priceRange}
            onPriceChange={handlePriceChange}
            type="courses"
          />
        </div>

        <div className="flex-1">
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
              className="lg:hidden flex items-center justify-center w-12 h-12 bg-[#567D4A] rounded-[12px] text-white cursor-pointer transition-colors"
            >
              <FiFilter size={24} />
            </button>
          </div>

          <CoursesGrid courses={filteredCourses} />
        </div>
      </div>

      {isFilterModalOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-opacity-50"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
            onClick={() => setIsFilterModalOpen(false)}
          />

          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[20px] max-h-[80vh] flex flex-col">
            <div className="flex-1 overflow-y-auto p-4 pb-20">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">
                    Фильтры
                  </h2>
                  <button
                    onClick={() => setIsFilterModalOpen(false)}
                    className="text-[#05935D] hover:text-gray-700"
                  >
                    Очистить
                  </button>
                </div>

              <FiltersSidebar
                priceRange={priceRange}
                onPriceChange={handlePriceChange}
                type="courses"
              />
            </div>

            <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4">
              <div className="flex gap-3">
                <button
                  onClick={() => setIsFilterModalOpen(false)}
                  className="flex-1 py-3 bg-[#567D4A] px-4 border border-gray-300 rounded-[99px] text-white font-medium"
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
