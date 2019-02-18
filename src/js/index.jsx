import React from 'react';
import PropTypes from 'prop-types';
import 'scss/index.scss';

import StartMenu from './components/startMenu';
import GameLoop from './containers/gameLoop';

class MainComponent extends React.Component {

  // Calls the API to get all the data right at the top
  componentDidMount() {
    this.props.getBreeds();
  }

  // Active view is set by the start buttons or the default value
  render() {
    let activeView;
    switch (this.props.view) {
      case 'start':
        activeView = <StartMenu view={this.props.view} setView={this.props.setView} />;
        break;
      case 'gameLoop':
        activeView = <GameLoop breeds={this.props.breeds} mode={this.props.view} />;
        break;
      case 'gameLoopHard':
        activeView = <GameLoop breeds={this.props.breeds} mode={this.props.view} />;
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
  breeds: PropTypes.objectOf(
    PropTypes.arrayOf(PropTypes.string).isRequired
  ).isRequired,
  setView: PropTypes.func.isRequired,
  getBreeds: PropTypes.func.isRequired,
};

export default MainComponent;
