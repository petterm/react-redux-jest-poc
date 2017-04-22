import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { title, buttons } = this.props;
    return (
      <div>
        <h3 className="header-title">{ title }</h3>
        <div className="header-right">
          { buttons }
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  buttons: PropTypes.arrayOf(PropTypes.element),
};

Header.defaultProps = {
  buttons: [],
};

export default Header;
