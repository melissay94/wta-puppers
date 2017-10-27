import React from 'react';
import PropTypes from 'prop-types';

import 'scss/guess.scss';

import PeopleGrid from './peopleGrid';
import PageTitle from './title';

// View for interactive half of the game - Includes title, header with a button for game reset, and the grid of people to interact with
class Guess extends React.Component {
  render() {
    return (
      <div id="guess">
        <PageTitle title="All right! Guessing time!" />
        <div className="header">
          <h4>Score: {this.props.score}</h4>
          <h4>Find {this.props.randomPerson.firstName} {this.props.randomPerson.lastName}</h4>
          <button type="button" className="btn btn-outline-dark" onClick={e => window.location.reload()}>Restart Game</button>
        </div>
        <PeopleGrid
          currentPeople={this.props.currentPeople}
          people={this.props.people}
          mode={this.props.mode}
          randomPerson={this.props.randomPerson}
          setRandomPerson={this.props.setRandomPerson}
          score={this.props.score}
          incrementScore={this.props.incrementScore}
          decrementScore={this.props.decrementScore}
        />
      </div>
    );
  }
}

Guess.propTypes = {
  mode: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  people: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  currentPeople: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  randomPerson: PropTypes.shape({
    id: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  }).isRequired,
  incrementScore: PropTypes.func.isRequired,
  decrementScore: PropTypes.func.isRequired,
  setRandomPerson: PropTypes.func.isRequired,
};

export default Guess;
