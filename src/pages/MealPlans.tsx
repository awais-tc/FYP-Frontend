import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Check, X } from 'lucide-react';
import { mealPlans } from '../lib/api';

const MealPlans = () => {
  const { data: plans, isLoading } = useQuery({
    queryKey: ['meal-plans'],
    queryFn: mealPlans.getPlans,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl font-semibold">Loading meal plans...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Meal Plans</h1>
          <p className="mt-4 text-xl text-gray-600">
            Choose the perfect meal plan for your team
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans?.map((plan) => (
            <div
              key={plan.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="px-6 py-8">
                <h3 className="text-2xl font-bold text-center text-gray-900">
                  {plan.name}
                </h3>
                <div className="mt-4 flex justify-center">
                  <span className="text-5xl font-extrabold text-gray-900">
                    ${plan.price}
                  </span>
                  <span className="ml-2 text-xl font-medium text-gray-500 self-end">
                    /{plan.duration}
                  </span>
                </div>
                <p className="mt-4 text-center text-gray-600">
                  {plan.mealsPerDay} meals per day
                </p>
              </div>
              <div className="px-6 pb-8">
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0">
                        <Check className="h-6 w-6 text-green-500" />
                      </div>
                      <p className="ml-3 text-base text-gray-700">{feature}</p>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <button className="w-full bg-brand-red text-white rounded-md py-3 px-4 hover:bg-brand-orange transition-colors">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            All Plans Include
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Free delivery',
              'Customizable menus',
              '24/7 support',
              'Flexible scheduling',
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow p-6 text-center"
              >
                <Check className="h-8 w-8 text-green-500 mx-auto mb-4" />
                <p className="text-gray-900 font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealPlans;