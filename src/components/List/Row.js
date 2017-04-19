import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Row extends Component {
  render() {
    const { title, rightContent } = this.props;
    return (
      <div>
        <p className="row-title">{ title }</p>
        <div className="row-right-content">{ rightContent }</div>
      </div>
    );
  }
}

Row.propTypes = {
  title: PropTypes.string.isRequired,
  rightContent: PropTypes.element,
};

Row.defaultProps = {
  rightContent: undefined,
};

export default Row;
