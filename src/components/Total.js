import React, { Component } from "react";

let USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

export default class Total extends Component {

    
    render() {
        const total = USCurrencyFormat.format(
            Object.keys(this.props.selected).reduce(
            (acc, curr) => acc + this.props.selected[curr].cost,
            0
         )
        )
        return(
        <div>{total}</div>
        )
    }
}