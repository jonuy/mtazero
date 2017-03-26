import React, { Component } from 'react';

class ResultsRow extends Component {
  render() {
    return (
      <div className="ResultsRow">
        ${this.props.data.addValue} / {this.props.data.numRides} / ${this.props.data.newTotal}
      </div>
    );
  }
}

export default ResultsRow;