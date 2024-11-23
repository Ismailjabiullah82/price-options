import React from "react";
import PriceOption from "../PriceOption/PriceOption";
// import PropTypes from 'prop-types';

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Plan",
      price: 20,
      currency: "USD",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Open during regular hours",
      ],
    },
    {
      id: 2,
      name: "Standard Plan",
      price: 40,
      currency: "USD",
      features: [
        "All Basic Plan features",
        "Unlimited group classes",
        "Extended hours access",
        "One free personal training session per month",
      ],
    },
    {
      id: 3,
      name: "Premium Plan",
      price: 60,
      currency: "USD",
      features: [
        "All Standard Plan features",
        "Access to spa and sauna",
        "Priority equipment reservation",
        "Two free personal training sessions per month",
      ],
    },
    {
      id: 4,
      name: "Family Plan",
      price: 100,
      currency: "USD",
      features: [
        "Access for up to 4 family members",
        "All Premium Plan features",
        "Free kids' fitness classes",
        "Discount on additional personal training",
      ],
    },
    {
      id: 5,
      name: "Pay-as-you-go",
      price: 10,
      currency: "USD",
      features: [
        "Single-day gym access",
        "Locker room access",
        "No membership required",
      ],
    },
  ];

  return (
    <div className="m-12">
      <h2 className="text-2xl">Best Prices in the town</h2>
      <div className="grid md:grid-cols-3 gap-6">
      {
        priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
      }
      </div>
    </div>
  );
};

PriceOptions.propTypes = {};

export default PriceOptions;
