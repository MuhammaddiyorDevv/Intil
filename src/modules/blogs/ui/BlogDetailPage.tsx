import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Calendar from "../../../assets/images/blogs/calender.svg";
import { MOCK_BLOGS } from "../constants";
const DetailOne = "/Detail-one.svg";
const DetailTwo = "/Detail-two.svg";
const DetailThree = "/Detail-three.svg";
const DubleQuote = "/Duble-quote.svg";
const PlayBtn = "/PlayBtn.svg";

const BlogDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [showVideo, setShowVideo] = React.useState(false);

  console.log("DetailOne URL:", DetailOne);
  console.log("DetailTwo URL:", DetailTwo);
  console.log("DetailThree URL:", DetailThree);
  console.log("DubleQuote URL:", DubleQuote);
  console.log("PlayBtn URL:", PlayBtn);

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
      <div className="flex flex-col lg:flex-row gap-8 ">
        <article className="flex-1 bg-white p-6 rounded-[16px]">
          <header className="mb-6 sm:mb-8">
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
          <h1 className="text-3xl sm:text-4xl font-bold text-[#0B0C0B] mb-4">
            {blog.title}
          </h1>
          <div className="flex flex-col gap-4 pb-5 ">
            <p className="text-[16px] text-[#616161]">
              Наряду с этим, искусство медиапланирования непосредственно
              специфицирует тактический комплексный анализ ситуации. Один из
              признанных классиков маркетинга Ф.Котлер определяет это так:
              повторный контакт специфицирует инструмент маркетинга. Отраслевой
              стандарт, анализируя результаты рекламной кампании, недостаточно
              тормозит нишевый проект, признавая определенные
            </p>
            <p className="text-[16px] text-[#616161]">
              Инвестиционный продукт поддерживает анализ зарубежного опыта.
              Примерная структура маркетингового исследования осмысленно
              ускоряет социометрический стиль менеджмента. Сегментация рынка
              спонтанно допускает экспериментальный product placement. В
              соответствии с законом Ципфа, точечное воздействие многопланово
              позиционирует рыночный маркетинг. Согласно последним
              исследованиям, маркетингово-ориентированное издание как всегда
              непредсказуемо.
            </p>
          </div>
          <h1 className="text-[20px] sm:text-[20px] font-bold text-[#0B0C0B] mb-4">
            Требования
          </h1>
          <ul className="list-disc list-inside mb-6">
            <li className="text-[16px] text-[#616161] mb-2">
              Еще Траут показал, что информационная связь с потребителем
              притягивает культурный рекламный блок, используя опыт предыдущих
              кампаний.
            </li>
            <li className="text-[16px] text-[#616161] mb-2">
              Сегмент рынка оправдывает потребительский комплексный анализ
              ситуации. Психологическая среда тормозит CTR, опираясь на опыт
              западных коллег.
            </li>
          </ul>
          {blog.imageUrl && (
            <div className="mb-8">
              {!showVideo ? (
                <div className="relative">
                  <img
                    src={blog.imageUrl}
                    alt={blog.title}
                    className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <button
                      onClick={() => setShowVideo(true)}
                      className="rounded-full p-4 transition-all cursor-pointer duration-200 hover:scale-110 pointer-events-auto"
                    >
                      <img
                        src={PlayBtn}
                        alt="Play Video"
                        className="w-[56px] h-[56px] object-contain"
                        onError={(e) => {
                          console.error("Error loading PlayBtn:", PlayBtn);
                          e.currentTarget.style.display = "none";
                        }}
                        onLoad={() =>
                          console.log("PlayBtn loaded successfully:", PlayBtn)
                        }
                      />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="relative">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-bold text-[#0B0C0B]">Video</h3>
                    <button
                      onClick={() => setShowVideo(false)}
                      className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                    >
                      ×
                    </button>
                  </div>
                  <iframe
                    className="w-full h-64 sm:h-80 lg:h-96 rounded-lg"
                    src="https://www.youtube.com/embed/WONZVnlam6U?si=2AQRTz2e7IC_PCea"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>
          )}

          <div className="flex items-start gap-[10px] p-3 rounded-[12px] bg-[#F6F6F6] my-6">
            <div className="flex-shrink-0">
              <img
                src={DubleQuote}
                alt="Quote"
                className="w-8 h-8 object-contain"
                onError={(e) => {
                  console.error("Error loading DubleQuote:", DubleQuote);
                  e.currentTarget.style.display = "none";
                }}
                onLoad={() =>
                  console.log("DubleQuote loaded successfully:", DubleQuote)
                }
              />
            </div>
            <div className="flex-1">
              <p className="text-[16px] text-[#0B0C0B] leading-relaxed">
                Инвестиционный продукт поддерживает анализ зарубежного опыта.
                Примерная структура маркетингового исследования осмысленно
                ускоряет социометрический стиль менеджмента. Сегментация рынка
                спонтанно допускает экспериментальный product
              </p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p className="text-[16px] text-[#616161]">
                Инвестиционный продукт поддерживает анализ зарубежного опыта.
                Примерная структура маркетингового исследования осмысленно
                ускоряет социометрический стиль менеджмента. Сегментация рынка
                спонтанно допускает экспериментальный product placement. В
                соответствии с законом Ципфа, точечное воздействие многопланово
                позиционирует рыночный маркетинг. Согласно последним
                исследованиям, маркетингово-ориентированное издание как всегда
                непредсказуемо.
              </p>
              <div className="flex justify-between items-center gap-3  rounded-lg">
                <img
                  src={DetailOne}
                  alt="Detail One"
                  className="w-full object-contain  rounded-[12px]"
                  onError={(e) => {
                    console.error("Error loading DetailOne:", DetailOne);
                    e.currentTarget.style.display = "none";
                  }}
                  onLoad={() =>
                    console.log("DetailOne loaded successfully:", DetailOne)
                  }
                />
                <img
                  src={DetailTwo}
                  alt="Detail Two"
                  className="w-full object-contain rounded-[12px]"
                  onError={(e) => {
                    console.error("Error loading DetailTwo:", DetailTwo);
                    e.currentTarget.style.display = "none";
                  }}
                  onLoad={() =>
                    console.log("DetailTwo loaded successfully:", DetailTwo)
                  }
                />
                <img
                  src={DetailThree}
                  alt="Detail Three"
                  className="w-full object-contain rounded-[12px]"
                  onError={(e) => {
                    console.error("Error loading DetailThree:", DetailThree);
                    e.currentTarget.style.display = "none";
                  }}
                  onLoad={() =>
                    console.log("DetailThree loaded successfully:", DetailThree)
                  }
                />
              </div>
              <p className="text-[16px] text-[#616161]">
                Инвестиционный продукт поддерживает анализ зарубежного опыта.
                Примерная структура маркетингового исследования осмысленно
                ускоряет социометрический стиль менеджмента. Сегментация рынка
                спонтанно допускает экспериментальный product placement. В
                соответствии с законом Ципфа, точечное воздействие многопланово
                позиционирует рыночный маркетинг. Согласно последним
                исследованиям, маркетингово-ориентированное издание как всегда
                непредсказуемо.
              </p>
            </div>
          </div>
        </article>

        <aside className="lg:w-80 xl:w-[430px] flex-shrink-0">
          <div className="sticky top-8 space-y-4">
            <section className="bg-white p-[16px] rounded-[16px]">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Популярные статьи
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
                              <img src={Calendar} alt="" className="w-5 h-5" />
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
            <div className="bg-white p-4 rounded-[16px]">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Ключевые слова
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-[8.5px] bg-[#F6F6F6] text-[#0B0C0B] text-[14px] rounded-[10px]">
                  Искусственный интеллект
                </span>
                <span className="px-4 py-[8.5px] bg-[#F6F6F6] text-[#0B0C0B] text-[14px] rounded-[10px]">
                  Базы данных
                </span>
                <span className="px-4 py-[8.5px] bg-[#F6F6F6] text-[#0B0C0B] text-[14px] rounded-[10px]">
                  Грамматика английского
                </span>
                <span className="px-4 py-[8.5px] bg-[#F6F6F6] text-[#0B0C0B] text-[14px] rounded-[10px]">
                  Языковые курсы
                </span>
                <span className="px-4 py-[8.5px] bg-[#F6F6F6] text-[#0B0C0B] text-[14px] rounded-[10px]">
                  Бизнес-идеи
                </span>
                <span className="px-4 py-[8.5px] bg-[#F6F6F6] text-[#0B0C0B] text-[14px] rounded-[10px]">
                  Таргетированная реклама
                </span>
                <span className="px-4 py-[8.5px] bg-[#F6F6F6] text-[#0B0C0B] text-[14px] rounded-[10px]">
                  Финансовая грамотность
                </span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default BlogDetailPage;
