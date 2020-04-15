import React, {Component} from 'react'
import FeatureList from './FeatureList'
import OptionList from './OptionList'
import './App.css'
import Total from './Total'

class App extends Component {

    static defaultProps = {
        features: []
    }

    constructor(){
        super()
        this.state = {
            selected: {
                Processor: {
                  name: '17th Generation Intel Core HB (7 Core with donut spare)',
                  cost: 700
                },
                'Operating System': {
                  name: 'Ubuntu Linux 16.04',
                  cost: 200
                },
                'Video Card': {
                  name: 'Toyota Corolla 1.5v',
                  cost: 1150.98
                },
                Display: {
                  name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
                  cost: 1500
                }
            }
        }
        this.handleState = this.handleState.bind(this)
    }

    handleState = (selected, featureName) => {
        console.log(selected)
          this.setState({
            selected: {...this.state.selected, [featureName]:selected}
        })
    }

    render() {
        const features = Object.keys(this.props.features)
        const selected = Object.keys(this.state.selected)
        
        return(
            <div className="App">
                <header>
                    <h1>ELF Computing | Laptops</h1>
                </header>
                <main>
                    <form className="main__form">
                        <h2>Customize your laptop</h2>
                        {features.map((feature, idx) => 
                            <FeatureList 
                                key={idx}
                                featureTypeObject={this.props.features[feature]}
                                featureName={feature} 
                                changeState = {this.handleState}/>
                        )}
                    </form>
                    <section className="main__summary">
                        <h2>Your cart</h2>
                        {selected.map((option, idx) => 
                            <OptionList
                                key={idx} 
                                optionType={option}
                                optionValue={this.state.selected[option]} />
                        )}
                        <Total 
                            procCost={this.state.selected.Processor.cost} 
                            osCost={this.state.selected['Operating System'].cost}
                            vcCost={this.state.selected['Video Card'].cost}
                            displayCost={this.state.selected.Display.cost}/>
                    </section>
                </main>
            </div>
        )
    }
}

export default App