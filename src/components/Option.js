import React, { Component } from 'react';
import slugify from 'slugify';

class Option extends Component {
  render () {

    return(
      <div className="feature__item">
        <input
          type="radio"
          id={this.props.itemHash}
          className="feature__option"
          name={slugify(this.props.feature)}
          checked={this.props.item.name === this.props.selected}
          onChange={this.props.onChange}
        />
        <label htmlFor={this.props.itemHash} className="feature__label">
          {this.props.item.name} ({this.props.currencyFormat.format(this.props.item.cost)})
        </label>
      </div>
    )
  }
}

export default Option;