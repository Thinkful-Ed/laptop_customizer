import React, {Component} from 'react'

class Summary extends Component {
    const summary = Object.keys(this.state.selected).map((feature, idx) => {
        const featureHash = feature + "-" + idx;
        const selectedOption = this.state.selected[feature];})
}