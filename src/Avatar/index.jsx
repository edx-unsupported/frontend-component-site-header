import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import DefaultAvatar from '../assets/avatar.svg';

function Avatar({  size, url, alt, className }) {
  return (
    <span 
    style={{

          height: size,
          width: size,
    }}
      className={classNames("avatar d-inline-block rounded-circle", className)}>
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


function AvatarButton({
 avatarOnly, url, alt, className, children, ...attributes
}) {
  if (avatarOnly) {
    return (
      <button
        style={{
          WebkitAppearance: 'none',
          MozAppearance: 'none',
          appearance: 'none',
        }} 
        className={classNames('border-0', className)}
        {...attributes}
      >
        <Avatar src={url} />
      </button>
    );
  }
  return (
    <button
      className={classNames('btn btn-avatar', className)}
      {...attributes}
    >
      <Avatar className="mr-2" url={url} alt={alt} />
      {children}
    </button>
  );
}

AvatarButton.propTypes = {
  url: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
  ]),
};

AvatarButton.defaultProps = {
  url: null,
  alt: null,
  className: null,
  children: null,
};

export { AvatarButton };
export default Avatar;
