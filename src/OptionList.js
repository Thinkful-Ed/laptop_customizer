import React, { Component } from "react";

let USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});

class OptionList extends Component {
  static defaultProps = {
    optionValue: {}
  };
  render() {
    return (
      <>
        <div className="summary__option__label">{this.props.optionType}</div>
        <div className="summary__option__value">
          {this.props.optionValue.name}
        </div>
        <div className="summary__option__cost">
          {USCurrencyFormat.format(this.props.optionValue.cost)}
        </div>
      </>
    );
  }
}

export default OptionList;
