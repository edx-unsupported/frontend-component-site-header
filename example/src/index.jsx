
import React from 'react';
import ReactDOM from 'react-dom';
import SiteHeader from '../../src/index.jsx';

import './index.scss';

import EdxLogo from './edx-sm.png';

import { MENU_ITEMS, SECONDARY_MENU_ITEMS } from './MenuItems.constants.jsx';

const App = () => (
  <div>
    <SiteHeader
      menuItems={MENU_ITEMS}
      desktopMenuItems={MENU_ITEMS}
      logo={EdxLogo}
      logoDestination="https://edx.org"
      logoAltText="edX"
      secondaryMenuItems={SECONDARY_MENU_ITEMS}
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
