import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  optionalArray: PropTypes.array,
};
