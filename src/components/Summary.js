import React, { Component } from "react";


class Summary extends Component {

    summary = Object.keys(this.state.selected).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const selectedOption = this.state.selected[feature];
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
      });

}

export default Summary;