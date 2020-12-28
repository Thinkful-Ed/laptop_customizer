import React, { Component } from "react";
import LaptopItems from "./LaptopItems";
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from "slugify";

class LaptopDisplay extends Component {
  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + "-" + idx;
      const options = this.props.features[feature].map((item) => {
        const itemHash = slugify(JSON.stringify(item));
        return (
          <LaptopItems
            itemHash={itemHash}
            item={item}
            feature={feature}
            updateFeature={this.props.updateFeature}
            {...this.props}
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
    });

    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {features}
      </form>
    );
  }
}

export default LaptopDisplay;
