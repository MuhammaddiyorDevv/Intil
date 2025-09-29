import { CourseProgressChart, ActivityChart } from "./DashboardCharts";
import filter from "@/assets/images/myCourse/filter.svg";

const Chart = () => {
  return (
    <div className="bg-white rounded-[20px] p-5">
      <div className="mb-4">
        <h1 className="text-xl sm:text-[24px] font-bold text-black">
          Мы рады вас видеть у нас
        </h1>
        <p className="text-gray-500 text-[14px] sm:text-[16px]">
          Добро пожаловать! Начните обучаться с нами
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-[#124600] rounded-2xl p-4 text-white w-full">
          <h2 className="text-[16px] font-bold mb-4">Ваш текущий курс</h2>
          <CourseProgressChart />
        </div>
        <div className="bg-white rounded-2xl p-4 border border-[#E5E5E5] w-full">
          <div className="flex justify-between items-center mb-[10px]">
            <h2 className="text-[16px] font-bold text-black">Активность</h2>
            <img src={filter} alt="filter icon" className="flex sm:hidden" />
            <div className="relative hidden sm:flex">
              <select className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 cursor-pointer">
                <option>Сортировка</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
          <ActivityChart />
        </div>
      </div>
    </div>
  );
};

export default Chart;
