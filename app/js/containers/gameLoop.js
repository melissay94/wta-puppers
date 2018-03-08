import { connect } from 'react-redux';

import { setGameState } from '../actions/general';
import { setRandomPupper, fetchRandomPupper, setCurrentPuppers } from '../actions/people';
import { incrementCounter, resetCounter, incrementScore, decrementScore } from '../actions/gameplay';
import GameLoop from '../components/gameLoop';

const mapStateToProps = (state) => {
  return {
    gameState: state.general.gameState,
    setCurrentPuppers: state.people.setCurrentPuppers,
    currentPuppers: state.people.currentPuppers,
    randomPupper: state.people.randomPupper,
    randomPupperIndex: state.people.randomPersonIndex,
    counter: state.gameplay.counter,
    score: state.gameplay.score,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAPupper: (breed, id) => dispatch(fetchRandomPupper(breed, id)),
    setGameState: gameState => dispatch(setGameState(gameState)),
    setRandomPupper: randomPupper => dispatch(setRandomPupper(randomPupper)),
    setCurrentPuppers: currentPuppers => dispatch(setCurrentPuppers(currentPuppers)),
    incrementCounter: () => dispatch(incrementCounter()),
    resetCounter: () => dispatch(resetCounter()),
    incrementScore: () => dispatch(incrementScore()),
    decrementScore: () => dispatch(decrementScore()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameLoop);
