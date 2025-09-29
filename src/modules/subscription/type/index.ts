export interface SubscriptionFeature {
  text: string;
  value: string | number | boolean;
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  emoji: string;
  price: string;
  originalPrice?: string;
  period: string;
  description: string;
  features: SubscriptionFeature[];
  buttonText: string;
  isPremium?: boolean;
  buttonStyle?: {
    backgroundColor: string;
    textColor: string;
  };
  cardStyle?: {
    backgroundColor?: string;
    textColor?: string;
    borderColor?: string;
  };
  checkIcon: string;
}
