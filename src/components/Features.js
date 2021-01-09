import React, {Component} from 'react';
import FeatureOptions from './FeatureOptions';

class Features extends Component {

      render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
          const featureHash = feature + '-' + idx;
          // //visual portion
          // return()
          // // Specific Feature of Component
          // const options = this.props.features[feature].map(item => {
          //   const itemHash = slugify(JSON.stringify(item));
          //   let USCurrencyFormat = new Intl.NumberFormat('en-US', {
          //     style: 'currency',
          //     currency: 'USD'
          //   });
          //   return (
          //     <div key={itemHash} className="feature__item">
          //       <input
          //         type="radio"
          //         id={itemHash}
          //         className="feature__option"
          //         name={slugify(feature)}
          //         checked={item.name === this.state.selected[feature].name}
          //         onChange={e => this.updateFeature(feature, item)}
          //       />
          //       <label htmlFor={itemHash} className="feature__label">
          //         {item.name} ({USCurrencyFormat.format(item.cost)})
          //       </label>
          //     </div>
          //   );
          // });
    
          return (
            <fieldset className="feature" key={featureHash}>
              <legend className="feature__name">
                <h3>{feature}</h3>
              </legend>
              {options}
            </fieldset>
          );
        });
      return feature;
}
}

export default Features;