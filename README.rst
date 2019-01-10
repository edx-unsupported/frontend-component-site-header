===== 
Frontend Component: Site Header 
===== 
A reusable react site header component for edX.org


Usage
--------
Install the component in your project:

npm i --save @edx/frontend-component-site-header


In your code:

import { SiteHeader } from "@edx/frontend-component-site-header";

...

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
Install
npm install

Start the example dev server
npm start


Build the Component Only
--------
npm run build


Build the example app.
--------
npm run build-example

