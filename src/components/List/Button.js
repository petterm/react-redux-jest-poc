import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { onClick, icon, title } = this.props;
    return (
      <button
        className="row-button"
        onClick={e => onClick(e)}
        title={title}
      >
        <span className={`icon-${icon}`}>x</span>
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.string,
  title: PropTypes.string,
};

Button.defaultProps = {
  icon: 'cross',
  title: '',
};

export default Button;

