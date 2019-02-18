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
        <PageTitle title="Let's Play Pupper!" />
        <button type="button" className="btn btn-outline-dark" onClick={e => this.handleSwitch('gameLoop')}>Start</button>
        <button type="button" className="btn btn-outline-dark">Hard Mode</button>
        <div id="rules">
          <h3>How to Play</h3>
          <ol>
            <li>This game has two phases: Memorize and Recall!</li>
            <li>Pressing the &ldquo;Start&rdquo; button will begin the Memorize phase. There are 20 random puppers chosen per game!</li>
            <li>The Memorize phase has four rounds: Each round will have five puppers with their picture and breed. Remember those puppers!!</li>
            <li>Once the rounds are over, all 20 puppers will appear on the next screen and one breed will be displayed.</li>
            <li>Click the correct pupper to gain points! Once you find them, it&#39;s time to move on to the next one.</li>
            <li>Keep going until you have correctly identified every pupper in that group. Then the game ends!</li>
            <li>Your score is based on how good your memory is. For every breed you get right, you are awarded 2 points. For every breed you get wrong though, you lose a point.</li>
            <li>Most importantly, remember to have fun!</li>
          </ol>
        </div>
      </div>
    );
  }
}

StartMenu.propTypes = {
  setView: PropTypes.func.isRequired,
};

export default StartMenu;
