import React, { Component } from 'react';
import './App.css';
import ResultsList from './ResultsList';

class App extends Component {

  constructor() {
    super();

    this.state = {
      results: undefined,
    };
  }

  render() {
    let footer = (
      <footer className={ ! this.state.results || this.state.results.length === 0 ? 'noContent' : '' }>
        <a href="https://github.com/jonuy/mtazero">on the Githubs.</a>
      </footer>
    );

    return (
      <div className="App">

        <header>
          <h2>Let's get that MTA card trending back to $0</h2>
          <a href="http://web.mta.info/nyct/fare/NewFareInformation.htm">MTA Fare Info</a>
          <label>How much is on your card?</label>
          <div className="Input">
            <span>$</span>
            <input
              type="number"
              name="cardValue"
              placeholder="0.00"
              onBlur={this.onInputBlur.bind(this)}
              onChange={this.onInputChange.bind(this)}
              onFocus={this.onInputFocus.bind(this)} />
          </div>
        </header>
        <ResultsList results={this.state.results} />
        { footer }
      </div>
    );
  }

  /**
   * Input onBlur handler.
   *
   * @param event {object}
   */
  onInputBlur(event) {
    event.target.placeholder = '0.00';
  }

  /**
   * Card value input onChange listener.
   *
   * @param event {object}
   */
  onInputChange(event) {
    // Clears current set of results
    this.setState({results: undefined});

    if (! event.target.value) {
      return;
    }

    // Keep only numeric and `.` characters
    let newValue = event.target.value.replace(/[^0123456789.]/g, '');

    // Convert string to number
    newValue = parseFloat(newValue);

    // Do the thing
    const results = this.calculateResults(newValue);

    // Artificial delay
    setTimeout((function() {this.setState({results: results}); }).bind(this), 100);
  }

  /**
   * Input onFocus handler.
   *
   * @param event {object}
   */
  onInputFocus(event) {
    event.target.placeholder = '';
  }

  /**
   * Calculate and save results to the component state.
   *
   * @param cardValue {number}
   * @return {array}
   */
  calculateResults(cardValue) {
    let results = [];

    const BONUS = 1.05;
    const FARE = 2.75;

    for (let x = 1; x <= 60; x++) {
      const newTotal = FARE * x;
      if (newTotal < cardValue) { continue; }

      const result = {
        addValue: ((newTotal - cardValue) / BONUS).toFixed(2),
        numRides: newTotal / FARE,
        newTotal: newTotal.toFixed(2),
      };

      // No bonus on adds below $5.50. Just gonna ignore these scenarios.
      if (result.addValue < 5.5) {
        continue;
      }

      results.push(result);
    }

    return results;
  }
}

export default App;