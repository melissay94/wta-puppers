import React from 'react';
import PropTypes from 'prop-types';
import CountDown from 'react-countdown-clock';

class CountDownTimer extends React.Component {
  constructor(props) {
    super(props);

    this.handleCounter = this.handleCounter.bind(this);
    this.state = {
      timeLeft: 10,
      counter: 0,
    };
  }

  // Will reset the timer 4 times, one for each found of faces
  handleCounter() {
    if (this.props.counter < 3) {
      this.props.incrementCounter();
      // Slight addition of a random number to trigger the reset
      this.setState({ timeLeft: this.state.timeLeft + (Math.random() * 0.01) });
    } else {
      this.props.setGameState('guess');
      this.props.resetCounter();
    }
  }

  render() {
    return (
      <div id="timer">
        <CountDown
          seconds={this.state.timeLeft}
          color="#1cd9c3;"
          size={200}
          onComplete={this.handleCounter}
        />
      </div>
    );
  }
}

CountDownTimer.propTypes = {
  counter: PropTypes.number.isRequired,
  incrementCounter: PropTypes.func.isRequired,
  setGameState: PropTypes.func.isRequired,
  resetCounter: PropTypes.func.isRequired,
};

export default CountDownTimer;
