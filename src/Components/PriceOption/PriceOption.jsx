import React from "react";
import PropTypes from "prop-types";

import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
  // to do distructure -
  const { name, price, features } = option;
  return (
    <div className="bg-blue-600 p-4 flex flex-col rounded-lg text-center text-white">
      <h2>
        <span className="text-5xl">{price}</span>
        <span className="text-2xl">/month</span>
      </h2>
      <h3 className="text-4xl my-3">{name}</h3>
    <div className="p-2 flex-grow">
    {features.map((feature, index) => (
        <Feature key={index} feature={feature}></Feature>
      ))}
    </div>
    <button className="btn text-2xl bg-blue-900 text-white mt-6">Buy Now</button>
      
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object,
};

export default PriceOption;
