import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

function Avatar({ url, alt, className }) {
  const theClassName = classNames('avatar', 'rounded-circle', className);

  if (url) {
    return <img className={theClassName} src={url} alt={alt} />;
  }

  return <span className={theClassName} />;
}

Avatar.propTypes = {
  url: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
};

Avatar.defaultProps = {
  url: null,
  alt: null,
  className: null,
};


function AvatarButton({
  url, alt, className, children, ...props
}) {
  return (
    <a
      className={classNames('btn btn-avatar', className)}
      {...props}
    >
      <Avatar url={url} alt={alt} />
      {children}
    </a>
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
