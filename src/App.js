import React, { Component } from "react";
import NavBar from "./components/NavBar/NavBar";
import ShoppingCartDisplay from "./components/ShoppingCart/ShoppingCartDisplay";
import ShoppingCartTotal from "./components/ShoppingCart/ShoppingCartTotal";
import features from "./components/Features/Features";

import "./App.css";
import LaptopItem from "./components/Laptop/LaptopItems";
import LaptopDisplay from "./components/Laptop/LaptopDisplay";

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

class App extends Component {
  state = {
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

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected,
    });
  };

  render() {
    return (
      <div className="App">
        <NavBar />
        <main>
          <LaptopDisplay
            selected={this.state.selected}
            features={this.props.features}
            updateFeature={this.updateFeature}
            USCurrencyFormat={USCurrencyFormat}
          />
          <ShoppingCartDisplay
            selected={this.state.selected}
            USCurrencyFormat={USCurrencyFormat}
          />
          <ShoppingCartTotal
            selected={this.state.selected}
            USCurrencyFormat={USCurrencyFormat}
          />
        </main>
      </div>
    );
  }
}

export default App;
