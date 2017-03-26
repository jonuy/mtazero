import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './ResultsRow.css';

class ResultsRow extends Component {
  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName="ResultsRow"
        transitionAppear={true}
        transitionAppearTimeout={100 * this.props.index}>
        <div className="ResultsRow">
          <span className="col AddValue">${this.props.data.addValue}</span>
          <span className="col">{this.props.data.numRides}</span>
          <span className="col">${this.props.data.newTotal}</span>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}

export default ResultsRow;