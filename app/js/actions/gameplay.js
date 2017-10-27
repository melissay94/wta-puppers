// Action for changing our score and counter
export const incrementCounter = () => {
  return { type: 'INCREMENT_COUNTER' };
};

export const resetCounter = () => {
  return { type: 'RESET_COUNTER' };
};

export const incrementScore = () => {
  return { type: 'INCREMENT_SCORE' };
};

export const decrementScore = () => {
  return { type: 'DECREMENT_SCORE' };
};

export const resetScore = () => {
  return { type: 'RESET_SCORE' };
};
