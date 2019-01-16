import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import withCSSUtilityClasses from './withCSSUtilityClasses';

function Container(props) {
  const baseClassName = props.fluid ? 'container-fluid' : 'container';
  return (
    <div className={classNames(baseClassName, props.className)}>{props.children}</div>
  );
}

function Row(props) {
  return (
    <div className={classNames('row', props.className)}>{props.children}</div>
  );
}

function Col(props) {
  return (
    <div className={classNames('col', props.className)}>{props.children}</div>
  );
}

function Box(props) {
  return (
    <div className={classNames(props.className)}>{props.children}</div>
  );
}

const commonPropTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Container.propTypes = {
  fluid: PropTypes.bool,
  ...commonPropTypes,
};

Container.defaultProps = {
  fluid: false,
};


Row.propTypes = {
  ...commonPropTypes,
};


Col.propTypes = {
  ...commonPropTypes,
};


Box.propTypes = {
  ...commonPropTypes,
};


const RowWithUtilityClasses = withCSSUtilityClasses(Row);
const ColWithUtilityClasses = withCSSUtilityClasses(Col);
const ContainerWithUtilityClasses = withCSSUtilityClasses(Container);
const BoxWithUtilityClasses = withCSSUtilityClasses(Box);

export {
  ContainerWithUtilityClasses as Container,
  RowWithUtilityClasses as Row,
  ColWithUtilityClasses as Col,
  BoxWithUtilityClasses as Box,
};
