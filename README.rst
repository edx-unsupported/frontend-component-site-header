===== 
Frontend Component: Site Header 
===== 
A reusable react site header component for edX.org


Usage
--------
Install the component in your project:
::

npm i --save @edx/frontend-component-site-header


In your code:

.. code-block:: jsx
  import { SiteHeader } from "@edx/frontend-component-site-header";


  render() {
    return(
      <SiteHeader 
        menuItems={...}
        desktopMenuItems={...}
        logo={...}
        logoDestination="..."
        logoAltText="..."
        secondaryMenuItems={...}
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

