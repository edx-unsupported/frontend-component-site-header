import React from 'react';
import ReactDOM from 'react-dom';
import SiteHeader from '../../src/index';

import './index.scss';

import Logo from './assets/logo.svg';


const App = () => (
  <div>
    <SiteHeader
      mainMenu={[
        {
          type: 'item',
          href: '#',
          content: 'Courses',
        },
        {
          type: 'item',
          href: '#',
          content: 'Programs',
        },
        {
          type: 'item',
          href: '#',
          content: 'Schools & Partners',
        },
      ]}
      logo={Logo}
      logoDestination="https://edx.org"
      logoAltText="edX"
      loggedIn={false}
      loggedOutItems={[
        { type: 'item', href: '#', content: 'Login' },
        { type: 'item', href: '#', content: 'Sign Up' },
      ]}
      username="username"
      avatar={Logo}
      userMenu={[
        {
          type: 'item',
          href: '#',
          content: 'Dashboard',
        },
        {
          type: 'item',
          href: '#',
          content: 'Profile',
        },
        {
          type: 'item',
          href: '#',
          content: 'Account Settings',
        },
        {
          type: 'item',
          href: '#',
          content: 'Help',
        },
        {
          type: 'item',
          href: '#',
          content: 'Logout',
        },
      ]}
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
