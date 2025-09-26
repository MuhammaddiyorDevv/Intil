import type { Blog } from "../types";
import BlogsOne from "../../../assets/images/blogs/blogs-one.svg";
import BlogsTwo from "../../../assets/images/blogs/blogs-two.svg";
import BlogsThree from "../../../assets/images/blogs/blogs-three.svg";
import Avatar from "../../../assets/images/blogs/Avatar.svg";

export const BLOG_CATEGORIES = [
  { key: "all", label: "Все" },
  { key: "popular", label: "Популярные" },
  { key: "latest", label: "Последнее" },
  { key: "scientific", label: "Научные" },
] as const;

export const ITEMS_PER_PAGE = 9;

export const MOCK_BLOGS: Blog[] = [
  {
    id: "1",
    title:
      "Мы подготовили свежие курсы, чтобы вы могли продолжить развивать свои навыки и достигать новых высот. Подберите курс, который соответствует вашим целям и интересами классными темами у нас ",
    content:
      "Не можете определиться с направлением в IT или хотите узнать больше о перспекти можете определиться с направлением",
    excerpt:
      "Не можете определиться с направлением в IT или хотите узнать больше о перспекти можете определиться с направлением",
    author: "Ahmad Karimov",
    authorAvatar: Avatar,
    publishedAt: "02.02.2025",
    category: "latest",
    tags: ["React", "JavaScript", "Frontend"],
    imageUrl: BlogsOne,
    readTime: 8,
    views: 1250,
    likes: 45,
    isPopular: true,
    isScientific: false,
  },
  {
    id: "2",
    title:
      "This is not your typical growth hack BS guide. Instead, I will show you what actually works right now—step by step.",
    content:
      "TypeScript nima va uni qanday ishlatish kerak. Type safety va modern JavaScript development...",
    excerpt:
      "Не можете определиться с направлением в IT или хотите узнать больше о перспекти можете определиться с направлением",
    author: "Malika Toshmatova",
    authorAvatar: Avatar,
    publishedAt: "02.02.2025",
    category: "popular",
    tags: ["TypeScript", "Programming", "Tutorial"],
    imageUrl: BlogsTwo,
    readTime: 12,
    views: 2100,
    likes: 78,
    isPopular: true,
    isScientific: false,
  },
  {
    id: "3",
    title:
      "Long gone are those days when you could just write random posts about yourself or your thoughts.",
    content:
      "Не можете определиться с направлением в IT или хотите узнать больше о перспекти можете определиться с направлением",
    excerpt:
      "Не можете определиться с направлением в IT или хотите узнать больше о перспекти можете определиться с направлением",
    author: "Dr. Olim Rahimov",
    authorAvatar: Avatar,
    publishedAt: "02.02.2025",
    category: "scientific",
    tags: ["Machine Learning", "AI", "Research"],
    imageUrl: BlogsThree,
    readTime: 15,
    views: 890,
    likes: 32,
    isPopular: false,
    isScientific: true,
  },
  {
    id: "4",
    title:
      "Мы подготовили свежие курсы, чтобы вы могли продолжить развивать свои навыки и достигать новых высот. Подберите курс, который соответствует вашим целям и интересами классными темами у нас ",
    content:
      "Не можете определиться с направлением в IT или хотите узнать больше о перспекти можете определиться с направлением",
    excerpt:
      "Не можете определиться с направлением в IT или хотите узнать больше о перспекти можете определиться с направлением",
    author: "Ahmad Karimov",
    authorAvatar: Avatar,
    publishedAt: "02.02.2025",
    category: "latest",
    tags: ["React", "JavaScript", "Frontend"],
    imageUrl: BlogsOne,
    readTime: 8,
    views: 1250,
    likes: 45,
    isPopular: true,
    isScientific: false,
  },
  {
    id: "5",
    title:
      "This is not your typical growth hack BS guide. Instead, I will show you what actually works right now—step by step.",
    content:
      "TypeScript nima va uni qanday ishlatish kerak. Type safety va modern JavaScript development...",
    excerpt:
      "Не можете определиться с направлением в IT или хотите узнать больше о перспекти можете определиться с направлением",
    author: "Malika Toshmatova",
    authorAvatar: Avatar,
    publishedAt: "02.02.2025",
    category: "popular",
    tags: ["TypeScript", "Programming", "Tutorial"],
    imageUrl: BlogsTwo,
    readTime: 12,
    views: 2100,
    likes: 78,
    isPopular: true,
    isScientific: false,
  },
  {
    id: "6",
    title:
      "Long gone are those days when you could just write random posts about yourself or your thoughts.",
    content:
      "Не можете определиться с направлением в IT или хотите узнать больше о перспекти можете определиться с направлением",
    excerpt:
      "Не можете определиться с направлением в IT или хотите узнать больше о перспекти можете определиться с направлением",
    author: "Dr. Olim Rahimov",
    authorAvatar: Avatar,
    publishedAt: "02.02.2025",
    category: "scientific",
    tags: ["Machine Learning", "AI", "Research"],
    imageUrl: BlogsThree,
    readTime: 15,
    views: 890,
    likes: 32,
    isPopular: false,
    isScientific: true,
  },
  {
    id: "7",
    title:
      "Мы подготовили свежие курсы, чтобы вы могли продолжить развивать свои навыки и достигать новых высот. Подберите курс, который соответствует вашим целям и интересами классными темами у нас ",
    content:
      "Не можете определиться с направлением в IT или хотите узнать больше о перспекти можете определиться с направлением",
    excerpt:
      "Не можете определиться с направлением в IT или хотите узнать больше о перспекти можете определиться с направлением",
    author: "Ahmad Karimov",
    authorAvatar: Avatar,
    publishedAt: "02.02.2025",
    category: "latest",
    tags: ["React", "JavaScript", "Frontend"],
    imageUrl: BlogsOne,
    readTime: 8,
    views: 1250,
    likes: 45,
    isPopular: true,
    isScientific: false,
  },
  {
    id: "8",
    title:
      "This is not your typical growth hack BS guide. Instead, I will show you what actually works right now—step by step.",
    content:
      "TypeScript nima va uni qanday ishlatish kerak. Type safety va modern JavaScript development...",
    excerpt:
      "Не можете определиться с направлением в IT или хотите узнать больше о перспекти можете определиться с направлением",
    author: "Malika Toshmatova",
    authorAvatar: Avatar,
    publishedAt: "02.02.2025",
    category: "popular",
    tags: ["TypeScript", "Programming", "Tutorial"],
    imageUrl: BlogsTwo,
    readTime: 12,
    views: 2100,
    likes: 78,
    isPopular: true,
    isScientific: false,
  },
  {
    id: "9",
    title:
      "Long gone are those days when you could just write random posts about yourself or your thoughts.",
    content:
      "Не можете определиться с направлением в IT или хотите узнать больше о перспекти можете определиться с направлением",
    excerpt:
      "Не можете определиться с направлением в IT или хотите узнать больше о перспекти можете определиться с направлением",
    author: "Dr. Olim Rahimov",
    authorAvatar: Avatar,
    publishedAt: "02.02.2025",
    category: "scientific",
    tags: ["Machine Learning", "AI", "Research"],
    imageUrl: BlogsThree,
    readTime: 15,
    views: 890,
    likes: 32,
    isPopular: false,
    isScientific: true,
  },
  {
    id: "10",
    title: "TypeScript bilan Dasturlash Asoslari",
    content:
      "TypeScript nima va uni qanday ishlatish kerak. Type safety va modern JavaScript development...",
    excerpt:
      "TypeScript nima va uni qanday ishlatish kerak. Type safety va modern JavaScript development.",
    author: "Malika Toshmatova",
    authorAvatar: Avatar,
    publishedAt: "02.02.2025",
    category: "popular",
    tags: ["TypeScript", "Programming", "Tutorial"],
    imageUrl: BlogsTwo,
    readTime: 12,
    views: 2100,
    likes: 78,
    isPopular: true,
    isScientific: false,
  },
  {
    id: "11",
    title: "Machine Learning Algoritmlari",
    content:
      "Machine learning algoritmlari va ularning amaliy qo'llanilishi haqida ilmiy maqola...",
    excerpt:
      "Machine learning algoritmlari va ularning amaliy qo'llanilishi haqida ilmiy maqola.",
    author: "Dr. Olim Rahimov",
    authorAvatar: Avatar,
    publishedAt: "02.02.2025",
    category: "scientific",
    tags: ["Machine Learning", "AI", "Research"],
    imageUrl: BlogsThree,
    readTime: 15,
    views: 890,
    likes: 32,
    isPopular: false,
    isScientific: true,
  },
  {
    id: "12",
    title: "Vue.js 3 Composition API",
    content:
      "Vue.js 3-даги Composition API va uni React hooks bilan taqqoslash...",
    excerpt:
      "Vue.js 3-даги Composition API va uni React hooks bilan taqqoslash.",
    author: "Sardor Umarov",
    authorAvatar: Avatar,
    publishedAt: "02.02.2025",
    category: "latest",
    tags: ["Vue.js", "Frontend", "JavaScript"],
    imageUrl: BlogsOne,
    readTime: 10,
    views: 1450,
    likes: 56,
    isPopular: true,
    isScientific: false,
  },
  {
    id: "13",
    title: "Quantum Computing Asoslari",
    content:
      "Quantum computing va uning kelajakdagi ahamiyati haqida ilmiy tadqiqot...",
    excerpt:
      "Quantum computing va uning kelajakdagi ahamiyati haqida ilmiy tadqiqot.",
    author: "Prof. Zulfiya Karimova",
    authorAvatar: Avatar,
    publishedAt: "02.02.2025",
    category: "scientific",
    tags: ["Quantum Computing", "Physics", "Research"],
    imageUrl: BlogsTwo,
    readTime: 20,
    views: 650,
    likes: 28,
    isPopular: false,
    isScientific: true,
  },
  {
    id: "14",
    title: "Node.js Performance Optimization",
    content:
      "Node.js ilovalarini optimallashtirish va performance monitoring...",
    excerpt: "Node.js ilovalarini optimallashtirish va performance monitoring.",
    author: "Javlon Bekov",
    authorAvatar: Avatar,
    publishedAt: "02.02.2025",
    category: "popular",
    tags: ["Node.js", "Performance", "Backend"],
    imageUrl: BlogsThree,
    readTime: 14,
    views: 1800,
    likes: 67,
    isPopular: true,
    isScientific: false,
  },
  {
    id: "15",
    title: "CSS Grid va Flexbox Qo'llanmasi",
    content:
      "CSS Grid va Flexbox orasidagi farq va ularni qanday to'g'ri ishlatish...",
    excerpt:
      "CSS Grid va Flexbox orasidagi farq va ularni qanday to'g'ri ishlatish.",
    author: "Dilnoza Mirzayeva",
    authorAvatar: Avatar,
    publishedAt: "02.02.2025",
    category: "latest",
    tags: ["CSS", "Layout", "Frontend"],
    imageUrl: BlogsOne,
    readTime: 9,
    views: 1650,
    likes: 43,
    isPopular: true,
    isScientific: false,
  },
  {
    id: "16",
    title: "Blockchain Texnologiyasi",
    content:
      "Blockchain texnologiyasi va kriptovalyutalar haqida ilmiy tahlil...",
    excerpt:
      "Blockchain texnologiyasi va kriptovalyutalar haqida ilmiy tahlil.",
    author: "Dr. Akmal Yusupov",
    authorAvatar: Avatar,
    publishedAt: "02.02.2025",
    category: "scientific",
    tags: ["Blockchain", "Cryptocurrency", "Technology"],
    imageUrl: BlogsTwo,
    readTime: 18,
    views: 720,
    likes: 35,
    isPopular: false,
    isScientific: true,
  },
];
