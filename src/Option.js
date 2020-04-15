import React, { Component } from "react";

let USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});

class Option extends Component {
  render() {
    return (
      <>
        <div className="summary__option__value">
          {this.props.selectedOption.name}
        </div>
        <div className="summary__option__cost">
          {USCurrencyFormat.format(this.props.selectedOption.cost)}
        </div>
      </>
    );
  }
}

export default Option;
