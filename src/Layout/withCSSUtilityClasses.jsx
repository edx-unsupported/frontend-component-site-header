import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _ from 'lodash';


const breakpoints = ['-xs', '', '-sm', '-md', '-lg', '-xl'];

const BootstrapUtilityClasses = [
  'position-static',
  'position-relative',
  'position-absolute',
  'position-fixed',
  'position-sticky',
].concat(breakpoints.flatMap(breakpoint => [
  // Display Utilities
  `d${breakpoint}-none`,
  `d${breakpoint}-inline`,
  `d${breakpoint}-inline-block`,
  `d${breakpoint}-block`,
  `d${breakpoint}-table`,
  `d${breakpoint}-table-row`,
  `d${breakpoint}-table-cell`,
  `d${breakpoint}-flex`,
  `d${breakpoint}-inline-flex`,

  // Flex Utilities
  `flex${breakpoint}-row`,
  `flex${breakpoint}-column`,
  `flex${breakpoint}-row-reverse`,
  `flex${breakpoint}-column-reverse`,

  `flex${breakpoint}-wrap`,
  `flex${breakpoint}-nowrap`,
  `flex${breakpoint}-wrap-reverse`,
  `flex${breakpoint}-fill`,
  `flex${breakpoint}-grow-0`,
  `flex${breakpoint}-grow-1`,
  `flex${breakpoint}-shrink-0`,
  `flex${breakpoint}-shrink-1`,

  `justify-content${breakpoint}-start`,
  `justify-content${breakpoint}-end`,
  `justify-content${breakpoint}-center`,
  `justify-content${breakpoint}-between`,
  `justify-content${breakpoint}-around`,

  `align-items${breakpoint}-start`,
  `align-items${breakpoint}-end`,
  `align-items${breakpoint}-center`,
  `align-items${breakpoint}-baseline`,
  `align-items${breakpoint}-stretch`,

  `align-content${breakpoint}-start`,
  `align-content${breakpoint}-end`,
  `align-content${breakpoint}-center`,
  `align-content${breakpoint}-between`,
  `align-content${breakpoint}-around`,
  `align-content${breakpoint}-stretch`,

  `align-self${breakpoint}-auto`,
  `align-self${breakpoint}-start`,
  `align-self${breakpoint}-end`,
  `align-self${breakpoint}-center`,
  `align-self${breakpoint}-baseline`,
  `align-self${breakpoint}-stretch`,
]));


// This function takes a component...
const withCSSUtilityClasses = WrappedComponent => (props) => {
  const classNameArr = _.intersection(BootstrapUtilityClasses, Object.keys(props));

  const passthroughProps = _.omit(props, classNameArr, 'className');
  // ... and renders the wrapped component with the fresh data!
  // Notice that we pass through any additional props
  return (
    <WrappedComponent
      className={classNames(classNameArr, props.className)}
      {...passthroughProps}
    />
  );
};


withCSSUtilityClasses.propTypes = {
  className: PropTypes.string,
};

withCSSUtilityClasses.defaultProps = {
  className: null,
};


export default withCSSUtilityClasses;

