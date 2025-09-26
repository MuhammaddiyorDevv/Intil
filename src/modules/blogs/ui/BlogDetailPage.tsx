import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FiEye, FiHeart, FiClock } from "react-icons/fi";
import Calendar from "../../../assets/images/blogs/calender.svg";
import { MOCK_BLOGS } from "../constants";

const BlogDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const blog = MOCK_BLOGS.find((b) => b.id === id);

  if (!blog) {
    return (
      <div className="bg-white min-h-screen p-4 sm:p-5 lg:px-8 rounded-[20px]">
        <div className="text-center py-20">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Maqola topilmadi
          </h1>
          <button
            onClick={() => navigate("/blogs")}
            className="px-6 py-3 bg-[#567D4A] text-white rounded-lg hover:bg-[#4a6b3f] transition-colors"
          >
            Bloglar sahifasiga qaytish
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className=" min-h-screen p-4 sm:p-5 lg:px-5 rounded-[20px]">
      {/* Main Content Layout */}
      <div className="flex flex-col lg:flex-row gap-8 ">
        {/* Blog Content - Main Article */}
        <article className="flex-1 bg-white p-6 rounded-[16px]">
          {/* Header */}
          <header className="mb-6 sm:mb-8">
            {/* Author */}
            <div className="flex items-center gap-3">
              {blog.authorAvatar && (
                <img
                  src={blog.authorAvatar}
                  alt={blog.author}
                  className="w-10 h-10 rounded-full"
                />
              )}
              <div className="flex items-center gap-3">
                <p className="font-medium text-[#616161]">{blog.author}</p>
                <div className="border-l-[1px] border-[#E5E5E5] px-2 flex items-center gap-2 text-xs text-gray-500">
                  <p>Научные</p>
                  <div className="rounded-full bg-[#616161] border"></div>
                  <p>Языковые курсы</p>
                </div>
              </div>
            </div>
          </header>
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {blog.title}
          </h1>

          {/* Featured Image */}
          {blog.imageUrl && (
            <div className="mb-8">
              <img
                src={blog.imageUrl}
                alt={blog.title}
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg"
              />
            </div>
          )}

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p className="text-lg">{blog.content}</p>

              <p className="text-lg">
                Bu maqolada siz eng so'nggi texnologiyalar va dasturlash
                asoslari haqida batafsil ma'lumot olasiz. Har bir bosqich
                batafsil tushuntirilgan va amaliy misollar bilan ko'rsatilgan.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                Asosiy mavzular:
              </h2>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>Zamonaviy dasturlash tillari</li>
                <li>Framework va kutubxonalar</li>
                <li>Ma'lumotlar bazasi bilan ishlash</li>
                <li>API va mikroservis arxitektura</li>
                <li>DevOps va deployment</li>
              </ul>

              <p className="text-lg">
                Ushbu maqola sizga dasturlash sohasida yangi yo'nalishlarni
                tanlashda yordam beradi va professional rivojlanish uchun
                qadamlar ko'rsatadi.
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Teglar:
            </h3>
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 sm:flex-none px-6 py-3 bg-[#567D4A] text-white rounded-lg hover:bg-[#4a6b3f] transition-colors font-medium">
                Maqolani saqlash
              </button>
              <button className="flex-1 sm:flex-none px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                Ulashish
              </button>
              <button className="flex-1 sm:flex-none px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                {blog.likes} ❤️
              </button>
            </div>
          </div>
        </article>

        {/* Related Articles - Sidebar */}
        <aside className="lg:w-80 xl:w-[430px] flex-shrink-0">
          <section className="sticky top-8 bg-white p-[16px] rounded-[16px]">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Tegishli maqolalar
            </h2>
            <div className="space-y-4">
              {MOCK_BLOGS.filter((b) => b.id !== blog.id)
                .slice(0, 4)
                .map((relatedBlog) => (
                  <div
                    key={relatedBlog.id}
                    className="bg-white border border-gray-200 rounded-lg overflow-hidden cursor-pointer"
                    onClick={() => navigate(`/blogs/${relatedBlog.id}`)}
                  >
                    <div className="flex items-center">
                      {relatedBlog.imageUrl && (
                        <div className="w-[132px] h-[110px] flex-shrink-0">
                          <img
                            src={relatedBlog.imageUrl}
                            alt={relatedBlog.title}
                            className="w-full h-full object-cover rounded-[8px]"
                          />
                        </div>
                      )}
                      <div className="flex-1 p-3 flex flex-col justify-between">
                        <div>
                          <p className="text-xs flex items-center gap-1 text-gray-500 mb-2">
                            <img src={Calendar} alt="" className="w-3 h-3" />
                            {relatedBlog.publishedAt}
                          </p>
                          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 text-sm leading-tight">
                            {relatedBlog.title}
                          </h3>
                        </div>
                        <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                          {relatedBlog.excerpt}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
};

export default BlogDetailPage;
