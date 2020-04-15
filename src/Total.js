import React from "react";

let USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});

function Total(props) {
  return (
    <div className="summary__total">
      <div className="summary__total__label">Total</div>
      <div className="summary__total__value">
        {USCurrencyFormat.format(
          props.procCost + props.osCost + props.vcCost + props.displayCost
        )}
      </div>
    </div>
  );
}

export default Total;
