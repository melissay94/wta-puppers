import axios from 'axios';

// Use axios to get breed list from the api
export const fetchBreeds = () => {
  return (dispatch) => {
    dispatch({ type: 'FETCH_BREEDS' });

    axios.get('https://dog.ceo/api/breeds/list/all')
      .then((response) => {
        dispatch({ type: 'FETCH_BREEDS_FULFILLED', payload: response.data.message });
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_BREEDS_REJECTED', payload: err });
      });
  };
};

// Use axios to get random breed picture
export const fetchRandomPupper = (breed, id) => {
  return (dispatch) => {
    dispatch({ type: 'FETCH_RANDOM_PUPPER'});
    axios.get('https://dog.ceo/api/breed/' + breed + '/images/random')
      .then((response) => {
        dispatch({ type: 'FETCH_RANDOM_PUPPER_FULFILLED', payload: {
            id: id,
            breed: breed,
            image: response.data.message 
          }
        });
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_RANDOM_PUPPER_REJECTED', payload: err });
      });
  };
};

export const setCurrentPuppers = (currentPuppers) => {
  return {
    type: 'SET_CURRENT_PUPPERS',
    payload: currentPuppers,
  };
};

export const setRandomPupper = (randomPupper) => {
  return {
    type: 'SET_RANDOM_PUPPER',
    payload: randomPupper,
  };
};
