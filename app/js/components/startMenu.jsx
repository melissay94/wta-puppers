import React from 'react';
import PropTypes from 'prop-types';

import 'scss/startMenu.scss';
import PageTitle from './title';

class StartMenu extends React.Component {
  constructor(props) {
    super(props);
    this.handleSwitch = this.handleSwitch.bind(this);
  }

  handleSwitch(mode) {
    this.props.setView(mode);
  }

  render() {
    return (
      <div className="container" id="startMenu">
        <PageTitle title="Let's Play the Name Game" />
        <button type="button" className="btn btn-outline-dark" onClick={e => this.handleSwitch('gameLoop')}>Start</button>
        <button type="button" className="btn btn-outline-dark" onClick={e => this.handleSwitch('gameLoopHard')}>Hard Mode</button>
        <div id="rules">
          <h3>How to Play</h3>
          <ol>
            <li>This game has two phases: Memorizing and Remembering!</li>
            <li>Pressing the &ldquo;Start&rdquo; button will begin the Memorizing phase. There are 20 random employees chosen per game!</li>
            <li>The Memorizing phase has four rounds: Each round will have five employees with their picture and name. Remember those faces!!</li>
            <li>Once the rounds are over, all 20 employees will appear on the next screen and one name will be displayed.</li>
            <li>Click the correct employee to gain points! Once you find them, it&#39;s time to move on to the next one.</li>
            <li>Keep going until you have correctly identified everyone in that group. Then the game ends!</li>
            <li>Your score is based on how good your memory is. For every person you get right, you are awarded 2 points. For everyone you get wrong though, you lose a point.</li>
            <li>Most importantly, remember to have fun!</li>
          </ol>
          <h3>HARD MODE</h3>
          <p>All 120 people in the list, find the 20 you saw</p>
        </div>
      </div>
    );
  }
}

StartMenu.propTypes = {
  setView: PropTypes.func.isRequired,
};

export default StartMenu;
