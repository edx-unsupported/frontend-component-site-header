import React from 'react';
import PropTypes from 'prop-types';
import Responsive from 'react-responsive';

// Components
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';


function SiteHeader(props) {
  return (
    <React.Fragment>
      {props.skipNavId && (
        <div className="position-absolute">
          <a href={`#${props.skipNavId}`} className="skip-nav-link sr-only sr-only-focusable btn btn-primary px-2 py-1 mt-3 ml-2">Skip to main content</a>
        </div>
      )}
      <Responsive maxWidth={768}>
        <MobileHeader {...props} />
      </Responsive>
      <Responsive minWidth={769}>
        <DesktopHeader {...props} />
      </Responsive>
    </React.Fragment>
  );
}

SiteHeader.defaultProps = {
  skipNavId: null,
};

SiteHeader.propTypes = {
  skipNavId: PropTypes.string,
};

export default SiteHeader;
