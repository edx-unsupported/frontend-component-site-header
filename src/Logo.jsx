import React from 'react';
import PropTypes from 'prop-types';


function Logo({ src, alt, ...attributes }) {
  return (
    <img src={src} alt={alt} {...attributes} />
  );
}

function LinkedLogo({ href, src, alt, ...attributes }) {
  return (
    <a href={href} {...attributes}>
      <img className="d-block" src={src} alt={alt} />
    </a>
  );
}

export { LinkedLogo };
export default Logo;