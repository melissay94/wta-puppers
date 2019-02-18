import React from 'react';
import PropTypes from 'prop-types';

import 'scss/people.scss';

// Component for creating a grid of people from data fetched from API
class PeopleRow extends React.Component {

  // Render component
  render() {
    const people = this.props.currentPuppers;
    const defaultUrl = '//images.contentful.com/3cttzl4i3k1h/5ZUiD3uOByWWuaSQsayAQ6/c630e7f851d5adb1876c118dc4811aed/featured-image-TEST1.png';
    let mappedPeople;

    if (people) {
      mappedPeople = people.map(person =>
        <div className="card" key={person.id} style={{ width: 20 + 'rem' }}>
          <div className="card-img-container">
            <img className="card-img-top" src={person.image ? person.image : defaultUrl} alt={person.breed} />
          </div>
          <div className="card-body">
            <h4 className="card-title">{person.breed}</h4>
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

PeopleRow.propTypes = {
  currentPuppers: PropTypes.arrayOf(
    PropTypes.shape({
      breed: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default PeopleRow;
