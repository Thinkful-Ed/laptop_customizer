import React, { Component } from "react";


class Summary extends Component {
  render () {  
    const summary = Object.keys(this.props.selected).map((feature, idx) => {
          const featureHash = feature + '-' + idx;
          const selectedOption = this.props.selected[feature];
          let USCurrencyFormat = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
          });
          return (
            <div className="summary__option" key={featureHash}>
              <div className="summary__option__label">{feature} </div>
              <div className="summary__option__value">{selectedOption.name}</div>
              <div className="summary__option__cost">
                {USCurrencyFormat.format(selectedOption.cost)}
              </div>
            </div>
          );
        })
    return (
    <div>{summary}</div>
    )
  }
}

export default Summary;