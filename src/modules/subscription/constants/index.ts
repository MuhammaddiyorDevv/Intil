import type { SubscriptionPlan } from "../type";
import Chack from "../../../assets/images/subscription/Chack.svg";
import PremiumChack from "../../../assets/images/subscription/PremiumChack.svg";

export const SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
  {
    id: "launch",
    name: "Launch",
    emoji: "🚀",
    price: "500 000 UZS",
    period: "за месяц",
    description:
      "Больше возможностей, расширенный доступ и гибкость в обучении.",
    features: [
      { text: "Доступ к видеокурсам", value: 5 },
      { text: "Участие в вебинарах", value: 4 },
      { text: "Сдача тестов после курса", value: "Да" },
      { text: "Получение сертификата", value: "Нет" },
      { text: "Активный сеанс", value: 1 },
    ],
    buttonText: "Открыть доступ",
    buttonStyle: {
      backgroundColor: "#567D4A",
      textColor: "white",
    },
    cardStyle: {
      borderColor: "#E5E5E5",
    },
    checkIcon: Chack,
  },
  {
    id: "scale",
    name: "Scale",
    emoji: "📈",
    price: "770 000 UZS",
    period: "за месяц",
    description:
      "Больше возможностей, расширенный доступ и гибкость в обучении.",
    features: [
      { text: "Доступ к видеокурсам", value: 12 },
      { text: "Участие в вебинарах", value: 7 },
      { text: "Сдача тестов после курса", value: "Да" },
      { text: "Получение сертификата", value: "Да" },
      { text: "Активный сеанс", value: 2 },
    ],
    buttonText: "Открыть доступ",
    buttonStyle: {
      backgroundColor: "#567D4A",
      textColor: "white",
    },
    cardStyle: {
      borderColor: "#E5E5E5",
    },
    checkIcon: Chack,
  },
  {
    id: "premium",
    name: "Premium",
    emoji: "👑",
    price: "2 100 000 UZS",
    originalPrice: "3 000 000 UZS",
    period: "за месяц",
    description:
      "Больше возможностей, расширенный доступ и гибкость в обучении.",
    features: [
      { text: "Доступ к видеокурсам", value: "Без ограничений" },
      { text: "Участие в вебинарах", value: "VIP-доступ" },
      { text: "Сдача тестов после курса", value: "Да" },
      { text: "Получение сертификата", value: "Да" },
      { text: "Активный сеанс", value: 5 },
    ],
    buttonText: "Открыть доступ",
    isPremium: true,
    buttonStyle: {
      backgroundColor: "white",
      textColor: "black",
    },
    cardStyle: {
      backgroundColor: "#D9A055",
      textColor: "white",
      borderColor: "#E5E5E5",
    },
    checkIcon: PremiumChack,
  },
];
