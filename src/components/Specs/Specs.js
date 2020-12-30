import React from "react";
import LaptopItems from "../Laptop/LaptopItems";

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from "slugify";

export default function Specs(props) {
  const { feature, idx } = props;

  const featureHash = feature + "-" + idx;
  const options = props.features[feature].map((item, i) => {
    const itemHash = slugify(JSON.stringify(item));
    return (
      <LaptopItems
        key={i}
        itemHash={itemHash}
        item={item}
        feature={feature}
        updateFeature={props.updateFeature}
        {...props}
      />
    );
  });

  return (
    <fieldset className="feature" key={featureHash}>
      <legend className="feature__name">
        <h3>{feature}</h3>
      </legend>
      {options}
    </fieldset>
  );
}
