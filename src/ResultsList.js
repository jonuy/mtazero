import React, { Component } from 'react';
import ResultsRow from './ResultsRow';
import './ResultsList.css';

class ResultsList extends Component {
  render() {
    let rows = [];
    if (this.props.results) {
      for (let i = 0; i < this.props.results.length; i++) {
        rows.push(<ResultsRow key={`row-${i}`} data={this.props.results[i]} index={i}/>)
      }
    }

    let labels;
    if (rows.length > 0) {
      labels = (
        <div className="Labels">
          <span className="col">Add Value</span>
          <span className="col"># of Rides</span>
          <span className="col">New Balance</span>
        </div>
      );
    }

    return (
      <div className="ResultsList">
        { labels }
        { rows }
      </div>
    );
  }
}

export default ResultsList;