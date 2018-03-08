import React from 'react';
import PropTypes from 'prop-types';

import 'scss/people.scss';

// Component for creating a grid of puppers from data fetched from API
class People extends React.Component {
  constructor(props) {
    super(props);
    this.handleGuess = this.handleGuess.bind(this);
    this.state = {
      foundPuppers: [],
      correctGuesses: 0,
    };
  }

// Makes sure there is a random pupper when the page loads
  componentDidMount() {
    this.generateRandomPupper();
  }

// Picks a random value from the 20 puppers to choose from
  generateRandomPupper() {
    const randomIndex = Math.floor(Math.random() * this.props.currentPuppers.length);
    const randomPupper = this.props.currentPuppers[randomIndex];
    if (this.state.foundPuppers.indexOf(randomPupper.id) < 0) {
      this.props.setRandomPupper(randomPupper);
    } else {
      this.generateRandomPupper();
    }
  }

  // Handles logic for when player clicks on a picture
  handleGuess(pupper) {
    // Correct guess increases score and adds that pupper to the list of correct guesses
    if (pupper.id === this.props.randomPupper.id) {
      this.props.incrementScore();
      this.setState({
        foundPuppers: this.state.foundPuppers.concat(pupper.id),
        correctGuesses: this.state.correctGuesses + 1,
      });
      document.getElementById(pupper.id).className += ' discovered';
      this.generateRandomPupper();
    } else if (this.props.score > 0) {
      // Incorrect guess decreases score
      this.props.decrementScore();
    }
  }

  // Render component for a grid of images based on array of puppers objects
  render() {
    const puppers = this.props.currentPuppers;

    const defaultUrl = '//images.contentful.com/3cttzl4i3k1h/5ZUiD3uOByWWuaSQsayAQ6/c630e7f851d5adb1876c118dc4811aed/featured-image-TEST1.png';
    let mappedPuppers;

    if (puppers) {
      mappedPuppers = puppers.map(pupper =>
        <div className="card " id={pupper.id} key={pupper.id} onClick={e => this.handleGuess(pupper)}>
          <div className="card-img-container">
            <img className="card-img-top" src={pupper.image? pupper.image : defaultUrl} alt={pupper.breed} />
          </div>
        </div>
      );
    } else {
      mappedPuppers = null;
    }

    return (
      <div className="container-fluid">{mappedPuppers}</div>
    );
  }
}

// Define prop types
People.propTypes = {
  currentPuppers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      breed: PropTypes.string,
      image: PropTypes.string,
    }).isRequired
  ).isRequired,
  randomPupper: PropTypes.shape({
    id: PropTypes.string,
    breed: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
  score: PropTypes.number.isRequired,
  mode: PropTypes.string.isRequired,
  setRandomPupper: PropTypes.func.isRequired,
  incrementScore: PropTypes.func.isRequired,
  decrementScore: PropTypes.func.isRequired,
};

export default People;
