import React from 'react';
import PropTypes from 'prop-types';

import 'scss/memorize.scss';

import PageTitle from './title';
import Timer from './timer';
import PeopleRow from './peopleRow';

class Memorize extends React.Component {

  render() {
    const sliceStart = this.props.counter * 5;
    const currentRound = this.props.currentPeople.slice(sliceStart, sliceStart + 5);

    return (
      <div id="memorize">
        <div className="header">
          <Timer
            counter={this.props.counter}
            incrementCounter={this.props.incrementCounter}
            resetCounter={this.props.resetCounter}
            setGameState={this.props.setGameState}
          />
          <PageTitle title="Quick! Memorize their names!" />
        </div>
        <PeopleRow currentPeople={currentRound} />
      </div>
    );
  }
}

Memorize.propTypes = {
  counter: PropTypes.number.isRequired,
  currentPeople: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  incrementCounter: PropTypes.func.isRequired,
  resetCounter: PropTypes.func.isRequired,
  setGameState: PropTypes.func.isRequired,
};

export default Memorize;
