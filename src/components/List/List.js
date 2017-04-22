import React, { Component } from 'react';
import PropTypes from 'prop-types';

class List extends Component {
  render() {
    const { disabled } = this.props;
    const disabledClass = disabled ? 'disabled' : '';
    return (
      <div className={`list ${disabledClass}`}>
        { this.props.children }
      </div>
    );
  }
}

List.propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

List.defaultProps = {
  disabled: false,
};

export default List;
