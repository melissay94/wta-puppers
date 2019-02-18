// Reducer for the gameplay data
export default function reducer(state = {
  counter: 0,
  score: 0,
}, action) {
  switch (action.type) {
    case 'INCREMENT_COUNTER': {
      return { ...state, counter: state.counter + 1 };
    }

    case 'RESET_COUNTER': {
      return { ...state, counter: 0 };
    }

    case 'INCREMENT_SCORE': {
      return { ...state, score: state.score + 2 };
    }

    case 'DECREMENT_SCORE': {
      return { ...state, score: state.score - 1 };
    }

    case 'RESET_SCORE': {
      return { ...state, score: 0 };
    }

    default: {
      return state;
    }
  }
}
