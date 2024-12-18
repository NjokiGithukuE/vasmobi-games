import { Check } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export const PricingSection: React.FC = () => {
  const pricingPlans = [
    {
      name: "Daily",
      price: 35,
      currency: "Ksh",
      features: ["Play any one game", "Play one time", "Daily Refresh"],
    },
    {
      name: "Weekly",
      price: 200,
      currency: "Ksh",
      features: [
        "Play any game once for seven days",
        "Expanded Game Library",
        "Weekly Refresh",
      ],
    },
    {
      name: "Monthly",
      price: 800,
      currency: "Ksh",
      features: [
        "All Weekly Plan Features",
        "Full Game Access",
        "Exclusive Monthly Rewards",
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-4 md:py-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-400">
        <span className="text-orange-500">Pricing Plans</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {pricingPlans.map((plan, index) => (
          <Card
            key={plan.name}
            className={`rounded-lg shadow-md hover:shadow-lg transition-all duration-300
                ${index === 1 ? "border-2 border-orange-500 bg-orange-50" : ""}
                hover:shadow-xl transition-all duration-300
              `}
          >
            <CardHeader className="text-center pb-4">
              <CardTitle>{plan.name} Plan</CardTitle>
            </CardHeader>
            <CardContent className="px-6 py-4">
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-gray-800">
                  {plan.price} {plan.currency}
                </span>
                <span className="text-sm text-gray-500 block">
                  {plan.name.toLowerCase()}
                </span>
              </div>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-700">
                    <Check className="mr-2 text-orange-500 h-5 w-5" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${
                  index === 1
                    ? "bg-orange-500 text-white hover:bg-orange-600"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                }`}
              >
                Choose {plan.name} Plan
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
