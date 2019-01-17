import React from 'react';
import ReactDOM from 'react-dom';
import { Hyperlink } from '@edx/paragon';
import SiteHeader from '../../src/index';

import './index.scss';

import EdxLogo from './edx-sm.png';

// import MENU_ITEMS from './MenuItems.constants';

const App = () => (
  <div>
    <SiteHeader
      menuItems={null}
      logo={EdxLogo}
      logoDestination="https://edx.org"
      logoAltText="edX"
      accountMenu={{
        avatar: 'https://www.fillmurray.com/100/100',
        username: 'abutterw',
        menuContent: (
          <div>
            <Hyperlink className="btn btn-outline-secondary btn-block" content="Logout" destination="#" />
          </div>
        ),
      }}
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
