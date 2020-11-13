import React from 'react';

function SummaryOption(props){
    return (
        <div className="summary__option" key={props.featureHash}>
          <div className="summary__option__label">{props.feature} </div>
          <div className="summary__option__value">{props.selectedOption.name}</div>
          <div className="summary__option__cost">
            {props.USCurrencyFormat.format(props.selectedOption.cost)}
          </div>
        </div>
      );
}

export default SummaryOption;