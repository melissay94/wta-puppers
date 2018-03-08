import React from 'react';
import PropTypes from 'prop-types';

import Memorize from './memorize';
import Guess from './guess';

class GameLoop extends React.Component {

  componentDidMount() {
    const breeds = this.props.breeds;

    const breedKeys = Object.keys(breeds);

    for (var i = 0; i < 20; i++) {
      const pupperId = 'pupper_' + i;
      this.props.getAPupper(breedKeys[i], pupperId);
    }
  }

  render() {
    let gameView;
    if (this.props.currentPuppers.length > 0) {
      switch (this.props.gameState) {
        case 'memorize': 
          gameView = <Memorize
            currentPuppers={this.props.currentPuppers}
            counter={this.props.counter}
            incrementCounter={this.props.incrementCounter}
            resetCounter={this.props.resetCounter}
            setGameState={this.props.setGameState}
          />;
          break;
        
        case 'guess': 
          gameView = <Guess
            currentPuppers={this.props.currentPuppers}
            breeds={this.props.breeds}
            randomPupper={this.props.randomPupper}
            score={this.props.score}
            mode={this.props.mode}
            setRandomPupper={this.props.setRandomPupper}
            incrementScore={this.props.incrementScore}
            decrementScore={this.props.decrementScore}
          />;
          break;
        
        default:
          gameView = <Memorize
            currentPuppers={this.props.currentPuppers}
            counter={this.props.counter}
            incrementCounter={this.props.incrementCounter}
            resetCounter={this.props.resetCounter}
            setGameState={this.props.setGameState}
          />;
      }
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
  setGameState: PropTypes.func.isRequired,
  setRandomPupper: PropTypes.func.isRequired,
  setCurrentPuppers: PropTypes.func.isRequired,
  incrementCounter: PropTypes.func.isRequired,
  resetCounter: PropTypes.func.isRequired,
  incrementScore: PropTypes.func.isRequired,
  decrementScore: PropTypes.func.isRequired,
};

export default GameLoop;
