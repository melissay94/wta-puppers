import React from 'react';
import PropTypes from 'prop-types';

const PageTitle = ({ title }) => {
  return (
    <span>
      <h1>{title}</h1>
    </span>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageTitle;
