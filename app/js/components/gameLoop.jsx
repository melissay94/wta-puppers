import React from 'react';
import PropTypes from 'prop-types';

import Memorize from './memorize';
import Guess from './guess';

class GameLoop extends React.Component {

  componentDidMount() {
    const people = this.props.people;
    const visiblePeople = [];

    if (people.length > 1) {
      for (var i = 0; i < 20; i++) {
        const random = Math.floor(Math.random() * people.length);
        // Checking if someone is already in the array
        if (visiblePeople.indexOf(people[random]) < 0) {
          visiblePeople.push(people[random]);
        } else {
          i--;
        }
      }
    }
    this.props.setCurrentPeople(visiblePeople);
  }

  render() {
    let gameView;
    switch (this.props.gameState) {
      case 'memorize': 
        gameView = <Memorize
          currentPeople={this.props.currentPeople}
          counter={this.props.counter}
          incrementCounter={this.props.incrementCounter}
          resetCounter={this.props.resetCounter}
          setGameState={this.props.setGameState}
        />;
        break;
      
      case 'guess': 
        gameView = <Guess
          currentPeople={this.props.currentPeople}
          people={this.props.people}
          randomPerson={this.props.randomPerson}
          score={this.props.score}
          mode={this.props.mode}
          setRandomPerson={this.props.setRandomPerson}
          incrementScore={this.props.incrementScore}
          decrementScore={this.props.decrementScore}
        />;
        break;
      
      default:
        gameView = <Memorize
          currentPeople={this.props.currentPeople}
          counter={this.props.counter}
          incrementCounter={this.props.incrementCounter}
          resetCounter={this.props.resetCounter}
          setGameState={this.props.setGameState}
        />;
    }

    return (
      <div id="main">
        {gameView}
      </div>
    );
  }
}

GameLoop.defaultProps = {
  gameState: 'memorize',
};

GameLoop.propTypes = {
  gameState: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  counter: PropTypes.number.isRequired,
  mode: PropTypes.string.isRequired,
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
  setGameState: PropTypes.func.isRequired,
  setRandomPerson: PropTypes.func.isRequired,
  setCurrentPeople: PropTypes.func.isRequired,
  incrementCounter: PropTypes.func.isRequired,
  resetCounter: PropTypes.func.isRequired,
  incrementScore: PropTypes.func.isRequired,
  decrementScore: PropTypes.func.isRequired,
};

export default GameLoop;
