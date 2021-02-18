import React, { Component } from 'react';
import slugify from 'slugify';

class Option extends Component {
  render () {
    const itemHash = slugify(JSON.stringify(this.props.item));
    return(
      <div key={itemHash} className="feature__item">
        <input
          type="radio"
          id={itemHash}
          className="feature__option"
          name={slugify(this.props.feature)}
          checked={this.props.item.name === this.props.selected}
          onChange={this.props.onChange}
        />
        <label htmlFor={itemHash} className="feature__label">
          {this.props.item.name} ({this.props.currencyFormat.format(this.props.item.cost)})
        </label>
      </div>
    )
  }
}

export default Option;