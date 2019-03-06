===== 
Frontend Component: Site Header 
===== 

|Build Status| |Coveralls| |npm_version| |npm_downloads| |license|
|semantic-release|

A reusable react site header component for edX.org


Usage
--------
Install the component in your project:

``npm i --save @edx/frontend-component-site-header``


In your code:

.. code-block:: javascript

  import { SiteHeader } from "@edx/frontend-component-site-header";
  
  // ...code...

  render() {
    return(
      <SiteHeader
        logo={Logo}
        logoDestination="https://edx.org"
        logoAltText="edX"
        mainMenu={[
          {
            type: 'menu',
            href: '#',
            content: 'Courses',
            submenuContent: (
              <div>
                <a href="#">link 1 </a>
                <a href="#">link 1 </a>
              </div>
            )
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
    )
  }


Development
-------- 
To run this component from the example app, clone this repo, 
run ``npm install``, and then run ``npm start``.


Build the Component Only
--------
``npm run build``


Build the example app.
--------
``npm run build-example``

.. |Build Status| image:: https://api.travis-ci.org/edx/frontend-component-site-header.svg?branch=master
   :target: https://travis-ci.org/edx/frontend-component-site-header
.. |Coveralls| image:: https://img.shields.io/coveralls/edx/frontend-component-site-header.svg?branch=master
   :target: https://coveralls.io/github/edx/frontend-component-site-header
.. |npm_version| image:: https://img.shields.io/npm/v/@edx/frontend-component-site-header.svg
   :target: @edx/frontend-component-site-header
.. |npm_downloads| image:: https://img.shields.io/npm/dt/@edx/frontend-component-site-header.svg
   :target: @edx/frontend-component-site-header
.. |license| image:: https://img.shields.io/npm/l/@edx/frontend-component-site-header.svg
   :target: @edx/frontend-component-site-header
.. |semantic-release| image:: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
   :target: https://github.com/semantic-release/semantic-release
