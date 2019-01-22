import React from 'react';
import renderer from 'react-test-renderer';

import HeaderLogo from '../example/src/edx-sm.png';
import SiteHeader from './index';

describe('<SiteHeader />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<SiteHeader
        logo={HeaderLogo}
        logoDestination="http://www.example.com"
        logoAltText="example"
        accountMenu={{
          avatar: 'http://www.example.com/profile/test',
          username: 'test',
          menuContent: (
            <div>
              <a href="http://example.com/logout">Logout</a>
            </div>
          ),
        }}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
