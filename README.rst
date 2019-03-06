===== 
Frontend Component: Site Header 
===== 
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

