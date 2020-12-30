import React, { Component } from "react";
import Specs from "../Specs/Specs";

class LaptopDisplay extends Component {
  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => (
      <Specs {...this.props} feature={feature} idx={idx} />
    ));

    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {features}
      </form>
    );
  }
}

export default LaptopDisplay;
