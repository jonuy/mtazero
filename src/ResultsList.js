import React, { Component } from 'react';
import ResultsRow from './ResultsRow';
import './ResultsList.css';

class ResultsList extends Component {

  constructor() {
    super();

    this.state = {
      // Flag to keep
      didDisplay: false,
    };
  }

  render() {
    let rows = [];
    if (this.props.results) {
      for (let i = 0; i < this.props.results.length; i++) {
        rows.push(<ResultsRow key={`row-${i}`} data={this.props.results[i]} index={i}/>)
      }
    }

    let labels;
    if (rows.length > 0 || this.state.didDisplay) {
      labels = (
        <div className="Labels">
          <span className="col">Refill Amount</span>
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

  componentWillReceiveProps(nextProps) {
    if (this.props.results && this.props.results.length > 0) {
      this.setState({didDisplay: true});
    }
  }
}

ResultsList.propTypes = {
  results: React.PropTypes.array,
};

export default ResultsList;