import React from 'react';
import ReactDOM from 'react-dom';
import SiteHeader from '../../src/index';

import './index.scss';

import Logo from './assets/logo.svg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true,
    };
  }

  render() {
    return (
      <div>
        <SiteHeader
          logo={Logo}
          logoDestination="https://edx.org"
          logoAltText="edX"
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
          loggedIn={this.state.loggedIn}
          username={this.state.loggedIn ? 'username' : null}
          avatar={this.state.loggedIn ? Logo : null}
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
        />
        <div className="py-5">
          <button
            className="btn btn-primary"
            onClick={() => {
              this.setState({ loggedIn: !this.state.loggedIn });
            }}
          >
            Toggle Logged In state
          </button>
        </div>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
