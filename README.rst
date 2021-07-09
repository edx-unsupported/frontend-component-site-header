⛔️ DEPRECATION WARNING 
=======================

**This library is deprecated and will be archived.** 

Its functionality has been moved into `frontend-component-header <https://github.com/edx/frontend-component-header>`__, which should be used for frontend development going forward.  Please contact `@edx/fedx-team <https://github.com/orgs/edx/teams/fedx-team>`__ with any questions.

================================
Frontend Component: Site Header
================================

|Build Status| |Coveralls| |npm_version| |npm_downloads| |license|
|semantic-release|

A reusable React site header component for edX.org.

Usage
--------
Install the component in your project:

``npm i --save @edx/frontend-component-site-header``

The component expects to have react-intl provided as a peer dependency, and to be wrapped inside an IntlProvider element, whether or not your consuming application is actually localized.  For a basic default locale (English) version, you can use the IntlProvider element with no props, as in the sample application in src/index.jsx .

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

.. |Build Status| image:: https://api.travis-ci.com/edx/frontend-component-site-header.svg?branch=master
   :target: https://travis-ci.com/edx/frontend-component-site-header
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
