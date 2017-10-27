// Reducer for the state of the view
export default function reducer(state = {
  view: 'start',
  score: 0,
  gameState: 'memorize',
}, action) {
  switch (action.type) {
    case 'SET_VIEW_STATE': {
      return { ...state, view: action.payload };
    }

    case 'SET_SCORE': {
      return { ...state, score: action.payload };
    }

    case 'SET_GAME_STATE': {
      return { ...state, gameState: action.payload };
    }

    default: {
      return state;
    }
  }
}
