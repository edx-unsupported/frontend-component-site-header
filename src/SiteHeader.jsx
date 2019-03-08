import React from 'react';
import MediaQuery from 'react-responsive';

// Components
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';


function SiteHeader(props) {
  return (
    <React.Fragment>
      <MediaQuery query="(max-width: 768px)">
        <MobileHeader {...props} />
      </MediaQuery>
      <MediaQuery query="(min-width: 769px)">
        <DesktopHeader {...props} />
      </MediaQuery>
    </React.Fragment>
  );
}


export default SiteHeader;
