import { connect } from 'react-redux';

import { setViewState } from '../actions/general';
import { fetchBreeds } from '../actions/people';
import MainComponent from '../index';

const mapStateToProps = (state) => {
  return {
    view: state.general.view,
    breeds: state.people.breeds,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    getBreeds: () => dispatch(fetchBreeds()),
    setView: view => dispatch(setViewState(view)),
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(MainComponent);
