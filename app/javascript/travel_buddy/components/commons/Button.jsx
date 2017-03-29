import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import styles from './Button.sass'

const Button = ({ modifiers, disabled, children, onClick }) => {
  const getClassNames = () =>
    [styles['button'], ...modifiers.map((modifier) => styles[`button--${modifier}`])].join(' ');

  const attributes = {
    className: getClassNames(),
  };

  if (disabled) attributes.disabled = disabled;

  if (onClick) attributes.onClick = onClick;

  return React.createElement('button', attributes, children);
};

Button.defaultProps = {
  modifiers: [],
};

Button.propTypes = {
  modifiers: PropTypes.arrayOf(PropTypes.string),
  disabled: PropTypes.bool,
  children: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
