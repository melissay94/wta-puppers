import { connect } from 'react-redux';

import { setGameState } from '../actions/general';
import { setRandomPerson } from '../actions/people';
import { incrementCounter, resetCounter, incrementScore, decrementScore } from '../actions/gameplay';
import GameLoop from '../components/gameLoop';

const mapStateToProps = (state) => {
  return {
    gameState: state.general.gameState,
    currentPeople: state.people.currentPeople,
    randomPerson: state.people.randomPerson,
    randomPersonIndex: state.people.randomPersonIndex,
    counter: state.gameplay.counter,
    score: state.gameplay.score,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setGameState: gameState => dispatch(setGameState(gameState)),
    setRandomPerson: randomPerson => dispatch(setRandomPerson(randomPerson)),
    incrementCounter: () => dispatch(incrementCounter()),
    resetCounter: () => dispatch(resetCounter()),
    incrementScore: () => dispatch(incrementScore()),
    decrementScore: () => dispatch(decrementScore()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameLoop);
