import { connect } from 'react-redux';

import { setViewState } from '../actions/general';
import { fetchPeople, setCurrentPeople } from '../actions/people';
import MainComponent from '../index';

const mapStateToProps = (state) => {
  return {
    view: state.general.view,
    people: state.people.people,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    getData: () => dispatch(fetchPeople()),
    setCurrentPeople: currentPeople => dispatch(setCurrentPeople(currentPeople)),
    setView: view => dispatch(setViewState(view)),
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(MainComponent);
