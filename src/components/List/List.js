import React, { Component } from 'react';
import PropTypes from 'prop-types';

class List extends Component {
  render() {
    return (
      <div className="list">
        { this.props.children }
      </div>
    );
  }
}

List.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default List;
