import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import DefaultAvatar from '../assets/avatar.svg';

function Avatar({  size, url, alt, className }) {
  return (
    <span 
      style={{ height: size, width: size }}
      className={classNames("avatar d-inline-block rounded-circle", className)}
    >
      <img className="w-100" src={url || DefaultAvatar} alt={alt} />
    </span>
  );
}

Avatar.propTypes = {
  url: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
};

Avatar.defaultProps = {
  size: '2rem',
  url: null,
  alt: null,
  className: null,
};

export default Avatar;
