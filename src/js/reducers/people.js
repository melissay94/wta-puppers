// Reducer for state of fetching data from the willowtree api
export default function reducer(state = {
  breeds: {},
  currentPuppers: [],
  randomPupper: {},
  fetching: false,
  fetched: false,
  error: null,
}, action) {
  switch (action.type) {
    case 'FETCH_BREEDS': {
      return {
        ...state,
        fetching: true,
      };
    }
    case 'FETCH_BREEDS_REJECTED': {
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };
    }
    case 'FETCH_BREEDS_FULFILLED': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        breeds: action.payload,
      };
    }
    case 'FETCH_RANDOM_PUPPER': {
      return {
        ...state,
        fetching: true,
      }
    }
    case 'FETCH_RANDOM_PUPPER_REJECTED': {
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };
    }
    case 'FETCH_RANDOM_PUPPER_FULFILLED': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        currentPuppers: [...state.currentPuppers, action.payload],
      }
    }
    case 'SET_CURRENT_PUPPERS': {
      return {
        ...state,
        currentPuppers: action.payload,
      };
    }
    case 'SET_RANDOM_PUPPER': {
      return {
        ...state,
        randomPupper: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
