import React, { Component } from "react";
import Option from "./Option";
import Feature from "./Feature";
import slugify from "slugify";

class Customize extends Component {
  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + "-" + idx;
      const options = this.props.features[feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));
        return (
          <Option
            selected={this.props.selected}
            itemHash={itemHash}
            feature={feature}
            item={item}
            key={item.name}
            updateFeature={this.props.updateFeature}
          />
        );
      });

      return (
        <Feature
          key={idx}
          feature={feature}
          options={options}
          featureHash={featureHash}
        />
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

export default Customize;
