import React, { Component } from "react";
import ShoppingCartItems from "./ShoppingCartItems";
import ShoppingCartTotal from "./ShoppingCartTotal";

class ShoppingCartDisplay extends Component {
  render() {
    return (
      <section className="main__summary">
        <ShoppingCartItems
          selected={this.props.selected}
          USCurrencyFormat={this.props.USCurrencyFormat}
        />
        <ShoppingCartTotal
          selected={this.props.selected}
          USCurrencyFormat={this.props.USCurrencyFormat}
        />
      </section>
    );
  }
}

export default ShoppingCartDisplay;
