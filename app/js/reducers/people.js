// Reducer for state of fetching data from the willowtree api
export default function reducer(state = {
  people: [],
  currentPeople: [],
  randomPerson: {},
  fetching: false,
  fetched: false,
  error: null,
}, action) {
  switch (action.type) {
    case 'FETCH_PEOPLE': {
      return {
        ...state,
        fetching: true,
      };
    }
    case 'FETCH_PEOPLE_REJECTED': {
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };
    }
    case 'FETCH_PEOPLE_FULFILLED': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        people: action.payload,
      };
    }
    case 'SET_CURRENT_PEOPLE': {
      return {
        ...state,
        currentPeople: action.payload,
      };
    }
    case 'SET_RANDOM_PERSON': {
      return {
        ...state,
        randomPerson: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
