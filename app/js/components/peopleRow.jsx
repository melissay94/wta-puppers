import React from 'react';
import PropTypes from 'prop-types';

import 'scss/people.scss';

// Component for creating a grid of people from data fetched from API
class PeopleRow extends React.Component {

  // Render component
  render() {
    const people = this.props.currentPeople;
    const defaultUrl = '//images.contentful.com/3cttzl4i3k1h/5ZUiD3uOByWWuaSQsayAQ6/c630e7f851d5adb1876c118dc4811aed/featured-image-TEST1.png';
    let mappedPeople;

    if (people) {
      mappedPeople = people.map(person =>
        <div className="card" key={person.id} style={{ width: 20 + 'rem' }}>
          <div className="card-img-container">
            <img className="card-img-top" src={person.headshot.url ? person.headshot.url : defaultUrl} alt={person.headshot.alt} />
          </div>
          <div className="card-body">
            <h4 className="card-title">{person.firstName} {person.lastName}</h4>
            <h4 className="card-text">{person.jobTitle}</h4>
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
  currentPeople: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default PeopleRow;
