import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import DefaultAvatar from './assets/avatar.svg';

function Avatar({
  size,
  src,
  alt,
  className,
}) {
  return (
    <span
      style={{ height: size, width: size }}
      className={classNames('avatar overflow-hidden d-inline-flex rounded-circle', className)}
    >
      <img className="d-block w-100 h-100" src={src} alt={alt} />
    </span>
  );
}

Avatar.propTypes = {
  src: PropTypes.string,
  size: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
};

Avatar.defaultProps = {
  src: DefaultAvatar,
  size: '2rem',
  alt: null,
  className: null,
};

export default Avatar;
