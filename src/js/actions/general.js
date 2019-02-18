// Action for setting the view state
export const setViewState = (view) => {
  return {
    type: 'SET_VIEW_STATE',
    payload: view,
  };
};

export const setScore = (score) => {
  return {
    type: 'SET_SCORE',
    payload: score,
  };
};

export const setGameState = (gameState) => {
  return {
    type: 'SET_GAME_STATE',
    payload: gameState,
  };
};
