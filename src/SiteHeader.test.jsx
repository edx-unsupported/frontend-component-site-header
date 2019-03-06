import React from 'react';
import renderer from 'react-test-renderer';

import SiteHeader from './index';

describe('<SiteHeader />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<SiteHeader
        logo=""
        logoDestination="https://edx.org"
        logoAltText="edX"
        mainMenu={[
          {
            type: 'menu',
            href: '#',
            content: 'Courses',
            submenuContent: (
              <div>
                <a href="#link">link 1 </a>
                <a href="#link2">link 2 </a>
              </div>
            ),
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
        username="username"
        avatar={null}
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
        loggedOutItems={[
          { type: 'item', href: '#', content: 'Login' },
          { type: 'item', href: '#', content: 'Sign Up' },
        ]}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
