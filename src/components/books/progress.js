import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from '@material-ui/core';

const Bookprogress = ({ progress }) => (
  <article>
    <span className="book-progress d-flex a-center j-center">
      <CircularProgress
        color="inherit"
        size={75}
        thickness={2}
        className="my-blue"
        variant="determinate"
        value={progress}
      />
      <div className="percent d-flex f-col a-center j-center">
        <h3>
          {progress}
          %
        </h3>
        <p>completed</p>
      </div>
    </span>
  </article>
);

Bookprogress.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default Bookprogress;
