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
          <h4>Find {this.props.randomPupper.breed}</h4>
          <button type="button" className="btn btn-outline-dark" onClick={e => window.location.reload()}>Restart Game</button>
        </div>
        <PeopleGrid
          currentPuppers={this.props.currentPuppers}
          puppers={this.props.puppers}
          mode={this.props.mode}
          randomPupper={this.props.randomPupper}
          setRandomPupper={this.props.setRandomPupper}
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
  breeds: PropTypes.objectOf(
    PropTypes.arrayOf(PropTypes.string).isRequired
  ).isRequired,
  currentPuppers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      breed: PropTypes.string,
      image: PropTypes.string,
    }).isRequired
  ).isRequired,
  randomPupper: PropTypes.shape({
    id: PropTypes.string,
    breed: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
  incrementScore: PropTypes.func.isRequired,
  decrementScore: PropTypes.func.isRequired,
  setRandomPupper: PropTypes.func.isRequired,
};

export default Guess;
