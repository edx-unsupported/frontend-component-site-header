import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';


const commonPropTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};


function Container(props) {
  const baseClassName = props.fluid ? 'container-fluid' : 'container';
  return (
    <div className={classNames(baseClassName, props.className)}>{props.children}</div>
  );
}

Container.propTypes = {
  fluid: PropTypes.bool,
  ...commonPropTypes,
};

Container.defaultProps = {
  fluid: false,
};


function Row(props) {
  return (
    <div className={classNames('row', props.className)}>{props.children}</div>
  );
}

Row.propTypes = {
  ...commonPropTypes,
};


function Col(props) {
  return (
    <div className={classNames('col', props.className)}>{props.children}</div>
  );
}

Col.propTypes = {
  ...commonPropTypes,
};


export {
  Container,
  Row,
  Col,
};
