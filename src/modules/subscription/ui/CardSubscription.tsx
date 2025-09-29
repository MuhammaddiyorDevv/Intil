import React from "react";
import type { SubscriptionPlan } from "../type";

interface CardSubscriptionProps {
  plan: SubscriptionPlan;
}

const CardSubscription: React.FC<CardSubscriptionProps> = ({ plan }) => {
  return (
    <div
      className={`flex flex-col gap-6 border-[1px] p-5 rounded-[12px] cursor-pointer ${
        plan.isPremium
          ? "text-white bg-[#D9A055] border-[#E5E5E5]"
          : "border-[#E5E5E5]"
      }`}
    >
      <h3
        className={`text-[18px] font-bold ${
          plan.isPremium ? "text-white" : "text-[#0B0C0B]"
        }`}
      >
        {plan.name} {plan.emoji}
      </h3>

      <div>
        <p
          className={`text-[14px] ${
            plan.isPremium ? "text-white" : "text-[#616161]"
          }`}
        >
          {plan.period}
        </p>
        <h2
          className={`text-[20px] font-bold ${
            plan.isPremium ? "text-white" : "text-[#0B0C0B]"
          }`}
        >
          {plan.price}
          {plan.originalPrice && (
            <span className="text-[14px] line-through ml-2">
              {plan.originalPrice}
            </span>
          )}
        </h2>
        <p
          className={`text-[14px] ${
            plan.isPremium ? "text-white" : "text-[#0B0C0B]"
          }`}
        >
          {plan.description}
        </p>
      </div>

      <hr className="text-[#E5E5E5]" />

      <div className="flex flex-col gap-[9px]">
        <h3
          className={`text-[16px] font-bold ${
            plan.isPremium ? "text-white" : "text-[#0B0C0B]"
          }`}
        >
          Функции
        </h3>
        <ul className="flex flex-col gap-[10px]">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex gap-[10px] text-[14px]">
              <img src={plan.checkIcon} alt="" />
              {feature.text} – {feature.value}
            </li>
          ))}
        </ul>
      </div>

      <button
        className={`w-full py-[11.5px] rounded-[99px] cursor-pointer ${
          plan.isPremium ? "bg-white text-black" : "bg-[#567D4A] text-white"
        }`}
      >
        {plan.buttonText}
      </button>
    </div>
  );
};

export default CardSubscription;
