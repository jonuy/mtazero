import React, { Component } from 'react';
import ResultsRow from './ResultsRow';
import './ResultsList.css';

class ResultsList extends Component {
  render() {
    let rows = [];
    if (this.props.results) {
      for (const row of this.props.results) {
        rows.push(<ResultsRow data={row} />)
      }
    }

    let labels;
    if (rows.length > 0) {
      labels = (
        <div className="Labels">
          Add Value / # of Rides / New Balance
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