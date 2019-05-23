import React from 'react';
import Responsive from 'react-responsive';

// Components
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';


function SiteHeader(props) {
  return (
    <React.Fragment>
      <Responsive maxWidth={768}>
        <MobileHeader {...props} />
      </Responsive>
      <Responsive minWidth={769}>
        <DesktopHeader {...props} />
      </Responsive>
    </React.Fragment>
  );
}


export default SiteHeader;
