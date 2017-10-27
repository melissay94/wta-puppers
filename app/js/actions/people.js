import axios from 'axios';

// Use axios to get willowtree data from the api
export const fetchPeople = () => {
  return (dispatch) => {
    dispatch({ type: 'FETCH_PEOPLE' });

    axios.get('https://willowtreeapps.com/api/v1.0/profiles')
      .then((response) => {
        dispatch({ type: 'FETCH_PEOPLE_FULFILLED', payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_PEOPLE_REJECTED', payload: err });
      });
  };
};

export const setCurrentPeople = (currentPeople) => {
  return {
    type: 'SET_CURRENT_PEOPLE',
    payload: currentPeople,
  };
};

export const setRandomPerson = (randomPerson) => {
  return {
    type: 'SET_RANDOM_PERSON',
    payload: randomPerson,
  };
};
