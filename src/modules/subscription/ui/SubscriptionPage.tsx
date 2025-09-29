import React from "react";
import CardSubscription from "./CardSubscription";
import { SUBSCRIPTION_PLANS } from "../constants";

const SubscriptionPage: React.FC = () => {
  return (
    <div className="p-5 bg-white rounded-[20px] h-screen">
      <h1 className="text-[24px] font-bold text-[#0B0C0B] mb-4">
        Подписка и тарифы
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SUBSCRIPTION_PLANS.map((plan) => (
          <CardSubscription key={plan.id} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default SubscriptionPage;
