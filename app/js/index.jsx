import React from 'react';
import PropTypes from 'prop-types';
import 'scss/index.scss';

import StartMenu from './components/startMenu';
import GameLoop from './containers/gameLoop';

class MainComponent extends React.Component {

  // Calls the API to get all the data right at the top
  componentDidMount() {
    this.props.getData();
  }

  // Active view is set by the start buttons or the default value
  render() {
    let activeView;
    switch (this.props.view) {
      case 'start':
        activeView = <StartMenu view={this.props.view} setView={this.props.setView} />;
        break;
      case 'gameLoop':
        activeView = <GameLoop setCurrentPeople={this.props.setCurrentPeople} people={this.props.people} mode={this.props.view} />;
        break;
      case 'gameLoopHard':
        activeView = <GameLoop setCurrentPeople={this.props.setCurrentPeople} people={this.props.people} mode={this.props.view} />;
        break;
      default:
        activeView = <StartMenu view={this.props.view} setView={this.props.setView} />;
        break;
    }
    return (
      <div id="main">
        {activeView}
      </div>
    );
  }
}

MainComponent.defaultProps = {
  view: 'start',
};

MainComponent.propTypes = {
  view: PropTypes.string.isRequired,
  people: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  setView: PropTypes.func.isRequired,
  getData: PropTypes.func.isRequired,
  setCurrentPeople: PropTypes.func.isRequired,
};

export default MainComponent;
