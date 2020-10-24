import React, { Component } from "react";
import slugify from "slugify";
const USCurrencyFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

class CustomizeLaptop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: {
              Processor: {
                name: "17th Generation Intel Core HB (7 Core with donut spare)",
                cost: 700,
              },
              "Operating System": {
                name: "Ubuntu Linux 16.04",
                cost: 200,
              },
              "Video Card": {
                name: "Toyota Corolla 1.5v",
                cost: 1150.98,
              },
              Display: {
                name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
                cost: 1500,
              },
            },
          };
    }
    updateFeature = (feature, newValue) => {
        const selected = Object.assign({}, this.state.selected);
        selected[feature] = newValue;
        this.setState({
          selected,
        });
      };
    render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + "-" + idx;
      const options = this.props.features[feature].map((item) => {
        const itemHash = slugify(JSON.stringify(item));
        return (
          <div key={itemHash} className="feature__item">
            <input
              type="radio"
              id={itemHash}
              className="feature__option"
              name={slugify(feature)}
              checked={item.name === this.state.selected[feature].name}
              onChange={(e) => this.updateFeature(feature, item)}
            />
            <label htmlFor={itemHash} className="feature__label">
              {item.name} ({USCurrencyFormat.format(item.cost)})
            </label>
          </div>
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

export default CustomizeLaptop;
