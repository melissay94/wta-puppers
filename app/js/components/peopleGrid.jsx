import React from 'react';
import PropTypes from 'prop-types';

import 'scss/people.scss';

// Component for creating a grid of people from data fetched from API
class People extends React.Component {
  constructor(props) {
    super(props);
    this.handleGuess = this.handleGuess.bind(this);
    this.state = {
      foundPeople: [],
      correctGuesses: 0,
    };
  }

// Makes sure there is a random person when the page loads
  componentDidMount() {
    this.generateRandomPerson();
  }

// Picks a random value from the 20 people to choose from
  generateRandomPerson() {
    const randomIndex = Math.floor(Math.random() * this.props.currentPeople.length);
    const randomPerson = this.props.currentPeople[randomIndex];
    if (this.state.foundPeople.indexOf(randomPerson.id) < 0) {
      this.props.setRandomPerson(randomPerson);
    } else {
      this.generateRandomPerson();
    }
  }

  // Handles logic for when player clicks on a picture
  handleGuess(person) {
    // Correct guess increases score and adds that person to the list of correct guesses
    if (person.id === this.props.randomPerson.id) {
      this.props.incrementScore();
      this.setState({
        foundPeople: this.state.foundPeople.concat(person.id),
        correctGuesses: this.state.correctGuesses + 1,
      });
      document.getElementById(person.id).className += ' discovered';
      this.generateRandomPerson();
    } else if (this.props.score > 0) {
      // Incorrect guess decreases score
      this.props.decrementScore();
    }
  }

  // Render component for a grid of images based on array of people objects
  render() {
    let people;
    if (this.props.mode === 'gameLoopHard') {
      people = this.props.people;
    } else {
      people = this.props.currentPeople;
    }

    const defaultUrl = '//images.contentful.com/3cttzl4i3k1h/5ZUiD3uOByWWuaSQsayAQ6/c630e7f851d5adb1876c118dc4811aed/featured-image-TEST1.png';
    let mappedPeople;

    if (people) {
      mappedPeople = people.map(person =>
        <div className="card " id={person.id} key={person.id} onClick={e => this.handleGuess(person)}>
          <div className="card-img-container">
            <img className="card-img-top" src={person.headshot.url ? person.headshot.url : defaultUrl} alt={person.headshot.alt} />
          </div>
        </div>
      );
    } else {
      mappedPeople = null;
    }

    return (
      <div className="container-fluid">{mappedPeople}</div>
    );
  }
}

// Define prop types
People.propTypes = {
  people: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  currentPeople: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  randomPerson: PropTypes.shape({
    id: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  }).isRequired,
  score: PropTypes.number.isRequired,
  mode: PropTypes.string.isRequired,
  setRandomPerson: PropTypes.func.isRequired,
  incrementScore: PropTypes.func.isRequired,
  decrementScore: PropTypes.func.isRequired,
};

export default People;
