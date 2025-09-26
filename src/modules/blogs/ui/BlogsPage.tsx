import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Calendar from "../../../assets/images/blogs/calender.svg";
import type { BlogCategory, PaginationInfo } from "../types";
import { BLOG_CATEGORIES, MOCK_BLOGS, ITEMS_PER_PAGE } from "../constants";

const BlogsPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<BlogCategory>("all");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter blogs based on active tab
  const filteredBlogs = useMemo(() => {
    let filtered = MOCK_BLOGS;

    switch (activeTab) {
      case "popular":
        filtered = MOCK_BLOGS.filter((blog) => blog.isPopular);
        break;
      case "latest":
        filtered = MOCK_BLOGS.filter((blog) => blog.category === "latest");
        break;
      case "scientific":
        filtered = MOCK_BLOGS.filter((blog) => blog.isScientific);
        break;
      default:
        filtered = MOCK_BLOGS;
    }

    return filtered;
  }, [activeTab]);

  // Calculate pagination
  const pagination: PaginationInfo = useMemo(() => {
    const totalItems = filteredBlogs.length;
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

    return {
      currentPage,
      totalPages,
      totalItems,
      itemsPerPage: ITEMS_PER_PAGE,
      hasNextPage: currentPage < totalPages,
      hasPreviousPage: currentPage > 1,
    };
  }, [filteredBlogs, currentPage]);

  const paginatedBlogs = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredBlogs.slice(startIndex, endIndex);
  }, [filteredBlogs, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleTabChange = (tab: BlogCategory) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  return (
      <div className="bg-white min-h-screen p-4 sm:p-5 lg:px-8 rounded-[20px]">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Блоги</h1>
        </div>

      {/* Tabs */}
      <div className="flex flex-wrap mb-6 sm:mb-8 gap-2 sm:gap-3">
        {BLOG_CATEGORIES.map((category) => (
          <button
            key={category.key}
            onClick={() => handleTabChange(category.key as BlogCategory)}
            className={`px-3 sm:px-6 py-2 sm:py-3 rounded-[10px] text-xs sm:text-sm font-medium transition-all duration-200 ${
              activeTab === category.key
                ? "bg-[#567D4A] text-white shadow-sm"
                : "bg-[#F6F6F6] text-[#000] hover:bg-gray-200"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8 items-stretch">
        {paginatedBlogs.map((blog) => (
          <div
            key={blog.id}
            onClick={() => navigate(`/blogs/${blog.id}`)}
            className="bg-white p-3 border-[1px] border-[#E1E1E1] rounded-[16px] overflow-hidden hover:shadow-md transition-shadow duration-200 flex flex-col h-full cursor-pointer"
          >
            {blog.imageUrl && (
              <div className="h-40 sm:h-48 bg-gray-200 rounded-[8px]">
                <img
                  src={blog.imageUrl}
                  alt={blog.title}
                  className="w-full h-full object-cover rounded-[8px]"
                />
              </div>
            )}
            <div className="py-3 sm:py-4 flex flex-col flex-1">
              {/* Date with calendar icon */}
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <img src={Calendar} alt="" className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm text-gray-500">
                  {blog.publishedAt}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg lg:text-[20px] font-bold text-gray-900 mb-2 sm:mb-3 line-clamp-2">
                {blog.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3 text-[12px] sm:text-[12px] leading-relaxed flex-1">
                {blog.excerpt}
              </p>

              {/* Learn More Button */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/blogs/${blog.id}`);
                }}
                className="w-full bg-white border border-gray-300 text-[12px] sm:text-[14px] text-[#0B0C0B] py-2 sm:py-[11.5px] px-3 sm:px-4 rounded-[99px] cursor-pointer font-medium hover:bg-gray-50 transition-colors duration-200 mt-auto"
              >
                Узнать больше
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {pagination.totalPages > 1 && (
        <div className="flex justify-center items-center space-x-1 sm:space-x-2">
          <button
            aria-label="Previous Page"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={!pagination.hasPreviousPage}
            className="px-2 py-2 text-xs sm:text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1 sm:gap-2"
          >
            <FiChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>

          <div className="flex space-x-1">
            {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map(
              (page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium rounded-[8px] ${
                    page === currentPage
                      ? "text-[#006ADC] border-[1px] border-[#E2E2EA]"
                      : "text-[#92929D] hover:border-[1px] hover:border-[#E2E2EA] cursor-pointer"
                  }`}
                >
                  {page}
                </button>
              )
            )}
          </div>

          <button
            aria-label="Next Page"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={!pagination.hasNextPage}
            className="px-2 py-2 text-xs sm:text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1 sm:gap-2"
          >
            <FiChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogsPage;
