import React from 'react';
import PropTypes from 'prop-types';


function Logo({ src, alt, ...attributes }) {
  return (
    <img src={src} alt={alt} {...attributes} />
  );
}

function LinkedLogo({ url, src, alt, ...attributes }) {
  return (
    <a href={url} {...attributes}>
      <img className="d-block" src={src} alt={alt} />
    </a>
  );
}

export { LinkedLogo };
export default Logo;