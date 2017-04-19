import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Container extends Component {
  render() {
    return (
      <div className="container-wrapper">
        { this.props.children }
      </div>
    );
  }
}

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Container;
