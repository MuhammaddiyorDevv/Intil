import React, { useState } from "react";
import { X } from "lucide-react";
import { MdSchool, MdAccessTime } from "react-icons/md";
import Payment from "../../assets/images/allCourse/PaymentImg.svg";
import Chack from "../../assets/images/allCourse/Chack.svg";
import CourselVideo from "../../assets/images/allCourse/carousel-video.svg";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  className = "",
}) => {
  const [selectedPlan, setSelectedPlan] = useState<string>("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 transition-opacity hidden md:block"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
        onClick={onClose}
      />

      <div
        className={`relative bg-white md:rounded-2xl md:shadow-xl max-w-[940px] mx-auto w-full h-full md:h-auto md:mx-4 md:max-h-[90vh] overflow-y-auto ${className}`}
      >
        {title && (
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-[24px] font-bold text-[#0B0C0B]">{title}</h2>
            <button
              aria-label="Close modal"
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={24} />
            </button>
          </div>
        )}

        <div className="flex flex-col md:flex-row p-6 gap-5">
          <div className="w-full md:w-1/2">
            <div>
              <h2 className="text-[18px] font-bold text-[#0B0C0B]">Один раз</h2>
              <p className="text-[#616161] text-[14px] mb-4">
                Предподаватель курса: Lola Yuldasheva
              </p>
            </div>
            <div
              className="border-[1px] border-[#e5e5e5] p-4 rounded-lg mt-4"
              style={{ backgroundColor: "#39B50E05" }}
            >
              <div className="flex justify-between gap-3  mt-4">
                <div className="flex gap-3">
                  <img src={Payment} alt="" />
                  <div className="flex flex-col gap-1 justify-center">
                    <h3 className="text-[#0B0C0B] text-[14px] font-bold">
                      Figma Master Class
                    </h3>
                    <p className="text-[#616161] text-[12px]">
                      Цена курса: 660 000 UZS
                    </p>
                  </div>
                </div>
                <img className="self-start" src={Chack} alt="" />
              </div>
              <div className="flex justify-between items-center pt-3">
                <div className="flex items-center gap-2">
                  <MdSchool className="text-[#567D4A] text-[24px]" />
                  <p className="text-[#0B0C0B] text-[12px]">
                    Предподаватель курса:
                  </p>
                </div>
                <p className="text-[#0B0C0B] text-[12px]">Lola Yuldasheva</p>
              </div>
              <div className="flex justify-between items-center py-3">
                <div className="flex items-center gap-2">
                  <MdAccessTime className="text-[#567D4A] text-[24px]" />
                  <p className="text-[#0B0C0B] text-[12px]">
                    Длительность курса:{" "}
                  </p>
                </div>
                <p className="text-[#0B0C0B] text-[12px]">3-месяца</p>
              </div>
              <div className="flex justify-between items-center pb-4">
                <div className="flex items-center gap-2">
                  <img src={CourselVideo} alt="" />
                  <p className="text-[#0B0C0B] text-[12px]">Тип курса:</p>
                </div>
                <p className="text-[#0B0C0B] text-[12px]"> Онлайн</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-[18px] font-bold text-[#0B0C0B]">
              Тарифные планы
            </h2>
            <p className="text-[#616161] mb-4 text-[14px]">
              Отличная возможность получить курс так, как вам нужно
            </p>

            <div className="border-[1px] border-[#E5E5E5] rounded-[12px]">
              <div 
                className="flex items-center rounded-t-[12px] p-4 border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
                onClick={() => setSelectedPlan("basic")}
              >
                <div 
                  className={`w-4 h-4 border-2 rounded-full mr-4 ${
                    selectedPlan === "basic" 
                      ? "border-[#567D4A] bg-[#567D4A]" 
                      : "border-gray-400"
                  }`}
                ></div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-[#0B0C0B] text-[16px]">
                      Basic
                    </h3>
                    <p className="text-[#0B0C0B] text-[14px] font-bold">
                      500 000 UZS
                    </p>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <p className="text-[12px] text-[#0B0C0B]">Вебинары: 2</p>
                    <p className="text-[12px] text-[#616161]">за месяц</p>
                  </div>
                  <p className="text-[12px] text-[#0B0C0B]">Курсы: 4</p>
                </div>
              </div>

              <div 
                className="flex items-center p-4 border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
                onClick={() => setSelectedPlan("pro")}
              >
                <div 
                  className={`w-4 h-4 border-2 rounded-full mr-4 ${
                    selectedPlan === "pro" 
                      ? "border-[#567D4A] bg-[#567D4A]" 
                      : "border-gray-400"
                  }`}
                ></div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-[#0B0C0B] text-[16px]">
                      Pro
                    </h3>
                    <p className="text-[#0B0C0B] text-[14px] font-bold">
                      1 000 000 UZS
                    </p>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <p className="text-[12px] text-[#0B0C0B]">Вебинары: 12</p>
                    <p className="text-[12px] text-[#616161]">за месяц</p>
                  </div>
                  <p className="text-[12px] text-[#0B0C0B]">Курсы: 16</p>
                </div>
              </div>

              <div 
                className="flex items-center p-4 rounded-b-[12px] border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
                onClick={() => setSelectedPlan("premium")}
              >
                <div 
                  className={`w-4 h-4 border-2 rounded-full mr-4 ${
                    selectedPlan === "premium" 
                      ? "border-[#567D4A] bg-[#567D4A]" 
                      : "border-gray-400"
                  }`}
                ></div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-[#0B0C0B] text-[16px]">
                      Premium
                    </h3>
                    <p className="text-[#0B0C0B] text-[14px] font-bold">
                      2 500 000 UZS
                    </p>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <p className="text-[12px] text-[#0B0C0B]">
                      Вебинары: Неограниченный
                    </p>
                    <p className="text-[12px] text-[#616161]">за месяц</p>
                  </div>
                  <p className="text-[12px] text-[#0B0C0B]">
                    Курсы: Неограниченный
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 pb-6">
          <button className="w-full bg-[#567D4A] text-white py-4 px-6 rounded-[99px] font-semibold text-lg hover:bg-[#4a6b3d] transition-colors mb-4">
            Приобрести
          </button>
          <p className="text-sm text-gray-600 text-left">
            By purchasing, you agree to the{" "}
            <a href="#" className="text-blue-600 underline hover:text-blue-800">
              Terms of Service
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
