import React from "react";
import Array from "./FeaturesArray";
import "./Features.css";

const Features = () => {
  return (
    <div className="features__section">
      <h1>Why choose Easybank?</h1>
      <p>
        We leverage Open Banking to turn your bank account into your financial
        hub.
      </p>
      <p>Control your finances like never before</p>
      <div className="features__section--tab">
        {Array.map((Feature) => (
          <div>
            <img src={Feature.icon} alt={Feature.name} />
            <h2>{Feature.name}</h2>
            <p>{Feature.paragraph}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
